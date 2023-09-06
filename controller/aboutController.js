const aboutController = (req, res, next) => {
    res.render('about', { title: 'about' });
};

module.exports = { aboutController };