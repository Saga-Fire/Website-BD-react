"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Navbar = _interopRequireDefault(require("react-bootstrap/Navbar"));

var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));

var _NavDropdown = _interopRequireDefault(require("react-bootstrap/NavDropdown"));

var _Form = _interopRequireDefault(require("react-bootstrap/Form"));

var _FormControl = _interopRequireDefault(require("react-bootstrap/FormControl"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

require("../styles/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/anchor-is-valid */
//! Texte Navbar en blanc en fr et noir en eng
//! Menu déroulant ne fonctionne pas
var Navbarr = function Navbarr() {
  return /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    bg: "light",
    expand: "lg"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default.Brand, {
    href: "#home"
  }, "React-Bootstrap"), /*#__PURE__*/_react.default.createElement(_Navbar.default.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/_react.default.createElement(_Navbar.default.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/_react.default.createElement(_Nav.default, {
    className: "mr-auto"
  }, /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    href: "#home"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    href: "#link"
  }, "Link"), /*#__PURE__*/_react.default.createElement(_NavDropdown.default, {
    title: "Dropdown",
    id: "basic-nav-dropdown"
  }, /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Item, {
    href: "#action/3.1"
  }, "Action"), /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Item, {
    href: "#action/3.2"
  }, "Another action"), /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Item, {
    href: "#action/3.3"
  }, "Something"), /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Divider, null), /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Item, {
    href: "#action/3.4"
  }, "Separated link"))), /*#__PURE__*/_react.default.createElement(_Form.default, {
    inline: true
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    type: "text",
    placeholder: "Search",
    className: "mr-sm-2"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "outline-success"
  }, "Search")))) // <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <div className="container-fluid">
  //     <a className="navbar-brand" href="#">
  //       Navbar
  //     </a>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbarNavDropdown"
  //       aria-controls="navbarNavDropdown"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon" />
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <a className="nav-link active" aria-current="page" href="#">
  //             Home
  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">
  //             Features
  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">
  //             Pricing
  //           </a>
  //         </li>
  //         <li className="nav-item dropdown">
  //           <a
  //             className="nav-link dropdown-toggle"
  //             href="#"
  //             id="navbarDropdownMenuLink"
  //             role="button"
  //             data-bs-toggle="dropdown"
  //             aria-expanded="false"
  //           >
  //             Dropdown link
  //           </a>
  //           <ul
  //             className="dropdown-menu"
  //             aria-labelledby="navbarDropdownMenuLink"
  //           >
  //             <li>
  //               <a className="dropdown-item" href="#">
  //                 Action
  //               </a>
  //             </li>
  //             <li>
  //               <a className="dropdown-item" href="#">
  //                 Another action
  //               </a>
  //             </li>
  //             <li>
  //               <a className="dropdown-item" href="#">
  //                 Something else here
  //               </a>
  //             </li>
  //           </ul>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  ;
};

var _default = Navbarr;
exports.default = _default;