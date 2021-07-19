import { constans } from './constans';

const API_URL = `https://thingproxy.freeboard.io/fetch/${constans.API_URL}`;

const getData = fetch(API_URL)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => console.log(error));

//TODO: get...List method: one method for all steps, add 'parent' prop;

export const getProvincesList = async () => {
  const allProvincesData = await getData;
  const provinces = [];
  allProvincesData.forEach((province) =>
    !provinces.includes(province.city.commune.provinceName)
      ? provinces.push(province.city.commune.provinceName)
      : null,
  );
  return provinces;
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
  //TODO: clasName as Array; if length = 0 then skip classList.add; if length = 1 then classList.add; if length > 1 then forEach classList.add
  const newElement = document.createElement(tag);
  if (className.length > 0) {
    className.forEach((singleClass) => newElement.classList.add(singleClass));
  }

  if (content) {
    newElement.innerHTML = content;
  }
  target.appendChild(newElement);
};
