const { login, registration } = require('../controllers/auth');
const router = require('express').Router();

router.get('/login', login);
router.get('/registration', registration);

module.exports = router;