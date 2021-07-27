import { renderElement } from '../../Helpers/renderElement';
import { getClosestStation } from '../../Helpers/getClosestStation';
import { Button } from '../Button/Button';
import { resetSelect } from '../../Helpers/resetSelect';
import { Form } from '../Form/Form';
import { setInitialLanguage } from '../../Helpers/setInitialLanguage';

import * as MainStyle from './Main.style.scss';

const Main = () => {
  setInitialLanguage();

  renderElement('main', ['main__wrapper'], document.querySelector('body'));
  renderElement('div', ['geolocation__wrapper'], document.querySelector('.main__wrapper'));

  Button('geo');
  Form();
  renderElement('section', ['quality__wrapper'], document.querySelector('.main__wrapper'));
  Button('reset');

  document.querySelector('.reset__button').disabled = true;

  document.querySelector('.geolocation__button').addEventListener('click', getClosestStation);
  document.querySelector('.reset__button').addEventListener('click', () => resetSelect());
};

export default Main;
