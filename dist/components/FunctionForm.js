"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const FunctionForm = props => {
  const {
    abi
  } = props;
  const [formData, setFormData] = (0, _react.useState)({});
  const [loading, setLoading] = (0, _react.useState)(false);

  const renderInputs = (inputs, functionName) => {
    //ethers.utils.getAddress(address) checks if address is valid
    return inputs.map(x => {
      var _formData$functionNam, _formData$functionNam2;

      return /*#__PURE__*/_react.default.createElement(_components.Input, {
        name: x.name,
        placeholder: x.name,
        value: (_formData$functionNam = formData === null || formData === void 0 ? void 0 : (_formData$functionNam2 = formData[functionName]) === null || _formData$functionNam2 === void 0 ? void 0 : _formData$functionNam2[x.name]) !== null && _formData$functionNam !== void 0 ? _formData$functionNam : "",
        onChange: e => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          [functionName]: _objectSpread(_objectSpread({}, formData[functionName]), {}, {
            [x.name]: e.target.value
          })
        }))
      });
    });
  };

  const callContractFunction = async (e, functionJson) => {
    e.preventDefault();
    setLoading(true);
    const inputs = formData[functionJson.name];
    const thisFunctionAbi = abi.find(x => x.name === functionJson.name);
    const sortedArguments = thisFunctionAbi.inputs.map(x => {
      const entry = Object.entries(inputs).find(y => x.name === y[0]);
      return entry[1];
    });

    try {
      const callFunction = await props.contract[functionJson.name](...sortedArguments);
      setLoading(false);
      props.handleResult(callFunction);
    } catch (err) {
      setLoading(false);
      props.handleResult(err);
    }
  };

  const isFormComplete = (functionName, inputs) => {
    var _formData$functionNam3;

    const thisFormData = (_formData$functionNam3 = formData[functionName]) !== null && _formData$functionNam3 !== void 0 ? _formData$functionNam3 : {};
    const completedInputs = Object.entries(thisFormData).filter(x => x[1]);
    return inputs.length === completedInputs.length;
  };

  return /*#__PURE__*/_react.default.createElement(_components.Card, null, /*#__PURE__*/_react.default.createElement(_components.Form, null, /*#__PURE__*/_react.default.createElement(_components.H2, null, abi.name), renderInputs(abi.inputs, abi.name), /*#__PURE__*/_react.default.createElement(_components.Button, {
    loading: loading,
    disabled: !isFormComplete(abi.name, abi.inputs),
    onClick: e => callContractFunction(e, abi)
  }, "Submit")));
};

var _default = FunctionForm;
exports.default = _default;