import { renderElement } from '../../Helpers/renderElement';
import setLanguage from '../../Helpers/setLanguage';
import { language } from '../../utils/constans';

import * as HeaderStyle from './Header.style.scss';

const Header = () => {
  renderElement('header', ['header'], document.querySelector('body'));
  renderElement('h1', ['header__title'], document.querySelector('.header'), 'Lorem Ipsum');
  renderElement('div', ['header__languageWrapper'], document.querySelector('.header'));

  Object.entries(language).forEach((lang) =>
    renderElement(
      'button',
      ['language__button', `language__${lang[1].langShortName}`],
      document.querySelector('.header__languageWrapper'),
      lang[1].langShortName,
    ),
  );

  document.querySelectorAll('.language__button').forEach((languageButton) => {
    if (languageButton.innerHTML.toUpperCase() === window.localStorage.lang) {
      languageButton.classList.add('language__button--active');
    }
    languageButton.addEventListener('click', (e) => setLanguage(e));
  });
};

export default Header;
