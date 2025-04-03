const express = require("express");

const { getLogs, getLog, addLog } = require("../controllers/logs.controller");

const logsRouter = express.Router();

logsRouter.get("/", getLogs);

logsRouter.get("/:logId", getLog);

logsRouter.post("/", addLog);

module.exports = logsRouter;
