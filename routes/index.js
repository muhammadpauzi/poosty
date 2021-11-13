const { index } = require('../controllers/index');
const router = require('express').Router();

router.get('/', index);

module.exports = router;