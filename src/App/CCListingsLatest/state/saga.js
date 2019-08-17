import { keyBy } from 'lodash';
import { all, put, select, takeLatest } from 'redux-saga/effects';
import repo from '../../../data/repositories/coinmarketcap';
import {
  CC_LISTINGS_LATEST,
  fetchCCListingsLatestFail,
  fetchCCListingsLatestSuccess
} from './actions';

export function* fetchCCListingLatest$() {
  try {
    const page = yield select(state => state.ccListingsLatest.page);
    const response = yield repo.getCryptocurrencyListingsLatest(page);
    const ccMap = keyBy(response.data.data, 'id');
    yield put(fetchCCListingsLatestSuccess(ccMap));
  } catch (error) {
    yield put(fetchCCListingsLatestFail({ error }));
  }
}

export default function*() {
  yield all([takeLatest(CC_LISTINGS_LATEST, fetchCCListingLatest$)]);
}
