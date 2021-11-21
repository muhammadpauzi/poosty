const { profile, edit, editPost } = require('../controllers/profile');
const router = require('express').Router();
const { ensureAuth } = require('../middlewares/auth');
const { validatorEditProfile } = require('../validators/validatorProfile');

router.get('/', ensureAuth, profile);
router.get('/edit', ensureAuth, edit);
router.post('/edit', ensureAuth, validatorEditProfile, editPost);

module.exports = router;