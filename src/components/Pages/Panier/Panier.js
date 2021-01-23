import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../Global/ProductContext';
import PanierUI from './PanierUI';
import { Link } from 'react-router-dom';

const Panier = (item) => {
  const { cart, count, total, getTotal } = useContext(ProductContext);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(cart));
    localStorage.setItem('quantité', JSON.stringify(count));
  }, [cart, count]);
  getTotal();

  return (
    <div class="container">
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
          <div>
            <div className="text-center mt-5 fw-bold">
              <span className="line1 mt-2"></span>
              <h1 className="mt-2">PANIER ( en construction)</h1>
              <span className="line1 mt-2"></span>
            </div>

            <div className="row ">
              <div className="col-sm-6  col-md-8 p-5">
                {cart.length > 0 ? (
                  <PanierUI item={item} />
                ) : (
                  <>
                    <div className="back-to-home">
                      <Link to="/">
                        {/* //! // TODO il manque un href? */}
                        <a className="btn back">
                          <i className="fa fa-chevron-left me-2"></i>Continuer
                          mes achats
                        </a>
                      </Link>
                    </div>
                    <div className="panier-vide p-5 justify-content-center text-muted">
                      Votre panier est vide
                    </div>
                  </>
                )}
              </div>
              {cart.length > 0 && (
                <div className="col-sm-1 p-5">
                  <div className="card card-body">
                    <p className="mb-1 fw-bold">Total des articles :</p>
                    <h4 className=" mb-3 txt-right"> {count.length} </h4>
                    <p className="fw-bold">Livraison gratuite</p>
                    <p className="mb-1 fw-bold">Total TTC :</p>
                    <h3 className="m-0 txt-right">{total} €</h3>
                    <hr className="my-4" />
                    <div className="text-center">
                      <p>EN CONSTRUCTION</p>
                      {/* {
                                                checkout ? (<PayPal/>) : (<button className=" btn "onClick={() => setCheckOut(true)}>Paiement</button>)} */}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <span className="line1 mt-3 mb-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;
