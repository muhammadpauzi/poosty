const { users } = require('../controllers/users');
const router = require('express').Router();
const { ensureAuth } = require('../middlewares/auth');

router.get('/', ensureAuth, users);

module.exports = router;