const staticUomTrack = "uom-track"
const assets = [
  "/uomTrack/index.html",
  "/uomTrack/css/style.css",
  "/uomTrack/uomTrack.js",
  "/uomTrack/manifest.json",
  "/uomTrack/copy-icon.svg",
  "/uomTrack/delete-icon.svg",
  "/uomTrack/512.png",
  "/uomTrack/favicon.ico"
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