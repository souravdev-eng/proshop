import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
  productDetailsReducer,
  productListReducer,
} from './product/product.reducer';

const rootReducer = combineReducers({
  product: productListReducer,
  productDetails: productDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
