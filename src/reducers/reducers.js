import { combineReduces, combineReducers } from 'redux';
import postReducer from '../reducers/postReducer';

export default combineReducers({ post: postReducer });
