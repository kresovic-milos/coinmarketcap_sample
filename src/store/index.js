import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../App/state/reducers';
import rootSaga from '../App/state/sagas';

export default (initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

  const sagaMiddleware = createSagaMiddleware();

  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(sagaMiddleware))(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  sagaMiddleware.run(rootSaga);

  // persist state during hot reloads
  // if (module.hot) {
  //   module.hot.accept(() => {
  //     // eslint-disable-next-line global-require
  //     const nextRootReducer = require('../App/state/reducers').default;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
};
