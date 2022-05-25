"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Background = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 10;\n  height: 100%;\n  width: 100%;\n  background-color: ", ";\n"])), props => props.theme.overlayBackground);

const Overlay = props => {
  return /*#__PURE__*/_react.default.createElement(Background, null, props.children);
};

var _default = Overlay;
exports.default = _default;