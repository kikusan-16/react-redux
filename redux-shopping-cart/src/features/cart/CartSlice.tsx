import {createSlice} from "@reduxjs/toolkit"
import cartItems from "../../cartItems"
import { CartItemType } from "../../components/CartItem"

type cartState = {
  cartItems: CartItemType[],
  amount: number,
  total: number,  
}

// 買い物かごの初期化
const initialState: cartState = {
  cartItems: cartItems,
  amount: cartItems.reduce((summ: number, current: CartItemType) => summ + current.amount, 0),
  total: cartItems.reduce((summ: number, current: CartItemType) => summ + current.price * current.amount, 0),
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (_) => { // actionsに配置され、action名になる。 ->  type: "cart/removeItem";
      return { cartItems: [], amount: 0, total: 0 } // 戻り値がstateになる。
    },
    removeItem: (state, action) => { // actionにはpayloadとtypeが乗っている typeは自動で決まり、payloadはactionの引数が入る
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload)
      if (cartItem) {
        cartItem.amount = cartItem.amount + 1;
      }
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload)
      if (cartItem) {
        cartItem.amount = cartItem.amount - 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price;
      })
      state.amount = amount;
      state.total = total;
    },
  },
})

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions
export default cartSlice.reducer