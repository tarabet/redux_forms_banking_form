// fetch polyfill for IE support
import 'whatwg-fetch';

import { serverParams } from '../config/config';

export const asyncValidate = values => {
  return new Promise((resolve, reject) => {
    fetch(serverParams.url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ iban: values.IBAN })
    })
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        if (!data.valid) {
          throw Error('Incorrect IBAN number');
        }

        resolve();
      })
      .catch(err => {
        reject({ IBAN: err.message });
      });
  });
};
