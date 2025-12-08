const CACHE_NAME = "brandweer-procedures-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js"
];

// Installatie: cache de basisbestanden
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Activatie: oude caches opruimen
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

// Fetch: eerst netwerk, valt anders terug op cache
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
