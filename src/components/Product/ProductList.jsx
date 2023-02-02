import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productContext } from "../../contexts/ProductContextProvider";

const ProductList = () => {
  const { products, getProducts, deleteProduct, editProduct, fetchByParams } =
    useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
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
          onChange={(e) => fetchByParams("type", e.target.value)}
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
        </RadioGroup>
      </div>
      {products.map((item) => (
        <Card
          style={{
            width: "270px",
            height: "420px",
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
            }}
            onClick={() => deleteProduct(item.id)}
          >
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
