import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Nav from "./components/Nav";
import ProductDetail from "./ProductDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import About from "./Pages/About";
import Contact from "./Contanct";
import Account from "./Pages/Account";
import Wishlist from "./Wishlist";
import Shop from "./Shop";
import Services from "./Services";
import OurStory from "./components/OurStory";
import Footer from "./Footer";

const MainContent = styled.div`
  max-width: 160rem;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <Router>
      <Nav />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Services />} />
          <Route path="about/our-story" element={<OurStory />} />
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
};

export default App;
