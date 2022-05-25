"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Link = _styledComponents.default.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: ", "px;\n  width: ", "px;\n  margin-left: ", ";\n  margin-right: ", ";\n  margin-bottom: ", ";\n  margin-top: ", ";\n  cursor: pointer;\n  img {\n    height: ", "px;\n    width: ", "px;\n    src: url(", ");\n  }\n"])), _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit * 3, props => props.marginLeft ? _themes.metrics.baseUnit + "px" : 0, props => props.marginRight ? _themes.metrics.baseUnit + "px" : 0, props => props.marginBottom ? _themes.metrics.baseUnit + "px" : 0, props => props.marginTop ? _themes.metrics.baseUnit + "px" : 0, _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit * 3, props => props.src);

const wrappedIcon = props => {
  return /*#__PURE__*/_react.default.createElement(Link, _extends({}, props, {
    href: props.linkTo
  }), /*#__PURE__*/_react.default.createElement("img", _extends({
    alt: "icon"
  }, props)));
};

var _default = wrappedIcon;
exports.default = _default;