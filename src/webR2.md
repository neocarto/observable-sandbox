```js
import { WebR } from 'npm:webr';
const webR = new WebR();
await webR.installPackages(['sf'])
await webR.evalRVoid("library(sf)");
await webR.init();
```

```js
const file = view(Inputs.file({label: "file", required: true}))
```

```js
const nb = view(Inputs.range([10, 100], {value: 100, label: "nb", step: 1}));
```

```js
let result = await webR.evalR(`
x <- st_read(${file})
`)
// let output = await result.toArray();
// display(output)
```