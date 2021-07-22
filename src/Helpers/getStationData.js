import { getStationSensores } from './getStationSensores';

export const getStationData = async (station) => {
  const stationDataJson = await getStationSensores(station);
  return stationDataJson;
};
