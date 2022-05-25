"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _components = require("../components");

var _themes = require("../themes");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const HamburgerStyle = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    flex-direction: column;\n    justify-content: center;\n    height: ", "px;\n    width: ", "px;\n    cursor: pointer;\n    div {\n        flex-direction: column;\n        width: 100%;\n    }\n    div :nth-child(1),\n    div :nth-child(2) {\n        margin-bottom: ", "px;\n    }\n    span {\n        width: 100%;\n        height: 0;\n        border-top: 1px solid ", ";\n    }\n    &.grow-appear,\n    &.grow-enter {\n        width: 0px;\n        z-index: 1;\n    }\n    &.grow-appear-active,\n    &.grow-enter.grow-enter-active {\n        width: ", "px;\n        transition: width 400ms ease-out;\n        @media (max-width: 480px) {\n            width: ", "px;\n        }\n    }\n    &.grow-exit {\n        width: ", "px;\n        @media (max-width: 480px) {\n            width: ", "px;\n        }\n    }\n    &.grow-exit.grow-exit-active {\n        width: 0px;\n    }\n"])), _themes.metrics.headerHeight / 3, _themes.metrics.headerHeight / 3, _themes.metrics.baseUnit - 2, props => props.theme.mainText, _themes.metrics.headerHeight / 3, _themes.metrics.headerHeight / 2, _themes.metrics.headerHeight / 3, _themes.metrics.headerHeight / 2);

const MenuButton = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    height: ", "px;\n    width: ", "px;\n    position: relative;\n    z-index: 30;\n"])), _themes.metrics.headerHeight / 3, _themes.metrics.headerHeight / 3);

const Hamburger = props => {
  return /*#__PURE__*/_react.default.createElement(_components.Badge, {
    notifications: props.notifications
  }, /*#__PURE__*/_react.default.createElement(MenuButton, {
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.TransitionGroup, {
    appear: true
  }, /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    key: "hamburger",
    timeout: 1000,
    classNames: "grow"
  }, /*#__PURE__*/_react.default.createElement(HamburgerStyle, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null)))))));
};

var _default = Hamburger;
exports.default = _default;