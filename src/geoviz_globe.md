```js
import * as viz from "npm:geoviz@0.6.0";
const world = await FileAttachment("/data/CNTR_RG_20M_2020_4326.json").json();
```

## A simple globe

```js
const draw = function(width){
let svg = viz.create({projection: d3.geoOrthographic().rotate([-60,-30]), zoomable:"versor", width})
svg.graticule({stroke:"white", strokeWidth:0.5, strokeDasharray:2})
svg.path({datum:world, tip:true, fill:"white", fillOpacity:0.7})
return(svg.render())
}
```

<div class="grid grid-cols-2">
  <div class="card"> ${resize((width) => draw(width))}</div>
</div>

[source](https://github.com/neocarto/observable-sandbox/blob/main/docs/maplibre.md?plain=1)
