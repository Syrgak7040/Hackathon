import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { productContext } from "../../contexts/ProductContextProvider";

const ProductList = () => {
  const { products, getProducts } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((item) => (
        <Card key={item.id}>
          <div>
            <img src={`${item.img}`} alt="image" />
          </div>
          <p>{`${item.title}`}</p>
          <p>{`${item.price}`}</p>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
