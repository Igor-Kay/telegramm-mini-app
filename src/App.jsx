import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Profile from "./pages/profile/Profile";
import ShopCard from "./pages/shopCard/ShopCard";

const App = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage cart={cart} setCart={setCart} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/cart"
          element={<ShopCard cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
