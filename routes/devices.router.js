const express = require("express");

const {
  getDevices,
  getDevice,
  addDevice,
} = require("../controllers/devices.controller");

const devicesRouter = express.Router();

devicesRouter.get("/", getDevices);

devicesRouter.get("/:deviceId", getDevice);

devicesRouter.post("/", addDevice);

module.exports = devicesRouter
