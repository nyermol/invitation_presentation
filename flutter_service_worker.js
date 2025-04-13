'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2ae750f2d12fce843fe8248f82ec409e",
"index.html": "e59996f836f24f88a609c8454b607bcf",
"/": "e59996f836f24f88a609c8454b607bcf",
"main.dart.js": "4d27e4de0095bb5b7586a455777b4b41",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "994b4036e87ad0abafefefdb27049e32",
"assets/AssetManifest.json": "3a78798d4ffca09df6c6f197fdfa4bc0",
"assets/NOTICES": "9e22c8663394c7c4a33946d264cade90",
"assets/FontManifest.json": "1b0a6b6da691dbcc4dbfd950f40e7689",
"assets/AssetManifest.bin.json": "1df793a2f49f9ce6dfb58701cfbc9d6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c965412e1e10f69c7fe02c3dfb4ae156",
"assets/fonts/MaterialIcons-Regular.otf": "01e13861f4d51379758051d4cd322690",
"assets/assets/svg/kids.svg": "61e3769c4e15e8e5b07279e3925dbca0",
"assets/assets/svg/telegram-logo.svg": "a8f15f3155ed30b325e2c75925c0c339",
"assets/assets/svg/flowers.svg": "f7cd08ca8b8938de0a9dfa1028b052b3",
"assets/assets/svg/cake.svg": "6603b3f313f632b82d115b312035fa1f",
"assets/assets/svg/dance.svg": "26fdf84115a2049e7ec18872f2c699c6",
"assets/assets/svg/whatsapp-logo.svg": "77d4436fd0870eda2fdbde6e7606d551",
"assets/assets/svg/bus.svg": "acc84fe5a6a1476a1c61ed678c80d7d1",
"assets/assets/svg/cash.svg": "8ce26b497e9555f91d0142f229c213e6",
"assets/assets/svg/rings.svg": "5f820c3d967261c66884c741225c649b",
"assets/assets/svg/kiss.svg": "e7675abadb778449ce8893dd7ff17d0e",
"assets/assets/svg/heart.svg": "3bc379404e7ba6e79e55272c8348badd",
"assets/assets/images/grid_image_presentation_3.jpeg": "817759f97d9f8e8c91c4d98dee80f1ef",
"assets/assets/images/grid_image_presentation_2.jpeg": "4e415acd16498bbfc7a52be8a30af271",
"assets/assets/images/white_wall.jpg": "5f5fde041cba9a931ff6f4ca9e31e08b",
"assets/assets/images/main_image_presentation.png": "c19ffc8407c80a041a41ad9afe78c178",
"assets/assets/images/total_black_example.jpg": "039f64a9fb26eb36743ecd9e64d4b839",
"assets/assets/images/grid_image_presentation_4.jpeg": "35f935fecfc1b131e01f1a852bf333e3",
"assets/assets/images/grid_image_presentation_1.jpg": "034ea0eb28c65670e17d46dfd8808e3f",
"assets/assets/audio/song.mp3": "2aeaaf6f9321fdb678cc2e5024e99a76",
"assets/assets/fonts/Caravan.otf": "10699e4f2f938906b96d864c1e4e5526",
"assets/assets/fonts/Anticva.ttf": "dc9a5fa8e3d9dc63573fb478e7540835",
"assets/assets/fonts/AmericanRetro.ttf": "4e78438c62882af94de15230c1ac3e4f",
"assets/assets/fonts/Agnewhandbookc.otf": "975dc3435f83aed193481400febb7e29",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
