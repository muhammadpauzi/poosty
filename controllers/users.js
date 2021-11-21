const { USERS_TITLE, USER_DETAIL_TITLE } = require('../constants');
const { renderWithUserDataAndFlash } = require('../utils');
const { User, Like, Post } = require('../models');

const users = async (req, res) => {
    try {
        const users = await User.findAll({ order: [['username', 'ASC']] });
        return renderWithUserDataAndFlash(req, res, 'users/users', { title: USERS_TITLE, users });
    } catch (error) {
        console.log(error);
    }
}

const detail = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({
            where: { username }, include: { model: Post, include: Like }
        });
        if (!user) {
            req.flash('error', 'User does not exist,');
            return res.redirect('/posts');
        }
        return renderWithUserDataAndFlash(req, res, 'users/detail', { title: username + USER_DETAIL_TITLE, user, likes: user.Likes, posts: user.Posts });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { users, detail };