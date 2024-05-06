const json_manager = require("../../utils/json_manager");
const dotenv = require("dotenv");
dotenv.config();

const { DATA } = process.env;

const get_all = (req, res) => {
    console.log(DATA);
    const data = json_manager.read_json_file(DATA);
    if (data.error) {
      res.send(data.error);
    } else {
      res.status(200).send(data);
    }
};

const get_pokenea = (req, res) => {
    const pokeneas_data = json_manager.read_json_file(DATA);
    const randomPokenea = Math.floor(Math.random() * pokeneas_data.length);
    console.log(randomPokenea);
    console.log(pokeneas_data.length);
}

module.exports = { get_all, get_pokenea };