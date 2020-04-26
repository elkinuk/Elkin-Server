const mongoose = require('mongoose');

const projects = new mongoose.Schema({
  name: String,
  pic: String,
  picBlur: Array,
  icon: String,
  iconType: String,
  text: Number,
  url: Array
});

module.exports = projects;