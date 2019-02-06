import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import AppReducer from './AppReducer';

export default createStore(AppReducer, applyMiddleware(thunk, logger))