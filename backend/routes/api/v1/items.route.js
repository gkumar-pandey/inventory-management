const express = require("express");
const {
  addItemHandler,
  deleteItemHandler,
  updateItemHandler,
  fetchItemsHandler,
} = require("../../../controllers/items.controller");

const itemsRoutes = express.Router();

// GET /api/v1/items
itemsRoutes.get("/", fetchItemsHandler);

// POST /api/v1/items
itemsRoutes.post("/", addItemHandler);

// POST /api/v1/items/:itemId
itemsRoutes.post("/:itemId", updateItemHandler);

// DELETE /api/v1/items/:itemId
itemsRoutes.delete("/:itemId", deleteItemHandler);

module.exports = itemsRoutes;
