import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// LocalStorage from redux-persist
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartItemReducer from './cart-item/cart-item.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
// Create persist configuration object
const persistConfigObj = {
  key: 'root',
  storage,
  whitelist: ['cart'] // add only care since user is persisted by firebase
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartItemReducer,
  directory: directoryReducer,
  shop: shopReducer
});

// modified root reducer with persistence capabilities

export default persistReducer(persistConfigObj, rootReducer);
