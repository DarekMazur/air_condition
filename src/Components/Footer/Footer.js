import { renderElement } from '../../Helpers/renderElement';
import FooterMenu from '../FooterMenu/FooterMenu';
import './Footer.style.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  renderElement('footer', ['footer'], document.querySelector('body'));
  renderElement('p', [], document.querySelector('.footer'), `${currentYear} &copy DarekMazur`);

  FooterMenu();
  // const footerWrapper = document.createElement('footer');
  // footerWrapper.classList.add('footer');

  // footerWrapper.innerHTML = `
  //   ${FooterMenu()}
  //   <p>${currentYear} &copy DarekMazur</p>
  // `;

  // document.querySelector('body').appendChild(footerWrapper);
};

export default Footer;
