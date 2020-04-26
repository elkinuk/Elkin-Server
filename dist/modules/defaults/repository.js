"use strict";

var _schema = _interopRequireDefault(require("./schema.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = _mongoose["default"].model('defaults', _schema["default"]);