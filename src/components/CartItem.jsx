import { useContext } from 'react';
import { Button } from 'react-bootstrap';

import { CartContext } from '../CartContext';
import { getProduct } from '../productStore';

const CartItem = ({ id, quantity }) => {
  const cart = useContext(CartContext);

  const product = getProduct(id);

  return (
    <>
      <h3>{product.title}</h3>
      <p>Quantity: {quantity}</p>
      <p>${(quantity * product.price).toFixed(2)}</p>
      <Button size='sm' onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr />
    </>
  );
};

export default CartItem;
