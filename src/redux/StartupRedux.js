import { createActions, handleActions, combineActions } from 'redux-actions';
import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({ ready: false });

const Actions = createActions({
  SET_STARTUP_READY: (ready) => ({ ready })
});

export const setReady = (state, { payload: { ready }}) => state.merge({ ready });

const { setStartupReady } = Actions;

export const reducer = handleActions({
  [setStartupReady] : setReady,
}, INITIAL_STATE);

export default Actions;
