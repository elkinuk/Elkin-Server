"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _controlles = _interopRequireDefault(require("./controlles.js"));

var router = _express["default"].Router();

router.route('/').get(function () {
  return _controlles["default"].getAllData.apply(_controlles["default"], arguments);
});
module.exports = router;