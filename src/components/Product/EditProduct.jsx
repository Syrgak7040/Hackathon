import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const { productToEdit, saveEdit } = useContext(productContext);
  const [newEditItem, setNewEditItem] = useState(productToEdit);

  const navigate = useNavigate();

  const handleCreate = (e) => {
    if (e.target.name === "price") {
      let obj = { ...newEditItem, [e.target.name]: Number(e.target.value) };
      setNewEditItem(obj);
    } else {
      let obj = { ...newEditItem, [e.target.name]: e.target.value };
      setNewEditItem(obj);
    }
  };

  useEffect(() => {
    setNewEditItem(productToEdit);
  }, [productToEdit]);

  return (
    <div>
      {newEditItem ? (
        <>
          <div style={{ backgroundColor: "#ff9d26" }}>
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
              name="title"
              onChange={handleCreate}
              placeholder="Title"
              type="text:"
              value={newEditItem.title}
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
              name="price"
              onChange={handleCreate}
              placeholder="price"
              type="number:"
              value={newEditItem.price}
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
              name="img"
              onChange={handleCreate}
              placeholder="Img URL:"
              value={newEditItem.img}
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
              name="category"
              onChange={handleCreate}
              placeholder="Category:"
              type="text"
              value={newEditItem.category}
            />
            <button
              style={{
                backgroundColor: "#c9740c",
                color: "white",
                borderColor: "white",
                margin: "4px",
                width: "140px",
                height: "30px",
                borderRadius: "50px",
                border: "none",
                textAlign: "center",
                fontSize: "large",
              }}
              onClick={() => {
                saveEdit(newEditItem);
                navigate("/");
              }}
            >
              Save edit
            </button>
          </div>
          <h2
            style={{
              backgroundColor: "#ff9d26",
              color: "white",
              height: "40px",
              marginTop: "30px",
            }}
          >
            Your edit:
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              style={{
                width: "270px",
                height: "400px",
                backgroundColor: "white",
                margin: "32px 18px",
              }}
              // key={item.id}
            >
              <div>
                <img
                  style={{ width: "270px", height: "270px" }}
                  src={`${newEditItem.img}`}
                  alt="image"
                />
              </div>
              <p>{`${newEditItem.title}`}</p>
              <p style={{ fontWeight: "bold" }}>{`${newEditItem.price}`}</p>
            </Card>
          </div>
          <div style={{ backgroundColor: "#ff9d26", height: "40px" }}></div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default EditProduct;
