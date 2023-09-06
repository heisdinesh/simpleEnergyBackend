const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const vehicleInfo = require("./routes/Vehicle");
app.use("/api/v1", vehicleInfo);

module.exports = app;
