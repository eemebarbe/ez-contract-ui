"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _GlobalStyle = require("../themes/GlobalStyle");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyledSelect = _styledComponents.default.select(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-family: \"Work Sans\";\n    ", "\n"])), _GlobalStyle.inputStyles);

const Select = props => {
  const renderOptions = () => {
    return props.options.map(x => {
      return /*#__PURE__*/_react.default.createElement("option", {
        value: x.id
      }, x.placeholder);
    });
  };

  return /*#__PURE__*/_react.default.createElement(StyledSelect, {
    onChange: props.onChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, props.placeholder), renderOptions());
};

var _default = Select;
exports.default = _default;