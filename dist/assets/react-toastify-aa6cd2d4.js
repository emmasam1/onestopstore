import{r as p,a as y}from"./react-4ec858dc.js";import{c as B}from"./clsx-1229b3e0.js";const V=e=>typeof e=="number"&&!isNaN(e),H=e=>typeof e=="string",O=e=>typeof e=="function",Y=e=>H(e)||O(e)?e:null,Z=e=>p.isValidElement(e)||H(e)||O(e)||V(e);function le(e,t,r){r===void 0&&(r=300);const{scrollHeight:d,style:c}=e;requestAnimationFrame(()=>{c.minHeight="initial",c.height=d+"px",c.transition=`all ${r}ms`,requestAnimationFrame(()=>{c.height="0",c.padding="0",c.margin="0",setTimeout(t,r)})})}function K(e){let{enter:t,exit:r,appendPosition:d=!1,collapse:c=!0,collapseDuration:i=300}=e;return function(n){let{children:o,position:b,preventExitTransition:E,done:v,nodeRef:g,isIn:I}=n;const a=d?`${t}--${b}`:t,u=d?`${r}--${b}`:r,m=p.useRef(0);return p.useLayoutEffect(()=>{const s=g.current,l=a.split(" "),C=L=>{L.target===g.current&&(s.dispatchEvent(new Event("d")),s.removeEventListener("animationend",C),s.removeEventListener("animationcancel",C),m.current===0&&L.type!=="animationcancel"&&s.classList.remove(...l))};s.classList.add(...l),s.addEventListener("animationend",C),s.addEventListener("animationcancel",C)},[]),p.useEffect(()=>{const s=g.current,l=()=>{s.removeEventListener("animationend",l),c?le(s,v,i):v()};I||(E?l():(m.current=1,s.className+=` ${u}`,s.addEventListener("animationend",l)))},[I]),y.createElement(y.Fragment,null,o)}}function ne(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const w={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const r=this.list.get(e).filter(d=>d!==t);return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const r=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(r)})}},W=e=>{let{theme:t,type:r,...d}=e;return y.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${r})`,...d})},ee={info:function(e){return y.createElement(W,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return y.createElement(W,{...e},y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return y.createElement(W,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return y.createElement(W,{...e},y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return y.createElement("div",{className:"Toastify__spinner"})}};function ce(e){const[,t]=p.useReducer(a=>a+1,0),[r,d]=p.useState([]),c=p.useRef(null),i=p.useRef(new Map).current,n=a=>r.indexOf(a)!==-1,o=p.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:a=>i.get(a)}).current;function b(a){let{containerId:u}=a;const{limit:m}=o.props;!m||u&&o.containerId!==u||(o.count-=o.queue.length,o.queue=[])}function E(a){d(u=>a==null?[]:u.filter(m=>m!==a))}function v(){const{toastContent:a,toastProps:u,staleId:m}=o.queue.shift();I(a,u,m)}function g(a,u){let{delay:m,staleId:s,...l}=u;if(!Z(a)||function(M){return!c.current||o.props.enableMultiContainer&&M.containerId!==o.props.containerId||i.has(M.toastId)&&M.updateId==null}(l))return;const{toastId:C,updateId:L,data:f}=l,{props:h}=o,P=()=>E(C),$=L==null;$&&o.count++;const _={...h,style:h.toastStyle,key:o.toastKey++,...Object.fromEntries(Object.entries(l).filter(M=>{let[x,R]=M;return R!=null})),toastId:C,updateId:L,data:f,closeToast:P,isIn:!1,className:Y(l.className||h.toastClassName),bodyClassName:Y(l.bodyClassName||h.bodyClassName),progressClassName:Y(l.progressClassName||h.progressClassName),autoClose:!l.isLoading&&(D=l.autoClose,q=h.autoClose,D===!1||V(D)&&D>0?D:q),deleteToast(){const M=ne(i.get(C),"removed");i.delete(C),w.emit(4,M);const x=o.queue.length;if(o.count=C==null?o.count-o.displayedToast:o.count-1,o.count<0&&(o.count=0),x>0){const R=C==null?o.props.limit:1;if(x===1||R===1)o.displayedToast++,v();else{const z=R>x?x:R;o.displayedToast=z;for(let N=0;N<z;N++)v()}}else t()}};var D,q;_.iconOut=function(M){let{theme:x,type:R,isLoading:z,icon:N}=M,k=null;const F={theme:x,type:R};return N===!1||(O(N)?k=N(F):p.isValidElement(N)?k=p.cloneElement(N,F):H(N)||V(N)?k=N:z?k=ee.spinner():(U=>U in ee)(R)&&(k=ee[R](F))),k}(_),O(l.onOpen)&&(_.onOpen=l.onOpen),O(l.onClose)&&(_.onClose=l.onClose),_.closeButton=h.closeButton,l.closeButton===!1||Z(l.closeButton)?_.closeButton=l.closeButton:l.closeButton===!0&&(_.closeButton=!Z(h.closeButton)||h.closeButton);let A=a;p.isValidElement(a)&&!H(a.type)?A=p.cloneElement(a,{closeToast:P,toastProps:_,data:f}):O(a)&&(A=a({closeToast:P,toastProps:_,data:f})),h.limit&&h.limit>0&&o.count>h.limit&&$?o.queue.push({toastContent:A,toastProps:_,staleId:s}):V(m)?setTimeout(()=>{I(A,_,s)},m):I(A,_,s)}function I(a,u,m){const{toastId:s}=u;m&&i.delete(m);const l={content:a,props:u};i.set(s,l),d(C=>[...C,s].filter(L=>L!==m)),w.emit(4,ne(l,l.props.updateId==null?"added":"updated"))}return p.useEffect(()=>(o.containerId=e.containerId,w.cancelEmit(3).on(0,g).on(1,a=>c.current&&E(a)).on(5,b).emit(2,o),()=>{i.clear(),w.emit(3,o)}),[]),p.useEffect(()=>{o.props=e,o.isToastActive=n,o.displayedToast=r.length}),{getToastToRender:function(a){const u=new Map,m=Array.from(i.values());return e.newestOnTop&&m.reverse(),m.forEach(s=>{const{position:l}=s.props;u.has(l)||u.set(l,[]),u.get(l).push(s)}),Array.from(u,s=>a(s[0],s[1]))},containerRef:c,isToastActive:n}}function oe(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function se(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function ue(e){const[t,r]=p.useState(!1),[d,c]=p.useState(!1),i=p.useRef(null),n=p.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,o=p.useRef(e),{autoClose:b,pauseOnHover:E,closeToast:v,onClick:g,closeOnClick:I}=e;function a(f){if(e.draggable){f.nativeEvent.type==="touchstart"&&f.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",l),document.addEventListener("mouseup",C),document.addEventListener("touchmove",l),document.addEventListener("touchend",C);const h=i.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=h.getBoundingClientRect(),h.style.transition="",n.x=oe(f.nativeEvent),n.y=se(f.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=h.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=h.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function u(f){if(n.boundingRect){const{top:h,bottom:P,left:$,right:_}=n.boundingRect;f.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=$&&n.x<=_&&n.y>=h&&n.y<=P?s():m()}}function m(){r(!0)}function s(){r(!1)}function l(f){const h=i.current;n.canDrag&&h&&(n.didMove=!0,t&&s(),n.x=oe(f),n.y=se(f),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),h.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,h.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function C(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",C);const f=i.current;if(n.canDrag&&n.didMove&&f){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return c(!0),void e.closeToast();f.style.transition="transform 0.2s, opacity 0.2s",f.style.transform=`translate${e.draggableDirection}(0)`,f.style.opacity="1"}}p.useEffect(()=>{o.current=e}),p.useEffect(()=>(i.current&&i.current.addEventListener("d",m,{once:!0}),O(e.onOpen)&&e.onOpen(p.isValidElement(e.children)&&e.children.props),()=>{const f=o.current;O(f.onClose)&&f.onClose(p.isValidElement(f.children)&&f.children.props)}),[]),p.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||s(),window.addEventListener("focus",m),window.addEventListener("blur",s)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",m),window.removeEventListener("blur",s))}),[e.pauseOnFocusLoss]);const L={onMouseDown:a,onTouchStart:a,onMouseUp:u,onTouchEnd:u};return b&&E&&(L.onMouseEnter=s,L.onMouseLeave=m),I&&(L.onClick=f=>{g&&g(f),n.canCloseOnClick&&v()}),{playToast:m,pauseToast:s,isRunning:t,preventExitTransition:d,toastRef:i,eventHandlers:L}}function re(e){let{closeToast:t,theme:r,ariaLabel:d="close"}=e;return y.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:c=>{c.stopPropagation(),t(c)},"aria-label":d},y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function de(e){let{delay:t,isRunning:r,closeToast:d,type:c="default",hide:i,className:n,style:o,controlledProgress:b,progress:E,rtl:v,isIn:g,theme:I}=e;const a=i||b&&E===0,u={...o,animationDuration:`${t}ms`,animationPlayState:r?"running":"paused",opacity:a?0:1};b&&(u.transform=`scaleX(${E})`);const m=B("Toastify__progress-bar",b?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${I}`,`Toastify__progress-bar--${c}`,{"Toastify__progress-bar--rtl":v}),s=O(n)?n({rtl:v,type:c,defaultClassName:m}):B(m,n);return y.createElement("div",{role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:s,style:u,[b&&E>=1?"onTransitionEnd":"onAnimationEnd"]:b&&E<1?null:()=>{g&&d()}})}const me=e=>{const{isRunning:t,preventExitTransition:r,toastRef:d,eventHandlers:c}=ue(e),{closeButton:i,children:n,autoClose:o,onClick:b,type:E,hideProgressBar:v,closeToast:g,transition:I,position:a,className:u,style:m,bodyClassName:s,bodyStyle:l,progressClassName:C,progressStyle:L,updateId:f,role:h,progress:P,rtl:$,toastId:_,deleteToast:D,isIn:q,isLoading:A,iconOut:M,closeOnClick:x,theme:R}=e,z=B("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${E}`,{"Toastify__toast--rtl":$},{"Toastify__toast--close-on-click":x}),N=O(u)?u({rtl:$,position:a,type:E,defaultClassName:z}):B(z,u),k=!!P||!o,F={closeToast:g,type:E,theme:R};let U=null;return i===!1||(U=O(i)?i(F):p.isValidElement(i)?p.cloneElement(i,F):re(F)),y.createElement(I,{isIn:q,done:D,position:a,preventExitTransition:r,nodeRef:d},y.createElement("div",{id:_,onClick:b,className:N,...c,style:m,ref:d},y.createElement("div",{...q&&{role:h},className:O(s)?s({type:E}):B("Toastify__toast-body",s),style:l},M!=null&&y.createElement("div",{className:B("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},M),y.createElement("div",null,n)),U,y.createElement(de,{...f&&!k?{key:`pb-${f}`}:{},rtl:$,theme:R,delay:o,isRunning:t,isIn:q,closeToast:g,hide:v,type:E,style:L,className:C,controlledProgress:k,progress:P||0})))},J=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},pe=K(J("bounce",!0));K(J("slide",!0));K(J("zoom"));K(J("flip"));const ae=p.forwardRef((e,t)=>{const{getToastToRender:r,containerRef:d,isToastActive:c}=ce(e),{className:i,style:n,rtl:o,containerId:b}=e;function E(v){const g=B("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":o});return O(i)?i({position:v,rtl:o,defaultClassName:g}):B(g,Y(i))}return p.useEffect(()=>{t&&(t.current=d.current)},[]),y.createElement("div",{ref:d,className:"Toastify",id:b},r((v,g)=>{const I=g.length?{...n}:{...n,pointerEvents:"none"};return y.createElement("div",{className:E(v),style:I,key:`container-${v}`},g.map((a,u)=>{let{content:m,props:s}=a;return y.createElement(me,{...s,isIn:c(s.toastId),style:{...s.style,"--nth":u+1,"--len":g.length},key:`toast-${s.key}`},m)}))}))});ae.displayName="ToastContainer",ae.defaultProps={position:"top-right",transition:pe,autoClose:5e3,closeButton:re,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let te,S=new Map,Q=[],fe=1;function ie(){return""+fe++}function ge(e){return e&&(H(e.toastId)||V(e.toastId))?e.toastId:ie()}function G(e,t){return S.size>0?w.emit(0,e,t):Q.push({content:e,options:t}),t.toastId}function j(e,t){return{...t,type:t&&t.type||e,toastId:ge(t)}}function X(e){return(t,r)=>G(t,j(e,r))}function T(e,t){return G(e,j("default",t))}T.loading=(e,t)=>G(e,j("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),T.promise=function(e,t,r){let d,{pending:c,error:i,success:n}=t;c&&(d=H(c)?T.loading(c,r):T.loading(c.render,{...r,...c}));const o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},b=(v,g,I)=>{if(g==null)return void T.dismiss(d);const a={type:v,...o,...r,data:I},u=H(g)?{render:g}:g;return d?T.update(d,{...a,...u}):T(u.render,{...a,...u}),I},E=O(e)?e():e;return E.then(v=>b("success",n,v)).catch(v=>b("error",i,v)),E},T.success=X("success"),T.info=X("info"),T.error=X("error"),T.warning=X("warning"),T.warn=T.warning,T.dark=(e,t)=>G(e,j("default",{theme:"dark",...t})),T.dismiss=e=>{S.size>0?w.emit(1,e):Q=Q.filter(t=>e!=null&&t.options.toastId!==e)},T.clearWaitingQueue=function(e){return e===void 0&&(e={}),w.emit(5,e)},T.isActive=e=>{let t=!1;return S.forEach(r=>{r.isToastActive&&r.isToastActive(e)&&(t=!0)}),t},T.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const r=function(d,c){let{containerId:i}=c;const n=S.get(i||te);return n&&n.getToast(d)}(e,t);if(r){const{props:d,content:c}=r,i={delay:100,...d,...t,toastId:t.toastId||e,updateId:ie()};i.toastId!==e&&(i.staleId=e);const n=i.render||c;delete i.render,G(n,i)}},0)},T.done=e=>{T.update(e,{progress:1})},T.onChange=e=>(w.on(4,e),()=>{w.off(4,e)}),T.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},T.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},w.on(2,e=>{te=e.containerId||e,S.set(te,e),Q.forEach(t=>{w.emit(0,t.content,t.options)}),Q=[]}).on(3,e=>{S.delete(e.containerId||e),S.size===0&&w.off(0).off(1).off(5)});export{T as Q,ae as k};
