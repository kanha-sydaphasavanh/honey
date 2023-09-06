
const orderController = (req, res, next) => {
    const { email } = req.body;
    console.log(req.body);
    return res.status(200).json({ content: email });
};

module.exports = { orderController };