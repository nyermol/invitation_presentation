'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2ae750f2d12fce843fe8248f82ec409e",
"index.html": "3f5a52c04ab91f4899d77c0292c0f3bf",
"/": "3f5a52c04ab91f4899d77c0292c0f3bf",
"main.dart.js": "7bf853d07f11041c3d5de524fecff9ed",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "994b4036e87ad0abafefefdb27049e32",
".git/config": "cf48e5902c66d7ee286d92018622fff1",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/32/056c1d4dcfb105a0c9ce26b1e6289181c20df4": "f511c656e291cb04520cb196a9b9acaf",
".git/objects/56/17da5bcff3f81e2b6a5aea48f2a9e9c893860b": "4d81886c0d96ea41fd13c2051c50fd86",
".git/objects/0b/eec8dc6dab9524c5024638d8e7b3da64314ce8": "e26837f51931b62bdc0642c0eaba7a5d",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/b0b812389f44fc0ad17f52d61ba3661d221798": "6da2fed236f6a2506f4a5179e584e741",
".git/objects/34/3062661f0fd638ee517ed2e9b4fdc715f8382b": "26337ae011b47efb3a5767edccf3f6ef",
".git/objects/33/4a7eb101d26e0d8ae9cf55adc78eac9673b342": "3e4e150188d10c1b028b311fb7fa7d6f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/bb/4c28a4ab1e0d8bc16576e8d04601f47979511f": "612daf597a5e305d3996424a2da2a440",
".git/objects/be/dc48a8f1dd0a31f86285cee0b26a73aafba414": "00435f5d59cbc68725e003f0b900fa2c",
".git/objects/d6/17f3f02a3816d4ee3b7b78fc775d3bf50a3d3d": "0f03c4cf4cae12ac551e183599e6e775",
".git/objects/e2/872d4af742898724b9d16a7bedef346c4936e4": "d89e26af425d52091346ac4f6775d61b",
".git/objects/c7/f2485ece5bc59839b26de3cfa3910e41911a77": "3836a719514bbc144e958e3ab4791afe",
".git/objects/c9/33cd999e3f56df22244f67904ca36361ab4dbf": "965aba8f028860883b03137b9918d1be",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/16623f16477a32bc4c3f694a8968293cd62e82": "ac9ccf2c695b56703faf03f806d8fbd6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/376cda5c113c49e4b147e7a646532d19062e42": "28f3fc47e51059300c96f1a1405b4646",
".git/objects/1a/e3f546131d32ae9273c59d9c1c4285a5684fcd": "0c8f49c9e0b1ac18561844c2d973956e",
".git/objects/17/139f8ba051cb3745fd9dc69ae0af5948dbe2f3": "ef1da434b39d0d882be308b1242b28bc",
".git/objects/19/1ca30618a0ea2d78b404573ee474a3f2773cd3": "d12c5eaded4b768a6b22168a33b699e8",
".git/objects/4c/aabbd84e5c5531247318cb58453156e2ae1021": "2adcb81a142bc47241cf881e97ca1d90",
".git/objects/86/ad0218b7ea2abb137286ac2295d5ead202feff": "d18844bf7241834b72e1f19201d6b5ad",
".git/objects/44/b54b9b6f6bfc57a12a00f1b2b14e4983c24453": "b088588e409cc9500b589449648ef7af",
".git/objects/43/f1724e42c2bed89daea32f21b9d7fcbc34e0f0": "e36d476f0a4d406dd4fc1fca95b9ede3",
".git/objects/43/7052c4c16acd21d82dbdc9b42e924bd9937046": "5472be7b6eb88813c18e009fcfaecab9",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/62/c165a0dd3a18ee112333b11436019b32718aef": "179c8f539003fd92a57ed22b533e163d",
".git/objects/53/c2ca830cf5c275f8068524b4b7f7ceceabefc3": "c32f21dd536a3a3809d325001158b56b",
".git/objects/5b/5ec1fda0bc55c6d64e6b65431500a2f1118981": "67992fd22b03d75b7ac3b92ee4996848",
".git/objects/37/88db374f11b99d5ef42a365283c8241f9afc40": "e5e2d80b362934cb1c7ce9db19452e8a",
".git/objects/08/b5ed92cfc08ee5952c84672a348746a1f40987": "82430f1568e4123736f092a85011435d",
".git/objects/99/c10088cedf4e10564a4bddba5d635dd54a038e": "1155ce3929ac9cb540b1d144318b1081",
".git/objects/55/ee39fa54204349804308db5144f290a2927a8d": "8abfa1b2caac84d36e1fb021aff9c5e4",
".git/objects/bf/639b92333d9963ad82bb83eddbb753af5c4f47": "7cb317575327229475c784b2698fb755",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/d6ce8de7d1432aab97ab76602e00523d8328fb": "4b4e9545aaa1d9926e4d7b8b2e16b77b",
".git/objects/dc/277e131c70bbb71e1e2ba676fbded66ead8baf": "075ae4b746330b7d9a00be23ab4bf6b3",
".git/objects/aa/dd4bfb520d4782164aac3c3f0410d86e26e4d6": "677227dd8a2ca010afb29f81c59c7542",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/acc03223f02a7dbda0c6574f002e8893e6b690": "c97d70a731f61e81bb3d06690fccfb72",
".git/objects/b7/f63ec77b327d98ea8ab1ccb33dc25ce7184b83": "b9faa44252c710ee8ac9b8a7afa5bcfd",
".git/objects/a8/ee63f396907f3340738a041d296ac06a7799b9": "631ea42860c63794240c1de59233ef88",
".git/objects/b9/2f9bd4c7023f17439aa3082511c40829e3bd26": "3f9d284b3d41b13dbf8fbac66aeb6325",
".git/objects/c3/f0abb7e82677b3f1451d18ac16e03d978a23f5": "7a6165162d85287cdfd4d1ce35a8adc0",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cc/917a5e7c10a23291eb4d493d66fd2b9f834370": "eb6ae54da5e0d877cc1d10c4205c2f3c",
".git/objects/e6/c69b092c5736d280f33e98d017b68490d76725": "710e91d150dec2512286f02ecce91566",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cb/cde09cd65c6f9af65d81a14e065b28eaefbf84": "fde2145a7872f21ccc35454d8a947f14",
".git/objects/e0/4aef499979db99f47a5bc7f31f4f9d9d77d415": "cd263cdf72eaa0157bb4327cc91666c6",
".git/objects/1b/d010026651eb35109afeaae9d13dc2c76bef4b": "9c3d7c92797e7d775b83f1a0ce75a410",
".git/objects/1b/342dffc07c3b00a89b7742ac2a74c6c7a71ca8": "fc190135407c224eb51e1a41dc7344bb",
".git/objects/84/c608a39ae4cdc373c2bcb8733d635fdaf87221": "1ebd5bd36d13d8f981c679bdc618efa1",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e94aec952d226d230f4cb100545f1a7",
".git/logs/refs/heads/main": "0e94aec952d226d230f4cb100545f1a7",
".git/logs/refs/remotes/origin/main": "7c8d930af4705c4a628ad5cb9c986954",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "926777740257167596faf34eb3f02e38",
".git/refs/remotes/origin/main": "926777740257167596faf34eb3f02e38",
".git/index": "f9ea449e374150f96bf09aee45ddcacf",
".git/COMMIT_EDITMSG": "25a59dc40b9e8404e187b3205c33bbbb",
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
