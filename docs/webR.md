```js
import { WebR } from 'npm:webr';
const webR = new WebR();
await webR.init();
```

## rnorm() 

```js
const nb = view(Inputs.range([10, 100], {value: 100, label: "nb", step: 1}));
```

```js
let result = await webR.evalR(`rnorm(${nb},5,1)`);
let output = await result.toArray();
display(output)
```
