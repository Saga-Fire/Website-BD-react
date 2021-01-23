import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../../Firebase';
import { UserDataContext } from '../../Global/UserDataContext';

const Update = (props) => {
  const { userData, login } = useContext(UserDataContext);
  const firebase = useContext(FirebaseContext);

  const [loginData, setLoginData] = useState(userData);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!userData.auth) {
      props.history.push('/');
    }
  }, [props.history, userData.auth]);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.confirm(`Etes vous sûr de vouloir valider ces changement?`);
    const { name, surname, adress, email } = loginData;
    firebase.auth.currentUser
      .updateEmail(email)
      .then((authUser) => {
        return firebase
          .user(firebase.auth.currentUser.uid)
          .update({ name, surname, adress, email });
      })
      .then(() => {
        alert('Vous avez bien mis à jour votre profil');
        login(
          loginData.name,
          loginData.surname,
          loginData.adress,
          loginData.email
        );
      })
      .catch((error) => {
        setError(error);
        setLoginData({ ...userData });
      });
  };

  const { name, surname, adress, email } = loginData;
  const btn =
    (name === userData.name &&
      surname === userData.surname &&
      adress === userData.adress &&
      email === userData.email) ||
    name === '' ||
    surname === '' ||
    adress === '' ||
    email === '' ? (
      <button disabled>Valider ces changements</button>
    ) : (
      <button>Valider ces changements</button>
    );
  const errorMsg = error !== '' && <span>{error.message}</span>;

  return !userData.auth ? (
    <div className="loader"></div>
  ) : (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftUpdate"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {errorMsg}
            <h2>Modification</h2>
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
                <label htmlFor="pseudo">Prénom</label>
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
                <label htmlFor="email">Email</label>
              </div>
              {btn}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
