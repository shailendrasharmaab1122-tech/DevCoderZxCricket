const CACHE_NAME = 'devcoderz-v1';

// Service worker install hone par basic caching (optional)
self.addEventListener('install', (event) => {
    console.log('SW Installed');
});

// Network requests handle karne ke liye (important for PWA)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
