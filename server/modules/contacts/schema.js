const mongoose = require('mongoose');

const projects = new mongoose.Schema({
  url: String,
  icon: [String, String]
});

module.exports = projects;