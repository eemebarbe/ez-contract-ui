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

const Note = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: ", "px;\n  line-height: 2;\n  font-size: ", "px;\n  @media (max-width: 480px) {\n    font-size: ", "px;\n  }\n"])), _themes.metrics.baseUnit, _themes.metrics.regularText, _themes.metrics.smallText);

var _default = Note;
exports.default = _default;