import React, { useEffect, useRef, useContext } from 'react';
import { ProductContext } from '../Global/ProductContext';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Paypal = () => {
  const { total, count, clearProduct } = useContext(ProductContext);
  const firebase = useContext(FirebaseContext);

  const paypal = useRef();

  const history = useHistory();

  const handleSubmit = () => {
    count.forEach((e) => {
      firebase.album()
        .where('id', '==', e.ids)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().stock > 0) {
              const reduceStock = parseInt(doc.data().stock) - e.counts
            firebase
              .album()
              .doc(`${doc.id}`)
              .update({
                stock: `${reduceStock}`,
              });
            }
          });
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error);
        });
    });
    count.forEach((e) => {
            clearProduct(e.ids)
          });
    alert(`Merci d'avoir acheté sur notre site!`);
    history.push('/');
    setTimeout(() => {

    }, 100);
  };

  useEffect(() => {
    window.paypal_sdk
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Super !',
                amount: {
                  currency_code: 'EUR',
                  value: `${total}`,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [total]);
  return (
    <div>
      <div ref={paypal}></div>
      <button className="btn btn-white btn-sm" onClick={handleSubmit}>
        Ristourne du chef!
      </button>
    </div>
  );
};

export default Paypal;
