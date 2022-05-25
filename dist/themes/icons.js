"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _flogoHexRBGWht = _interopRequireDefault(require("./icons/flogo-HexRBG-Wht-72.svg"));

var _icons8Google = _interopRequireDefault(require("./icons/icons8-google-48.png"));

var _send = _interopRequireDefault(require("./icons/send.svg"));

var _shoppingCart = _interopRequireDefault(require("./icons/shopping-cart.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const icons = {
  google: _icons8Google.default,
  facebook: _flogoHexRBGWht.default,
  send: _send.default,
  cart: _shoppingCart.default
};
var _default = icons;
exports.default = _default;