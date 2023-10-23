import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  addedMeals: {}, // Objekt za pohranu dodanih jela
  addedMealIds: [], // Niz ID-ova dodanih jela
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    addOrder(state, action) {
      const orderInfo = action.payload;
      state.orders.push(orderInfo);
      const { id, ...mealInfo } = orderInfo; // Izdvojite ID i ostale informacije o obroku
      state.addedMeals[id] = mealInfo; // Dodajte obrok u objekt addedMeals
      state.addedMealIds.push(id); // Dodajte ID u niz addedMealIds
    },
    removeOrder(state, action) {
      const idToRemove = action.payload;
      // Uklonite obrok iz niza orders
      const orderIndex = state.orders.findIndex((order) => order.id === idToRemove);
      if (orderIndex !== -1) {
        state.orders.splice(orderIndex, 1);
      }
      // Uklonite obrok iz objekta addedMeals
      delete state.addedMeals[idToRemove];
      // Uklonite ID iz niza addedMealIds
      state.addedMealIds = state.addedMealIds.filter((id) => id !== idToRemove);
    },
    updateOrder(state, action) {
      const { id, quantity } = action.payload;
      const order = state.orders.find((order) => order.id === id);
      if (order) {
        order.quantity = quantity;
      }
    },
    clearOrders(state) {
      state.orders = [];
      state.addedMeals = {};
      state.addedMealIds = [];
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
