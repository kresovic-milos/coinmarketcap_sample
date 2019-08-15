import { all, put, takeLatest } from 'redux-saga/effects';
import repo from '../../../data/repositories/coinmarketcap';
import {
  CC_LISTINGS_LATEST,
  fetchCCListingsLatestFail,
  fetchCCListingsLatestSuccess
} from './actions';

export function* fetchCCListingLatest$() {
  try {
    const response = yield repo.getCryptocurrencyListingsLatest();

    yield put(fetchCCListingsLatestSuccess(response));
  } catch (error) {
    yield put(fetchCCListingsLatestFail({ error }));
  }
}

export default function*() {
  yield all([takeLatest(CC_LISTINGS_LATEST, fetchCCListingLatest$)]);
}
