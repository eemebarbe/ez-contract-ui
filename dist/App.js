"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _components = require("./components");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _themes = require("./themes");

var _userContext = require("./contexts/userContext");

var _GlobalStyle = _interopRequireDefault(require("./themes/GlobalStyle"));

var _Dashboard = _interopRequireDefault(require("./routes/Dashboard"));

var _Lander = _interopRequireDefault(require("./routes/Lander"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function App(props) {
  const {
    provider
  } = props.contract;
  const [initializationComplete, setInitComplete] = (0, _react.useState)(false);
  const {
    userState,
    userDispatch
  } = (0, _react.useContext)(_userContext.UserContext);
  const styleMode = window.localStorage.getItem("styleMode");
  const userId = userState.userId;
  (0, _react.useEffect)(() => {
    const asyncFunction = async () => {
      const isAccountConnected = await provider.send("eth_accounts", []);

      if (isAccountConnected) {
        userDispatch({
          type: "userId",
          payload: isAccountConnected[0]
        });
      }

      setInitComplete(true);
    };

    asyncFunction();
  }, []);
  (0, _react.useEffect)(() => {
    if (!styleMode) {
      let newStyle = "main";

      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        newStyle = "dark";
      }

      userDispatch({
        type: "styleMode",
        payload: newStyle
      });
      window.localStorage.setItem("styleMode", newStyle);
    }
  }, []);

  const routeWithAuth = destination => {
    return !userId ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
      to: {
        pathname: "/"
      }
    }) : destination;
  };

  const reRouteIfAuthenticated = destination => {
    return userId ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
      to: "/dashboard"
    }) : destination;
  };

  const router = () => {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_components.Header, null), /*#__PURE__*/_react.default.createElement(_components.Toast, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "/",
      element: reRouteIfAuthenticated( /*#__PURE__*/_react.default.createElement(_Lander.default, {
        contract: props.contract
      }))
    }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "dashboard",
      element: routeWithAuth( /*#__PURE__*/_react.default.createElement(_Dashboard.default, {
        contract: props.contract
      }))
    })));
  };

  const renderApp = () => {
    const app = !initializationComplete ? /*#__PURE__*/_react.default.createElement(_components.CenteredDiv, {
      vertical: true,
      horizontal: true
    }, /*#__PURE__*/_react.default.createElement(_components.Spinner, {
      large: true,
      secondary: true
    })) : router();
    return app;
  };

  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: styleMode && styleMode === "dark" ? _themes.colors.dark : _themes.colors.main
  }, /*#__PURE__*/_react.default.createElement(_GlobalStyle.default, null), /*#__PURE__*/_react.default.createElement(AppWrapper, null, renderApp()));
}

const AppWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    position: absolute;\n"])));

var _default = App;
exports.default = _default;