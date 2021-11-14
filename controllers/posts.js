const { POSTS_TITLE, CREATE_POST_TITLE } = require("../constants");
const { Post } = require("../models");
const { renderWithUserDataAndFlash, buildObjectValidation } = require('../utils');
const { validationResult } = require('express-validator');

const getPosts = (req, res) => {
    return renderWithUserDataAndFlash(req, res, 'posts/posts', { title: POSTS_TITLE });
}

const create = (req, res) => {
    return renderWithUserDataAndFlash(req, res, 'posts/create', { title: CREATE_POST_TITLE });
}

const createPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return renderWithUserDataAndFlash(req, res, 'posts/create', { title: CREATE_POST_TITLE, errors: buildObjectValidation(errors.mapped()) });
    }

    const { content } = req.body;

    try {
        await Post.create({ content });
        req.flash('success', 'Post created!');
        return res.redirect('/posts');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPosts,
    createPost,
    create
}