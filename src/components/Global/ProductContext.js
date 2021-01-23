import React, { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../Firebase';


export const ProductContext = React.createContext();

const ProductProvider = (props) => {

    const firebase = useContext(FirebaseContext);
    const [products, setProducts] = useState([])
    
    

    useEffect(() => {

        firebase.album().onSnapshot((snapshot) => {
            const products = snapshot.docs.map((doc) =>({
                id: doc.id,
                titre: doc.titre,
                prix: doc.prix,
                idSerie: doc.idSerie,
                numero: doc.numero,
                stock: doc.stock,
                ...doc.data()
                
            }))

        setProducts(products)
            
        })

    }, []);


    const cartLocalStorage = JSON.parse(localStorage.getItem('books')) ? JSON.parse(localStorage.getItem('books')): []

    const countLocalStorage = JSON.parse(localStorage.getItem('quantité')) ? JSON.parse(localStorage.getItem('quantité')): []
    
    const [cart, setCart] = useState(cartLocalStorage);

    const [data, setData] = useState([]);

    const [count, setCount] = useState(countLocalStorage);

    const [total, setTotal] = useState()

    const [prix, setPrix] = useState(0)

    const [quantity, setQuantity] = useState(0)

    const addCart = (id) => {

        const check = cart.every(item => {

            return item.id !== id;

        });

        if(check){
            
           let data = products.filter(product => product.id === id);

            setCart([...cart, ...data])
            setCount([...count, {ids: id, counts: 1}])


        }else {

            alert('Le produit à déjà été ajouté')

        }
        
   
    }

    const reduction = (id) => {

        cart.find(item =>{
            if(item.id === id){
            let data = count.filter(e=>e.ids !== id)
            data.push({ids: id, counts: count[count.findIndex((e)=>e === count.find(e=>e.ids === id))].counts-= 1})
            setCount(data)
            localStorage.setItem('quantité', JSON.stringify(count));

                }
        })
        getTotal();
        
    }

    const increase = (id) => {
        cart.find(item  =>{
            if(item.id === id){ 
            let data = count.filter(e=>e.ids !== id)
            data.push({ids: id, counts: count[count.findIndex((e)=>e === count.find(e=>e.ids === id))].counts+= 1})
            setCount(data)
            localStorage.setItem('quantité', JSON.stringify(count));

            }
            
        })
        getTotal();
    }

    const removeProduct = (id) => {
        if(window.confirm('Est ce que vous voulez supprimer ce produit ?')){
            let clearData = count.filter(e =>e.ids !== id)
            setCount(clearData)
            localStorage.setItem('quantité', JSON.stringify(clearData))
            cart.forEach((item, index) => {
                if(item.id === id){
                    cart.splice(index, 1);
                    
                }
            })

            setCart([...cart])
            

        }
        getTotal();
    }



    const getTotal = () => {
        console.log(count)
        let total = 0;
        cart.forEach(e=>total += parseFloat(e.prix) * count.find(item=>item.ids === e.id).counts);
        setTotal(total)

    }

    

    console.log(count)
    console.log(cart)
    console.log(cartLocalStorage)
        return (
                <ProductContext.Provider value={{products, setProducts, addCart, cart, increase, reduction, count, removeProduct, getTotal, total}}>
                    {props.children}
                </ProductContext.Provider>
            )
}
    

export default ProductProvider
