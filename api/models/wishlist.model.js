const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  items: [
    {
      productId: {
        type: schema,
        required: true,
      },
    },
  ],
});

const Wishlist = mongoose.model("Cart", wishlistSchema);

module.exports = Wishlist;
