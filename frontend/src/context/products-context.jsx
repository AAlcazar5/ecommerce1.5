import React, { useEffect, createContext, useState } from 'react';
import SHOP_DATA from '../SHOP_DATA';

import { auth, createProductProfileDocument } from '../firebase/firebaseConfig';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const productRef = await createProductProfileDocument(userAuth);

        productRef.onSnapshot(snapShot => {
          setProduct({
            description: snapShot.description,
            imageUrl: snapShot.imageUrl,
            price: snapShot.price, 
            title: snapShot.title
          });
          setLoading(false)
        })
      } else {
        setProduct(userAuth);
        setLoading(false);
      }
    });

    return () => unsubscribeFromAuth();
  }, []
  );


  const productContext = { product, loading };
  if (loading) { return <div>Loading...</div> }
  return (
    <ProductsContext.Provider value={{ products, ...productContext }}>
      {
        children
      }
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;