"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Logo = _interopRequireDefault(require("./Logo"));

var _Navbar = _interopRequireDefault(require("./Navbar"));

require("../styles/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4 bd-example"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4"
  })));
};

var _default = Header;
exports.default = _default;