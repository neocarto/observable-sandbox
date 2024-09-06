---
sql:
    data: ./data/worlddata.csv
    quakes: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv
---

## Duckdb tets

```sql id=all
SELECT *  FROM data ORDER BY pop LIMIT 10
```



```js
all.toArray()
```

```sql id=top10 display
SELECT * FROM data ORDER BY pop LIMIT 10
```

```sql id=[top]
SELECT * FROM data ORDER BY pop LIMIT 10
```

<!-- ```js
display(all)
``` -->

```js
top
```

```sql id=[{min}]
SELECT MIN(pop) AS min FROM data
```

```js
min
```

```js
const limit = view(Inputs.range([2, 20], {label: "Limit", value:2, step:1}));
```

```sql id=top10 display
SELECT * FROM data ORDER BY ISO3 LIMIT ${limit}
```

<!-- ```sql
COPY top10 TO 'output.json';
``` -->

### sql literals

```js
const [row] = await sql`SELECT random() as random`;
display(row.random)
```

```js
Inputs.table(await sql([`SELECT * FROM data`]))
```



```sql id=[{total_rows}]
SELECT count(*) AS total_rows from data
```

```js
total_rows
```




```js
const db2 = await DuckDBClient.of({base: FileAttachment("./data/worlddata.csv")});
```

```js
const x = db2.queryRow(`SELECT * FROM base`)
```

```js
display(x)
```


