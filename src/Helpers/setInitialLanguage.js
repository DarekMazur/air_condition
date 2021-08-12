export const setInitialLanguage = () => {
  let lang = '';

  if (window.localStorage.length === 0) {
    navigator.language === 'pl-PL'
      ? (lang = 'PL')
      : navigator.language === 'ru-RU'
      ? (lang = 'RU')
      : (lang = 'EN');
    window.localStorage.setItem('lang', lang);
  }
};
