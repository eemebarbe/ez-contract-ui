"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProvider = exports.UserContext = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styleMode = window.localStorage.getItem("styleMode");
const initialState = {
  userId: null,
  transactions: [],
  styleMode: styleMode ? styleMode : "main",
  verifying: false,
  redirect: null
};
const UserContext = /*#__PURE__*/(0, _react.createContext)(initialState);
exports.UserContext = UserContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "userId":
      return _objectSpread(_objectSpread({}, state), {}, {
        userId: action.payload
      });

    case "transaction":
      return _objectSpread({}, state);

    case "verifying":
      return _objectSpread(_objectSpread({}, state), {}, {
        verifying: action.payload
      });

    case "styleMode":
      return _objectSpread(_objectSpread({}, state), {}, {
        styleMode: action.payload
      });

    case "redirect":
      return _objectSpread(_objectSpread({}, state), {}, {
        redirect: action.payload
      });

    case "signOut":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        cart: state.cart
      });

    case "sales":
      return _objectSpread(_objectSpread({}, state), {}, {
        sales: action.payload
      });

    default:
      return state;
  }
};

const UserProvider = props => {
  const [userState, userDispatch] = (0, _react.useReducer)(reducer, initialState);
  return /*#__PURE__*/_react.default.createElement(UserContext.Provider, {
    value: {
      userState,
      userDispatch
    }
  }, props.children);
};

exports.UserProvider = UserProvider;