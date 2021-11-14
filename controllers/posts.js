const { POSTS_TITLE } = require("../constants")
const { renderWithUserData } = require('../utils');

const getPosts = (req, res) => {
    return renderWithUserData(req, res, 'index', { title: POSTS_TITLE });
}

module.exports = {
    getPosts
}