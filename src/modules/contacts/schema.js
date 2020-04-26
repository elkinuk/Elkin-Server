const mongoose = require('mongoose');

const projects = new mongoose.Schema({
  url: String,
  icon: String,
  iconType: String
});

module.exports = projects;