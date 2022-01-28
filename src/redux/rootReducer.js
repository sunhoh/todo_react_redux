import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import todo from './modules/todo';

export const history = createBrowserHistory();

const rootReducer = combineReducers({ todo });

export default rootReducer;
