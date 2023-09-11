require('dotenv').config()
const nodemailer = require("nodemailer");

const sender = async (req, res) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.EMAIL_SENDER_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL_SENDER,
        to: req.body.email,
        subject: req.body.message,
        text: JSON.stringify(req.body)
      })
      .then((result)=>{
          console.info(`notification send : ${result.messageId}`)
        res.status(200).render("index");
      }).catch((error)=>{
        res.status(500).render("error", { error: err });
      })
}

module.exports = sender;