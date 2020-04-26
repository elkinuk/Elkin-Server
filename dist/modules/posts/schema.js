"use strict";

var mongoose = require('mongoose');

var posts = new mongoose.Schema({
  id: String,
  title: String,
  text: Array,
  subTitle: String,
  pic: String,
  upvotes: Number,
  comments: Array
});
module.exports = posts;