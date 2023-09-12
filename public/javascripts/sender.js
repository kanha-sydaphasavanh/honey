require('dotenv').config()
const nodemailer = require("nodemailer");
const multer = require("multer");
// const bot = require("./botconfig.json");
const fs = require('fs');
const { Stream } = require('stream');
// const memoryStorage = multer.memoryStorage();
// const upload = multer({ storage: memoryStorage });

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    debug: true,
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_SENDER_PASSWORD,
    },
});

// const uploadAttachmentFile = async (req) => {
//     return new Promise((resolve, reject) => {
//         upload.single('fs')(req, null, (err) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(req);
//             }
//         });
//     });
// }
async function supprimerFichier(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            res.status(400).json('Erreur lors de la suppression du fichier :', err);
            // console.error('Erreur lors de la suppression du fichier :', err);
        }
    });
}
async function readFile(filePath) {
    fs.createReadStream(filePath, err => {
        if (err)
            res.status(500).json(err);
    }).once;
    
}
const sender = async (req, res) => {

    const mailOpts = {
        from: process.env.EMAIL_SENDER,
        to: req.body.email,
        subject: req.body.message,
        text: JSON.stringify(req.body)
    }

    let emailGenerate = new Promise((resolve, reject) => {
        transporter.sendMail(mailOpts, (err, info) => {
            if (err)
                reject(err)
            else
                resolve(info.response);
        });
    });

    mailOpts.attachments = [
        {
            filename: req.body.file.originalname,
            content: readFile(req.body.file.path)
        },
    ];
    // if (req.body.file) {
    //     await supprimerFichier(req.body.file.path)
    // }
    console.log(mailOpts);

    // res.status(200).json(req.body)
    emailGenerate.then((response) => {
        console.log("Response : " + response);
        res.status(200).redirect('/');
    }).catch((err) => {
        res.status(500).render("error", { error: err })
    })
};

module.exports = sender;