import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SignUpForm from "./pages/SignUp";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Cart from "./pages/Cart";
import styled from "styled-components";
import { CartProvider } from "./context/CartContext"; // Import CartProvider

const NavBar = styled.nav`
  background: #333;
  padding: 10px;
  text-align: center;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const App = () => {
  return (
    <CartProvider> {/* Wrap everything inside CartProvider */}
      <Router>
        <NavBar>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink> {/* Added Cart link */}
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </NavBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} /> {/* Cart page route */}
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
