import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { productContext } from "../../contexts/ProductContextProvider";

const ProductList = () => {
  const { products, getProducts, deleteProduct, editProduct } =
    useContext(productContext);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    // console.log(searchParams);
    getProducts(searchParams.get("q"));
  }, [searchParams]);

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
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
