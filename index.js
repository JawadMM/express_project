const express = require("express");
const {
  getDevices,
  getDevice,
  addDevice,
} = require("./controllers/devices.controller");

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/devices", getDevices);

app.get("/devices/:deviceId", getDevice);

app.post("/devices", addDevice);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
