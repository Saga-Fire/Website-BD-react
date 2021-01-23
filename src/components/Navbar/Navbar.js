import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import { ProductContext } from '../Global/ProductContext';
import NavLog from './NavLog';

const Navbar = () => {
  const firebase = useContext(FirebaseContext);
  const { cart } = useContext(ProductContext);

  const [logo, setLogo] = useState(null);

  let logoRef = firebase.storageRef().child('Media/logo.jpg');

  // Get the download URL
  logoRef
    .getDownloadURL()
    .then((url) => {
      setLogo(url);
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });

  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark text-white text-center">
      <div class="container-fluid">
        <Link to="/" className="navbar-brand d-flex w-50 mr-auto ms-2">
          <img src={logo} alt="logo"></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-5 ml-auto">
            <li class="nav-item">
              <Link to="/Bd/0" className="nav-link text-white fs-5">
                BD
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Manga" className="nav-link text-white fs-5">
                MANGA
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Comics" className="nav-link text-white fs-5">
                COMIC
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Search" className="nav-link text-white fs-5">
                <i className="fas fa-search"></i>
              </Link>
            </li>
            <li className="nav-item">
              <NavLog />
            </li>
            <div className="nav-cart">
              <Link to="/Panier" className="nav-link text-white fs-5">
                <span className="badge badge-warning "> {cart.length} </span>
                <i className="fas fa-shopping-bag"></i>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
