import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../Firebase';
import { UserDataContext } from '../../Global/UserDataContext';

const Signup = (props) => {
  const firebase = useContext(FirebaseContext);
  const { userData, login } = useContext(UserDataContext);

  const data = {
    name: '',
    surname: '',
    adress: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState('');

  useEffect(() => {
    if (userData.auth) {
      props.history.push('/');
    }
  }, [props.history, userData.auth]);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, adress, email } = loginData;
    firebase
      .signupUser(email, password)
      .then((authUser) => {
        return firebase.user(authUser.user.uid).set({
          name,
          surname,
          adress,
          email,
        });
      })
      .then(() => {
        login(name, surname, adress, email);
        setLoginData({ ...data });
        props.history.push('/');
      })
      .catch((error) => {
        setError(error);
        setLoginData({ ...data });
      });
  };

  const { name, surname, adress, email, password, confirmPassword } = loginData;
  const btn =
    name === '' ||
    surname === '' ||
    adress === '' ||
    email === '' ||
    password === '' ||
    password !== confirmPassword ? (
      <button disabled>Inscription</button>
    ) : (
      <button>Inscription</button>
    );
  // Gestion Error
  const errorMsg = error !== '' && <span>{error.message}</span>;

  return userData.auth ? (
    <div className="loader"></div>
  ) : (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {errorMsg}
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={name}
                  type="text"
                  id="name"
                  autoComplete="off"
                  required
                />
                <label htmlFor="name">Prénom</label>
              </div>
              <div className="inputBox">
                <input
                  style={{ textTransform: 'uppercase' }}
                  onChange={handleChange}
                  value={surname}
                  type="text"
                  id="surname"
                  autoComplete="off"
                  required
                />
                <label htmlFor="surname">Nom</label>
              </div>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={adress}
                  type="text"
                  id="adress"
                  autoComplete="off"
                  required
                />
                <label htmlFor="adress">Adresse postale</label>
              </div>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={email}
                  type="email"
                  id="email"
                  autoComplete="off"
                  required
                />
                <label htmlFor="email">Adresse email</label>
              </div>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={password}
                  type="password"
                  id="password"
                  autoComplete="off"
                  required
                />
                <label htmlFor="password">Mot de passe</label>
              </div>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={confirmPassword}
                  type="password"
                  id="confirmPassword"
                  autoComplete="off"
                  required
                />
                <label htmlFor="confirmPassword">
                  Confirmer le mot de passe
                </label>
              </div>
              {btn}
            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/login">
                Déjà inscrit? Connectez-vous.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
