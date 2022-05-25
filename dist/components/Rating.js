"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../themes");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Stars = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", "px;\n    line-height: 2;\n    color: ", ";\n"])), _themes.metrics.H2, props => props.theme.highlight);

const Rating = props => {
  const [rating, setRating] = (0, _react.useState)(0);
  const [hovered, setHovered] = (0, _react.useState)(0);
  const [input, setInput] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    setInput(props.input);
    setRating(props.rating);
  }, []);

  const changeRating = newRating => {
    setRating(newRating);

    if (props.onChange) {
      props.onChange(newRating);
    }
  };

  const hoverRating = rating => {
    setHovered(rating);
  };

  const renderStars = () => {
    const stars = [1, 2, 3, 4, 5];
    return stars.map(star => {
      return /*#__PURE__*/_react.default.createElement("span", {
        style: {
          cursor: "pointer"
        },
        onClick: () => input && changeRating(star),
        onMouseEnter: () => input && hoverRating(star),
        onMouseLeave: () => input && hoverRating(0)
      }, hovered >= star || rating >= star ? "★" : "☆");
    });
  };

  return /*#__PURE__*/_react.default.createElement(Stars, {
    className: "rating"
  }, renderStars());
};

var _default = Rating;
exports.default = _default;