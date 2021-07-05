import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScree from './screens/ShippingScree';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/login' exact component={LoginScreen} />
          <Route path='/register' exact component={RegisterScreen} />
          <Route path='/profile' exact component={ProfileScreen} />
          <Route path='/shipping' exact component={ShippingScree} />
          <Route path='/payment' exact component={PaymentScreen} />
          <Route path='/placeorder' exact component={PlaceOrderScreen} />
          <Route path='/products/:id' exact component={ProductScreen} />
          <Route path='/cart/:id?' exact component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
