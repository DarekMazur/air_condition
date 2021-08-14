import { renderElement } from '../../Helpers/renderElement';
import { language } from '../../utils/constans';

import './Language.style.scss';

const Language = () => {
  renderElement('div', ['language__wrapper'], document.querySelector('.header'));
  renderElement('button', ['language__menuSwitch'], document.querySelector('.language__wrapper'));

  renderElement('ul', ['language__list'], document.querySelector('.language__wrapper'));

  Object.entries(language).forEach((lang) =>
    renderElement(
      'li',
      ['language__ListItem', `language__${lang[1].langShortName}`],
      document.querySelector('.language__list'),
      lang[1].langShortName,
    ),
  );
};

export default Language;
