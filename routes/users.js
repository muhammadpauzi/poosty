const { users, detail } = require('../controllers/users');
const router = require('express').Router();
const { ensureAuth } = require('../middlewares/auth');

router.get('/', ensureAuth, users);
router.get('/:username', ensureAuth, detail);

module.exports = router;