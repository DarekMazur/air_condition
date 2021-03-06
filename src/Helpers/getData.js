import { constans } from '../utils/constans';
import { hasError } from './hasError';

// const API_URL = `${constans.PROXY}${constans.API_URL}`;
const API_URL = `${constans.API_URL}`;

export const getData = fetch(API_URL)
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => {
    hasError();
    console.log(err);
  });
