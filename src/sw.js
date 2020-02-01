importScripts("workbox-v3.6.3/workbox-sw.js");

workbox.setConfig({ modulePathPrefix: "workbox-v3.6.3/" });

//array to take icons on manifest.js
const precacheManifest = [];

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);
