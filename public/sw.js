importScripts('/cache-polyfill.js');


var CACHE_NAME = 'Indecision';
var urlsToCache = [
    '/',
    '/index.html',
    '/bundle.js',
    '/manifest.JSON',
    '/favicon.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});