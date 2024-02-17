import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { InitialSalesState } from "../../../types";

const initialState: InitialSalesState = {
  sales: [],
  isLoading: false,
  error: "",
};

const url = "http://localhost:5000/api/v1";
export const fetchSales = createAsyncThunk("fetchSales", async () => {
  const res = await fetch(`${url}/sales`);
  const data = await res.json();

  return data.sales;
});

export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addSale: (state, action) => {
      state.sales.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSales.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchSales.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.sales = action.payload;
      }
    );
    builder.addCase(
      fetchSales.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      }
    );
  },
});

export default salesSlice.reducer;
