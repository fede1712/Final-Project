
require("dotenv/config");

require("./db");

const express = require("express");
const stripe = require('stripe')

const app = express();


require("./config")(app);
require("./config/session.config")(app)
require("./config/cors.config")(app);

const allRoutes = require("./routes");
app.use("/api", allRoutes);

require("./error-handling")(app);

module.exports = app;
