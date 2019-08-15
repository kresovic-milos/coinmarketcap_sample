import { createAction } from 'redux-actions';

export const CC_LISTINGS_LATEST = '[CC_LISTINGS_LATEST]';
export const fetchCCListingsLatest = createAction(CC_LISTINGS_LATEST);

export const CC_LISTINGS_LATEST_FAIL = `${CC_LISTINGS_LATEST} fail`;
export const fetchCCListingsLatestFail = createAction(CC_LISTINGS_LATEST_FAIL);

export const CC_LISTINGS_LATEST_SUCCESS = `${CC_LISTINGS_LATEST} success`;
export const fetchCCListingsLatestSuccess = createAction(CC_LISTINGS_LATEST_SUCCESS);
