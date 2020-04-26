"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Facade = /*#__PURE__*/function () {
  function Facade(Model) {
    _classCallCheck(this, Facade);

    this.Model = Model;
  }

  _createClass(Facade, [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(body, callback) {
        var model;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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