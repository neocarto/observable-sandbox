## Some sests with duckdb spatial extension

See https://duckdb.org/2023/04/28/spatial.html & https://observablehq.com/framework/lib/duckdb & https://duckdb.org/docs/extensions/spatial/overview & https://observablehq.observablehq.cloud/pangea/duckdb/spatial


The spatial extension configured in `observablehq.config.js`.


SELECT * FROM st_drivers();

```sql
SELECT * FROM st_drivers();
```

```js
const world = await FileAttachment("/data/CNTR_RG_20M_2020_4326.json").url();
const stats = await FileAttachment("/data/worlddata.csv").url();
```

geometries

```sql
CREATE OR REPLACE TABLE world AS FROM ST_Read(${world});
```

stats

```sql
CREATE OR REPLACE TABLE data AS FROM read_csv(${stats});
```

join

```sql
SELECT * from data;
```

<!-- ```sql
SELECT CNTR_ID AS id, 
       NAME_ENGL AS name,
       ST_AsGeoJSON(geom) AS "geom"
       from world
LEFT JOIN stats
    ON counties.id = unemployment.id
``` -->


