const shopController = (req, res, next) => {
    res.render('shop', { title: 'Shop' });
};

module.exports = { shopController };