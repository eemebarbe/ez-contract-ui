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

const H1 = _styledComponents.default.h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", "px;\n    line-height: 2;\n    font-weight: 700;\n    margin: ", "px 0px;\n    position: relative;\n    @media (max-width: 480px) {\n        font-size: ", "px;\n    }\n"])), _themes.metrics.H1, _themes.metrics.baseUnit * 4, _themes.metrics.H1Mobile);

var _default = H1;
exports.default = _default;