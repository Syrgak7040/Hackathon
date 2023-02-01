import React, { useContext, useState } from "react";
import { productContext } from "../../contexts/ProductContextProvider";

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
      <input
        placeholder="Title"
        type="text:"
        value={inpTitle}
        onChange={(e) => setInpTitle(e.target.value)}
      />
      <input
        placeholder="price"
        type="number:"
        value={inpPrice}
        onChange={(e) => setInpPrice(e.target.value)}
      />
      <input
        placeholder="Img URL:"
        value={inpImg}
        onChange={(e) => setInpImg(e.target.value)}
      />
      <input
        placeholder="Category:"
        type="text"
        value={inpCategory}
        onChange={(e) => setInpCategory(e.target.value)}
      />
      <button onClick={handleCreate}>Create product</button>
    </div>
  );
};

export default AddProduct;
