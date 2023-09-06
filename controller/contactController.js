const contactController = (req, res, next) => {
    res.render('contact', { title: 'contact' });
};

module.exports = { contactController };