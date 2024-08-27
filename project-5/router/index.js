const express = require('express');
const contact = require('./contacts');
const router = express.Router();

router.use('/',contact);


module.exports = router;