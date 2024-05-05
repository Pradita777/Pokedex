const express = require('express');
const router = express.Router();

// Get
const { get_phrases } = require('./quotes/get');

//Routes
router.get('/', get_phrases);

module.exports = router;