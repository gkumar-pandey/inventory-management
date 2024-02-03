const express = require("express");
const {
  addSalesHandler,
  updateSoledItemDetailsHandler,
  deleteSoledItemDetailsHandler,
  fetchSalesHandler,
} = require("../../../controllers/sales.controller");

const salesRoute = express.Router();

// POST /api/v1/sales  Add soled items
salesRoute.post("/", addSalesHandler);

// POST /api/v1/sales/:soledItemId  Update soled item details.
salesRoute.post("/:soledItemId", updateSoledItemDetailsHandler);

// DELETE /api/v1/sales/:soledItemId
salesRoute.delete("/:soledItemId", deleteSoledItemDetailsHandler);

// GET /api/v1/sales Fetch all sales details
salesRoute.get("/", fetchSalesHandler);

module.exports = salesRoute;
