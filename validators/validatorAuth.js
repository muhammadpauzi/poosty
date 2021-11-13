const { body } = require('express-validator');
const { User } = require('../models');

const validatorRegistration = [
    body('username')
        .not()
        .isEmpty()
        .withMessage("Username must be required")
        .isAlphanumeric()
        .withMessage("Username only valid with Alpha and Numeric")
        .custom(async (value) => {
            const user = await User.findOne({ where: { username: value } });
            console.log(user);
            if (user) {
                throw new Error('Username already registered. Please try another!');
            }
        })
        .trim(),
    body('password')
        .not()
        .isEmpty()
        .withMessage("Password must be required")
        .trim()
]

module.exports = { validatorRegistration };