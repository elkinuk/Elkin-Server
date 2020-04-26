"use strict";

var mongoose = require('mongoose');

var posts = new mongoose.Schema({
  id: String,
  data: Object
});
module.exports = posts;