import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';
import { fetchWrapper } from '@/helpers/fetch-wrapper';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem('user') ?? '[]'),
);

export const DataService = {
  getAll,
  getById,
  update,
  delete: _delete,
};

function getAll() {
  return fetchWrapper.get(baseUrl);
}

function getById(id: any) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update(id: any, params: any) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params).then((x: any) => {
    // update stored user if the logged in user updated their own record
    if (id === userSubject.value.id) {
      // update local storage
      const user = { ...userSubject.value, ...params };
      localStorage.setItem('user', JSON.stringify(user));

      // publish updated user to subscribers
      userSubject.next(user);
    }
    return x;
  });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id: any) {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
}
