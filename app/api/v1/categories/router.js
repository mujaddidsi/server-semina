const express = require('express');
const router = express();

const { create, index } = require('./controller');

router.post('/categories', create);
router.get('/categories', index);

module.exports = router;
