import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { FirebaseContext } from '../Firebase';

const CardUI = (props) => {
  const firebase = useContext(FirebaseContext);
  const [image, setImage] = useState(null);

  let imageRef = firebase
    .storageRef()
    .child(
      `/Images-BD/${props.series
        .find((e) => e.id === props.idSerie)
        .nom.replace(/[.'!?:$"]/g, '')}-${props.numero}-${props.titre.replace(
        /[.'!?:$"]/g,
        ''
      )}.jpg`
    );

  imageRef
    .getDownloadURL()
    .then((url) => {
      setImage(url);
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });

  return (
    <div className="container-card">
      <div className="row">
        <div className="card p-0 bd">
          <Link to={/product/ + props.id}>
            <img src={image} className="card-img-top" id="image" alt="bd" />
          </Link>
          <div className="card-body bg-dark mt-1">
            <h5 className="card-title">{props.titre}</h5>
            <span className="line"></span>
            <p className="card-text fw-bold mt-1">{props.prix} €</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUI;
