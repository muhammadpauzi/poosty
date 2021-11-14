const { POSTS_TITLE } = require("../constants")
const { renderWithUserDataAndFlash } = require('../utils');

const getPosts = (req, res) => {
    return renderWithUserDataAndFlash(req, res, 'index', { title: POSTS_TITLE });
}

module.exports = {
    getPosts
}