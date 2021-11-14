const { login, loginPost, registration, registrationPost, logout } = require('../controllers/auth');
const router = require('express').Router();
const passport = require('passport');
const { validatorRegistration } = require('../validators/validatorAuth');
const { ensureGuest, ensureAuth } = require('../middlewares/auth');

router.get('/login', ensureGuest, login);
router.post('/login', ensureGuest, passport.authenticate('local', { failureRedirect: '/login', failureFlash: 'Invalid username or password.', successFlash: 'Welcome!' }), loginPost);
router.get('/registration', ensureGuest, registration);
router.post('/registration', ensureGuest, validatorRegistration, registrationPost);
router.get('/logout', ensureAuth, logout);

module.exports = router;