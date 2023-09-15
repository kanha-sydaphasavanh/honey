const sender = require("../public/javascripts/sender")

const orderController = (req, res, next) => {
    sender(req, res) 

};

module.exports = { orderController };
