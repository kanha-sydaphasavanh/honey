const qualityController = (req, res, next) => {
    res.render('quality', { title: 'Quality' });
};

module.exports = { qualityController };