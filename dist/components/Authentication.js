"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _userContext = require("../contexts/userContext");

var _toastContext = require("../contexts/toastContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Authentication(props) {
  const provider = props.contract.provider;
  const [metaMaskLoadState, setMetaMaskLoadState] = (0, _react.useState)(false);
  const {
    userState,
    userDispatch
  } = (0, _react.useContext)(_userContext.UserContext);
  const {
    sendMessage
  } = (0, _react.useContext)(_toastContext.ToastContext);

  const authWithMetaMask = async () => {
    setMetaMaskLoadState(true);
    let requestConnection;

    try {
      requestConnection = await provider.send("eth_requestAccounts", []);
    } catch (_unused) {
      sendMessage("Wallet was not connected.");
    }

    userDispatch({
      type: "userId",
      payload: requestConnection[0]
    });
    sendMessage("Welcome!");
    setMetaMaskLoadState(false);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.H1, null, "Connect your wallet"), /*#__PURE__*/_react.default.createElement(_components.MetaMaskAuth, {
    loading: metaMaskLoadState,
    onClick: authWithMetaMask
  }));
}

var _default = Authentication;
exports.default = _default;