import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) ?? [],
};

export const WishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishList(state, action) {
      state.wishlist.push(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeItemFromWishList(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id != action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeAll(state, action) {
      state.wishlist = [];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { addItemToWishList, removeItemFromWishList, removeAll } =
  WishListSlice.actions;

export default WishListSlice.reducer;
