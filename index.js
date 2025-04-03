const express = require("express");

const devicesRouter = require("./routes/devices.router");
const logsRouter = require("./routes/logs.router");

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

app.use("/devices", devicesRouter);

app.use("/logs", logsRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
