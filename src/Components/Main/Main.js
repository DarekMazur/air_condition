import { getCitiesByProvince, renderElement } from '../../utils/helpers';
import { getProvincesList } from '../../utils/helpers';

const Main = () => {
  // const mainWrapper = document.createElement('main');
  // const mainForm = document.createElement('form');

  // mainWrapper.classList.add('main__wrapper');

  // document.querySelector('body').appendChild(mainWrapper);
  // mainWrapper.appendChild(mainForm);
  renderElement('main', ['main__wrapper'], document.querySelector('body'));
  renderElement('form', ['form__wrapper'], document.querySelector('.main__wrapper'));
  renderElement(
    'select',
    ['form__select', 'selcet__province'],
    document.querySelector('.form__wrapper'),
  );

  renderElement('option', [], document.querySelector('.selcet__province'), 'Choose your province:');
  getProvincesList().then((response) =>
    response.map((province) => {
      renderElement('option', [], document.querySelector('.selcet__province'), province);
    }),
  );

  renderElement(
    'select',
    ['form__select', 'selcet__city'],
    document.querySelector('.form__wrapper'),
  );
  renderElement('option', [], document.querySelector('.selcet__city'), 'Choose your city:');
  getCitiesByProvince('ŚWIĘTOKRZYSKIE').then((response) =>
    response.map((city) => {
      renderElement('option', [], document.querySelector('.selcet__city'), city);
    }),
  );

  // console.log(getCitiesByProvince('ŚWIĘTOKRZYSKIE'));
};

export default Main;
