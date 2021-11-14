const { login, loginPost, registration, registrationPost } = require('../controllers/auth');
const router = require('express').Router();
const passport = require('passport');
const { validatorRegistration } = require('../validators/validatorAuth');

router.get('/login', login);
router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: 'Invalid username or password.', successFlash: 'Welcome!' }), loginPost);
router.get('/registration', registration);
router.post('/registration', validatorRegistration, registrationPost);

module.exports = router;