import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant='primary'>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
