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

const BadgeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n"])));

const Badge = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    height: ", "px;\n    width: ", "px;\n    position: absolute;\n    top: -", "px;\n    right: -", "px;\n    border-radius: ", "px;\n    z-index: 40;\n    color: ", ";\n    visibility: ", ";\n"])), props => props.theme.secondaryColor, _themes.metrics.baseUnit, _themes.metrics.baseUnit, _themes.metrics.baseUnit / 2, _themes.metrics.baseUnit / 2, _themes.metrics.baseUnit, props => props.theme.detailText, props => props.notifications > 0 ? "visible" : "hidden");

const BadgeInContainer = props => {
  return /*#__PURE__*/_react.default.createElement(BadgeContainer, null, /*#__PURE__*/_react.default.createElement(Badge, {
    notifications: props.notifications
  }), props.children);
};

var _default = BadgeInContainer;
exports.default = _default;