import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProductDetails/:productId" element={<ProductDetails />} />
    </Routes>
  );
}
