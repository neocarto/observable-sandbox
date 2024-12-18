```js
import { WebR } from 'npm:webr';
const webR = new WebR();
await webR.init();
```

# Test some things with webR

## rnorm() 

```js
const nb = view(Inputs.range([10, 100], {value: 100, label: "nb", step: 1}));
```

```js
let result = await webR.evalR(`rnorm(${nb},5,1)`);
let output = await result.toArray();
display(output)
```

```js
let shelter = await new webR.Shelter();
let result2 = await shelter.captureR(`print(rnorm(${nb},5,1))`);
display(result2.output);
shelter.purge();
```

## R sort() function

```js
let sort = webR.evalR("sort")
```

```js
let sorted = await sort(output)
display(sorted.values)
```


## Test R function on array of values in js 

```js
async function multi2(arr) {
  const fn = await webR.evalR("function(x) { 2 * x }");
  const result3 = await fn.exec(arr);
  return result3.toArray();
}
```

```js
display(await multi2([1, 2, 3]))
```

## Summary of a js data with R

```js
let myvar = view(Inputs.select(["pop", "gdp", "gdppc", "region"]))
```

```js
let data = await FileAttachment("data/worlddata.csv").csv({ typed: true })
let mydata = data.map(d => +d[myvar])
display(mydata)
```

```js
{

  await webR.objs.globalEnv.bind("arr", mydata);
  let shelter = await new webR.Shelter();
  let rcode = `summary(arr)`;
  let { output } = await shelter.captureR(rcode, { withAutoprint: true });
  display(output.map((line) => line.data).join("\n"))
}
```

# Packages classInt

```js
await webR.installPackages(['classInt'])
await webR.evalRVoid("library(classInt)");
```

```js
let method = view(Inputs.select(["sd", "equal", "pretty", "quantile", "kmeans", "hclust", "bclust", "fisher", "jenks", "dpih", "headtails"]
))
```

```js
const n = view(Inputs.range([2, 10], {value: 5, label: "n", step: 1}));
```



```js
{

  await webR.objs.globalEnv.bind("arr", mydata);
  // let shelter = await new webR.Shelter();


  //let rcode = `summary(arr)`;
  let rcode = `classIntervals(arr, n=${n}, style = "${method}")`;
  let { output } = await shelter.captureR(rcode, { withAutoprint: true });
  display(output.map((line) => line.data).join("\n"))
}
```


```js
async function getbreaks(nb, method) {
  const fn = await webR.evalR("function(method, n) {classIntervals(arr, n=n, style = method)}");
  const result4 = await fn.exec(nb, method);
  return result4.toArray();
}
```

```js
display(await getbreaks(method, n))
```


https://repo.r-wasm.org/