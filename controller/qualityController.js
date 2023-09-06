const qualityController = (req, res, next) => {
    res.render('quality', { title: 'quality' });
};

module.exports = { qualityController };