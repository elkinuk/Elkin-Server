"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _schema = _interopRequireDefault(require("./schema.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

module.exports = _mongoose["default"].model('projects', _schema["default"]);