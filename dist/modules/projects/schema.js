"use strict";

var mongoose = require('mongoose');

var projects = new mongoose.Schema({
  name: String,
  pic: String,
  picBlur: Array,
  icon: String,
  iconType: String,
  text: Number,
  url: Array
});
module.exports = projects;