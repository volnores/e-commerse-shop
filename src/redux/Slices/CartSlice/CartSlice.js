import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) ?? [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItemFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id != action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart(state, action) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementItem(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].quantity >= 1) {
        state.cart[itemIndex].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementItem(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      } else if (state.cart[itemIndex].quantity === 1) {
        const removeItem = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeItem;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  incrementItem,
  decrementItem,
} = CartSlice.actions;

export default CartSlice.reducer;
