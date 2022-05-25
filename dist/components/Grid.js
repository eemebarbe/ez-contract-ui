"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = exports.Grid = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Grid = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: grid;\n    grid-gap: ", "px;\n    height: ", ";\n    grid-template-columns: ", ";\n    grid-template-rows: ", ";\n"])), _themes.metrics.baseUnit * 8, props => props.height ? "".concat(props.height, "px") : "100%", props => "repeat(".concat(props.columns, ", 1fr)"), props => "repeat(".concat(props.rows, ", 1fr)"));

exports.Grid = Grid;

const Item = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    grid-column-start: ", ";\n    grid-column-end: ", ";\n    grid-row-start: ", ";\n    grid-row-end: ", ";\n"])), props => props.column ? props.column[0] : "auto", props => props.column ? props.column[1] : "auto", props => props.row ? props.row[0] : "auto", props => props.row ? props.row[1] : "auto");

exports.Item = Item;