import { getApiData } from './getApiData';
import { hasError } from './hasError';
import { renderElement } from './renderElement';

export const renderSelect = (childern, parent, value) => {
  renderElement(
    'option',
    [],
    document.querySelector(`.select__${childern}`),
    `Choose ${childern === 'city' ? 'your city' : childern}:`,
  );

  getApiData(childern, parent, value).then((response) => {
    try {
      response.map((parentElement) => {
        renderElement('option', [], document.querySelector(`.select__${childern}`), parentElement);
      });
    } catch {
      hasError();
    }
  });
};
