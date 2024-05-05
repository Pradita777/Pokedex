const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { PORT } = process.env;

const app = express();
const router = require("./router");

app.use(cors({
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  }));

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${ PORT }`)
})