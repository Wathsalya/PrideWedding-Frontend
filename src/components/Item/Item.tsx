import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App2';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
   
      
    
    <img src={item.imageSrc} alt={item.companyName}/>
    <div>
      <h3>{item.companyCategory}</h3>
      <h4>{item.companyName}</h4>
     
      <h3>{item.discount_package}$</h3>
      <p>{item.companyWebsite}</p>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
