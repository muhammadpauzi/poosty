const { users, detail, search } = require('../controllers/users');
const router = require('express').Router();
const { ensureAuth } = require('../middlewares/auth');

router.get('/', ensureAuth, users);
router.post('/search', ensureAuth, search);
router.get('/:username', ensureAuth, detail);

module.exports = router;