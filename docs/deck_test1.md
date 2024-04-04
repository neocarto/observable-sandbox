# A simple circle


```js
import deck from "npm:deck.gl/dist.min.js/+esm";
;
const {DeckGL, ScatterplotLayer} = deck;
```

```js
const INITIAL_VIEW_STATE = {
  latitude: 37.8,
  longitude: -122.45,
  zoom: 15
};
```

```js
const deckInstance = new DeckGL({
  debug: true,
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: [
    new ScatterplotLayer({
      data: [
        {position: [-122.45, 37.8], color: [255, 0, 0], radius: 200}
      ],
      getPosition: d => d.position,
      getFillColor: d => d.color,
      getRadius: d => d.radius
    })
  ]
});
```



<link rel="stylesheet" href="https://unpkg.com/maplibre-gl/dist/maplibre-gl.css">




```js
import maplibregl from "npm:maplibre-gl";
```
