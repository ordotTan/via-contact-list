
import { createStore,combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import driverReducer from './reducers/driverReducer'

const rootReducer = combineReducers({
    driverContacts: driverReducer
  });

  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
