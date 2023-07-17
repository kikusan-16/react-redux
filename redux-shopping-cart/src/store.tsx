import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./features/cart/CartSlice" // default exportに命名
import modalReducer from "./features/modal/ModalSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>