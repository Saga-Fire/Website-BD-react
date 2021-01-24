import React, { useContext } from 'react';
import { ProductContext } from '../../Global/ProductContext';
import PanierItem from './PanierItem';
import { SerieContext } from '../../Global/SerieContext';
import { useHistory } from 'react-router-dom';

const PanierUI = (props) => {
  const { cart } = useContext(ProductContext);

  // let data = Data;
  const { series } = useContext(SerieContext);

  const history = useHistory();

  return (
    <div className="row">
      {cart.map((item) => (
        <PanierItem key={item.id} item={item} series={{ series }} />
      ))}

      <div className="back-button">
        <button
          onClick={() => {
            history.push(`/`);
          }}
          className="btn back mt-3"
        >
          <i className="fa fa-chevron-left me-2 mt"></i>Continuer mes achats
        </button>
      </div>
    </div>
  );
};

export default PanierUI;
