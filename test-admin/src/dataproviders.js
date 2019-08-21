import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}

const dataProviders = [
  { dataProvider: simpleRestProvider('http://localhost:8000/api', httpClient), resources: ['leads'] },
  { dataProvider: simpleRestProvider('http://localhost:8001/api', httpClient), resources: ['projects'] },
];

export default (type, resource, params) => {
  const dataProviderMapping = dataProviders.find(dp => dp.resources.includes(resource));
  return dataProviderMapping.dataProvider(type, resource, params);
};