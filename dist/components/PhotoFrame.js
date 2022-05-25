"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoFrame = exports.PhotoContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const PhotoFrame = _styledComponents.default.img(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    cursor: pointer;\n    display: inline-block;\n    background-color: ", ";\n    height: ", "px;\n    width: ", "px;\n    border-radius: ", "px;\n    box-shadow: ", ";\n    @media (max-width: 480px) {\n        height: ", "px;\n        width: ", "px;\n    }\n"])), props => props.theme.overlayBackground, _themes.metrics.baseUnit * 45, _themes.metrics.baseUnit * 30, _themes.metrics.globalBorderRadius, props => "0 1px ".concat(_themes.metrics.baseUnit / 2, "px 0 ").concat(props.theme.inactive), _themes.metrics.baseUnit * 45, _themes.metrics.baseUnit * 30);

exports.PhotoFrame = PhotoFrame;

const PhotoContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    line-height: 0;\n    height: ", "px;\n    margin-bottom: ", "px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n"])), _themes.metrics.baseUnit * 45, _themes.metrics.baseUnit * 6);

exports.PhotoContainer = PhotoContainer;