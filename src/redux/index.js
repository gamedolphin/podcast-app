import { combineReducers } from 'redux';
import configureStore from './createStore.js';

export const reducers = combineReducers({
  startup: require('./StartupRedux.js').reducer
});

export default () => {

  let { store } = configureStore(reducers);

  return store;
};
