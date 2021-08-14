import { renderElement } from '../../Helpers/renderElement';
import { setInitialLanguage } from '../../Helpers/setInitialLanguage';
import { setLanguage } from '../../Helpers/setLanguage';
import { language } from '../../utils/constans';
import Language from '../Language/Language';
import { Logo } from '../Logo/Logo';

import './Header.style.scss';

const Header = () => {
  setInitialLanguage();

  renderElement('header', ['header'], document.querySelector('body'));
  Logo();
  renderElement(
    'h1',
    ['header__title'],
    document.querySelector('.header'),
    language[window.localStorage.lang].appTitle,
  );

  Language();

  document
    .querySelector('.language__menuSwitch')
    .addEventListener('click', () =>
      document.querySelector('.language__list').classList.toggle('language__list--active'),
    );

  document.querySelectorAll('.language__ListItem').forEach((languageButton) => {
    if (languageButton.innerHTML.toUpperCase() === window.localStorage.lang) {
      languageButton.classList.add('language__ListItem--active');
    }
    languageButton.addEventListener('click', (e) => setLanguage(e));
  });
};

export default Header;
