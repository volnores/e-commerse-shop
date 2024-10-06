import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../../components/constants/Status";

const base_url = "https://fakestoreapi.com/products";

export const getAxiosItems = createAsyncThunk(
  "items/getItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}`);

      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: "",
  items: [],
  error: null,
};

const ItemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAxiosItems.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getAxiosItems.fulfilled, (state, action) => {
        state.status = STATUS.SUCCESS;
        state.items = action.payload;
      })
      .addCase(getAxiosItems.rejected, (state, action) => {
        state.status = STATUS.ERROR;
        state.error = action.payload;
      });
  },
});

export default ItemsSlice.reducer;
