import { renderSelect } from './renderSelect';

export const handleSelect = (currentSelector, children, value) => {
  return (e) => {
    e.target.value !== `Choose your ${currentSelector}:` ? (value = e.target.value) : null;
    document.querySelector(`.select__${children}`).innerHTML = '';
    renderSelect(children, currentSelector, value);
  };
};
