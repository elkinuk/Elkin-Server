const mongoose = require('mongoose');

const posts = new mongoose.Schema({
  id: String,
  title: String,
  text: Array,
  subTitle: String,
  pic: String,
  upvotes: Number
});

module.exports = posts;