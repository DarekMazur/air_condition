import { renderElement } from '../../Helpers/renderElement';
import { getClosestStation } from '../../Helpers/getClosestStation';
import { Button } from '../Button/Button';
import { resetSelect } from '../../Helpers/resetSelect';
import { Form } from '../Form/Form';

const Main = () => {
  let lang = '';

  window.localStorage.length === 0
    ? navigator.language === 'pl-PL'
      ? (lang = 'PL')
      : (lang = 'EN')
    : (lang = Storage.lang);

  if (window.localStorage.length === 0) {
    navigator.language === 'pl-PL' ? (lang = 'PL') : (lang = 'EN');
    window.localStorage.setItem('lang', lang);
  }

  console.log(window.localStorage);

  renderElement('main', ['main__wrapper'], document.querySelector('body'));
  renderElement('div', ['geolocation__wrapper'], document.querySelector('.main__wrapper'));

  Button('geo');
  Form();
  renderElement('section', ['quality__wrapper'], document.querySelector('.main__wrapper'));
  Button('reset');

  document.querySelector('.geolocation__button').addEventListener('click', getClosestStation);
  document.querySelector('.reset__button').addEventListener('click', () => resetSelect());
};

export default Main;
