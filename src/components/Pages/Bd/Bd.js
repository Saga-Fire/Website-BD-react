import React, { useContext } from "react";
import { ProductContext } from "../../Global/ProductContext";
import Section from "./Section";
import Btn from "./Btn";
import ScrollTopButton from '../../ScrollTopButton/ScrollTopButton'

const Pages = (props) => {
    const { products } = useContext(ProductContext);

    const contenu = () => {
        let page = parseInt(props.match.params.idpage);
        let end = (page + 1) * 20;
        if (page !== 0) {
            page = page * 20;
        }
        if (end > products.length) {
            end = products.length;
        }
        return products.slice(page, end);
    };

    return (
        <div>
            <div className="App">
                <div className="container">
                    <div className="row">
                        <section className="products">
                            <div className="container container-card">
                                <div className="text-center mt-2 mb-2 fw-bold">
                                    <span className="line1 mt-5"></span>
                                        <h1 className="mt-2">BD</h1>
                                    <span className="line1 mt-2 mb-4"></span>
                                </div>
                                <div className="row text-center">
                                    <Section stations={contenu()} />
                                </div>
                                <span className="line1 mt-3 mb-3"></span>
                            </div>
                            <Btn page={props.match.params.idpage} />
                        </section>
                        <ScrollTopButton/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pages;
