const productArray = [
  {
    id: '1',
    title: 'Coffee',
    price: 3.99,
  },
  {
    id: '2',
    title: 'Sunglasses',
    price: 9.99,
  },
  {
    id: '3',
    title: 'Camera',
    price: 39.99,
  },
];

function getProduct(id) {
  let productData = productArray.find((p) => p.id === id);

  if (!productData) {
    console.log('Product not found...');
    return;
  }

  return productData;
}

export { productArray, getProduct };
