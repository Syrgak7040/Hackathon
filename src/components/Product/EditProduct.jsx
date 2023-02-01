import React, { useContext, useEffect, useState } from "react";
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
          <input
            name="title"
            onChange={handleCreate}
            placeholder="Title"
            type="text:"
            value={newEditItem.title}
          />
          <input
            name="price"
            onChange={handleCreate}
            placeholder="price"
            type="number:"
            value={newEditItem.price}
          />
          <input
            name="img"
            onChange={handleCreate}
            placeholder="Img URL:"
            value={newEditItem.img}
          />
          <input
            name="category"
            onChange={handleCreate}
            placeholder="Category:"
            type="text"
            value={newEditItem.category}
          />
          <button
            onClick={() => {
              saveEdit(newEditItem);
              navigate("/");
            }}
          >
            Save edit
          </button>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default EditProduct;
