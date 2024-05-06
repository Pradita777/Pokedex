const express = require('express');
const router = express.Router();

// Get
const { get_all } = require('./pokeneas/get');
const { get_pokenea } = require('./pokeneas/get');

//Routes
router.get('/', get_all);
router.get('/randomPokenea', get_pokenea);

module.exports = router;