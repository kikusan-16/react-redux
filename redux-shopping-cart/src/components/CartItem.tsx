import { useDispatch } from "react-redux";
import { MinusIcon, PlusIcon } from "../HeroIcons";
import { decrease, increase, removeItem } from "../features/cart/CartSlice";


export type CartItemType = {
  id: number;
  img: string;
  title: string;
  price: number;
  amount: number;
}

const CartItem: React.FC<CartItemType> = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}円</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>削除</button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}><PlusIcon /></button>
        <p className="amount">{amount}</p>
        <button disabled={amount < 1} className="amount-btn" onClick={() => dispatch(decrease(id))}><MinusIcon /></button>
      </div>
    </article>
  );
};

export default CartItem;
