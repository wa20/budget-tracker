const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/index.js',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

//install
self.addEventListener('install', (event) => {
 
//pre cace image data    
event.waitUntil(
    caches
    .open(DATA_CACHE_NAME)
    .then((cache) => cache
    .add('/api/transactions'))
);

//pre cache all static assets
event.waitUntil(
    caches
    .open(CACHE_NAME)
    .then((cache) => cache
    .addAll(FILES_TO_CACHE))
);

//activate this service worker once it has finished installing.
self.skipWaiting();

});