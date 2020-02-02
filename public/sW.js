importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

workbox.routing.registerRoute(
  //type of file extension, css or js
  /\.(?:css|js)$/,
  //update cache or every request if possible.
  //uses cache but updates in background
  new workbox.strategies.StaleWhileRevalidate({
    //name stored in browser
    cacheName: "assets",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
);

workbox.routing.registerRoute(
  //type of file extension, css or js
  /\.(?:png|jpg|gif)$/,
  //update cache or every request if possible.
  //uses cache but updates in background
  new workbox.strategies.CacheFirst({
    //name stored in browser
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
);
