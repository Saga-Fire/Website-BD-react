import React, { useContext } from 'react';
import { ProductContext } from '../../Global/ProductContext';
import PanierItem from './PanierItem';
import { SerieContext } from '../../Global/SerieContext';

const PanierUI = (props) => {
  const { cart } = useContext(ProductContext);

  // let data = Data;
  const { series } = useContext(SerieContext);

  console.log(series);
  return (
    <div className="">
      {cart.map((item) => (
        <PanierItem key={item.id} item={item} series={series} />
      ))}
    </div>
  );
};

export default PanierUI;
