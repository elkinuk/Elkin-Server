"use strict";

var mongoose = require('mongoose');

var projects = new mongoose.Schema({
  url: String,
  icon: String,
  iconType: String
});
module.exports = projects;