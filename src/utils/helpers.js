import { constans } from './constans';

const proxy = 'https://thingproxy.freeboard.io/fetch/';
const STATIONS_API_URL = `${proxy}${constans.STATIONS_API_URL}`;
const API_URL = `${proxy}${constans.API_URL}`;

const getStationSensores = (station) => {
  const stationApi = `${STATIONS_API_URL}${station}`;
  const data = fetch(stationApi)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  return data;
};

const getData = fetch(API_URL)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => console.log(error));

export const getStationData = async (station) => {
  const stationDataJson = await getStationSensores(station);
  return stationDataJson;
};

export const getApiData = async (children, parent, parentName) => {
  const allData = await getData;

  const data = [];
  allData.forEach((element) => {
    const stepElement = (input) => {
      switch (input) {
        case 'province':
          return element.city.commune.provinceName;
        case 'city':
          return element.city.name;
        case 'station':
          return element.stationName;
        default:
          return element.id;
      }
    };

    if (parent) {
      stepElement(parent) === parentName && !data.includes(stepElement(children))
        ? data.push(stepElement(children))
        : null;
    } else {
      !data.includes(stepElement(children)) ? data.push(stepElement(children)) : null;
    }
  });
  return data;
};

export const renderElement = (tag, className, target, content) => {
  const newElement = document.createElement(tag);
  if (className.length > 0) {
    className.forEach((singleClass) => newElement.classList.add(singleClass));
  }

  if (content) {
    newElement.innerHTML = content;
  }
  target.appendChild(newElement);
};

export const renderResuts = (stationData, stationName) => {
  const airQualityParams = [
    {
      id: 'so2',
      index: stationData.so2IndexLevel?.id,
      status: stationData.so2IndexLevel?.indexLevelName,
      name: 'Dwutlenek siarki',
    },
    {
      id: 'no2',
      index: stationData.no2IndexLevel?.id,
      status: stationData.no2IndexLevel?.indexLevelName,
      name: 'Dwutlenek azotu',
    },
    {
      id: 'o3',
      index: stationData.o3IndexLevel?.id,
      status: stationData.o3IndexLevel?.indexLevelName,
      name: 'Ozon',
    },
    {
      id: 'pm25',
      index: stationData.pm25IndexLevel?.id,
      status: stationData.pm25IndexLevel?.indexLevelName,
      name: 'Areozole atmosferyczne (PM2.5)',
    },
    {
      id: 'pm10',
      index: stationData.pm10IndexLevel?.id,
      status: stationData.pm10IndexLevel?.indexLevelName,
      name: 'Pył zawieszony (PM10)',
    },
  ];
  renderElement(
    'h2',
    ['quality__location'],
    document.querySelector('.quality__wrapper'),
    `Stacja pomiarowa ${stationName}`,
  );

  airQualityParams.map((param) => {
    renderElement(
      'div',
      ['quality__parameter', param.id],
      document.querySelector('.quality__wrapper'),
    );
    renderElement(
      'h3',
      [`.${param.id}__title`],
      document.querySelector(`.${param.id}`),
      param.name,
    );
    renderElement(
      'p',
      [`.${param.id}__status`],
      document.querySelector(`.${param.id}`),
      `Status: ${param.status === undefined ? 'Brak danych' : param.status}`,
    );
  });
};

export const getGeo = new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition((position) => resolve(position.coords));
}).then((data) => data);
