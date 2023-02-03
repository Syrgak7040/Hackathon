import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { API } from "../helpers/consts";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: {},
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

  const getProducts = async (searchParams) => {
    const { data } = await axios(`${API}?q=${searchParams || ""}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  //////////////

  const addProduct = async (obj) => {
    try {
      await axios.post(API, obj);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  //////
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
  ////////////

  const getProductDetails = async (id) => {
    try {
      let res = await axios(`${API}/${id}`);
      dispatch({
        type: "GET_PRODUCT_DETAILS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const saveEditProduct = async (id, obj) => {
    try {
      await axios.patch(`${API}/${id}`, obj);
      getProducts();
      // navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchByParams = (query, value) => {};

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
        fetchByParams,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
