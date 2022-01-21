import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk'

const middleWares = [logger, thunkMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store) 