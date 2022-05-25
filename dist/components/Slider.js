"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyledSlider = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: ", "px;\n    display: flex;\n    align-items: center;\n    margin-bottom: ", "px;\n    input {\n        height: ", "px;\n        appearance: none;\n        width: 100%;\n        border-radius: ", "px;\n        background: ", ";\n        outline: none;\n        -webkit-transition: 0.2s;\n        transition: opacity 0.2s;\n        &::-webkit-slider-thumb {\n            appearance: none;\n            width: ", "px;\n            height: ", "px;\n            border-radius: ", "px;\n            background: #4caf50;\n            cursor: pointer;\n        }\n    }\n"])), _themes.metrics.baseUnit * 4, _themes.metrics.baseUnit * 2, _themes.metrics.baseUnit / 2, _themes.metrics.globalBorderRadius, props => props.theme.inactive, _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit * 3);

const Slider = props => {
  return /*#__PURE__*/_react.default.createElement(StyledSlider, null, /*#__PURE__*/_react.default.createElement("input", {
    onChange: props.onChange,
    type: "range",
    min: "1",
    max: "3",
    step: "0.05",
    class: "slider",
    id: "myRange",
    value: props.value
  }));
};

var _default = Slider;
exports.default = _default;