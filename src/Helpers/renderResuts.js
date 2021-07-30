import { hasError } from './hasError';
import { renderElement } from './renderElement';

import { language } from '../utils/constans';
import { getIcon } from './getIcon';

export const renderResuts = (stationData, stationName) => {
  try {
    const airQualityParams = [
      {
        id: 'so2',
        index: stationData.so2IndexLevel?.id,
        status: stationData.so2IndexLevel?.indexLevelName,
        name: language[window.localStorage.lang].so2,
      },
      {
        id: 'no2',
        index: stationData.no2IndexLevel?.id,
        status: stationData.no2IndexLevel?.indexLevelName,
        name: language[window.localStorage.lang].no2,
      },
      {
        id: 'o3',
        index: stationData.o3IndexLevel?.id,
        status: stationData.o3IndexLevel?.indexLevelName,
        name: language[window.localStorage.lang].o3,
      },
      {
        id: 'pm25',
        index: stationData.pm25IndexLevel?.id,
        status: stationData.pm25IndexLevel?.indexLevelName,
        name: language[window.localStorage.lang].pm25,
      },
      {
        id: 'pm10',
        index: stationData.pm10IndexLevel?.id,
        status: stationData.pm10IndexLevel?.indexLevelName,
        name: language[window.localStorage.lang].pm10,
      },
    ];

    renderElement(
      'h2',
      ['quality__location'],
      document.querySelector('.quality__wrapper'),
      `${language[window.localStorage.lang].sationHeader} ${stationName}`,
    );

    renderElement(
      'h3',
      ['quality__date'],
      document.querySelector('.quality__wrapper'),
      `${language[window.localStorage.lang].stationTime}: ${stationData.stSourceDataDate}`,
    );

    airQualityParams.map((param) => {
      renderElement(
        'div',
        ['sensor__wrapper', param.id],
        document.querySelector('.quality__wrapper'),
      );
      renderElement(
        'div',
        ['sensor__header', `${param.id}__header`],
        document.querySelector(`.${param.id}`),
      );
      renderElement(
        'img',
        ['sensor__image', `${param.id}__sensorIcon`],
        document.querySelector(`.${param.id}__header`),
        getIcon(param.id),
      );
      renderElement(
        'h3',
        ['sensor__name', `${param.id}__title`],
        document.querySelector(`.${param.id}__header`),
        param.name,
      );
      renderElement(
        'img',
        ['sensor__icon', `${param.id}__icon`],
        document.querySelector(`.${param.id}__header`),
        getIcon(param.index === undefined ? 'noData' : param.index.toString()),
      );
      renderElement(
        'p',
        ['sensor__status', `${param.id}__status`],
        document.querySelector(`.${param.id}`),
        `Status: ${param.status === undefined ? language[window.localStorage.lang].noData : ''}`,
      );
      if (param.index !== undefined) {
        renderElement(
          'span',
          ['sensor__status--value', `sensor__status--value${param.index}`],
          document.querySelector(`.${param.id}__status`),
          language[window.localStorage.lang][`status${param.index}`],
        );
      }
    });
  } catch (err) {
    hasError();
    console.log(err);
  }
};
