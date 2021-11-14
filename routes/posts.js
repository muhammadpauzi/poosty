const { getPosts } = require('../controllers/posts');
const router = require('express').Router();
const { ensureAuth } = require('../middlewares/auth');

router.get('/', ensureAuth, getPosts);

module.exports = router;