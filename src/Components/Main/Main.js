import { getApiData } from '../../Helpers/getApiData';
import { getStationData } from '../../Helpers/getStationData';
import { renderElement } from '../../Helpers/renderElement';
import { renderResuts } from '../../Helpers/renderResuts';
import { getClosestStation } from '../../Helpers/getClosestStation';
import { renderSelect } from '../../Helpers/renderSelect';
import { handleSelect } from '../../Helpers/handleSelect';

//TODO refactor

const Main = () => {
  const selectValues = {
    province: '',
    city: '',
    station: '',
  };

  renderElement('main', ['main__wrapper'], document.querySelector('body'));
  renderElement('div', ['geolocation__wrapper'], document.querySelector('.main__wrapper'));
  renderElement(
    'button',
    ['geolocation__button'],
    document.querySelector('.geolocation__wrapper'),
    'Check your location',
  );
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
  renderSelect('city', 'province', selectValues.province);

  renderElement(
    'select',
    ['form__select', 'select__station', 'select__station--inactive'],
    document.querySelector('.form__wrapper'),
  );

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
        (document.querySelector('.quality__wrapper').innerHTML = ''),
        getApiData('sensor', 'station', selectValues.station)
          .then((resolve) => getStationData(resolve))
          .then((data) => {
            renderResuts(data, selectValues.station);
          }))
      : null;
  });
};

export default Main;
