const mongoose = require('mongoose');

const projects = new mongoose.Schema({
  name: String,
  pic: String,
  picBlur: String,
  icon: Array,
  text: Number,
  url: Array
});

module.exports = projects;