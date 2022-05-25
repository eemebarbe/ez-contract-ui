"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletConnectAuth = exports.MetaMaskAuth = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _components = require("../components");

var _themes = require("../themes");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const AuthButton = (0, _styledComponents.default)(_components.Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    span {\n        width: ", "px;\n    }\n"])), _themes.metrics.baseUnit * 24);

const AuthIcon = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: ", "px;\n    height: ", "px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    div {\n        width: ", "px;\n        height: ", "px;\n        background-color: ", ";\n        border-radius: ", "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        img {\n            width: ", "px;\n            height: ", "px;\n            src: ", ";\n        }\n    }\n"])), _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit * 6, _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit * 3, props => props.background ? props.theme.detailText : null, _themes.metrics.globalBorderRadius / 2, props => props.background ? _themes.metrics.baseUnit * 2 : _themes.metrics.baseUnit * 3, props => props.background ? _themes.metrics.baseUnit * 2 : _themes.metrics.baseUnit * 3, props => props.src);

const AuthConstructor = props => {
  return /*#__PURE__*/_react.default.createElement(AuthButton, _extends({}, props, {
    onClick: props.onClick
  }), /*#__PURE__*/_react.default.createElement(AuthIcon, props, /*#__PURE__*/_react.default.createElement("div", props, /*#__PURE__*/_react.default.createElement("img", {
    alt: "social-icon",
    src: props.logo
  }))), /*#__PURE__*/_react.default.createElement("span", null, props.wallet));
};

const MetaMaskAuth = props => {
  return /*#__PURE__*/_react.default.createElement(AuthConstructor, _extends({}, props, {
    logo: _themes.icons.facebook,
    wallet: "MetaMask",
    onClick: props.onClick
  }));
};

exports.MetaMaskAuth = MetaMaskAuth;

const WalletConnectAuth = props => {
  return /*#__PURE__*/_react.default.createElement(AuthConstructor, _extends({
    background: true
  }, props, {
    logo: _themes.icons.google,
    wallet: "WalletConnect",
    onClick: props.onClick
  }));
};

exports.WalletConnectAuth = WalletConnectAuth;