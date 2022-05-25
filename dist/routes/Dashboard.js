"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _toastContext = require("../contexts/toastContext");

var _userContext = require("../contexts/userContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Dashboard(props) {
  console.log(props.contract.interface);
  let contractAddress = props.contract.address;
  const {
    sendMessage
  } = (0, _react.useContext)(_toastContext.ToastContext);
  const {
    userState,
    userDispatch
  } = (0, _react.useContext)(_userContext.UserContext);

  const handleResult = result => {
    if (result.hash) {
      userDispatch({
        type: "transaction",
        payload: result
      });
      sendMessage("Transaction complete!");
    } else {
      sendMessage(result);
    }
  };

  const allContractFunctions = () => {
    return props.contract.interface.functions.map(x => {
      return /*#__PURE__*/_react.default.createElement(_components.FunctionForm, {
        abi: x,
        contract: props.contract
      });
    });
  };

  return /*#__PURE__*/_react.default.createElement(_components.BodyWrapper, null, /*#__PURE__*/_react.default.createElement(_components.H1, null, contractAddress), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://etherscan.io/address/".concat(contractAddress),
    target: "_blank"
  }, "View the contract on Etherscan."), allContractFunctions());
}

var _default = Dashboard;
exports.default = _default;