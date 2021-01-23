import React, { useContext } from 'react';
import '../../../App.css';
import Series from '../../../Data/series.json';

import { ProductContext } from '../../Global/ProductContext';
import DetailProductUI from './DetailProductUI';

const DetailProduct = (props) => {
  const series = Series;
  const { products } = useContext(ProductContext);

  const product = products.find(
    (product) => product.id === props.match.params.id
  );

  return (
    <div className="container" key={product.id}>
      <div className="row">
        <DetailProductUI
          titre={product.titre}
          prix={product.prix}
          idSerie={product.idSerie}
          numero={product.numero}
          series={series}
          id={product.id}
          product={products}
          stock={product.stock}
        />
      </div>
    </div>
  );
};

export default DetailProduct;
