"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Facade = /*#__PURE__*/function () {
  function Facade(Model) {
    (0, _classCallCheck2["default"])(this, Facade);
    this.Model = Model;
  }

  (0, _createClass2["default"])(Facade, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body, callback) {
        var model;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new this.Model(body);

              case 2:
                model = _context.sent;
                return _context.abrupt("return", model.save(callback));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "find",
    value: function find() {
      var _this$Model;

      return (_this$Model = this.Model).find.apply(_this$Model, arguments);
    }
  }, {
    key: "findOne",
    value: function findOne() {
      var _this$Model2;

      return (_this$Model2 = this.Model).findOne.apply(_this$Model2, arguments);
    }
  }, {
    key: "findById",
    value: function findById() {
      var _this$Model3;

      return (_this$Model3 = this.Model).findById.apply(_this$Model3, arguments);
    }
  }, {
    key: "updateById",
    value: function updateById() {
      var _this$Model4;

      return (_this$Model4 = this.Model).findByIdAndUpdate.apply(_this$Model4, arguments);
    }
  }, {
    key: "updateOne",
    value: function updateOne() {
      var _this$Model5;

      return (_this$Model5 = this.Model).updateOne.apply(_this$Model5, arguments);
    }
  }, {
    key: "deleteById",
    value: function deleteById() {
      var _this$Model6;

      return (_this$Model6 = this.Model).findByIdAndDelete.apply(_this$Model6, arguments);
    }
  }]);
  return Facade;
}();

module.exports = Facade;