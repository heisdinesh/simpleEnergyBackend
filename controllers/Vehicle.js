const express = require("express");

exports.VehicleDataGenerator = async (req, res, next) => {
  let vehicle = {
    temperature: 20,
    averageSpeed: 60,
    charge: 45,
    canBeTravelled: 200,
    locked: true,
    name: "Ishika",
    lastUpdate: "28 min",
    distance: 450,
    petrolSaved: 20,
    CO2Avoided: 120,
  };

  // Function to generate random values for vehicle properties
  const generateRandomData = () => {
    vehicle.temperature = Math.floor(Math.random() * 50); // Random temperature between 0 and 49
    vehicle.averageSpeed = Math.floor(Math.random() * 100); // Random speed between 0 and 99
    vehicle.charge = Math.floor(Math.random() * 100); // Random charge between 0 and 99
    vehicle.distance = Math.floor(Math.random() * 100); // Increment distance by a random value between 0 and 9
    vehicle.canBeTravelled = vehicle.charge;
  };

  // Generate random data initially
  generateRandomData();

  // Send the initial vehicle data as the response
  res.status(200).json(vehicle);

  // Generate new random data every 10 seconds
  const interval = setInterval(() => {
    generateRandomData();
    // Send the updated vehicle data to all connected clients using WebSocket or another mechanism if needed
  }, 10000); // 10 seconds in milliseconds

  // Clean up the interval when the client disconnects
  res.on("close", () => {
    clearInterval(interval);
  });
};
