import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// 1. Create middlewares
const middlewares = [logger];

// 2. Create store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
