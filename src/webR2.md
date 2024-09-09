```js
import { WebR } from 'npm:webr';
const webR = new WebR();
await webR.installPackages(['sf', 'mapsf', 'geojsonsf'])
await webR.evalRVoid("library(sf)");
await webR.evalRVoid("library(mapsf)");
await webR.evalRVoid("library(geojsonsf)");
await webR.init();
```


```js
// Create mountpoint
await webR.FS.mkdir('/data')

// Download image data
const data = await fetch('https://example.com/output.data');
const metadata = await fetch('https://example.com/output.js.metadata');

// Mount image data
const options = {
  packages: [{
    blob: await data.blob(),
    metadata: await metadata.json(),
  }],
}
await webR.FS.mount("WORKERFS", options, '/data');
```

<div id="plot-output"></div>


```js
const africa = await FileAttachment("/data/africa.json").json();
await webR.objs.globalEnv.bind("africastr", JSON.stringify(africa));
```






```js
 const shelter = await new webR.Shelter();
 const capture = await shelter.captureR(`
 x <- geojson_sf(africastr)
 plot(x)
 `);
       capture.images.forEach((img) => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        document.getElementById("plot-output").appendChild(canvas);
      });
```