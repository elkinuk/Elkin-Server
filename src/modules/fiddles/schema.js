const mongoose = require('mongoose');

const posts = new mongoose.Schema({
  keyHash: String,
  title: String,
  text: Array,
  config: String
});

module.exports = posts;