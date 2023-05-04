import { createContext, useEffect, useState } from "react";
import apiRequest from "../utils/apiRequest";

export const store = createContext();

const stroeProvider = (props) => {
  const [fixedNav, setFixedNav] = useState(false);
  const [cartCount, setCartCount] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    apiRequest.get('get_cart_items')
    .then(res =>{
      setCartCount(res.data[0].items)
    })
  },[])
  

  return (
    <store.Provider value={[fixedNav, setFixedNav, cartCount, setCartCount, products, setProducts]}>
      {props.children}
    </store.Provider>
  );
};

export default stroeProvider;
