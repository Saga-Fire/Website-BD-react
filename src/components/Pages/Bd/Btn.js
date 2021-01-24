import React from 'react';
import { useHistory } from 'react-router-dom';

const Btn = (props) => {
  const history = useHistory();

  let page = parseInt(props.page);
  let linkP = page - 1;
  let linkS = page + 1;
  if (page === 0) {
    return (
      <div className="row justify-content-around m-5 mt-0">
        <button disabled className="btn col-sm-5 col-md-3 col-lg-2">
          Page précédente
        </button>

        <button
          onClick={() => {
            history.push(`${/bd/ + linkS}`);
          }}
          className="btn back col-sm-5 col-md-3 col-lg-2 back-button"
          style={{ color: 'white' }}
        >
          Page suivante
        </button>
      </div>
    );
  } else if (page < 26) {
    return (
      <div className="row justify-content-around m-5 mt-0">
        <button
          onClick={() => {
            history.push(`${/bd/ + linkP}`);
          }}
          className="btn back col-sm-5 col-md-3 col-lg-2 back-button"
          style={{ color: 'white' }}
        >
          Page précédente
        </button>
        <button
          onClick={() => {
            history.push(`${/bd/ + linkS}`);
          }}
          className="btn back col-sm-5 col-md-3 col-lg-2 back-button"
          style={{ color: 'white' }}
        >
          Page suivante
        </button>
      </div>
    );
  } else if (page === 26) {
    return (
      <div className="row justify-content-around m-5 mt-0">
        <button
          onClick={() => {
            history.push(`${/bd/ + linkP}`);
          }}
          className="btn back col-sm-5 col-md-3 col-lg-2 back-button"
          style={{ color: 'white' }}
        >
          Page précédente
        </button>
        <button disabled className="btn col-sm-5 col-md-3 col-lg-2">
          Page suivante
        </button>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Btn;
