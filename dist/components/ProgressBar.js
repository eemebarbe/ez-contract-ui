"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Bar = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  height: ", "px;\n  width: 100%;\n  background-color: ", ";\n  margin-top: ", "px;\n  border-radius: ", "px;\n"])), _themes.metrics.baseUnit, props => props.theme.inactive, _themes.metrics.baseUnit, _themes.metrics.globalBorderRadius);

const Steps = (0, _styledComponents.default)(Bar)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  width: ", "%;\n"])), props => props.theme.primaryButton, props => 100 * (props.current / props.length));

const Container = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: ", "px;\n  position: relative;\n  span {\n    font-size: ", "px;\n  }\n"])), _themes.metrics.baseUnit * 3, _themes.metrics.smallText);

const ProgressBar = props => {
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement("span", null, props.current, "/", props.length), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Bar, null), /*#__PURE__*/_react.default.createElement(Steps, props)));
};

var _default = ProgressBar;
exports.default = _default;