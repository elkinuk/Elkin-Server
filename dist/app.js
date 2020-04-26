"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

_config["default"].listen(4000, function () {
  console.log('...... Listening on port 4000! \n');

  _mongoose["default"].connect('mongodb://localhost/' + 'blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  var dbConnection = _mongoose["default"].connection;
  dbConnection.on('error', console.error.bind(console, 'connection error:'));
  dbConnection.once('open', function () {
    console.log('...... Connected to db -> 27017');
  });
});