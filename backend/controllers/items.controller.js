const Item = require("../models/item.model");

/**
 * @route POST /api/v1/items
 * @description Create a new item in the database inventory.
 * @param {Object} req - Express request object containing the item details in the request body.
 * @param {Object} res - Express response object containing success or failure of the operation along with created item.
 */
const addItemHandler = async (req, res) => {
  try {
    const item = req.body;
    const newItem = new Item(item);
    await newItem.save();
    return res.status(201).json({
      success: true,
      message: "Item is created.",
      item: newItem,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw error;
  }
};

/**
 * @route POST /api/v1/items/:itemId
 * @description
 * @param {*} req
 * @param {*} res
 */
const updateItemHandler = async (req, res) => {
  try {
    const { itemId } = req.params;
    const updatedData = req.body;
    const updatedItem = await Item.findByIdAndUpdate(itemId, updatedData, {
      new: true,
    });
    if (!updatedItem) {
      return res
        .status(404)
        .json({ success: false, message: "Item is not updated." });
    }
    return res.status(200).json({
      success: true,
      message: "Item updated successfully.",
      item: updatedItem,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw error;
  }
};

/**
 * @route DELETE /api/v1/items/:itemId
 * @description
 * @param {*} req
 * @param {*} res
 */
const deleteItemHandler = async (req, res) => {
  try {
    const { itemId } = req.params;

    const deletedItem = await Item.findByIdAndDelete(itemId);
    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: "Database error item is not deleted.",
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "Item deleted successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
    throw error;
  }
};

const fetchItemsHandler = async (req, res) => {
  try {
    const allItems = await Item.find();
    if (allItems.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Items not found." });
    }
    return res.status(200).json({ success: true, items: allItems });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
    throw error;
  }
};

module.exports = {
  addItemHandler,
  updateItemHandler,
  deleteItemHandler,
  fetchItemsHandler,
};
