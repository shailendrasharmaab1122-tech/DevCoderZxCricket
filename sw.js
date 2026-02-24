const version = 'v2'; // Iska version badalne se cache saaf ho jata hai

self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('SW Installed');
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
  console.log('SW Activated');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
