const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
      productId: {
      type: String,
      required: true,
    },
    productImg: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: true,
    },
    productDetails: {
      type: String,
    },
    productCategories: [
      {
        type: String,
      },
    ],
    productRating: {
      type: Number,
    },
  },
  { timestamps: true },
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
