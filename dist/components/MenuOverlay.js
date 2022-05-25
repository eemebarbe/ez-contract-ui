"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactTransitionGroup = require("react-transition-group");

var _userContext = require("../contexts/userContext");

var _components = require("../components");

var _adapters = require("../adapters");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const MenuOverlay = props => {
  const {
    userState,
    userDispatch
  } = (0, _react.useContext)(_userContext.UserContext);
  const styleMode = window.localStorage.getItem("styleMode");
  const location = (0, _reactRouterDom.useLocation)();
  const history = (0, _reactRouterDom.useNavigate)();

  const signOut = async () => {
    props.setMenuOpen();
    await _adapters.UserAdapter.signOut();
    userDispatch({
      type: "userId",
      payload: null
    });
  };

  const pushTo = path => {
    props.setMenuOpen();
    !samePath(path) && history(path);
  };

  const samePath = path => {
    return location.pathname === path;
  };

  const toggleStyles = () => {
    const newStyle = styleMode === "main" ? "dark" : "main";
    userDispatch({
      type: "styleMode",
      payload: newStyle
    });
    window.localStorage.setItem("styleMode", newStyle);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(MenuHeader, null, /*#__PURE__*/_react.default.createElement(HeaderInner, null, /*#__PURE__*/_react.default.createElement(_components.Switch, {
    checked: styleMode === "dark",
    onChange: toggleStyles
  }), /*#__PURE__*/_react.default.createElement(_components.Close, {
    onClick: () => props.setMenuOpen()
  }))), /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(BackgroundInner, null, /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.TransitionGroup, {
    appear: true
  }, /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    child: 0,
    timeout: 1000,
    classNames: "fade"
  }, /*#__PURE__*/_react.default.createElement(MenuItem, {
    samePath: samePath("/dashboard"),
    onClick: () => pushTo("/dashboard")
  }, "Dashboard")), /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    child: 1,
    timeout: 1000,
    classNames: "fade"
  }, /*#__PURE__*/_react.default.createElement(MenuItem, {
    onClick: () => pushTo("/createagreement"),
    samePath: samePath("/createagreement")
  }, /*#__PURE__*/_react.default.createElement(_components.Badge, {
    notifications: userState.newMessages
  }, "Create Agreement"))), /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    child: 2,
    timeout: 1000,
    classNames: "fade"
  }, /*#__PURE__*/_react.default.createElement(MenuItem, {
    samePath: samePath("/settings"),
    onClick: () => pushTo("/settings")
  }, "Settings")), /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    child: 3,
    timeout: 1000,
    classNames: "fade"
  }, /*#__PURE__*/_react.default.createElement(MenuItem, {
    onClick: signOut
  }, "Disconnect")), /*#__PURE__*/_react.default.createElement(MenuItem, null, /*#__PURE__*/_react.default.createElement(_components.Switch, {
    checked: styleMode === "dark",
    onChange: toggleStyles
  }))))));
};

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    @media (max-width: 480px) {\n        align-items: center;\n    }\n"])));

const MenuHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: ", "px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 1px solid ", ";\n    @media (max-width: 480px) {\n        display: none;\n    }\n"])), _themes.metrics.headerHeight, props => props.theme.shadow);

const HeaderInner = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin: 0px ", "px;\n    width: ", "px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    div {\n        display: inline-flex;\n    }\n"])), _themes.metrics.baseUnit * 2, _themes.metrics.bodyWidth);

const BackgroundInner = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin: 0px ", "px;\n    width: ", "px;\n    @media (max-width: 480px) {\n        margin-bottom: ", "px;\n    }\n"])), _themes.metrics.bodyPadding, _themes.metrics.bodyWidth, _themes.metrics.mobileMenuHeight);

const MenuItem = _styledComponents.default.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    position: relative;\n    display: block;\n    background-color: transparent;\n    color: ", ";\n    pointer-events: ", ";\n    border: 0;\n    margin-top: ", "px;\n    text-align: left;\n    outline: none;\n    padding: 0;\n    font-size: ", "px;\n    font-weight: 700;\n    line-height: 2;\n    cursor: pointer;\n    outline: 0;\n    &:last-child {\n        display: none;\n    }\n    @media (max-width: 480px) {\n        padding: 0;\n        font-size: ", "px;\n        margin-top: 0;\n        line-height: ", "px;\n        height: 1;\n        text-align: center;\n        &:last-child {\n            display: initial;\n        }\n    }\n    &.fade-appear,\n    &.fade-enter {\n        opacity: 0;\n        transform: translateY(24px);\n    }\n    &.fade-appear-active,\n    &.fade-enter.fade-enter-active {\n        opacity: 1;\n        transform: translateY(0);\n        transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;\n        transition-delay: ", "s;\n    }\n    &.switch-appear,\n    &.switch-enter {\n        opacity: 0;\n    }\n    &.switch-appear-active,\n    &.switch-enter.switch-enter-active {\n        opacity: 1;\n        transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;\n        transition-delay: ", "s;\n    }\n"])), props => props.samePath ? props.theme.overlayDetail : "inherit", props => props.samePath ? "none" : "initial", _themes.metrics.baseUnit * 4, _themes.metrics.H1, _themes.metrics.H2, _themes.metrics.baseUnit * 8, props => props.child * 0.2, props => props.child * 0.2);

var _default = MenuOverlay;
exports.default = _default;