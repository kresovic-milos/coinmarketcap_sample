/* eslint-disable no-param-reassign */
import { API_KEY, API_KEY_HEADER } from 'react-native-dotenv';

export default config => {
  config.headers[API_KEY_HEADER] = API_KEY;

  return config;
};
