import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "../../contexts/CardContextProvider";
import {
  productContext,
  useProduct,
} from "../../contexts/ProductContextProvider";
import Bottom from "../bottom/Bottom";
import Carousel1 from "../carousel/Carousel1";
import Footer from "../footer/Footer";
import Pagination from "../pagination/Pagination";

const ProductList = () => {
  ///////////
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  //////////
  const { products, getProducts, deleteProduct, editProduct, fetchByParams } =
    useContext(productContext);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    // getProducts();
    getProducts(searchParams.get("q"));
  }, [searchParams]);

  const { addProductToCart } = useCart();

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {/* /////////// */}
      <div style={{ marginTop: "32px" }}>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "large",
            color: "white",
            backgroundColor: "#fc3f3f",
            borderRadius: "12px",
            height: "27px",
          }}
          id="demo-radio-buttons-group-label"
        >
          Categories
        </div>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          // onChange={(e) => fetchByParams("type", e.target.value)}
          onChange={(e) => fetchByParams("category", e.target.value)}
          name="radio-buttons-group"
        >
          <FormControlLabel value="all" control={<Radio />} label="all" />
          <FormControlLabel
            value="helmets"
            control={<Radio />}
            label="helmets"
          />
          <FormControlLabel value="skates" control={<Radio />} label="skates" />
          <FormControlLabel value="shoes" control={<Radio />} label="shoes" />
          <FormControlLabel
            value="clothes"
            control={<Radio />}
            label="clothes"
          />
          <FormControlLabel value="skis" control={<Radio />} label="skis" />
          <FormControlLabel value="other" control={<Radio />} label="other" />
          <FormControlLabel value="what" control={<Radio />} label="what" />
        </RadioGroup>
      </div>
      {/*  //////////////*/}
      {products.map((item) => (
        <Card
          style={{
            width: "270px",
            height: "450px",
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
            {/* <Button onClick={() => editProduct(item.id)}>Edit</Button> */}

            <Button
              style={{
                backgroundColor: "#ffa74f",
                color: "white",
                borderColor: "white",
                border: "none",
                margin: "4px",
                width: "60px",
                height: "25px",
                borderRadius: "50px",
                textAlign: "center",
                fontSize: "large",
              }}
              onClick={() => editProduct(item.id)}
            >
              Edit
            </Button>
          </Link>
          {/* <Button onClick={() => deleteProduct(item.id)}>Delete</Button> */}

          <Button
            style={{
              backgroundColor: "#eb5349",
              color: "white",
              borderColor: "white",
              border: "none",
              margin: "4px",
              width: "80px",
              height: "25px",
              borderRadius: "50px",
              textAlign: "center",
              fontSize: "large",
              margin: "0 auto",
            }}
            onClick={() => deleteProduct(item.id)}
          >
            Delete
          </Button>

          <Button
            style={{
              backgroundColor: "rgb(0, 102, 255)",
              color: "white",
              borderColor: "white",
              border: "none",
              margin: "4px",
              width: "80px",
              height: "25px",
              borderRadius: "50px",
              textAlign: "center",
              fontSize: "large",
              margin: "0 auto",
            }}
            onClick={() => {
              addProductToCart(item);
            }}
          >
            add
          </Button>
        </Card>
      ))}

      <Pagination />
      <Carousel1 />
      <Bottom />
      <Footer />
    </div>
  );
};
export default ProductList;
