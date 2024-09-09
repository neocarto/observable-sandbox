

<link href ="https://unpkg.com/maplibre-gl/dist/maplibre-gl.css" rel="stylesheet" />

```js
import maplibregl from 'maplibre-gl';
import turfbbox from "@turf/bbox";
```

[comment]: <> (This is a comment, it will not be included)


```js
const geojson = await FileAttachment("/data/africa.json").json();
    const turfbb = turfbbox(geojson);
    const bb = [
      [turfbb[0], turfbb[1]],
      [turfbb[2], turfbb[3]],
    ];
```

<div id="map" style="height:800px;"></div>



```js
const map = new maplibregl.Map({
  container: "map",
  //zoom: 12,
  bounds:bb,
  //center: [11.39085, 47.27574],
  //pitch: 52,
  //hash: true,
  style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
  //maxZoom: 18,
  //maxPitch: 85
});

    map.on("load", function () {
      map.addSource("mygeojson", {
        type: "geojson",
        data: geojson,
      })


         map.addLayer({
          id: "mygeojson",
          type: "fill",
          source: "mygeojson",
          paint: {
            "fill-color": "red",
            "fill-opacity": 1,
          },
        });

        map.addLayer({
          id: "mygeojson-stroke",
          type: "line",
          source: "mygeojson",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "white",
            "line-width": 1,
          },
        });

        map.on("mouseenter", "mygeojson", function () {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "mygeojson", function () {
        map.getCanvas().style.cursor = "";
      });


    // tooltip

        let result = [];
    const attr = geojson.features.map((d) => d.properties);
    attr.forEach((d) => result.push(Object.keys(d).length));
    const keys = Object.keys(attr[result.indexOf(Math.max(...result))]);
    
     map.on("click", "mygeojson", function (e) {
        let type = e.features[0].geometry.type;
        let r = "";
        r += "Geometries";
        r += "<table>";
        r += "<tr><td><b>Type</b></td><td>" + type + "</td></tr>";
        r += "</table>";
        r += "Attribute data";
        r += "<table>";
        keys.forEach(
          (d) =>
            (r +=
              "<tr><td><b>" +
              d +
              "</b></td><td>" +
              e.features[0].properties[d] +
              "</td></tr>")
        );
        r += "</table>";
        new maplibregl.Popup({
          closeOnClick: true,
          closeOnMove: true,
        })
          .setLngLat(e.lngLat)
          .setHTML(r)
          .addTo(map);
      });

        map.addControl(
  new maplibregl.NavigationControl({
    visualizePitch: true,
    showZoom: true,
    showCompass: true
  }))
 })

```



