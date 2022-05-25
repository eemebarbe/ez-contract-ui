"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const WalletId = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    background-color: ", ";\n    pointer-events: ", ";\n    border: 0;\n    outline: none;\n    padding: 0;\n    cursor: pointer;\n    outline: 0;\n    font-size: ", "px;\n    height: ", "px;\n    border-radius: ", "px;\n    font-size: ", "px;\n    margin-right: ", "px;\n"])), props => props.theme.mainText, props => props.theme.secondLayerBackground, props => props.samePath ? "none" : "initial", _themes.metrics.smallText, _themes.metrics.baseUnit * 4, _themes.metrics.baseUnit * 2, _themes.metrics.baseFontUnit, _themes.metrics.baseUnit * 3);

const UserStatus = props => {
  return /*#__PURE__*/_react.default.createElement(WalletId, null, props.id);
};

var _default = UserStatus;
exports.default = _default;