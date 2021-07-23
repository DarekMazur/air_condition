import { renderElement } from './renderElement';

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

  renderElement(
    'h3',
    ['quality__location'],
    document.querySelector('.quality__wrapper'),
    `Data pomiaru: ${stationData.stSourceDataDate}`,
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
