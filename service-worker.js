const CACHE_NAME = 'tsunshitana-pwa-cache-v1'; // キャッシュ名をより具体的に変更しました
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    // 新しい画像ファイルのパスを追加
    '/images/left.jpeg',   // ★ 追加
    '/images/front.jpeg',  // ★ 追加
    // PWAアイコンのパスもここに含まれていることを確認
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
    const cacheWhitelist = [CACHE_NAME]; // 新しいキャッシュ名に変更
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        // ホワイトリストにない（古いバージョンの）キャッシュを削除
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});