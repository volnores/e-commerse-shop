import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedProduct: "",
  category: "",
};

export const filteredSearch = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchedProduct(state, action) {
      state.searchedProduct = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setSearchedProduct, setCategory } = filteredSearch.actions;
export default filteredSearch.reducer;
