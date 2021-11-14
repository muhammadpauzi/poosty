const { INDEX_TITLE } = require('../constants');
const { renderWithUserData } = require('../utils');

const index = (req, res) => {
    return renderWithUserData(req, res, 'index', { title: INDEX_TITLE, successMessage: req.flash('success') });
}

module.exports = { index };