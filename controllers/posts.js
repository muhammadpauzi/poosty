const { POSTS_TITLE } = require("../constants")

const getPosts = (req, res) => {
    return res.render('index', { title: POSTS_TITLE });
}

module.exports = {
    getPosts
}