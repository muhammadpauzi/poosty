const { index } = require('../controllers/index');
const router = require('express').Router();
const { ensureAuth } = require('../middlewares/auth');

router.get('/', ensureAuth, index);

module.exports = router;