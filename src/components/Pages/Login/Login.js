import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../Firebase';
import { UserDataContext } from '../../Global/UserDataContext';

const Login = (props) => {
  const firebase = useContext(FirebaseContext);
  const { userData, login } = useContext(UserDataContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (userData.auth) {
      props.history.push('/');
    }
    if (password.length > 5 && email !== '') {
      setBtn(true);
    } else {
      setBtn(false);
    }
  }, [props.history, userData.auth, password.length, email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .loginUser(email, password)
      .then((AuthUser) => {
        firebase
          .user(AuthUser.user.uid)
          .get()
          .then((doc) => {
            const myData = doc.data();
            login(myData.name, myData.surname, myData.adress, myData.email);
          })
          .catch((error) => {
            console.log(error);
          });
        props.history.push('/');
      })
      .catch((error) => {
        setError(error);
        setPassword('');
      });
  };

  return userData.auth ? (
    <div className="loader"></div>
  ) : (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {error !== '' && <span>{error.message}</span>}
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  autoComplete="off"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="inputBox">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  autoComplete="off"
                  required
                />
                <label htmlFor="password">Mot de passe</label>
              </div>
              {btn ? (
                <button>Connexion</button>
              ) : (
                <button disabled>Connexion</button>
              )}
            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/forgetpassword">
                Mot de passe oublié? Récupérez-le!
              </Link>
              <br />
              <Link className="simpleLink" to="/signup">
                Pas encore de compte? Inscrivez-vous maintenant!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
