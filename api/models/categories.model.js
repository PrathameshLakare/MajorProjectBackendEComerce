const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryImg: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", categoriesSchema);

module.exports = Category;
