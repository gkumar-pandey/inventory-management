import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ItemsState } from "../../../types";

const initialState: ItemsState = {
  items: [],
  isLoading: false,
  error: "",
};

const url = "http://localhost:5000/api/v1";
export const fetchItems = createAsyncThunk("fetchItems", async () => {
  const res = await fetch(`${url}/items`);
  const data = await res.json();
  return data;
});

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    updateItem: (state, action) => {
      state.items = state.items.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchItems.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.items = action.payload.items;
      }
    );
    builder.addCase(
      fetchItems.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      }
    );
  },
});

export const { addNewItem, updateItem,removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
