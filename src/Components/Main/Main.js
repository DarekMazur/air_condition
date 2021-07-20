import {
  getApiData,
  renderElement,
  getCitiesByProvince,
  getStationData,
} from '../../utils/helpers';

const Main = () => {
  const selectValues = {
    province: '',
    city: '',
    station: '',
  };

  const renderCities = () => {
    renderElement('option', [], document.querySelector('.selcet__city'), 'Choose your city:');
    getApiData('city', 'province', selectValues.province).then((response) =>
      response.map((province) => {
        renderElement('option', [], document.querySelector('.selcet__city'), province);
      }),
    );
  };

  const renderStations = () => {
    renderElement('option', [], document.querySelector('.selcet__station'), 'Choose station:');
    getApiData('station', 'city', selectValues.city).then((response) =>
      response.map((province) => {
        renderElement('option', [], document.querySelector('.selcet__station'), province);
      }),
    );
  };

  renderElement('main', ['main__wrapper'], document.querySelector('body'));
  renderElement('form', ['form__wrapper'], document.querySelector('.main__wrapper'));
  renderElement(
    'select',
    ['form__select', 'selcet__province'],
    document.querySelector('.form__wrapper'),
  );

  renderElement('option', [], document.querySelector('.selcet__province'), 'Choose your province:');
  getApiData('province').then((response) =>
    response.map((province) => {
      renderElement('option', [], document.querySelector('.selcet__province'), province);
    }),
  );
  renderElement(
    'select',
    ['form__select', 'selcet__city'],
    document.querySelector('.form__wrapper'),
  );
  renderCities();

  document
    .querySelector('.selcet__province')
    .addEventListener('change', (e) => console.log(e.target.value));

  renderElement(
    'select',
    ['form__select', 'selcet__station'],
    document.querySelector('.form__wrapper'),
  );

  renderStations();

  const selectProvince = document.querySelector('.selcet__province');
  const selectCity = document.querySelector('.selcet__city');
  const selectStation = document.querySelector('.selcet__station');

  selectProvince.addEventListener('change', (e) => {
    e.target.value !== 'Choose your province:' ? (selectValues.province = e.target.value) : null;
    selectCity.innerHTML = '';
    renderCities();
  });

  selectCity.addEventListener('change', (e) => {
    e.target.value !== 'Choose your city:' ? (selectValues.city = e.target.value) : null;
    selectStation.innerHTML = '';
    renderStations();
  });
};

getStationData('52');

export default Main;
