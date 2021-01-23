import React from "react";
import { Link } from "react-router-dom";

const Btn = (props) => {
    let page = parseInt(props.page);
    let linkP = page - 1;
    let linkS = page + 1;
    if (page === 0) {
        return (
            <div className="row justify-content-around m-5 mt-0">
                <button
                    disabled
                    className="btn  col-sm-5 col-md-3 col-lg-2"
                >
                    <Link to={/bd/ + linkP}>Page précédente</Link>
                </button>

                <button className="btn  col-sm-5 col-md-3 col-lg-2">
                    <Link to={/bd/ + linkS}>Page suivante</Link>
                </button>
            </div>
        );
    } else if (page < 10) {
        return (
            <div className="row justify-content-around m-5 mt-0">
                <button className="btn  col-sm-5 col-md-3 col-lg-2">
                    <Link to={/bd/ + linkP}>Page précédente</Link>
                </button>

                <button className="btn  col-sm-5 col-md-3 col-lg-2">
                    <Link to={/bd/ + linkS}>Page suivante</Link>
                </button>
            </div>
        );
    } else if (page === 10) {
        return (
            <div className="row justify-content-around m-5 mt-0">
                <button className="btn  col-sm-5 col-md-3 col-lg-2">
                    <Link to={/bd/ + linkP}>Page précédente</Link>
                </button>

                <button
                    disabled
                    className="btn col-sm-5 col-md-3 col-lg-2"
                >
                    Page suivante
                </button>
            </div>
        );
    } else {
        return <></>;
    }
};

export default Btn;
