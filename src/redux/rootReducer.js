import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import address from './modules/address';

export const history = createBrowserHistory();

const rootReducer = combineReducers({ address });

export default rootReducer;
