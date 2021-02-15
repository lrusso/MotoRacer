const filesToCache = [
	"MotoRacer.htm",
	"MotoRacer.json",
	"MotoRacer.png",
	"MotoRacerFavIcon_16x16.png",
	"MotoRacerFavIcon_192x192.png",
	"MotoRacerFavIcon_512x512.png",
	"MotoRacerGame.htm",
	"MotoRacerGame.js",
	"MotoRacerShare.png"
];

const staticCacheName = "motoracer-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});