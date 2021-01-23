import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../Firebase';
import { UserDataContext } from '../../Global/UserDataContext';

const style = {
  border: '1px solid green',
  background: 'green',
  color: '#ffffff',
};

const ForgetPassword = (props) => {
  const firebase = useContext(FirebaseContext);
  const { userData } = useContext(UserDataContext);

  const [email, setEmail] = useState('');
  const [success, setSucces] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userData.auth) {
      props.history.push('/');
    }
  }, [props.history, userData.auth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .passwordReset(email)
      .then(() => {
        setError(null);
        setSucces(
          `Un email vous a été envoyé. Consultez le dans votre boite ${email} pour renouveller votre mot de passe`
        );
        setEmail('');
        setTimeout(() => {
          props.history.push('/login');
        }, 5000);
      })
      .catch((error) => {
        setError(error);
        setEmail('');
      });
  };

  const disabled = email === '';

  return userData.auth ? (
    <div className="loader"></div>
  ) : (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftForget"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {success && <span style={style}>{success}</span>}
            {error && <span>{error.message}</span>}
            <h2>Mot de passe oublié?</h2>
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
              <button disabled={disabled}>Récupérer</button>
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

export default ForgetPassword;
