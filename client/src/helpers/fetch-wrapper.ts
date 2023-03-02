import getConfig from 'next/config';
import {AuthService} from '@/services/auth.service';


const { publicRuntimeConfig } = getConfig();

export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};

function get(url: any) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(url)
    };
    // @ts-ignore
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url: any, body: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        credentials: 'include',
        body: JSON.stringify(body)
    };
    // @ts-ignore
    return fetch(url, requestOptions).then(handleResponse);
}

function put(url: any, body: any) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        body: JSON.stringify(body)
    };
    // @ts-ignore
    return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url: any) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(url)
    };
    // @ts-ignore
    return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function authHeader(url: any) {
    // return auth header with jwt if user is logged in and request is to the api url
    const user = AuthService.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.token}` };
    } else {
        return {};
    }
}

function handleResponse(response: any) {
    return response.text().then((text: any) => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if ([401, 403].includes(response.status) && AuthService.userValue) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                AuthService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}