import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../Firebase';

const ErrorPage = () => {
  const firebase = useContext(FirebaseContext);

  const [imgError, setImgError] = useState(null);

  let ImgErrorRef = firebase.storageRef().child('Media/batman.png');

  ImgErrorRef.getDownloadURL()
    .then((url) => {
      setImgError(url);
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });

  const centerH2 = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const centerImg = {
    display: 'block',
    margin: '48px auto',
  };

  return (
    <div className="quiz-bg">
      <div className="container-error">
        <h2 style={centerH2}>Oups, cette page n'hexiste pas!</h2>
        <Link to="/">
          <img style={centerImg} src={imgError} alt="ImageError"></img>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
