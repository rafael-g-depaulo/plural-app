/* eslint-disable no-restricted-globals */
import { resolve } from "path";

var CACHE_NAME = "plural-app";

const src = resolve(__dirname, "../", "src/");

var urlsToCache = [`${src}/logo.svg`, "/robots.txt"];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
      .catch(() => {
        return caches.match("/login");
      })
  );
});
