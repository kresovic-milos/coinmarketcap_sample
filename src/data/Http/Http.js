import axios from 'axios';
import config from './config';
import authInterceptor from './authInterceptor';

export const parseArgs = args => {
  let [url, data, opts] = args;

  if (typeof args[0] !== 'string') {
    const d = args[0];
    ({ url, data, opts } = d);
  }

  return { url, data, opts };
};

export default class Http {
  constructor() {
    this.http = axios.create(config);
    this.http.interceptors.request.use(authInterceptor, error => Promise.reject(error));
  }

  request(method, url, data, opts) {
    return new Promise((resolve, reject) => {
      let options = {};

      if (typeof method === 'string') {
        options = { method, url, ...opts };
        const key = options.method === 'get' ? 'params' : 'data';
        options[key] = data;
      } else {
        options = method;
      }

      this.http(options)
        .then(resolve)
        .catch(reject);
    });
  }

  get(...args) {
    const { url, data, opts } = parseArgs(args);

    return this.request('get', url, data, opts);
  }

  post(...args) {
    const { url, data, opts } = parseArgs(args);

    return this.request('post', url, data, opts);
  }

  put(...args) {
    const { url, data, opts } = parseArgs(args);

    return this.request('put', url, data, opts);
  }

  delete(...args) {
    const { url, data, opts } = parseArgs(args);

    return this.request('delete', url, data, opts);
  }
}
