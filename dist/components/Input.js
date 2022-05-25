"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _GlobalStyle = require("../themes/GlobalStyle");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Input = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n"])), _GlobalStyle.inputStyles);

var _default = Input;
exports.default = _default;