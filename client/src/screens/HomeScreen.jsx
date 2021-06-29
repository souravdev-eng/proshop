import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Product from '../components/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const featchPost = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    featchPost();
  }, []);

  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
