import React, { useContext } from 'react'
import { ProductContext} from '../../Global/ProductContext'
import PanierItem from './PanierItem'
import { SerieContext } from "../../Global/SerieContext";

const PanierUI = (props) => {

    const {cart, products, reduction, increase, count, removeProduct, total} = useContext(ProductContext);

    // let data = Data;
    const { series, setSeries } = useContext(SerieContext);
    
    console.log(series)
    return (
        
                    <div class="">         

                    {
                        cart.map(item => <PanierItem key={item.id} item={item} series={series} />)
                    }

                </div>

    )
}

export default PanierUI
