"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _controller = _interopRequireDefault(require("./../../common/controller.js"));

var _facade = _interopRequireDefault(require("./facade.js"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PostsController = /*#__PURE__*/function (_Controller) {
  (0, _inherits2["default"])(PostsController, _Controller);

  var _super = _createSuper(PostsController);

  function PostsController(facade) {
    (0, _classCallCheck2["default"])(this, PostsController);
    return _super.call(this, facade);
  }

  (0, _createClass2["default"])(PostsController, [{
    key: "_changePost",
    value: function _changePost(req, res, operations) {
      var _this = this;

      this.facade.findOne({
        id: req.params.id
      }).exec(function (err, post) {
        if (err) _this._errorHandling(res, err);

        _this.facade.updateOne({
          id: req.params.id
        }, {
          '$set': operations(post)
        }).exec(function (err) {
          if (err) _this._errorHandling(res, err);

          _this.facade.findOne({
            id: req.params.id
          }).exec(function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this._callback.apply(_this, args.concat([res]));
          });
        });
      });
    }
  }, {
    key: "addUpvote",
    value: function addUpvote(req, res) {
      this._changePost(req, res, function (post) {
        return {
          upvotes: post.upvotes ? +post.upvotes + 1 : 1
        };
      });
    }
  }, {
    key: "addComment",
    value: function addComment(req, res) {
      this._changePost(req, res, function (post) {
        var _req$body = req.body,
            text = _req$body.text,
            username = _req$body.username;
        var comments = post.comments ? [].concat((0, _toConsumableArray2["default"])(post.comments), [{
          text: text,
          username: username
        }]) : [{
          text: text,
          username: username
        }];
        return {
          comments: comments
        };
      });
    }
  }]);
  return PostsController;
}(_controller["default"]);

module.exports = new PostsController(_facade["default"]);