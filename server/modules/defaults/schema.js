const mongoose = require('mongoose');

const posts = new mongoose.Schema({
  id: String,
  data: Object
});

module.exports = posts;