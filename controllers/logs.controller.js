const { logs } = require("../models/logs.model");

function getLogs(req, res) {
  res.status(200).json(logs);
}

function getLog(req, res) {
  const logId = Number(req.params.logId);

  if (deviceId < 0 || deviceId >= devices.length) {
    return res.status(404).json({
      error: "Invalid log ID.",
    });
  }

  const log = logs.filter((log) => log.id == logId);

  return res.status(200).json(log);
}

function addLog(req, res) {
  const log = req.body.log;

  if (!log) {
    return res.status(400).json({
      error: "Log message is missing.",
    });
  }

  const newLog = {
    log,
    id: devices.length,
  };

  logs.push(newLog);

  return res.status(200).json(newLog);
}

module.exports = {
  getLogs,
  getLog,
  addLog,
};
