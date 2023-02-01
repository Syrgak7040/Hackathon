import React, { useContext, useState } from "react";
import { productContext } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const [inpTitle, setInpTitle] = useState("");
  const [inpPrice, setInpPrice] = useState("");
  const [inpImg, setInpImg] = useState("");
  const { addProduct } = useContext(productContext);

  function handleCreate() {
    let obj = {
      title: inpTitle,
      price: inpPrice,
      img: inpImg,
    };
    addProduct(obj);
    setInpTitle("");
    setInpPrice("");
    setInpImg("");
  }
  return (
    <div>
      <input
        type="text"
        value={inpTitle}
        onChange={(e) => setInpTitle(e.target.value)}
      />
      <input
        type="number"
        value={inpPrice}
        onChange={(e) => setInpPrice(e.target.value)}
      />
      <input value={inpImg} onChange={(e) => setInpImg(e.target.value)} />
      <button onClick={handleCreate}>Create product</button>
    </div>
  );
};

export default AddProduct;
