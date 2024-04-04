/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@turf/boolean-point-in-polygon@6.5.0/dist/es/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{getCoord as r,getGeom as n}from"../invariant@6.5.0/_esm.js";function e(e,t,i){if(void 0===i&&(i={}),!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");var f=r(e),u=n(t),a=u.type,g=t.bbox,l=u.coordinates;if(g&&!1===function(r,n){return n[0]<=r[0]&&n[1]<=r[1]&&n[2]>=r[0]&&n[3]>=r[1]}(f,g))return!1;"Polygon"===a&&(l=[l]);for(var h=!1,v=0;v<l.length&&!h;v++)if(o(f,l[v][0],i.ignoreBoundary)){for(var d=!1,p=1;p<l[v].length&&!d;)o(f,l[v][p],!i.ignoreBoundary)&&(d=!0),p++;d||(h=!0)}return h}function o(r,n,e){var o=!1;n[0][0]===n[n.length-1][0]&&n[0][1]===n[n.length-1][1]&&(n=n.slice(0,n.length-1));for(var t=0,i=n.length-1;t<n.length;i=t++){var f=n[t][0],u=n[t][1],a=n[i][0],g=n[i][1];if(r[1]*(f-a)+u*(a-r[0])+g*(r[0]-f)==0&&(f-r[0])*(a-r[0])<=0&&(u-r[1])*(g-r[1])<=0)return!e;u>r[1]!=g>r[1]&&r[0]<(a-f)*(r[1]-u)/(g-u)+f&&(o=!o)}return o}export{e as default};
