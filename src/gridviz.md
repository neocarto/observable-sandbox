# Gridviz

```js
// Librairies
import * as gridviz from 'npm:gridviz/distgridviz@3.0.7
//const {Map, SquareColorWebGLStyle} = gridviz;
```

```js
gridviz
```

```js
//define map with initial view
    const map = new gridviz.Map(document.getElementById('map'), { x: 3900000, y: 2960000, z: 500, zoomExtent: [100, 1500] })
        .addZoomButtons()

    // //define dataset
    // const dataset = new gridviz.CSVGrid(map, "https://raw.githubusercontent.com/eurostat/gridviz/master/assets/csv/Europe/pop_2018_10km.csv", 10000)

    // //define style
    // const scale = gridviz.powerScale(0.4)
    // const style = new gridviz.NinjaStarStyle({
    //     color: () => 'purple',
    //     size: (c, r, z) => scale(c.population / 300000)
    // })

    // //add layer to map
    // map.layers = [new gridviz.GridLayer(dataset, [style])]

```

```js
// Data Import
// const data = await FileAttachment("/data/grid.json").json()
// display(Inputs.table(data))
```
