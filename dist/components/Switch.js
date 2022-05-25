"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Switched = _styledComponents.default.label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  width: ", "px;\n  height: ", "px;\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  span {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ", ";\n    transition: 0.4s;\n    border-radius: ", "px;\n    &:before {\n      position: absolute;\n      content: \"\";\n      height: ", "px;\n      width: ", "px;\n      left: ", "px;\n      bottom: ", "px;\n      background-color: ", ";\n      transition: 0.4s;\n      border-radius: 50%;\n    }\n  }\n  input:checked + span {\n    background-color: ", ";\n  }\n\n  input:checked + span:before {\n    transform: translateX(", "px);\n  }\n"])), _themes.metrics.baseUnit * 8, _themes.metrics.baseUnit * 4, props => props.theme.overlayDetail, _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit / 2, _themes.metrics.baseUnit / 2, props => props.theme.detailText, props => props.theme.overlayDetail, _themes.metrics.baseUnit * 4);

const Switch = props => {
  return /*#__PURE__*/_react.default.createElement(Switched, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: props.onChange,
    checked: props.checked
  }), /*#__PURE__*/_react.default.createElement("span", null));
};

var _default = Switch;
exports.default = _default;