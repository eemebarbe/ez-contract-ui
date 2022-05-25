"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const AlertContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: ", "px;\n  display: flex;\n  align-items: center;\n"])), _themes.metrics.smallText);

const Icon = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  background-color: ", ";\n  text-align: left;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n  margin-right: ", "px;\n"])), props => props.theme.secondaryColor, _themes.metrics.baseUnit * 2, _themes.metrics.baseUnit * 2, _themes.metrics.baseUnit * 2, _themes.metrics.baseUnit);

const Alert = props => {
  const messages = () => {
    return props.messages.map((thisMessage, i) => {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, /*#__PURE__*/_react.default.createElement(Icon, null), /*#__PURE__*/_react.default.createElement("div", null, thisMessage));
    });
  };

  return /*#__PURE__*/_react.default.createElement(AlertContainer, null, messages());
};

var _default = Alert;
exports.default = _default;