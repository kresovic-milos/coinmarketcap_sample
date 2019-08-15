import { all } from 'redux-saga/effects';
import ccListingsLatest from '../CCListingsLatest/state/saga';

export default function*() {
  yield all([ccListingsLatest()]);
}
