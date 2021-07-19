import { constans } from './constans';

const API_URL = constans.API_URL;

const getData = fetch(API_URL)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => console.log(error));

export const getStationsList = async () => {
  const allStationsData = await getData;
  const stations = allStationsData;
  console.log(stations);
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
