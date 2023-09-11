// const sender = require("../public/javascripts/sender")
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  debug: true,
  auth: {
    user: "k.sydaphasavanh@gmail.com",
    pass: "gzumnkugwjamrtdp",
  },
});

const orderController = (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const phone = req.body.phone;
  const message = req.body.message;
  console.log( typeof email + ' / ' + typeof name + '/' + typeof phone + '/' +  typeof message);

  const mail = {
    from: "k.sydaphasavanh@gmail.com",
    to: email,
    subject: message,
    text: req.body,
    // template: 'email', // Nom du fichier Handlebars sans l'extension (.hbs)
  };

 
  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).render("error", { error: error });
    } else {
      console.log(info);
      res.status(200).render("index");
    }
  });
};

module.exports = { orderController };
