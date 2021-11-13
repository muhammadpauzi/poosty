const { INDEX_TITLE } = require('../constants');

const index = (req, res) => {
    return res.render('index', { title: INDEX_TITLE });
}

module.exports = { index };