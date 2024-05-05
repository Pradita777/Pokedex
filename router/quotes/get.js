const dotenv = require("dotenv");
dotenv.config();

const { DATA } = process.env;
const phrases = require(DATA);

const get_phrases = (req, res) => {
    const number = Math.floor(Math.random() * phrases.length);
    res.send(phrases[number])
}

module.exports = { get_phrases };