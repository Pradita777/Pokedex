const express = require('express');
const router = express.Router();

// Get
const { get_all } = require('./pokeneas/get');
const { get_pokenea } = require('./pokeneas/get');
const { get_quote } = require('./pokeneas/get');

//Routes
router.get('/', get_all);
router.get('/randomPokenea', get_pokenea);
router.get('/randomPokenea/quote', get_quote);

module.exports = router;