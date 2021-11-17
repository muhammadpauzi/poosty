const { getPosts, createPost, create, like, likePost } = require('../controllers/posts');
const router = require('express').Router();
const { ensureAuth } = require('../middlewares/auth');
const { validatorCreatePost } = require('../validators/validatorPost');

router.get('/', ensureAuth, getPosts);
router.get('/create', ensureAuth, create);
router.post('/create', ensureAuth, validatorCreatePost, createPost);
router.get('/:id/like', ensureAuth, like);
router.post('/:id/like', ensureAuth, likePost);

module.exports = router;