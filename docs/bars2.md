# Bars and Pubs in Paris (2)

```js
// Libraries
display(html`<link rel="stylesheet" href="${import.meta.resolve("npm:maplibre-gl/dist/maplibre-gl.css")}">`);
import maplibregl from "npm:maplibre-gl";
import deck from "npm:deck.gl/dist.min.js/+esm";
const {DeckGL, AmbientLight, GeoJsonLayer, HexagonLayer, LightingEffect, PointLight, MapboxOverlay, ScatterplotLayer, ArcLayer} = deck;
```

```js
const radius = view(Inputs.range([50, 1000], {value: 100, label: "radius", step: 100}));
const coverage = view(Inputs.range([0, 1], {value: 1, label: "coverage", step: 0.01}));
const upperPercentile = view(Inputs.range([0, 100], {value: 100, label: "upper percentile", step: 1}));
const elevationScale = view(Inputs.range([0, 20], {value: 3, label: "elevation scale", step: 1}));
```

<div id="container" style="background: #000; height: 500px; width: 100%;"></div>

</div>

```js

    const map = new maplibregl.Map({
      container,
      style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
      center: [2.348,48.845],
      zoom: 12,
      pitch: 50,
      antialias: true
    });
```

```js
     // const firstLabelLayerId = map.getStyle().layers.find(layer => layer.type === 'symbol').id;
```

```js
const deckOverlay = new MapboxOverlay({
        interleaved: true,
      });

```

```js
map.addControl(deckOverlay);
map.addControl(
  new maplibregl.NavigationControl({
    visualizePitch: true,
    showZoom: true,
    showCompass: true
  })
);
```

```js
const colorRange = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78]
];

```

```js
deckOverlay.setProps({
  layers: [
    new HexagonLayer({
      id: "heatmap",
      colorRange,
      coverage,
      data,
      elevationScale,
      extruded: true,
      getPosition: (d) => [Number(d.lng), Number(d.lat)],
      pickable: true,
      radius,
      upperPercentile,
      material,
                 beforeId: "watername_lake_line"
    })
  ]
});

```

```js
const material = {ambient: 0.64, diffuse: 0.6, shininess: 32, specularColor: [51, 51, 51]};
const ambientLight = new AmbientLight({color: [255, 255, 255], intensity: 1.0});
const pointLight1 = new PointLight({color: [255, 255, 255], intensity: 0.8, position: [-0.144528, 49.739968, 80000]});
const pointLight2 = new PointLight({color: [255, 255, 255], intensity: 0.8, position: [-3.807751, 54.104682, 8000]});
const effects = [new LightingEffect({ambientLight, pointLight1, pointLight2})];
```

```js
// Data Import
const data = await FileAttachment("/data/bars.json").json();
```

See also https://observablehq.observablehq.cloud/pangea/party/deck.gl-map, https://deck.gl/gallery/maplibre-overlay & https://observablehq.com/@neocartocnrs/eurostat-census-grid-2021