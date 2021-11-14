const { getPosts, createPost, create } = require('../controllers/posts');
const router = require('express').Router();
const { ensureAuth } = require('../middlewares/auth');
const { validatorCreatePost } = require('../validators/validatorPost');

router.get('/', ensureAuth, getPosts);
router.get('/create', ensureAuth, create);
router.post('/create', ensureAuth, validatorCreatePost, createPost);

module.exports = router;