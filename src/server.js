const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const router = require("./routes/rickandmorty.router");
const cors = require("cors");
const { sequelize } = require("./DB_connection");

const server = express();

// server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use("/rickandmorty", router);
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
})


module.exports = server;