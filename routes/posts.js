const { getPosts } = require('../controllers/posts');
const router = require('express').Router();

router.get('/', getPosts);

module.exports = router;