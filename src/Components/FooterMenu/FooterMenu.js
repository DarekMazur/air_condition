import { renderElement } from '../../Helpers/renderElement';
import githubIcon from '../../assets/github.svg';

import './FooterMenu.style.scss';
import { links } from '../../utils/constans';

const FooterMenu = () => {
  renderElement('dvi', ['footer__menu'], document.querySelector('.footer'));
  renderElement('a', ['footer__link'], document.querySelector('.footer__menu'), links.GITHUB);
  renderElement(
    'img',
    ['footer__icon'],
    document.querySelector('.footer__link'),
    githubIcon,
    'Github logo',
  );
};

export default FooterMenu;
