import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import CheckoutSteps from '../components/CheackOutStep';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../redux/cart/cart.action';

const ShippingScree = ({ history }) => {
  const { shippingAddress } = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push('/payment');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address' className='mb-3'>
          <Form.Label>address Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required></Form.Control>
        </Form.Group>

        <Form.Group controlId='city' className='mb-3'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode' className='mb-3'>
          <Form.Label>postalCode postalCode</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postalCode'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required></Form.Control>
        </Form.Group>

        <Form.Group controlId='country' className='mb-3'>
          <Form.Label>country country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Contineu
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScree;
