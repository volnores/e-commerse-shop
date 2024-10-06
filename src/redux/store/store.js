import { configureStore } from "@reduxjs/toolkit";
import Item from "../Slices/getProductsSlice";
import WishList from "../Slices/WishListSlice/WishListSlice";
import Cart from "../Slices/CartSlice/CartSlice";
import Search from "../Slices/FilterSlice/FilterSlice";

export const store = configureStore({
  reducer: {
    items: Item,
    wishlist: WishList,
    cart: Cart,
    search: Search,
  },
});
