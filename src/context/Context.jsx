import { createContext, useEffect, useState } from "react";
import apiRequest from "../utils/apiRequest";

export const store = createContext();

const stroeProvider = (props) => {
  const [fixedNav, setFixedNav] = useState(false);
  const [cartCount, setCartCount] = useState(0)
  const [products, setProducts] = useState([])
  const user_id = localStorage.getItem("firstLogin")

  useEffect(() => {
    apiRequest.get(`single/${user_id}`)
    .then(res =>{
      setCartCount(res.data.items)
    })
  },[])
  

  return (
    <store.Provider value={[fixedNav, setFixedNav, cartCount, setCartCount, products, setProducts]}>
      {props.children}
    </store.Provider>
  );
};

export default stroeProvider;
