const { LOGIN_TITLE, REGISTRATION_TITLE } = require('../constants');

const login = (req, res) => {
    return res.render('auth/login', { title: LOGIN_TITLE });
}

const registration = (req, res) => {
    return res.render('auth/registration', { title: REGISTRATION_TITLE });
}

module.exports = { login, registration };