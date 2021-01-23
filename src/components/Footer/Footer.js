import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Footer = () => {
  const firebase = useContext(FirebaseContext);

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
    <footer className="footer-bs p-4 bg-dark">
      <div className="row">
        <div className="col-md-3 footer-brand animated fadeInLeft">
          <img src={logo} alt="logo"></img>
          <p className="mt-3">
            Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
            porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget
            faucibus faucibus, purus erat eleifend enim, porta pellentesque ex
            mi ut sem.
          </p>
          <p>© 2020 Les Hobbits du Web, All rights reserved</p>
        </div>
        <div className="col-md-4 footer-nav animated fadeInUp">
          <h4>Menu</h4>
          <div className="col-md-6">
            <ul className="pages">
              <li>
                <a href="/">Accueil</a>
              </li>
              <Link to="/">
                <li>BD</li>
              </Link>
              <li>
                <a href="/">Manga</a>
              </li>
              <li>
                <a href="/">Comics</a>
              </li>
              <Link to="/login">
                <li>Connexion</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-md-2 footer-social animated fadeInDown">
          <h4>Nous suivre</h4>
          <ul>
            <li>
              <a href="/">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 footer-ns animated fadeInRight">
          <h4>Newsletter</h4>
          <p>
            Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela
            nos informations de contact dans les conditions d'utilisation du
            site
          </p>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Votre Email"
              aria-describedby="emailHelp"
            />
            <span className="input-group-btn">
              <button className="btn " type="submit">
                Envoyer
              </button>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
