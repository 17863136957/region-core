"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = require("../global/store");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(RegionIn) {
  var Region =
  /*#__PURE__*/
  function (_RegionIn) {
    _inherits(Region, _RegionIn);

    function Region(_config) {
      var _this;

      _classCallCheck(this, Region);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Region).call(this, _config));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "private_setConfig", function () {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var reducerPath = config.reducerPath,
            expiredTime = config.expiredTime,
            enableLog = config.enableLog,
            strictLoading = config.strictLoading,
            silentConnect = config.silentConnect;

        if (reducerPath !== undefined) {
          _this.reducerPath = reducerPath;
          _this.SET_LOADING = reducerPath ? "@".concat(reducerPath, "/SET_LOADING") : '@region/SET_LOADING';
          _this.SET_RESULT = reducerPath ? "@".concat(reducerPath, "/SET_RESULT") : '@region/SET_RESULT';
        }

        if (expiredTime !== undefined) {
          _this.expiredTime = expiredTime;
        }

        if (enableLog !== undefined) {
          _this.enableLog = enableLog;
        }

        if (strictLoading !== undefined) {
          _this.strictLoading = strictLoading;
        }

        if (silentConnect !== undefined) {
          _this.silentConnect = silentConnect;
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setConfig", function () {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        console.warn('setConfig is deprecated, use private_setConfig instead');

        var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
            private_setConfig = _assertThisInitialize.private_setConfig;

        var store = config.store;

        if (store !== undefined) {
          console.warn('setStore in setConfig is deprecated, use getProvider or setStore instead');
          (0, _store.setStore)(store);
        }

        private_setConfig(config);
      });

      _this.private_setConfig(_config);

      return _this;
    }

    return Region;
  }(RegionIn);

  return Region;
};

exports.default = _default;