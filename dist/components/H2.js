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

const H2 = _styledComponents.default.h2(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", "px;\n    line-height: 1.5;\n    margin: 0;\n    margin-bottom: ", "px;\n    position: relative;\n    @media (max-width: 480px) {\n        font-size: ", "px;\n    }\n"])), _themes.metrics.H2, _themes.metrics.baseUnit * 3, _themes.metrics.regularText);

var _default = H2;
exports.default = _default;