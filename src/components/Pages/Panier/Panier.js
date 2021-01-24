import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../Global/ProductContext';
import PanierUI from './PanierUI';
import { Link } from 'react-router-dom';
import Paypal from '../../Paypal/Paypal';

const Panier = (item) => {
  const { cart, count, total, getTotal } = useContext(ProductContext);
  const [checkout, setCheckOut] = useState(false);
  const [listener, setListener] = useState(false)

  useEffect(() => {
    sessionStorage.setItem('books', JSON.stringify(cart));
    sessionStorage.setItem('quantité', JSON.stringify(count));
  }, [cart, count]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setListener(true)
  }, [listener])

  getTotal();

  return (
    <div className="container">
      <div className="row">
        <div className="text-center mt-3 fw-bold">
          <span className="line1 mt-5"></span>
          <h1 className="mt-2">PANIER</h1>
          <span className="line1 mt-2 mb-4"></span>
        </div>

        <div className="row ">
          <div className="col-sm-12  col-md-8  p-4">
            {cart.length > 0 ? (
              <PanierUI item={item} />
            ) : (
              <>
                  <div className="back-to-home">
                    <Link to="/" className="btn back">
                      <i className="fa fa-chevron-left me-2"></i>Continuer mes
                      achats
                    </Link>
                  </div>
                <div className="panier-vide p-5 justify-content-center text-muted">
                  Votre panier est vide
                </div>
              </>
            )}
          </div>
          {cart.length > 0 && (
            <div className="col-md-4 col-sm-12 p-4 mt-3 ">
              <div className="ibox">
                <div className="ibox-content p-4 card">
                  <span>Total :</span>
                  <h2 className="fw-bold">{total} €</h2>

                  <span className="text-muted small">*Livraison gratuite</span>

                  <div className="m-t-sm">
                    <div className="checkout text-center mt-5">
                      {checkout ? (
                        <Paypal />
                      ) : (
                        <button
                          className="btn btn-white btn-sm"
                          onClick={() => {
                            setCheckOut(true);
                          }}
                        >
                          <i className="fa fa fa-shopping-cart"></i>
                          Paiement
                        </button>
                      )}
                    </div>
                    <span className="line1 mt-4"></span>
                  </div>
                </div>
              </div>
              <div className="ibox mt-4 p-4  card">
                <div className="ibox-title">
                  <h5>Service client</h5>
                </div>
                <div className="ibox-content number-support">
                  <h6>
                    <i className="fa fa-phone"></i> 05 55 55 55 55
                  </h6>
                  <span className="small">En construction</span>
                  <span className="line1 mt-4"></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Panier;
