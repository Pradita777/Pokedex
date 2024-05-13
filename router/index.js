const express = require('express');
const router = express.Router();
const path = require('path');

// Get
const { get_all } = require('./pokeneas/get');
const { get_pokenea } = require('./pokeneas/get');
const { get_quote_and_image } = require('./pokeneas/get');

//Routes
router.get('/', get_all);
router.get('/api/randomPokenea', get_pokenea);
router.get('/api/randomPokenea/quote', get_quote_and_image);
router.get('/randomPokenea/quote-interface', (req, res) => {
    // Utiliza el método sendFile para enviar la página HTML
    res.sendFile(path.join(__dirname, '..', 'public', 'pokemon_quote_interface.html'));
});

module.exports = router;