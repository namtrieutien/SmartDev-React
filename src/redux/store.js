import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas/login/rootSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, 
  composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
));

sagaMiddleware.run(rootSaga);

export default store;