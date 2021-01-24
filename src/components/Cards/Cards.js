import React, { useContext } from 'react';
import CardUI from './CardUI';
import '../../App.css';
import Series from '../../Data/series.json';
import { ProductContext } from '../Global/ProductContext';

const Cards = () => {
  const { products } = useContext(ProductContext);

  const series = Series;

  const size = 20;

  let cardsBooks = products.slice(0, size).map((products) => {
    return (
      <div key={products.id} className="col-md-3">
        <CardUI
          titre={products.titre}
          prix={products.prix}
          id={products.id}
          series={series}
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
