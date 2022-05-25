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

const Card = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: ", "px;\n    padding: ", "px;\n    margin-bottom: ", "px;\n    font-size: ", "px;\n    box-shadow: ", ";\n    line-height: 2;\n    display: flex;\n    flex-direction: column;\n    label {\n        margin-right: ", "px;\n    }\n"])), props => props.theme.secondLayerBackground, _themes.metrics.globalBorderRadius, _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit * 3, _themes.metrics.smallText, props => "0 1px ".concat(_themes.metrics.baseUnit / 2, "px 0 ").concat(props.theme.shadow), _themes.metrics.baseUnit * 2);

var _default = Card;
exports.default = _default;