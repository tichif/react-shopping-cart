import { useState, useContext } from 'react';
import { Container, Button, Navbar, Modal } from 'react-bootstrap';

import { CartContext } from '../CartContext';
import CartItem from './CartItem';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const cart = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productCount = cart.items.reduce(
    (sum, product) => product.quantity + sum,
    0
  );

  return (
    <>
      <Navbar expand='sm'>
        <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button onClick={handleShow}>
            Cart {productCount} {productCount === 1 ? 'item' : 'items'}
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0 ? (
            <>
              <p>Items in your cart</p>
              {cart.items.map((product) => (
                <CartItem
                  key={product.id}
                  id={product.id}
                  quantity={product.quantity}
                />
              ))}
              <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
              <Button variant='success'>Purchase</Button>
            </>
          ) : (
            <h1>There are no products in your cart</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarComponent;
