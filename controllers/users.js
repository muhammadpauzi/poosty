const { USERS_TITLE } = require('../constants');
const { renderWithUserDataAndFlash } = require('../utils');
const { User, Like, Post } = require('../models');

const users = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [Like, Post],
            order: [
                ['username', 'ASC']
            ]
        });
        return renderWithUserDataAndFlash(req, res, 'users/users', { title: USERS_TITLE, users });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { users };