const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        productImg: {
          type: String,
        },
        productName: {
          type: String,
        },
        productQuantity: {
          type: Number,
          required: true,
          min: 1,
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
    ],
    totalAmount: {
      type: String,
      required: true,
    },
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
