import React, { useState, useContext } from 'react';
import '../../App.css';
import { FirebaseContext } from '../Firebase';
import { SerieContext } from '../Global/SerieContext';
import { useHistory } from 'react-router-dom';

const CardUI = (props) => {
  const firebase = useContext(FirebaseContext);
  const { series } = useContext(SerieContext);

  const [image, setImage] = useState(null);

  const history = useHistory();

  let imageRef = firebase
    .storageRef()
    .child(
      `/Images-BD/${series
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
            <img
              onClick={() => {
                history.push(`${/product/ + props.id}`);
              }}
              style={{ height: '20rem' }}
              src={image}
              className="card-img-top"
              id="image"
              alt="bd"
            />
          <div className="card-body bg-dark mt-1">
            <h5
              style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
              className="card-title"
            >
              {props.titre}
            </h5>
            <span className="line"></span>
            <p className="card-text fw-bold mt-1">{props.prix} €</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUI;
