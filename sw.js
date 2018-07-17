let staticCacheName = 'restaurants-v1';

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(staticCacheName).then(cache => {
            return cache.addAll([
                '/',
                'css/styles.css',
                'data/restaurants.json',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                'img/favicon.png',
                'img/icons/email-icon.png',
                'img/icons/github-icon.png',
                'img/icons/telegram-icon.png',
                'img/icons/udacity-icon.png',
                'img/icons/vk-icon.png',
                'js/dbhelper.js',
                'js/main.js',
                'js/restaurant_info.js',
                'restaurant.html'
            ]);
        })
    );
});


self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
