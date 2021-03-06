import { renderSelect } from './renderSelect';

export const handleSelect = (currentSelector, children, value) => {
  return (e) => {
    document.querySelector('.reset__button').classList.remove('reset__button--inactive');
    document.querySelector('.reset__button').disabled = false;
    e.target.value !== `Choose your ${currentSelector}:` ? (value = e.target.value) : null;
    document.querySelector(`.select__${children}`).innerHTML = '';
    renderSelect(children, currentSelector, value);
  };
};
