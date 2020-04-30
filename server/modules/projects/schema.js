const mongoose = require('mongoose');

const projects = new mongoose.Schema({
  name: String,
  pic: String,
  picBlur: Array,
  icon: Array,
  text: Number,
  url: Array
});

module.exports = projects;