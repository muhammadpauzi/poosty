const { POSTS_TITLE, CREATE_POST_TITLE } = require("../constants");
const { Post, User, Like } = require("../models");
const { renderWithUserDataAndFlash, buildObjectValidation } = require('../utils');
const { validationResult } = require('express-validator');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
                attributes: { exclude: ['password'] }
            }, {
                model: Like
            }]
        });
        return renderWithUserDataAndFlash(req, res, 'posts/posts', { title: POSTS_TITLE, posts });
    } catch (error) {
        console.log(error);
    }
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
        await Post.create({ UserId: req.user.id, content });
        req.flash('success', 'Post created!');
        return res.redirect('/posts');
    } catch (error) {
        console.log(error);
    }
}

const like = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const post = await (await Post.findByPk(id, { include: Like })).toJSON();
        if (!post) {
            return res.status(404).json({ message: "POST DOES NOT EXITS." });
        }
        return res.status(200).json({ likesCount: post.Likes.length, likes: post.Likes });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

const likePost = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const post = await Post.findOne({ where: { id }, include: Like });
        const like = await Like.findOne({ where: { user_id: req.user.id, post_id: id } });
        if (!post) {
            return res.status(404).json({ message: "POST DOES NOT EXITS." });
        } else if (like) {
            like.destroy();
            return res.status(200).json({ message: "UNLIKED", liked: false });
        } else {
            const newLike = await Like.create({ user_id: req.user.id, post_id: id, PostId: id });
            return res.status(201).json({ message: "LIKED", liked: true });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getPosts,
    createPost,
    create,
    like,
    likePost
}