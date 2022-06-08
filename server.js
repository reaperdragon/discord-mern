const express = require("express");

const http = require("http");

const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || process.env.API_PORT || 5000;

const app = express();

app.use(express.json());

app.use(cors());

const server = http.createServer(app);

server.listen(port, () => console.log(`Server is Running on ${port}...`));
