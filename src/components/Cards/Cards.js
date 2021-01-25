import React, { useContext } from 'react';
import CardUI from './CardUI';
import '../../App.css';
import { ProductContext } from '../Global/ProductContext';

const Cards = () => {
  const { products } = useContext(ProductContext);

  const size = 20;

  let cardsBooks = products.slice(0, size).map((products) => {
    return (
      <div key={products.id} className="col-md-3 col-sm-4 col-xs-12 col-12">
        <CardUI
          titre={products.titre}
          prix={products.prix}
          id={products.id}
          idSerie={products.idSerie}
          numero={products.numero}
        />
      </div>
    );
  });

  return (
    <div className="container-fluid container-card">
      <div className="row text-center">
        {cardsBooks}
      </div>
    </div>
  );
};

export default Cards;
