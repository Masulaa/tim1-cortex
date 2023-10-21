import { createSlice } from "@reduxjs/toolkit";

const initialMenuState = {
  };

const orderSlice = createSlice({
  name: 'menu',
  initialState: initialMenuState,
  reducers: {}
});

  export const orderActions = orderSlice.actions;
  export default orderSlice.reducer;