const sender = require("../public/javascripts/sender")
const orderController = (req, res, next) => {
    const email = req.body.email;
    const name = req.body.name;
    const number = req.body.number;
    const message = req.body.message;
    console.log(`${email} / ${name} / ${number} / ${message}`);
    
    
    sender(email,"message sent !")
     res.status(200).redirect("/");
};

module.exports = { orderController };