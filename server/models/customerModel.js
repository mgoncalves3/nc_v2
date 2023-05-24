const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  nif: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);