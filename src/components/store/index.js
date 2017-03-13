import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/user';

const middleware = applyMiddleware(thunk)

const reducers = combineReducers({
	user
})

const store = createStore(reducers, middleware)

export default store;