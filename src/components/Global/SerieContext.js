import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';

export const SerieContext = React.createContext();

const SerieProvider = (props) => {
  const firebase = useContext(FirebaseContext);
  const [series, setSeries] = useState(
    JSON.parse(sessionStorage.getItem('series'))
      ? JSON.parse(sessionStorage.getItem('series'))
      : []
  );

  useEffect(() => {
    firebase.serie().onSnapshot((snapshot) => {
      const series = snapshot.docs.map((doc) => ({
        id: doc.id,
        nom: doc.nom,
        ...doc.data(),
      }));

      setSeries(series);
      sessionStorage.setItem('series', JSON.stringify(series));
    });
  }, [firebase]);

  return (
    <SerieContext.Provider
      value={{
        series,
        setSeries,
      }}
    >
      {props.children}
    </SerieContext.Provider>
  );
};

export default SerieProvider;
