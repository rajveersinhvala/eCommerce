import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext();

const grtlocalCartData = () => {
  let localdata = localStorage.getItem("Cartdatalocal");
  if (localdata === []) {
    return [];
  } else {
    return JSON.parse(localdata);
  }
};

const initialState = {
  // cart: [],
  cart: grtlocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearcart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Add to local storage

  useEffect(() => {
    dispatch({ type: "UPDATE_CART" });
    dispatch({ type: "TOTAL_AMOUNT" });
    localStorage.setItem("Cartdatalocal", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearcart,
        setIncrement,
        setDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
