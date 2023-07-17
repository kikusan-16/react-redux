import { useSelector } from "react-redux"
import { RootState } from "../store"
import { CartIcon } from "../HeroIcons"

const Navbar = () => {
  const { amount } = useSelector((store: RootState) => store.cart)
  return <div className="nav-center">
    <h3>Redux Shopping</h3>
    <div className="nav-container">
      <CartIcon />
      <div className="amount-container">
        <p className="total-amount">{ amount }</p>
      </div>
    </div>
  </div>
}

export default Navbar