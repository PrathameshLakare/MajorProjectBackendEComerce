const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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
        required: true,
      },
      productCategories: [
        {
          type: String,
        },
      ],
      productRating: {
        type: Number,
        required: true,
      },
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
