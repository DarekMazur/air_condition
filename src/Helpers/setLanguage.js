export default setLanguage = (e) => {
  if (e.target.innerHTML.toUpperCase() !== window.localStorage.lang) {
    window.localStorage.setItem('lang', e.target.innerHTML.toUpperCase());
    window.location.reload();
  }
};
