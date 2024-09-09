# Test gridviz

```js
import * as gridviz from 'gridviz'
```
### Map

<div id="map" style="width: 1OOOpx; height: 650px"></div>

```js
    const map = new gridviz.Map(document.getElementById('map'), { x: 4200000, y: 2600000, z: 3000, backgroundColor: "#EADDCA" })
        .addZoomButtons()

// define dataset
const dataset = new gridviz.CSVGrid(map, "https://raw.githubusercontent.com/eurostat/gridviz/master/assets/csv/Europe/pop_2018_10km.csv", 10000)

//define color for each cell
const colorFunction = (cell) => {
    if (cell.population > 150000) return "#993404"
    else if (cell.population > 60000) return "#d95f0e"
    else if (cell.population > 20000) return "#fe9929"
    else if (cell.population > 6000) return "#fec44f"
    else if (cell.population > 1500) return "#fee391"
    else return "#ffffd4"
}

//define style
const style = new gridviz.ShapeColorSizeStyle({ color: colorFunction })

//add layer to map
map.layers = [new gridviz.GridLayer(dataset, [style])]
```