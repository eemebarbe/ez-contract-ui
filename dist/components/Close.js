"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactTransitionGroup = require("react-transition-group");

var _themes = require("../themes");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const CloseStyle = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    cursor: pointer;\n    position: absolute;\n    flex-direction: column;\n    justify-content: center;\n    height: ", "px;\n    width: ", "px;\n    &:before,\n    &:after {\n        position: absolute;\n        margin-left: ", "px;\n        content: \" \";\n        height: ", "px;\n        @media (max-width: 480px) {\n            height: ", "px;\n        }\n        width: 1px;\n        background-color: ", ";\n    }\n    &:before {\n        transform: rotate(45deg);\n    }\n    &:after {\n        transform: rotate(-45deg);\n    }\n    &.grow-appear:before,\n    &.grow-enter:before,\n    &.grow-appear:after,\n    &.grow-enter:after {\n        height: 0px;\n        z-index: 1;\n    }\n    &.grow-appear-active:before,\n    &.grow-enter.grow-enter-active:before,\n    &.grow-appear-active:after,\n    &.grow-enter.grow-enter-active:after {\n        height: ", "px;\n        transition: height 400ms ease-out;\n        @media (max-width: 480px) {\n            height: ", "px;\n        }\n    }\n    &.grow-exit:before,\n    &.grow-exit:after {\n        height: ", "px;\n        @media (max-width: 480px) {\n            height: ", "px;\n        }\n    }\n    &.grow-exit.grow-exit-active:before,\n    &.grow-exit.grow-exit-active:after {\n        height: 0px;\n    }\n"])), _themes.metrics.headerHeight / 3, _themes.metrics.headerHeight / 3, _themes.metrics.baseUnit, _themes.metrics.baseUnit * 3 - 2, _themes.metrics.baseUnit * 2 - 2, props => props.theme.mainText, _themes.metrics.baseUnit * 3 - 2, _themes.metrics.baseUnit * 2 - 2, _themes.metrics.baseUnit * 3 - 2, _themes.metrics.baseUnit * 2 - 2);

const MenuButton = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    height: ", "px;\n    width: ", "px;\n    z-index: 30;\n"])), _themes.metrics.headerHeight / 3, _themes.metrics.headerHeight / 3);

const Close = props => {
  return /*#__PURE__*/_react.default.createElement(MenuButton, {
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.TransitionGroup, {
    appear: true
  }, /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    key: "close",
    timeout: 1000,
    classNames: "grow"
  }, /*#__PURE__*/_react.default.createElement(CloseStyle, null))));
};

var _default = Close;
exports.default = _default;