const sender = require("../public/javascripts/sender")

const orderController = (req, res, next) => {
    const { email, name, message, phone, fs } = req.body;
    // console.log(req.body);
    console.log('controller '+res);
    console.log(email, name, message, phone, fs);
    // res.status(200).json(req.body.file.path);
    sender(req, res) 

};

module.exports = { orderController };
