const CACHE_NAME = 'portfolio-v2-optimized';

// Only cache the root path and index.html for navigation
// Assets are hashed by Vite and cached dynamically at runtime
const STATIC_RESOURCES = [
  '/',
  '/index.html'
];

// Add stale-while-revalidate strategy for better performance
const RUNTIME_CACHE = 'runtime-cache-v2';

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_RESOURCES);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event with stale-while-revalidate strategy
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (event.request.destination === 'image') {
    // Image caching strategy: cache first, then network
    event.respondWith(handleImageRequest(event.request));
  } else if (event.request.mode === 'navigate') {
    // Navigation requests: network first, fallback to cache
    event.respondWith(handleNavigationRequest(event.request));
  } else {
    // Other resources: stale-while-revalidate
    event.respondWith(handleResourceRequest(event.request));
  }
});

// Image caching strategy
async function handleImageRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return cached; // Return cached version if available
  }
}

// Navigation request handler
async function handleNavigationRequest(request) {
  try {
    const response = await fetch(request);
    return response;
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    return await cache.match('/') || new Response('Offline');
  }
}

// Resource request handler with stale-while-revalidate
async function handleResourceRequest(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  
  // Start fetch in background
  const fetchPromise = fetch(request).then(response => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);
  
  // Return cached version immediately if available
  return cached || await fetchPromise;
}