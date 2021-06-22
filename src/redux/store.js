import {applyMiddleware, createStore, compose} from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from "./sagas/index";

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware)
)(createStore)(rootReducer)

sagaMiddleware.run(rootSaga);
export default store;