"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("../media/logo.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo() {
  return /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "Logo"
  });
};

var _default = Logo;
exports.default = _default;