import { constans } from './constans';

const API_URL = `https://thingproxy.freeboard.io/fetch/${constans.API_URL}`;

const getData = fetch(API_URL)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => console.log(error));

export const getStationsList = async () => {
  const allStationsData = await getData;
  const stations = [];
  allStationsData.forEach((station) =>
    !stations.includes(station.city.name) ? stations.push(station.city.name) : null,
  );
  return stations;
};

export const renderElement = (tag, className, target, content) => {
  const newElement = document.createElement(tag);
  newElement.classList.add(className);
  if (content) {
    newElement.innerHTML = content;
  }
  target.appendChild(newElement);
};
