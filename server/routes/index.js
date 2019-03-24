const express = require('express');

const router = express.Router();

router.use('/', require('./sources.routes'));

module.exports = router;
