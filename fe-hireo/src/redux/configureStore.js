import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import settingsReducer from './ducks/settings';
import tagsReducer from './ducks/tags';
import resumeReducer from './ducks/resume';
import snackbarReducer from './ducks/snackbar';
import { watcherSaga } from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

let middleware = [sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, loggerMiddleware];
}

const reducer = combineReducers({
  resume: resumeReducer,
  settings: settingsReducer,
  tags: tagsReducer,
  snackbar: snackbarReducer
});

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
