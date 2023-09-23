require('dotenv').config()
const nodemailer = require("nodemailer");
const multer = require("multer");
// const bot = require("./botconfig.json");
const fs = require('fs');
// const { Stream } = require('stream');


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

const sender = async (req, res) => {
    const mailOpts = {
        from: process.env.EMAIL_SENDER,
        to: req.body.email,
        subject: req.body.message,
        text: JSON.stringify(req.body)
    }


    let emailGenerate = new Promise((resolve, reject) => {
        if (req.body.file) {
            const fileStream = fs.createReadStream(req.body.file.path);

            fileStream.on('open', (data, err) => {
                if (err) reject(err)
                mailOpts.attachments = [
                    {
                        filename: req.body.file.originalname,
                        content: fileStream
                    },
                ];
                resolve(data);
            })
        } else {
            resolve();
        }
    });


    emailGenerate
        .then(() => {
            transporter.sendMail(mailOpts, () => {
                res.status(200).redirect('/');
            });
        })
        .then(() => {
            if (req.body.file)
                fs.unlink(req.body.file.path, (err) => {
                    if (err) res.status(500).json({ err: err })
                });
        })
        .catch((err) => {
            res.status(500).render("error", { error: err })
        })
};

module.exports = sender;