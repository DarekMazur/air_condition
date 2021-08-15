const CACHE_NAME = 'smoggyfoggy-static';
const urlsToCache = [
  '/',
  '/app.css',
  '/app.js',
  '/images/en.svg',
  '/images/pl.svg',
  '/images/ru.svg',
  '/images/github.svg',
  '/images/lang.svg',
  '/images/background.jpg',
  'https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Indie+Flower&family=Montserrat&family=Oswald:wght@500&display=swap',
  'https://fonts.gstatic.com/s/cabinsketch/v14/QGY2z_kZZAGCONcK2A4bGOj0I_1Y5tjz.woff2',
  'https://fonts.gstatic.com/s/indieflower/v12/m8JVjfNVeKWVnh3QMuKkFcZVaUuH.woff2',
  'https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2',
  'https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2',
  'https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2',
  'https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2',
  'https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2',
  'https://fonts.gstatic.com/s/oswald/v40/TK3_WkUHHAIjg75cFRf3bXL8LICs18NvsUtiZTaR.woff2',
  'https://fonts.gstatic.com/s/oswald/v40/TK3_WkUHHAIjg75cFRf3bXL8LICs18NvsUJiZTaR.woff2',
  'https://fonts.gstatic.com/s/oswald/v40/TK3_WkUHHAIjg75cFRf3bXL8LICs18NvsUliZTaR.woff2',
  'https://fonts.gstatic.com/s/oswald/v40/TK3_WkUHHAIjg75cFRf3bXL8LICs18NvsUhiZTaR.woff2',
  'https://fonts.gstatic.com/s/oswald/v40/TK3_WkUHHAIjg75cFRf3bXL8LICs18NvsUZiZQ.woff2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
