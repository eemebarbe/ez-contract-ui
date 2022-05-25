"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _reactRouterDom = require("react-router-dom");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: ", "px;\n    width: 100%;\n    font-size: ", "px;\n    display: flex;\n    align-items: center;\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n"])), _themes.metrics.baseUnit * 8, _themes.metrics.H2, _themes.metrics.baseUnit * 6, _themes.metrics.baseUnit * 6);

const Link = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: none;\n    height: ", "px;\n    font-size: ", "px;\n    border: 0;\n    padding: 0;\n    cursor: pointer;\n    outline: 0;\n    display: flex;\n    align-items: center;\n    margin-right: ", "px;\n    &:hover {\n        color: ", ";\n        text-decoration: underline;\n    }\n"])), _themes.metrics.baseUnit * 2, _themes.metrics.H2, _themes.metrics.baseUnit, props => props.theme.primaryButton);

const Pointer = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-right: ", "px;\n"])), _themes.metrics.baseUnit);

const Breadcrumbs = props => {
  const history = (0, _reactRouterDom.useNavigate)();

  const links = () => {
    return props.links.map((thisLink, i) => {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, /*#__PURE__*/_react.default.createElement(Link, {
        onClick: () => history.goBack(thisLink.path)
      }, /*#__PURE__*/_react.default.createElement("span", null, thisLink.label)), /*#__PURE__*/_react.default.createElement(Pointer, null, "\u2192"));
    });
  };

  return /*#__PURE__*/_react.default.createElement(Container, null, links(), /*#__PURE__*/_react.default.createElement("span", null, props.current));
};

var _default = Breadcrumbs;
exports.default = _default;