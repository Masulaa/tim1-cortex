import { configureStore } from  '@reduxjs/toolkit'

import orderReducer from "./orderStore"

const store = configureStore({
  reducer:{orders: orderReducer,}
});


export default store;