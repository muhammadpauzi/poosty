const { body } = require('express-validator');

const validatorCreatePost = [
    body('content')
        .not()
        .isEmpty()
        .withMessage("Post content must be required")
        .trim()
]

module.exports = { validatorCreatePost };