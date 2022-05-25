"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _components = require("../components");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SuggestionInput = props => {
  const [showDropDown, setShowDropDown] = (0, _react.useState)(false);
  const [dontBlur, setDontBlur] = (0, _react.useState)(false);

  const suggestionList = () => {
    const onClickTag = tag => {
      props.onSelectSuggestion(tag);
      setShowDropDown(false);
    };

    return props.suggestions.map((thisSuggestion, i) => {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: i,
        onClick: () => onClickTag(thisSuggestion)
      }, thisSuggestion.placeholder);
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(DropDownInput, _extends({
    onFocus: () => setShowDropDown(true),
    onBlur: () => !dontBlur && setShowDropDown(false),
    autoComplete: "off"
  }, props)), /*#__PURE__*/_react.default.createElement(DropDown, {
    onMouseEnter: () => setDontBlur(true),
    onMouseLeave: () => setDontBlur(false),
    showDropDown: showDropDown
  }, /*#__PURE__*/_react.default.createElement(Header, null, "Suggestions:"), /*#__PURE__*/_react.default.createElement("ul", null, suggestionList())));
};

const DropDownInput = (0, _styledComponents.default)(_components.Input)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: 0;\n"])));

const DropDown = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-radius: ", "px;\n    visibility: ", ";\n    background: ", ";\n    position: absolute;\n    border: 1px solid ", ";\n    box-sizing: border-box;\n    margin-top: ", "px;\n    padding: ", "px;\n    ul {\n        display: inline-flex;\n        flex-wrap: wrap;\n        margin: 0;\n        padding: 0;\n        margin-right: ", "px;\n        li {\n            align-items: center;\n            font-size: ", "px;\n            background: ", ";\n            border-radius: 2px;\n            color: ", ";\n            height: ", "px;\n            padding: 0px ", "px;\n            margin-right: ", "px;\n            display: flex;\n            list-style: none;\n            cursor: pointer;\n        }\n    }\n"])), _themes.metrics.globalBorderRadius, props => props.showDropDown ? "visible" : "hidden", props => props.theme.background, props => props.theme.inactive, _themes.metrics.baseUnit * 20, _themes.metrics.baseUnit * 2, _themes.metrics.baseUnit, _themes.metrics.smallText, props => props.theme.primaryButton, props => props.theme.detailText, _themes.metrics.baseUnit * 4, _themes.metrics.baseUnit, _themes.metrics.baseUnit);

const Header = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-bottom: ", "px;\n    font-size: ", "px;\n    display: flex;\n    align-items: center;\n"])), _themes.metrics.baseUnit * 2, _themes.metrics.smallText);

var _default = SuggestionInput;
exports.default = _default;