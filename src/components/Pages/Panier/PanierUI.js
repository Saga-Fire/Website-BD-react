import React, { useContext } from 'react'
import { ProductContext} from '../../Global/ProductContext'
import PanierItem from './PanierItem'
import { SerieContext } from "../../Global/SerieContext";
import { Link } from 'react-router-dom'

const PanierUI = (props) => {

    const {cart, products, reduction, increase, count, removeProduct, total} = useContext(ProductContext);

    // let data = Data;
    const { series, setSeries } = useContext(SerieContext);
    
    return (
        
                <div class="row">         

                    {
                        cart.map(item => <PanierItem key={item.id} item={item} series={series} />)
     
                    }
                    
                    <div class="back-button">
                    <Link to="/"><a className="btn back mt-3"><i className="fa fa-chevron-left me-2 mt"></i>Continuer mes achats</a></Link>
                    </div>

                </div>

    )
}

export default PanierUI
