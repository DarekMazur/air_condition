import { getApiData } from '../../Helpers/getApiData';
import { getStationData } from '../../Helpers/getStationData';
import { renderElement } from '../../Helpers/renderElement';
import { renderResuts } from '../../Helpers/renderResuts';
import { getClosestStation } from '../../Helpers/getClosestStation';
import { renderSelect } from '../../Helpers/renderSelect';
import { handleSelect } from '../../Helpers/handleSelect';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { resetSelect } from '../../Helpers/resetSelect';

const Main = () => {
  const selectValues = {
    province: '',
    city: '',
    station: '',
  };

  renderElement('main', ['main__wrapper'], document.querySelector('body'));
  renderElement('div', ['geolocation__wrapper'], document.querySelector('.main__wrapper'));

  Button('geo');

  renderElement('form', ['form__wrapper'], document.querySelector('.main__wrapper'));
  renderElement(
    'select',
    ['form__select', 'select__province'],
    document.querySelector('.form__wrapper'),
  );

  renderElement('option', [], document.querySelector('.select__province'), 'Choose your province:');
  getApiData('province').then((response) =>
    response.map((province) => {
      renderElement('option', [], document.querySelector('.select__province'), province);
    }),
  );
  renderElement(
    'select',
    ['form__select', 'select__city', 'select__city--inactive'],
    document.querySelector('.form__wrapper'),
  );

  renderElement(
    'select',
    ['form__select', 'select__station', 'select__station--inactive'],
    document.querySelector('.form__wrapper'),
  );

  renderSelect('city', 'province', selectValues.province);
  renderSelect('station', 'city', selectValues.city);

  renderElement('section', ['quality__wrapper'], document.querySelector('.main__wrapper'));

  document.querySelector('.geolocation__button').addEventListener('click', getClosestStation);

  document
    .querySelector('.select__province')
    .addEventListener('change', handleSelect('province', 'city', selectValues.province));

  document
    .querySelector('.select__city')
    .addEventListener('change', handleSelect('city', 'station', selectValues.city));

  document.querySelector('.select__station').addEventListener('change', (e) => {
    e.target.value !== 'Choose station:'
      ? ((selectValues.station = e.target.value),
        Loader(),
        getApiData('sensor', 'station', selectValues.station)
          .then((resolve) => getStationData(resolve))
          .then((data) => {
            (document.querySelector('.quality__wrapper').innerHTML = ''),
              renderResuts(data, selectValues.station);
          }))
      : null;
  });

  Button('reset');
  document.querySelector('.reset__button').addEventListener('click', () => resetSelect());
};

export default Main;
