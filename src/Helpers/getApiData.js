import { getData } from './getData';
import { hasError } from './hasError';

export const getApiData = async (children, parent, parentName) => {
  const allData = await getData;

  const data = [];
  try {
    allData.forEach((element) => {
      const stepElement = (input) => {
        switch (input) {
          case 'province':
            return element.city.commune.provinceName;
          case 'city':
            return element.city.name;
          case 'station':
            return element.stationName;
          default:
            return element.id;
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
  } catch (err) {
    hasError();
    console.log(err);
  }

  return data;
};
