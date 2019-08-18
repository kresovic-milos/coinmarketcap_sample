import { createSelector } from 'reselect';

const getCCListingsLatest = state => state.ccListingsLatest;

export const getCCListingsLatestSelector = createSelector(
  getCCListingsLatest,
  listings => listings
);

export const getCCLatest = (state, cc) =>
  createSelector(
    getCCListingsLatest,
    ({ cryptocurrencies }) => cryptocurrencies[cc]
  );
