"use strict";var precacheConfig=[["/index.html","1ebf1dbef9d0f0cfad6538780797072e"],["/static/css/main.67c5e422.css","5f50eb4f9b5b8081a8863642b8a0b29c"],["/static/js/main.d820a0a8.js","599c10e5f4e736fbbc30f8e1b92db1b2"],["/static/media/CafeRoze.83d811ae.jpg","83d811aea8ba421acc1b29a799415dc2"],["/static/media/butcher-n-bee.dc1dcc0f.jpg","dc1dcc0faf231ca796a5f8eca6d2f7ff"],["/static/media/butcher-n-bee.f3073385.jpg","f307338532bc7c698096507edca5e6ee"],["/static/media/cathead.6fa152bc.png","6fa152bc05ae233dc818a5530dd97e67"],["/static/media/dish-back.6fd76dbb.jpg","6fd76dbb70e79e2ace491b9f391c75e0"],["/static/media/dish-front.b5fe2b28.png","b5fe2b28bd612351c5bd28520c0784c6"],["/static/media/enrw-logo-color-2020.a24e4b2d.svg","a24e4b2dee1f0e7c4d2bd855b171cdb9"],["/static/media/footer-collage-fpo.608ae87f.png","608ae87fcded8c5e2564eff35feae24a"],["/static/media/golden-pheasant-lives.6d0eb01b.png","6d0eb01bbe38907cc88fc9eab4db0cc7"],["/static/media/halsman-jump.278089ae.png","278089aeeb4bcaa09975f003c6f3c798"],["/static/media/lou.1503c782.png","1503c7828e2f18d6637ef4df390a2a59"],["/static/media/lou.a95d0bfc.jpg","a95d0bfc8f66eab835456db88f2e8a4b"],["/static/media/margot.8a547e5d.png","8a547e5da20ef7c7130fee0e9c9324f8"],["/static/media/margot.a1ec9b82.jpg","a1ec9b82a85addba03f78dae47198709"],["/static/media/nico.480b8e04.jpg","480b8e040dd9d3adb28ed7371d58c095"],["/static/media/nico.774df037.jpg","774df0379595182daf640f961292a45f"],["/static/media/peninsula.7b11ba83.jpg","7b11ba836b2bc760ff6e519217167551"],["/static/media/peninsula.e57e4a3e.png","e57e4a3e49b387d21cf6378deeb6c267"],["/static/media/rhs.139c57cf.png","139c57cff2cbd4214d1539e156736bb2"],["/static/media/rhs.327c467f.jpg","327c467f1d8a437993d47e26264b870f"],["/static/media/setsun.ac5b4522.jpg","ac5b4522a771774a51a37303dcb2a46b"],["/static/media/sponser.643211d7.png","643211d78f88346aa58df3edef733b57"],["/static/media/treehouse.8edfea54.jpg","8edfea54448826aadeb87f3ef9387c68"],["/static/media/treehouse.a3b40aad.jpg","a3b40aada2e90991c76ddfcfc85683ca"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});