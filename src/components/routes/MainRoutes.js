import { Route, Routes } from "react-router-dom";

import React from "react";
import CartPage from "../../pages/CartPage";
import ProductList from "../Product/ProductList";
import EditProduct from "../Product/EditProduct";
import AddProduct from "../Product/AddProduct";
import Carousel1 from "../carousel/Carousel1";
import Footer from "../footer/Footer";
import Bottom from "../bottom/Bottom";
// import Cart from "../Cart/Cart";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/carousel" element={<Carousel1 />} />
      <Route path="/bottom" element={<Bottom />} />
      <Route path="/footer" element={<Footer />} />

      <Route path="/edit" element={<EditProduct />} />
      <Route path="/create" element={<AddProduct />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default MainRoutes;
