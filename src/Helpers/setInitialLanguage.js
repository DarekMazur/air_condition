export const setInitialLanguage = () => {
  let lang = '';

  window.localStorage.length === 0
    ? navigator.language === 'pl-PL'
      ? (lang = 'PL')
      : (lang = 'EN')
    : (lang = Storage.lang);

  if (window.localStorage.length === 0) {
    navigator.language === 'pl-PL' ? (lang = 'PL') : (lang = 'EN');
    window.localStorage.setItem('lang', lang);
  }
};
