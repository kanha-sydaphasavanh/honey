const homeController = (req, res, next) => {
    res.render('index', { title: 'Honey', isHome : true });
};

module.exports = { homeController };