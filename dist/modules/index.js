"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./posts/routes.js"));

var _routes2 = _interopRequireDefault(require("./projects/routes.js"));

var _routes3 = _interopRequireDefault(require("./contacts/routes.js"));

var _routes4 = _interopRequireDefault(require("./fiddles/routes.js"));

var _routes5 = _interopRequireDefault(require("./defaults/routes.js"));

var indexRouter = _express["default"].Router();

indexRouter.use('/api/posts', _routes["default"]);
indexRouter.use('/api/projects', _routes2["default"]);
indexRouter.use('/api/contacts', _routes3["default"]);
indexRouter.use('/api/fiddles', _routes4["default"]);
indexRouter.use('/api/defaults', _routes5["default"]);
indexRouter.all('/api/*', function (_, res) {
  res.send('No such Endpoint');
}); //indexRouter.all('*', (_, res) => { res.send(path.join(__dirname, './../build/index.html')); });

module.exports.indexRouter = indexRouter;