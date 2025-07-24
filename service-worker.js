const CACHE_NAME = 'image-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    // ここにあなたが使っている全ての画像ファイルとアイコンのパスを追加します
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/icon-192x192.png',
    '/images/icon-512x512.png'
];

// インストールイベント: キャッシュにファイルを保存
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// フェッチイベント: リソースをキャッシュから提供、なければネットワークから取得
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // キャッシュにあればキャッシュから返す
                if (response) {
                    return response;
                }
                // キャッシュになければネットワークから取得してキャッシュに保存
                return fetch(event.request).then((response) => {
                    // 有効なレスポンスか確認
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    // レスポンスをクローンしてキャッシュに保存
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                });
            })
    );
});

// アクティベートイベント: 古いキャッシュの削除
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        // ホワイトリストにないキャッシュを削除
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});