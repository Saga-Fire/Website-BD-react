import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';

export const UserDataContext = React.createContext({
  name: '',
  surname: '',
  adress: '',
  email: '',
  auth: false,
});

const UserDataProvider = ({ children }) => {
  const firebase = useContext(FirebaseContext);
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem('user'))
      ? JSON.parse(sessionStorage.getItem('user'))
      : {
          name: '',
          surname: '',
          adress: '',
          email: '',
          auth: false,
        }
  );

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(userData));
  }, [userData]);

  const login = (name, surname, adress, email) => {
    setUserData((userData) => ({
      name: name,
      surname: surname,
      adress: adress,
      email: email,
      auth: true,
    }));
  };

  const logout = () => {
    firebase.signoutUser();
    setUserData((userData) => ({
      name: '',
      surname: '',
      adress: '',
      email: '',
      auth: false,
    }));
  };

  return (
    <UserDataContext.Provider value={{ userData, login, logout }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
