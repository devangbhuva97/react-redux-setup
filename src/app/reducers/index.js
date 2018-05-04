import { combineReducers } from 'redux';

import testReducer from 'app/reducers/testReducer';

const appReducer = combineReducers({
  test: testReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
