import{r as s}from"./react-4ec858dc.js";import{R as B,N as x,u as j,a as W,b as U,c as E,D as K}from"./react-router-08bc0490.js";import{c as A,s as D,b as S}from"./@remix-run-f9500c31.js";/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},L.apply(this,arguments)}function N(e,t){if(e==null)return{};var i={},a=Object.keys(e),r,n;for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&(i[r]=e[r]);return i}function F(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _(e,t){return e.button===0&&(!t||t==="_self")&&!F(e)}const H=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],z=["aria-current","caseSensitive","className","end","style","to","children"];function Q(e){let{basename:t,children:i,window:a}=e,r=s.useRef();r.current==null&&(r.current=A({window:a,v5Compat:!0}));let n=r.current,[c,u]=s.useState({action:n.action,location:n.location});return s.useLayoutEffect(()=>n.listen(u),[n]),s.createElement(B,{basename:t,children:i,location:c.location,navigationType:c.action,navigator:n})}const I=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",T=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G=s.forwardRef(function(t,i){let{onClick:a,relative:r,reloadDocument:n,replace:c,state:u,target:p,to:o,preventScrollReset:m}=t,y=N(t,H),{basename:C}=s.useContext(x),v,w=!1;if(typeof o=="string"&&T.test(o)&&(v=o,I)){let l=new URL(window.location.href),h=o.startsWith("//")?new URL(l.protocol+o):new URL(o),R=D(h.pathname,C);h.origin===l.origin&&R!=null?o=R+h.search+h.hash:w=!0}let f=j(o,{relative:r}),g=M(o,{replace:c,state:u,target:p,preventScrollReset:m,relative:r});function d(l){a&&a(l),l.defaultPrevented||g(l)}return s.createElement("a",L({},y,{href:v||f,onClick:w||n?a:d,ref:i,target:p}))}),V=s.forwardRef(function(t,i){let{"aria-current":a="page",caseSensitive:r=!1,className:n="",end:c=!1,style:u,to:p,children:o}=t,m=N(t,z),y=E(p,{relative:m.relative}),C=U(),v=s.useContext(K),{navigator:w}=s.useContext(x),f=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,g=C.pathname,d=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(g=g.toLowerCase(),d=d?d.toLowerCase():null,f=f.toLowerCase());let l=g===f||!c&&g.startsWith(f)&&g.charAt(f.length)==="/",h=d!=null&&(d===f||!c&&d.startsWith(f)&&d.charAt(f.length)==="/"),R=l?a:void 0,b;typeof n=="function"?b=n({isActive:l,isPending:h}):b=[n,l?"active":null,h?"pending":null].filter(Boolean).join(" ");let O=typeof u=="function"?u({isActive:l,isPending:h}):u;return s.createElement(G,L({},m,{"aria-current":R,className:b,ref:i,style:O,to:p}),typeof o=="function"?o({isActive:l,isPending:h}):o)});var P;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(P||(P={}));var k;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(k||(k={}));function M(e,t){let{target:i,replace:a,state:r,preventScrollReset:n,relative:c}=t===void 0?{}:t,u=W(),p=U(),o=E(e,{relative:c});return s.useCallback(m=>{if(_(m,i)){m.preventDefault();let y=a!==void 0?a:S(p)===S(o);u(e,{replace:y,state:r,preventScrollReset:n,relative:c})}},[p,u,o,a,r,i,e,n,c])}export{Q as B,G as L,V as N};
