import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import AppReducer from './AppReducer';

export default createStore(AppReducer, applyMiddleware(logger))