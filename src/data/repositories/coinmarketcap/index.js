import endpoints from '../../../utils/constants/endpoints';
import Http from '../../Http';

const getCryptocurrencyListingsLatest = async () =>
  Http.get(`${endpoints.CC_LISTINGS_LATEST_ENDPOINT}`);

export default {
  getCryptocurrencyListingsLatest
};
