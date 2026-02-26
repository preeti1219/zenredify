const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const proxyRoutes = require("./routes/proxy.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));

// ❗ DO NOT use express.json() before proxy
// app.use(express.json());

app.use("/api", proxyRoutes);

module.exports = app;