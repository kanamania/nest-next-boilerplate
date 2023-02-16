import {fetchUtils, Options} from 'react-admin';
import {authProvider} from './authProvider';

export default (url: string, options = {}) => {
    const token = JSON.parse(localStorage.getItem('auth') ?? '{}').token ?? null;
    if (token) {
        // @ts-ignore
        if (!options.headers) {
            // @ts-ignore
            options.headers = new Headers({Accept: 'application/json'});
        }
        // @ts-ignore
        options.headers.set("Authorization", `Bearer ${token}`);
        return fetchUtils.fetchJson(url, options);
    } else {
        console.log('Logout');
        authProvider.logout();
    }
    // @ts-ignore
};