"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _components = require("../components");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Wrapper = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmargin-bottom: ", "px;\n"])), _themes.metrics.baseUnit * 3);

const MultiSelect = props => {
  const options = props.options.map(thisOption => {
    return /*#__PURE__*/_react.default.createElement(_components.Checkbox, {
      onChange: props.onChange,
      name: thisOption.id,
      type: "checkbox",
      label: thisOption.placeholder
    });
  });
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, options);
};

var _default = MultiSelect;
exports.default = _default;