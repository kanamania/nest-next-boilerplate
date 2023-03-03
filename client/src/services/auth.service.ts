import { BehaviorSubject } from 'rxjs';
import Router from 'next/router';
import { fetchWrapper } from '@/helpers/fetch-wrapper';
import { Configs } from '../../configs';

const baseUrl = `${Configs.apiUrl}`;
const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem('auth') ?? '[]'),
);

export const AuthService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  register,
};

function login(email: any, password: any) {
  return fetchWrapper
    .post(`${baseUrl}/auth/login`, { email, password })
    .then((user: any) => {
      userSubject.next(user);
      localStorage.setItem('auth', JSON.stringify(user));
      return user;
    });
}

function logout() {
  localStorage.removeItem('auth');
  userSubject.next(null);
  Router.push('/login');
}

function register(user: any) {
  return fetchWrapper.post(`${baseUrl}/auth/register`, user);
}
