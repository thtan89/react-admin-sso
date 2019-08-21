// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import { LeadList } from './leads';
//import simpleRestProvider from 'ra-data-simple-rest';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import NotFound from './NotFound';
import { createMuiTheme } from '@material-ui/core/styles';
import dataProviders from './dataproviders';

//const httpClient = (url, options = {}) => {
//    if (!options.headers) {
//        options.headers = new Headers({ Accept: 'application/json' });
//    }
//    const token = localStorage.getItem('token');
//    options.headers.set('Authorization', `Bearer ${token}`);
//    return fetchUtils.fetchJson(url, options);
//}

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
//const dataProvider = simpleRestProvider('http://127.0.0.1:8001/api', httpClient);
const App = () => (
    <Admin theme={theme} catchAll={NotFound} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProviders}>
        <Resource name="projects" list={UserList} icon={UserIcon} />
        <Resource name="leads" list={LeadList} icon={UserIcon} />
    </Admin>
);

export default App;