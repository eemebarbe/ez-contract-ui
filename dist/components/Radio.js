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

const Button = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: ", "px;\n  width: ", "px;\n  background-color: ", ";\n  border-radius: 50%;\n"])), _themes.metrics.baseUnit * 2, _themes.metrics.baseUnit * 2, props => props.theme.inactive);

const Input = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  color: ", ";\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ", ";\n  outline: none;\n  margin: 0;\n  padding: 0;\n  height: ", "px;\n  appearance: none;\n  font-size: ", "px;\n  &::placeholder {\n    color: ", ";\n  }\n  &:focus {\n    border-bottom: 1px solid ", ";\n  }\n  &:checked ~ ", " {\n    background-color: ", ";\n  }\n  box-sizing: content-box;\n"])), props => props.theme.mainText, props => props.theme.inactive, _themes.metrics.baseUnit * 3, _themes.metrics.regularText, props => props.theme.inactive, props => props.theme.mainText, Button, props => props.theme.primaryButton);

const Label = _styledComponents.default.label(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  height: ", "px;\n  margin-bottom: ", "px;\n  font-size: ", "px;\n"])), _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit, _themes.metrics.regularText);

const Name = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-left: ", "px;\n"])), _themes.metrics.baseUnit * 3);

const Radio = props => {
  const options = props.options.map(thisOption => {
    return /*#__PURE__*/_react.default.createElement(Label, null, /*#__PURE__*/_react.default.createElement(Input, {
      onChange: props.onChange,
      type: "radio",
      name: "radio",
      value: thisOption.id
    }), /*#__PURE__*/_react.default.createElement(Button, null, /*#__PURE__*/_react.default.createElement("span", null)), /*#__PURE__*/_react.default.createElement(Name, null, thisOption.placeholder));
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, options);
};

var _default = Radio;
exports.default = _default;