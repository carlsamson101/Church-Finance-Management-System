const C='church-fin-v6',A=['./','index.html','manifest.json','apple-touch-icon.png','icon-192.png','icon-512.png','icon-maskable-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;
if(e.request.mode=='navigate'){e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put('index.html',k));return r}).catch(()=>caches.match('index.html')));return}
e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).catch(()=>caches.match('index.html'))))});