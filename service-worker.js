var cacheName ='petstore-v1'
var cacheFiles = [
    'index.html',
    'product.js',
    'petstore.webmanifest',
    'Images/catfood2.jpg',
];

self.addEventListener('install',(e) => {
  console.log('[Service Worker] Install');
    e.waitUntil(
    caches.open(cacheName).then((Cache) => {
        console.log('[Service Worker] Caching all the files');
        return Cache.addAll(cacheFiles);

    }))

})

self.addEventListener('fetch',function(e){
    e.respondWith(

        caches.match(e.request).then(function(r){
            console.log('[Service Worker] Fetching resource:'
            + e.request.url);

            return r

        })
    );
})