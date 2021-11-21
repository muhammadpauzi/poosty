const { EDIT_PROFILE_TITLE, PROFILE_TITLE } = require('../constants');
const { renderWithUserDataAndFlash } = require('../utils');
const { User, Like, Post } = require('../models');
const { validationResult } = require('express-validator');
const { buildObjectValidation } = require('../utils');

const profile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, { include: { model: Post, include: Like } });
        return renderWithUserDataAndFlash(req, res, 'profile/profile', { title: PROFILE_TITLE, user, likes: user.Likes, posts: user.Posts });
    } catch (error) {
        console.log(error);
    }
}

const edit = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        return renderWithUserDataAndFlash(req, res, 'profile/edit', { title: EDIT_PROFILE_TITLE, user });
    } catch (error) {
        console.log(error);
    }
}

const editPost = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return renderWithUserDataAndFlash(req, res, 'profile/edit', { title: EDIT_PROFILE_TITLE, errors: buildObjectValidation(errors.mapped()) });
        }
        const user = await User.findByPk(req.user.id);
        const { name, username } = req.body;
        user.update({ name, username });
        req.flash('success', 'Profile Edited.');
        return res.redirect('/profile');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { profile, edit, editPost };