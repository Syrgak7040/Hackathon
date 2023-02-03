import axios from "axios";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ProductList from "../Product/ProductList";

function Catalog() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const res = await axios.get("http://localhost:8000/products");
    const allCategories = res.data.map((product) => {
      return product.category;
    });
    setCategories(allCategories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <DropdownButton
      className="catalogDrop"
      id="dropdown-item-button"
      title="КАТАЛОГ"
    >
      {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
      {categories.map((category, index) => (
        <Dropdown.Item as="button" key={index}>
          {category}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default Catalog;
