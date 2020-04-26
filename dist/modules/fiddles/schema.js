"use strict";

var mongoose = require('mongoose');

var posts = new mongoose.Schema({
  keyHash: String,
  title: String,
  text: Array,
  config: String
});
module.exports = posts;