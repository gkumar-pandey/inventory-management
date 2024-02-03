const express = require("express");
const routes = express.Router();

const itemsRoutes = require("./items.route");
const salesRoute = require("./sales.route");

// Items routes
routes.use(itemsRoutes);

// sales routes
routes.use(salesRoute);

module.exports = routes;
