import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./Components/ScrollTop";

import "./App.css";
import Landing from "./Components/Landing/Landing";
import Index from "./Components/Main/Index";

import Error from "./Components/ErrorPage/Error";
import Profile from "./Components/ProfilePage/Profile";
import Cart from "./Components/MyCart/Cart";
import Orders from "./Components/Orders/Orders";

export const store = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({});

  const loggedUser = (e) => {
    setUser(e);
  };

  const [loginuser, setLoginuser] = useState([]);

  return (
    <>
      <store.Provider
        value={{ cartItems, setCartItems, loginuser, setLoginuser }}
      >
        <BrowserRouter>
          <ScrollTop smooth />
          <Routes>
            <Route path="/" element={<Landing loggedUser={loggedUser} />} />
            <Route path="index" element={<Index user={user} />} />
            <Route path="profile" element={<Profile />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </>
  );
}

export default App;
