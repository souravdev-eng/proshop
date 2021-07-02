import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './cart/cart.reducer';

import {
  productDetailsReducer,
  productListReducer,
} from './product/product.reducer';

const rootReducer = combineReducers({
  product: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const cartItemFromLocal = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialstate = {
  cart: { cartItems: cartItemFromLocal },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
