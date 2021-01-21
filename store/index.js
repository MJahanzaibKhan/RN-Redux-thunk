import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ApiPlacerholderReducer } from './reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(thunk));
const store = createStore(ApiPlacerholderReducer, middleware)

export default store;
