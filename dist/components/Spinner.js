"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _themes = require("../themes");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const rotate = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"])));

const SpinnerTemplate = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-radius: 50%;\n    width: ", "px;\n    height: ", "px;\n    position: absolute;\n"])), props => props.large ? _themes.metrics.baseUnit * 12 : _themes.metrics.baseUnit * 2, props => props.large ? _themes.metrics.baseUnit * 12 : _themes.metrics.baseUnit * 2);

const Circle = (0, _styledComponents.default)(SpinnerTemplate)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border: 3px solid\n        ", ";\n    opacity: 0.33;\n    visibility: visible;\n"])), props => props.secondary && props.theme.inactive || props.theme.detailText);
const Highlight = (0, _styledComponents.default)(SpinnerTemplate)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    border: 3px solid rgba(0, 0, 0, 0);\n    border-top: 3px solid\n        ", ";\n    animation: ", " 1s infinite ease-in-out;\n"])), props => props.secondary && props.theme.inactive || props.theme.detailText, rotate);

const Spinner = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Circle, props), /*#__PURE__*/_react.default.createElement(Highlight, props));
};

var _default = Spinner;
exports.default = _default;