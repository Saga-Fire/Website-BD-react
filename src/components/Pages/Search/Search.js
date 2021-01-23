import React, { useContext, useState } from "react";
import { ProductContext } from "../../Global/ProductContext";
import { AuteursContext } from "../../Global/AuteursContext";
import { SerieContext } from "../../Global/SerieContext";
import Update from "./Update";

const Search = () => {
    const { products, setProducts } = useContext(ProductContext);
    const { auteurs, setAuteurs } = useContext(AuteursContext);
    const { series, setSeries } = useContext(SerieContext);
    const [test, setTest] = useState("");
    const [prop, setProp] = useState("");

    const content = (value, prop) => {
        let data = [];
        let serie = [];
        let auteur = [];
        let reg = new RegExp(value.toUpperCase());
        if (prop === "") {
            return data;
        } else {
            if (prop === "titre") {
                data = products.filter((e) => reg.test(e.titre.toUpperCase()));
                return data;
            } else if (prop === "auteurs") {
                auteur = auteurs.filter((e) => reg.test(e.nom.toUpperCase()));
                data = products.filter((e) =>
                    auteur.some((a) => a.id === e.idAuteur)
                );

                return data;
            } else if (prop === "series") {
                serie = series.filter((e) => reg.test(e.nom.toUpperCase()));
                data = products.filter((e) =>
                    serie.some((s) => s.id === e.idSerie)
                );
                return data;
            }
        }
    };

    const blur = (e) => {
        e.target.value = "";
        // this.setState({ prop: e.target.value });
    };

    const change = (e) => {
        setTest(e.target.value);
        setProp(e.target.name);
    };

    return (
        <div>
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="p-4 mb-0 pb-0">
                            <h2 className="text-center ">
                                RECHERCHE DÉTAILLÉE
                            </h2>
                            <div
                                className="bg-secondary mb-2"
                                style={{
                                    height: "2px",
                                    width: "100%",
                                }}
                            ></div>
                            <div className=" p-5 pt-0 pb-0">
                                <label
                                    className="text-danger fs-2"
                                    for="series"
                                >
                                    Series:
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="series"
                                    onChange={change}
                                    onBlur={blur}
                                    // onBlur={(e) => (e.target.value = "")}
                                ></input>
                                <label
                                    className="text-danger fs-2"
                                    for="auteurs"
                                >
                                    Auteurs:
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="auteurs"
                                    onChange={change}
                                    onBlur={blur}
                                ></input>
                                <label className="text-danger fs-2" for="titre">
                                    Titre:
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="titre"
                                    onChange={change}
                                    onBlur={blur}
                                ></input>
                            </div>
                            <div
                                className="bg-secondary mt-4"
                                style={{
                                    height: "2px",
                                    width: "100%",
                                }}
                            ></div>
                        </div>

                        <section className="products">
                            <div className="container container-card m-0 p-0">
                                <div className="row text-center">
                                    <Update stations={content(test, prop)} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
