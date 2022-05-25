"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _toastContext = require("./contexts/toastContext");

var _userContext = require("./contexts/userContext");

var _components = require("./components");

var _App = _interopRequireDefault(require("./App.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EzContractUi {
  constructor(contract, resultCallback) {
    _defineProperty(this, "renderContractFunction", functionName => {
      return this[functionName];
    });

    _defineProperty(this, "allContractFunctions", () => {
      return this.abi.map(x => {
        return this.formComponent(x);
      });
    });

    _defineProperty(this, "authenticator", () => /*#__PURE__*/_react.default.createElement(_components.Authentication, {
      contract: this.contract
    }));

    _defineProperty(this, "userHistory", () => /*#__PURE__*/_react.default.createElement(_components.UserStatus, null, this.contract.provider));

    _defineProperty(this, "app", () => {
      return /*#__PURE__*/_react.default.createElement(_toastContext.ToastProvider, null, /*#__PURE__*/_react.default.createElement(_userContext.UserProvider, null, /*#__PURE__*/_react.default.createElement(_App.default, {
        contract: this.contract
      })));
    });

    this.contract = contract;
    this.abi = contract.interface.fragments;

    this.formComponent = abiObj => /*#__PURE__*/_react.default.createElement(_components.FunctionForm, {
      contract: contract,
      abi: abiObj,
      handleResult: resultCallback
    });

    this.abi.forEach(x => {
      this[x.name] = this.formComponent(x);
    });
  } //include direct access to hooks/context?


}

exports.default = EzContractUi;