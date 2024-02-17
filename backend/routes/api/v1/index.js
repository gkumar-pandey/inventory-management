const express = require("express");
const routes = express.Router();

const itemsRoutes = require("./items.route");
const salesRoute = require("./sales.route");

// Items routes
routes.use("/items", itemsRoutes);

// sales routes
routes.use("/sales", salesRoute);

module.exports = routes;
