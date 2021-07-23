import { renderElement } from './renderElement';

export const hasError = () => {
  renderElement('section', ['quality__wrapper'], document.querySelector('.main__wrapper'));
  document.querySelector('.quality__wrapper').innerHTML =
    'Something goes wrong... please try again';
};
