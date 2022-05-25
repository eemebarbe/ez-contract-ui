"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputStyles = exports.default = exports.GlobalStyle = void 0;

var _themes = require("../themes");

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n@import url('https://fonts.googleapis.com/css?family=Work+Sans:wght@100;300;700&display=swap');\n  *, *:before, *:after { \n    box-sizing: border-box;\n  }\n  html {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    font-size: ", "px;\n    background-color: ", ";\n    color: ", ";\n    @media (max-width: 480px){ \n      font-size: ", "px;\n    }\n  }\n  body {\n    input, textarea, button {\n      font-family: inherit;\n    }\n    font-family: 'Work Sans', sans-serif;\n    margin: 0;\n    padding: 0;\n    -webkit-font-smooth: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    list-style-position: inside;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    input:-webkit-autofill, \n    input:-webkit-autofill:hover,\n    input:-webkit-autofill:focus,\n    input:-webkit-autofill:active {\n      -webkit-box-shadow: 0 0 0px 1000px ", " inset;\n      box-shadow: 0 0 0px 1000px ", " inset;\n      -webkit-text-fill-color: ", " !important;\n      background-color: ", " !important;\n    }\n  }\n  #root {\n      height: 100%;\n  }"])), _themes.metrics.baseUnit, props => props.theme.background, props => props.theme.mainText, _themes.metrics.baseUnit, props => props.theme.background, props => props.theme.background, props => props.theme.mainText, props => props.theme.background);
exports.GlobalStyle = GlobalStyle;
const inputStyles = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: transparent;\n    color: ", ";\n    border: none;\n    border-radius: 0;\n    border-bottom: 1px solid ", ";\n    outline: none;\n    margin: none;\n    margin-bottom: ", "px;\n    padding: 0;\n    height: ", "px;\n    width: ", "px;\n    font-size: ", "px;\n    &::placeholder {\n        color: ", ";\n    }\n    &:focus {\n        border-bottom: 1px solid ", ";\n    }\n    box-sizing: content-box;\n    @media (max-width: 480px) {\n        width: 100%;\n    }\n"])), props => props.theme.mainText, props => props.theme.inactive, _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit * 5, _themes.metrics.baseUnit * 30, _themes.metrics.regularText, props => props.theme.inactive, props => props.theme.mainText);
exports.inputStyles = inputStyles;
var _default = GlobalStyle;
exports.default = _default;