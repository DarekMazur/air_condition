import { Loader } from '../Components/Loader/Loader';
import { getData } from './getData';
import { getStationData } from './getStationData';
import { renderResuts } from './renderResuts';

const getGeo = () =>
  new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => resolve(position.coords));
  }).then((data) => getDistance(data.latitude, data.longitude));

const calculateDistance = (
  currentLat,
  currentLong,
  stationLat,
  stationLong,
  stationID,
  stationName,
) => {
  const radCurrentLat = (Math.PI * currentLat) / 180;
  const radStationLat = (Math.PI * stationLat) / 180;
  const theta = currentLong - stationLong;
  const radTheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radCurrentLat) * Math.sin(radStationLat) +
    Math.cos(radCurrentLat) * Math.cos(radStationLat) * Math.cos(radTheta);
  dist > 1 ? (dist = 1) : dist;
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;

  dist = {
    id: stationID,
    name: stationName,
    distance: dist,
  };

  return dist;
};

const distanceToStations = [];

const getDistance = async (currentLat, currentLong) => {
  const stations = await getData;
  stations.forEach((stationDistance) =>
    distanceToStations.push(
      calculateDistance(
        currentLat,
        currentLong,
        stationDistance.gegrLat,
        stationDistance.gegrLon,
        stationDistance.id,
        stationDistance.stationName,
      ),
    ),
  );
  return distanceToStations;
};

export const getClosestStation = async () => {
  Loader();
  const deviceDistanceToStations = await getGeo();
  deviceDistanceToStations.sort((a, b) => a.distance - b.distance);
  document.querySelector('.quality__wrapper').innerHTML = '';
  getStationData(deviceDistanceToStations[0].id).then((data) => {
    renderResuts(data, deviceDistanceToStations[0].name);
  });
  document.querySelector('.reset__button').classList.remove('reset__button--inactive');
};
