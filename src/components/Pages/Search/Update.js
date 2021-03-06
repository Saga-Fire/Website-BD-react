import Cards from "../../Cards/CardUI";
import { SerieContext } from "../../Global/SerieContext";
import { useContext } from "react";

const Update = (props) => {
    const { series } = useContext(SerieContext);
    return (
        <>
            {props.stations.map((station) => (
                <div key={station.id} className="col-sm-6 col-md-4 col-lg-3">
                    <Cards
                        series={series}
                        titre={station.titre}
                        prix={station.prix}
                        id={station.id}
                        idSerie={station.idSerie}
                        numero={station.numero}
                    />
                </div>
            ))}
        </>
    );
};

export default Update;
