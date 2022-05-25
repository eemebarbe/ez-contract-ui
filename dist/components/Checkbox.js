"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const CheckboxWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    height: ", "px;\n    font-size: ", "px;\n    align-items: center;\n    margin-bottom: ", "px;\n"])), _themes.metrics.baseUnit * 3, _themes.metrics.smallText, _themes.metrics.baseUnit * 1);

const Button = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    height: ", "px;\n    width: ", "px;\n    background-color: ", ";\n    border-radius: ", "px;\n"])), _themes.metrics.baseUnit * 2, _themes.metrics.baseUnit * 2, props => props.theme.inactive, _themes.metrics.baseUnit / 4);

const Input = _styledComponents.default.input(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-color: transparent;\n    color: ", ";\n    border: none;\n    border-radius: 0;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    appearance: none;\n    font-size: ", "px;\n    &::placeholder {\n        color: ", ";\n    }\n    &:focus {\n        border-bottom: 1px solid ", ";\n    }\n    &:checked ~ ", " {\n        background-color: ", ";\n    }\n"])), props => props.theme.mainText, _themes.metrics.regularText, props => props.theme.inactive, props => props.theme.mainText, Button, props => props.theme.primaryButton);

const Label = _styledComponents.default.label(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin: none;\n    margin-right: ", "px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    font-size: ", "px;\n"])), _themes.metrics.baseUnit * 2, _themes.metrics.regularText);

const Checkbox = props => {
  return /*#__PURE__*/_react.default.createElement(CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(Label, null, /*#__PURE__*/_react.default.createElement(Input, {
    onChange: props.onChange,
    type: "checkbox",
    name: props.name
  }), /*#__PURE__*/_react.default.createElement(Button, null)), /*#__PURE__*/_react.default.createElement("span", null, props.label));
};

var _default = Checkbox;
exports.default = _default;