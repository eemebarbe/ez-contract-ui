"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _components = require("../components");

var _MenuOverlay = _interopRequireDefault(require("../components/MenuOverlay"));

var _themes = require("../themes");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: none;\n    z-index: 40;\n    width: 100%;\n    font-size: ", "px;\n    justify-content: center;\n    align-items: center;\n    background-color: ", ";\n    bottom: 0;\n    position: absolute;\n    border-top: 1px solid ", ";\n    height: ", "px;\n    @media (max-width: 480px) {\n        display: flex;\n    }\n"])), _themes.metrics.smallText, props => props.menuOpen ? props.theme.overlayBackground : props.theme.background, props => props.menuOpen ? props.theme.overlayDetail : props.theme.inactive, _themes.metrics.mobileMenuHeight);

const MobileMenuBar = props => {
  const [menuOpen, _setMenuOpen] = (0, _react.useState)(false);

  const menu = () => {
    return /*#__PURE__*/_react.default.createElement(_components.Overlay, null, /*#__PURE__*/_react.default.createElement(_MenuOverlay.default, {
      setMenuOpen: () => _setMenuOpen(false)
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, menuOpen && menu(), /*#__PURE__*/_react.default.createElement(Container, {
    menuOpen: menuOpen
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => _setMenuOpen(!menuOpen)
  }, menuOpen ? "Close Menu" : "Open Menu")));
};

var _default = MobileMenuBar;
exports.default = _default;