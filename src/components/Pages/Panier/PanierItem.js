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
    <div class="ibox">
      <div class="ibox-title">
        <span class="pull-right">
          (<strong>{count.find((e) => e.ids === item.id).counts}</strong>)
          produits
        </span>
        <h5>Produits dans votre panier</h5>
      </div>
      <div class="ibox-content">
        <div class="table-responsive">
          <table class="table shoping-cart-table">
            <tbody>
              <tr>
                <td width="90">
                  <div class="cart-product-imitation">
                    <img
                      alt="BDimage"
                      style={{ width: 150 }}
                      src={image}
                      className=""
                    />
                  </div>
                </td>
                <td class="desc">
                  <h3>
                    <p class="text-navy">{item.titre}</p>
                  </h3>
                  <p class="small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ac justo vehicula felis posuere maximus. Elit et feugiat
                    convallis, justo arcu efficitur libero, vel semper dui
                    libero non metus.
                  </p>

                  <div class="m-t-sm">
                    {/* //! // TODO il manque un href? */}
                    <a href="#" class="text-muted">
                      <i class="fa fa-gift"></i> Ajouter comme cadeau
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
