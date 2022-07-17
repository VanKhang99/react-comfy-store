import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const { cart } = state;

    const tempItem = cart.find((item) => item.id === id + color);
    if (tempItem) {
      const checkCartItem = cart.map((cartItem) => {
        if (cartItem.id !== id + color) return cartItem;

        let newAmount = cartItem.amount + amount;

        if (newAmount > cartItem.available) newAmount = cartItem.available;
        return { ...cartItem, amount: newAmount };
      });

      return { ...state, cart: checkCartItem };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        price: product.price,
        image: product.images[0].url,
        available: product.stock,
        shipping: product.shipping,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload.id && action.payload.type === "inc") {
        let newQuantity = item.amount + 1;
        if (newQuantity > item.available) newQuantity = item.available;
        return { ...item, amount: newQuantity };
      }

      if (item.id === action.payload.id && action.payload.type === "dec") {
        let newQuantity = item.amount - 1;
        if (newQuantity < 1) newQuantity = 1;
        return { ...item, amount: newQuantity };
      }

      return item;
    });

    return { ...state, cart: newCart };
  }

  if (action.type === REMOVE_CART_ITEM) {
    const newCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    );

    return { ...state, cart: newCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { cart } = state;

    const { totalItems, totalAmount } = state.cart.reduce(
      (total, item) => {
        total.totalItems += item.amount;
        total.totalAmount += item.price * item.amount;
        return total;
      },
      { totalItems: 0, totalAmount: 0 }
    );

    let tempShippingFee;
    tempShippingFee = cart.every((item) => item.shipping) ? 0 : 534;

    return { ...state, totalItems, totalAmount, shippingFee: tempShippingFee };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
