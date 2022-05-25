"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _themes = require("../themes");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const BodyOuter = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n    &.fade-appear,\n    &.fade-enter {\n        opacity: 0;\n        z-index: 1;\n        transform: translateX(", ");\n        @media (max-width: 480px) {\n            transform: translateX(0px);\n        }\n    }\n    &.fade-appear-active,\n    &.fade-enter.fade-enter-active {\n        opacity: 1;\n        transform: translateX(0px);\n        transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;\n    }\n\n    &.fade-exit {\n        opacity: 1;\n        transform: translateX(0px);\n    }\n    &.fade-exit.fade-exit-active {\n        opacity: 0;\n        transform: translateX(", ");\n        transition: opacity 400ms linear, transform 400ms ease-in;\n        @media (max-width: 480px) {\n            transform: translateX(0px);\n        }\n    }\n"])), props => props.action === "PUSH" ? "24px" : "-24px", props => props.action === "PUSH" ? "-24px" : "24px");

const BodyWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-left: ", "px;\n    margin-right: ", "px;\n    padding-top: ", "px;\n    width: ", "px;\n    @media (max-width: 480px) {\n        width: 100%;\n        padding-top: 0px;\n    }\n"])), _themes.metrics.bodyPadding, props => _themes.metrics.bodyPadding - props.scrollbarWidth, _themes.metrics.headerHeight, _themes.metrics.bodyWidth);

const BodyInner = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding-bottom: ", "px;\n    @media (max-width: 480px) {\n        padding-bottom: ", "px;\n    }\n"])), _themes.metrics.headerHeight, _themes.metrics.headerHeight);

const Wrapper = props => {
  const history = (0, _reactRouterDom.useNavigate)();
  const scrollRef = (0, _react.useRef)();
  const [scrollbarWidth, setScrollbarWidth] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }

    const scrollDiv = document.createElement("div");
    scrollDiv.setAttribute("style", "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;");
    document.getElementsByTagName("body")[0].appendChild(scrollDiv);
    document.body.appendChild(scrollDiv);
    const calculatedWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    setScrollbarWidth(calculatedWidth);
  }, []);
  return /*#__PURE__*/_react.default.createElement(BodyOuter, {
    action: history.action,
    ref: scrollRef
  }, /*#__PURE__*/_react.default.createElement(BodyWrapper, {
    scrollbarWidth: scrollbarWidth
  }, /*#__PURE__*/_react.default.createElement(BodyInner, null, props.children)));
};

var _default = Wrapper;
exports.default = _default;