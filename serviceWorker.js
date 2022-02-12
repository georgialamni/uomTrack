const staticUomTrack = "uom-track"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/uomTrack.js",
  "/common.js",
  "/uomApp.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticUomTrack).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })