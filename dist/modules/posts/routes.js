"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _controlles = _interopRequireDefault(require("./controlles.js"));

var router = _express["default"].Router(); // const passport = require('passport');


router.route('/').get(function () {
  return _controlles["default"].getAllData.apply(_controlles["default"], arguments);
}); //   .post(passport.authorize('basic'), (...args) => req.postData(...args));

router.route('/:id').get(function () {
  return _controlles["default"].getDataByID.apply(_controlles["default"], arguments);
}); //   .put(passport.authorize('basic'), (...args) => req.putDataByID(...args))
//   .delete(passport.authorize('basic'), (...args) => req.delDataByID(...args));

router.route('/:id/upvote').post(function () {
  return _controlles["default"].addUpvote.apply(_controlles["default"], arguments);
});
router.route('/:id/add-comment').post(function () {
  return _controlles["default"].addComment.apply(_controlles["default"], arguments);
});
module.exports = router;