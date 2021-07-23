import { getApiData } from './getApiData';
import { renderElement } from './renderElement';

export const renderSelect = (childern, parent, value) => {
  renderElement(
    'option',
    [],
    document.querySelector(`.select__${childern}`),
    `Choose ${childern === 'city' ? 'your city' : childern}:`,
  );
  getApiData(childern, parent, value).then((response) =>
    response.map((parentElement) => {
      renderElement('option', [], document.querySelector(`.select__${childern}`), parentElement);
    }),
  );
};
