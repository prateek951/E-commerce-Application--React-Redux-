import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

// 1. Create middlewares
const middlewares = [logger];

// 2. Create store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// 3. Persistor
export const persistor = persistStore(store);
