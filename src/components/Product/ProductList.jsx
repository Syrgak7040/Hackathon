import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CardContextProvider";
import {
  productContext,
  useProduct,
} from "../../contexts/ProductContextProvider";
import Bottom from "../bottom/Bottom";
import Carousel1 from "../carousel/Carousel1";
import Footer from "../footer/Footer";

const ProductList = () => {
  const { products, getProducts, deleteProduct, editProduct } =
    useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);
  const { addProductToCart } = useCart();

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {products.map((item) => (
        <Card
          style={{
            width: "270px",
            height: "400px",
            backgroundColor: "white",
            margin: "32px 18px",
          }}
          key={item.id}
        >
          <div>
            <img
              style={{ width: "270px", height: "270px" }}
              src={`${item.img}`}
              alt="image"
            />
          </div>
          <p>{`${item.title}`}</p>
          <p style={{ fontWeight: "bold" }}>{`${item.price} $`}</p>
          <Link to="/edit">
            <Button onClick={() => editProduct(item.id)}>Edit</Button>
          </Link>
          <Button onClick={() => deleteProduct(item.id)}>Delete</Button>

          <Button
            onClick={() => {
              addProductToCart(item);
            }}
          >
            add
          </Button>
        </Card>
      ))}
      <Carousel1 />
      <Bottom />
      <Footer />
    </div>
  );
};

export default ProductList;
