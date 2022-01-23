import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import quiz from './modules/quiz';

export const history = createBrowserHistory();

const rootReducer = combineReducers({ quiz });

export default rootReducer;
