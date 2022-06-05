"use strict";

var _reactDom = require("react-dom");

var _ezContractUi = _interopRequireDefault(require("./ez-contract-ui"));

var _ethers = require("ethers");

var _ExampleContract = _interopRequireDefault(require("./ExampleContract.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const provider = new _ethers.ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new _ethers.ethers.Contract(contractAddress, _ExampleContract.default.abi, signer);
const contractUi = new _ezContractUi.default(contract, () => {});
const rootElement = document.getElementById("root");
(0, _reactDom.render)( /*#__PURE__*/React.createElement(React.Fragment, null, contractUi.app()), rootElement);