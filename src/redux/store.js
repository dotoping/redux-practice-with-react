import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk' // redux-thunk applied

const middelware = [logger, thunk]

const store = createStore(rootReducer, applyMiddleware(...middelware))

export default store;