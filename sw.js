// Service Worker Code
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Ye code internet se file laata hai, nahi milne par purani file dikhata hai
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
