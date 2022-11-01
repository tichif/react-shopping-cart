import { useState, createContext } from 'react';
import { productArray, getProduct } from './productStore';

export const CartContext = createContext({
  items: [],
  getProductQty: () => {},
  addOneToCart: () => {},
  removeOneToCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // get product quantity
  function getProductQty(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (!quantity) {
      return 0;
    }

    return quantity;
  }

  // add one to cart
  function addOneToCart(id) {
    const quantity = getProductQty(id);

    // no product in cart
    if (!quantity) {
      setCartProducts([...cartProducts, { id, quantity: 1 }]);
    }
    // product in cart
    else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  // remove one to cart
  function removeOneToCart(id) {
    const quantity = getProductQty(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  // delete from cart
  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((product) => product.id !== id)
    );
  }

  // get total cost
  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((product) => {
      const productData = getProduct(product.id);
      totalCost += productData.price * product.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQty,
    addOneToCart,
    removeOneToCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider
