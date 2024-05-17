<div id="map" style="width: 100%; height: 450px;"></div>

<!-- <link rel="stylesheet" href="${import.meta.resolve("npm:maplibre-gl/dist/maplibre-gl.css")}"> -->


<!-- <link rel="stylesheet" href="https://unpkg.com/maplibre-gl/dist/maplibre-gl.css"> -->




```js
display(html`<link rel="stylesheet" href="${import.meta.resolve("npm:maplibre-gl/dist/maplibre-gl.css")}">`);
import maplibregl from "npm:maplibre-gl";
```

```js
const map = new maplibregl.Map({
  container: "map",
  zoom: 12,
  center: [11.39085, 47.27574],
  pitch: 52,
  hash: true,
  style: {
    version: 8,
    sources: {
      osm: {
        type: "raster",
        tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
        attribution: "&copy; OpenStreetMap Contributors",
        maxzoom: 20
      }
    },
    layers: [
      {
        id: "osm",
        type: "raster",
        source: "osm"
      }
    ]
  },
  maxZoom: 18,
  maxPitch: 85
});

map.addControl(
  new maplibregl.NavigationControl({
    visualizePitch: true,
    showZoom: true,
    showCompass: true
  })
);
```