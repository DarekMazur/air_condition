import {
  getApiData,
  getStationData,
  renderElement,
  renderResuts,
  getClosestStation,
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

  renderElement(
    'select',
    ['form__select', 'selcet__station'],
    document.querySelector('.form__wrapper'),
  );

  renderStations();

  renderElement('section', ['quality__wrapper'], document.querySelector('.main__wrapper'));

  const selectProvince = document.querySelector('.selcet__province');
  const selectCity = document.querySelector('.selcet__city');
  const selectStation = document.querySelector('.selcet__station');
  const geolocationButton = document.querySelector('.geolocation__button');

  geolocationButton.addEventListener('click', getClosestStation);

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

  selectStation.addEventListener('change', (e) => {
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
