import { language } from '../utils/constans';
import { renderElement } from './renderElement';

export const resetSelect = () =>
  document.querySelectorAll('.form__select').forEach((select) => {
    if (!select.classList.contains('select__province')) {
      select.classList.contains('select__city') ? (option = 'city') : (option = 'station');
      select.innerHTML = '';
      renderElement(
        'option',
        [],
        document.querySelector(`.select__${option}`),
        language[window.localStorage.lang][option],
      );
    }
    select.selectedIndex = '0';
    document.querySelector('.quality__wrapper').innerHTML = '';
    document.querySelector('.reset__button').classList.add('reset__button--inactive');
    document.querySelector('.reset__button').disabled = true;
  });
