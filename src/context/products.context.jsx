import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data.js";

import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from "../utils/firebase/firebase.utils.js";
export const ProductsContext = createContext({
  products: [],
  id: null,
  name: null,
  price: null,
  imageUrl: null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    // addCollectionAndDocuments("categories", SHOP_DATA);
    getCategoriesMap();
  }, []);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
