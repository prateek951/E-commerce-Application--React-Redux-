import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartItemReducer from './cart-item/cart-item.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartItemReducer
});
