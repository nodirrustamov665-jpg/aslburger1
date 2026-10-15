import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

import Savat from "./Savat";
import Taomlar from "./taomlar";
import About from "./about";
import Ichimliklar from "./ichimliklar";
import BoshSahifa from "./boshSahifa";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <div className="header">
        <div className="navbar">
          <NavLink to="/">
            <img src="/images2.png" alt="ASL BURGER" />
          </NavLink>

          <h1>
            ASL <span>BURGER</span>
          </h1>

          <NavLink to="/">Bosh Sahifa</NavLink>
          <NavLink to="/taomlar">Taomlar</NavLink>
          <NavLink to="/ichimliklar">Ichimliklar</NavLink>
          <NavLink to="/about">Biz Haqimizda</NavLink>

          <button
            className="cartButton"
            onClick={() => setCartOpen(true)}
          >
            🛒 Savat ({cart.length})
          </button>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={<BoshSahifa />}
        />

        <Route
          path="/taomlar"
          element={
            <Taomlar addToCart={addToCart} />
          }
        />

        <Route
          path="/ichimliklar"
          element={
            <Ichimliklar addToCart={addToCart} />
          }
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>

      <Savat
        cart={cart}
        setCart={setCart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
    </>
  );
}

export default App;