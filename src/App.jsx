import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Add from "./components/admin/Add";

import Admin from "./components/admin/Admin";
import Main from "./components/admin/Main";
import Auth from "./components/auth/Auth";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import DetailsPage from "./components/details/DetailsPage";
import Home from "./components/homepage/Home";
// import "./App.css";
import NotFound from "./components/notFound/NotFound";
import Context from "./context/Context";
import Posts from "./components/admin/Posts";
import Products from "./components/landingComponet/Products";
import Cart from "./components/cart/Cart";
import CheckOut from "./components/checkout/CheckOut";
import Seller from "./components/seller/Seller";

function App() {
  // useEffect(() => {
  //   let isAuth = JSON.parse(localStorage.getItem("firstLogin"));
  //   if (isAuth && isAuth === null) {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <Context>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />}>
          <Route path="" element={<Products />} />
          <Route path="details" element={<DetailsPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="check_out/:id" element={<CheckOut />} />
        </Route>
        <Route path="/authentication" element={<Auth />}>
          <Route path="" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<Main />} />
          <Route path="add_product" element={<Add />} />
          <Route path="all_products" element={<Posts />} />
        </Route>
        <Route path="/become_a_seller" element={<Seller />} />
      </Routes>
    </Context>
  );
}

export default App;
