const Sales = require("../models/sales.model");

/**
 * @route POST /api/v1/sales
 * @description
 * @param {*} req
 * @param {*} res
 * @returns
 */
const addSalesHandler = async (req, res) => {
  try {
    const salesDetails = req.body;
    const newSale = new Sales(salesDetails);
    if (!newSale) {
      return res
        .status(404)
        .json({ success: false, message: "sales not created." });
    }
    return res
      .status(200)
      .json({ success: true, message: "sales created.", sales: newSale });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
    throw error;
  }
};

/**
 * @route POST /api/v1/sales
 * @description
 * @param {*} req
 * @param {*} res
 * @returns
 */
const fetchSalesHandler = async (req, res) => {
  try {
    const allSalesItems = await Sales.find();
    if (allSalesItems.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "soled items not found." });
    }
    return res.status(200).json({ success: true, sales: allSalesItems });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
    throw error;
  }
};

/**
 * @route POST /api/v1/sales/:soledItemId
 * @description
 * @param {*} req
 * @param {*} res
 * @returns
 */
const updateSoledItemDetailsHandler = async (req, res) => {
  try {
    const { soledItemId } = req.params;
    const updateData = req.body;
    const updatedSoledItem = await Sales.findByIdAndUpdate(
      soledItemId,
      updateData,
      { new: true }
    );
    if (!updatedSoledItem) {
      return res
        .status(404)
        .json({ success: false, message: "item sales details not updated." });
    }
    return res.status(200).json({ success: true, sales: updatedSoledItem });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
    throw error;
  }
};

/**
 * @route DELETE /api/v1/saled/:soledItemId
 * @description
 * @param {*} req
 * @param {*} res
 * @returns
 */
const deleteSoledItemDetailsHandler = async (req, res) => {
  try {
    const { soledItemId } = req.params;
    const deletedsoledItem = await Sales.findByIdAndDelete(soledItemId);
    if (!deletedsoledItem) {
      return res
        .status(404)
        .json({ success: false, message: "soled item not deleted." });
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

module.exports = {
  addSalesHandler,
  fetchSalesHandler,
  updateSoledItemDetailsHandler,
  deleteSoledItemDetailsHandler,
};
