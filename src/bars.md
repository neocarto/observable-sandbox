# Bars and Pubs in Paris

Adapted from Fil.<br/>See: https://observablehq.observablehq.cloud/pangea/party/deck.gl-map


<div style="width: 100%; position: relative;">

<div class=card style="max-width: 270px; position: absolute; top:0; margin-left: 14px; right:14px; z-index:1;">

# Bars and Pubs in Paris

${colorLegend}

```js
const radius = view(Inputs.range([50, 1000], {value: 150, label: "radius", step: 10}));
const coverage = view(Inputs.range([0, 1], {value: 1, label: "coverage", step: 0.01}));
const upperPercentile = view(Inputs.range([0, 100], {value: 100, label: "upper percentile", step: 1}));
const elevationScale = view(Inputs.range([0, 20], {value: 0, label: "elevation scale", step: 1}));
```

</div>

<div id="container" style="height: 800px; width: 100%;"></div>

</div>

```js
const colorRange = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78]
];

const colorLegend = Plot.plot({
  margin: 0,
  marginTop: 20,
  width: 270,
  height: 35,
  x: {padding: 0, round: false, axis: null},
  marks: [
    Plot.cellX(colorRange, {fill: ([r, g, b]) => `rgb(${r},${g},${b})`}),
    Plot.text(["Fewer"], {frameAnchor: "top-left", dy: -12}),
    Plot.text(["More"], {frameAnchor: "top-right", dy: -12})
  ]
});
```

```js
// const transition =
//   (replay,
//   Generators.queue((notify) => {
//     const duration = 900;
//     const delay = 500;
//     const t = d3.timer((elapsed) => {
//       if (elapsed > duration) t.stop();
//       notify(d3.easeCubicInOut(elapsed / duration));
//     }, delay);
//   }));
```

```js
container.innerHTML = "";
const deckInstance = new DeckGL({
  container,
  initialViewState,
  controller: true,
  effects,
  getTooltip: ({object}) => {
    if (!object) return null;
    const [lng, lat] = object.position;
    const count = object.points.length;
    return `\
    latitude: ${lat.toFixed(2)}
    longitude: ${lng.toFixed(2)}
    ${count} bars and pubs
  `;
  }
});

invalidation.then(() => deckInstance.finalize());
```

```js
deckInstance.setProps({
  layers: [
    new HexagonLayer({
      id: "heatmap",
      colorRange,
      coverage,
      data,
      elevationScale,
      //elevationRange: [0, 500 * transition],
      extruded: true,
      getPosition: (d) => [Number(d.lng), Number(d.lat)],
      pickable: true,
      radius,
      upperPercentile,
      material
    }),    new GeoJsonLayer({
      id: "arrondissements",
      data: arr,
      lineWidthMinPixels: 1,
      getLineColor: [255, 255, 255]
    }),
     new GeoJsonLayer({
      id: "Paris",
      data: paris,
      lineWidthMinPixels: 2,
      getLineColor: [255, 255, 255]
    }),
  ]
});
```

```js
// import {DeckGL, AmbientLight, GeoJsonLayer, HexagonLayer, LightingEffect, PointLight} from "npm:deck.gl"; doesn't work
import deck from "npm:deck.gl/dist.min.js/+esm";
const {DeckGL, AmbientLight, GeoJsonLayer, HexagonLayer, LightingEffect, PointLight} = deck;
```

```js
const material = {ambient: 0.64, diffuse: 0.6, shininess: 32, specularColor: [51, 51, 51]};
const ambientLight = new AmbientLight({color: [255, 255, 255], intensity: 1.0});
const pointLight1 = new PointLight({color: [255, 255, 255], intensity: 0.8, position: [-0.144528, 49.739968, 80000]});
const pointLight2 = new PointLight({color: [255, 255, 255], intensity: 0.8, position: [-3.807751, 54.104682, 8000]});
const effects = [new LightingEffect({ambientLight, pointLight1, pointLight2})];
const initialViewState = {
  longitude: 2.348,
  latitude: 48.85,
  zoom: 12.3,
  minZoom: 5,
  maxZoom: 15,
  pitch: 50,
  bearing: 0
};
```

```js
const data = await FileAttachment("/data/bars.json").json();
const arr = await FileAttachment("/data/arrondissements.json").json();
const paris = await FileAttachment("/data/paris.json").json();
```