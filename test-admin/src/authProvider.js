// in src/authProvider.js
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('http://127.0.0.1:8001/api-token-auth/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if(response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
        }

    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
            return Promise.resolve();
        }

    if (type === AUTH_ERROR) {
        const status  = params.status;
            if (status === 401 || status === 403) {
                localStorage.removeItem('token');
                return Promise.reject();
            }
            return Promise.resolve();
        }

    if (type === AUTH_CHECK) {
            return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
        }
        return Promise.reject('Unknown method');
    }


    
