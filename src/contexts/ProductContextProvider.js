import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";

export const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "EDIT_PRODUCT":
      return { ...state, productToEdit: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    const { data } = await axios(`${API}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    await axios.post(`${API}`, newProduct);
    getProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const editProduct = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "EDIT_PRODUCT",
      payload: data,
    });
  };

  const saveEdit = async (newProduct) => {
    await axios.patch(`${API}/${newProduct.id}`, newProduct);
    getProducts();
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        productToEdit: state.productToEdit,
        addProduct,
        getProducts,
        deleteProduct,
        editProduct,
        saveEdit,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
