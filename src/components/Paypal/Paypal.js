// import React, { useEffect, useState, useRef, useContext} from 'react'
// import { ProductContext } from '../Global/ProductContext';






// const Paypal = () => {
//     const {total} = useContext(ProductContext)
//     const paypal = useRef();

//     useEffect(() => {
//         window.paypal_sdk.Buttons({
//             createOrder: (data, actions, err) => {
//                 return actions.order.create( {
//                     intent: 'CAPTURE',
//                     purchase_units: [
//                         {
//                             description: 'Super !',
//                             amount: {
//                                 currency_code: 'EUR',
//                                 value: `${total}`
//                             }
//                         }
//                     ]
//                 })
                
//             },
//             onApprove: async (data, actions) => {
//                 const order = await actions.order.capture()
//                 console.log(order);
//             },
//             onError : (err) => {
//                 console.log(err)
//             }
//         }).render(paypal.current)
//     }, [])
//     return (
//         <div>
//             <div ref={paypal}></div>
//         </div>
//     )
// }

// export default Paypal
