export const constans = {
  PROXY: 'https://thingproxy.freeboard.io/fetch/',
  //   API_URL: 'https://danepubliczne.imgw.pl/api/data/synop',
  API_URL: 'http://api.gios.gov.pl/pjp-api/rest/station/findAll',
  STATIONS_API_URL: 'http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/',
};

export const language = {
  EN: {
    so2: 'Sulphur dioxide',
    no2: 'Nitrogen dioxide',
    o3: 'Ozone',
    pm25: 'Atmospheric aerosols (PM2.5)',
    pm10: 'Suspended dust (PM10)',
    sationHeader: 'Measuring station',
    stationTime: 'Measuring time',
    noData: 'No data',
  },
  PL: {
    so2: 'Dwutlenek siarki',
    no2: 'Dwutlenek azotu',
    o3: 'Ozon',
    pm25: 'Aerozole atmosferyczne (PM2.5)',
    pm10: 'Pył zawieszony (PM10)',
    sationHeader: 'Stacja pomiarowa',
    stationTime: 'Data pomiaru',
    noData: 'Brak danych',
  },
};
