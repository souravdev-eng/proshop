import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './cart/cart.reducer';

import {
  productDetailsReducer,
  productListReducer,
} from './product/product.reducer';
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './user/userReducers';

const rootReducer = combineReducers({
  product: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRagister: userRegisterReducer,
  userDetail: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const cartItemFromLocal = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userFromLocal = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialstate = {
  cart: { cartItems: cartItemFromLocal },
  userLogin: { userInfo: userFromLocal },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
