import{namespace as N,matcher as U,selector as X,selectorAll as q,selection as y,style as g}from"../d3-selection@3.0.0/index.13204b25.js";import{dispatch as F}from"../d3-dispatch@3.0.1/index.be49ca5f.js";import{timer as H,timeout as P,now as J}from"../d3-timer@3.0.1/index.0ee6092b.js";import{interpolateNumber as K,interpolateRgb as z,interpolateString as L,interpolateTransformSvg as Q,interpolateTransformCss as W}from"../d3-interpolate@3.0.1/index.7ed7c7fe.js";import{color as k}from"../d3-color@3.1.0/index.e8c126ff.js";import{easeCubicInOut as Y}from"../d3-ease@3.0.1/index.09153f73.js";var Z=F("start","end","cancel","interrupt"),tt=[],O=0,x=1,E=2,$=3,R=4,T=5,A=6;function b(t,n,e,r,i,u){var o=t.__transition;if(!o)t.__transition={};else if(e in o)return;nt(t,e,{name:n,index:r,group:i,on:Z,tween:tt,time:u.time,delay:u.delay,duration:u.duration,ease:u.ease,timer:null,state:O})}function C(t,n){var e=p(t,n);if(e.state>O)throw new Error("too late; already scheduled");return e}function _(t,n){var e=p(t,n);if(e.state>$)throw new Error("too late; already running");return e}function p(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function nt(t,n,e){var r=t.__transition,i;r[n]=e,e.timer=H(u,0,e.time);function u(l){e.state=x,e.timer.restart(o,e.delay,e.time),e.delay<=l&&o(l-e.delay)}function o(l){var f,v,h,c;if(e.state!==x)return s();for(f in r)if(c=r[f],c.name===e.name){if(c.state===$)return P(o);c.state===R?(c.state=A,c.timer.stop(),c.on.call("interrupt",t,t.__data__,c.index,c.group),delete r[f]):+f<n&&(c.state=A,c.timer.stop(),c.on.call("cancel",t,t.__data__,c.index,c.group),delete r[f])}if(P(function(){e.state===$&&(e.state=R,e.timer.restart(a,e.delay,e.time),a(l))}),e.state=E,e.on.call("start",t,t.__data__,e.index,e.group),e.state===E){for(e.state=$,i=new Array(h=e.tween.length),f=0,v=-1;f<h;++f)(c=e.tween[f].value.call(t,t.__data__,e.index,e.group))&&(i[++v]=c);i.length=v+1}}function a(l){for(var f=l<e.duration?e.ease.call(null,l/e.duration):(e.timer.restart(s),e.state=T,1),v=-1,h=i.length;++v<h;)i[v].call(t,f);e.state===T&&(e.on.call("end",t,t.__data__,e.index,e.group),s())}function s(){e.state=A,e.timer.stop(),delete r[n];for(var l in r)return;delete t.__transition}}function V(t,n){var e=t.__transition,r,i,u=!0,o;if(e){n=n==null?null:n+"";for(o in e){if((r=e[o]).name!==n){u=!1;continue}i=r.state>E&&r.state<T,r.state=A,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete e[o]}u&&delete t.__transition}}function et(t){return this.each(function(){V(this,t)})}function rt(t,n){var e,r;return function(){var i=_(this,t),u=i.tween;if(u!==e){r=e=u;for(var o=0,a=r.length;o<a;++o)if(r[o].name===n){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function it(t,n,e){var r,i;if(typeof e!="function")throw new Error;return function(){var u=_(this,t),o=u.tween;if(o!==r){i=(r=o).slice();for(var a={name:n,value:e},s=0,l=i.length;s<l;++s)if(i[s].name===n){i[s]=a;break}s===l&&i.push(a)}u.tween=i}}function ot(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r=p(this.node(),e).tween,i=0,u=r.length,o;i<u;++i)if((o=r[i]).name===t)return o.value;return null}return this.each((n==null?rt:it)(e,t,n))}function S(t,n,e){var r=t._id;return t.each(function(){var i=_(this,r);(i.value||(i.value={}))[n]=e.apply(this,arguments)}),function(i){return p(i,r).value[n]}}function j(t,n){var e;return(typeof n=="number"?K:n instanceof k?z:(e=k(n))?(n=e,z):L)(t,n)}function ut(t){return function(){this.removeAttribute(t)}}function at(t){return function(){this.removeAttributeNS(t.space,t.local)}}function st(t,n,e){var r,i=e+"",u;return function(){var o=this.getAttribute(t);return o===i?null:o===r?u:u=n(r=o,e)}}function lt(t,n,e){var r,i=e+"",u;return function(){var o=this.getAttributeNS(t.space,t.local);return o===i?null:o===r?u:u=n(r=o,e)}}function ft(t,n,e){var r,i,u;return function(){var o,a=e(this),s;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),s=a+"",o===s?null:o===r&&s===i?u:(i=s,u=n(r=o,a)))}}function ct(t,n,e){var r,i,u;return function(){var o,a=e(this),s;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),s=a+"",o===s?null:o===r&&s===i?u:(i=s,u=n(r=o,a)))}}function ht(t,n){var e=N(t),r=e==="transform"?Q:j;return this.attrTween(t,typeof n=="function"?(e.local?ct:ft)(e,r,S(this,"attr."+t,n)):n==null?(e.local?at:ut)(e):(e.local?lt:st)(e,r,n))}function vt(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function pt(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function _t(t,n){var e,r;function i(){var u=n.apply(this,arguments);return u!==r&&(e=(r=u)&&pt(t,u)),e}return i._value=n,i}function dt(t,n){var e,r;function i(){var u=n.apply(this,arguments);return u!==r&&(e=(r=u)&&vt(t,u)),e}return i._value=n,i}function mt(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;var r=N(t);return this.tween(e,(r.local?_t:dt)(r,n))}function yt(t,n){return function(){C(this,t).delay=+n.apply(this,arguments)}}function gt(t,n){return n=+n,function(){C(this,t).delay=n}}function wt(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?yt:gt)(n,t)):p(this.node(),n).delay}function $t(t,n){return function(){_(this,t).duration=+n.apply(this,arguments)}}function At(t,n){return n=+n,function(){_(this,t).duration=n}}function bt(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?$t:At)(n,t)):p(this.node(),n).duration}function xt(t,n){if(typeof n!="function")throw new Error;return function(){_(this,t).ease=n}}function Et(t){var n=this._id;return arguments.length?this.each(xt(n,t)):p(this.node(),n).ease}function Tt(t,n){return function(){var e=n.apply(this,arguments);if(typeof e!="function")throw new Error;_(this,t).ease=e}}function Ct(t){if(typeof t!="function")throw new Error;return this.each(Tt(this._id,t))}function St(t){typeof t!="function"&&(t=U(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var u=n[i],o=u.length,a=r[i]=[],s,l=0;l<o;++l)(s=u[l])&&t.call(s,s.__data__,l,u)&&a.push(s);return new d(r,this._parents,this._name,this._id)}function Nt(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,u=Math.min(r,i),o=new Array(r),a=0;a<u;++a)for(var s=n[a],l=e[a],f=s.length,v=o[a]=new Array(f),h,c=0;c<f;++c)(h=s[c]||l[c])&&(v[c]=h);for(;a<r;++a)o[a]=n[a];return new d(o,this._parents,this._name,this._id)}function Pt(t){return(t+"").trim().split(/^|\s+/).every(function(n){var e=n.indexOf(".");return e>=0&&(n=n.slice(0,e)),!n||n==="start"})}function zt(t,n,e){var r,i,u=Pt(n)?C:_;return function(){var o=u(this,t),a=o.on;a!==r&&(i=(r=a).copy()).on(n,e),o.on=i}}function kt(t,n){var e=this._id;return arguments.length<2?p(this.node(),e).on.on(t):this.each(zt(e,t,n))}function Ot(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function Rt(){return this.on("end.remove",Ot(this._id))}function Vt(t){var n=this._name,e=this._id;typeof t!="function"&&(t=X(t));for(var r=this._groups,i=r.length,u=new Array(i),o=0;o<i;++o)for(var a=r[o],s=a.length,l=u[o]=new Array(s),f,v,h=0;h<s;++h)(f=a[h])&&(v=t.call(f,f.__data__,h,a))&&("__data__"in f&&(v.__data__=f.__data__),l[h]=v,b(l[h],n,e,h,l,p(f,e)));return new d(u,this._parents,n,e)}function jt(t){var n=this._name,e=this._id;typeof t!="function"&&(t=q(t));for(var r=this._groups,i=r.length,u=[],o=[],a=0;a<i;++a)for(var s=r[a],l=s.length,f,v=0;v<l;++v)if(f=s[v]){for(var h=t.call(f,f.__data__,v,s),c,I=p(f,e),w=0,M=h.length;w<M;++w)(c=h[w])&&b(c,n,e,w,h,I);u.push(h),o.push(f)}return new d(u,o,n,e)}var Bt=y.prototype.constructor;function Dt(){return new Bt(this._groups,this._parents)}function Gt(t,n){var e,r,i;return function(){var u=g(this,t),o=(this.style.removeProperty(t),g(this,t));return u===o?null:u===e&&o===r?i:i=n(e=u,r=o)}}function B(t){return function(){this.style.removeProperty(t)}}function It(t,n,e){var r,i=e+"",u;return function(){var o=g(this,t);return o===i?null:o===r?u:u=n(r=o,e)}}function Mt(t,n,e){var r,i,u;return function(){var o=g(this,t),a=e(this),s=a+"";return a==null&&(s=a=(this.style.removeProperty(t),g(this,t))),o===s?null:o===r&&s===i?u:(i=s,u=n(r=o,a))}}function Ut(t,n){var e,r,i,u="style."+n,o="end."+u,a;return function(){var s=_(this,t),l=s.on,f=s.value[u]==null?a||(a=B(n)):void 0;(l!==e||i!==f)&&(r=(e=l).copy()).on(o,i=f),s.on=r}}function Xt(t,n,e){var r=(t+="")=="transform"?W:j;return n==null?this.styleTween(t,Gt(t,r)).on("end.style."+t,B(t)):typeof n=="function"?this.styleTween(t,Mt(t,r,S(this,"style."+t,n))).each(Ut(this._id,t)):this.styleTween(t,It(t,r,n),e).on("end.style."+t,null)}function qt(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function Ft(t,n,e){var r,i;function u(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&qt(t,o,e)),r}return u._value=n,u}function Ht(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,Ft(t,n,e??""))}function Jt(t){return function(){this.textContent=t}}function Kt(t){return function(){var n=t(this);this.textContent=n??""}}function Lt(t){return this.tween("text",typeof t=="function"?Kt(S(this,"text",t)):Jt(t==null?"":t+""))}function Qt(t){return function(n){this.textContent=t.call(this,n)}}function Wt(t){var n,e;function r(){var i=t.apply(this,arguments);return i!==e&&(n=(e=i)&&Qt(i)),n}return r._value=t,r}function Yt(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,Wt(t))}function Zt(){for(var t=this._name,n=this._id,e=G(),r=this._groups,i=r.length,u=0;u<i;++u)for(var o=r[u],a=o.length,s,l=0;l<a;++l)if(s=o[l]){var f=p(s,n);b(s,t,e,l,o,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new d(r,this._parents,t,e)}function tn(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(u,o){var a={value:o},s={value:function(){--i===0&&u()}};e.each(function(){var l=_(this,r),f=l.on;f!==t&&(n=(t=f).copy(),n._.cancel.push(a),n._.interrupt.push(a),n._.end.push(s)),l.on=n}),i===0&&u()})}var nn=0;function d(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function D(t){return y().transition(t)}function G(){return++nn}var m=y.prototype;d.prototype=D.prototype={constructor:d,select:Vt,selectAll:jt,selectChild:m.selectChild,selectChildren:m.selectChildren,filter:St,merge:Nt,selection:Dt,transition:Zt,call:m.call,nodes:m.nodes,node:m.node,size:m.size,empty:m.empty,each:m.each,on:kt,attr:ht,attrTween:mt,style:Xt,styleTween:Ht,text:Lt,textTween:Yt,remove:Rt,tween:ot,delay:wt,duration:bt,ease:Et,easeVarying:Ct,end:tn,[Symbol.iterator]:m[Symbol.iterator]};var en={time:null,delay:0,duration:250,ease:Y};function rn(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}function on(t){var n,e;t instanceof d?(n=t._id,t=t._name):(n=G(),(e=en).time=J(),t=t==null?null:t+"");for(var r=this._groups,i=r.length,u=0;u<i;++u)for(var o=r[u],a=o.length,s,l=0;l<a;++l)(s=o[l])&&b(s,t,n,l,o,e||rn(s,n));return new d(r,this._parents,t,n)}y.prototype.interrupt=et,y.prototype.transition=on;var un=[null];function an(t,n){var e=t.__transition,r,i;if(e){n=n==null?null:n+"";for(i in e)if((r=e[i]).state>x&&r.name===n)return new d([[t]],un,n,+i)}return null}export{an as active,V as interrupt,D as transition};