import React, { useContext, useEffect } from 'react';
import { UserDataContext } from '../../Global/UserDataContext';

const GetProfil = (props) => {
  const { userData } = useContext(UserDataContext);

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);

  useEffect(() => {
    if (!userData.auth) {
      props.history.push('/');
    }
  }, [props.history, userData.auth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push('/update');
  };

  const { name, email, surname, adress } = userData;

  return !userData.auth ? (
    <div className="loader"></div>
  ) : (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftProfil"></div>
        <div className="formBoxRight">
          <div className="formContent">
            <h2>Profile</h2>
            <form onSubmit={handleSubmit}>
              <label style={{ display: 'flex' }} htmlFor="name">
                Prénom
              </label>
              <div className="inputBox">
                <input value={name} type="text" id="name" readOnly="readonly" />
              </div>
              <label style={{ display: 'flex' }} htmlFor="surname">
                Nom
              </label>
              <div className="inputBox">
                <input
                  style={{ textTransform: 'uppercase' }}
                  value={surname}
                  type="text"
                  id="surname"
                  readOnly="readonly"
                />
              </div>
              <label style={{ display: 'flex' }} htmlFor="adress">
                Adresse postale
              </label>
              <div className="inputBox">
                <input
                  value={adress}
                  type="text"
                  id="adress"
                  readOnly="readonly"
                />
              </div>
              <label style={{ display: 'flex' }} htmlFor="email">
                Adresse email
              </label>
              <div className="inputBox">
                <input
                  value={email}
                  type="email"
                  id="email"
                  readOnly="readonly"
                />
              </div>
              <button>Modifier le profile</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetProfil;
