import { hasError } from './hasError';
import { renderElement } from './renderElement';

import { language } from '../utils/constans';
import { StatusIcon } from '../Components/StatusIcon/StatusIcon';

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
      ['quality__location'],
      document.querySelector('.quality__wrapper'),
      `${language[window.localStorage.lang].stationTime}: ${stationData.stSourceDataDate}`,
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
        `Status: ${
          param.status === undefined ? language[window.localStorage.lang].noData : param.status
        }`,
      );
      renderElement(
        'p',
        [`.${param.id}__icon`],
        document.querySelector(`.${param.id}`),
        StatusIcon(param.index === undefined ? 'noData' : param.index.toString()),
      );
    });
  } catch (err) {
    hasError();
    console.log(err);
  }
};
