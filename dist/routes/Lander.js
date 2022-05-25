"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Lander(props) {
  return /*#__PURE__*/_react.default.createElement(_components.BodyWrapper, null, /*#__PURE__*/_react.default.createElement(_components.Authentication, {
    contract: props.contract
  }));
}

var _default = Lander;
exports.default = _default;