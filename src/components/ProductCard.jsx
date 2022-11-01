import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';

import { CartContext } from '../CartContext';

const ProductCard = ({ product }) => {
  const cart = useContext(CartContext);
  const productQty = cart.getProductQty(product.id);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {productQty > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column='true' sm='6'>
                In Cart: {productQty}
              </Form.Label>
              <Col sm='6'>
                <Button
                  sm='6'
                  className='mx-2'
                  onClick={() => cart.addOneToCart(product.id)}
                >
                  +
                </Button>
                <Button
                  sm='6'
                  className='mx-2'
                  onClick={() => cart.removeOneToCart(product.id)}
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant='danger'
              className='my-2'
              onClick={() => cart.deleteFromCart(product.id)}
            >
              Remove From Cart
            </Button>
          </>
        ) : (
          <Button
            variant='primary'
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
