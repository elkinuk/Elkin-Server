"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Controller = /*#__PURE__*/function () {
  function Controller(facade) {
    (0, _classCallCheck2["default"])(this, Controller);
    this.facade = facade;
  } // istanbul ignore next line


  (0, _createClass2["default"])(Controller, [{
    key: "_errorHandling",
    value: function _errorHandling(res, err) {
      res.locals.message = err.message;
      res.locals.status = err.status || 500;
      res.status(err.status || 500);
      res.render('error');
    } // istanbul ignore next line

  }, {
    key: "_callback",
    value: function _callback(err, data, res) {
      if (err) this._errorHandling(res, err);
      res.send(data || 'Successfully completed');
    }
  }, {
    key: "getAllData",
    value: function getAllData(req, res) {
      var _this = this;

      this.facade.find().exec(function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this._callback.apply(_this, args.concat([res]));
      });
    }
  }, {
    key: "getDataByID",
    value: function getDataByID(req, res) {
      var _this2 = this;

      this.facade.findOne({
        id: req.params.id
      }).exec(function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this2._callback.apply(_this2, args.concat([res]));
      });
    }
  }, {
    key: "postData",
    value: function postData(req, res) {
      var _this3 = this;

      this.facade.create(req.body, function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        _this3._callback.apply(_this3, args.concat([res]));
      });
    }
  }, {
    key: "putDataByID",
    value: function putDataByID(req, res) {
      var _this4 = this;

      this.facade.updateById(req.params.id, req.body).exec(function () {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        _this4._callback.apply(_this4, args.concat([res]));
      });
    }
  }, {
    key: "delDataByID",
    value: function delDataByID(req, res) {
      var _this5 = this;

      this.facade.deleteById(req.params.id).exec(function () {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        _this5._callback.apply(_this5, args.concat([res]));
      });
    }
  }]);
  return Controller;
}();

module.exports = Controller;