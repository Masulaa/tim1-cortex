import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  addedMealIds: [], 
};
const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    addOrder(state, action) {
      const orderInfo = action.payload;
      state.orders.push(orderInfo);
      state.addedMealIds.push(orderInfo.id);
    },
    removeOrder(state, action) {
      // Remove an order from the orders array based on its ID
      const orderIndex = state.orders.findIndex(
        (order) => order.id === action.payload
      );
      if (orderIndex !== -1) {
        state.orders.splice(orderIndex, 1);
      }
    },
    updateOrder(state, action) {
      // Update an order's quantity based on its ID
      const { id, quantity } = action.payload;
      const order = state.orders.find((order) => order.id === id);
      if (order) {
        order.quantity = quantity;
      }
    },
    clearOrders(state) {
      // Clear all orders
      state.orders = [];
    },
  },
});

export const {
  addOrder,
  removeOrder,
  updateOrder,
  clearOrders,
} = orderSlice.actions;

export default orderSlice.reducer;
