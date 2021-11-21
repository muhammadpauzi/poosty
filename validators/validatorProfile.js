const { body } = require('express-validator');
const { User } = require('../models');

const validatorEditProfile = [
    body('name')
        .not()
        .isEmpty()
        .withMessage("Name must be required")
        .trim(),
    body('username')
        .not()
        .isEmpty()
        .withMessage("Username must be required")
        .isAlphanumeric()
        .withMessage("Username only valid with Alpha and Numeric")
        .custom(async (value, { req }) => {
            const user = await User.findOne({ where: { username: value } });
            if (user && req.user.username != user.username) {
                throw new Error('Username already registered. Please try another!');
            }
        })
        .trim()
]

module.exports = { validatorEditProfile };