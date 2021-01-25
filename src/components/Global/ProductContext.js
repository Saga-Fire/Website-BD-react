import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';

export const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const firebase = useContext(FirebaseContext);
  const [products, setProducts] = useState(
    JSON.parse(sessionStorage.getItem('products'))
      ? JSON.parse(sessionStorage.getItem('products'))
      : []
  );

  useEffect(() => {
    firebase.album().onSnapshot((snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        titre: doc.titre,
        prix: doc.prix,
        idSerie: doc.idSerie,
        numero: doc.numero,
        stock: doc.stock,
        ...doc.data(),
      }));

      setProducts(products);
      sessionStorage.setItem('products', JSON.stringify(products));
    });
  }, [firebase]);

  const cartSessionStorage = JSON.parse(sessionStorage.getItem('books'))
    ? JSON.parse(sessionStorage.getItem('books'))
    : [];

  const countSessionStorage = JSON.parse(sessionStorage.getItem('quantité'))
    ? JSON.parse(sessionStorage.getItem('quantité'))
    : [];

  const [cart, setCart] = useState(cartSessionStorage);

  const [count, setCount] = useState(countSessionStorage);

  const [total, setTotal] = useState();

  const addCart = (id) => {
    console.log(cart)
    // if (cart.stock > 0) {
      const check = cart.every((item) => {
        return item.id !== id;
      });

    if (check) {
      let data = products.filter((product) => product.id === id);

      setCart([...cart, ...data]);
      setCount([...count, { ids: id, counts: 1 }]);
    } else {
      alert('Le produit à déjà été ajouté');
    }
    // } else {
    //       alert(`Stock insufisant`);
    // }

  };

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        let data = count.filter((e) => e.ids !== id);
        data.push({
          ids: id,
          counts: (count[
            count.findIndex((e) => e === count.find((e) => e.ids === id))
          ].counts -= 1),
        });
        setCount(data);
        sessionStorage.setItem('quantité', JSON.stringify(count));
      }
    });
    getTotal();
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        if (
          item.stock >
          count[count.findIndex((e) => e === count.find((e) => e.ids === id))]
            .counts
        ) {
          let data = count.filter((e) => e.ids !== id);
          data.push({
            ids: id,
            counts: (count[
              count.findIndex((e) => e === count.find((e) => e.ids === id))
            ].counts += 1),
          });
          setCount(data);
          sessionStorage.setItem('quantité', JSON.stringify(count));
        } else {
          alert(`Stock insufisant`);
        }
      }
    });
    getTotal();
  };

  const removeProduct = (id) => {
    if (window.confirm('Est ce que vous voulez supprimer ce produit ?')) {
      let clearData = count.filter((e) => e.ids !== id);
      setCount(clearData);
      sessionStorage.setItem('quantité', JSON.stringify(clearData));
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });

      setCart([...cart]);
    }
    getTotal();
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach(
      (e) =>
        (total +=
          Number.parseFloat(e.prix) *
          count.find((item) => item.ids === e.id).counts)
    );

    setTotal(Number.parseFloat(total).toFixed(2));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        addCart,
        cart,
        increase,
        reduction,
        count,
        removeProduct,
        getTotal,
        total,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
