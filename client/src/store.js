import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import reducer from './reducers'

const middleware = applyMiddleware(promiseMiddleware, thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(middleware));