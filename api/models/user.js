const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  nit: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);