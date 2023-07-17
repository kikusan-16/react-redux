import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const { cartItems } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const { isOpen } = useSelector((state: RootState) => state.modal)

  useEffect(() => {
    dispatch(calculateTotals())
  }, [dispatch, cartItems]) // Hooks のuseEffectによって、stateの状態変化によって発火させる 監視するstateに加えて内部で使用するオブジェクトは[]に入れる必要あり。
  return (
    <main>
      { isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
