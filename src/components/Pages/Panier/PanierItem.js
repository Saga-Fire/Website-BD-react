import React, { useContext, useState } from 'react';
import { ProductContext } from '../../Global/ProductContext';
import { FirebaseContext } from '../../Firebase';
import Series from '../../../Data/series.json';

const PanierItem = ({ item }) => {
  const { reduction, increase, count, removeProduct } = useContext(
    ProductContext
  );
  const firebase = useContext(FirebaseContext);
  const [image, setImage] = useState(null);

  console.log(Series);

  let imageRef = firebase
    .storageRef()
    .child(
      `/Images-BD/${Series.find((e) => e.id === item.idSerie).nom.replace(
        /[.'!?:$"]/g,
        ''
      )}-${item.numero}-${item.titre.replace(/[.'!?:$"]/g, '')}.jpg`
    );
  console.log(item.id);

  imageRef
    .getDownloadURL()
    .then((url) => {
      setImage(url);
    })
    .catch((error) => {});

  return (
    <div className="ibox">
      <div className="ibox-title">
        <span className="pull-right">
          (<strong>{count.find((e) => e.ids === item.id).counts}</strong>)
          produits
        </span>
        <h5>Produits dans votre panier</h5>
      </div>
      <div className="ibox-content">
        <div className="table-responsive">
          <table className="table shoping-cart-table">
            <tbody>
              <tr>
                <td width="90">
                  <div className="cart-product-imitation">
                    <img
                      alt="BDimage"
                      style={{ width: 150 }}
                      src={image}
                      className=""
                    />
                  </div>
                </td>
                <td className="desc">
                  <h3>
                    <p className="text-navy">{item.titre}</p>
                  </h3>
                  <p className="small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ac justo vehicula felis posuere maximus. Elit et feugiat
                    convallis, justo arcu efficitur libero, vel semper dui
                    libero non metus.
                  </p>

                  <div className="m-t-sm">
                    <a href="/#" className="text-muted">
                      <i className="fa fa-gift"></i> Ajouter comme cadeau
                    </a>
                    |
                    {count.find((e) => e.ids === item.id).counts === 1 && (
                      <button
                        onClick={() => removeProduct(item.id)}
                        className="btn btn-sm remove  mt-5"
                      >
                        <i className="far fa-trash-alt">Supprimer</i>
                      </button>
                    )}
                  </div>
                </td>

                <td>{item.titre}</td>
                <td width="65">
                  {count.find((e) => e.ids === item.id).counts > 1 && (
                    <button
                      onClick={() => reduction(item.id)}
                      className="btn btn-sm  reduction mt-5"
                    >
                      <i className="far fa-minus-square"></i>
                    </button>
                  )}

                  <button
                    onClick={() => increase(item.id)}
                    className="btn  btn-sm  increase mt-5"
                  >
                    <i className="far fa-plus-square"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PanierItem;
