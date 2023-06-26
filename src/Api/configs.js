export const urls = {
  v1: `https://api.openweathermap.org/data/2.5/`,
};
export const base_url = urls.v1;

export const endpoints = {
  home: {
    home: 'weather',
  },
};
// export const headers={

//   json: `'Content-Type': 'application/json'`
// }
export const apiHeaders = {
  get: 'GET',
  post: 'POST',

  headerjson: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  formdata: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
};
export default {
  endpoints: endpoints,
  base_url: base_url,
};
