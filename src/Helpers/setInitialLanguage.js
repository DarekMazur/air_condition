export const setInitialLanguage = () => {
  let lang = '';

  if (window.localStorage.length === 0) {
    navigator.language === 'pl-PL' ? (lang = 'PL') : (lang = 'EN');
    window.localStorage.setItem('lang', lang);
  }
};
