import { AuthProvider } from "@pankod/refine-core";
import {TResponse} from './utils/TResponse';
import axios from "axios";

const axiosInstance = axios.create();

const API_URL = "http://localhost:9000";

export const authProvider: AuthProvider = {
  login: async ({email, password}) => {
    const data = { email, password };
    // Suppose we actually send a request to the back end here.
    await fetch(API_URL + '/auth/login', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
    }).then((response) => response.json()).then((response: TResponse) => {
      if(response.status=='success'){
        axiosInstance.defaults.headers.common = {
          Authorization: `Bearer ${response.access_token}`,
        };
        localStorage.setItem('auth', JSON.stringify(response))
        return Promise.resolve();
      }
      return Promise.reject();
    });
  },
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  checkError: (error) => {
    if (error && error.statusCode === 401) {
      return Promise.reject();
    }

    return Promise.resolve();
  },
  checkAuth: (ctx) => {
    const auth = JSON.parse(localStorage.getItem('auth') ?? '');
    return auth.access_token ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return Promise.resolve(parsedUser.roles);
    }
    return Promise.reject();
  },
  getUserIdentity: () => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return Promise.resolve(parsedUser.first_name+' '+parsedUser.last_name);
    }
    return Promise.reject();
  },
};
