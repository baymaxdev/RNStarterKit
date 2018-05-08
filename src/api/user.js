import { url, package_id } from '../constants';

export const getUser = (email) => {
  return fetch(
    url + `user?app_id=${package_id}&email=${email}`,
    {
      method: 'GET'
    }
  )
  .then(res => res.json())
  .then(data => {
    return data;
  })
}