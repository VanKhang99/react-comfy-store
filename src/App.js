import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Error,
  Home,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;
