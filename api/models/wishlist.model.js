const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  productId: {type: String}
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
