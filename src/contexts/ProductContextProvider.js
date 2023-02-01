import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API } from "../helpers/consts";

export const productContext = createContext();

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
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

  return (
    <productContext.Provider
      value={{ products: state.products, addProduct, getProducts }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
