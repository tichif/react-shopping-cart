import { Row, Col } from 'react-bootstrap';

import { productArray } from '../productStore';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <>
      <h1 align='center' className='p-3'>
        Welcome to the Store
      </h1>
      <Row xs={1} md={3} className='g-4'>
        {productArray.map((product) => (
          <Col align='center' key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
