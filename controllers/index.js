const { INDEX_TITLE } = require('../constants');
const { renderWithUserDataAndFlash } = require('../utils');

const index = (req, res) => {
    return renderWithUserDataAndFlash(req, res, 'index', { title: INDEX_TITLE });
}

module.exports = { index };