import { constans } from '../utils/constans';

const STATIONS_API_URL = `${constans.STATIONS_API_URL}`;

export const getStationSensores = (station) => {
  const stationApi = `${STATIONS_API_URL}${station}`;
  const data = fetch(stationApi)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  return data;
};
