import { handleActions } from 'redux-actions';
import * as actions from './actions';
import initialState from './initialState';

export default handleActions(
  new Map([
    [
      actions.fetchCCListingsLatest,
      state => ({
        ...state,
        inProgress: true
      })
    ],
    [
      actions.fetchCCListingsLatestFail,
      (state, { payload }) => ({
        ...state,
        inProgress: false,
        fail: true,
        error: payload && payload.error ? payload.error : { message: 'unknown error' }
      })
    ],
    [
      actions.fetchCCListingsLatestSuccess,
      (state, { payload }) => ({
        ...state,
        inProgress: false,
        fail: false,
        error: null,
        page: state.page + 1,
        cryptocurrencies: { ...state.cryptocurrencies, ...payload }
      })
    ]
  ]),
  { ...initialState }
);
