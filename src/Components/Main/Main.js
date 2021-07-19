import { renderElement } from '../../utils/helpers';
import { getStationsList } from '../../utils/helpers';

const Main = () => {
  // const mainWrapper = document.createElement('main');
  // const mainForm = document.createElement('form');

  // mainWrapper.classList.add('main__wrapper');

  // document.querySelector('body').appendChild(mainWrapper);
  // mainWrapper.appendChild(mainForm);
  renderElement('main', 'main__wrapper', document.querySelector('body'));
  renderElement('form', 'form__wrapper', document.querySelector('.main__wrapper'));
  renderElement('select', 'form__select', document.querySelector('.form__wrapper'));

  // renderElement('option', 'form__option', document.querySelector('.form__select'))
  // getStationsList().then((response) =>
  //   response.map((station) => {
  //     renderElement('option', null, document.querySelector('.form__select'), station);
  //   }),
  // );
  console.log(getStationsList());
};

export default Main;
