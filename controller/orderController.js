const sender = require("../public/javascripts/sender")

const orderController = (req, res, next) => {
    // const email = req.body.email;
    // const name = req.body.name;
    // const phone = req.body.phone;
    // const message = req.body.message;
    // console.log(typeof email + ' / ' + typeof name + '/' + typeof phone + '/' + typeof message);

    sender(req,res)

};

module.exports = { orderController };
