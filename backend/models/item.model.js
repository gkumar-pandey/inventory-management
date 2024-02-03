const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      enum: ["Electronics", "Clothing", "Sports", "Books", "Furniture"],
      default: "Electronics",
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Items", itemSchema);
module.exports = Item;
