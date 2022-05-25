"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const TextArea = _styledComponents.default.textarea(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: ", "px;\n    width: 100%;\n    box-sizing: border-box;\n    padding: ", "px ", "px;\n    overflow: auto;\n    outline: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n    resize: none;\n    margin-bottom: ", "px;\n    line-height: 2;\n    font-size: ", "px;\n    border: 1px solid ", ";\n    border-radius: ", "px;\n    color: ", ";\n    background: transparent;\n    @media (max-width: 480px) {\n        font-size: ", "px;\n    }\n"])), _themes.metrics.baseUnit * 13, _themes.metrics.baseUnit * 2, _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit * 3, _themes.metrics.regularText, props => props.theme.inactive, _themes.metrics.globalBorderRadius, props => props.theme.mainText, _themes.metrics.smallText);

var _default = TextArea;
exports.default = _default;