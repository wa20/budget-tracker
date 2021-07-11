const DATA_CACHE = "static-cache";
const RUNTIME = "data-cache";

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/index.js',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

//install event handler
self.addEventListener('install', event => {
 
//pre cache all static assets   
event.waitUntil(
    caches
    .open(DATA_CACHE)
    .then((cache) => cache
    .addAll(FILES_TO_CACHE))
    // .then(self.skipWaiting())
);

//activate this service worker once it has finished installing.
console.log('install')
self.skipWaiting();

});

//activate
self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches.keys().then(keyList => {
        return Promise.all(
          keyList.map(key => {
            if (key !== DATA_CACHE && key !== RUNTIME) {
              console.log("Removing old cache data", key);
              return caches.delete(key);
            }
          })
        );
      })
    );
  
    self.clients.claim();
  });

  //fetch
  self.addEventListener("fetch", (event) => {
    if (event.request.url.includes("/api/")) {
      event.respondWith(
        caches.open(RUNTIME).then(cache => {
          return fetch(event.request)
            .then(response => {
              // If the response was good, clone it and store it in the cache.
              if (response.status === 200) {
                cache.put(event.request.url, response.clone());
              }
  
              return response;
            })
            .catch(err => {
              // Network request failed, try to get it from the cache.
              return cache.match(event.request);
            });
        }).catch(err => console.log(err))
      );
  
      return;
    }
  
    event.respondWith(
      caches.open(DATA_CACHE).then(cache => {
        return cache.match(event.request).then(response => {
          return response || fetch(event.request);
        });
      })
    );
  });