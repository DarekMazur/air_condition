import './Footer.style.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerWrapper = document.createElement('footer');
  footerWrapper.classList.add('footer');
  footerWrapper.innerHTML = `
    <p>${currentYear} &copy DarekMazur</p>
  `;

  document.querySelector('body').appendChild(footerWrapper);
};

export default Footer;
