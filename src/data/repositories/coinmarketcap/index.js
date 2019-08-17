import { CC_LISTINGS_LATEST_ENDPOINT, PAGE_SIZE } from '../../../utils/constants/endpoints';
import Http from '../../Http';

const getCryptocurrencyListingsLatest = async (page = 0) =>
  Http.get(
    `${CC_LISTINGS_LATEST_ENDPOINT}?limit=${PAGE_SIZE}&start=${page * PAGE_SIZE + 1}&convert=USD`
  );

export default {
  getCryptocurrencyListingsLatest
};
