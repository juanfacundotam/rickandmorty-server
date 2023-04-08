const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const router = require("./routes/rickandmorty.router");
const cors = require("cors");
const { sequelize } = require("./DB_connection");

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use("/rickandmorty", router);


module.exports = server;