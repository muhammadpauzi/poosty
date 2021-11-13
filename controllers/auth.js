const { LOGIN_TITLE, REGISTRATION_TITLE } = require('../constants');
const { validationResult } = require('express-validator');
const { buildObjectValidation } = require('../utils');
const { User } = require('../models');

const login = (req, res) => {
    return res.render('auth/login', { title: LOGIN_TITLE });
}

const loginPost = (req, res) => {
    return res.redirect('/');
}

const registration = (req, res) => {
    return res.render('auth/registration', { title: REGISTRATION_TITLE });
}

const registrationPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('auth/registration', { title: REGISTRATION_TITLE, errors: buildObjectValidation(errors.mapped()) });
    }
    const { username, password } = req.body;

    try {
        await User.create({ username, name: username, password });
        return res.redirect('/login');
    } catch (error) {
        console.log(error);
    }

    return res.redirect('/login');
}

module.exports = { login, loginPost, registration, registrationPost };