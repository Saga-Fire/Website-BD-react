import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../Firebase';
import { ProductContext } from '../../Global/ProductContext';
import { SerieContext } from '../../Global/SerieContext';

const PanierItem = ({ item }) => {
  const firebase = useContext(FirebaseContext);
  const { reduction, increase, count, removeProduct } = useContext(
    ProductContext
  );
  const { series } = useContext(SerieContext);

  const [image, setImage] = useState(null);

  let imageRef = firebase
    .storageRef()
    .child(
      `/Images-BD/${series
        .find((e) => e.id === item.idSerie)
        .nom.replace(/[.'!?:$"]/g, '')}-${item.numero}-${item.titre.replace(
        /[.'!?:$"]/g,
        ''
      )}.jpg`
    );

  imageRef
    .getDownloadURL()
    .then((url) => {
      setImage(url);
    })
    .catch((error) => {});

  return (
    <div className="container">
      <div className="row ">
        <div className="shoping-cart card mt-3 p-4 ">
          <div className="card-title mb-3">
            <span className="">
              (<strong>{count.find((e) => e.ids === item.id).counts}</strong>)
              produits
            </span>
          </div>
          <div className="card-body ">
            <div className="row">
              <div className="cart-product  col-md-4">
                <img
                  alt="BDimage"
                  style={{ width: 150 }}
                  src={image}
                  className=""
                />
              </div>
              <div className="description col-md-8">
                <h4>{item.titre}</h4>
                <p>{item.prix} €</p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac justo vehicula felis posuere maximus. Elit et feugiat
                  convallis, justo arcu efficitur libero, vel semper dui libero
                  non metus.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="mt-sm-5 ">
                <button
                  onClick={() => increase(item.id)}
                  className="btn  btn-sm increase float-right"
                >
                  <i className="far fa-plus-square"></i>
                </button>

                {count.find((e) => e.ids === item.id).counts > 1 && (
                  <button
                    onClick={() => reduction(item.id)}
                    className="btn btn-sm  reduction float-right"
                  >
                    <i className="far fa-minus-square"></i>
                  </button>
                )}

                <button
                  onClick={() => removeProduct(item.id)}
                  className="btn btn-sm remove ms-5 float-right"
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanierItem;
