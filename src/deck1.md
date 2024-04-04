```js
const bars = await FileAttachment("./data/bars.json").json();
const style = await d3.json("https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json")
display(bars)
display(style)
```

<link rel="stylesheet" href="https://unpkg.com/maplibre-gl/dist/maplibre-gl.css">

```js
import maplibregl from "npm:maplibre-gl";
import deck from "npm:deck.gl/dist.min.js/+esm";
```

```js
display(deck)
display(maplibregl)
```

```js
const source = ({ id: "src", lng: 2.375, lat: 48.844 })
const hexPct = 200
const hexSize = 1
const colors = [
  [26, 152, 80],
  [145, 207, 96],
  [217, 239, 139],
  [254, 224, 139],
  [252, 141, 89],
  [215, 48, 39]
]
```


<div id="map" style="width: 100%; height: 450px;"></div>



```js
 let map = new maplibregl.Map({
    container : "map",
    center: source,
    zoom: 11,
    pitch: 40,
    style,
    attributionControl: true
  });
```


```js
  const _deckLayer = new deck.MapboxLayer({
    id: "heatmap",
    type: deck.HexagonLayer,
    colorRange: colors,
    data: bars,
    getPosition: (d) => [Number(d.lng), Number(d.lat)],
    getColorWeight: (d) => d.w,
    colorAggregation: "SUM",
    opacity: 0.3,
    radius: hexSize,
    coverage: hexPct
  });
  map.addLayer(_deckLayer, "housenumber");
```