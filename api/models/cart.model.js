const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
    },
    productImg: {
      type: String,
    },
    productName: {
      type: String,
    },
    productQuantity: {
      type: Number,
    },
    productPrice: {
      type: String,
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
