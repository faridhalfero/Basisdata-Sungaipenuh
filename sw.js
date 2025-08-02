// Versi minimal
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('sawah-cache').then(cache => {
      return cache.addAll(['/']);
    })
  );
});