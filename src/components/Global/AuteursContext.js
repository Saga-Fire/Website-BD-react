import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';

export const AuteursContext = React.createContext();

const AuteursProvider = (props) => {
  const firebase = useContext(FirebaseContext);
  const [auteurs, setAuteurs] = useState([]);

  useEffect(() => {
    firebase.auteur().onSnapshot((snapshot) => {
      const series = snapshot.docs.map((doc) => ({
        id: doc.id,
        nom: doc.nom,
        ...doc.data(),
      }));

      setAuteurs(series);
    });
  }, [firebase]);

  return (
    <AuteursContext.Provider
      value={{
        auteurs,
        setAuteurs,
      }}
    >
      {props.children}
    </AuteursContext.Provider>
  );
};

export default AuteursProvider;
