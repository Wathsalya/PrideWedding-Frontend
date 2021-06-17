import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App2';
// Styles
import { Wrapper } from './CartItem.styles';

type Props = {
  
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (companyID: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
     
      <h3>{item.companyCategory}</h3>
      <h4>{item.companyName}</h4>
      <div className='information'>
        
        <p>Price: ${item.discount_package}</p>
        <p>Total: ${(item.amount * item.discount_package).toFixed(2)}</p>
      </div>
      <div className='buttons'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item.companyID)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.imageSrc} alt={item.companyName} />
  </Wrapper>
);

export default CartItem;
