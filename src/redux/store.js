import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
// import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);