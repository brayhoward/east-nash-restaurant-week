"use strict";var precacheConfig=[["/index.html","9e8c87bb70979c51e1b7da24bfcddfa7"],["/static/css/main.a7efd808.css","ccaca053a877f3d79274e387011dec8b"],["/static/js/main.a6037fdd.js","88ae30bea61b3c5111091115fbe97237"],["/static/media/CafeRoze-exterior.83d811ae.jpg","83d811aea8ba421acc1b29a799415dc2"],["/static/media/Cebulka-B+B-4869.f3073385.jpg","f307338532bc7c698096507edca5e6ee"],["/static/media/ENRW Menu-Yuriko Say.2c1deaf1.pdf","2c1deaf19d62e1b5aacfb6945c2967d1"],["/static/media/Fort-louise-ENRWmenu.094ae910.pdf","094ae910a0a00e4e977e74fcf2a9e3ba"],["/static/media/enrw-logo-bigeast-color.fc850fce.svg","fc850fce8f04f937d4c7357f5e42a0bd"],["/static/media/ext-margot.3486f3b9.jpg","3486f3b960ee94443f1c066f09163af1"],["/static/media/footer-collage-fpo.608ae87f.png","608ae87fcded8c5e2564eff35feae24a"],["/static/media/fort-exterior.5bdd95b3.jpg","5bdd95b333ac7778b82f0cdc3ddb51bb"],["/static/media/golden-pheasant-lives.6d0eb01b.png","6d0eb01bbe38907cc88fc9eab4db0cc7"],["/static/media/halsman-jump.278089ae.png","278089aeeb4bcaa09975f003c6f3c798"],["/static/media/logo-butcher-bee.84846916.jpg","84846916093e3c13dca6d811a43a3909"],["/static/media/logo-fort-louise.4c3abee3.jpg","4c3abee315babea30587d93c66ec4b5d"],["/static/media/logo-margot.487f9228.jpg","487f922878f6f1d1a9831377e17d48c9"],["/static/media/logo-roze.751e03f7.jpg","751e03f7c6a78dedd871ccd1ed533588"],["/static/media/logo-rudies.2d3d5932.jpg","2d3d5932352dfad69b607711efe272af"],["/static/media/logo-tko.625c9dbd.jpg","625c9dbdb2240451debb320615b7923a"],["/static/media/logo-treehouse.8edfea54.jpg","8edfea54448826aadeb87f3ef9387c68"],["/static/media/logo-two-ten-jack.87d6d61b.jpg","87d6d61b834bd4695127d2f9d631bc10"],["/static/media/logo-urban-cowboy.ddc8ebf9.png","ddc8ebf99adeef1e07fc310f0d4cc462"],["/static/media/menu-rudies.54fb5502.pdf","54fb55024ddd0992c81fd2d1a031512d"],["/static/media/public-house.1f9586fe.jpg","1f9586fe1cb310e46bb6cd4a1be98ffd"],["/static/media/rudies.6911fc19.jpeg","6911fc19886656f56f5cfa9c14746c01"],["/static/media/soup-back.17c3b5d1.jpg","17c3b5d1e8d0fe35c1f19aedfa1bccea"],["/static/media/soup-front.711f6354.png","711f6354a83e53e71c940ffc50b00b16"],["/static/media/tko-bar.8110b67f.jpg","8110b67ff634f82f0b4507c8c7bfc646"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var n="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});