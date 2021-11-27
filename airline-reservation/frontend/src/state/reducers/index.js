import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import flightReducer from './flightReducer';

const reducers = combineReducers({
  login: loginReducer,
  flight: flightReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    return reducers(undefined, action);
  }

  return reducers(state, action);
};
export default rootReducer;
