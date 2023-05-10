// useContext
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const intialstate = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleproduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialstate);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // For Single Product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleproduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleproduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// Costom Hooks
const useProduct = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProduct };
