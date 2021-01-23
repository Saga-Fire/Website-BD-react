import React, { useContext } from 'react';
import { ProductContext } from '../Global/ProductContext';
import { useHistory } from 'react-router-dom';

const Modal = (props) => {
  const { addCart, cart, total } = useContext(ProductContext);
  const history = useHistory();

  return (
    <>
      <button
        onClick={() => addCart(props.id)}
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Ajouter au panier
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header justify-content-center bg-dark">
              <h5 className="modal-title" id="exampleModalLabel">
                <i className="fa fa-check me-4 "></i>Produit ajouté au panier
                avec succès
              </h5>
            </div>
            <div className="modal-body p-5" key={props.id}>
              <div className="row">
                <div className="col-md-4 text-center">
                  <img
                    className="product-image"
                    src={props.image}
                    style={{ width: 250 }}
                    alt="bd"
                  ></img>
                </div>

                <div className="col-md-4">
                  <h6 className="product-name fw-bold fs-5">
                    Titre : {props.titre}
                  </h6>
                  <p className="mt-5">Prix : {props.prix} €</p>
                </div>
                <div className="col-md-4">
                  <div className="cart-content">
                    <p className="cart-product-count">
                      Il y a {cart.length} article dans votre panier.
                    </p>
                    <p>Total produits : {total} €</p>
                    <p>Frais de port : gratuit</p>
                  </div>
                  <div className="cart-content-btn mt-5">
                    <button
                      className="btn w-100"
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      Continuer mes achats
                    </button>
                    <button
                      className="btn w-100 mt-5"
                      data-bs-dismiss="modal"
                      as="button"
                      onClick={() => {
                        history.push('/Panier');
                      }}
                    >
                      Commander
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">@LesHobbitsDuWeb2020</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
