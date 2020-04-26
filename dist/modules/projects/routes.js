"use strict";

var _express = _interopRequireDefault(require("express"));

var _controlles = _interopRequireDefault(require("./controlles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(function () {
  return _controlles["default"].getAllData.apply(_controlles["default"], arguments);
});
module.exports = router;