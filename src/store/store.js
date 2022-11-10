import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {unsplashReducer} from './reducers/unsplashReducer';
const rootReducer = combineReducers({unsplashReducer});
export const store = createStore(rootReducer, applyMiddleware(thunk));
