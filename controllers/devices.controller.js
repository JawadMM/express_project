const { devices } = require("../models/devices.model");

function getDevices(req, res) {
  res.status(200).json(devices);
}

function getDevice(req, res) {
  const deviceId = Number(req.params.deviceId);

  if (deviceId < 0 || deviceId >= devices.length) {
    return res.status(404).json({
      error: "Invalid device ID.",
    });
  }

  const device = devices.filter((device) => device.id == deviceId);

  return res.status(200).json(device);
}

function addDevice(req, res) {
  const deviceName = req.body.deviceName;

  if (!deviceName) {
    return res.status(400).json({
      error: "Device name is missing.",
    });
  }

  const newDevice = {
    deviceName,
    id: devices.length,
  };

  devices.push(newDevice);

  return res.status(200).json(newDevice);
}

module.exports = {
  getDevices,
  getDevice,
  addDevice,
};
