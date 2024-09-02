const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    prductId: {
      type: String,
      required: true,
    },
    productImg: {
      type: String,
    },
    productName: {
      type: String,
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

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
