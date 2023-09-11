require('dotenv').config()
const nodemailer = require("nodemailer");
// const bot = require("./botconfig.json");
// const fs = require('fs')


const sender = async (req, res) => {

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

    // let pushAddress = "";
    //   for (let i = 0; i < targetList.length; i++) {
    //     pushAddress += targetList[i];
    //     pushAddress += i < targetList.length - 1 ? ',' : '';
    //   }
    // let htmlTemplate = '';
    let emailGenerate = new Promise((resolve, reject) => {
        transporter.sendMail({
            from: process.env.EMAIL_SENDER,
            to: req.body.email,
            subject: req.body.message,
            text: JSON.stringify(req.body)
            // html: `${htmlTemplate}`
        }, (err, info) => {
            if (err)
                reject(err)
            else
                resolve(info.response);
        });

    });
    // (resolve, reject) => {
    // fs.readFile('./template/template.html', 'utf-8', (err, data) => {
    //     if (err) reject(err);
    //     let insert_pos = data.indexOf('%insert_movie%');
    //     let list_elements = '';

    //     for (const [key, value] of Object.entries(pNewMovies)) {
    //         list_elements += `<li><a style="color:#ffb741;
    //     " href="https://www.allocine.fr${value}">${key}</a></li>`;
    //     };
    //     data = data.slice(0, insert_pos) + list_elements + data.slice(insert_pos + 15);
    //     htmlTemplate = data;
    //     resolve();
    // });
    // }


    emailGenerate.then((response) => {
        console.log("Response : " + response);
        res.status(200).render("index");
    }).catch((err) => {
        res.status(500).render("error", { error: err })
    })



};

module.exports = sender;