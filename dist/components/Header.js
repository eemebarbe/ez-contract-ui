"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ = require(".");

var _userContext = require("../contexts/userContext");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const HeaderWithRouter = props => {
  const [menuOpen, _setMenuOpen] = (0, _react.useState)(false);
  const {
    userState
  } = (0, _react.useContext)(_userContext.UserContext);
  const userId = userState.userId;
  const history = (0, _reactRouterDom.useNavigate)();
  const location = (0, _reactRouterDom.useLocation)();

  const pushTo = path => {
    location.pathname !== path && history(path);
  };

  const toggleMenu = () => {
    menuOpen ? _setMenuOpen(false) : _setMenuOpen(true);
  };

  const menuButtonState = () => {
    return menuOpen ? null : /*#__PURE__*/_react.default.createElement(_.Hamburger, {
      notifications: userState.newMessages,
      onClick: toggleMenu
    });
  };

  const menu = () => {
    return /*#__PURE__*/_react.default.createElement(_.Overlay, null, /*#__PURE__*/_react.default.createElement(_.MenuOverlay, {
      setMenuOpen: () => _setMenuOpen(false)
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, menuOpen && menu(), /*#__PURE__*/_react.default.createElement(Header, props, /*#__PURE__*/_react.default.createElement(HeaderInner, null, /*#__PURE__*/_react.default.createElement(CompanyLogo, {
    onClick: () => userId ? pushTo("/") : pushTo("/")
  }, "Deadline"), /*#__PURE__*/_react.default.createElement("div", null, userId && /*#__PURE__*/_react.default.createElement(WalletId, null, userId), userId && menuButtonState()))));
};

const Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    transform: translateY(", "px);\n    z-index: 8;\n    position: absolute;\n    background-color: ", ";\n    width: 100%;\n    height: ", "px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: ", ";\n    @media (max-width: 480px) {\n        display: none;\n    }\n"])), props => "-" + props.scrollTop, props => props.theme.secondLayerBackground, _themes.metrics.headerHeight, props => "0 1px ".concat(_themes.metrics.baseUnit / 2, "px 0 ").concat(props.theme.shadow));

const HeaderInner = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin: 0px ", "px;\n    width: ", "px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    div {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n"])), _themes.metrics.bodyPadding, _themes.metrics.bodyWidth);

const CompanyLogo = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: ", ";\n    background-color: ", ";\n    pointer-events: ", ";\n    border: 0;\n    outline: none;\n    padding: 0;\n    cursor: pointer;\n    outline: 0;\n    font-size: ", "px;\n"])), props => props.theme.mainText, props => props.theme.secondLayerBackground, props => props.samePath ? "none" : "initial", _themes.metrics.smallText);

const WalletId = (0, _styledComponents.default)(CompanyLogo)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    height: ", "px;\n    border-radius: ", "px;\n    padding: 0px ", "px;\n    font-size: ", "px;\n    margin-right: ", "px;\n"])), props => props.theme.secondaryColor, _themes.metrics.baseUnit * 4, _themes.metrics.baseUnit * 2, _themes.metrics.baseUnit * 2, _themes.metrics.baseFontUnit, _themes.metrics.baseUnit * 3);
var _default = HeaderWithRouter;
exports.default = _default;