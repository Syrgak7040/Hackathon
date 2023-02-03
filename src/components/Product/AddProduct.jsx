import React, { useContext, useState } from "react";
import { productContext } from "../../contexts/ProductContextProvider";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [inpTitle, setInpTitle] = useState("");
  const [inpPrice, setInpPrice] = useState("");
  const [inpImg, setInpImg] = useState("");
  const [inpCategory, setInpCategory] = useState("");
  const { addProduct } = useContext(productContext);

  function handleCreate() {
    let obj = {
      title: inpTitle,
      price: inpPrice,
      img: inpImg,
      category: inpCategory,
    };
    addProduct(obj);
    setInpTitle("");
    setInpPrice("");
    setInpImg("");
    setInpCategory("");
  }
  return (
    <div>
      <div style={{ backgroundColor: "#ff4747" }}>
        <input
          style={{
            margin: "60px 4px",
            width: "320px",
            height: "25px",
            borderRadius: "50px",
            border: "none",
            textAlign: "center",
            fontSize: "large",
          }}
          placeholder="Title:"
          type="text:"
          value={inpTitle}
          onChange={(e) => setInpTitle(e.target.value)}
        />
        <input
          style={{
            margin: "60px 4px",
            width: "320px",
            height: "25px",
            borderRadius: "50px",
            border: "none",
            textAlign: "center",
            fontSize: "large",
          }}
          placeholder="Price:"
          type="number"
          value={inpPrice}
          onChange={(e) => setInpPrice(e.target.value)}
        />
        <input
          style={{
            margin: "60px 4px",
            width: "320px",
            height: "25px",
            borderRadius: "50px",
            border: "none",
            textAlign: "center",
            fontSize: "large",
          }}
          placeholder="Img URL:"
          value={inpImg}
          onChange={(e) => setInpImg(e.target.value)}
        />
        <input
          style={{
            margin: "60px 4px",
            width: "320px",
            height: "25px",
            borderRadius: "50px",
            border: "none",
            textAlign: "center",
            fontSize: "large",
          }}
          placeholder="Category:"
          type="text"
          value={inpCategory}
          onChange={(e) => setInpCategory(e.target.value)}
        />
        <Link to="/">
          <button
            style={{
              backgroundColor: "#c71a0e",
              color: "white",
              borderColor: "white",
              border: "none",
              margin: "4px",
              width: "140px",
              height: "28px",
              borderRadius: "50px",
              textAlign: "center",
              fontSize: "large",
            }}
            className="create-button"
            onClick={handleCreate}
          >
            Create product
          </button>
        </Link>
      </div>
      <h2
        style={{
          backgroundColor: "#ff4747",
          color: "white",
          height: "40px",
          marginTop: "30px",
        }}
      >
        Your product:
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            width: "270px",
            height: "400px",
            backgroundColor: "white",
            margin: "32px 18px",
          }}
        >
          <div>
            <img
              style={{ width: "270px", height: "270px" }}
              src={`${inpImg}`}
              alt="image"
            />
          </div>
          <p>{`${inpTitle}`}</p>
          <p style={{ fontWeight: "bold" }}>{`${inpPrice}$`}</p>
        </Card>
      </div>
      <div style={{ backgroundColor: "#ff4747", height: "40px" }}></div>
    </div>
  );
};

export default AddProduct;
