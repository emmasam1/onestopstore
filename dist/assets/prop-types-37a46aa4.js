var o={},f={get exports(){return o},set exports(t){o=t}},p,u;function m(){if(u)return p;u=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return p=t,p}var a,y;function R(){if(y)return a;y=1;var t=m();function i(){}function s(){}return s.resetWarningCache=i,a=function(){function e(P,v,S,g,_,T){if(T!==t){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function r(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:s,resetWarningCache:i};return n.PropTypes=n,n},a}var h;function l(){return h||(h=1,f.exports=R()()),o}l();export{l as r};