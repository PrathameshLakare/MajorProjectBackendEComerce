const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  houseNumber: String,
  streetName: String,
  landmark: String,
  city: String,
  state: String,
  country: String,
  postalCode: String,
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
