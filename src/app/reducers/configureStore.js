import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from 'app/reducers';

export default function configureStore(preloadedState) {
  const middlewares = [promise, reduxThunk];

  if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
  }

  const createStoreWithMiddleware = applyMiddleware(...middlewares);

  const storeEnhancers = [createStoreWithMiddleware];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  if (process.env.NODE_ENV === `development`) {
    if (module.hot) {
      module.hot.accept(rootReducer, () => {
        const newRootReducer = rootReducer;
        store.replaceReducer(newRootReducer);
      });
    }
  }

  return store;
}
