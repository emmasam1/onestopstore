function o(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var R=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),N=function(){return Math.random().toString(36).substring(7).split("").join(".")},E={INIT:"@@redux/INIT"+N(),REPLACE:"@@redux/REPLACE"+N(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+N()}};function I(r){if(typeof r!="object"||r===null)return!1;for(var n=r;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(r)===n}function P(r,n,t){var u;if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(o(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(o(1));return t(P)(r,n)}if(typeof r!="function")throw new Error(o(2));var l=r,b=n,s=[],c=s,f=!1;function y(){c===s&&(c=s.slice())}function a(){if(f)throw new Error(o(3));return b}function w(e){if(typeof e!="function")throw new Error(o(4));if(f)throw new Error(o(5));var i=!0;return y(),c.push(e),function(){if(i){if(f)throw new Error(o(6));i=!1,y();var v=c.indexOf(e);c.splice(v,1),s=null}}}function p(e){if(!I(e))throw new Error(o(7));if(typeof e.type>"u")throw new Error(o(8));if(f)throw new Error(o(9));try{f=!0,b=l(b,e)}finally{f=!1}for(var i=s=c,d=0;d<i.length;d++){var v=i[d];v()}return e}function h(e){if(typeof e!="function")throw new Error(o(10));l=e,p({type:E.REPLACE})}function O(){var e,i=w;return e={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(o(11));function g(){v.next&&v.next(a())}g();var m=i(g);return{unsubscribe:m}}},e[R]=function(){return this},e}return p({type:E.INIT}),u={dispatch:p,subscribe:w,getState:a,replaceReducer:h},u[R]=O,u}function x(r){Object.keys(r).forEach(function(n){var t=r[n],u=t(void 0,{type:E.INIT});if(typeof u>"u")throw new Error(o(12));if(typeof t(void 0,{type:E.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(o(13))})}function j(r){for(var n=Object.keys(r),t={},u=0;u<n.length;u++){var l=n[u];typeof r[l]=="function"&&(t[l]=r[l])}var b=Object.keys(t),s;try{x(t)}catch(c){s=c}return function(f,y){if(f===void 0&&(f={}),s)throw s;for(var a=!1,w={},p=0;p<b.length;p++){var h=b[p],O=t[h],e=f[h],i=O(e,y);if(typeof i>"u")throw y&&y.type,new Error(o(14));w[h]=i,a=a||i!==e}return a=a||b.length!==Object.keys(f).length,a?w:f}}export{P as a,j as c};