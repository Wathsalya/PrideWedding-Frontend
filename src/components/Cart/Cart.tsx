
import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App2';
import {useHistory} from 'react-router-dom';





function HomeButton(){
  let history = useHistory();

function handleClick(){
  history.push("./client-order");
}
return(
  <button type="button" onClick={handleClick}>|Order Your WeddingCart Now|</button>
)}

  

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (companyID: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.discount_package, 0);

  return (
    <Wrapper>
      <h2>Your Wedding Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.companyID}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      
      <div>
      <HomeButton/>
      </div>
      
    
    </Wrapper>
  );
};

export default Cart;
