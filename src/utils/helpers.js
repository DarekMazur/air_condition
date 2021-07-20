import { constans } from './constans';

const proxy = 'https://thingproxy.freeboard.io/fetch/';
const STATIONS_API_URL = `${proxy}${constans.STATIONS_API_URL}`;
const API_URL = `${proxy}${constans.API_URL}`;

const getStationSensores = fetch(STATIONS_API_URL)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => console.log(error));

const getData = fetch(API_URL)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => console.log(error));

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

export const getCitiesByProvince = async (province) => {
  const allCitiesData = await getData;
  const cities = [];
  allCitiesData.forEach((city) =>
    !cities.includes(city.city.name) && city.city.commune.provinceName === province
      ? cities.push(city.city.name)
      : null,
  );
  return cities;
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
