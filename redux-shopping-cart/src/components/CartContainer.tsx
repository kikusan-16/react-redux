import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import CartItem from "./CartItem"
import { openModal } from "../features/modal/ModalSlice"

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch();

  return (
    <section>
      <header>
        <h2>買い物かご</h2>
      </header>
      { amount < 1
        ? <h4 className="empty-cart">何も入っていません・・・</h4>
        : <div>
            {cartItems.map((item) => <CartItem key={item.id} {...item}/>)}
          </div>
      } 
      <footer>
        <hr />
        <div className="cart-total">
          <h4>合計{ total }円</h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>全削除</button>
      </footer>
    </section>
  )
}

export default CartContainer