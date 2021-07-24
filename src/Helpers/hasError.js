import { renderElement } from './renderElement';

export const hasError = (message) => {
  renderElement('section', ['quality__wrapper'], document.querySelector('.main__wrapper'));
  document.querySelector('.quality__wrapper').innerHTML = message
    ? message
    : 'Something goes wrong... please try again';
};
