"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _components = require("../components");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Button = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: ", "px;\n    width: ", "px;\n    background-color: ", ";\n    pointer-events: ", ";\n    color: ", ";\n    border: 0;\n    padding: 0;\n    border-radius: ", "px;\n    margin-left: ", ";\n    margin-right: ", ";\n    margin-bottom: ", ";\n    margin-top: ", ";\n    font-size: ", "px;\n    cursor: pointer;\n    outline: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    @media (max-width: 480px) {\n        width: 100%;\n    }\n"])), _themes.metrics.baseUnit * 6, props => props.small ? _themes.metrics.baseUnit * 18 : _themes.metrics.baseUnit * 30, props => props.disabled ? props.theme.inactive : props.theme.primaryButton, props => props.disabled || props.loading ? "none" : "auto", props => props.theme.detailText, _themes.metrics.globalBorderRadius, props => props.marginLeft ? "".concat(_themes.metrics.baseUnit * 3, "px") : 0, props => props.marginRight ? "".concat(_themes.metrics.baseUnit * 3, "px") : 0, props => props.marginBottom ? "".concat(_themes.metrics.baseUnit * 3, "px") : 0, props => props.marginTop ? "".concat(_themes.metrics.baseUnit * 3, "px") : 0, _themes.metrics.smallText);

const ButtonWithLoadState = props => {
  const loadState = () => {
    if (props.loading) {
      return /*#__PURE__*/_react.default.createElement(_components.Spinner, null);
    } else {
      return props.children;
    }
  };

  return /*#__PURE__*/_react.default.createElement(Button, _extends({
    disabled: props.disabled,
    loading: props.loading
  }, props), loadState());
};

var _default = ButtonWithLoadState;
exports.default = _default;