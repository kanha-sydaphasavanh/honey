const homeController = (req, res, next) => {
    res.render('index', { title: 'honey' });
};

module.exports = { homeController };