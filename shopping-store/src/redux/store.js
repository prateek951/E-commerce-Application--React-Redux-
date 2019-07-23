import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

// 1. Create middlewares
const middlewares = [];

// 1.1 Check for the environment if it is development mode only then make use of logger 
if(process.env.NODE_ENV === 'development') { 
  middlewares.push(logger);
}


// 2. Create store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// 3. Persistor
export const persistor = persistStore(store);
