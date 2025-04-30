const express = require('express');
const router = express.Router();
const { checkDbConnection } = require('../controllers/dbController');

router.get('/check', checkDbConnection);

module.exports = router;