import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const getCartFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getCartFromLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 534,
};

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id,
        color,
        amount,
        product,
      },
    });
  };

  const removeCartItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const controlCartItemQuantity = (id, typeAction) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: { id, type: typeAction },
    });
  };

  // const countCartTotal = () => {
  //   dispatch({ type: COUNT_CART_TOTALS });
  // };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeCartItem,
        clearCart,
        controlCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
