const mongoose = require("mongoose");

const salesSchema = mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Items",
    },
    salesPrice: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;
