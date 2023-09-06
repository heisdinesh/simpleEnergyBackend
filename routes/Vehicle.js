const express = require("express");
const router = express.Router();
const { VehicleDataGenerator } = require("../controllers/Vehicle");

router.route("/vehicleInfo").get(VehicleDataGenerator);

module.exports = router;
