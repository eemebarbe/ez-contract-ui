"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _toastContext = require("../contexts/toastContext");

var _userContext = require("../contexts/userContext");

var _themes = require("../themes");

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const transitionStyles = {
  entered: {
    transform: "translateY(-".concat(_themes.metrics.baseUnit * 11, "px)"),
    transition: "transform 400ms ease-in-out"
  },
  exiting: {
    transform: "translateY(0px)",
    transition: "transform 400ms ease-in-out"
  },
  exited: {
    transform: "translateY(0px)"
  }
};

const ToastContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    z-index: 2;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    bottom: -", "px;\n    pointer-events: none;\n    @media (max-width: 480px) {\n        bottom: ", "px;\n    }\n    div {\n        width: ", "px;\n        display: flex;\n        justify-content: flex-end;\n        font-size: ", "px;\n        @media (max-width: 480px) {\n            width: 100%;\n            padding: 0;\n            margin: 0px ", "px;\n            font-size: ", "px;\n        }\n        div {\n            visibility: ", ";\n            border-radius: ", "px;\n            padding: 0;\n            width: 50%;\n            line-height: ", "px;\n            color: ", ";\n            background-color: ", ";\n            display: flex;\n            justify-content: center;\n            align-content: center;\n            div {\n                color: ", ";\n                padding: ", "px;\n                width: 100%;\n                text-align: center;\n                @media (max-width: 480px) {\n                    padding: ", "px;\n                }\n            }\n        }\n    }\n"])), _themes.metrics.baseUnit * 9, props => -(_themes.metrics.baseUnit * 9) + (props.loggedIn && _themes.metrics.mobileMenuHeight), _themes.metrics.bodyWidth, _themes.metrics.regularText, _themes.metrics.baseUnit * 2, _themes.metrics.smallText, props => props.visibility, _themes.metrics.globalBorderRadius, _themes.metrics.baseUnit * 2, props => props.theme.detailText, props => props.theme.secondaryColor, props => props.theme.detailText, _themes.metrics.baseUnit * 3, _themes.metrics.baseUnit * 2);

const ToastWithContext = props => {
  const [show, setShow] = (0, _react.useState)(false);
  const {
    message,
    sendMessage
  } = (0, _react.useContext)(_toastContext.ToastContext);
  const {
    userState
  } = (0, _react.useContext)(_userContext.UserContext);
  (0, _react.useEffect)(() => {
    if (message) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    }
  }, [message]);

  const onRest = () => {
    !show && sendMessage("");
  };

  return /*#__PURE__*/_react.default.createElement(_Transition.default, {
    in: show,
    timeout: 400,
    onExited: onRest
  }, motionState => /*#__PURE__*/_react.default.createElement(ToastContainer, _extends({}, props, {
    loggedIn: userState.userId,
    id: "container",
    style: _objectSpread({}, transitionStyles[motionState])
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, message)))));
};

var _default = ToastWithContext;
exports.default = _default;