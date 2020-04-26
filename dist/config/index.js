"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _modules = _interopRequireDefault(require("./../modules"));

var app = (0, _express["default"])(); //const morgan = require('morgan');
//const fs = require('fs');
//const createError = require('http-errors');
//const passport = require('passport');
//require('./passport/strategies/basic.js');
// if(app.get('env') === 'production') {
//   const accessLogStream = fs.createWriteStream(__dirname + '/logs/' + 'access.log', {flags: 'a'});
//   app.use(morgan('combined', {stream: accessLogStream}));
// } else app.use(morgan('dev'));

app.use(_express["default"]["static"](_path["default"].join(__dirname, './../build')));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); // app.use(passport.initialize());
// app.use(passport.session());

app.use('/', _modules["default"].indexRouter); // app.use((req, res, next) => {
//   next(createError(404));
// });

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.status = err.status || 500;
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;