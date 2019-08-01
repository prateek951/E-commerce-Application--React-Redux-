import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
const sagaMiddleware = createSagaMiddleware();

// 1. Create middlewares
// const middlewares = [thunk];
const middlewares = [sagaMiddleware];

// 1.1 Check for the environment if it is development mode only then make use of logger
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// 2. Create store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
  
// 3. Persistor
export const persistor = persistStore(store);
