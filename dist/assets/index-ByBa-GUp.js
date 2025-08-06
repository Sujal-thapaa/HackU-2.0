var lw=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var kO=lw((VO,jl)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var p_={exports:{}},nd={},m_={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fl=Symbol.for("react.element"),cw=Symbol.for("react.portal"),uw=Symbol.for("react.fragment"),dw=Symbol.for("react.strict_mode"),fw=Symbol.for("react.profiler"),hw=Symbol.for("react.provider"),pw=Symbol.for("react.context"),mw=Symbol.for("react.forward_ref"),gw=Symbol.for("react.suspense"),vw=Symbol.for("react.memo"),xw=Symbol.for("react.lazy"),m0=Symbol.iterator;function yw(t){return t===null||typeof t!="object"?null:(t=m0&&t[m0]||t["@@iterator"],typeof t=="function"?t:null)}var g_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v_=Object.assign,x_={};function Qo(t,e,n){this.props=t,this.context=e,this.refs=x_,this.updater=n||g_}Qo.prototype.isReactComponent={};Qo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function y_(){}y_.prototype=Qo.prototype;function fm(t,e,n){this.props=t,this.context=e,this.refs=x_,this.updater=n||g_}var hm=fm.prototype=new y_;hm.constructor=fm;v_(hm,Qo.prototype);hm.isPureReactComponent=!0;var g0=Array.isArray,__=Object.prototype.hasOwnProperty,pm={current:null},S_={key:!0,ref:!0,__self:!0,__source:!0};function M_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)__.call(e,i)&&!S_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fl,type:t,key:s,ref:o,props:r,_owner:pm.current}}function _w(t,e){return{$$typeof:Fl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fl}function Sw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var v0=/\/+/g;function Dd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sw(""+t.key):e.toString(36)}function $c(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fl:case cw:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Dd(o,0):i,g0(r)?(n="",t!=null&&(n=t.replace(v0,"$&/")+"/"),$c(r,e,n,"",function(c){return c})):r!=null&&(mm(r)&&(r=_w(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(v0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",g0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Dd(s,a);o+=$c(s,e,n,l,r)}else if(l=yw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Dd(s,a++),o+=$c(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ql(t,e,n){if(t==null)return t;var i=[],r=0;return $c(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Mw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bn={current:null},Kc={transition:null},Ew={ReactCurrentDispatcher:bn,ReactCurrentBatchConfig:Kc,ReactCurrentOwner:pm};function E_(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:ql,forEach:function(t,e,n){ql(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ql(t,function(){e++}),e},toArray:function(t){return ql(t,function(e){return e})||[]},only:function(t){if(!mm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};rt.Component=Qo;rt.Fragment=uw;rt.Profiler=fw;rt.PureComponent=fm;rt.StrictMode=dw;rt.Suspense=gw;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ew;rt.act=E_;rt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=v_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pm.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)__.call(e,l)&&!S_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Fl,type:t.type,key:r,ref:s,props:i,_owner:o}};rt.createContext=function(t){return t={$$typeof:pw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hw,_context:t},t.Consumer=t};rt.createElement=M_;rt.createFactory=function(t){var e=M_.bind(null,t);return e.type=t,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(t){return{$$typeof:mw,render:t}};rt.isValidElement=mm;rt.lazy=function(t){return{$$typeof:xw,_payload:{_status:-1,_result:t},_init:Mw}};rt.memo=function(t,e){return{$$typeof:vw,type:t,compare:e===void 0?null:e}};rt.startTransition=function(t){var e=Kc.transition;Kc.transition={};try{t()}finally{Kc.transition=e}};rt.unstable_act=E_;rt.useCallback=function(t,e){return bn.current.useCallback(t,e)};rt.useContext=function(t){return bn.current.useContext(t)};rt.useDebugValue=function(){};rt.useDeferredValue=function(t){return bn.current.useDeferredValue(t)};rt.useEffect=function(t,e){return bn.current.useEffect(t,e)};rt.useId=function(){return bn.current.useId()};rt.useImperativeHandle=function(t,e,n){return bn.current.useImperativeHandle(t,e,n)};rt.useInsertionEffect=function(t,e){return bn.current.useInsertionEffect(t,e)};rt.useLayoutEffect=function(t,e){return bn.current.useLayoutEffect(t,e)};rt.useMemo=function(t,e){return bn.current.useMemo(t,e)};rt.useReducer=function(t,e,n){return bn.current.useReducer(t,e,n)};rt.useRef=function(t){return bn.current.useRef(t)};rt.useState=function(t){return bn.current.useState(t)};rt.useSyncExternalStore=function(t,e,n){return bn.current.useSyncExternalStore(t,e,n)};rt.useTransition=function(){return bn.current.useTransition()};rt.version="18.3.1";m_.exports=rt;var J=m_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ww=J,Tw=Symbol.for("react.element"),bw=Symbol.for("react.fragment"),Aw=Object.prototype.hasOwnProperty,Cw=ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rw={key:!0,ref:!0,__self:!0,__source:!0};function w_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Aw.call(e,i)&&!Rw.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Tw,type:t,key:s,ref:o,props:r,_owner:Cw.current}}nd.Fragment=bw;nd.jsx=w_;nd.jsxs=w_;p_.exports=nd;var v=p_.exports,T_={exports:{}},$n={},b_={exports:{}},A_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,W){var N=F.length;F.push(W);e:for(;0<N;){var P=N-1>>>1,ee=F[P];if(0<r(ee,W))F[P]=W,F[N]=ee,N=P;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var W=F[0],N=F.pop();if(N!==W){F[0]=N;e:for(var P=0,ee=F.length,fe=ee>>>1;P<fe;){var V=2*(P+1)-1,Y=F[V],re=V+1,$=F[re];if(0>r(Y,N))re<ee&&0>r($,Y)?(F[P]=$,F[re]=N,P=re):(F[P]=Y,F[V]=N,P=V);else if(re<ee&&0>r($,N))F[P]=$,F[re]=N,P=re;else break e}}return W}function r(F,W){var N=F.sortIndex-W.sortIndex;return N!==0?N:F.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,h=!1,m=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=F)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function S(F){if(y=!1,x(F),!m)if(n(l)!==null)m=!0,q(b);else{var W=n(c);W!==null&&K(S,W.startTime-F)}}function b(F,W){m=!1,y&&(y=!1,p(R),R=-1),h=!0;var N=f;try{for(x(W),d=n(l);d!==null&&(!(d.expirationTime>W)||F&&!L());){var P=d.callback;if(typeof P=="function"){d.callback=null,f=d.priorityLevel;var ee=P(d.expirationTime<=W);W=t.unstable_now(),typeof ee=="function"?d.callback=ee:d===n(l)&&i(l),x(W)}else i(l);d=n(l)}if(d!==null)var fe=!0;else{var V=n(c);V!==null&&K(S,V.startTime-W),fe=!1}return fe}finally{d=null,f=N,h=!1}}var C=!1,A=null,R=-1,T=5,M=-1;function L(){return!(t.unstable_now()-M<T)}function X(){if(A!==null){var F=t.unstable_now();M=F;var W=!0;try{W=A(!0,F)}finally{W?H():(C=!1,A=null)}}else C=!1}var H;if(typeof _=="function")H=function(){_(X)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=X,H=function(){ne.postMessage(null)}}else H=function(){g(X,0)};function q(F){A=F,C||(C=!0,H())}function K(F,W){R=g(function(){F(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,q(b))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var N=f;f=W;try{return F()}finally{f=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var N=f;f=F;try{return W()}finally{f=N}},t.unstable_scheduleCallback=function(F,W,N){var P=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?P+N:P):N=P,F){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=N+ee,F={id:u++,callback:W,priorityLevel:F,startTime:N,expirationTime:ee,sortIndex:-1},N>P?(F.sortIndex=N,e(c,F),n(l)===null&&F===n(c)&&(y?(p(R),R=-1):y=!0,K(S,N-P))):(F.sortIndex=ee,e(l,F),m||h||(m=!0,q(b))),F},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(F){var W=f;return function(){var N=f;f=W;try{return F.apply(this,arguments)}finally{f=N}}}})(A_);b_.exports=A_;var Pw=b_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nw=J,Yn=Pw;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C_=new Set,el={};function Ls(t,e){Fo(t,e),Fo(t+"Capture",e)}function Fo(t,e){for(el[t]=e,t=0;t<e.length;t++)C_.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lh=Object.prototype.hasOwnProperty,Dw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x0={},y0={};function Iw(t){return lh.call(y0,t)?!0:lh.call(x0,t)?!1:Dw.test(t)?y0[t]=!0:(x0[t]=!0,!1)}function Lw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fw(t,e,n,i){if(e===null||typeof e>"u"||Lw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function An(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ln[t]=new An(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ln[e]=new An(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ln[t]=new An(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ln[t]=new An(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ln[t]=new An(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ln[t]=new An(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ln[t]=new An(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ln[t]=new An(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ln[t]=new An(t,5,!1,t.toLowerCase(),null,!1,!1)});var gm=/[\-:]([a-z])/g;function vm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gm,vm);ln[e]=new An(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gm,vm);ln[e]=new An(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gm,vm);ln[e]=new An(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ln[t]=new An(t,1,!1,t.toLowerCase(),null,!1,!1)});ln.xlinkHref=new An("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ln[t]=new An(t,1,!1,t.toLowerCase(),null,!0,!0)});function xm(t,e,n,i){var r=ln.hasOwnProperty(e)?ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fw(e,n,r,i)&&(n=null),i||r===null?Iw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pr=Nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zl=Symbol.for("react.element"),io=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),ym=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),R_=Symbol.for("react.provider"),P_=Symbol.for("react.context"),_m=Symbol.for("react.forward_ref"),uh=Symbol.for("react.suspense"),dh=Symbol.for("react.suspense_list"),Sm=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),N_=Symbol.for("react.offscreen"),_0=Symbol.iterator;function fa(t){return t===null||typeof t!="object"?null:(t=_0&&t[_0]||t["@@iterator"],typeof t=="function"?t:null)}var Ut=Object.assign,Id;function Ca(t){if(Id===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Id=e&&e[1]||""}return`
`+Id+t}var Ld=!1;function Fd(t,e){if(!t||Ld)return"";Ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ld=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ca(t):""}function kw(t){switch(t.tag){case 5:return Ca(t.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 2:case 15:return t=Fd(t.type,!1),t;case 11:return t=Fd(t.type.render,!1),t;case 1:return t=Fd(t.type,!0),t;default:return""}}function fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ro:return"Fragment";case io:return"Portal";case ch:return"Profiler";case ym:return"StrictMode";case uh:return"Suspense";case dh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P_:return(t.displayName||"Context")+".Consumer";case R_:return(t._context.displayName||"Context")+".Provider";case _m:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sm:return e=t.displayName||null,e!==null?e:fh(t.type)||"Memo";case br:e=t._payload,t=t._init;try{return fh(t(e))}catch{}}return null}function Uw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fh(e);case 8:return e===ym?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function D_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ow(t){var e=D_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jl(t){t._valueTracker||(t._valueTracker=Ow(t))}function I_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=D_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hh(t,e){var n=e.checked;return Ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function S0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function L_(t,e){e=e.checked,e!=null&&xm(t,"checked",e,!1)}function ph(t,e){L_(t,e);var n=Gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&mh(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function M0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mh(t,e,n){(e!=="number"||yu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ra=Array.isArray;function To(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function E0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Ra(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function F_(t,e){var n=Gr(e.value),i=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function w0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function k_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?k_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ql,U_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ql=Ql||document.createElement("div"),Ql.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ql.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bw=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(t){Bw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fa[e]=Fa[t]})});function O_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fa.hasOwnProperty(t)&&Fa[t]?(""+e).trim():e+"px"}function B_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=O_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Vw=Ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xh(t,e){if(e){if(Vw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function yh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _h=null;function Mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sh=null,bo=null,Ao=null;function T0(t){if(t=Ol(t)){if(typeof Sh!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=ad(e),Sh(t.stateNode,t.type,e))}}function V_(t){bo?Ao?Ao.push(t):Ao=[t]:bo=t}function z_(){if(bo){var t=bo,e=Ao;if(Ao=bo=null,T0(t),e)for(t=0;t<e.length;t++)T0(e[t])}}function H_(t,e){return t(e)}function G_(){}var kd=!1;function j_(t,e,n){if(kd)return t(e,n);kd=!0;try{return H_(t,e,n)}finally{kd=!1,(bo!==null||Ao!==null)&&(G_(),z_())}}function nl(t,e){var n=t.stateNode;if(n===null)return null;var i=ad(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Mh=!1;if(cr)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){Mh=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{Mh=!1}function zw(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ka=!1,_u=null,Su=!1,Eh=null,Hw={onError:function(t){ka=!0,_u=t}};function Gw(t,e,n,i,r,s,o,a,l){ka=!1,_u=null,zw.apply(Hw,arguments)}function jw(t,e,n,i,r,s,o,a,l){if(Gw.apply(this,arguments),ka){if(ka){var c=_u;ka=!1,_u=null}else throw Error(ce(198));Su||(Su=!0,Eh=c)}}function Fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function b0(t){if(Fs(t)!==t)throw Error(ce(188))}function Ww(t){var e=t.alternate;if(!e){if(e=Fs(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return b0(r),t;if(s===i)return b0(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function X_(t){return t=Ww(t),t!==null?Y_(t):null}function Y_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Y_(t);if(e!==null)return e;t=t.sibling}return null}var $_=Yn.unstable_scheduleCallback,A0=Yn.unstable_cancelCallback,Xw=Yn.unstable_shouldYield,Yw=Yn.unstable_requestPaint,jt=Yn.unstable_now,$w=Yn.unstable_getCurrentPriorityLevel,Em=Yn.unstable_ImmediatePriority,K_=Yn.unstable_UserBlockingPriority,Mu=Yn.unstable_NormalPriority,Kw=Yn.unstable_LowPriority,q_=Yn.unstable_IdlePriority,id=null,Ui=null;function qw(t){if(Ui&&typeof Ui.onCommitFiberRoot=="function")try{Ui.onCommitFiberRoot(id,t,void 0,(t.current.flags&128)===128)}catch{}}var wi=Math.clz32?Math.clz32:Qw,Zw=Math.log,Jw=Math.LN2;function Qw(t){return t>>>=0,t===0?32:31-(Zw(t)/Jw|0)|0}var ec=64,tc=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Pa(a):(s&=o,s!==0&&(i=Pa(s)))}else o=n&~r,o!==0?i=Pa(o):s!==0&&(i=Pa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-wi(e),r=1<<n,i|=t[n],e&=~r;return i}function eT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=eT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function wh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Z_(){var t=ec;return ec<<=1,!(ec&4194240)&&(ec=64),t}function Ud(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function kl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wi(e),t[e]=n}function nT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-wi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function wm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-wi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var mt=0;function J_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Q_,Tm,e1,t1,n1,Th=!1,nc=[],Ir=null,Lr=null,Fr=null,il=new Map,rl=new Map,Cr=[],iT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function C0(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(e.pointerId)}}function pa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ol(e),e!==null&&Tm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function rT(t,e,n,i,r){switch(e){case"focusin":return Ir=pa(Ir,t,e,n,i,r),!0;case"dragenter":return Lr=pa(Lr,t,e,n,i,r),!0;case"mouseover":return Fr=pa(Fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return il.set(s,pa(il.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,rl.set(s,pa(rl.get(s)||null,t,e,n,i,r)),!0}return!1}function i1(t){var e=ms(t.target);if(e!==null){var n=Fs(e);if(n!==null){if(e=n.tag,e===13){if(e=W_(n),e!==null){t.blockedOn=e,n1(t.priority,function(){e1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_h=i,n.target.dispatchEvent(i),_h=null}else return e=Ol(n),e!==null&&Tm(e),t.blockedOn=n,!1;e.shift()}return!0}function R0(t,e,n){qc(t)&&n.delete(e)}function sT(){Th=!1,Ir!==null&&qc(Ir)&&(Ir=null),Lr!==null&&qc(Lr)&&(Lr=null),Fr!==null&&qc(Fr)&&(Fr=null),il.forEach(R0),rl.forEach(R0)}function ma(t,e){t.blockedOn===e&&(t.blockedOn=null,Th||(Th=!0,Yn.unstable_scheduleCallback(Yn.unstable_NormalPriority,sT)))}function sl(t){function e(r){return ma(r,t)}if(0<nc.length){ma(nc[0],t);for(var n=1;n<nc.length;n++){var i=nc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ir!==null&&ma(Ir,t),Lr!==null&&ma(Lr,t),Fr!==null&&ma(Fr,t),il.forEach(e),rl.forEach(e),n=0;n<Cr.length;n++)i=Cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)i1(n),n.blockedOn===null&&Cr.shift()}var Co=pr.ReactCurrentBatchConfig,wu=!0;function oT(t,e,n,i){var r=mt,s=Co.transition;Co.transition=null;try{mt=1,bm(t,e,n,i)}finally{mt=r,Co.transition=s}}function aT(t,e,n,i){var r=mt,s=Co.transition;Co.transition=null;try{mt=4,bm(t,e,n,i)}finally{mt=r,Co.transition=s}}function bm(t,e,n,i){if(wu){var r=bh(t,e,n,i);if(r===null)Yd(t,e,i,Tu,n),C0(t,i);else if(rT(r,t,e,n,i))i.stopPropagation();else if(C0(t,i),e&4&&-1<iT.indexOf(t)){for(;r!==null;){var s=Ol(r);if(s!==null&&Q_(s),s=bh(t,e,n,i),s===null&&Yd(t,e,i,Tu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Yd(t,e,i,null,n)}}var Tu=null;function bh(t,e,n,i){if(Tu=null,t=Mm(i),t=ms(t),t!==null)if(e=Fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tu=t,null}function r1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($w()){case Em:return 1;case K_:return 4;case Mu:case Kw:return 16;case q_:return 536870912;default:return 16}default:return 16}}var Nr=null,Am=null,Zc=null;function s1(){if(Zc)return Zc;var t,e=Am,n=e.length,i,r="value"in Nr?Nr.value:Nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Zc=r.slice(t,1<i?1-i:void 0)}function Jc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ic(){return!0}function P0(){return!1}function Kn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ic:P0,this.isPropagationStopped=P0,this}return Ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){},isPersistent:ic}),e}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cm=Kn(ea),Ul=Ut({},ea,{view:0,detail:0}),lT=Kn(Ul),Od,Bd,ga,rd=Ut({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(Od=t.screenX-ga.screenX,Bd=t.screenY-ga.screenY):Bd=Od=0,ga=t),Od)},movementY:function(t){return"movementY"in t?t.movementY:Bd}}),N0=Kn(rd),cT=Ut({},rd,{dataTransfer:0}),uT=Kn(cT),dT=Ut({},Ul,{relatedTarget:0}),Vd=Kn(dT),fT=Ut({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),hT=Kn(fT),pT=Ut({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mT=Kn(pT),gT=Ut({},ea,{data:0}),D0=Kn(gT),vT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _T(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yT[t])?!!e[t]:!1}function Rm(){return _T}var ST=Ut({},Ul,{key:function(t){if(t.key){var e=vT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rm,charCode:function(t){return t.type==="keypress"?Jc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MT=Kn(ST),ET=Ut({},rd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I0=Kn(ET),wT=Ut({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rm}),TT=Kn(wT),bT=Ut({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),AT=Kn(bT),CT=Ut({},rd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RT=Kn(CT),PT=[9,13,27,32],Pm=cr&&"CompositionEvent"in window,Ua=null;cr&&"documentMode"in document&&(Ua=document.documentMode);var NT=cr&&"TextEvent"in window&&!Ua,o1=cr&&(!Pm||Ua&&8<Ua&&11>=Ua),L0=" ",F0=!1;function a1(t,e){switch(t){case"keyup":return PT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var so=!1;function DT(t,e){switch(t){case"compositionend":return l1(e);case"keypress":return e.which!==32?null:(F0=!0,L0);case"textInput":return t=e.data,t===L0&&F0?null:t;default:return null}}function IT(t,e){if(so)return t==="compositionend"||!Pm&&a1(t,e)?(t=s1(),Zc=Am=Nr=null,so=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o1&&e.locale!=="ko"?null:e.data;default:return null}}var LT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function k0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LT[t.type]:e==="textarea"}function c1(t,e,n,i){V_(i),e=bu(e,"onChange"),0<e.length&&(n=new Cm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oa=null,ol=null;function FT(t){_1(t,0)}function sd(t){var e=lo(t);if(I_(e))return t}function kT(t,e){if(t==="change")return e}var u1=!1;if(cr){var zd;if(cr){var Hd="oninput"in document;if(!Hd){var U0=document.createElement("div");U0.setAttribute("oninput","return;"),Hd=typeof U0.oninput=="function"}zd=Hd}else zd=!1;u1=zd&&(!document.documentMode||9<document.documentMode)}function O0(){Oa&&(Oa.detachEvent("onpropertychange",d1),ol=Oa=null)}function d1(t){if(t.propertyName==="value"&&sd(ol)){var e=[];c1(e,ol,t,Mm(t)),j_(FT,e)}}function UT(t,e,n){t==="focusin"?(O0(),Oa=e,ol=n,Oa.attachEvent("onpropertychange",d1)):t==="focusout"&&O0()}function OT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sd(ol)}function BT(t,e){if(t==="click")return sd(e)}function VT(t,e){if(t==="input"||t==="change")return sd(e)}function zT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ai=typeof Object.is=="function"?Object.is:zT;function al(t,e){if(Ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!lh.call(e,r)||!Ai(t[r],e[r]))return!1}return!0}function B0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function V0(t,e){var n=B0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=B0(n)}}function f1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?f1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function h1(){for(var t=window,e=yu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yu(t.document)}return e}function Nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HT(t){var e=h1(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&f1(n.ownerDocument.documentElement,n)){if(i!==null&&Nm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=V0(n,s);var o=V0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var GT=cr&&"documentMode"in document&&11>=document.documentMode,oo=null,Ah=null,Ba=null,Ch=!1;function z0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ch||oo==null||oo!==yu(i)||(i=oo,"selectionStart"in i&&Nm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ba&&al(Ba,i)||(Ba=i,i=bu(Ah,"onSelect"),0<i.length&&(e=new Cm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=oo)))}function rc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ao={animationend:rc("Animation","AnimationEnd"),animationiteration:rc("Animation","AnimationIteration"),animationstart:rc("Animation","AnimationStart"),transitionend:rc("Transition","TransitionEnd")},Gd={},p1={};cr&&(p1=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function od(t){if(Gd[t])return Gd[t];if(!ao[t])return t;var e=ao[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in p1)return Gd[t]=e[n];return t}var m1=od("animationend"),g1=od("animationiteration"),v1=od("animationstart"),x1=od("transitionend"),y1=new Map,H0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,e){y1.set(t,e),Ls(e,[t])}for(var jd=0;jd<H0.length;jd++){var Wd=H0[jd],jT=Wd.toLowerCase(),WT=Wd[0].toUpperCase()+Wd.slice(1);$r(jT,"on"+WT)}$r(m1,"onAnimationEnd");$r(g1,"onAnimationIteration");$r(v1,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(x1,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);Ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function G0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jw(i,e,void 0,t),t.currentTarget=null}function _1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;G0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;G0(r,a,c),s=l}}}if(Su)throw t=Eh,Su=!1,Eh=null,t}function wt(t,e){var n=e[Ih];n===void 0&&(n=e[Ih]=new Set);var i=t+"__bubble";n.has(i)||(S1(e,t,2,!1),n.add(i))}function Xd(t,e,n){var i=0;e&&(i|=4),S1(n,t,i,e)}var sc="_reactListening"+Math.random().toString(36).slice(2);function ll(t){if(!t[sc]){t[sc]=!0,C_.forEach(function(n){n!=="selectionchange"&&(XT.has(n)||Xd(n,!1,t),Xd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sc]||(e[sc]=!0,Xd("selectionchange",!1,e))}}function S1(t,e,n,i){switch(r1(e)){case 1:var r=oT;break;case 4:r=aT;break;default:r=bm}n=r.bind(null,e,n,t),r=void 0,!Mh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ms(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}j_(function(){var c=s,u=Mm(n),d=[];e:{var f=y1.get(t);if(f!==void 0){var h=Cm,m=t;switch(t){case"keypress":if(Jc(n)===0)break e;case"keydown":case"keyup":h=MT;break;case"focusin":m="focus",h=Vd;break;case"focusout":m="blur",h=Vd;break;case"beforeblur":case"afterblur":h=Vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=N0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=uT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=TT;break;case m1:case g1:case v1:h=hT;break;case x1:h=AT;break;case"scroll":h=lT;break;case"wheel":h=RT;break;case"copy":case"cut":case"paste":h=mT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=I0}var y=(e&4)!==0,g=!y&&t==="scroll",p=y?f!==null?f+"Capture":null:f;y=[];for(var _=c,x;_!==null;){x=_;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,p!==null&&(S=nl(_,p),S!=null&&y.push(cl(_,S,x)))),g)break;_=_.return}0<y.length&&(f=new h(f,m,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&n!==_h&&(m=n.relatedTarget||n.fromElement)&&(ms(m)||m[ur]))break e;if((h||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=c,m=m?ms(m):null,m!==null&&(g=Fs(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=c),h!==m)){if(y=N0,S="onMouseLeave",p="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=I0,S="onPointerLeave",p="onPointerEnter",_="pointer"),g=h==null?f:lo(h),x=m==null?f:lo(m),f=new y(S,_+"leave",h,n,u),f.target=g,f.relatedTarget=x,S=null,ms(u)===c&&(y=new y(p,_+"enter",m,n,u),y.target=x,y.relatedTarget=g,S=y),g=S,h&&m)t:{for(y=h,p=m,_=0,x=y;x;x=Bs(x))_++;for(x=0,S=p;S;S=Bs(S))x++;for(;0<_-x;)y=Bs(y),_--;for(;0<x-_;)p=Bs(p),x--;for(;_--;){if(y===p||p!==null&&y===p.alternate)break t;y=Bs(y),p=Bs(p)}y=null}else y=null;h!==null&&j0(d,f,h,y,!1),m!==null&&g!==null&&j0(d,g,m,y,!0)}}e:{if(f=c?lo(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var b=kT;else if(k0(f))if(u1)b=VT;else{b=OT;var C=UT}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=BT);if(b&&(b=b(t,c))){c1(d,b,n,u);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&mh(f,"number",f.value)}switch(C=c?lo(c):window,t){case"focusin":(k0(C)||C.contentEditable==="true")&&(oo=C,Ah=c,Ba=null);break;case"focusout":Ba=Ah=oo=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,z0(d,n,u);break;case"selectionchange":if(GT)break;case"keydown":case"keyup":z0(d,n,u)}var A;if(Pm)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else so?a1(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(o1&&n.locale!=="ko"&&(so||R!=="onCompositionStart"?R==="onCompositionEnd"&&so&&(A=s1()):(Nr=u,Am="value"in Nr?Nr.value:Nr.textContent,so=!0)),C=bu(c,R),0<C.length&&(R=new D0(R,t,null,n,u),d.push({event:R,listeners:C}),A?R.data=A:(A=l1(n),A!==null&&(R.data=A)))),(A=NT?DT(t,n):IT(t,n))&&(c=bu(c,"onBeforeInput"),0<c.length&&(u=new D0("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}_1(d,e)})}function cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=nl(t,n),s!=null&&i.unshift(cl(t,s,r)),s=nl(t,e),s!=null&&i.push(cl(t,s,r))),t=t.return}return i}function Bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function j0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=nl(n,s),l!=null&&o.unshift(cl(n,l,a))):r||(l=nl(n,s),l!=null&&o.push(cl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var YT=/\r\n?/g,$T=/\u0000|\uFFFD/g;function W0(t){return(typeof t=="string"?t:""+t).replace(YT,`
`).replace($T,"")}function oc(t,e,n){if(e=W0(e),W0(t)!==e&&n)throw Error(ce(425))}function Au(){}var Rh=null,Ph=null;function Nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dh=typeof setTimeout=="function"?setTimeout:void 0,KT=typeof clearTimeout=="function"?clearTimeout:void 0,X0=typeof Promise=="function"?Promise:void 0,qT=typeof queueMicrotask=="function"?queueMicrotask:typeof X0<"u"?function(t){return X0.resolve(null).then(t).catch(ZT)}:Dh;function ZT(t){setTimeout(function(){throw t})}function $d(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),sl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sl(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Y0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ta=Math.random().toString(36).slice(2),Li="__reactFiber$"+ta,ul="__reactProps$"+ta,ur="__reactContainer$"+ta,Ih="__reactEvents$"+ta,JT="__reactListeners$"+ta,QT="__reactHandles$"+ta;function ms(t){var e=t[Li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[Li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Y0(t);t!==null;){if(n=t[Li])return n;t=Y0(t)}return e}t=n,n=t.parentNode}return null}function Ol(t){return t=t[Li]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function ad(t){return t[ul]||null}var Lh=[],co=-1;function Kr(t){return{current:t}}function At(t){0>co||(t.current=Lh[co],Lh[co]=null,co--)}function St(t,e){co++,Lh[co]=t.current,t.current=e}var jr={},mn=Kr(jr),Ln=Kr(!1),Ts=jr;function ko(t,e){var n=t.type.contextTypes;if(!n)return jr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Fn(t){return t=t.childContextTypes,t!=null}function Cu(){At(Ln),At(mn)}function $0(t,e,n){if(mn.current!==jr)throw Error(ce(168));St(mn,e),St(Ln,n)}function M1(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Uw(t)||"Unknown",r));return Ut({},n,i)}function Ru(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,Ts=mn.current,St(mn,t),St(Ln,Ln.current),!0}function K0(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=M1(t,e,Ts),i.__reactInternalMemoizedMergedChildContext=t,At(Ln),At(mn),St(mn,t)):At(Ln),St(Ln,n)}var er=null,ld=!1,Kd=!1;function E1(t){er===null?er=[t]:er.push(t)}function eb(t){ld=!0,E1(t)}function qr(){if(!Kd&&er!==null){Kd=!0;var t=0,e=mt;try{var n=er;for(mt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}er=null,ld=!1}catch(r){throw er!==null&&(er=er.slice(t+1)),$_(Em,qr),r}finally{mt=e,Kd=!1}}return null}var uo=[],fo=0,Pu=null,Nu=0,ti=[],ni=0,bs=null,nr=1,ir="";function ls(t,e){uo[fo++]=Nu,uo[fo++]=Pu,Pu=t,Nu=e}function w1(t,e,n){ti[ni++]=nr,ti[ni++]=ir,ti[ni++]=bs,bs=t;var i=nr;t=ir;var r=32-wi(i)-1;i&=~(1<<r),n+=1;var s=32-wi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,nr=1<<32-wi(e)+r|n<<r|i,ir=s+t}else nr=1<<s|n<<r|i,ir=t}function Dm(t){t.return!==null&&(ls(t,1),w1(t,1,0))}function Im(t){for(;t===Pu;)Pu=uo[--fo],uo[fo]=null,Nu=uo[--fo],uo[fo]=null;for(;t===bs;)bs=ti[--ni],ti[ni]=null,ir=ti[--ni],ti[ni]=null,nr=ti[--ni],ti[ni]=null}var Wn=null,jn=null,Rt=!1,yi=null;function T1(t,e){var n=ri(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function q0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wn=t,jn=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wn=t,jn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bs!==null?{id:nr,overflow:ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ri(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wn=t,jn=null,!0):!1;default:return!1}}function Fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kh(t){if(Rt){var e=jn;if(e){var n=e;if(!q0(t,e)){if(Fh(t))throw Error(ce(418));e=kr(n.nextSibling);var i=Wn;e&&q0(t,e)?T1(i,n):(t.flags=t.flags&-4097|2,Rt=!1,Wn=t)}}else{if(Fh(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Rt=!1,Wn=t}}}function Z0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function ac(t){if(t!==Wn)return!1;if(!Rt)return Z0(t),Rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nh(t.type,t.memoizedProps)),e&&(e=jn)){if(Fh(t))throw b1(),Error(ce(418));for(;e;)T1(t,e),e=kr(e.nextSibling)}if(Z0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jn=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jn=null}}else jn=Wn?kr(t.stateNode.nextSibling):null;return!0}function b1(){for(var t=jn;t;)t=kr(t.nextSibling)}function Uo(){jn=Wn=null,Rt=!1}function Lm(t){yi===null?yi=[t]:yi.push(t)}var tb=pr.ReactCurrentBatchConfig;function va(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function lc(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function J0(t){var e=t._init;return e(t._payload)}function A1(t){function e(p,_){if(t){var x=p.deletions;x===null?(p.deletions=[_],p.flags|=16):x.push(_)}}function n(p,_){if(!t)return null;for(;_!==null;)e(p,_),_=_.sibling;return null}function i(p,_){for(p=new Map;_!==null;)_.key!==null?p.set(_.key,_):p.set(_.index,_),_=_.sibling;return p}function r(p,_){return p=Vr(p,_),p.index=0,p.sibling=null,p}function s(p,_,x){return p.index=x,t?(x=p.alternate,x!==null?(x=x.index,x<_?(p.flags|=2,_):x):(p.flags|=2,_)):(p.flags|=1048576,_)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,_,x,S){return _===null||_.tag!==6?(_=nf(x,p.mode,S),_.return=p,_):(_=r(_,x),_.return=p,_)}function l(p,_,x,S){var b=x.type;return b===ro?u(p,_,x.props.children,S,x.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===br&&J0(b)===_.type)?(S=r(_,x.props),S.ref=va(p,_,x),S.return=p,S):(S=su(x.type,x.key,x.props,null,p.mode,S),S.ref=va(p,_,x),S.return=p,S)}function c(p,_,x,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=rf(x,p.mode,S),_.return=p,_):(_=r(_,x.children||[]),_.return=p,_)}function u(p,_,x,S,b){return _===null||_.tag!==7?(_=Ms(x,p.mode,S,b),_.return=p,_):(_=r(_,x),_.return=p,_)}function d(p,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=nf(""+_,p.mode,x),_.return=p,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Zl:return x=su(_.type,_.key,_.props,null,p.mode,x),x.ref=va(p,null,_),x.return=p,x;case io:return _=rf(_,p.mode,x),_.return=p,_;case br:var S=_._init;return d(p,S(_._payload),x)}if(Ra(_)||fa(_))return _=Ms(_,p.mode,x,null),_.return=p,_;lc(p,_)}return null}function f(p,_,x,S){var b=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return b!==null?null:a(p,_,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zl:return x.key===b?l(p,_,x,S):null;case io:return x.key===b?c(p,_,x,S):null;case br:return b=x._init,f(p,_,b(x._payload),S)}if(Ra(x)||fa(x))return b!==null?null:u(p,_,x,S,null);lc(p,x)}return null}function h(p,_,x,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(x)||null,a(_,p,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Zl:return p=p.get(S.key===null?x:S.key)||null,l(_,p,S,b);case io:return p=p.get(S.key===null?x:S.key)||null,c(_,p,S,b);case br:var C=S._init;return h(p,_,x,C(S._payload),b)}if(Ra(S)||fa(S))return p=p.get(x)||null,u(_,p,S,b,null);lc(_,S)}return null}function m(p,_,x,S){for(var b=null,C=null,A=_,R=_=0,T=null;A!==null&&R<x.length;R++){A.index>R?(T=A,A=null):T=A.sibling;var M=f(p,A,x[R],S);if(M===null){A===null&&(A=T);break}t&&A&&M.alternate===null&&e(p,A),_=s(M,_,R),C===null?b=M:C.sibling=M,C=M,A=T}if(R===x.length)return n(p,A),Rt&&ls(p,R),b;if(A===null){for(;R<x.length;R++)A=d(p,x[R],S),A!==null&&(_=s(A,_,R),C===null?b=A:C.sibling=A,C=A);return Rt&&ls(p,R),b}for(A=i(p,A);R<x.length;R++)T=h(A,p,R,x[R],S),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?R:T.key),_=s(T,_,R),C===null?b=T:C.sibling=T,C=T);return t&&A.forEach(function(L){return e(p,L)}),Rt&&ls(p,R),b}function y(p,_,x,S){var b=fa(x);if(typeof b!="function")throw Error(ce(150));if(x=b.call(x),x==null)throw Error(ce(151));for(var C=b=null,A=_,R=_=0,T=null,M=x.next();A!==null&&!M.done;R++,M=x.next()){A.index>R?(T=A,A=null):T=A.sibling;var L=f(p,A,M.value,S);if(L===null){A===null&&(A=T);break}t&&A&&L.alternate===null&&e(p,A),_=s(L,_,R),C===null?b=L:C.sibling=L,C=L,A=T}if(M.done)return n(p,A),Rt&&ls(p,R),b;if(A===null){for(;!M.done;R++,M=x.next())M=d(p,M.value,S),M!==null&&(_=s(M,_,R),C===null?b=M:C.sibling=M,C=M);return Rt&&ls(p,R),b}for(A=i(p,A);!M.done;R++,M=x.next())M=h(A,p,R,M.value,S),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?R:M.key),_=s(M,_,R),C===null?b=M:C.sibling=M,C=M);return t&&A.forEach(function(X){return e(p,X)}),Rt&&ls(p,R),b}function g(p,_,x,S){if(typeof x=="object"&&x!==null&&x.type===ro&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Zl:e:{for(var b=x.key,C=_;C!==null;){if(C.key===b){if(b=x.type,b===ro){if(C.tag===7){n(p,C.sibling),_=r(C,x.props.children),_.return=p,p=_;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===br&&J0(b)===C.type){n(p,C.sibling),_=r(C,x.props),_.ref=va(p,C,x),_.return=p,p=_;break e}n(p,C);break}else e(p,C);C=C.sibling}x.type===ro?(_=Ms(x.props.children,p.mode,S,x.key),_.return=p,p=_):(S=su(x.type,x.key,x.props,null,p.mode,S),S.ref=va(p,_,x),S.return=p,p=S)}return o(p);case io:e:{for(C=x.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(p,_.sibling),_=r(_,x.children||[]),_.return=p,p=_;break e}else{n(p,_);break}else e(p,_);_=_.sibling}_=rf(x,p.mode,S),_.return=p,p=_}return o(p);case br:return C=x._init,g(p,_,C(x._payload),S)}if(Ra(x))return m(p,_,x,S);if(fa(x))return y(p,_,x,S);lc(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(p,_.sibling),_=r(_,x),_.return=p,p=_):(n(p,_),_=nf(x,p.mode,S),_.return=p,p=_),o(p)):n(p,_)}return g}var Oo=A1(!0),C1=A1(!1),Du=Kr(null),Iu=null,ho=null,Fm=null;function km(){Fm=ho=Iu=null}function Um(t){var e=Du.current;At(Du),t._currentValue=e}function Uh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ro(t,e){Iu=t,Fm=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dn=!0),t.firstContext=null)}function ai(t){var e=t._currentValue;if(Fm!==t)if(t={context:t,memoizedValue:e,next:null},ho===null){if(Iu===null)throw Error(ce(308));ho=t,Iu.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return e}var gs=null;function Om(t){gs===null?gs=[t]:gs.push(t)}function R1(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Om(e)):(n.next=r.next,r.next=n),e.interleaved=n,dr(t,i)}function dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function Bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,dr(t,n)}return r=i.interleaved,r===null?(e.next=e,Om(i)):(e.next=r.next,r.next=e),i.interleaved=e,dr(t,n)}function Qc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wm(t,n)}}function Q0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lu(t,e,n,i){var r=t.updateQueue;Ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(f=e,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){d=m.call(h,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(h,d,f):m,f==null)break e;d=Ut({},d,f);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cs|=o,t.lanes=o,t.memoizedState=d}}function ev(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Bl={},Oi=Kr(Bl),dl=Kr(Bl),fl=Kr(Bl);function vs(t){if(t===Bl)throw Error(ce(174));return t}function Vm(t,e){switch(St(fl,e),St(dl,t),St(Oi,Bl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vh(e,t)}At(Oi),St(Oi,e)}function Bo(){At(Oi),At(dl),At(fl)}function N1(t){vs(fl.current);var e=vs(Oi.current),n=vh(e,t.type);e!==n&&(St(dl,t),St(Oi,n))}function zm(t){dl.current===t&&(At(Oi),At(dl))}var It=Kr(0);function Fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qd=[];function Hm(){for(var t=0;t<qd.length;t++)qd[t]._workInProgressVersionPrimary=null;qd.length=0}var eu=pr.ReactCurrentDispatcher,Zd=pr.ReactCurrentBatchConfig,As=0,kt=null,Kt=null,tn=null,ku=!1,Va=!1,hl=0,nb=0;function cn(){throw Error(ce(321))}function Gm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ai(t[n],e[n]))return!1;return!0}function jm(t,e,n,i,r,s){if(As=s,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,eu.current=t===null||t.memoizedState===null?ob:ab,t=n(i,r),Va){s=0;do{if(Va=!1,hl=0,25<=s)throw Error(ce(301));s+=1,tn=Kt=null,e.updateQueue=null,eu.current=lb,t=n(i,r)}while(Va)}if(eu.current=Uu,e=Kt!==null&&Kt.next!==null,As=0,tn=Kt=kt=null,ku=!1,e)throw Error(ce(300));return t}function Wm(){var t=hl!==0;return hl=0,t}function Di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?kt.memoizedState=tn=t:tn=tn.next=t,tn}function li(){if(Kt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var e=tn===null?kt.memoizedState:tn.next;if(e!==null)tn=e,Kt=t;else{if(t===null)throw Error(ce(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},tn===null?kt.memoizedState=tn=t:tn=tn.next=t}return tn}function pl(t,e){return typeof e=="function"?e(t):e}function Jd(t){var e=li(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((As&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,kt.lanes|=u,Cs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ai(i,e.memoizedState)||(Dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,kt.lanes|=s,Cs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qd(t){var e=li(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ai(s,e.memoizedState)||(Dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function D1(){}function I1(t,e){var n=kt,i=li(),r=e(),s=!Ai(i.memoizedState,r);if(s&&(i.memoizedState=r,Dn=!0),i=i.queue,Xm(k1.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||tn!==null&&tn.memoizedState.tag&1){if(n.flags|=2048,ml(9,F1.bind(null,n,i,r,e),void 0,null),rn===null)throw Error(ce(349));As&30||L1(n,e,r)}return r}function L1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function F1(t,e,n,i){e.value=n,e.getSnapshot=i,U1(e)&&O1(t)}function k1(t,e,n){return n(function(){U1(e)&&O1(t)})}function U1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ai(t,n)}catch{return!0}}function O1(t){var e=dr(t,1);e!==null&&Ti(e,t,1,-1)}function tv(t){var e=Di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:t},e.queue=t,t=t.dispatch=sb.bind(null,kt,t),[e.memoizedState,t]}function ml(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function B1(){return li().memoizedState}function tu(t,e,n,i){var r=Di();kt.flags|=t,r.memoizedState=ml(1|e,n,void 0,i===void 0?null:i)}function cd(t,e,n,i){var r=li();i=i===void 0?null:i;var s=void 0;if(Kt!==null){var o=Kt.memoizedState;if(s=o.destroy,i!==null&&Gm(i,o.deps)){r.memoizedState=ml(e,n,s,i);return}}kt.flags|=t,r.memoizedState=ml(1|e,n,s,i)}function nv(t,e){return tu(8390656,8,t,e)}function Xm(t,e){return cd(2048,8,t,e)}function V1(t,e){return cd(4,2,t,e)}function z1(t,e){return cd(4,4,t,e)}function H1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function G1(t,e,n){return n=n!=null?n.concat([t]):null,cd(4,4,H1.bind(null,e,t),n)}function Ym(){}function j1(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function W1(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function X1(t,e,n){return As&21?(Ai(n,e)||(n=Z_(),kt.lanes|=n,Cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=n)}function ib(t,e){var n=mt;mt=n!==0&&4>n?n:4,t(!0);var i=Zd.transition;Zd.transition={};try{t(!1),e()}finally{mt=n,Zd.transition=i}}function Y1(){return li().memoizedState}function rb(t,e,n){var i=Br(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$1(t))K1(e,n);else if(n=R1(t,e,n,i),n!==null){var r=Tn();Ti(n,t,i,r),q1(n,e,i)}}function sb(t,e,n){var i=Br(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($1(t))K1(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ai(a,o)){var l=e.interleaved;l===null?(r.next=r,Om(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=R1(t,e,r,i),n!==null&&(r=Tn(),Ti(n,t,i,r),q1(n,e,i))}}function $1(t){var e=t.alternate;return t===kt||e!==null&&e===kt}function K1(t,e){Va=ku=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function q1(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wm(t,n)}}var Uu={readContext:ai,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},ob={readContext:ai,useCallback:function(t,e){return Di().memoizedState=[t,e===void 0?null:e],t},useContext:ai,useEffect:nv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tu(4194308,4,H1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tu(4194308,4,t,e)},useInsertionEffect:function(t,e){return tu(4,2,t,e)},useMemo:function(t,e){var n=Di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=rb.bind(null,kt,t),[i.memoizedState,t]},useRef:function(t){var e=Di();return t={current:t},e.memoizedState=t},useState:tv,useDebugValue:Ym,useDeferredValue:function(t){return Di().memoizedState=t},useTransition:function(){var t=tv(!1),e=t[0];return t=ib.bind(null,t[1]),Di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=kt,r=Di();if(Rt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),rn===null)throw Error(ce(349));As&30||L1(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,nv(k1.bind(null,i,s,t),[t]),i.flags|=2048,ml(9,F1.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Di(),e=rn.identifierPrefix;if(Rt){var n=ir,i=nr;n=(i&~(1<<32-wi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=hl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ab={readContext:ai,useCallback:j1,useContext:ai,useEffect:Xm,useImperativeHandle:G1,useInsertionEffect:V1,useLayoutEffect:z1,useMemo:W1,useReducer:Jd,useRef:B1,useState:function(){return Jd(pl)},useDebugValue:Ym,useDeferredValue:function(t){var e=li();return X1(e,Kt.memoizedState,t)},useTransition:function(){var t=Jd(pl)[0],e=li().memoizedState;return[t,e]},useMutableSource:D1,useSyncExternalStore:I1,useId:Y1,unstable_isNewReconciler:!1},lb={readContext:ai,useCallback:j1,useContext:ai,useEffect:Xm,useImperativeHandle:G1,useInsertionEffect:V1,useLayoutEffect:z1,useMemo:W1,useReducer:Qd,useRef:B1,useState:function(){return Qd(pl)},useDebugValue:Ym,useDeferredValue:function(t){var e=li();return Kt===null?e.memoizedState=t:X1(e,Kt.memoizedState,t)},useTransition:function(){var t=Qd(pl)[0],e=li().memoizedState;return[t,e]},useMutableSource:D1,useSyncExternalStore:I1,useId:Y1,unstable_isNewReconciler:!1};function gi(t,e){if(t&&t.defaultProps){e=Ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Oh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ud={isMounted:function(t){return(t=t._reactInternals)?Fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Tn(),r=Br(t),s=ar(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,r),e!==null&&(Ti(e,t,r,i),Qc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Tn(),r=Br(t),s=ar(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,r),e!==null&&(Ti(e,t,r,i),Qc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tn(),i=Br(t),r=ar(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ur(t,r,i),e!==null&&(Ti(e,t,i,n),Qc(e,t,i))}};function iv(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!al(n,i)||!al(r,s):!0}function Z1(t,e,n){var i=!1,r=jr,s=e.contextType;return typeof s=="object"&&s!==null?s=ai(s):(r=Fn(e)?Ts:mn.current,i=e.contextTypes,s=(i=i!=null)?ko(t,r):jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ud,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function rv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ud.enqueueReplaceState(e,e.state,null)}function Bh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Bm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ai(s):(s=Fn(e)?Ts:mn.current,r.context=ko(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ud.enqueueReplaceState(r,r.state,null),Lu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vo(t,e){try{var n="",i=e;do n+=kw(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ef(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cb=typeof WeakMap=="function"?WeakMap:Map;function J1(t,e,n){n=ar(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Bu||(Bu=!0,qh=i),Vh(t,e)},n}function Q1(t,e,n){n=ar(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vh(t,e),typeof i!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new cb;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Eb.bind(null,t,e,n),e.then(t,t))}function ov(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function av(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ar(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var ub=pr.ReactCurrentOwner,Dn=!1;function Sn(t,e,n,i){e.child=t===null?C1(e,null,n,i):Oo(e,t.child,n,i)}function lv(t,e,n,i,r){n=n.render;var s=e.ref;return Ro(e,r),i=jm(t,e,n,i,s,r),n=Wm(),t!==null&&!Dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fr(t,e,r)):(Rt&&n&&Dm(e),e.flags|=1,Sn(t,e,i,r),e.child)}function cv(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!tg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,eS(t,e,s,i,r)):(t=su(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(o,i)&&t.ref===e.ref)return fr(t,e,r)}return e.flags|=1,t=Vr(s,i),t.ref=e.ref,t.return=e,e.child=t}function eS(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(al(s,i)&&t.ref===e.ref)if(Dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Dn=!0);else return e.lanes=t.lanes,fr(t,e,r)}return zh(t,e,n,i,r)}function tS(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(mo,Gn),Gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,St(mo,Gn),Gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,St(mo,Gn),Gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,St(mo,Gn),Gn|=i;return Sn(t,e,r,n),e.child}function nS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zh(t,e,n,i,r){var s=Fn(n)?Ts:mn.current;return s=ko(e,s),Ro(e,r),n=jm(t,e,n,i,s,r),i=Wm(),t!==null&&!Dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fr(t,e,r)):(Rt&&i&&Dm(e),e.flags|=1,Sn(t,e,n,r),e.child)}function uv(t,e,n,i,r){if(Fn(n)){var s=!0;Ru(e)}else s=!1;if(Ro(e,r),e.stateNode===null)nu(t,e),Z1(e,n,i),Bh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ai(c):(c=Fn(n)?Ts:mn.current,c=ko(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&rv(e,o,i,c),Ar=!1;var f=e.memoizedState;o.state=f,Lu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Ln.current||Ar?(typeof u=="function"&&(Oh(e,n,u,i),l=e.memoizedState),(a=Ar||iv(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,P1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:gi(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ai(l):(l=Fn(n)?Ts:mn.current,l=ko(e,l));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&rv(e,o,i,l),Ar=!1,f=e.memoizedState,o.state=f,Lu(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||Ln.current||Ar?(typeof h=="function"&&(Oh(e,n,h,i),m=e.memoizedState),(c=Ar||iv(e,n,c,i,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Hh(t,e,n,i,s,r)}function Hh(t,e,n,i,r,s){nS(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&K0(e,n,!1),fr(t,e,s);i=e.stateNode,ub.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Oo(e,t.child,null,s),e.child=Oo(e,null,a,s)):Sn(t,e,a,s),e.memoizedState=i.state,r&&K0(e,n,!0),e.child}function iS(t){var e=t.stateNode;e.pendingContext?$0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$0(t,e.context,!1),Vm(t,e.containerInfo)}function dv(t,e,n,i,r){return Uo(),Lm(r),e.flags|=256,Sn(t,e,n,i),e.child}var Gh={dehydrated:null,treeContext:null,retryLane:0};function jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function rS(t,e,n){var i=e.pendingProps,r=It.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),St(It,r&1),t===null)return kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hd(o,i,0,null),t=Ms(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jh(n),e.memoizedState=Gh,t):$m(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return db(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Vr(a,s):(s=Ms(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gh,i}return s=t.child,t=s.sibling,i=Vr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function $m(t,e){return e=hd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cc(t,e,n,i){return i!==null&&Lm(i),Oo(e,t.child,null,n),t=$m(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function db(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ef(Error(ce(422))),cc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=hd({mode:"visible",children:i.children},r,0,null),s=Ms(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Oo(e,t.child,null,o),e.child.memoizedState=jh(o),e.memoizedState=Gh,s);if(!(e.mode&1))return cc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=ef(s,i,void 0),cc(t,e,o,i)}if(a=(o&t.childLanes)!==0,Dn||a){if(i=rn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,dr(t,r),Ti(i,t,r,-1))}return eg(),i=ef(Error(ce(421))),cc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=wb.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,jn=kr(r.nextSibling),Wn=e,Rt=!0,yi=null,t!==null&&(ti[ni++]=nr,ti[ni++]=ir,ti[ni++]=bs,nr=t.id,ir=t.overflow,bs=e),e=$m(e,i.children),e.flags|=4096,e)}function fv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Uh(t.return,e,n)}function tf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function sS(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Sn(t,e,i.children,n),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fv(t,n,e);else if(t.tag===19)fv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(St(It,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tf(e,!0,n,null,s);break;case"together":tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fb(t,e,n){switch(e.tag){case 3:iS(e),Uo();break;case 5:N1(e);break;case 1:Fn(e.type)&&Ru(e);break;case 4:Vm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;St(Du,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(St(It,It.current&1),e.flags|=128,null):n&e.child.childLanes?rS(t,e,n):(St(It,It.current&1),t=fr(t,e,n),t!==null?t.sibling:null);St(It,It.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return sS(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),St(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,tS(t,e,n)}return fr(t,e,n)}var oS,Wh,aS,lS;oS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wh=function(){};aS=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vs(Oi.current);var s=null;switch(n){case"input":r=hh(t,r),i=hh(t,i),s=[];break;case"select":r=Ut({},r,{value:void 0}),i=Ut({},i,{value:void 0}),s=[];break;case"textarea":r=gh(t,r),i=gh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Au)}xh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(el.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(el.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&wt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};lS=function(t,e,n,i){n!==i&&(e.flags|=4)};function xa(t,e){if(!Rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function un(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function hb(t,e,n){var i=e.pendingProps;switch(Im(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(e),null;case 1:return Fn(e.type)&&Cu(),un(e),null;case 3:return i=e.stateNode,Bo(),At(Ln),At(mn),Hm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ac(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yi!==null&&(Qh(yi),yi=null))),Wh(t,e),un(e),null;case 5:zm(e);var r=vs(fl.current);if(n=e.type,t!==null&&e.stateNode!=null)aS(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return un(e),null}if(t=vs(Oi.current),ac(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Li]=e,i[ul]=s,t=(e.mode&1)!==0,n){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(r=0;r<Na.length;r++)wt(Na[r],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":S0(i,s),wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},wt("invalid",i);break;case"textarea":E0(i,s),wt("invalid",i)}xh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&oc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&oc(i.textContent,a,t),r=["children",""+a]):el.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&wt("scroll",i)}switch(n){case"input":Jl(i),M0(i,s,!0);break;case"textarea":Jl(i),w0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Au)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=k_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Li]=e,t[ul]=i,oS(t,e,!1,!1),e.stateNode=t;e:{switch(o=yh(n,i),n){case"dialog":wt("cancel",t),wt("close",t),r=i;break;case"iframe":case"object":case"embed":wt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Na.length;r++)wt(Na[r],t);r=i;break;case"source":wt("error",t),r=i;break;case"img":case"image":case"link":wt("error",t),wt("load",t),r=i;break;case"details":wt("toggle",t),r=i;break;case"input":S0(t,i),r=hh(t,i),wt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ut({},i,{value:void 0}),wt("invalid",t);break;case"textarea":E0(t,i),r=gh(t,i),wt("invalid",t);break;default:r=i}xh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?B_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&U_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&tl(t,l):typeof l=="number"&&tl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(el.hasOwnProperty(s)?l!=null&&s==="onScroll"&&wt("scroll",t):l!=null&&xm(t,s,l,o))}switch(n){case"input":Jl(t),M0(t,i,!1);break;case"textarea":Jl(t),w0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?To(t,!!i.multiple,s,!1):i.defaultValue!=null&&To(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Au)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return un(e),null;case 6:if(t&&e.stateNode!=null)lS(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=vs(fl.current),vs(Oi.current),ac(e)){if(i=e.stateNode,n=e.memoizedProps,i[Li]=e,(s=i.nodeValue!==n)&&(t=Wn,t!==null))switch(t.tag){case 3:oc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Li]=e,e.stateNode=i}return un(e),null;case 13:if(At(It),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Rt&&jn!==null&&e.mode&1&&!(e.flags&128))b1(),Uo(),e.flags|=98560,s=!1;else if(s=ac(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Li]=e}else Uo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;un(e),s=!1}else yi!==null&&(Qh(yi),yi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||It.current&1?qt===0&&(qt=3):eg())),e.updateQueue!==null&&(e.flags|=4),un(e),null);case 4:return Bo(),Wh(t,e),t===null&&ll(e.stateNode.containerInfo),un(e),null;case 10:return Um(e.type._context),un(e),null;case 17:return Fn(e.type)&&Cu(),un(e),null;case 19:if(At(It),s=e.memoizedState,s===null)return un(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)xa(s,!1);else{if(qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fu(t),o!==null){for(e.flags|=128,xa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return St(It,It.current&1|2),e.child}t=t.sibling}s.tail!==null&&jt()>zo&&(e.flags|=128,i=!0,xa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Fu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Rt)return un(e),null}else 2*jt()-s.renderingStartTime>zo&&n!==1073741824&&(e.flags|=128,i=!0,xa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=jt(),e.sibling=null,n=It.current,St(It,i?n&1|2:n&1),e):(un(e),null);case 22:case 23:return Qm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Gn&1073741824&&(un(e),e.subtreeFlags&6&&(e.flags|=8192)):un(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function pb(t,e){switch(Im(e),e.tag){case 1:return Fn(e.type)&&Cu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bo(),At(Ln),At(mn),Hm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zm(e),null;case 13:if(At(It),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return At(It),null;case 4:return Bo(),null;case 10:return Um(e.type._context),null;case 22:case 23:return Qm(),null;case 24:return null;default:return null}}var uc=!1,hn=!1,mb=typeof WeakSet=="function"?WeakSet:Set,Se=null;function po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Vt(t,e,i)}else n.current=null}function Xh(t,e,n){try{n()}catch(i){Vt(t,e,i)}}var hv=!1;function gb(t,e){if(Rh=wu,t=h1(),Nm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var h;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ph={focusedElem:t,selectionRange:n},wu=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,g=m.memoizedState,p=e.stateNode,_=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:gi(e.type,y),g);p.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(S){Vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return m=hv,hv=!1,m}function za(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xh(e,n,s)}r=r.next}while(r!==i)}}function dd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Yh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cS(t){var e=t.alternate;e!==null&&(t.alternate=null,cS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Li],delete e[ul],delete e[Ih],delete e[JT],delete e[QT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uS(t){return t.tag===5||t.tag===3||t.tag===4}function pv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $h(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Au));else if(i!==4&&(t=t.child,t!==null))for($h(t,e,n),t=t.sibling;t!==null;)$h(t,e,n),t=t.sibling}function Kh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Kh(t,e,n),t=t.sibling;t!==null;)Kh(t,e,n),t=t.sibling}var sn=null,xi=!1;function mr(t,e,n){for(n=n.child;n!==null;)dS(t,e,n),n=n.sibling}function dS(t,e,n){if(Ui&&typeof Ui.onCommitFiberUnmount=="function")try{Ui.onCommitFiberUnmount(id,n)}catch{}switch(n.tag){case 5:hn||po(n,e);case 6:var i=sn,r=xi;sn=null,mr(t,e,n),sn=i,xi=r,sn!==null&&(xi?(t=sn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):sn.removeChild(n.stateNode));break;case 18:sn!==null&&(xi?(t=sn,n=n.stateNode,t.nodeType===8?$d(t.parentNode,n):t.nodeType===1&&$d(t,n),sl(t)):$d(sn,n.stateNode));break;case 4:i=sn,r=xi,sn=n.stateNode.containerInfo,xi=!0,mr(t,e,n),sn=i,xi=r;break;case 0:case 11:case 14:case 15:if(!hn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xh(n,e,o),r=r.next}while(r!==i)}mr(t,e,n);break;case 1:if(!hn&&(po(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Vt(n,e,a)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(hn=(i=hn)||n.memoizedState!==null,mr(t,e,n),hn=i):mr(t,e,n);break;default:mr(t,e,n)}}function mv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mb),e.forEach(function(i){var r=Tb.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ui(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:sn=a.stateNode,xi=!1;break e;case 3:sn=a.stateNode.containerInfo,xi=!0;break e;case 4:sn=a.stateNode.containerInfo,xi=!0;break e}a=a.return}if(sn===null)throw Error(ce(160));dS(s,o,r),sn=null,xi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fS(e,t),e=e.sibling}function fS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ui(e,t),Pi(t),i&4){try{za(3,t,t.return),dd(3,t)}catch(y){Vt(t,t.return,y)}try{za(5,t,t.return)}catch(y){Vt(t,t.return,y)}}break;case 1:ui(e,t),Pi(t),i&512&&n!==null&&po(n,n.return);break;case 5:if(ui(e,t),Pi(t),i&512&&n!==null&&po(n,n.return),t.flags&32){var r=t.stateNode;try{tl(r,"")}catch(y){Vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&L_(r,s),yh(a,o);var c=yh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?B_(r,d):u==="dangerouslySetInnerHTML"?U_(r,d):u==="children"?tl(r,d):xm(r,u,d,c)}switch(a){case"input":ph(r,s);break;case"textarea":F_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?To(r,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?To(r,!!s.multiple,s.defaultValue,!0):To(r,!!s.multiple,s.multiple?[]:"",!1))}r[ul]=s}catch(y){Vt(t,t.return,y)}}break;case 6:if(ui(e,t),Pi(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Vt(t,t.return,y)}}break;case 3:if(ui(e,t),Pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sl(e.containerInfo)}catch(y){Vt(t,t.return,y)}break;case 4:ui(e,t),Pi(t);break;case 13:ui(e,t),Pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zm=jt())),i&4&&mv(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(hn=(c=hn)||u,ui(e,t),hn=c):ui(e,t),Pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Se=t,u=t.child;u!==null;){for(d=Se=u;Se!==null;){switch(f=Se,h=f.child,f.tag){case 0:case 11:case 14:case 15:za(4,f,f.return);break;case 1:po(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){Vt(i,n,y)}}break;case 5:po(f,f.return);break;case 22:if(f.memoizedState!==null){vv(d);continue}}h!==null?(h.return=f,Se=h):vv(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=O_("display",o))}catch(y){Vt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Vt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ui(e,t),Pi(t),i&4&&mv(t);break;case 21:break;default:ui(e,t),Pi(t)}}function Pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uS(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(tl(r,""),i.flags&=-33);var s=pv(t);Kh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=pv(t);$h(t,a,o);break;default:throw Error(ce(161))}}catch(l){Vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vb(t,e,n){Se=t,hS(t)}function hS(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||uc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||hn;a=uc;var c=hn;if(uc=o,(hn=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?xv(r):l!==null?(l.return=o,Se=l):xv(r);for(;s!==null;)Se=s,hS(s),s=s.sibling;Se=r,uc=a,hn=c}gv(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):gv(t)}}function gv(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:hn||dd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!hn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:gi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ev(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ev(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&sl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}hn||e.flags&512&&Yh(e)}catch(f){Vt(e,e.return,f)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function vv(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function xv(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dd(4,e)}catch(l){Vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Vt(e,r,l)}}var s=e.return;try{Yh(e)}catch(l){Vt(e,s,l)}break;case 5:var o=e.return;try{Yh(e)}catch(l){Vt(e,o,l)}}}catch(l){Vt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var xb=Math.ceil,Ou=pr.ReactCurrentDispatcher,Km=pr.ReactCurrentOwner,oi=pr.ReactCurrentBatchConfig,ct=0,rn=null,$t=null,on=0,Gn=0,mo=Kr(0),qt=0,gl=null,Cs=0,fd=0,qm=0,Ha=null,Pn=null,Zm=0,zo=1/0,Qi=null,Bu=!1,qh=null,Or=null,dc=!1,Dr=null,Vu=0,Ga=0,Zh=null,iu=-1,ru=0;function Tn(){return ct&6?jt():iu!==-1?iu:iu=jt()}function Br(t){return t.mode&1?ct&2&&on!==0?on&-on:tb.transition!==null?(ru===0&&(ru=Z_()),ru):(t=mt,t!==0||(t=window.event,t=t===void 0?16:r1(t.type)),t):1}function Ti(t,e,n,i){if(50<Ga)throw Ga=0,Zh=null,Error(ce(185));kl(t,n,i),(!(ct&2)||t!==rn)&&(t===rn&&(!(ct&2)&&(fd|=n),qt===4&&Rr(t,on)),kn(t,i),n===1&&ct===0&&!(e.mode&1)&&(zo=jt()+500,ld&&qr()))}function kn(t,e){var n=t.callbackNode;tT(t,e);var i=Eu(t,t===rn?on:0);if(i===0)n!==null&&A0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&A0(n),e===1)t.tag===0?eb(yv.bind(null,t)):E1(yv.bind(null,t)),qT(function(){!(ct&6)&&qr()}),n=null;else{switch(J_(i)){case 1:n=Em;break;case 4:n=K_;break;case 16:n=Mu;break;case 536870912:n=q_;break;default:n=Mu}n=SS(n,pS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pS(t,e){if(iu=-1,ru=0,ct&6)throw Error(ce(327));var n=t.callbackNode;if(Po()&&t.callbackNode!==n)return null;var i=Eu(t,t===rn?on:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zu(t,i);else{e=i;var r=ct;ct|=2;var s=gS();(rn!==t||on!==e)&&(Qi=null,zo=jt()+500,Ss(t,e));do try{Sb();break}catch(a){mS(t,a)}while(!0);km(),Ou.current=s,ct=r,$t!==null?e=0:(rn=null,on=0,e=qt)}if(e!==0){if(e===2&&(r=wh(t),r!==0&&(i=r,e=Jh(t,r))),e===1)throw n=gl,Ss(t,0),Rr(t,i),kn(t,jt()),n;if(e===6)Rr(t,i);else{if(r=t.current.alternate,!(i&30)&&!yb(r)&&(e=zu(t,i),e===2&&(s=wh(t),s!==0&&(i=s,e=Jh(t,s))),e===1))throw n=gl,Ss(t,0),Rr(t,i),kn(t,jt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:cs(t,Pn,Qi);break;case 3:if(Rr(t,i),(i&130023424)===i&&(e=Zm+500-jt(),10<e)){if(Eu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Dh(cs.bind(null,t,Pn,Qi),e);break}cs(t,Pn,Qi);break;case 4:if(Rr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-wi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=jt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xb(i/1960))-i,10<i){t.timeoutHandle=Dh(cs.bind(null,t,Pn,Qi),i);break}cs(t,Pn,Qi);break;case 5:cs(t,Pn,Qi);break;default:throw Error(ce(329))}}}return kn(t,jt()),t.callbackNode===n?pS.bind(null,t):null}function Jh(t,e){var n=Ha;return t.current.memoizedState.isDehydrated&&(Ss(t,e).flags|=256),t=zu(t,e),t!==2&&(e=Pn,Pn=n,e!==null&&Qh(e)),t}function Qh(t){Pn===null?Pn=t:Pn.push.apply(Pn,t)}function yb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~qm,e&=~fd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wi(e),i=1<<n;t[n]=-1,e&=~i}}function yv(t){if(ct&6)throw Error(ce(327));Po();var e=Eu(t,0);if(!(e&1))return kn(t,jt()),null;var n=zu(t,e);if(t.tag!==0&&n===2){var i=wh(t);i!==0&&(e=i,n=Jh(t,i))}if(n===1)throw n=gl,Ss(t,0),Rr(t,e),kn(t,jt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cs(t,Pn,Qi),kn(t,jt()),null}function Jm(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(zo=jt()+500,ld&&qr())}}function Rs(t){Dr!==null&&Dr.tag===0&&!(ct&6)&&Po();var e=ct;ct|=1;var n=oi.transition,i=mt;try{if(oi.transition=null,mt=1,t)return t()}finally{mt=i,oi.transition=n,ct=e,!(ct&6)&&qr()}}function Qm(){Gn=mo.current,At(mo)}function Ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KT(n)),$t!==null)for(n=$t.return;n!==null;){var i=n;switch(Im(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cu();break;case 3:Bo(),At(Ln),At(mn),Hm();break;case 5:zm(i);break;case 4:Bo();break;case 13:At(It);break;case 19:At(It);break;case 10:Um(i.type._context);break;case 22:case 23:Qm()}n=n.return}if(rn=t,$t=t=Vr(t.current,null),on=Gn=e,qt=0,gl=null,qm=fd=Cs=0,Pn=Ha=null,gs!==null){for(e=0;e<gs.length;e++)if(n=gs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}gs=null}return t}function mS(t,e){do{var n=$t;try{if(km(),eu.current=Uu,ku){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ku=!1}if(As=0,tn=Kt=kt=null,Va=!1,hl=0,Km.current=null,n===null||n.return===null){qt=1,gl=e,$t=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=on,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=ov(o);if(h!==null){h.flags&=-257,av(h,o,a,s,e),h.mode&1&&sv(s,c,e),e=h,l=c;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){sv(s,c,e),eg();break e}l=Error(ce(426))}}else if(Rt&&a.mode&1){var g=ov(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),av(g,o,a,s,e),Lm(Vo(l,a));break e}}s=l=Vo(l,a),qt!==4&&(qt=2),Ha===null?Ha=[s]:Ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=J1(s,l,e);Q0(s,p);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Or===null||!Or.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Q1(s,a,e);Q0(s,S);break e}}s=s.return}while(s!==null)}xS(n)}catch(b){e=b,$t===n&&n!==null&&($t=n=n.return);continue}break}while(!0)}function gS(){var t=Ou.current;return Ou.current=Uu,t===null?Uu:t}function eg(){(qt===0||qt===3||qt===2)&&(qt=4),rn===null||!(Cs&268435455)&&!(fd&268435455)||Rr(rn,on)}function zu(t,e){var n=ct;ct|=2;var i=gS();(rn!==t||on!==e)&&(Qi=null,Ss(t,e));do try{_b();break}catch(r){mS(t,r)}while(!0);if(km(),ct=n,Ou.current=i,$t!==null)throw Error(ce(261));return rn=null,on=0,qt}function _b(){for(;$t!==null;)vS($t)}function Sb(){for(;$t!==null&&!Xw();)vS($t)}function vS(t){var e=_S(t.alternate,t,Gn);t.memoizedProps=t.pendingProps,e===null?xS(t):$t=e,Km.current=null}function xS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pb(n,e),n!==null){n.flags&=32767,$t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,$t=null;return}}else if(n=hb(n,e,Gn),n!==null){$t=n;return}if(e=e.sibling,e!==null){$t=e;return}$t=e=t}while(e!==null);qt===0&&(qt=5)}function cs(t,e,n){var i=mt,r=oi.transition;try{oi.transition=null,mt=1,Mb(t,e,n,i)}finally{oi.transition=r,mt=i}return null}function Mb(t,e,n,i){do Po();while(Dr!==null);if(ct&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nT(t,s),t===rn&&($t=rn=null,on=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dc||(dc=!0,SS(Mu,function(){return Po(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=oi.transition,oi.transition=null;var o=mt;mt=1;var a=ct;ct|=4,Km.current=null,gb(t,n),fS(n,t),HT(Ph),wu=!!Rh,Ph=Rh=null,t.current=n,vb(n),Yw(),ct=a,mt=o,oi.transition=s}else t.current=n;if(dc&&(dc=!1,Dr=t,Vu=r),s=t.pendingLanes,s===0&&(Or=null),qw(n.stateNode),kn(t,jt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bu)throw Bu=!1,t=qh,qh=null,t;return Vu&1&&t.tag!==0&&Po(),s=t.pendingLanes,s&1?t===Zh?Ga++:(Ga=0,Zh=t):Ga=0,qr(),null}function Po(){if(Dr!==null){var t=J_(Vu),e=oi.transition,n=mt;try{if(oi.transition=null,mt=16>t?16:t,Dr===null)var i=!1;else{if(t=Dr,Dr=null,Vu=0,ct&6)throw Error(ce(331));var r=ct;for(ct|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:za(8,u,s)}var d=u.child;if(d!==null)d.return=u,Se=d;else for(;Se!==null;){u=Se;var f=u.sibling,h=u.return;if(cS(u),u===c){Se=null;break}if(f!==null){f.return=h,Se=f;break}Se=h}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:za(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Se=p;break e}Se=s.return}}var _=t.current;for(Se=_;Se!==null;){o=Se;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Se=x;else e:for(o=_;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dd(9,a)}}catch(b){Vt(a,a.return,b)}if(a===o){Se=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Se=S;break e}Se=a.return}}if(ct=r,qr(),Ui&&typeof Ui.onPostCommitFiberRoot=="function")try{Ui.onPostCommitFiberRoot(id,t)}catch{}i=!0}return i}finally{mt=n,oi.transition=e}}return!1}function _v(t,e,n){e=Vo(n,e),e=J1(t,e,1),t=Ur(t,e,1),e=Tn(),t!==null&&(kl(t,1,e),kn(t,e))}function Vt(t,e,n){if(t.tag===3)_v(t,t,n);else for(;e!==null;){if(e.tag===3){_v(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Or===null||!Or.has(i))){t=Vo(n,t),t=Q1(e,t,1),e=Ur(e,t,1),t=Tn(),e!==null&&(kl(e,1,t),kn(e,t));break}}e=e.return}}function Eb(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Tn(),t.pingedLanes|=t.suspendedLanes&n,rn===t&&(on&n)===n&&(qt===4||qt===3&&(on&130023424)===on&&500>jt()-Zm?Ss(t,0):qm|=n),kn(t,e)}function yS(t,e){e===0&&(t.mode&1?(e=tc,tc<<=1,!(tc&130023424)&&(tc=4194304)):e=1);var n=Tn();t=dr(t,e),t!==null&&(kl(t,e,n),kn(t,n))}function wb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yS(t,n)}function Tb(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),yS(t,n)}var _S;_S=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ln.current)Dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dn=!1,fb(t,e,n);Dn=!!(t.flags&131072)}else Dn=!1,Rt&&e.flags&1048576&&w1(e,Nu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nu(t,e),t=e.pendingProps;var r=ko(e,mn.current);Ro(e,n),r=jm(null,e,i,t,r,n);var s=Wm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fn(i)?(s=!0,Ru(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bm(e),r.updater=ud,e.stateNode=r,r._reactInternals=e,Bh(e,i,t,n),e=Hh(null,e,i,!0,s,n)):(e.tag=0,Rt&&s&&Dm(e),Sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ab(i),t=gi(i,t),r){case 0:e=zh(null,e,i,t,n);break e;case 1:e=uv(null,e,i,t,n);break e;case 11:e=lv(null,e,i,t,n);break e;case 14:e=cv(null,e,i,gi(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),zh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),uv(t,e,i,r,n);case 3:e:{if(iS(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,P1(t,e),Lu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vo(Error(ce(423)),e),e=dv(t,e,i,n,r);break e}else if(i!==r){r=Vo(Error(ce(424)),e),e=dv(t,e,i,n,r);break e}else for(jn=kr(e.stateNode.containerInfo.firstChild),Wn=e,Rt=!0,yi=null,n=C1(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Uo(),i===r){e=fr(t,e,n);break e}Sn(t,e,i,n)}e=e.child}return e;case 5:return N1(e),t===null&&kh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Nh(i,r)?o=null:s!==null&&Nh(i,s)&&(e.flags|=32),nS(t,e),Sn(t,e,o,n),e.child;case 6:return t===null&&kh(e),null;case 13:return rS(t,e,n);case 4:return Vm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Oo(e,null,i,n):Sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),lv(t,e,i,r,n);case 7:return Sn(t,e,e.pendingProps,n),e.child;case 8:return Sn(t,e,e.pendingProps.children,n),e.child;case 12:return Sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,St(Du,i._currentValue),i._currentValue=o,s!==null)if(Ai(s.value,o)){if(s.children===r.children&&!Ln.current){e=fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ar(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Uh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Uh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ro(e,n),r=ai(r),i=i(r),e.flags|=1,Sn(t,e,i,n),e.child;case 14:return i=e.type,r=gi(i,e.pendingProps),r=gi(i.type,r),cv(t,e,i,r,n);case 15:return eS(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),nu(t,e),e.tag=1,Fn(i)?(t=!0,Ru(e)):t=!1,Ro(e,n),Z1(e,i,r),Bh(e,i,r,n),Hh(null,e,i,!0,t,n);case 19:return sS(t,e,n);case 22:return tS(t,e,n)}throw Error(ce(156,e.tag))};function SS(t,e){return $_(t,e)}function bb(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,e,n,i){return new bb(t,e,n,i)}function tg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ab(t){if(typeof t=="function")return tg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_m)return 11;if(t===Sm)return 14}return 2}function Vr(t,e){var n=t.alternate;return n===null?(n=ri(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function su(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")tg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ro:return Ms(n.children,r,s,e);case ym:o=8,r|=8;break;case ch:return t=ri(12,n,e,r|2),t.elementType=ch,t.lanes=s,t;case uh:return t=ri(13,n,e,r),t.elementType=uh,t.lanes=s,t;case dh:return t=ri(19,n,e,r),t.elementType=dh,t.lanes=s,t;case N_:return hd(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R_:o=10;break e;case P_:o=9;break e;case _m:o=11;break e;case Sm:o=14;break e;case br:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=ri(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ms(t,e,n,i){return t=ri(7,t,i,e),t.lanes=n,t}function hd(t,e,n,i){return t=ri(22,t,i,e),t.elementType=N_,t.lanes=n,t.stateNode={isHidden:!1},t}function nf(t,e,n){return t=ri(6,t,null,e),t.lanes=n,t}function rf(t,e,n){return e=ri(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cb(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ud(0),this.expirationTimes=Ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ud(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ng(t,e,n,i,r,s,o,a,l){return t=new Cb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ri(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bm(s),t}function Rb(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:io,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function MS(t){if(!t)return jr;t=t._reactInternals;e:{if(Fs(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Fn(n))return M1(t,n,e)}return e}function ES(t,e,n,i,r,s,o,a,l){return t=ng(n,i,!0,t,r,s,o,a,l),t.context=MS(null),n=t.current,i=Tn(),r=Br(n),s=ar(i,r),s.callback=e??null,Ur(n,s,r),t.current.lanes=r,kl(t,r,i),kn(t,i),t}function pd(t,e,n,i){var r=e.current,s=Tn(),o=Br(r);return n=MS(n),e.context===null?e.context=n:e.pendingContext=n,e=ar(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ur(r,e,o),t!==null&&(Ti(t,r,o,s),Qc(t,r,o)),o}function Hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ig(t,e){Sv(t,e),(t=t.alternate)&&Sv(t,e)}function Pb(){return null}var wS=typeof reportError=="function"?reportError:function(t){console.error(t)};function rg(t){this._internalRoot=t}md.prototype.render=rg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));pd(t,e,null,null)};md.prototype.unmount=rg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rs(function(){pd(null,t,null,null)}),e[ur]=null}};function md(t){this._internalRoot=t}md.prototype.unstable_scheduleHydration=function(t){if(t){var e=t1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&i1(t)}};function sg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mv(){}function Nb(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Hu(o);s.call(c)}}var o=ES(e,i,t,0,null,!1,!1,"",Mv);return t._reactRootContainer=o,t[ur]=o.current,ll(t.nodeType===8?t.parentNode:t),Rs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Hu(l);a.call(c)}}var l=ng(t,0,!1,null,null,!1,!1,"",Mv);return t._reactRootContainer=l,t[ur]=l.current,ll(t.nodeType===8?t.parentNode:t),Rs(function(){pd(e,l,n,i)}),l}function vd(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Hu(o);a.call(l)}}pd(e,o,t,r)}else o=Nb(n,e,t,r,i);return Hu(o)}Q_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pa(e.pendingLanes);n!==0&&(wm(e,n|1),kn(e,jt()),!(ct&6)&&(zo=jt()+500,qr()))}break;case 13:Rs(function(){var i=dr(t,1);if(i!==null){var r=Tn();Ti(i,t,1,r)}}),ig(t,1)}};Tm=function(t){if(t.tag===13){var e=dr(t,134217728);if(e!==null){var n=Tn();Ti(e,t,134217728,n)}ig(t,134217728)}};e1=function(t){if(t.tag===13){var e=Br(t),n=dr(t,e);if(n!==null){var i=Tn();Ti(n,t,e,i)}ig(t,e)}};t1=function(){return mt};n1=function(t,e){var n=mt;try{return mt=t,e()}finally{mt=n}};Sh=function(t,e,n){switch(e){case"input":if(ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ad(i);if(!r)throw Error(ce(90));I_(i),ph(i,r)}}}break;case"textarea":F_(t,n);break;case"select":e=n.value,e!=null&&To(t,!!n.multiple,e,!1)}};H_=Jm;G_=Rs;var Db={usingClientEntryPoint:!1,Events:[Ol,lo,ad,V_,z_,Jm]},ya={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ib={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=X_(t),t===null?null:t.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||Pb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{id=fc.inject(Ib),Ui=fc}catch{}}$n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Db;$n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sg(e))throw Error(ce(200));return Rb(t,e,null,n)};$n.createRoot=function(t,e){if(!sg(t))throw Error(ce(299));var n=!1,i="",r=wS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ng(t,1,!1,null,null,n,!1,i,r),t[ur]=e.current,ll(t.nodeType===8?t.parentNode:t),new rg(e)};$n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=X_(e),t=t===null?null:t.stateNode,t};$n.flushSync=function(t){return Rs(t)};$n.hydrate=function(t,e,n){if(!gd(e))throw Error(ce(200));return vd(null,t,e,!0,n)};$n.hydrateRoot=function(t,e,n){if(!sg(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=wS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ES(e,null,t,1,n??null,r,!1,s,o),t[ur]=e.current,ll(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new md(e)};$n.render=function(t,e,n){if(!gd(e))throw Error(ce(200));return vd(null,t,e,!1,n)};$n.unmountComponentAtNode=function(t){if(!gd(t))throw Error(ce(40));return t._reactRootContainer?(Rs(function(){vd(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};$n.unstable_batchedUpdates=Jm;$n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gd(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return vd(t,e,n,!1,i)};$n.version="18.3.1-next-f1338f8080-20240426";function TS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(TS)}catch(t){console.error(t)}}TS(),T_.exports=$n;var Lb=T_.exports,bS,Ev=Lb;bS=Ev.createRoot,Ev.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),xt=(t,e)=>{const n=J.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>J.createElement("svg",{ref:u,...Fb,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${kb(t)}`,a].join(" "),...c},[...e.map(([d,f])=>J.createElement(d,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=xt("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=xt("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=xt("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=xt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=xt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=xt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=xt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=xt("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=xt("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=xt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=xt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=xt("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=xt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=xt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=xt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=xt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=xt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=xt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=xt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=xt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=xt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=xt("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=xt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=xt("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=xt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=xt("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=xt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=xt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),$b=()=>{const[t,e]=J.useState(!1),[n,i]=J.useState(!1),[r,s]=J.useState("home"),[o,a]=J.useState(!1),l=J.useRef(null),c={PRIMARY_BG:"#0E0B16",PRIMARY_ACCENT:"#6C2BD9",SECONDARY_ACCENT:"#4A2A80",TEXT_MAIN:"#E0E0E0",TEXT_MUTED:"#BDBDBD",LINK_HOVER:"#B799FF",GRADIENT_START:"#6C2BD9",GRADIENT_END:"#B799FF"},u=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Previous",href:"#previous"},{name:"Why Join",href:"#why-join"},{name:"Judges & Sponsors",href:"#judges"},{name:"More Info",href:"#requirements"},{name:"Prizes",href:"#prizes"},{name:"FAQ",href:"#faq"},{name:"Contact",href:"#contact"}];J.useEffect(()=>{const h=()=>{const y=window.scrollY;i(y>50);const p=u.map(_=>_.href.substring(1)).find(_=>{const x=document.getElementById(_);if(x){const S=x.getBoundingClientRect();return S.top<=100&&S.bottom>=100}return!1});p&&s(p)};window.addEventListener("scroll",h);const m=setTimeout(()=>a(!0),100);return()=>{window.removeEventListener("scroll",h),clearTimeout(m)}},[]);const d=h=>{e(!1);const m=document.getElementById(h.substring(1));m&&m.scrollIntoView({behavior:"smooth"})},f=(h,m)=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),d(m))};return v.jsxs(v.Fragment,{children:[v.jsx("style",{children:`
          @import url('https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap');
          @import url('https://api.fontshare.com/v2/css?f[]=general-sans@500,600,400,700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap');

          :root {
            --font-heading: 'Clash Display', sans-serif;
            --font-body: 'General Sans', sans-serif;
            --font-code: 'IBM Plex Mono', monospace;
          }

          body {
            font-family: var(--font-body);
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
          }

          code, pre {
            font-family: var(--font-code);
          }

          /* Logo entrance animation */
          .logo-container {
  opacity: 1;
  transform: none;
  transition: none;
}

.logo-container.loaded {
  opacity: 1;
  transform: none;
}

          /* Enhanced nav link animations */
          .nav-link {
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 8px;
          }

          .nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(183, 153, 255, 0.1), transparent);
            transition: left 0.5s ease-in-out;
          }

          .nav-link:hover::before {
            left: 100%;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, ${c.GRADIENT_START}, ${c.GRADIENT_END});
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .nav-link:hover {
            transform: translateY(-2px) scale(1.02);
            color: ${c.LINK_HOVER} !important;
            text-shadow: 0 0 10px rgba(183, 153, 255, 0.3);
          }

          .nav-link:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }

          .nav-link.active {
            color: ${c.LINK_HOVER} !important;
            background: rgba(108, 43, 217, 0.1);
            backdrop-filter: blur(10px);
          }

          .nav-link.active::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }

     .flame-button {
  position: relative;
  background: linear-gradient(45deg, #6a0dad, #8e44ad, #a084ca, #6a0dad);
  background-size: 300% 300%;
  animation: flameGradient 5s ease-in-out infinite, flamePulse 3s ease-in-out infinite;
  box-shadow:
    0 0 4px rgba(138, 43, 226, 0.25),
    0 0 8px rgba(155, 89, 182, 0.2),
    0 0 10px rgba(200, 162, 255, 0.15),
    inset 0 0 4px rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(200, 162, 255, 0.3);
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.2), 0 0 4px rgba(200, 162, 255, 0.1);
  cursor: pointer;
  padding: 6px 12px;
  font-size: 0.75rem;
  border-radius: 6px;
}

.flame-button::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg,
    transparent,
    rgba(138, 43, 226, 0.15),
    rgba(155, 89, 182, 0.2),
    rgba(200, 162, 255, 0.15),
    transparent
  );
  border-radius: inherit;
  z-index: -1;
  animation: flameHalo 3s ease-in-out infinite;
  filter: blur(1px);
  opacity: 0.4;
}

.flame-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 45%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.05) 55%,
    transparent 100%
  );
  border-radius: inherit;
  animation: flameShimmer 5s linear infinite;
  pointer-events: none;
}

.flame-button:hover {
  animation:
    flameGradient 3s ease-in-out infinite,
    flamePulse 1.5s ease-in-out infinite,
    flameShake 1s ease-in-out infinite;
  box-shadow:
    0 0 6px rgba(138, 43, 226, 0.3),
    0 0 12px rgba(155, 89, 182, 0.25),
    0 0 18px rgba(200, 162, 255, 0.2),
    inset 0 0 8px rgba(255, 255, 255, 0.05);
  transform: scale(1.03) translateY(-1px);
  border-color: rgba(200, 162, 255, 0.4);
}

.flame-button .flame-text {
  position: relative;
  z-index: 2;
  font-weight: 700;
  letter-spacing: 0.3px;
  animation: flameTextGlow 3s ease-in-out infinite;
  font-size: 0.75rem;
  color: #f0e8ff;
}

/* Animations */
@keyframes flameGradient {
  0%, 100% { background-position: 0% 50%; }
  25% { background-position: 100% 0%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
}

@keyframes flamePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

@keyframes flameHalo {
  0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.6; transform: scale(1.03) rotate(180deg); }
}

@keyframes flameShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes flameShake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-0.5px); }
  75% { transform: translateX(0.5px); }
}

@keyframes flameTextGlow {
  0%, 100% {
    text-shadow:
      0 0 1px rgba(255, 255, 255, 0.2),
      0 0 2px rgba(200, 162, 255, 0.15),
      0 0 3px rgba(155, 89, 182, 0.1);
  }
  50% {
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.3),
      0 0 4px rgba(200, 162, 255, 0.2),
      0 0 6px rgba(155, 89, 182, 0.15);
  }
}



          /* Glassmorphism navbar */
          .navbar-glass {
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            background: rgba(26, 22, 43, 0.8);
            border-bottom: 1px solid rgba(183, 153, 255, 0.1);
            box-shadow: 0 8px 32px rgba(14, 11, 22, 0.3);
          }

          .navbar-transparent {
            background: rgba(14, 11, 22, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
          }

          /* Mobile menu animation */
          .mobile-menu {
            background: rgba(26, 22, 43, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            animation: slideDown 0.3s ease-out;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Mobile menu item animation */
          .mobile-nav-item {
            transition: all 0.2s ease-in-out;
            border-left: 3px solid transparent;
          }

          .mobile-nav-item:hover {
            background: rgba(108, 43, 217, 0.1);
            border-left-color: ${c.PRIMARY_ACCENT};
            transform: translateX(5px);
          }

          /* Hamburger menu animation */
          .hamburger-btn {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .hamburger-btn:hover {
            transform: scale(1.1);
            background: rgba(108, 43, 217, 0.2) !important;
          }

          /* Smooth height transition */
          .navbar-scrolled {
            height: 60px;
          }

          .navbar-normal {
            height: 80px;
          }

          /* Focus styles for accessibility */
          .nav-link:focus,
          .hamburger-btn:focus {
            outline: 2px solid ${c.PRIMARY_ACCENT};
            outline-offset: 2px;
          }

          /* Logo hover effect */
          .logo-link:hover .logo-image {
            transform: scale(1.05) rotate(2deg);
            filter: drop-shadow(0 0 10px rgba(108, 43, 217, 0.5));
          }

          .logo-image {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .logo-text {
            color: #ffffff; /* Changed to white */
            font-weight: 700;
            letter-spacing: -0.02em;
            position: relative;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease-in-out;
          }

          .logo-text:hover {
            color: #ffffff;
            transform: none;
            filter: none;
          }

          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}),v.jsxs("nav",{ref:l,className:`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${n?"navbar-scrolled navbar-glass":"navbar-normal navbar-transparent"}`,role:"navigation","aria-label":"Main navigation",children:[v.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full",children:v.jsxs("div",{className:"flex justify-between items-center h-full",children:[v.jsx("div",{className:"flex items-center ",children:v.jsxs("a",{href:"#home",className:"logo-link flex items-center focus:outline-none",onClick:h=>{h.preventDefault(),d("#home")},onKeyDown:h=>f(h,"#home"),tabIndex:0,"aria-label":"HackUnited V6 Home",children:[v.jsx("img",{src:"/images/logo.webp",alt:"United Hacks V6 Logo",className:"logo-image h-12 w-12 rounded-lg object-cover"}),v.jsx("span",{className:"logo-text ml-3 text-xl font-bold font-heading",children:v.jsx("span",{className:"relative",children:"HackUnited V6"})})]})}),v.jsx("div",{className:"hidden lg:flex flex-grow justify-center items-center",children:v.jsx("div",{className:"flex items-center space-x-2",children:u.map((h,m)=>v.jsx("a",{href:h.href,className:`nav-link px-4 py-2 text-sm font-medium transition-all duration-300 ${r===h.href.substring(1)?"active":""}`,style:{color:r===h.href.substring(1)?c.LINK_HOVER:c.TEXT_MUTED,animationDelay:`${m*50}ms`},onClick:y=>{y.preventDefault(),d(h.href)},onKeyDown:y=>f(y,h.href),tabIndex:0,role:"button","aria-current":r===h.href.substring(1)?"page":void 0,children:h.name},h.name))})}),v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx("a",{href:"https://unitedhacksv6.devpost.com/",target:"_blank",rel:"noopener noreferrer",className:"hidden lg:flex px-6 py-3 rounded-lg text-white font-semibold transition-all duration-500 flame-button",children:v.jsx("span",{className:"flame-text",children:" Hackathon "})}),v.jsx("div",{className:"lg:hidden",children:v.jsx("button",{onClick:()=>e(!t),className:"hamburger-btn p-3 rounded-lg transition-all duration-300 focus:outline-none",style:{backgroundColor:t?"rgba(108, 43, 217, 0.2)":"transparent",color:c.TEXT_MAIN},"aria-expanded":t,"aria-controls":"mobile-menu","aria-label":t?"Close menu":"Open menu",children:t?v.jsx(Yb,{size:24}):v.jsx(Hb,{size:24})})})]})]})}),t&&v.jsx("div",{id:"mobile-menu",className:"mobile-menu lg:hidden border-t border-opacity-20",style:{borderColor:c.SURFACE},children:v.jsx("div",{className:"px-4 pt-4 pb-6 space-y-2",children:u.map((h,m)=>v.jsx("a",{href:h.href,className:`mobile-nav-item block px-4 py-3 text-base font-medium transition-all duration-200 ${r===h.href.substring(1)?"active":""}`,style:{color:r===h.href.substring(1)?c.LINK_HOVER:c.TEXT_MUTED,animationDelay:`${m*30}ms`},onClick:y=>{y.preventDefault(),d(h.href)},onKeyDown:y=>f(y,h.href),tabIndex:0,role:"button","aria-current":r===h.href.substring(1)?"page":void 0,children:h.name},h.name))})})]})]})},Kb=()=>{const[t,e]=J.useState(!1),[n,i]=J.useState({days:0,hours:0,minutes:0,seconds:0}),r={PRIMARY_BG:"#0E0B16",PRIMARY_ACCENT:"#6C2BD9",SECONDARY_ACCENT:"#4A2A80",SURFACE:"#1A162B",TEXT_MAIN:"#E0E0E0",TEXT_MUTED:"#BDBDBD",LINK_HOVER:"#B799FF",GRADIENT_START:"#6C2BD9",GRADIENT_END:"#B799FF"};return J.useEffect(()=>{const s=()=>e(window.innerWidth<768);return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),J.useEffect(()=>{const s=()=>{const a=new Date("2026-01-18T11:00:00-06:00"),l=new Date,c=a.getTime()-l.getTime();if(c>0){const u=Math.floor(c/864e5),d=Math.floor(c/(1e3*60*60)%24),f=Math.floor(c/1e3/60%60),h=Math.floor(c/1e3%60);i({days:u,hours:d,minutes:f,seconds:h})}else i({days:0,hours:0,minutes:0,seconds:0})};s();const o=setInterval(s,1e3);return()=>clearInterval(o)},[]),v.jsxs(v.Fragment,{children:[v.jsx("style",{children:`
          /* Using Times New Roman as requested */
          :root {
            --font-heading: 'Times New Roman', serif;
            --font-body: 'Times New Roman', serif;
            --font-code: 'IBM Plex Mono', monospace;
          }

          body {
            font-family: var(--font-body);
          }
          
          #app-wrapper {
            background-image: url('/Background.jpg');
            background-size: cover;
            background-attachment: fixed;
            background-position: center;
            min-height: 100vh;
          }

          .hero-gradient {
            position: relative;
            overflow: hidden;
            background: rgba(14, 11, 22, 0.8); /* Semi-transparent overlay */
          }

          .hero-gradient::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 80%, ${r.PRIMARY_ACCENT}20 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, ${r.LINK_HOVER}15 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, ${r.SECONDARY_ACCENT}10 0%, transparent 50%);
            animation: gradientShift 8s ease-in-out infinite;
          }

          @keyframes gradientShift {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }

          .floating-particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .particle {
            position: absolute;
            background: ${r.LINK_HOVER};
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
            opacity: 0.1;
          }

          .particle:nth-child(1) { width: 4px; height: 4px; top: 20%; left: 10%; animation-delay: 0s; }
          .particle:nth-child(2) { width: 6px; height: 6px; top: 60%; left: 20%; animation-delay: 1s; }
          .particle:nth-child(3) { width: 3px; height: 3px; top: 40%; left: 70%; animation-delay: 2s; }
          .particle:nth-child(4) { width: 5px; height: 5px; top: 80%; left: 80%; animation-delay: 3s; }
          .particle:nth-child(5) { width: 4px; height: 4px; top: 30%; left: 90%; animation-delay: 4s; }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(120deg); }
            66% { transform: translateY(10px) rotate(240deg); }
          }

          .hero-title {
            font-family: var(--font-heading);
            font-weight: 800;
            background: linear-gradient(135deg, ${r.TEXT_MAIN}, ${r.LINK_HOVER}, ${r.PRIMARY_ACCENT});
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: titleGradient 4s ease-in-out infinite;
            text-shadow: 0 0 40px rgba(183, 153, 255, 0.3);
          }

          @keyframes titleGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .hero-subtitle {
            font-family: var(--font-body);
            color: ${r.TEXT_MUTED};
            font-weight: 500;
            line-height: 1.6;
          }

          .cta-button {
            font-family: var(--font-body);
            font-weight: 600;
            border-radius: 12px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.6s ease-in-out;
          }

          .cta-button:hover::before {
            left: 100%;
          }

          .cta-primary {
            background: linear-gradient(135deg, ${r.PRIMARY_ACCENT}, ${r.LINK_HOVER});
            box-shadow: 0 8px 32px rgba(108, 43, 217, 0.3);
          }

          .cta-primary:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 12px 40px rgba(108, 43, 217, 0.4);
          }

          .cta-secondary {
            background: linear-gradient(135deg, ${r.SURFACE}, ${r.SECONDARY_ACCENT});
            border: 1px solid rgba(183, 153, 255, 0.3);
            box-shadow: 0 8px 32px rgba(74, 42, 128, 0.2);
          }

          .cta-secondary:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 12px 40px rgba(74, 42, 128, 0.3);
            border-color: rgba(183, 153, 255, 0.5);
          }

          .countdown-container {
            background: linear-gradient(135deg, rgba(26, 22, 43, 0.8), rgba(74, 42, 128, 0.6));
            border: 1px solid rgba(183, 153, 255, 0.2);
            border-radius: 16px;
            backdrop-filter: blur(20px);
            box-shadow: 0 8px 32px rgba(108, 43, 217, 0.2);
            padding: 24px;
            position: relative;
            overflow: hidden;
          }

          .countdown-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(183, 153, 255, 0.1), transparent);
            animation: shimmer 3s ease-in-out infinite;
          }

          @keyframes shimmer {
            0%, 100% { left: -100%; }
            50% { left: 100%; }
          }

          .countdown-title {
            font-family: var(--font-heading);
            color: ${r.TEXT_MAIN};
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 16px;
            text-align: center;
          }

          .countdown-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            position: relative;
            z-10;
          }

          .countdown-item {
            text-align: center;
            background: rgba(14, 11, 22, 0.6);
            border-radius: 12px;
            padding: 16px 8px;
            border: 1px solid rgba(183, 153, 255, 0.1);
            transition: all 0.3s ease;
          }

          .countdown-item:hover {
            border-color: rgba(183, 153, 255, 0.3);
            transform: translateY(-2px);
          }

          .countdown-number {
            font-family: var(--font-code);
            font-size: 2rem;
            font-weight: 800;
            color: ${r.LINK_HOVER};
            display: block;
            line-height: 1.2;
            text-shadow: 0 0 20px rgba(183, 153, 255, 0.4);
          }

          .countdown-label {
            font-family: var(--font-body);
            font-size: 0.875rem;
            color: ${r.TEXT_MUTED};
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-top: 8px;
          }

          @media (max-width: 640px) {
            .countdown-grid {
              gap: 12px;
            }
            
            .countdown-item {
              padding: 12px 6px;
            }
            
            .countdown-number {
              font-size: 1.5rem;
            }
            
            .countdown-label {
              font-size: 0.75rem;
            }
          }

          .logo-container {
            position: relative;
            animation: logoFloat 6s ease-in-out infinite;
          }

          @keyframes logoFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }

          .featured-logos {
            opacity: 0;
            animation: slideInUp 1s ease-out 1.5s forwards;
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1s ease-out forwards;
          }

          .fade-in-up.delay-1 { animation-delay: 0.2s; }
          .fade-in-up.delay-2 { animation-delay: 0.4s; }
          .fade-in-up.delay-3 { animation-delay: 0.6s; }
          .fade-in-up.delay-4 { animation-delay: 0.8s; }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .interactive-bg {
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: radial-gradient(circle, ${r.PRIMARY_ACCENT}10 0%, transparent 70%);
            pointer-events: none;
            transition: all 0.3s ease;
            opacity: 0;
          }

          .interactive-bg.active {
            opacity: 1;
          }
        `}),v.jsx("div",{id:"app-wrapper",children:v.jsx("section",{id:"home",className:"hero-gradient min-h-screen flex flex-col justify-center items-center relative py-24 sm:py-32",children:v.jsxs("div",{className:"flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",children:[v.jsx("div",{className:"fade-in-up",children:v.jsxs("h1",{className:"hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight",children:["United",v.jsx("br",{}),"Hacks V6"]})}),v.jsx("p",{className:"hero-subtitle text-xl sm:text-2xl lg:text-3xl max-w-2xl mx-auto mt-8 fade-in-up delay-1",children:"The Ultimate Global Online Hackathon – Code. Create. Compete."}),v.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 justify-center mt-8 fade-in-up delay-2",children:[v.jsxs("button",{className:"cta-button cta-primary px-8 py-4 text-white font-semibold flex items-center justify-center gap-3 text-lg",onClick:()=>window.open("https://www.youtube.com/watch?v=p8CHaDP3Bxg","_blank"),children:[v.jsx(Gb,{size:20}),"Watch Trailer"]}),v.jsxs("button",{className:"cta-button cta-secondary px-8 py-4 text-white font-semibold flex items-center justify-center gap-3 text-lg",onClick:()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSehFwBX1yMcW1BjX-8XcC-vHnUgNE9Wv8iVvbSIO3361QneWg/viewform","_blank"),children:[v.jsx(Xb,{size:20}),"Register Now"]})]}),v.jsxs("div",{className:"countdown-container max-w-2xl mx-auto mt-12 fade-in-up delay-3",children:[v.jsx("div",{className:"countdown-title",children:"Event Starts In"}),v.jsxs("div",{className:"countdown-grid",children:[v.jsxs("div",{className:"countdown-item",children:[v.jsx("span",{className:"countdown-number",children:n.days}),v.jsx("div",{className:"countdown-label",children:"Days"})]}),v.jsxs("div",{className:"countdown-item",children:[v.jsx("span",{className:"countdown-number",children:n.hours}),v.jsx("div",{className:"countdown-label",children:"Hours"})]}),v.jsxs("div",{className:"countdown-item",children:[v.jsx("span",{className:"countdown-number",children:n.minutes}),v.jsx("div",{className:"countdown-label",children:"Minutes"})]}),v.jsxs("div",{className:"countdown-item",children:[v.jsx("span",{className:"countdown-number",children:n.seconds}),v.jsx("div",{className:"countdown-label",children:"Seconds"})]})]})]})]})})})]})},og=J.createContext({});function na(t){const e=J.useRef(null);return e.current===null&&(e.current=t()),e.current}const ag=typeof window<"u",xd=ag?J.useLayoutEffect:J.useEffect,yd=J.createContext(null);function lg(t,e){t.indexOf(e)===-1&&t.push(e)}function cg(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Gi=(t,e,n)=>n>e?e:n<t?t:n;let Ho=()=>{};const hr={},PS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function NS(t){return typeof t=="object"&&t!==null}const DS=t=>/^0[^.\s]+$/u.test(t);function ug(t){let e;return()=>(e===void 0&&(e=t()),e)}const Un=t=>t,qb=(t,e)=>n=>e(t(n)),Vl=(...t)=>t.reduce(qb),Go=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class dg{constructor(){this.subscriptions=[]}add(e){return lg(this.subscriptions,e),()=>cg(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Bi=t=>t*1e3,Vi=t=>t/1e3;function fg(t,e){return e?t*(1e3/e):0}const IS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Zb=1e-7,Jb=12;function Qb(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=IS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>Zb&&++a<Jb);return o}function zl(t,e,n,i){if(t===e&&n===i)return Un;const r=s=>Qb(s,0,1,t,n);return s=>s===0||s===1?s:IS(r(s),e,i)}const LS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,FS=t=>e=>1-t(1-e),kS=zl(.33,1.53,.69,.99),hg=FS(kS),US=LS(hg),OS=t=>(t*=2)<1?.5*hg(t):.5*(2-Math.pow(2,-10*(t-1))),pg=t=>1-Math.sin(Math.acos(t)),BS=FS(pg),VS=LS(pg),eA=zl(.42,0,1,1),tA=zl(0,0,.58,1),zS=zl(.42,0,.58,1),nA=t=>Array.isArray(t)&&typeof t[0]!="number",HS=t=>Array.isArray(t)&&typeof t[0]=="number",Cv={linear:Un,easeIn:eA,easeInOut:zS,easeOut:tA,circIn:pg,circInOut:VS,circOut:BS,backIn:hg,backInOut:US,backOut:kS,anticipate:OS},iA=t=>typeof t=="string",Rv=t=>{if(HS(t)){Ho(t.length===4);const[e,n,i,r]=t;return zl(e,n,i,r)}else if(iA(t))return Ho(Cv[t]!==void 0),Cv[t];return t},pc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],Pv={value:null,addProjectionMetrics:null};function rA(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function c(d){o.has(d)&&(u.schedule(d),t()),l++,d(a)}const u={schedule:(d,f=!1,h=!1)=>{const y=h&&r?n:i;return f&&o.add(d),y.has(d)||y.add(d),d},cancel:d=>{i.delete(d),o.delete(d)},process:d=>{if(a=d,r){s=!0;return}r=!0,[n,i]=[i,n],n.forEach(c),e&&Pv.value&&Pv.value.frameloop[e].push(l),l=0,n.clear(),r=!1,s&&(s=!1,u.process(d))}};return u}const sA=40;function GS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=pc.reduce((x,S)=>(x[S]=rA(s,e?S:void 0),x),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:f,render:h,postRender:m}=o,y=()=>{const x=hr.useManualTiming?r.timestamp:performance.now();n=!1,hr.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(x-r.timestamp,sA),1)),r.timestamp=x,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),f.process(r),h.process(r),m.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(y))},g=()=>{n=!0,i=!0,r.isProcessing||t(y)};return{schedule:pc.reduce((x,S)=>{const b=o[S];return x[S]=(C,A=!1,R=!1)=>(n||g(),b.schedule(C,A,R)),x},{}),cancel:x=>{for(let S=0;S<pc.length;S++)o[pc[S]].cancel(x)},state:r,steps:o}}const{schedule:pt,cancel:Ci,state:en,steps:af}=GS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Un,!0);let au;function oA(){au=void 0}const In={now:()=>(au===void 0&&In.set(en.isProcessing||hr.useManualTiming?en.timestamp:performance.now()),au),set:t=>{au=t,queueMicrotask(oA)}},jS=t=>e=>typeof e=="string"&&e.startsWith(t),mg=jS("--"),aA=jS("var(--"),gg=t=>aA(t)?lA.test(t.split("/*")[0].trim()):!1,lA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ia={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},xl={...ia,transform:t=>Gi(0,1,t)},mc={...ia,default:1},ja=t=>Math.round(t*1e5)/1e5,vg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function cA(t){return t==null}const uA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xg=(t,e)=>n=>!!(typeof n=="string"&&uA.test(n)&&n.startsWith(t)||e&&!cA(n)&&Object.prototype.hasOwnProperty.call(n,e)),WS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(vg);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},dA=t=>Gi(0,255,t),lf={...ia,transform:t=>Math.round(dA(t))},xs={test:xg("rgb","red"),parse:WS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+lf.transform(t)+", "+lf.transform(e)+", "+lf.transform(n)+", "+ja(xl.transform(i))+")"};function fA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const tp={test:xg("#"),parse:fA,transform:xs.transform},Hl=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),wr=Hl("deg"),zi=Hl("%"),ze=Hl("px"),hA=Hl("vh"),pA=Hl("vw"),Nv={...zi,parse:t=>zi.parse(t)/100,transform:t=>zi.transform(t*100)},go={test:xg("hsl","hue"),parse:WS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+zi.transform(ja(e))+", "+zi.transform(ja(n))+", "+ja(xl.transform(i))+")"},Yt={test:t=>xs.test(t)||tp.test(t)||go.test(t),parse:t=>xs.test(t)?xs.parse(t):go.test(t)?go.parse(t):tp.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?xs.transform(t):go.transform(t),getAnimatableNone:t=>{const e=Yt.parse(t);return e.alpha=0,Yt.transform(e)}},mA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function gA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(vg))==null?void 0:e.length)||0)+(((n=t.match(mA))==null?void 0:n.length)||0)>0}const XS="number",YS="color",vA="var",xA="var(",Dv="${}",yA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yl(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(yA,l=>(Yt.test(l)?(i.color.push(s),r.push(YS),n.push(Yt.parse(l))):l.startsWith(xA)?(i.var.push(s),r.push(vA),n.push(l)):(i.number.push(s),r.push(XS),n.push(parseFloat(l))),++s,Dv)).split(Dv);return{values:n,split:a,indexes:i,types:r}}function $S(t){return yl(t).values}function KS(t){const{split:e,types:n}=yl(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===XS?s+=ja(r[o]):a===YS?s+=Yt.transform(r[o]):s+=r[o]}return s}}const _A=t=>typeof t=="number"?0:Yt.test(t)?Yt.getAnimatableNone(t):t;function SA(t){const e=$S(t);return KS(t)(e.map(_A))}const Wr={test:gA,parse:$S,createTransformer:KS,getAnimatableNone:SA};function cf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function MA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=cf(l,a,t+1/3),s=cf(l,a,t),o=cf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Wu(t,e){return n=>n>0?e:t}const Lt=(t,e,n)=>t+(e-t)*n,uf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},EA=[tp,xs,go],wA=t=>EA.find(e=>e.test(t));function Iv(t){const e=wA(t);if(!e)return!1;let n=e.parse(t);return e===go&&(n=MA(n)),n}const Lv=(t,e)=>{const n=Iv(t),i=Iv(e);if(!n||!i)return Wu(t,e);const r={...n};return s=>(r.red=uf(n.red,i.red,s),r.green=uf(n.green,i.green,s),r.blue=uf(n.blue,i.blue,s),r.alpha=Lt(n.alpha,i.alpha,s),xs.transform(r))},np=new Set(["none","hidden"]);function TA(t,e){return np.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function bA(t,e){return n=>Lt(t,e,n)}function yg(t){return typeof t=="number"?bA:typeof t=="string"?gg(t)?Wu:Yt.test(t)?Lv:RA:Array.isArray(t)?qS:typeof t=="object"?Yt.test(t)?Lv:AA:Wu}function qS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>yg(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function AA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=yg(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function CA(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const RA=(t,e)=>{const n=Wr.createTransformer(e),i=yl(t),r=yl(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?np.has(t)&&!r.values.length||np.has(e)&&!i.values.length?TA(t,e):Vl(qS(CA(i,r),r.values),n):Wu(t,e)};function ZS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Lt(t,e,n):yg(t)(t,e)}const PA=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>pt.update(e,n),stop:()=>Ci(e),now:()=>en.isProcessing?en.timestamp:In.now()}},JS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Xu=2e4;function _g(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Xu;)e+=n,i=t.next(e);return e>=Xu?1/0:e}function NA(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(_g(i),Xu);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Vi(r)}}const DA=5;function QS(t,e,n){const i=Math.max(e-DA,0);return fg(n-t(i),e-i)}const Bt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},df=.001;function IA({duration:t=Bt.duration,bounce:e=Bt.bounce,velocity:n=Bt.velocity,mass:i=Bt.mass}){let r,s,o=1-e;o=Gi(Bt.minDamping,Bt.maxDamping,o),t=Gi(Bt.minDuration,Bt.maxDuration,Vi(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,h=ip(c,o),m=Math.exp(-d);return df-f/h*m},s=c=>{const d=c*o*t,f=d*n+n,h=Math.pow(o,2)*Math.pow(c,2)*t,m=Math.exp(-d),y=ip(Math.pow(c,2),o);return(-r(c)+df>0?-1:1)*((f-h)*m)/y}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-df+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=FA(r,s,a);if(t=Bi(t),isNaN(l))return{stiffness:Bt.stiffness,damping:Bt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const LA=12;function FA(t,e,n){let i=n;for(let r=1;r<LA;r++)i=i-t(i)/e(i);return i}function ip(t,e){return t*Math.sqrt(1-e*e)}const kA=["duration","bounce"],UA=["stiffness","damping","mass"];function Fv(t,e){return e.some(n=>t[n]!==void 0)}function OA(t){let e={velocity:Bt.velocity,stiffness:Bt.stiffness,damping:Bt.damping,mass:Bt.mass,isResolvedFromDuration:!1,...t};if(!Fv(t,UA)&&Fv(t,kA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Gi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Bt.mass,stiffness:r,damping:s}}else{const n=IA(t);e={...e,...n,mass:Bt.mass},e.isResolvedFromDuration=!0}return e}function Yu(t=Bt.visualDuration,e=Bt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:h}=OA({...n,velocity:-Vi(n.velocity||0)}),m=f||0,y=c/(2*Math.sqrt(l*u)),g=o-s,p=Vi(Math.sqrt(l/u)),_=Math.abs(g)<5;i||(i=_?Bt.restSpeed.granular:Bt.restSpeed.default),r||(r=_?Bt.restDelta.granular:Bt.restDelta.default);let x;if(y<1){const b=ip(p,y);x=C=>{const A=Math.exp(-y*p*C);return o-A*((m+y*p*g)/b*Math.sin(b*C)+g*Math.cos(b*C))}}else if(y===1)x=b=>o-Math.exp(-p*b)*(g+(m+p*g)*b);else{const b=p*Math.sqrt(y*y-1);x=C=>{const A=Math.exp(-y*p*C),R=Math.min(b*C,300);return o-A*((m+y*p*g)*Math.sinh(R)+b*g*Math.cosh(R))/b}}const S={calculatedDuration:h&&d||null,next:b=>{const C=x(b);if(h)a.done=b>=d;else{let A=b===0?m:0;y<1&&(A=b===0?Bi(m):QS(x,b,C));const R=Math.abs(A)<=i,T=Math.abs(o-C)<=r;a.done=R&&T}return a.value=a.done?o:C,a},toString:()=>{const b=Math.min(_g(S),Xu),C=JS(A=>S.next(b*A).value,b,30);return b+"ms "+C},toTransition:()=>{}};return S}Yu.applyToOptions=t=>{const e=NA(t,100,Yu);return t.ease=e.ease,t.duration=Bi(e.duration),t.type="keyframes",t};function rp({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},h=R=>a!==void 0&&R<a||l!==void 0&&R>l,m=R=>a===void 0?l:l===void 0||Math.abs(a-R)<Math.abs(l-R)?a:l;let y=n*e;const g=d+y,p=o===void 0?g:o(g);p!==g&&(y=p-d);const _=R=>-y*Math.exp(-R/i),x=R=>p+_(R),S=R=>{const T=_(R),M=x(R);f.done=Math.abs(T)<=c,f.value=f.done?p:M};let b,C;const A=R=>{h(f.value)&&(b=R,C=Yu({keyframes:[f.value,m(f.value)],velocity:QS(x,R,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:R=>{let T=!1;return!C&&b===void 0&&(T=!0,S(R),A(R)),b!==void 0&&R>=b?C.next(R-b):(!T&&S(R),f)}}}function BA(t,e,n){const i=[],r=n||hr.mix||ZS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Un:e;a=Vl(l,a)}i.push(a)}return i}function Sg(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Ho(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=BA(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=Go(t[d],t[d+1],u);return a[d](f)};return n?u=>c(Gi(t[0],t[s-1],u)):c}function VA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Go(0,e,i);t.push(Lt(n,1,r))}}function eM(t){const e=[0];return VA(e,t.length-1),e}function zA(t,e){return t.map(n=>n*e)}function HA(t,e){return t.map(()=>e||zS).splice(0,t.length-1)}function Wa({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=nA(i)?i.map(Rv):Rv(i),s={done:!1,value:e[0]},o=zA(n&&n.length===e.length?n:eM(e),t),a=Sg(o,e,{ease:Array.isArray(r)?r:HA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const GA=t=>t!==null;function Mg(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(GA),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const jA={decay:rp,inertia:rp,tween:Wa,keyframes:Wa,spring:Yu};function tM(t){typeof t.type=="string"&&(t.type=jA[t.type])}class Eg{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const WA=t=>t/100;class wg extends Eg{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==In.now()&&this.tick(In.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;tM(e);const{type:n=Wa,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||Wa;l!==Wa&&typeof a[0]!="number"&&(this.mixKeyframes=Vl(WA,ZS(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=_g(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:d,repeatType:f,repeatDelay:h,type:m,onUpdate:y,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const p=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?p<0:p>r;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let x=this.currentTime,S=i;if(d){const R=Math.min(this.currentTime,r)/a;let T=Math.floor(R),M=R%1;!M&&R>=1&&(M=1),M===1&&T--,T=Math.min(T,d+1),!!(T%2)&&(f==="reverse"?(M=1-M,h&&(M-=h/a)):f==="mirror"&&(S=o)),x=Gi(0,1,M)*a}const b=_?{done:!1,value:u[0]}:S.next(x);s&&(b.value=s(b.value));let{done:C}=b;!_&&l!==null&&(C=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return A&&m!==rp&&(b.value=Mg(u,this.options,g,this.speed)),y&&y(b.value),A&&this.finish(),b}then(e,n){return this.finished.then(e,n)}get duration(){return Vi(this.calculatedDuration)}get time(){return Vi(this.currentTime)}set time(e){var n;e=Bi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(In.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Vi(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=PA,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(In.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function XA(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ys=t=>t*180/Math.PI,sp=t=>{const e=ys(Math.atan2(t[1],t[0]));return op(e)},YA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:sp,rotateZ:sp,skewX:t=>ys(Math.atan(t[1])),skewY:t=>ys(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},op=t=>(t=t%360,t<0&&(t+=360),t),kv=sp,Uv=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Ov=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),$A={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Uv,scaleY:Ov,scale:t=>(Uv(t)+Ov(t))/2,rotateX:t=>op(ys(Math.atan2(t[6],t[5]))),rotateY:t=>op(ys(Math.atan2(-t[2],t[0]))),rotateZ:kv,rotate:kv,skewX:t=>ys(Math.atan(t[4])),skewY:t=>ys(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function ap(t){return t.includes("scale")?1:0}function lp(t,e){if(!t||t==="none")return ap(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=$A,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=YA,r=a}if(!r)return ap(e);const s=i[e],o=r[1].split(",").map(qA);return typeof s=="function"?s(o):o[s]}const KA=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return lp(n,e)};function qA(t){return parseFloat(t.trim())}const ra=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],sa=new Set(ra),Bv=t=>t===ia||t===ze,ZA=new Set(["x","y","z"]),JA=ra.filter(t=>!ZA.has(t));function QA(t){const e=[];return JA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Es={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>lp(e,"x"),y:(t,{transform:e})=>lp(e,"y")};Es.translateX=Es.x;Es.translateY=Es.y;const ws=new Set;let cp=!1,up=!1,dp=!1;function nM(){if(up){const t=Array.from(ws).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=QA(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}up=!1,cp=!1,ws.forEach(t=>t.complete(dp)),ws.clear()}function iM(){ws.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(up=!0)})}function eC(){dp=!0,iM(),nM(),dp=!1}class Tg{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(ws.add(this),cp||(cp=!0,pt.read(iM),pt.resolveKeyframes(nM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}XA(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ws.delete(this)}cancel(){this.state==="scheduled"&&(ws.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const tC=t=>t.startsWith("--");function nC(t,e,n){tC(e)?t.style.setProperty(e,n):t.style[e]=n}const rM=ug(()=>window.ScrollTimeline!==void 0),iC={};function rC(t,e){const n=ug(t);return()=>iC[e]??n()}const sM=rC(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Da=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Vv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Da([0,.65,.55,1]),circOut:Da([.55,0,1,.45]),backIn:Da([.31,.01,.66,-.59]),backOut:Da([.33,1.53,.69,.99])};function oM(t,e){if(t)return typeof t=="function"?sM()?JS(t,e):"ease-out":HS(t)?Da(t):Array.isArray(t)?t.map(n=>oM(n,e)||Vv.easeOut):Vv[t]}function sC(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const d=oM(a,r);Array.isArray(d)&&(u.easing=d);const f={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),t.animate(u,f)}function aM(t){return typeof t=="function"&&"applyToOptions"in t}function oC({type:t,...e}){return aM(t)&&sM()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class aC extends Eg{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Ho(typeof e.type!="string");const c=oC(e);this.animation=sC(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=Mg(r,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(u):nC(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,n;this.isPseudoElement||(n=(e=this.animation).commitStyles)==null||n.call(e)}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Vi(Number(e))}get time(){return Vi(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Bi(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&rM()?(this.animation.timeline=e,Un):n(this)}}const lM={anticipate:OS,backInOut:US,circInOut:VS};function lC(t){return t in lM}function cC(t){typeof t.ease=="string"&&lC(t.ease)&&(t.ease=lM[t.ease])}const zv=10;class uC extends aC{constructor(e){cC(e),tM(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new wg({...o,autoplay:!1}),l=Bi(this.finishedTime??this.time);n.setWithVelocity(a.sample(l-zv).value,a.sample(l).value,zv),a.stop()}}const Hv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Wr.test(t)||t==="0")&&!t.startsWith("url("));function dC(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function fC(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Hv(r,e),a=Hv(s,e);return!o||!a?!1:dC(t)||(n==="spring"||aM(n))&&i}function fp(t){t.duration=0,t.type}const hC=new Set(["opacity","clipPath","filter","transform"]),pC=ug(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function mC(t){var u;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o}=t;if(!(((u=e==null?void 0:e.owner)==null?void 0:u.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return pC()&&n&&hC.has(n)&&(n!=="transform"||!c)&&!l&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const gC=40;class vC extends Eg{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...d}){var m;super(),this.stop=()=>{var y,g;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(g=this.keyframeResolver)==null||g.cancel()},this.createdAt=In.now();const f={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...d},h=(u==null?void 0:u.KeyframeResolver)||Tg;this.keyframeResolver=new h(a,(y,g,p)=>this.onKeyframesResolved(y,g,f,!p),l,c,u),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(e,n,i,r){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=In.now(),fC(e,s,o,a)||((hr.instantAnimations||!l)&&(u==null||u(Mg(e,i,n))),e[0]=e[e.length-1],fp(i),i.repeat=0);const f={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>gC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},h=!c&&mC(f)?new uC({...f,element:f.motionValue.owner.current}):new wg(f);h.finished.then(()=>this.notifyFinished()).catch(Un),this.pendingTimeline&&(this.stopTimeline=h.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=h}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),eC()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const xC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yC(t){const e=xC.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function cM(t,e,n=1){const[i,r]=yC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return PS(o)?parseFloat(o):o}return gg(r)?cM(r,e,n+1):r}function bg(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const uM=new Set(["width","height","top","left","right","bottom",...ra]),_C={test:t=>t==="auto",parse:t=>t},dM=t=>e=>e.test(t),fM=[ia,ze,zi,wr,pA,hA,_C],Gv=t=>fM.find(dM(t));function SC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||DS(t):!0}const MC=new Set(["brightness","contrast","saturate","opacity"]);function EC(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(vg)||[];if(!i)return t;const r=n.replace(i,"");let s=MC.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const wC=/\b([a-z-]*)\(.*?\)/gu,hp={...Wr,getAnimatableNone:t=>{const e=t.match(wC);return e?e.map(EC).join(" "):t}},jv={...ia,transform:Math.round},TC={rotate:wr,rotateX:wr,rotateY:wr,rotateZ:wr,scale:mc,scaleX:mc,scaleY:mc,scaleZ:mc,skew:wr,skewX:wr,skewY:wr,distance:ze,translateX:ze,translateY:ze,translateZ:ze,x:ze,y:ze,z:ze,perspective:ze,transformPerspective:ze,opacity:xl,originX:Nv,originY:Nv,originZ:ze},Ag={borderWidth:ze,borderTopWidth:ze,borderRightWidth:ze,borderBottomWidth:ze,borderLeftWidth:ze,borderRadius:ze,radius:ze,borderTopLeftRadius:ze,borderTopRightRadius:ze,borderBottomRightRadius:ze,borderBottomLeftRadius:ze,width:ze,maxWidth:ze,height:ze,maxHeight:ze,top:ze,right:ze,bottom:ze,left:ze,padding:ze,paddingTop:ze,paddingRight:ze,paddingBottom:ze,paddingLeft:ze,margin:ze,marginTop:ze,marginRight:ze,marginBottom:ze,marginLeft:ze,backgroundPositionX:ze,backgroundPositionY:ze,...TC,zIndex:jv,fillOpacity:xl,strokeOpacity:xl,numOctaves:jv},bC={...Ag,color:Yt,backgroundColor:Yt,outlineColor:Yt,fill:Yt,stroke:Yt,borderColor:Yt,borderTopColor:Yt,borderRightColor:Yt,borderBottomColor:Yt,borderLeftColor:Yt,filter:hp,WebkitFilter:hp},hM=t=>bC[t];function pM(t,e){let n=hM(t);return n!==hp&&(n=Wr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const AC=new Set(["auto","none","0"]);function CC(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!AC.has(s)&&yl(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=pM(n,r)}class RC extends Tg{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),gg(c))){const u=cM(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!uM.has(i)||e.length!==2)return;const[r,s]=e,o=Gv(r),a=Gv(s);if(o!==a)if(Bv(o)&&Bv(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else Es[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||SC(e[r]))&&i.push(r);i.length&&CC(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Es[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=Es[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Cg(t,e,n){if(t instanceof EventTarget)return[t];if(typeof t=="string"){const r=document.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t)}const mM=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function Rg(t){return NS(t)&&"offsetHeight"in t}const Wv=30,PC=t=>!isNaN(parseFloat(t)),Xa={current:void 0};class NC{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=In.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=In.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=PC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new dg);const i=this.events[e].add(n);return e==="change"?()=>{i(),pt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Xa.current&&Xa.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=In.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Wv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Wv);return fg(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Mi(t,e){return new NC(t,e)}const{schedule:Pg,cancel:OO}=GS(queueMicrotask,!1),mi={x:!1,y:!1};function gM(){return mi.x||mi.y}function DC(t){return t==="x"||t==="y"?mi[t]?null:(mi[t]=!0,()=>{mi[t]=!1}):mi.x||mi.y?null:(mi.x=mi.y=!0,()=>{mi.x=mi.y=!1})}function vM(t,e){const n=Cg(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function Xv(t){return!(t.pointerType==="touch"||gM())}function IC(t,e,n={}){const[i,r,s]=vM(t,n),o=a=>{if(!Xv(a))return;const{target:l}=a,c=e(l,a);if(typeof c!="function"||!l)return;const u=d=>{Xv(d)&&(c(d),l.removeEventListener("pointerleave",u))};l.addEventListener("pointerleave",u,r)};return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const xM=(t,e)=>e?t===e?!0:xM(t,e.parentElement):!1,Ng=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,LC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function FC(t){return LC.has(t.tagName)||t.tabIndex!==-1}const lu=new WeakSet;function Yv(t){return e=>{e.key==="Enter"&&t(e)}}function ff(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const kC=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Yv(()=>{if(lu.has(n))return;ff(n,"down");const r=Yv(()=>{ff(n,"up")}),s=()=>ff(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function $v(t){return Ng(t)&&!gM()}function UC(t,e,n={}){const[i,r,s]=vM(t,n),o=a=>{const l=a.currentTarget;if(!$v(a))return;lu.add(l);const c=e(l,a),u=(h,m)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),lu.has(l)&&lu.delete(l),$v(h)&&typeof c=="function"&&c(h,{success:m})},d=h=>{u(h,l===window||l===document||n.useGlobalTarget||xM(l,h.target))},f=h=>{u(h,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),Rg(a)&&(a.addEventListener("focus",c=>kC(c,r)),!FC(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Dg(t){return NS(t)&&"ownerSVGElement"in t}const cu=new WeakMap;let Tr;const yM=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Dg(i)&&"getBBox"in i?i.getBBox()[e]:i[n],OC=yM("inline","width","offsetWidth"),BC=yM("block","height","offsetHeight");function VC({target:t,borderBoxSize:e}){var n;(n=cu.get(t))==null||n.forEach(i=>{i(t,{get width(){return OC(t,e)},get height(){return BC(t,e)}})})}function zC(t){t.forEach(VC)}function HC(){typeof ResizeObserver>"u"||(Tr=new ResizeObserver(zC))}function GC(t,e){Tr||HC();const n=Cg(t);return n.forEach(i=>{let r=cu.get(i);r||(r=new Set,cu.set(i,r)),r.add(e),Tr==null||Tr.observe(i)}),()=>{n.forEach(i=>{const r=cu.get(i);r==null||r.delete(e),r!=null&&r.size||Tr==null||Tr.unobserve(i)})}}const uu=new Set;let vo;function jC(){vo=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};uu.forEach(e=>e(t))},window.addEventListener("resize",vo)}function WC(t){return uu.add(t),vo||jC(),()=>{uu.delete(t),!uu.size&&typeof vo=="function"&&(window.removeEventListener("resize",vo),vo=void 0)}}function XC(t,e){return typeof t=="function"?WC(t):GC(t,e)}function _M(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return pt.preUpdate(i,!0),()=>Ci(i)}function YC(t){return Dg(t)&&t.tagName==="svg"}function $C(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=Sg(r,s,o);return e?a(i):a}const pn=t=>!!(t&&t.getVelocity),KC=[...fM,Yt,Wr],qC=t=>KC.find(dM(t)),_d=J.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class ZC extends J.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=n.offsetParent,r=Rg(i)&&i.offsetWidth||0,s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft,s.right=r-s.width-s.left}return null}componentDidUpdate(){}render(){return this.props.children}}function JC({children:t,isPresent:e,anchorX:n,root:i}){const r=J.useId(),s=J.useRef(null),o=J.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=J.useContext(_d);return J.useInsertionEffect(()=>{const{width:l,height:c,top:u,left:d,right:f}=o.current;if(e||!s.current||!l||!c)return;const h=n==="left"?`left: ${d}`:`right: ${f}`;s.current.dataset.motionPopId=r;const m=document.createElement("style");a&&(m.nonce=a);const y=i??document.head;return y.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${c}px !important;
            ${h}px !important;
            top: ${u}px !important;
          }
        `),()=>{y.contains(m)&&y.removeChild(m)}},[e]),v.jsx(ZC,{isPresent:e,childRef:s,sizeRef:o,children:J.cloneElement(t,{ref:s})})}const QC=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,root:l})=>{const c=na(eR),u=J.useId();let d=!0,f=J.useMemo(()=>(d=!1,{id:u,initial:e,isPresent:n,custom:r,onExitComplete:h=>{c.set(h,!0);for(const m of c.values())if(!m)return;i&&i()},register:h=>(c.set(h,!1),()=>c.delete(h))}),[n,c,i]);return s&&d&&(f={...f}),J.useMemo(()=>{c.forEach((h,m)=>c.set(m,!1))},[n]),J.useEffect(()=>{!n&&!c.size&&i&&i()},[n]),o==="popLayout"&&(t=v.jsx(JC,{isPresent:n,anchorX:a,root:l,children:t})),v.jsx(yd.Provider,{value:f,children:t})};function eR(){return new Map}function SM(t=!0){const e=J.useContext(yd);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=J.useId();J.useEffect(()=>{if(t)return r(s)},[t]);const o=J.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const gc=t=>t.key||"";function Kv(t){const e=[];return J.Children.forEach(t,n=>{J.isValidElement(n)&&e.push(n)}),e}const Ig=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",root:l})=>{const[c,u]=SM(o),d=J.useMemo(()=>Kv(t),[t]),f=o&&!c?[]:d.map(gc),h=J.useRef(!0),m=J.useRef(d),y=na(()=>new Map),[g,p]=J.useState(d),[_,x]=J.useState(d);xd(()=>{h.current=!1,m.current=d;for(let C=0;C<_.length;C++){const A=gc(_[C]);f.includes(A)?y.delete(A):y.get(A)!==!0&&y.set(A,!1)}},[_,f.length,f.join("-")]);const S=[];if(d!==g){let C=[...d];for(let A=0;A<_.length;A++){const R=_[A],T=gc(R);f.includes(T)||(C.splice(A,0,R),S.push(R))}return s==="wait"&&S.length&&(C=S),x(Kv(C)),p(d),null}const{forceRender:b}=J.useContext(og);return v.jsx(v.Fragment,{children:_.map(C=>{const A=gc(C),R=o&&!c?!1:d===_||f.includes(A),T=()=>{if(y.has(A))y.set(A,!0);else return;let M=!0;y.forEach(L=>{L||(M=!1)}),M&&(b==null||b(),x(m.current),o&&(u==null||u()),i&&i())};return v.jsx(QC,{isPresent:R,initial:!h.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:l,onExitComplete:R?void 0:T,anchorX:a,children:C},A)})})},MM=J.createContext({strict:!1}),qv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},jo={};for(const t in qv)jo[t]={isEnabled:e=>qv[t].some(n=>!!e[n])};function tR(t){for(const e in t)jo[e]={...jo[e],...t[e]}}const nR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function $u(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||nR.has(t)}let EM=t=>!$u(t);function iR(t){typeof t=="function"&&(EM=e=>e.startsWith("on")?!$u(e):t(e))}try{iR(require("@emotion/is-prop-valid").default)}catch{}function rR(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(EM(r)||n===!0&&$u(r)||!e&&!$u(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Sd=J.createContext({});function Md(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function _l(t){return typeof t=="string"||Array.isArray(t)}const Lg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Fg=["initial",...Lg];function Ed(t){return Md(t.animate)||Fg.some(e=>_l(t[e]))}function wM(t){return!!(Ed(t)||t.variants)}function sR(t,e){if(Ed(t)){const{initial:n,animate:i}=t;return{initial:n===!1||_l(n)?n:void 0,animate:_l(i)?i:void 0}}return t.inherit!==!1?e:{}}function oR(t){const{initial:e,animate:n}=sR(t,J.useContext(Sd));return J.useMemo(()=>({initial:e,animate:n}),[Zv(e),Zv(n)])}function Zv(t){return Array.isArray(t)?t.join(" "):t}const Sl={};function aR(t){for(const e in t)Sl[e]=t[e],mg(e)&&(Sl[e].isCSSVariable=!0)}function TM(t,{layout:e,layoutId:n}){return sa.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Sl[t]||t==="opacity")}const lR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cR=ra.length;function uR(t,e,n){let i="",r=!0;for(let s=0;s<cR;s++){const o=ra[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=mM(a,Ag[o]);if(!l){r=!1;const u=lR[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function kg(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(sa.has(l)){o=!0;continue}else if(mg(l)){r[l]=c;continue}else{const u=mM(c,Ag[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=uR(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const Ug=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function bM(t,e,n){for(const i in e)!pn(e[i])&&!TM(i,n)&&(t[i]=e[i])}function dR({transformTemplate:t},e){return J.useMemo(()=>{const n=Ug();return kg(n,e,t),Object.assign({},n.vars,n.style)},[e])}function fR(t,e){const n=t.style||{},i={};return bM(i,n,t),Object.assign(i,dR(t,e)),i}function hR(t,e){const n={},i=fR(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const pR={offset:"stroke-dashoffset",array:"stroke-dasharray"},mR={offset:"strokeDashoffset",array:"strokeDasharray"};function gR(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?pR:mR;t[s.offset]=ze.transform(-i);const o=ze.transform(e),a=ze.transform(n);t[s.array]=`${o} ${a}`}function AM(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(kg(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:f}=t;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),f.transform&&(f.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete d.transformBox),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&gR(d,r,s,o,!1)}const CM=()=>({...Ug(),attrs:{}}),RM=t=>typeof t=="string"&&t.toLowerCase()==="svg";function vR(t,e,n,i){const r=J.useMemo(()=>{const s=CM();return AM(s,e,RM(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};bM(s,t.style,t),r.style={...s,...r.style}}return r}const xR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Og(t){return typeof t!="string"||t.includes("-")?!1:!!(xR.indexOf(t)>-1||/[A-Z]/u.test(t))}function yR(t,e,n,{latestValues:i},r,s=!1){const a=(Og(t)?vR:hR)(e,i,r,t),l=rR(e,typeof t=="string",s),c=t!==J.Fragment?{...l,...a,ref:n}:{},{children:u}=e,d=J.useMemo(()=>pn(u)?u.get():u,[u]);return J.createElement(t,{...c,children:d})}function Jv(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Bg(t,e,n,i){if(typeof e=="function"){const[r,s]=Jv(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Jv(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function du(t){return pn(t)?t.get():t}function _R({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:SR(n,i,r,t),renderState:e()}}function SR(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=du(s[f]);let{initial:o,animate:a}=t;const l=Ed(t),c=wM(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!Md(d)){const f=Array.isArray(d)?d:[d];for(let h=0;h<f.length;h++){const m=Bg(t,f[h]);if(m){const{transitionEnd:y,transition:g,...p}=m;for(const _ in p){let x=p[_];if(Array.isArray(x)){const S=u?x.length-1:0;x=x[S]}x!==null&&(r[_]=x)}for(const _ in y)r[_]=y[_]}}}return r}const PM=t=>(e,n)=>{const i=J.useContext(Sd),r=J.useContext(yd),s=()=>_R(t,e,i,r);return n?s():na(s)};function Vg(t,e,n){var s;const{style:i}=t,r={};for(const o in i)(pn(i[o])||e.style&&pn(e.style[o])||TM(o,t)||((s=n==null?void 0:n.getValue(o))==null?void 0:s.liveStyle)!==void 0)&&(r[o]=i[o]);return r}const MR=PM({scrapeMotionValuesFromProps:Vg,createRenderState:Ug});function NM(t,e,n){const i=Vg(t,e,n);for(const r in t)if(pn(t[r])||pn(e[r])){const s=ra.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}const ER=PM({scrapeMotionValuesFromProps:NM,createRenderState:CM}),wR=Symbol.for("motionComponentSymbol");function xo(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function TR(t,e,n){return J.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):xo(n)&&(n.current=i))},[e])}const zg=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),bR="framerAppearId",DM="data-"+zg(bR),IM=J.createContext({});function AR(t,e,n,i,r){var y,g;const{visualElement:s}=J.useContext(Sd),o=J.useContext(MM),a=J.useContext(yd),l=J.useContext(_d).reducedMotion,c=J.useRef(null);i=i||o.renderer,!c.current&&i&&(c.current=i(t,{visualState:e,parent:s,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const u=c.current,d=J.useContext(IM);u&&!u.projection&&r&&(u.type==="html"||u.type==="svg")&&CR(c.current,n,r,d);const f=J.useRef(!1);J.useInsertionEffect(()=>{u&&f.current&&u.update(n,a)});const h=n[DM],m=J.useRef(!!h&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,h))&&((g=window.MotionHasOptimisedAnimation)==null?void 0:g.call(window,h)));return xd(()=>{u&&(f.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),u.scheduleRenderMicrotask(),m.current&&u.animationState&&u.animationState.animateChanges())}),J.useEffect(()=>{u&&(!m.current&&u.animationState&&u.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)==null||p.call(window,h)}),m.current=!1),u.enteringChildren=void 0)}),u}function CR(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:LM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&xo(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}function LM(t){if(t)return t.options.allowProjection!==!1?t.projection:LM(t.parent)}function hf(t,{forwardMotionProps:e=!1}={},n,i){n&&tR(n);const r=Og(t)?ER:MR;function s(a,l){let c;const u={...J.useContext(_d),...a,layoutId:RR(a)},{isStatic:d}=u,f=oR(a),h=r(a,d);if(!d&&ag){PR();const m=NR(u);c=m.MeasureLayout,f.visualElement=AR(t,h,u,i,m.ProjectionNode)}return v.jsxs(Sd.Provider,{value:f,children:[c&&f.visualElement?v.jsx(c,{visualElement:f.visualElement,...u}):null,yR(t,a,TR(h,f.visualElement,l),h,d,e)]})}s.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const o=J.forwardRef(s);return o[wR]=t,o}function RR({layoutId:t}){const e=J.useContext(og).id;return e&&t!==void 0?e+"-"+t:t}function PR(t,e){J.useContext(MM).strict}function NR(t){const{drag:e,layout:n}=jo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function DR(t,e){if(typeof Proxy>"u")return hf;const n=new Map,i=(s,o)=>hf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,hf(o,void 0,t,e)),n.get(o))})}function FM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function IR({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function LR(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function pf(t){return t===void 0||t===1}function pp({scale:t,scaleX:e,scaleY:n}){return!pf(t)||!pf(e)||!pf(n)}function us(t){return pp(t)||kM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function kM(t){return Qv(t.x)||Qv(t.y)}function Qv(t){return t&&t!=="0%"}function Ku(t,e,n){const i=t-n,r=e*i;return n+r}function ex(t,e,n,i,r){return r!==void 0&&(t=Ku(t,r,i)),Ku(t,n,i)+e}function mp(t,e=0,n=1,i,r){t.min=ex(t.min,e,n,i,r),t.max=ex(t.max,e,n,i,r)}function UM(t,{x:e,y:n}){mp(t.x,e.translate,e.scale,e.originPoint),mp(t.y,n.translate,n.scale,n.originPoint)}const tx=.999999999999,nx=1.0000000000001;function FR(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&_o(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,UM(t,o)),i&&us(s.latestValues)&&_o(t,s.latestValues))}e.x<nx&&e.x>tx&&(e.x=1),e.y<nx&&e.y>tx&&(e.y=1)}function yo(t,e){t.min=t.min+e,t.max=t.max+e}function ix(t,e,n,i,r=.5){const s=Lt(t.min,t.max,r);mp(t,e,n,s,i)}function _o(t,e){ix(t.x,e.x,e.scaleX,e.scale,e.originX),ix(t.y,e.y,e.scaleY,e.scale,e.originY)}function OM(t,e){return FM(LR(t.getBoundingClientRect(),e))}function kR(t,e,n){const i=OM(t,n),{scroll:r}=e;return r&&(yo(i.x,r.offset.x),yo(i.y,r.offset.y)),i}const rx=()=>({translate:0,scale:1,origin:0,originPoint:0}),So=()=>({x:rx(),y:rx()}),sx=()=>({min:0,max:0}),Ht=()=>({x:sx(),y:sx()}),gp={current:null},BM={current:!1};function UR(){if(BM.current=!0,!!ag)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>gp.current=t.matches;t.addEventListener("change",e),e()}else gp.current=!1}const OR=new WeakMap;function BR(t,e,n){for(const i in e){const r=e[i],s=n[i];if(pn(r))t.addValue(i,r);else if(pn(s))t.addValue(i,Mi(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Mi(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const ox=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class VR{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Tg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=In.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,pt.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Ed(n),this.isVariantNode=wM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const h=d[f];l[f]!==void 0&&pn(h)&&h.set(l[f])}}mount(e){var n;this.current=e,OR.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,r)=>this.bindToMotionValue(r,i)),BM.current||UR(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:gp.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),Ci(this.notifyUpdate),Ci(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=sa.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&pt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in jo){const n=jo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ht()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<ox.length;i++){const r=ox[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=BR(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Mi(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(PS(i)||DS(i))?i=parseFloat(i):!qC(i)&&Wr.test(n)&&(i=pM(e,n)),this.setBaseTarget(e,pn(i)?i.get():i)),pn(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=Bg(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!pn(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new dg),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Pg.render(this.render)}}class VM extends VR{constructor(){super(...arguments),this.KeyframeResolver=RC}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;pn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function zM(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function zR(t){return window.getComputedStyle(t)}class HR extends VM{constructor(){super(...arguments),this.type="html",this.renderInstance=zM}readValueFromInstance(e,n){var i;if(sa.has(n))return(i=this.projection)!=null&&i.isProjecting?ap(n):KA(e,n);{const r=zR(e),s=(mg(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return OM(e,n)}build(e,n,i){kg(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Vg(e,n,i)}}const HM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function GR(t,e,n,i){zM(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(HM.has(r)?r:zg(r),e.attrs[r])}class jR extends VM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ht}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(sa.has(n)){const i=hM(n);return i&&i.default||0}return n=HM.has(n)?n:zg(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return NM(e,n,i)}build(e,n,i){AM(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){GR(e,n,i,r)}mount(e){this.isSVGTag=RM(e.tagName),super.mount(e)}}const WR=(t,e)=>Og(t)?new jR(e):new HR(e,{allowProjection:t!==J.Fragment});function No(t,e,n){const i=t.getProps();return Bg(i,e,n!==void 0?n:i.custom,t)}const vp=t=>Array.isArray(t);function XR(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Mi(n))}function YR(t){return vp(t)?t[t.length-1]||0:t}function $R(t,e){const n=No(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=YR(s[o]);XR(t,o,a)}}function KR(t){return!!(pn(t)&&t.add)}function xp(t,e){const n=t.getValue("willChange");if(KR(n))return n.add(e);if(!n&&hr.WillChange){const i=new hr.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function GM(t){return t.props[DM]}const qR=t=>t!==null;function ZR(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(qR),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const JR={type:"spring",stiffness:500,damping:25,restSpeed:10},QR=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),e2={type:"keyframes",duration:.8},t2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},n2=(t,{keyframes:e})=>e.length>2?e2:sa.has(t)?t.startsWith("scale")?QR(e[1]):JR:t2;function i2({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Hg=(t,e,n,i={},r,s)=>o=>{const a=bg(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Bi(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};i2(a)||Object.assign(u,n2(t,u)),u.duration&&(u.duration=Bi(u.duration)),u.repeatDelay&&(u.repeatDelay=Bi(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(fp(u),u.delay===0&&(d=!0)),(hr.instantAnimations||hr.skipAnimations)&&(d=!0,fp(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const f=ZR(u.keyframes,a);if(f!==void 0){pt.update(()=>{u.onUpdate(f),u.onComplete()});return}}return a.isSync?new wg(u):new vC(u)};function r2({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function jM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=e;i&&(s=i);const l=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const u in a){const d=t.getValue(u,t.latestValues[u]??null),f=a[u];if(f===void 0||c&&r2(c,u))continue;const h={delay:n,...bg(s||{},u)},m=d.get();if(m!==void 0&&!d.isAnimating&&!Array.isArray(f)&&f===m&&!h.velocity)continue;let y=!1;if(window.MotionHandoffAnimation){const p=GM(t);if(p){const _=window.MotionHandoffAnimation(p,u,pt);_!==null&&(h.startTime=_,y=!0)}}xp(t,u),d.start(Hg(u,d,f,t.shouldReduceMotion&&uM.has(u)?{type:!1}:h,t,y));const g=d.animation;g&&l.push(g)}return o&&Promise.all(l).then(()=>{pt.update(()=>{o&&$R(t,o)})}),l}function WM(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}function yp(t,e,n={}){var l;const i=No(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(jM(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=r;return s2(t,e,c,u,d,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function s2(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(yp(l,e,{...o,delay:n+(typeof i=="function"?0:i)+WM(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function o2(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>yp(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=yp(t,e,n);else{const r=typeof e=="function"?No(t,e,n.custom):e;i=Promise.all(jM(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}function XM(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const a2=Fg.length;function YM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?YM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<a2;n++){const i=Fg[n],r=t.props[i];(_l(r)||r===!1)&&(e[i]=r)}return e}const l2=[...Lg].reverse(),c2=Lg.length;function u2(t){return e=>Promise.all(e.map(({animation:n,options:i})=>o2(t,n,i)))}function d2(t){let e=u2(t),n=ax(),i=!0;const r=l=>(c,u)=>{var f;const d=No(t,u,l==="exit"?(f=t.presenceContext)==null?void 0:f.custom:void 0);if(d){const{transition:h,transitionEnd:m,...y}=d;c={...c,...y,...m}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=YM(t.parent)||{},d=[],f=new Set;let h={},m=1/0;for(let g=0;g<c2;g++){const p=l2[g],_=n[p],x=c[p]!==void 0?c[p]:u[p],S=_l(x),b=p===l?_.isActive:null;b===!1&&(m=g);let C=x===u[p]&&x!==c[p]&&S;if(C&&i&&t.manuallyAnimateOnMount&&(C=!1),_.protectedKeys={...h},!_.isActive&&b===null||!x&&!_.prevProp||Md(x)||typeof x=="boolean")continue;const A=f2(_.prevProp,x);let R=A||p===l&&_.isActive&&!C&&S||g>m&&S,T=!1;const M=Array.isArray(x)?x:[x];let L=M.reduce(r(p),{});b===!1&&(L={});const{prevResolvedValues:X={}}=_,H={...X,...L},te=K=>{R=!0,f.has(K)&&(T=!0,f.delete(K)),_.needsAnimating[K]=!0;const F=t.getValue(K);F&&(F.liveStyle=!1)};for(const K in H){const F=L[K],W=X[K];if(h.hasOwnProperty(K))continue;let N=!1;vp(F)&&vp(W)?N=!XM(F,W):N=F!==W,N?F!=null?te(K):f.add(K):F!==void 0&&f.has(K)?te(K):_.protectedKeys[K]=!0}_.prevProp=x,_.prevResolvedValues=L,_.isActive&&(h={...h,...L}),i&&t.blockInitialAnimation&&(R=!1);const ne=C&&A;R&&(!ne||T)&&d.push(...M.map(K=>{const F={type:p};if(typeof K=="string"&&i&&!ne&&t.manuallyAnimateOnMount&&t.parent){const{parent:W}=t,N=No(W,K);if(W.enteringChildren&&N){const{delayChildren:P}=N.transition||{};F.delay=WM(W.enteringChildren,t,P)}}return{animation:K,options:F}}))}if(f.size){const g={};if(typeof c.initial!="boolean"){const p=No(t,Array.isArray(c.initial)?c.initial[0]:c.initial);p&&p.transition&&(g.transition=p.transition)}f.forEach(p=>{const _=t.getBaseTarget(p),x=t.getValue(p);x&&(x.liveStyle=!0),g[p]=_??null}),d.push({animation:g})}let y=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(d):Promise.resolve()}function a(l,c){var d;if(n[l].isActive===c)return Promise.resolve();(d=t.variantChildren)==null||d.forEach(f=>{var h;return(h=f.animationState)==null?void 0:h.setActive(l,c)}),n[l].isActive=c;const u=o(l);for(const f in n)n[f].protectedKeys={};return u}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=ax(),i=!0}}}function f2(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!XM(e,t):!1}function ts(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ax(){return{animate:ts(!0),whileInView:ts(),whileHover:ts(),whileTap:ts(),whileDrag:ts(),whileFocus:ts(),exit:ts()}}class Zr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class h2 extends Zr{constructor(e){super(e),e.animationState||(e.animationState=d2(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Md(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let p2=0;class m2 extends Zr{constructor(){super(...arguments),this.id=p2++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const g2={animation:{Feature:h2},exit:{Feature:m2}};function Ml(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Gl(t){return{point:{x:t.pageX,y:t.pageY}}}const v2=t=>e=>Ng(e)&&t(e,Gl(e));function Ya(t,e,n,i){return Ml(t,e,v2(n),i)}const $M=1e-4,x2=1-$M,y2=1+$M,KM=.01,_2=0-KM,S2=0+KM;function wn(t){return t.max-t.min}function M2(t,e,n){return Math.abs(t-e)<=n}function lx(t,e,n,i=.5){t.origin=i,t.originPoint=Lt(e.min,e.max,t.origin),t.scale=wn(n)/wn(e),t.translate=Lt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=x2&&t.scale<=y2||isNaN(t.scale))&&(t.scale=1),(t.translate>=_2&&t.translate<=S2||isNaN(t.translate))&&(t.translate=0)}function $a(t,e,n,i){lx(t.x,e.x,n.x,i?i.originX:void 0),lx(t.y,e.y,n.y,i?i.originY:void 0)}function cx(t,e,n){t.min=n.min+e.min,t.max=t.min+wn(e)}function E2(t,e,n){cx(t.x,e.x,n.x),cx(t.y,e.y,n.y)}function ux(t,e,n){t.min=e.min-n.min,t.max=t.min+wn(e)}function Ka(t,e,n){ux(t.x,e.x,n.x),ux(t.y,e.y,n.y)}function ei(t){return[t("x"),t("y")]}const qM=({current:t})=>t?t.ownerDocument.defaultView:null,dx=(t,e)=>Math.abs(t-e);function w2(t,e){const n=dx(t.x,e.x),i=dx(t.y,e.y);return Math.sqrt(n**2+i**2)}class ZM{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=gf(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,m=w2(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!h&&!m)return;const{point:y}=f,{timestamp:g}=en;this.history.push({...y,timestamp:g});const{onStart:p,onMove:_}=this.handlers;h||(p&&p(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=mf(h,this.transformPagePoint),pt.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:m,onSessionEnd:y,resumeAnimation:g}=this.handlers;if(this.dragSnapToOrigin&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=gf(f.type==="pointercancel"?this.lastMoveEventInfo:mf(h,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,p),y&&y(f,p)},!Ng(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const a=Gl(e),l=mf(a,this.transformPagePoint),{point:c}=l,{timestamp:u}=en;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(e,gf(l,this.history)),this.removeListeners=Vl(Ya(this.contextWindow,"pointermove",this.handlePointerMove),Ya(this.contextWindow,"pointerup",this.handlePointerUp),Ya(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ci(this.updatePoint)}}function mf(t,e){return e?{point:e(t.point)}:t}function fx(t,e){return{x:t.x-e.x,y:t.y-e.y}}function gf({point:t},e){return{point:t,delta:fx(t,JM(e)),offset:fx(t,T2(e)),velocity:b2(e,.1)}}function T2(t){return t[0]}function JM(t){return t[t.length-1]}function b2(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=JM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Bi(e)));)n--;if(!i)return{x:0,y:0};const s=Vi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function A2(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?Lt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?Lt(n,t,i.max):Math.min(t,n)),t}function hx(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function C2(t,{top:e,left:n,bottom:i,right:r}){return{x:hx(t.x,n,r),y:hx(t.y,e,i)}}function px(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function R2(t,e){return{x:px(t.x,e.x),y:px(t.y,e.y)}}function P2(t,e){let n=.5;const i=wn(t),r=wn(e);return r>i?n=Go(e.min,e.max-i,t.min):i>r&&(n=Go(t.min,t.max-r,e.min)),Gi(0,1,n)}function N2(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const _p=.35;function D2(t=_p){return t===!1?t=0:t===!0&&(t=_p),{x:mx(t,"left","right"),y:mx(t,"top","bottom")}}function mx(t,e,n){return{min:gx(t,e),max:gx(t,n)}}function gx(t,e){return typeof t=="number"?t:t[e]||0}const I2=new WeakMap;class L2{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ht(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Gl(d).point)},o=(d,f)=>{const{drag:h,dragPropagation:m,onDragStart:y}=this.getProps();if(h&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=DC(h),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ei(p=>{let _=this.getAxisMotionValue(p).get()||0;if(zi.test(_)){const{projection:x}=this.visualElement;if(x&&x.layout){const S=x.layout.layoutBox[p];S&&(_=wn(S)*(parseFloat(_)/100))}}this.originPoint[p]=_}),y&&pt.postRender(()=>y(d,f)),xp(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},a=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f;const{dragPropagation:h,dragDirectionLock:m,onDirectionLock:y,onDrag:g}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:p}=f;if(m&&this.currentDirection===null){this.currentDirection=F2(p),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,p),this.updateAxis("y",f.point,p),this.visualElement.render(),g&&g(d,f)},l=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f,this.stop(d,f),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>ei(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)==null?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new ZM(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:qM(this.visualElement)})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&pt.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!vc(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=A2(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&xo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=C2(i.layoutBox,e):this.constraints=!1,this.elastic=D2(n),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ei(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=N2(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!xo(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=kR(i,r.root,this.visualElement.getTransformPagePoint());let o=R2(r.layout.layoutBox,s);if(n){const a=n(IR(o));this.hasMutatedConstraints=!!a,a&&(o=FM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=ei(u=>{if(!vc(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const f=r?200:1e6,h=r?40:1e7,m={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return xp(this.visualElement,e),i.start(Hg(e,i,0,n,this.visualElement,!1))}stopAnimation(){ei(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ei(e=>{var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){ei(n=>{const{drag:i}=this.getProps();if(!vc(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-Lt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!xo(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};ei(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=P2({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),ei(o=>{if(!vc(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Lt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;I2.set(this.visualElement,this);const e=this.visualElement.current,n=Ya(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();xo(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),pt.read(i);const o=Ml(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(ei(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=_p,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function vc(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function F2(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class k2 extends Zr{constructor(e){super(e),this.removeGroupControls=Un,this.removeListeners=Un,this.controls=new L2(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Un}unmount(){this.removeGroupControls(),this.removeListeners()}}const vx=t=>(e,n)=>{t&&pt.postRender(()=>t(e,n))};class U2 extends Zr{constructor(){super(...arguments),this.removePointerDownListener=Un}onPointerDown(e){this.session=new ZM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:qM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:vx(e),onStart:vx(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&pt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ya(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const fu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function xx(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const _a={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ze.test(t))t=parseFloat(t);else return t;const n=xx(t,e.target.x),i=xx(t,e.target.y);return`${n}% ${i}%`}},O2={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Wr.parse(t);if(r.length>5)return i;const s=Wr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=Lt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};let vf=!1;class B2 extends J.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;aR(V2),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),vf&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),fu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,vf=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||pt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Pg.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;vf=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function QM(t){const[e,n]=SM(),i=J.useContext(og);return v.jsx(B2,{...t,layoutGroup:i,switchLayoutGroup:J.useContext(IM),isPresent:e,safeToRemove:n})}const V2={borderRadius:{..._a,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:_a,borderTopRightRadius:_a,borderBottomLeftRadius:_a,borderBottomRightRadius:_a,boxShadow:O2};function z2(t,e,n){const i=pn(t)?t:Mi(t);return i.start(Hg("",i,e,n)),i.animation}const H2=(t,e)=>t.depth-e.depth;class G2{constructor(){this.children=[],this.isDirty=!1}add(e){lg(this.children,e),this.isDirty=!0}remove(e){cg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(H2),this.isDirty=!1,this.children.forEach(e)}}function j2(t,e){const n=In.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ci(i),t(s-e))};return pt.setup(i,!0),()=>Ci(i)}const eE=["TopLeft","TopRight","BottomLeft","BottomRight"],W2=eE.length,yx=t=>typeof t=="string"?parseFloat(t):t,_x=t=>typeof t=="number"||ze.test(t);function X2(t,e,n,i,r,s){r?(t.opacity=Lt(0,n.opacity??1,Y2(i)),t.opacityExit=Lt(e.opacity??1,0,$2(i))):s&&(t.opacity=Lt(e.opacity??1,n.opacity??1,i));for(let o=0;o<W2;o++){const a=`border${eE[o]}Radius`;let l=Sx(e,a),c=Sx(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||_x(l)===_x(c)?(t[a]=Math.max(Lt(yx(l),yx(c),i),0),(zi.test(c)||zi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Lt(e.rotate||0,n.rotate||0,i))}function Sx(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Y2=tE(0,.5,BS),$2=tE(.5,.95,Un);function tE(t,e,n){return i=>i<t?0:i>e?1:n(Go(t,e,i))}function Mx(t,e){t.min=e.min,t.max=e.max}function Jn(t,e){Mx(t.x,e.x),Mx(t.y,e.y)}function Ex(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function wx(t,e,n,i,r){return t-=e,t=Ku(t,1/n,i),r!==void 0&&(t=Ku(t,1/r,i)),t}function K2(t,e=0,n=1,i=.5,r,s=t,o=t){if(zi.test(e)&&(e=parseFloat(e),e=Lt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Lt(s.min,s.max,i);t===s&&(a-=e),t.min=wx(t.min,e,n,a,r),t.max=wx(t.max,e,n,a,r)}function Tx(t,e,[n,i,r],s,o){K2(t,e[n],e[i],e[r],e.scale,s,o)}const q2=["x","scaleX","originX"],Z2=["y","scaleY","originY"];function bx(t,e,n,i){Tx(t.x,e,q2,n?n.x:void 0,i?i.x:void 0),Tx(t.y,e,Z2,n?n.y:void 0,i?i.y:void 0)}function Ax(t){return t.translate===0&&t.scale===1}function nE(t){return Ax(t.x)&&Ax(t.y)}function Cx(t,e){return t.min===e.min&&t.max===e.max}function J2(t,e){return Cx(t.x,e.x)&&Cx(t.y,e.y)}function Rx(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function iE(t,e){return Rx(t.x,e.x)&&Rx(t.y,e.y)}function Px(t){return wn(t.x)/wn(t.y)}function Nx(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Q2{constructor(){this.members=[]}add(e){lg(this.members,e),e.scheduleRender()}remove(e){if(cg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function eP(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:h,skewY:m}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),h&&(i+=`skewX(${h}deg) `),m&&(i+=`skewY(${m}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const xf=["","X","Y","Z"],tP=1e3;let nP=0;function yf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function rE(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=GM(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",pt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&rE(i)}function sE({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=nP++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(sP),this.nodes.forEach(cP),this.nodes.forEach(uP),this.nodes.forEach(oP)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new G2)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new dg),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Dg(o)&&!YC(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,d=0;const f=()=>this.root.updateBlockedByResize=!1;pt.read(()=>{d=window.innerWidth}),t(o,()=>{const h=window.innerWidth;h!==d&&(d=h,this.root.updateBlockedByResize=!0,u&&u(),u=j2(f,250),fu.hasAnimatedSinceResize&&(fu.hasAnimatedSinceResize=!1,this.nodes.forEach(Lx)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:f,layout:h})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||c.getDefaultTransition()||mP,{onLayoutAnimationStart:y,onLayoutAnimationComplete:g}=c.getProps(),p=!this.targetLayout||!iE(this.targetLayout,h),_=!d&&f;if(this.options.layoutRoot||this.resumeFrom||_||d&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const x={...bg(m,"layout"),onPlay:y,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x),this.setAnimationOrigin(u,_)}else d||Lx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=h})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ci(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(dP),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&rE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Dx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ix);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(lP),this.nodes.forEach(iP),this.nodes.forEach(rP)):this.nodes.forEach(Ix),this.clearAllSnapshots();const a=In.now();en.delta=Gi(0,1e3/60,a-en.timestamp),en.timestamp=a,en.isProcessing=!0,af.update.process(en),af.preRender.process(en),af.render.process(en),en.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(aP),this.sharedNodes.forEach(fP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,pt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){pt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!wn(this.snapshot.measuredBox.x)&&!wn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ht(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!nE(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||us(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),gP(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return Ht();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(vP))){const{scroll:u}=this.root;u&&(yo(a.x,u.offset.x),yo(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=Ht();if(Jn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Jn(a,o),yo(a.x,d.offset.x),yo(a.y,d.offset.y))}return a}applyTransform(o,a=!1){const l=Ht();Jn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&_o(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),us(u.latestValues)&&_o(l,u.latestValues)}return us(this.latestValues)&&_o(l,this.latestValues),l}removeTransform(o){const a=Ht();Jn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!us(c.latestValues))continue;pp(c.latestValues)&&c.updateSnapshot();const u=Ht(),d=c.measurePageBox();Jn(u,d),bx(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return us(this.latestValues)&&bx(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==en.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var f;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(f=this.parent)!=null&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!(!this.layout||!(u||d))){if(this.resolvedRelativeTargetAt=en.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ht(),this.relativeTargetOrigin=Ht(),Ka(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),Jn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ht(),this.targetWithTransforms=Ht()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),E2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Jn(this.target,this.layout.layoutBox),UM(this.target,this.targetDelta)):Jn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ht(),this.relativeTargetOrigin=Ht(),Ka(this.relativeTargetOrigin,this.target,h.target),Jn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||pp(this.parent.latestValues)||kM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var m;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===en.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Jn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;FR(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ht());const{target:h}=o;if(!h){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ex(this.prevProjectionDelta.x,this.projectionDelta.x),Ex(this.prevProjectionDelta.y,this.projectionDelta.y)),$a(this.projectionDelta,this.layoutCorrected,h,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==f||!Nx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Nx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",h))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=So(),this.projectionDelta=So(),this.projectionDeltaWithTransform=So()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=So();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Ht(),h=l?l.source:void 0,m=this.layout?this.layout.source:void 0,y=h!==m,g=this.getStack(),p=!g||g.members.length<=1,_=!!(y&&!p&&this.options.crossfade===!0&&!this.path.some(pP));this.animationProgress=0;let x;this.mixTargetDelta=S=>{const b=S/1e3;Fx(d.x,o.x,b),Fx(d.y,o.y,b),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ka(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),hP(this.relativeTarget,this.relativeTargetOrigin,f,b),x&&J2(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Ht()),Jn(x,this.relativeTarget)),y&&(this.animationValues=u,X2(u,c,this.latestValues,b,_,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Ci(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=pt.update(()=>{fu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Mi(0)),this.currentAnimation=z2(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(tP),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&oE(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Ht();const d=wn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=wn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Jn(a,l),_o(a,u),$a(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Q2),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&yf("z",o,c,this.animationValues);for(let u=0;u<xf.length;u++)yf(`rotate${xf[u]}`,o,c,this.animationValues),yf(`skew${xf[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=du(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=du(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!us(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=eP(this.projectionDeltaWithTransform,this.treeScale,u);l&&(d=l(u,d)),o.transform=d;const{x:f,y:h}=this.projectionDelta;o.transformOrigin=`${f.origin*100}% ${h.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const m in Sl){if(u[m]===void 0)continue;const{correct:y,applyTo:g,isCSSVariable:p}=Sl[m],_=d==="none"?u[m]:y(u[m],c);if(g){const x=g.length;for(let S=0;S<x;S++)o[g[S]]=_}else p?this.options.visualElement.renderState.vars[m]=_:o[m]=_}this.options.layoutId&&(o.pointerEvents=c===this?du(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Dx),this.root.sharedNodes.clear()}}}function iP(t){t.updateLayout()}function rP(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;s==="size"?ei(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],h=wn(f);f.min=i[d].min,f.max=f.min+h}):oE(s,e.layoutBox,i)&&ei(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],h=wn(i[d]);f.max=f.min+h,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+h)});const a=So();$a(a,i,e.layoutBox);const l=So();o?$a(l,t.applyTransform(r,!0),e.measuredBox):$a(l,i,e.layoutBox);const c=!nE(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:h}=d;if(f&&h){const m=Ht();Ka(m,e.layoutBox,f.layoutBox);const y=Ht();Ka(y,i,h.layoutBox),iE(m,y)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=m,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function sP(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function oP(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function aP(t){t.clearSnapshot()}function Dx(t){t.clearMeasurements()}function Ix(t){t.isLayoutDirty=!1}function lP(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Lx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function cP(t){t.resolveTargetDelta()}function uP(t){t.calcProjection()}function dP(t){t.resetSkewAndRotation()}function fP(t){t.removeLeadSnapshot()}function Fx(t,e,n){t.translate=Lt(e.translate,0,n),t.scale=Lt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function kx(t,e,n,i){t.min=Lt(e.min,n.min,i),t.max=Lt(e.max,n.max,i)}function hP(t,e,n,i){kx(t.x,e.x,n.x,i),kx(t.y,e.y,n.y,i)}function pP(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const mP={duration:.45,ease:[.4,0,.1,1]},Ux=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Ox=Ux("applewebkit/")&&!Ux("chrome/")?Math.round:Un;function Bx(t){t.min=Ox(t.min),t.max=Ox(t.max)}function gP(t){Bx(t.x),Bx(t.y)}function oE(t,e,n){return t==="position"||t==="preserve-aspect"&&!M2(Px(e),Px(n),.2)}function vP(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const xP=sE({attachResizeListener:(t,e)=>Ml(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),_f={current:void 0},aE=sE({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!_f.current){const t=new xP({});t.mount(window),t.setOptions({layoutScroll:!0}),_f.current=t}return _f.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),yP={pan:{Feature:U2},drag:{Feature:k2,ProjectionNode:aE,MeasureLayout:QM}};function Vx(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&pt.postRender(()=>s(e,Gl(e)))}class _P extends Zr{mount(){const{current:e}=this.node;e&&(this.unmount=IC(e,(n,i)=>(Vx(this.node,i,"Start"),r=>Vx(this.node,r,"End"))))}unmount(){}}class SP extends Zr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vl(Ml(this.node.current,"focus",()=>this.onFocus()),Ml(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function zx(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&pt.postRender(()=>s(e,Gl(e)))}class MP extends Zr{mount(){const{current:e}=this.node;e&&(this.unmount=UC(e,(n,i)=>(zx(this.node,i,"Start"),(r,{success:s})=>zx(this.node,r,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Sp=new WeakMap,Sf=new WeakMap,EP=t=>{const e=Sp.get(t.target);e&&e(t)},wP=t=>{t.forEach(EP)};function TP({root:t,...e}){const n=t||document;Sf.has(n)||Sf.set(n,{});const i=Sf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(wP,{root:t,...e})),i[r]}function bP(t,e,n){const i=TP(e);return Sp.set(t,n),i.observe(t),()=>{Sp.delete(t),i.unobserve(t)}}const AP={some:0,all:1};class CP extends Zr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:AP[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return bP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(RP(e,n))&&this.startObserver()}unmount(){}}function RP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const PP={inView:{Feature:CP},tap:{Feature:MP},focus:{Feature:SP},hover:{Feature:_P}},NP={layout:{ProjectionNode:aE,MeasureLayout:QM}},DP={...g2,...PP,...yP,...NP},Ge=DR(DP,WR),IP=50,Hx=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),LP=()=>({time:0,x:Hx(),y:Hx()}),FP={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Gx(t,e,n,i){const r=n[e],{length:s,position:o}=FP[e],a=r.current,l=n.time;r.current=t[`scroll${o}`],r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=Go(0,r.scrollLength,r.current);const c=i-l;r.velocity=c>IP?0:fg(r.current-a,c)}function kP(t,e,n){Gx(t,"x",e,n),Gx(t,"y",e,n),e.time=n}function UP(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(Rg(i))n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const Mp={start:0,center:.5,end:1};function jx(t,e,n=0){let i=0;if(t in Mp&&(t=Mp[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const OP=[0,0];function BP(t,e,n,i){let r=Array.isArray(t)?t:OP,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,Mp[t]?t:"0"]),s=jx(r[0],n,i),o=jx(r[1],e),s-o}const VP={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},zP={x:0,y:0};function HP(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function GP(t,e,n){const{offset:i=VP.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?UP(r,t):zP,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:HP(r),c={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let u=!e[s].interpolate;const d=i.length;for(let f=0;f<d;f++){const h=BP(i[f],c[o],l[o],a[s]);!u&&h!==e[s].interpolatorOffsets[f]&&(u=!0),e[s].offset[f]=h}u&&(e[s].interpolate=Sg(e[s].offset,eM(i),{clamp:!1}),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=Gi(0,1,e[s].interpolate(e[s].current))}function jP(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function WP(t,e,n,i={}){return{measure:r=>{jP(t,i.target,n),kP(t,n,r),(i.offset||i.target)&&GP(t,n,i)},notify:()=>e(n)}}const Sa=new WeakMap,Wx=new WeakMap,Mf=new WeakMap,Xx=t=>t===document.scrollingElement?window:t;function lE(t,{container:e=document.scrollingElement,...n}={}){if(!e)return Un;let i=Mf.get(e);i||(i=new Set,Mf.set(e,i));const r=LP(),s=WP(e,t,r,n);if(i.add(s),!Sa.has(e)){const a=()=>{for(const d of i)d.measure(en.timestamp);pt.preUpdate(l)},l=()=>{for(const d of i)d.notify()},c=()=>pt.read(a);Sa.set(e,c);const u=Xx(e);window.addEventListener("resize",c,{passive:!0}),e!==document.documentElement&&Wx.set(e,XC(e,c)),u.addEventListener("scroll",c,{passive:!0}),c()}const o=Sa.get(e);return pt.read(o,!1,!0),()=>{var c;Ci(o);const a=Mf.get(e);if(!a||(a.delete(s),a.size))return;const l=Sa.get(e);Sa.delete(e),l&&(Xx(e).removeEventListener("scroll",l),(c=Wx.get(e))==null||c(),window.removeEventListener("resize",l))}}const Yx=new Map;function XP(t){const e={value:0},n=lE(i=>{e.value=i[t.axis].progress*100},t);return{currentTime:e,cancel:n}}function cE({source:t,container:e,...n}){const{axis:i}=n;t&&(e=t);const r=Yx.get(e)??new Map;Yx.set(e,r);const s=n.target??"self",o=r.get(s)??{},a=i+(n.offset??[]).join(",");return o[a]||(o[a]=!n.target&&rM()?new ScrollTimeline({source:e,axis:i}):XP({container:e,...n})),o[a]}function YP(t,e){const n=cE(e);return t.attachTimeline({timeline:e.target?void 0:n,observe:i=>(i.pause(),_M(r=>{i.time=i.duration*r},n))})}function $P(t){return t.length===2}function KP(t,e){return $P(t)?lE(n=>{t(n[e.axis].progress,n)},e):_M(t,cE(e))}function qP(t,{axis:e="y",container:n=document.scrollingElement,...i}={}){if(!n)return Un;const r={axis:e,container:n,...i};return typeof t=="function"?KP(t,r):YP(t,r)}const ZP=()=>({scrollX:Mi(0),scrollY:Mi(0),scrollXProgress:Mi(0),scrollYProgress:Mi(0)}),xc=t=>t?!t.current:!1;function JP({container:t,target:e,...n}={}){const i=na(ZP),r=J.useRef(null),s=J.useRef(!1),o=J.useCallback(()=>(r.current=qP((a,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...n,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var a;(a=r.current)==null||a.call(r)}),[t,e,JSON.stringify(n.offset)]);return xd(()=>{if(s.current=!1,xc(t)||xc(e)){s.current=!0;return}else return o()},[o]),J.useEffect(()=>{if(s.current)return Ho(!xc(t)),Ho(!xc(e)),o()},[o]),i}function QP(t){const e=na(()=>Mi(t)),{isStatic:n}=J.useContext(_d);if(n){const[,i]=J.useState(t);J.useEffect(()=>e.on("change",i),[])}return e}function uE(t,e){const n=QP(e()),i=()=>n.set(e());return i(),xd(()=>{const r=()=>pt.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),Ci(i)}}),n}function eN(t){Xa.current=[],t();const e=uE(Xa.current,t);return Xa.current=void 0,e}function tN(t,e,n,i){if(typeof t=="function")return eN(t);const r=typeof e=="function"?e:$C(e,n,i);return Array.isArray(t)?$x(t,r):$x([t],([s])=>r(s))}function $x(t,e){const n=na(()=>[]);return uE(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}const nN={some:0,all:1};function iN(t,e,{root:n,margin:i,amount:r="some"}={}){const s=Cg(t),o=new WeakMap,a=c=>{c.forEach(u=>{const d=o.get(u.target);if(u.isIntersecting!==!!d)if(u.isIntersecting){const f=e(u.target,u);typeof f=="function"?o.set(u.target,f):l.unobserve(u.target)}else typeof d=="function"&&(d(u),o.delete(u.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:typeof r=="number"?r:nN[r]});return s.forEach(c=>l.observe(c)),()=>l.disconnect()}function rN(t,{root:e,margin:n,amount:i,once:r=!1,initial:s=!1}={}){const[o,a]=J.useState(s);return J.useEffect(()=>{if(!t.current||r&&o)return;const l=()=>(a(!0),r?void 0:()=>a(!1)),c={root:e&&e.current||void 0,margin:n,amount:i};return iN(t.current,l,c)},[e,t,n,r,i]),o}const Mn={PRIMARY_BG:"#0E0B16",PRIMARY_ACCENT:"#9370DB",SECONDARY_ACCENT:"#D8BFD8",SURFACE:"#1A162B",TEXT_MAIN:"#E0E0E0",TEXT_MUTED:"#BDBDBD",LINK_HOVER:"#B799FF",ERROR_WARNING:"#D9534F",LIGHT_BLUE:"#45B7D1",BRIGHT_GREEN:"#88E788",YELLOW:"#FECA57",RED:"#FF6B6B",PINK:"#FEC5E5"},sN=[{id:6,version:"V6",title:"United Hacks V6",dates:"January 16–18, 2026",theme:"TBD",themeIcon:v.jsx(Si,{className:"w-4 h-4"}),participants:0,prize:"$50,700",summary:["The most awaited edition yet","More innovation, more impact"],color:Mn.PRIMARY_ACCENT,link:"https://unitedhacksv6.devpost.com/",articleLink:"#"},{id:5,version:"V5",title:"United Hacks V5",dates:"July 11–13, 2025",theme:"Entertainment + General",themeIcon:v.jsx(Si,{className:"w-4 h-4"}),participants:1231,prize:"$51,000",summary:["Enhance how people enjoy entertainment","From new tech to novel experiences"],color:Mn.RED,link:"https://unitedhacksv5.devpost.com/",articleLink:"https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology"},{id:4,version:"V4",title:"United Hacks V4",dates:"January 17–19, 2025",theme:"Revealed Live + General",themeIcon:v.jsx(Si,{className:"w-4 h-4"}),participants:359,prize:"$138,000",summary:["Theme revealed during kickoff","Unleash creativity in any direction"],color:Mn.PINK,link:"https://unitedhacksv4.devpost.com/",articleLink:"https://blog.hackunited.org/united-hacks-v4-celebrating-innovation-creativity-and-impact"},{id:3,version:"V3",title:"United Hacks V3",dates:"September 6–8, 2024",theme:"Mini Hacks + General",themeIcon:v.jsx(CS,{className:"w-4 h-4"}),participants:151,prize:"$44,200",summary:["Solve small problems with big impact","Freedom to innovate without limits"],color:Mn.LIGHT_BLUE,link:"https://unitedhacksv3.devpost.com/",articleLink:"https://blog.hackunited.org/united-hacks-v3-recap"},{id:2,version:"V2",title:"United Hacks V2",dates:"January 12–14, 2024",theme:"Resolution + General",themeIcon:v.jsx(AS,{className:"w-4 h-4"}),participants:392,prize:"$39,500",summary:["Build for self-growth or explore any domain","Celebrate innovation with or without boundaries"],color:Mn.BRIGHT_GREEN,link:"https://unitedhacksv2.devpost.com/",articleLink:"https://blog.hackunited.org/united-hacks-v2-hackathon-recap"},{id:1,version:"V1",title:"United Hacks 2023",dates:"August 4–6, 2023",theme:"Mental Health + General",themeIcon:v.jsx(Si,{className:"w-4 h-4"}),participants:386,prize:"$115,860",summary:["Collaborate with like-minded innovators","Tackle mental health or compete in the general track"],color:Mn.YELLOW,link:"https://unitedhacks23.devpost.com/",articleLink:"#"}],oN=({target:t,isVisible:e})=>{const[n,i]=J.useState(0);return J.useEffect(()=>{if(!e)return;const r=2e3,s=60,o=t/s;let a=0;const l=setInterval(()=>{a+=o,a>=t?(i(t),clearInterval(l)):i(Math.floor(a))},r/s);return()=>clearInterval(l)},[t,e]),v.jsx("span",{children:n.toLocaleString()})},aN=({hackathon:t,onClose:e})=>{const n=J.useRef(null);return v.jsx(Ge.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm",onClick:e,children:v.jsxs(Ge.div,{ref:n,initial:{scale:.9,y:50,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.9,y:-50,opacity:0},transition:{duration:.3},onClick:i=>i.stopPropagation(),className:"w-full max-w-md relative p-6 rounded-xl border border-opacity-40",style:{background:`linear-gradient(135deg, ${t.color}40, rgba(0,0,0,0.8))`,borderColor:t.color,boxShadow:`0 20px 40px ${t.color}40, inset 0 0 30px ${t.color}40`},children:[v.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-white text-lg font-bold p-1 rounded-full bg-black bg-opacity-40 hover:bg-opacity-60 transition-colors",children:"×"}),v.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[v.jsx("h3",{className:"text-white text-xl font-bold",children:t.title}),v.jsx("span",{className:"text-xs px-2 py-1 rounded-full font-bold",style:{backgroundColor:t.color,color:Mn.PRIMARY_BG},children:t.version})]}),v.jsxs("div",{className:"space-y-3 text-sm",children:[v.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[v.jsx(Gu,{className:"w-4 h-4",style:{color:t.color}}),v.jsx("span",{children:t.dates})]}),v.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[t.themeIcon,v.jsx("span",{children:t.theme})]}),v.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[v.jsx(vl,{className:"w-4 h-4",style:{color:t.color}}),v.jsxs("span",{children:[v.jsx(oN,{target:t.participants,isVisible:!0})," Participants"]})]}),v.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[v.jsx(ep,{className:"w-4 h-4",style:{color:t.color}}),v.jsx("span",{className:"text-lg font-bold",style:{color:t.color},children:t.prize})]})]}),v.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-black bg-opacity-40 border border-opacity-30",style:{borderColor:t.color},children:[v.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:t.summary[0]}),v.jsx("p",{className:"text-gray-400 text-xs leading-relaxed mt-1",children:t.summary[1]})]}),v.jsxs("div",{className:"flex gap-3 mt-4",children:[v.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm",style:{background:`linear-gradient(135deg, ${t.color}, ${t.color}80)`,boxShadow:`0 4px 20px ${t.color}40`},children:[v.jsx("span",{className:"text-white",children:"Devpost"}),v.jsx(rr,{className:"w-4 h-4 text-white"})]}),v.jsxs("a",{href:t.articleLink,target:"_blank",rel:"noopener noreferrer",className:"flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm",style:{background:`linear-gradient(135deg, ${t.color}, ${t.color}80)`,boxShadow:`0 4px 20px ${t.color}40`},children:[v.jsx("span",{className:"text-white",children:"Article"}),v.jsx(rr,{className:"w-4 h-4 text-white"})]})]})]})})},lN=()=>{const[t,e]=J.useState(null);return v.jsxs("section",{id:"previous",className:"relative w-full min-h-screen overflow-hidden py-16",style:{backgroundColor:Mn.PRIMARY_BG},children:[v.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs(Ge.div,{className:"text-center mb-12",initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[v.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent",style:{backgroundImage:`linear-gradient(to right, ${Mn.PRIMARY_ACCENT}, ${Mn.SECONDARY_ACCENT})`},children:"Previous Hackathons"}),v.jsx("p",{className:"text-lg sm:text-xl",style:{color:Mn.TEXT_MUTED},children:"Explore our legacy of innovation"})]}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:sN.map(n=>v.jsx("div",{className:"relative",children:v.jsxs(Ge.div,{className:"group relative cursor-pointer rounded-xl overflow-hidden shadow-lg p-6 flex flex-col justify-between h-48 transition-all duration-300 transform hover:scale-105 hover:z-30",style:{backgroundColor:Mn.SURFACE,borderColor:n.color,borderWidth:"2px",boxShadow:`0 4px 20px ${n.color}40`},onClick:()=>e(n),whileHover:{rotate:1},whileTap:{scale:.95},children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"text-sm font-bold px-3 py-1 rounded-full",style:{backgroundColor:n.color,color:Mn.PRIMARY_BG},children:n.version}),v.jsx("h3",{className:"text-lg font-bold",style:{color:n.color},children:n.title})]}),v.jsxs("div",{className:"mt-auto",children:[v.jsx("p",{className:"text-sm font-medium",style:{color:Mn.TEXT_MAIN},children:n.summary[0]}),v.jsx("p",{className:"text-xs",style:{color:Mn.TEXT_MUTED},children:n.summary[1]})]})]})},n.id))})]}),v.jsx(Ig,{children:t&&v.jsx(aN,{hackathon:t,onClose:()=>e(null)})})]})},cN=()=>v.jsx(lN,{}),uN=[{id:1,version:"V5",title:"United Hacks V5",dates:"July 11–13, 2025",theme:"Entertainment + General",themeIcon:v.jsx(Si,{className:"w-4 h-4"}),participants:1231,prize:"$51,000",summary:["Enhance how people enjoy entertainment","From new tech to novel experiences"],color:"#FF6B6B",glowColor:"#FF6B6B40",position:{x:-220,y:-100,z:-60},link:"https://unitedhacks23.devpost.com/",articleLink:"#"},{id:2,version:"V4",title:"United Hacks V4",dates:"January 17–19, 2025",theme:"Revealed Live + General",themeIcon:v.jsx(Si,{className:"w-4 h-4"}),participants:359,prize:"$138,000",summary:["Theme revealed during kickoff","Unleash creativity in any direction"],color:"#FEC5E5",glowColor:"#F646AA",position:{x:-180,y:150,z:-30},link:"https://unitedhacksv4.devpost.com/",articleLink:"https://blog.hackunited.org/united-hacks-v4-celebrating-innovation-creativity-and-impact"},{id:3,version:"V3",title:"United Hacks V3",dates:"September 6–8, 2024",theme:"Mini Hacks + General",themeIcon:v.jsx(CS,{className:"w-4 h-4"}),participants:151,prize:"$44,200",summary:["Solve small problems with big impact","Freedom to innovate without limits"],color:"#45B7D1",glowColor:"#45B7D140",position:{x:150,y:150,z:80},link:"https://unitedhacksv3.devpost.com/",articleLink:"https://blog.hackunited.org/united-hacks-v3-recap"},{id:4,version:"V2",title:"United Hacks V2",dates:"January 12–14, 2024",theme:"Resolution + General",themeIcon:v.jsx(AS,{className:"w-4 h-4"}),participants:392,prize:"$39,500",summary:["Build for self-growth or explore any domain","Celebrate innovation with or without boundaries"],color:"#88E788",glowColor:"#013220",position:{x:230,y:-70,z:50},link:"https://unitedhacksv2.devpost.com/",articleLink:"https://blog.hackunited.org/united-hacks-v2-hackathon-recap"},{id:5,version:"V1",title:"United Hacks 2023",dates:"August 4–6, 2023",theme:"Mental Health + General",themeIcon:v.jsx(Si,{className:"w-4 h-4"}),participants:386,prize:"$115,860",summary:["Collaborate with like-minded innovators","Tackle mental health or compete in the general track"],color:"#FECA57",glowColor:"#FECA5740",position:{x:30,y:-200,z:-40},link:"https://unitedhacksv5.devpost.com/",articleLink:"https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology"}],lt={id:6,version:"V6",title:"United Hacks V6",dates:"January 16–18, 2026",theme:"TBD",themeIcon:v.jsx(Si,{className:"w-4 h-4"}),participants:0,prize:"$50,700",summary:["The most awaited edition yet","More innovation, more impact"],color:"#C0C0C0",glowColor:"#888888",position:{x:0,y:0,z:0},link:"https://unitedhacksv6.devpost.com/",articleLink:"#"},Kx=({target:t,isVisible:e})=>{const[n,i]=J.useState(0);return J.useEffect(()=>{if(!e)return;const r=2e3,s=60,o=t/s;let a=0;const l=setInterval(()=>{a+=o,a>=t?(i(t),clearInterval(l)):i(Math.floor(a))},r/s);return()=>clearInterval(l)},[t,e]),v.jsx("span",{children:n.toLocaleString()})},dN=()=>{const[t,e]=J.useState(null),[n,i]=J.useState(null),[r,s]=J.useState(0),o=J.useRef(null);J.useEffect(()=>{const c=setInterval(()=>{s(u=>u+.5)},50);return()=>clearInterval(c)},[]);const a=()=>uN.map(c=>{const u=n===c.id,d=(t==null?void 0:t.id)===c.id,f=2;return v.jsxs("div",{className:"absolute transition-all duration-500 cursor-pointer",style:{transform:`translate3d(${c.position.x}px, ${c.position.y}px, ${c.position.z}px)`,transformStyle:"preserve-3d"},onClick:()=>e(d?null:c),onMouseEnter:()=>i(c.id),onMouseLeave:()=>i(null),children:[v.jsxs("div",{className:`relative w-20 h-20 md:w-24 md:h-24 transition-all duration-300 ${u||d?"scale-110":"scale-100"}`,style:{transform:`rotateX(${u?15:0}deg) rotateY(${u?15:0}deg) rotateZ(${r*f}deg)`,transformStyle:"preserve-3d"},children:[v.jsxs("div",{className:"w-full h-full rounded-lg backdrop-blur-md border border-opacity-30 relative overflow-hidden",style:{background:`linear-gradient(135deg, ${c.glowColor}, transparent 70%)`,borderColor:c.color,boxShadow:`0 8px 32px ${c.glowColor}, inset 0 0 20px ${c.glowColor}`},children:[v.jsx("div",{className:"absolute inset-0 rounded-lg opacity-50",style:{background:`radial-gradient(circle at 30% 30%, ${c.color}80, transparent 70%)`}}),v.jsx("div",{className:"absolute inset-0 flex items-center justify-center",style:{backfaceVisibility:"hidden",transform:`rotateZ(${-r*f}deg)`,transformStyle:"preserve-3d"},children:v.jsx("span",{className:"text-white font-bold text-lg md:text-xl",style:{textShadow:`0 0 10px ${c.color}`},children:c.version})}),v.jsx("div",{className:"absolute inset-0 rounded-lg",style:{background:`conic-gradient(from 0deg, ${c.color}, transparent, ${c.color})`,mask:"linear-gradient(white, white) content-box, linear-gradient(white, white)",maskComposite:"xor",padding:"2px",animation:u?"spin 3s linear infinite":"none"}})]}),v.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:`radial-gradient(circle, ${c.glowColor} 1px, transparent 1px)`,backgroundSize:"20px 20px",opacity:u?.3:.1,animation:"float 4s ease-in-out infinite"}})]}),d&&v.jsx("div",{className:"absolute z-50",style:{animation:"slideInFromRight 0.5s ease-out",left:c.version==="V1"?"400%":c.version==="V3"?"200%":c.version==="V5"||c.version==="V4"?"-400%":c.position.x>0?"120%":"-120%",top:"50%",transform:"translateY(-50%) perspective(1000px) rotateY(-5deg)",width:"320px",maxWidth:"80vw"},children:v.jsxs("div",{className:"backdrop-blur-lg rounded-xl border border-opacity-40 p-6 relative overflow-hidden",style:{background:`linear-gradient(135deg, ${c.glowColor}, rgba(0,0,0,0.8))`,borderColor:c.color,boxShadow:`0 20px 40px ${c.glowColor}, inset 0 0 30px ${c.glowColor}`},children:[v.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[v.jsx("div",{className:"w-3 h-3 rounded-full animate-pulse",style:{backgroundColor:c.color}}),v.jsx("h3",{className:"text-white text-xl font-bold",children:c.title}),v.jsx("span",{className:"text-sm px-2 py-1 rounded-full",style:{backgroundColor:c.glowColor,color:c.color},children:c.version})]}),v.jsxs("div",{className:"space-y-3",children:[v.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[v.jsx(Gu,{className:"w-4 h-4",style:{color:c.color}}),v.jsx("span",{className:"text-sm",children:c.dates})]}),v.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[c.themeIcon,v.jsx("span",{className:"text-sm",children:c.theme})]}),v.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[v.jsx(vl,{className:"w-4 h-4",style:{color:c.color}}),v.jsxs("span",{className:"text-sm",children:[v.jsx(Kx,{target:c.participants,isVisible:d})," Participants"]})]}),v.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[v.jsx(ep,{className:"w-4 h-4",style:{color:c.color}}),v.jsx("span",{className:"text-lg font-bold",style:{color:c.color,textShadow:`0 0 10px ${c.color}`},children:c.prize})]})]}),v.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-black bg-opacity-40 border border-opacity-30",style:{borderColor:c.color},children:[v.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:c.summary[0]}),v.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mt-1",children:c.summary[1]})]}),v.jsxs("div",{className:"flex gap-3 mt-4",children:[v.jsxs("button",{className:"flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105",style:{background:`linear-gradient(135deg, ${c.color}, ${c.color}80)`,boxShadow:`0 4px 20px ${c.glowColor}`},onClick:h=>{h.stopPropagation(),window.open(c.link,"_blank")},children:[v.jsx("span",{className:"text-white",children:"Devpost"}),v.jsx(rr,{className:"w-4 h-4 text-white"})]}),v.jsxs("button",{className:"flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105",style:{background:`linear-gradient(135deg, ${c.color}, ${c.color}80)`,boxShadow:`0 4px 20px ${c.glowColor}`},onClick:h=>{h.stopPropagation(),window.open(c.articleLink,"_blank")},children:[v.jsx("span",{className:"text-white text-sm",children:"Article"}),v.jsx(rr,{className:"w-4 h-4 text-white"})]})]}),v.jsx("div",{className:"absolute inset-0 pointer-events-none",children:v.jsx("div",{className:"absolute inset-0 opacity-20",style:{background:`repeating-linear-gradient(90deg, transparent, transparent 2px, ${c.color} 2px, ${c.color} 4px)`,animation:"scan 3s linear infinite"}})})]})})]},c.id)}),l=()=>{const c=(t==null?void 0:t.id)===6,u=n===6;return v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"relative z-10 cursor-pointer transition-all duration-300",style:{transform:`rotateY(${r*0}deg)`,transformStyle:"preserve-3d"},onClick:()=>e(c?null:lt),onMouseEnter:()=>i(6),onMouseLeave:()=>i(null),children:v.jsxs("div",{className:`relative w-32 h-32 md:w-40 md:h-40 transition-all duration-300 ${u||c?"scale-110":"scale-100"}`,children:[v.jsx("div",{className:"absolute inset-0 rounded-full animate-pulse",style:{background:"radial-gradient(circle, #88888840, transparent 70%)",filter:"blur(20px)",transform:"scale(1.5)"}}),v.jsxs("div",{className:"relative w-full h-full rounded-full backdrop-blur-md border-2 border-gray-400 overflow-hidden",children:[v.jsx("div",{className:"absolute inset-0 bg-gradient-radial from-gray-400/30 via-gray-500/20 to-transparent"}),v.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-white",children:[v.jsx("div",{className:"text-lg md:text-xl font-bold mb-1",style:{textShadow:"0 0 10px #888888"},children:"United Hacks"}),v.jsx("div",{className:"text-2xl md:text-3xl font-bold",style:{textShadow:"0 0 15px #888888"},children:"V6"})]}),v.jsx("div",{className:"absolute inset-4 rounded-full border border-gray-400/50",style:{animation:"spin 10s linear infinite reverse"}}),v.jsx("div",{className:"absolute inset-8 rounded-full border border-gray-400/30",style:{animation:"spin 15s linear infinite"}})]})]})}),c&&v.jsx("div",{className:"absolute z-50",style:{animation:"slideInFromRight 0.5s ease-out",left:"75%",top:"50%",transform:"translateY(-50%)",width:"320px",maxWidth:"80vw"},children:v.jsxs("div",{className:"backdrop-blur-lg rounded-xl border border-opacity-40 p-6 relative overflow-hidden",style:{background:`linear-gradient(135deg, ${lt.glowColor}, rgba(0,0,0,0.8))`,borderColor:lt.color,boxShadow:`0 20px 40px ${lt.glowColor}, inset 0 0 30px ${lt.glowColor}`},children:[v.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[v.jsx("div",{className:"w-3 h-3 rounded-full animate-pulse",style:{backgroundColor:lt.color}}),v.jsx("h3",{className:"text-white text-xl font-bold",children:lt.title}),v.jsx("span",{className:"text-sm px-2 py-1 rounded-full",style:{backgroundColor:lt.glowColor,color:lt.color},children:lt.version})]}),v.jsxs("div",{className:"space-y-3",children:[v.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[v.jsx(Gu,{className:"w-4 h-4",style:{color:lt.color}}),v.jsx("span",{className:"text-sm",children:lt.dates})]}),v.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[lt.themeIcon,v.jsx("span",{className:"text-sm",children:lt.theme})]}),v.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[v.jsx(vl,{className:"w-4 h-4",style:{color:lt.color}}),v.jsxs("span",{className:"text-sm",children:[v.jsx(Kx,{target:lt.participants,isVisible:c})," Participants"]})]}),v.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[v.jsx(ep,{className:"w-4 h-4",style:{color:lt.color}}),v.jsx("span",{className:"text-lg font-bold",style:{color:lt.color,textShadow:`0 0 10px ${lt.color}`},children:lt.prize})]})]}),v.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-black bg-opacity-40 border border-opacity-30",style:{borderColor:lt.color},children:[v.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:lt.summary[0]}),v.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mt-1",children:lt.summary[1]})]}),v.jsxs("div",{className:"flex gap-3 mt-4",children:[v.jsxs("button",{className:"flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105",style:{background:`linear-gradient(135deg, ${lt.color}, ${lt.color}80)`,boxShadow:`0 4px 20px ${lt.glowColor}`},onClick:f=>{f.stopPropagation(),window.open(lt.link,"_blank")},children:[v.jsx("span",{className:"text-white",children:"Devpost"}),v.jsx(rr,{className:"w-4 h-4 text-white"})]}),v.jsxs("button",{className:"flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105",style:{background:`linear-gradient(135deg, ${lt.color}, ${lt.color}80)`,boxShadow:`0 4px 20px ${lt.glowColor}`},onClick:f=>{f.stopPropagation(),window.open(lt.articleLink,"_blank")},children:[v.jsx("span",{className:"text-white text-sm",children:"Article"}),v.jsx(rr,{className:"w-4 h-4 text-white"})]})]}),v.jsx("div",{className:"absolute inset-0 pointer-events-none",children:v.jsx("div",{className:"absolute inset-0 opacity-20",style:{background:`repeating-linear-gradient(90deg, transparent, transparent 2px, ${lt.color} 2px, ${lt.color} 4px)`,animation:"scan 3s linear infinite"}})})]})})]})};return v.jsxs("section",{id:"previous",className:"relative w-full min-h-screen overflow-hidden perspective-1000",style:{backgroundColor:"#0E0B16"},children:[v.jsx("div",{className:"absolute inset-0",children:v.jsx("div",{className:"absolute inset-0 bg-gradient-radial from-blue-900/20 via-purple-900/10 to-transparent"})}),v.jsxs("div",{className:"absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10",children:[v.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",children:"Previous Hackathons"}),v.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Explore our legacy of innovation through an interactive galaxy"})]}),v.jsxs("div",{ref:o,className:"relative w-full h-screen flex items-center justify-center",style:{transformStyle:"preserve-3d"},children:[l(),a(),v.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-400",children:v.jsx("p",{className:"text-sm",children:"Click on memory shards or the core to explore hackathons"})})]}),v.jsx("style",{children:`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(50px) perspective(1000px) rotateY(-15deg);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0) perspective(1000px) rotateY(-5deg);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotateZ(0deg); }
          50% { transform: translateY(-10px) rotateZ(5deg); }
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `})]})},fN=()=>{const[t,e]=J.useState(!1);return J.useEffect(()=>{const n=()=>{e(window.innerWidth<768)};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),t?v.jsx(cN,{}):v.jsx(dN,{})},Wt={PRIMARY_BG:"#0E0B16",PRIMARY_ACCENT:"#6C2BD9",SECONDARY_ACCENT:"#4A2A80",SURFACE:"#1A162B",TEXT_MAIN:"#BDBDBD",TEXT_MUTED:"#BDBDBD",LINK_HOVER:"#6C2BD9"},hN=()=>{const t=[{icon:"/icons/clock.png",title:"48 Hours of Innovation",description:"Non-stop coding, learning, and building with developers from 50+ countries worldwide."},{icon:"/icons/trophy.png",title:"$50,000+ in Prizes",description:"Compete for cash prizes, internships, and exclusive opportunities with top tech companies."},{icon:"/icons/peoples.png",title:"Learn from the Best",description:"Workshops, mentorship, and guidance from industry experts and successful entrepreneurs."}];return v.jsxs("section",{id:"about",className:"py-20 relative overflow-hidden",style:{backgroundColor:Wt.PRIMARY_BG},children:[v.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`linear-gradient(135deg, ${Wt.PRIMARY_ACCENT}08 0%, ${Wt.SECONDARY_ACCENT}08 100%)`}}),v.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl",style:{backgroundColor:`${Wt.PRIMARY_ACCENT}1A`}}),v.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl",style:{backgroundColor:`${Wt.SECONDARY_ACCENT}1A`}}),v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[v.jsxs("div",{className:"text-center mb-12 sm:mb-16 lg:mb-20",children:[v.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent leading-tight px-4 sm:px-0",style:{backgroundImage:`linear-gradient(to right, ${Wt.SECONDARY_ACCENT}, ${Wt.TEXT_MAIN})`,fontFamily:"var(--font-heading)"},children:"What is United Hacks V6?"}),v.jsx("p",{className:"text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0",style:{color:Wt.TEXT_MAIN,fontFamily:"var(--font-body)"},children:"The premier global online hackathon bringing together the brightest minds from around the world. Join us for 48 hours of innovation, collaboration, and world-changing solutions."})]}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20",children:t.map((e,n)=>v.jsxs("div",{className:"group relative backdrop-blur-xl border rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:scale-105 hover:-rotate-1 transition-all duration-500 cursor-pointer",style:{backgroundColor:Wt.SURFACE,borderColor:`${Wt.PRIMARY_ACCENT}1A`,boxShadow:`0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 ${Wt.PRIMARY_BG}1A`},children:[v.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500",style:{backgroundImage:`linear-gradient(to right, ${Wt.PRIMARY_ACCENT}, ${Wt.SECONDARY_ACCENT})`}}),v.jsx("div",{className:"w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300",style:{backgroundColor:Wt.PRIMARY_ACCENT},children:v.jsx("img",{src:e.icon,alt:e.title,className:"w-8 h-8 sm:w-10 sm:h-10"})}),v.jsx("h3",{className:"text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300",style:{color:Wt.TEXT_MAIN,backgroundImage:`linear-gradient(to right, ${Wt.PRIMARY_ACCENT}, ${Wt.SECONDARY_ACCENT})`,fontFamily:"var(--font-heading)"},children:e.title}),v.jsx("p",{className:"leading-relaxed group-hover:text-gray-200 transition-colors duration-300",style:{color:Wt.TEXT_MAIN,fontFamily:"var(--font-body)"},children:e.description}),v.jsx("div",{className:"absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10",style:{backgroundImage:`linear-gradient(to right, ${Wt.PRIMARY_ACCENT}40, ${Wt.SECONDARY_ACCENT}40)`}})]},n))})]})]})};var jl={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;var N=new OffscreenCanvas(1,1),P=N.getContext("2d");P.fillRect(0,0,1,1);var ee=N.transferToImageBitmap();try{P.createPattern(ee,"no-repeat")}catch{return!1}return!0}();function l(){}function c(N){var P=n.exports.Promise,ee=P!==void 0?P:e.Promise;return typeof ee=="function"?new ee(N):(N(l,l),null)}var u=function(N,P){return{transform:function(ee){if(N)return ee;if(P.has(ee))return P.get(ee);var fe=new OffscreenCanvas(ee.width,ee.height),V=fe.getContext("2d");return V.drawImage(ee,0,0),P.set(ee,fe),fe},clear:function(){P.clear()}}}(a,new Map),d=function(){var N=Math.floor(16.666666666666668),P,ee,fe={},V=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(P=function(Y){var re=Math.random();return fe[re]=requestAnimationFrame(function $(le){V===le||V+N-1<le?(V=le,delete fe[re],Y()):fe[re]=requestAnimationFrame($)}),re},ee=function(Y){fe[Y]&&cancelAnimationFrame(fe[Y])}):(P=function(Y){return setTimeout(Y,N)},ee=function(Y){return clearTimeout(Y)}),{frame:P,cancel:ee}}(),f=function(){var N,P,ee={};function fe(V){function Y(re,$){V.postMessage({options:re||{},callback:$})}V.init=function($){var le=$.transferControlToOffscreen();V.postMessage({canvas:le},[le])},V.fire=function($,le,Ae){if(P)return Y($,null),P;var ve=Math.random().toString(36).slice(2);return P=c(function(Fe){function Be(ke){ke.data.callback===ve&&(delete ee[ve],V.removeEventListener("message",Be),P=null,u.clear(),Ae(),Fe())}V.addEventListener("message",Be),Y($,ve),ee[ve]=Be.bind(null,{data:{callback:ve}})}),P},V.reset=function(){V.postMessage({reset:!0});for(var $ in ee)ee[$](),delete ee[$]}}return function(){if(N)return N;if(!i&&s){var V=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([V])))}catch(Y){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Y),null}fe(N)}return N}}(),h={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function m(N,P){return P?P(N):N}function y(N){return N!=null}function g(N,P,ee){return m(N&&y(N[P])?N[P]:h[P],ee)}function p(N){return N<0?0:Math.floor(N)}function _(N,P){return Math.floor(Math.random()*(P-N))+N}function x(N){return parseInt(N,16)}function S(N){return N.map(b)}function b(N){var P=String(N).replace(/[^0-9a-f]/gi,"");return P.length<6&&(P=P[0]+P[0]+P[1]+P[1]+P[2]+P[2]),{r:x(P.substring(0,2)),g:x(P.substring(2,4)),b:x(P.substring(4,6))}}function C(N){var P=g(N,"origin",Object);return P.x=g(P,"x",Number),P.y=g(P,"y",Number),P}function A(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function R(N){var P=N.getBoundingClientRect();N.width=P.width,N.height=P.height}function T(N){var P=document.createElement("canvas");return P.style.position="fixed",P.style.top="0px",P.style.left="0px",P.style.pointerEvents="none",P.style.zIndex=N,P}function M(N,P,ee,fe,V,Y,re,$,le){N.save(),N.translate(P,ee),N.rotate(Y),N.scale(fe,V),N.arc(0,0,1,re,$,le),N.restore()}function L(N){var P=N.angle*(Math.PI/180),ee=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-P+(.5*ee-Math.random()*ee),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function X(N,P){P.x+=Math.cos(P.angle2D)*P.velocity+P.drift,P.y+=Math.sin(P.angle2D)*P.velocity+P.gravity,P.velocity*=P.decay,P.flat?(P.wobble=0,P.wobbleX=P.x+10*P.scalar,P.wobbleY=P.y+10*P.scalar,P.tiltSin=0,P.tiltCos=0,P.random=1):(P.wobble+=P.wobbleSpeed,P.wobbleX=P.x+10*P.scalar*Math.cos(P.wobble),P.wobbleY=P.y+10*P.scalar*Math.sin(P.wobble),P.tiltAngle+=.1,P.tiltSin=Math.sin(P.tiltAngle),P.tiltCos=Math.cos(P.tiltAngle),P.random=Math.random()+2);var ee=P.tick++/P.totalTicks,fe=P.x+P.random*P.tiltCos,V=P.y+P.random*P.tiltSin,Y=P.wobbleX+P.random*P.tiltCos,re=P.wobbleY+P.random*P.tiltSin;if(N.fillStyle="rgba("+P.color.r+", "+P.color.g+", "+P.color.b+", "+(1-ee)+")",N.beginPath(),o&&P.shape.type==="path"&&typeof P.shape.path=="string"&&Array.isArray(P.shape.matrix))N.fill(K(P.shape.path,P.shape.matrix,P.x,P.y,Math.abs(Y-fe)*.1,Math.abs(re-V)*.1,Math.PI/10*P.wobble));else if(P.shape.type==="bitmap"){var $=Math.PI/10*P.wobble,le=Math.abs(Y-fe)*.1,Ae=Math.abs(re-V)*.1,ve=P.shape.bitmap.width*P.scalar,Fe=P.shape.bitmap.height*P.scalar,Be=new DOMMatrix([Math.cos($)*le,Math.sin($)*le,-Math.sin($)*Ae,Math.cos($)*Ae,P.x,P.y]);Be.multiplySelf(new DOMMatrix(P.shape.matrix));var ke=N.createPattern(u.transform(P.shape.bitmap),"no-repeat");ke.setTransform(Be),N.globalAlpha=1-ee,N.fillStyle=ke,N.fillRect(P.x-ve/2,P.y-Fe/2,ve,Fe),N.globalAlpha=1}else if(P.shape==="circle")N.ellipse?N.ellipse(P.x,P.y,Math.abs(Y-fe)*P.ovalScalar,Math.abs(re-V)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI):M(N,P.x,P.y,Math.abs(Y-fe)*P.ovalScalar,Math.abs(re-V)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI);else if(P.shape==="star")for(var I=Math.PI/2*3,ft=4*P.scalar,Ye=8*P.scalar,nt=P.x,_e=P.y,Je=5,be=Math.PI/Je;Je--;)nt=P.x+Math.cos(I)*Ye,_e=P.y+Math.sin(I)*Ye,N.lineTo(nt,_e),I+=be,nt=P.x+Math.cos(I)*ft,_e=P.y+Math.sin(I)*ft,N.lineTo(nt,_e),I+=be;else N.moveTo(Math.floor(P.x),Math.floor(P.y)),N.lineTo(Math.floor(P.wobbleX),Math.floor(V)),N.lineTo(Math.floor(Y),Math.floor(re)),N.lineTo(Math.floor(fe),Math.floor(P.wobbleY));return N.closePath(),N.fill(),P.tick<P.totalTicks}function H(N,P,ee,fe,V){var Y=P.slice(),re=N.getContext("2d"),$,le,Ae=c(function(ve){function Fe(){$=le=null,re.clearRect(0,0,fe.width,fe.height),u.clear(),V(),ve()}function Be(){i&&!(fe.width===r.width&&fe.height===r.height)&&(fe.width=N.width=r.width,fe.height=N.height=r.height),!fe.width&&!fe.height&&(ee(N),fe.width=N.width,fe.height=N.height),re.clearRect(0,0,fe.width,fe.height),Y=Y.filter(function(ke){return X(re,ke)}),Y.length?$=d.frame(Be):Fe()}$=d.frame(Be),le=Fe});return{addFettis:function(ve){return Y=Y.concat(ve),Ae},canvas:N,promise:Ae,reset:function(){$&&d.cancel($),le&&le()}}}function te(N,P){var ee=!N,fe=!!g(P||{},"resize"),V=!1,Y=g(P,"disableForReducedMotion",Boolean),re=s&&!!g(P||{},"useWorker"),$=re?f():null,le=ee?A:R,Ae=N&&$?!!N.__confetti_initialized:!1,ve=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Fe;function Be(I,ft,Ye){for(var nt=g(I,"particleCount",p),_e=g(I,"angle",Number),Je=g(I,"spread",Number),be=g(I,"startVelocity",Number),qe=g(I,"decay",Number),zt=g(I,"gravity",Number),D=g(I,"drift",Number),E=g(I,"colors",S),z=g(I,"ticks",Number),Q=g(I,"shapes"),se=g(I,"scalar"),Z=!!g(I,"flat"),Pe=C(I),pe=nt,we=[],Ne=N.width*Pe.x,oe=N.height*Pe.y;pe--;)we.push(L({x:Ne,y:oe,angle:_e,spread:Je,startVelocity:be,color:E[pe%E.length],shape:Q[_(0,Q.length)],ticks:z,decay:qe,gravity:zt,drift:D,scalar:se,flat:Z}));return Fe?Fe.addFettis(we):(Fe=H(N,we,le,ft,Ye),Fe.promise)}function ke(I){var ft=Y||g(I,"disableForReducedMotion",Boolean),Ye=g(I,"zIndex",Number);if(ft&&ve)return c(function(be){be()});ee&&Fe?N=Fe.canvas:ee&&!N&&(N=T(Ye),document.body.appendChild(N)),fe&&!Ae&&le(N);var nt={width:N.width,height:N.height};$&&!Ae&&$.init(N),Ae=!0,$&&(N.__confetti_initialized=!0);function _e(){if($){var be={getBoundingClientRect:function(){if(!ee)return N.getBoundingClientRect()}};le(be),$.postMessage({resize:{width:be.width,height:be.height}});return}nt.width=nt.height=null}function Je(){Fe=null,fe&&(V=!1,e.removeEventListener("resize",_e)),ee&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,Ae=!1)}return fe&&!V&&(V=!0,e.addEventListener("resize",_e,!1)),$?$.fire(I,nt,Je):Be(I,nt,Je)}return ke.reset=function(){$&&$.reset(),Fe&&Fe.reset()},ke}var ne;function q(){return ne||(ne=te(null,{useWorker:!0,resize:!0})),ne}function K(N,P,ee,fe,V,Y,re){var $=new Path2D(N),le=new Path2D;le.addPath($,new DOMMatrix(P));var Ae=new Path2D;return Ae.addPath(le,new DOMMatrix([Math.cos(re)*V,Math.sin(re)*V,-Math.sin(re)*Y,Math.cos(re)*Y,ee,fe])),Ae}function F(N){if(!o)throw new Error("path confetti are not supported in this browser");var P,ee;typeof N=="string"?P=N:(P=N.path,ee=N.matrix);var fe=new Path2D(P),V=document.createElement("canvas"),Y=V.getContext("2d");if(!ee){for(var re=1e3,$=re,le=re,Ae=0,ve=0,Fe,Be,ke=0;ke<re;ke+=2)for(var I=0;I<re;I+=2)Y.isPointInPath(fe,ke,I,"nonzero")&&($=Math.min($,ke),le=Math.min(le,I),Ae=Math.max(Ae,ke),ve=Math.max(ve,I));Fe=Ae-$,Be=ve-le;var ft=10,Ye=Math.min(ft/Fe,ft/Be);ee=[Ye,0,0,Ye,-Math.round(Fe/2+$)*Ye,-Math.round(Be/2+le)*Ye]}return{type:"path",path:P,matrix:ee}}function W(N){var P,ee=1,fe="#000000",V='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?P=N:(P=N.text,ee="scalar"in N?N.scalar:ee,V="fontFamily"in N?N.fontFamily:V,fe="color"in N?N.color:fe);var Y=10*ee,re=""+Y+"px "+V,$=new OffscreenCanvas(Y,Y),le=$.getContext("2d");le.font=re;var Ae=le.measureText(P),ve=Math.ceil(Ae.actualBoundingBoxRight+Ae.actualBoundingBoxLeft),Fe=Math.ceil(Ae.actualBoundingBoxAscent+Ae.actualBoundingBoxDescent),Be=2,ke=Ae.actualBoundingBoxLeft+Be,I=Ae.actualBoundingBoxAscent+Be;ve+=Be+Be,Fe+=Be+Be,$=new OffscreenCanvas(ve,Fe),le=$.getContext("2d"),le.font=re,le.fillStyle=fe,le.fillText(P,ke,I);var ft=1/ee;return{type:"bitmap",bitmap:$.transferToImageBitmap(),matrix:[ft,0,0,ft,-ve*ft/2,-Fe*ft/2]}}n.exports=function(){return q().apply(this,arguments)},n.exports.reset=function(){q().reset()},n.exports.create=te,n.exports.shapeFromPath=F,n.exports.shapeFromText=W})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),jl,!1);const pN=jl.exports;jl.exports.create;const _t={PRIMARY_BG:"#0E0B16",PRIMARY_ACCENT:"#9370DB",SECONDARY_ACCENT:"#D8BFD8",SURFACE:"#1A162B",TEXT_MAIN:"#E0E0E0",TEXT_MUTED:"#BDBDBD",LINK_HOVER:"#B799FF",ERROR_WARNING:"#D9534F"},mN=[{id:"hack",icon:Ob,title:"Hack & Compete",subtitle:"Innovate with cutting-edge tech",description:"Build powerful solutions using the latest technologies. Challenge yourself against global talent and showcase your skills in the ultimate coding competition."},{id:"learn",icon:"/icons/learn.png",title:"Learn & Grow",subtitle:"Expand your skills with expert guidance",description:"Join workshops, mentorships, and masterclasses led by top tech professionals. Level up your abilities and accelerate your developer journey."},{id:"network",icon:"/icons/collab.png",title:"Collaborate & Network",subtitle:"Build lasting connections",description:"Meet and team up with developers, founders, and innovators from around the world. Forge partnerships that go beyond the hackathon."},{id:"win",icon:"/icons/win.png",title:"Win Big",subtitle:"Unlock prizes and opportunities",description:"Stand out and earn recognition, cash rewards, and career-changing opportunities that can shape your future."}],gN=({stage:t,index:e})=>{const n=J.useRef(null),i=rN(n,{once:!0,margin:"-10%"}),[r,s]=J.useState(!1),o=()=>{t.id==="win"&&!r&&(s(!0),pN({particleCount:50,spread:60,origin:{y:.7},colors:[_t.PRIMARY_ACCENT,_t.SECONDARY_ACCENT]}))};J.useEffect(()=>{if(i&&t.id==="win"){const l=setTimeout(o,500);return()=>clearTimeout(l)}},[i,t.id,r]);const a=typeof t.icon=="string";return v.jsx(Ge.div,{ref:n,className:"relative backdrop-blur-sm border rounded-2xl p-6 shadow-xl",style:{backgroundColor:`${_t.SURFACE}80`,borderColor:`${_t.PRIMARY_ACCENT}1A`},initial:{opacity:0,y:50},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:e*.1,ease:"easeOut"},whileHover:{scale:1.02,transition:{duration:.2}},children:v.jsxs("div",{className:"relative z-10",children:[v.jsx(Ge.div,{className:"inline-flex p-3 rounded-xl mb-4",style:{backgroundColor:_t.PRIMARY_ACCENT},whileHover:{rotate:5},transition:{duration:.3},children:a?v.jsx("img",{src:t.icon,alt:t.title,className:"w-6 h-6 filter invert"}):v.jsx(t.icon,{className:"w-6 h-6 text-white"})}),v.jsx("h3",{className:"text-2xl font-bold mb-2",style:{color:_t.TEXT_MAIN},children:t.title}),v.jsx("p",{className:"text-base font-semibold bg-clip-text text-transparent mb-3",style:{backgroundImage:`linear-gradient(to right, ${_t.PRIMARY_ACCENT}, ${_t.SECONDARY_ACCENT})`},children:t.subtitle}),v.jsx("p",{className:"text-sm leading-relaxed",style:{color:_t.TEXT_MUTED},children:t.description})]})})},vN=()=>{const t=J.useRef(null),{scrollYProgress:e}=JP({target:t,offset:["start end","end start"]}),n=tN(e,[0,1],[0,1]);return v.jsx("div",{ref:t,className:"absolute left-1/2 top-0 h-full hidden lg:block -translate-x-1/2",children:v.jsxs("svg",{width:"4",height:"100%",className:"overflow-visible",children:[v.jsx(Ge.line,{x1:"2",y1:"0",x2:"2",y2:"100%",stroke:"url(#gradient)",strokeWidth:"3",strokeLinecap:"round",style:{pathLength:n}}),v.jsx("defs",{children:v.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[v.jsx("stop",{offset:"0%",stopColor:_t.PRIMARY_ACCENT}),v.jsx("stop",{offset:"100%",stopColor:_t.SECONDARY_ACCENT})]})})]})})};function xN(){const t=J.useRef(null);return v.jsx("section",{id:"why-join",className:"relative min-h-screen py-16 overflow-hidden font-inter",style:{backgroundColor:_t.PRIMARY_BG},children:v.jsxs("div",{ref:t,className:"relative max-w-5xl mx-auto px-6",children:[v.jsxs(Ge.div,{className:"text-center mb-16",initial:{opacity:0,y:-30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[v.jsxs("div",{className:"inline-flex items-center gap-2 bg-clip-text text-transparent mb-4",style:{backgroundImage:`linear-gradient(to right, ${_t.PRIMARY_ACCENT}, ${_t.SECONDARY_ACCENT})`},children:[v.jsx(ou,{className:"w-5 h-5",style:{color:_t.PRIMARY_ACCENT}}),v.jsx("span",{className:"text-sm font-semibold uppercase tracking-wider",style:{color:_t.PRIMARY_ACCENT},children:"The Journey"})]}),v.jsxs("h2",{className:"text-4xl lg:text-6xl font-bold mb-4 leading-tight",style:{color:_t.TEXT_MAIN},children:["Why ",v.jsx("span",{className:"bg-clip-text text-transparent",style:{backgroundImage:`linear-gradient(to right, ${_t.PRIMARY_ACCENT}, ${_t.SECONDARY_ACCENT})`},children:"Participate?"})]}),v.jsx("p",{className:"text-lg max-w-2xl mx-auto",style:{color:_t.TEXT_MUTED},children:"Embark on a transformative journey through four stages of innovation"})]}),v.jsxs("div",{className:"relative",children:[v.jsx(vN,{}),v.jsx("div",{className:"space-y-0",children:mN.map((e,n)=>v.jsxs("div",{className:`flex items-center ${n%2===0?"lg:flex-row":"lg:flex-row-reverse"} ${n>0?"-mt-32 lg:-mt-40":""}`,children:[v.jsx("div",{className:`w-full lg:w-1/2 ${n%2===0?"lg:pr-2":"lg:pl-2"}`,children:v.jsx(gN,{stage:e,index:n})}),v.jsx("div",{className:"hidden lg:block w-1/2"})]},e.id))})]}),v.jsx(Ge.div,{className:"flex justify-center mt-20",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:v.jsx(Ge.a,{href:"https://unitedhacksv6.devpost.com/",target:"_blank",rel:"noopener noreferrer",className:"px-8 py-4 text-white font-bold text-lg rounded-full shadow-lg",style:{backgroundImage:`linear-gradient(to right, ${_t.PRIMARY_ACCENT}, ${_t.SECONDARY_ACCENT})`},whileHover:{scale:1.05,boxShadow:`0 0 30px ${_t.PRIMARY_ACCENT}40`},whileTap:{scale:.95},animate:{boxShadow:[`0 0 15px ${_t.PRIMARY_ACCENT}2A`,`0 0 25px ${_t.PRIMARY_ACCENT}40`,`0 0 15px ${_t.PRIMARY_ACCENT}2A`]},transition:{boxShadow:{duration:2,repeat:1/0,ease:"easeInOut"}},children:"Join the Movement"})})]})})}const Ni={PRIMARY_BG:"#0E0B16",PRIMARY_ACCENT:"#9370DB",SECONDARY_ACCENT:"#D8BFD8",SURFACE:"#1A162B",TEXT_MAIN:"#E0E0E0",TEXT_MUTED:"#BDBDBD",LINK_HOVER:"#B799FF",ERROR_WARNING:"#D9534F"},yN=({index:t})=>v.jsx(Ge.div,{className:"absolute w-1 h-1 rounded-full",style:{backgroundColor:Ni.PRIMARY_ACCENT,opacity:.2},initial:{x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight},animate:{x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight},transition:{duration:Math.random()*20+10,repeat:1/0,repeatType:"reverse",ease:"linear",delay:t*.2}}),_N=()=>v.jsxs("section",{id:"judges",className:"py-20 relative overflow-hidden flex flex-col items-center justify-center min-h-screen",style:{backgroundColor:Ni.PRIMARY_BG},children:[v.jsx("div",{className:"absolute inset-0 pointer-events-none",children:Array.from({length:25}).map((t,e)=>v.jsx(yN,{index:e},e))}),v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",children:[v.jsx(Ge.h2,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut"},className:"text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent px-4 sm:px-0",style:{backgroundImage:`linear-gradient(to right, ${Ni.PRIMARY_ACCENT}, ${Ni.SECONDARY_ACCENT})`,fontFamily:"var(--font-heading)"},children:"Our Judges"}),v.jsx(Ge.p,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut",delay:.5},className:"text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0",style:{color:Ni.TEXT_MUTED,fontFamily:"var(--font-body)"},children:"Our panel of judges includes 15+ experts from different fields of tech, entrepreneurship, and design. Our judges have spent years working in their domains and have a passion for innovation. At United Hacks V6, they'll evaluate your projects based on [judging criteria], while also offering feedback, and incentivizing teams that push boundaries or tackle real-world problems in meaningful ways."}),v.jsx("div",{className:"mb-12",children:v.jsx("p",{className:"text-md italic",style:{color:Ni.TEXT_MUTED,fontFamily:"var(--font-body)"},children:"[info here]"})}),v.jsx("div",{className:"w-full h-px bg-white/20 my-16"}),v.jsx(Ge.h2,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut"},className:"text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent",style:{backgroundImage:`linear-gradient(to right, ${Ni.PRIMARY_ACCENT}, ${Ni.SECONDARY_ACCENT})`,fontFamily:"var(--font-heading)"},children:"Our Sponsors"}),v.jsxs(Ge.p,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut",delay:.5},className:"text-xl md:text-2xl max-w-2xl mx-auto mb-12",style:{color:Ni.TEXT_MUTED,fontFamily:"var(--font-body)"},children:["Our sponsors make this event possible! They help empower the next generation of innovators by funding prizes, providing resources, and offering mentorship. We’re proud to partner with organizations that believe in building a better future through technology. If you're interested in sponsoring United Hacks V6, email us at ",v.jsx("a",{href:"mailto:humans@hackunited.org",className:"underline",style:{color:Ni.PRIMARY_ACCENT},children:"humans@hackunited.org"})]}),v.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center",children:[v.jsx("img",{src:"/logos/logo1.png",alt:"Sponsor 1",className:"w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition"}),v.jsx("img",{src:"/logos/logo2.png",alt:"Sponsor 2",className:"w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition"}),v.jsx("img",{src:"/logos/logo3.png",alt:"Sponsor 3",className:"w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition"}),v.jsx("img",{src:"/logos/logo4.png",alt:"Sponsor 4",className:"w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition"}),v.jsx("img",{src:"/logos/logo10.png",alt:"Sponsor 5",className:"w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition"}),v.jsx("img",{src:"/logos/logo6.jpg",alt:"Sponsor 6",className:"w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition"}),v.jsx("img",{src:"/logos/logo7.png",alt:"Sponsor 7",className:"w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition"}),v.jsx("img",{src:"/logos/logo8.png",alt:"Sponsor 8",className:"w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition"}),v.jsx("img",{src:"/logos/logo9.webp",alt:"Sponsor 9",className:"w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition"}),v.jsx("img",{src:"/logos/logo5.svg",alt:"Sponsor 10",className:"w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition"}),v.jsx("img",{src:"/logos/logo6.png",alt:"Sponsor 11",className:"w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition"}),v.jsx("img",{src:"/logos/logo12.png",alt:"Sponsor 12",className:"w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition"})]})]})]}),he={PRIMARY_BG:"#0E0B16",PRIMARY_ACCENT:"#9370DB",SECONDARY_ACCENT:"#D8BFD8",SURFACE:"#1A162B",TEXT_MAIN:"#E0E0E0",TEXT_MUTED:"#BDBDBD",LINK_HOVER:"#B799FF"},SN=({index:t})=>v.jsx(Ge.div,{className:"absolute w-1 h-1 rounded-full",style:{backgroundColor:he.PRIMARY_ACCENT,opacity:.2},initial:{x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight},animate:{x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight},transition:{duration:Math.random()*20+10,repeat:1/0,repeatType:"reverse",ease:"linear",delay:t*.2}}),MN=()=>{const[t,e]=J.useState("requirements"),[n,i]=J.useState(!1);J.useEffect(()=>{const m=()=>{i(window.innerWidth<768)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]);const r=[{icon:Vb,title:"Public Github/Alternative Repository",description:"Your project code must be publicly accessible",iconColor:he.SECONDARY_ACCENT,borderColor:`${he.PRIMARY_ACCENT}1A`,textColor:he.PRIMARY_ACCENT},{icon:RS,title:"Demo Video of your Project (2-5 mins)",description:"A video demonstration of your project functionality",iconColor:he.SECONDARY_ACCENT,borderColor:`${he.PRIMARY_ACCENT}1A`,textColor:he.PRIMARY_ACCENT},{icon:hc,title:"Written Explanation of your Project",description:"Detailed project description done via Devpost",iconColor:he.SECONDARY_ACCENT,borderColor:`${he.PRIMARY_ACCENT}1A`,textColor:he.PRIMARY_ACCENT},{icon:rr,title:"Link to Live Demo (Optional)",description:"Link to live demo of your project (helpful but not required)",iconColor:he.SECONDARY_ACCENT,borderColor:`${he.PRIMARY_ACCENT}1A`,textColor:he.PRIMARY_ACCENT}],s=[{icon:Si,event:"Opening Ceremony",date:"January 16th, 2026",time:"7:00 PM EST",description:"Kickoff event with theme announcement and team formation",iconColor:he.SECONDARY_ACCENT,borderColor:`${he.PRIMARY_ACCENT}1A`,textColor:he.PRIMARY_ACCENT},{icon:bv,event:"Submissions Due",date:"January 18th, 2026",time:"12:00 PM EST",description:"Final deadline for all project submissions",iconColor:he.SECONDARY_ACCENT,borderColor:`${he.PRIMARY_ACCENT}1A`,textColor:he.PRIMARY_ACCENT},{icon:ju,event:"Closing Ceremony",date:"January 18th, 2025",time:"8:00 PM EST",description:"Awards ceremony and winner announcements",iconColor:he.SECONDARY_ACCENT,borderColor:`${he.PRIMARY_ACCENT}1A`,textColor:he.PRIMARY_ACCENT}],o=[{text:"Your submission MUST be a NEW project (All code must be written during the given time frame)",icon:sf},{text:"We will NOT accept submissions to other hackathons (Your creation must be original for United Hacks and not reused)",icon:rr},{text:"You may ONLY work with ONE TEAM for the duration of the Hackathon",icon:vl}],a=[{step:"Sign up on this Devpost.",icon:hc},{step:"Join our Discord, as it's our primary method of communication with participants.",icon:of}],l={title:"Our Theme",themeTrack:"Theme Track: Announced during opening ceremony",generalTrack:'United Hacks is a platform where innovators can unleash their creativity without limitations. If you choose to compete in the "General" track, you have the freedom to explore diverse topics—from accessibility to mental health and beyond, nurturing the potential of your ideas!'},c={title:"Workshop Schedule",status:"Coming soon",description:"All workshop links will be posted in our Discord, and are hyperlinked on the schedule"},u=[{id:"requirements",label:"Requirements",icon:hc},{id:"dates",label:"Important Dates",icon:Gu},{id:"rules",label:"Rules & Registration",icon:sf},{id:"theme",label:"Theme & Workshops",icon:of}],d={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},f={hidden:{opacity:0,y:30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:"easeOut"}}},h={hidden:{opacity:0,rotateY:-15,scale:.8},visible:{opacity:1,rotateY:0,scale:1,transition:{duration:.8,ease:"easeOut"}},hover:{scale:1.05,rotateY:5,rotateX:5,boxShadow:`0 20px 40px ${he.PRIMARY_ACCENT}4D`,transition:{duration:.3}}};return v.jsxs("section",{id:"requirements",className:"py-20 relative overflow-hidden",style:{backgroundColor:he.PRIMARY_BG},children:[v.jsx("div",{className:"absolute inset-0 pointer-events-none",children:Array.from({length:25}).map((m,y)=>v.jsx(SN,{index:y},y))}),v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[v.jsxs(Ge.div,{className:"text-center mb-16",initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[v.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent",style:{backgroundImage:`linear-gradient(to right, ${he.PRIMARY_ACCENT}, ${he.SECONDARY_ACCENT})`},children:"Requirements & Important Info"}),v.jsx("p",{className:"text-xl max-w-3xl mx-auto",style:{color:he.TEXT_MUTED},children:"Everything you need to know about participating in United Hacks V6"})]}),v.jsx(Ge.div,{className:"flex flex-wrap justify-center mb-12 gap-2",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:u.map(m=>{const y=m.icon;return v.jsxs(Ge.button,{onClick:()=>e(m.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${t===m.id?"text-white shadow-lg":"text-white"}`,style:{backgroundColor:he.SURFACE,color:he.TEXT_MAIN,background:t===m.id?`linear-gradient(to right, ${he.PRIMARY_ACCENT}, ${he.SECONDARY_ACCENT})`:void 0},whileHover:{scale:1.05},whileTap:{scale:.95},children:[v.jsx(y,{size:18}),v.jsx("span",{className:"hidden sm:inline",children:m.label})]},m.id)})}),v.jsxs(Ig,{mode:"wait",children:[t==="requirements"&&v.jsx(Ge.div,{variants:d,initial:"hidden",animate:"visible",exit:{opacity:0,y:-20},className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:r.map((m,y)=>{const g=m.icon;return v.jsx(Ge.div,{variants:h,whileHover:"hover",className:"p-6 rounded-xl border transform rotate-1 hover:rotate-0 transition-transform duration-300",style:{background:he.SURFACE,borderColor:`${he.PRIMARY_ACCENT}1A`},children:v.jsxs("div",{className:"flex items-start gap-4",children:[v.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",style:{backgroundColor:m.iconColor},children:v.jsx(g,{className:"text-white",size:24})}),v.jsxs("div",{children:[v.jsx("h4",{className:"text-lg font-semibold mb-2",style:{color:m.textColor},children:m.title}),v.jsx("p",{style:{color:he.TEXT_MUTED},children:m.description})]})]})},y)})},"requirements"),t==="dates"&&v.jsxs(Ge.div,{variants:d,initial:"hidden",animate:"visible",exit:{opacity:0,y:-20},className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[s.map((m,y)=>{const g=m.icon;return v.jsx(Ge.div,{variants:h,whileHover:"hover",className:"p-6 rounded-xl border transform -rotate-1 hover:rotate-0 transition-transform duration-300",style:{background:he.SURFACE,borderColor:`${he.PRIMARY_ACCENT}1A`},children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center",style:{backgroundColor:m.iconColor},children:v.jsx(g,{className:"text-white",size:28})}),v.jsx("h4",{className:"text-xl font-bold text-white mb-2",style:{color:he.TEXT_MAIN},children:m.event}),v.jsx("p",{className:"font-semibold mb-1",style:{color:m.textColor},children:m.date}),v.jsx("p",{className:"text-sm mb-3",style:{color:m.textColor},children:m.time}),v.jsx("p",{className:"text-sm leading-relaxed",style:{color:he.TEXT_MUTED},children:m.description})]})},y)}),v.jsx(Ge.div,{variants:f,className:"lg:col-span-3 mt-6 p-4 rounded-lg",style:{backgroundColor:he.SURFACE,borderColor:`${he.PRIMARY_ACCENT}1A`},children:v.jsxs("p",{className:"text-center",style:{color:he.TEXT_MUTED},children:[v.jsx("strong",{children:"Note:"})," The link to the live streams will be posted in our Discord server."]})})]},"dates"),t==="rules"&&v.jsxs(Ge.div,{variants:d,initial:"hidden",animate:"visible",exit:{opacity:0,y:-20},className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[v.jsxs(Ge.div,{variants:f,className:"p-8 rounded-xl border transform rotate-1",style:{background:he.SURFACE,borderColor:`${he.PRIMARY_ACCENT}1A`},children:[v.jsxs("h3",{className:"text-2xl font-bold text-white mb-6 flex items-center gap-3",style:{color:he.TEXT_MAIN},children:[v.jsx(sf,{style:{color:he.PRIMARY_ACCENT},size:28}),"Other Criteria"]}),v.jsx("div",{className:"space-y-6",children:o.map((m,y)=>{const g=m.icon;return v.jsxs(Ge.div,{className:"flex items-start gap-4 p-4 rounded-lg",style:{backgroundColor:`${he.PRIMARY_ACCENT}1A`,borderColor:`${he.PRIMARY_ACCENT}1A`},whileHover:{scale:1.02,x:5},transition:{duration:.2},children:[v.jsx(g,{style:{color:he.PRIMARY_ACCENT},className:"mt-1 flex-shrink-0",size:20}),v.jsx("p",{style:{color:he.TEXT_MUTED},children:m.text})]},y)})})]}),v.jsxs(Ge.div,{variants:f,className:"p-8 rounded-xl border transform -rotate-1",style:{background:he.SURFACE,borderColor:`${he.SECONDARY_ACCENT}1A`},children:[v.jsxs("h3",{className:"text-2xl font-bold text-white mb-6 flex items-center gap-3",style:{color:he.TEXT_MAIN},children:[v.jsx(rr,{style:{color:he.SECONDARY_ACCENT},size:28}),"How To Register"]}),v.jsx("div",{className:"space-y-6",children:a.map((m,y)=>{const g=m.icon;return v.jsxs(Ge.div,{className:"flex items-start gap-4 p-4 rounded-lg",style:{backgroundColor:`${he.SECONDARY_ACCENT}1A`,borderColor:`${he.SECONDARY_ACCENT}1A`},whileHover:{scale:1.02,x:5},transition:{duration:.2},children:[v.jsx("div",{className:"w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0",style:{backgroundColor:he.SECONDARY_ACCENT},children:y+1}),v.jsxs("div",{className:"flex-1",children:[v.jsx(g,{style:{color:he.SECONDARY_ACCENT},className:"mb-2",size:20}),v.jsx("p",{style:{color:he.TEXT_MUTED},children:m.step})]})]},y)})})]})]},"rules"),t==="theme"&&v.jsxs(Ge.div,{variants:d,initial:"hidden",animate:"visible",exit:{opacity:0,y:-20},className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[v.jsxs(Ge.div,{variants:f,className:"p-8 rounded-xl border transform rotate-1",style:{background:he.SURFACE,borderColor:`${he.PRIMARY_ACCENT}1A`},children:[v.jsxs("h3",{className:"text-2xl font-bold text-white mb-6 flex items-center gap-3",style:{color:he.TEXT_MAIN},children:[v.jsx(hc,{style:{color:he.PRIMARY_ACCENT},size:28}),l.title]}),v.jsxs("div",{className:"space-y-6",children:[v.jsxs(Ge.div,{className:"p-4 rounded-lg border",style:{backgroundColor:`${he.PRIMARY_ACCENT}1A`,borderColor:`${he.PRIMARY_ACCENT}1A`},whileHover:{scale:1.02},children:[v.jsxs("h4",{className:"font-semibold mb-2 flex items-center gap-2",style:{color:he.PRIMARY_ACCENT},children:[v.jsx(ju,{size:18}),"Theme Track"]}),v.jsx("p",{style:{color:he.TEXT_MUTED},children:l.themeTrack})]}),v.jsxs(Ge.div,{className:"p-4 rounded-lg border",style:{backgroundColor:`${he.PRIMARY_ACCENT}1A`,borderColor:`${he.PRIMARY_ACCENT}1A`},whileHover:{scale:1.02},children:[v.jsxs("h4",{className:"font-semibold mb-2 flex items-center gap-2",style:{color:he.PRIMARY_ACCENT},children:[v.jsx(Si,{size:18}),"General Track"]}),v.jsx("p",{style:{color:he.TEXT_MUTED},children:l.generalTrack})]})]})]}),v.jsxs(Ge.div,{variants:f,className:"p-8 rounded-xl border transform -rotate-1",style:{background:he.SURFACE,borderColor:`${he.SECONDARY_ACCENT}1A`},children:[v.jsxs("h3",{className:"text-2xl font-bold text-white mb-6 flex items-center gap-3",style:{color:he.TEXT_MAIN},children:[v.jsx(of,{style:{color:he.SECONDARY_ACCENT},size:28}),c.title]}),v.jsxs(Ge.div,{className:"p-6 rounded-lg border text-center",style:{backgroundColor:`${he.SECONDARY_ACCENT}1A`,borderColor:`${he.SECONDARY_ACCENT}1A`},whileHover:{scale:1.05},children:[v.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center",style:{backgroundColor:he.SECONDARY_ACCENT},children:v.jsx(bv,{className:"text-white",size:28})}),v.jsx("h4",{className:"font-semibold mb-2 text-xl",style:{color:he.SECONDARY_ACCENT},children:c.status}),v.jsx("p",{style:{color:he.TEXT_MUTED},children:c.description})]})]})]},"theme")]})]})]})},De={PRIMARY_BG:"#0E0B16",PRIMARY_ACCENT:"#9370DB",SECONDARY_ACCENT:"#D8BFD8",SURFACE:"#1A162B",TEXT_MAIN:"#E0E0E0",TEXT_MUTED:"#BDBDBD",LINK_HOVER:"#B799FF"},EN=()=>{const[t,e]=J.useState(0),[n,i]=J.useState(!1),[r,s]=J.useState([]),[o,a]=J.useState(!1),[l,c]=J.useState(!1),[u,d]=J.useState(!1),f=[{category:"First Place - General",prize:"$250 in cash",winners:"1 winner",icon:ju,items:["Certificate of Achievement","Featured and Praised in Online Article","$250 Cash Prize","Hack United Swag Pack","1 Year VIP CodeCrafters Membership ($180)","Chance to Pitch for a 50k investment from Switchon Capital","All Participant Prizes"]},{category:"First Place - Theme",prize:"$250 in cash",winners:"1 winner",icon:ju,items:["Certificate of Achievement","Featured and Praised in Online Article","$250 Cash Prize","Hack United Swag Pack","2 Year VIP CodeCrafters Membership ($360)","Chance to Pitch 50k investment from Switchon Capital","All Participant Prizes"]},{category:"Second Place - General",prize:"$100 in cash",winners:"1 winner",icon:wv,items:["Certificate of Achievement","Featured and Praised in Online Article","$100 Cash Prize","Hack United Swag Pack","All Participant Prizes"]},{category:"Second Place - Theme",prize:"$100 in cash",winners:"1 winner",icon:wv,items:["Certificate of Achievement","Featured and Praised in Online Article","$100 Cash Prize","Hack United Swag Pack","6 Month VIP CodeCrafters Membership ($90)","All Participant Prizes"]},{category:"Best Solo Hack",prize:"Airpods Pro 2 ($250)",winners:"1 winner",icon:vl,description:"Best project developed by an individual rather than a team. In order to be eligible for this prize, your project MUST be based around the theme!",items:["Airpods Pro 2 ($250)","Certificate of Achievement","Featured and Praised in Online Article","Hack United Swag Pack","All Participant Prizes"]},{category:"Best Pitch",prize:"Digital Camera for EVERY Team Member",winners:"1 winner",icon:RS,description:"This prize is given to the team with the most compelling video presentation.",items:["Certificate of Achievement","Featured and Praised in Online Article","Hack United Swag Pack","Digital Camera for EVERY Team Member"]},{category:"Moonshot Prize",prize:"$50,000 in cash",winners:"1 winner",icon:Si,description:"Build a hack that is way too ambitious for a weekend, yet you dared to dream big anyway.",items:["Chance to Pitch with SwitchOn Capital for a $50,000 investment"]},{category:"Participant Prize",prize:"Various Prizes",winners:"All participants",icon:Bb,items:["Certificate of Participation","2 Months of Balsamiq Cloud Pro ($24)","1 Month Interview Cake License ($249)","Free .xyz domain for 1 year ($13)","Wolfram 1 Access 6 Months ($50)"]}],h=t>=f.length&&!l,m=l&&t>0?f[t-1]:null,y=J.useCallback(()=>{n||h||(i(!0),a(!0),d(!1),setTimeout(()=>{const _=f[t];s(x=>[...x,_]),c(!0),e(x=>x+1),d(!0),a(!1),i(!1)},800))},[n,t,h,f]),g=J.useCallback(()=>{!u&&!l||(c(!1),d(!1))},[u,l]),p=J.useCallback(()=>{e(0),s([]),a(!1),c(!1),i(!1),d(!1)},[]);return v.jsxs("section",{id:"prizes",className:"py-20 min-h-screen",style:{backgroundColor:De.PRIMARY_BG},onClick:g,children:[v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"text-center mb-12 sm:mb-16",children:[v.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent px-4 sm:px-0",style:{backgroundImage:`linear-gradient(to right, ${De.PRIMARY_ACCENT}, ${De.SECONDARY_ACCENT})`},children:"Prizes"}),v.jsx("p",{className:"text-lg sm:text-xl max-w-3xl mx-auto px-4 sm:px-0",style:{color:De.TEXT_MUTED},children:"$50,700+ in prizes + other prizes"})]}),h?v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"text-center mb-12",children:[v.jsx("h3",{className:"text-4xl font-bold mb-6",style:{color:De.SECONDARY_ACCENT},children:"🎉 All Prizes Discovered! 🎉"}),v.jsx("button",{onClick:_=>{_.stopPropagation(),p()},className:"inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform",style:{backgroundColor:De.PRIMARY_ACCENT,color:De.TEXT_MAIN,boxShadow:`0 8px 20px ${De.PRIMARY_ACCENT}40`},children:v.jsx(jb,{size:24})})]}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16",children:f.map((_,x)=>{const S=_.icon;return v.jsxs("div",{className:"p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 animate-fadeInUp cursor-pointer",style:{backgroundColor:De.SURFACE,borderColor:`${De.PRIMARY_ACCENT}30`,animationDelay:`${x*.1}s`,boxShadow:"0 8px 25px rgba(0,0,0,0.2)",background:`
                        ${De.SURFACE},
                        radial-gradient(circle at top right, ${De.PRIMARY_ACCENT}10, transparent)
                      `},onClick:b=>b.stopPropagation(),children:[v.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6",children:[v.jsx("div",{className:"w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center",style:{backgroundColor:De.PRIMARY_ACCENT,boxShadow:`0 4px 12px ${De.PRIMARY_ACCENT}40`},children:v.jsx(S,{className:"text-white sm:w-7 sm:h-7",size:24})}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg sm:text-xl font-bold",style:{color:De.TEXT_MAIN},children:_.category}),v.jsx("p",{className:"text-xs sm:text-sm",style:{color:De.TEXT_MUTED},children:_.winners})]})]}),v.jsxs("div",{className:"mb-4 sm:mb-6",children:[v.jsx("p",{className:"text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3",style:{color:De.SECONDARY_ACCENT},children:_.prize}),_.description&&v.jsx("p",{className:"text-xs sm:text-sm leading-relaxed",style:{color:De.TEXT_MUTED},children:_.description})]}),v.jsx("div",{className:"space-y-3",children:_.items.map((b,C)=>v.jsxs("div",{className:"flex items-start gap-3",children:[v.jsx(Av,{className:"mt-1 flex-shrink-0",size:14,style:{color:De.SECONDARY_ACCENT}}),v.jsx("p",{className:"text-sm leading-relaxed",style:{color:De.TEXT_MUTED},children:b})]},C))})]},x)})}),v.jsx("div",{className:"text-center",children:v.jsxs("div",{className:"p-10 rounded-2xl relative overflow-hidden",style:{backgroundImage:`linear-gradient(135deg, ${De.PRIMARY_ACCENT}, ${De.SECONDARY_ACCENT})`,boxShadow:"0 20px 40px rgba(0,0,0,0.3)"},children:[v.jsx("div",{className:"absolute inset-0 opacity-20",style:{background:"radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)"}}),v.jsx("h3",{className:"text-4xl font-bold text-white mb-3 relative z-10",children:"Total Prize Pool"}),v.jsx("p",{className:"text-3xl font-semibold text-white relative z-10",children:"$50,700+"}),v.jsx("p",{className:"mt-3 text-white opacity-90 text-lg relative z-10",children:"in cash prizes and rewards"})]})})]}):v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"flex flex-col items-center justify-center mb-16",children:v.jsxs("div",{className:"relative",style:{perspective:"1000px"},children:[v.jsxs("div",{className:`
                    relative w-72 h-48 cursor-pointer transition-all duration-500 transform-gpu
                    ${!o&&!n?"hover:scale-110 hover:rotateY-12 hover:rotateX-8":""}
                    ${o?"animate-bounce scale-105":""}
                    ${n?"animate-pulse scale-95":""}
                  `,onClick:_=>{_.stopPropagation(),y()},style:{transformStyle:"preserve-3d",filter:`
                      drop-shadow(0 15px 35px rgba(0, 0, 0, 0.8)) 
                      drop-shadow(0 5px 15px rgba(255, 104, 73, 0.6))
                      drop-shadow(0 0 50px rgba(255, 104, 73, 0.4))
                    `,animation:!o&&!n?"treasure-glow 3s ease-in-out infinite alternate, gentle-float 4s ease-in-out infinite":void 0},children:[v.jsx("div",{className:"absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-80 h-12 rounded-full opacity-60",style:{background:"radial-gradient(ellipse, rgba(0,0,0,0.8) 0%, transparent 70%)",filter:"blur(8px)"}}),v.jsxs("div",{className:"absolute bottom-0 w-full h-32 rounded-lg border-4 border-yellow-600 transform-gpu",style:{background:`
                        linear-gradient(135deg, #4a2c2a 0%, #654321 15%, #8B4513 30%, #A0522D 50%, #8B4513 70%, #654321 85%, #4a2c2a 100%),
                        repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 6px),
                        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,215,0,0.1) 2px, rgba(255,215,0,0.1) 4px)
                      `,boxShadow:`
                        inset 0 8px 16px rgba(0,0,0,0.5), 
                        inset 0 -8px 16px rgba(255,215,0,0.3),
                        inset 4px 0 8px rgba(0,0,0,0.3),
                        inset -4px 0 8px rgba(255,215,0,0.2),
                        0 20px 40px rgba(0,0,0,0.6),
                        0 0 0 3px #B8860B,
                        0 0 0 6px rgba(184,134,11,0.3)
                      `,transformStyle:"preserve-3d"},children:[v.jsx("div",{className:"absolute top-4 left-4 right-4 h-2 rounded-full transform",style:{background:"linear-gradient(90deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)",boxShadow:"0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)"}}),v.jsx("div",{className:"absolute bottom-4 left-4 right-4 h-2 rounded-full",style:{background:"linear-gradient(90deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)",boxShadow:"0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)"}}),v.jsx("div",{className:"absolute top-4 bottom-4 left-4 w-2 rounded-full",style:{background:"linear-gradient(180deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)",boxShadow:"2px 0 4px rgba(0,0,0,0.4), inset 1px 0 2px rgba(255,255,255,0.3)"}}),v.jsx("div",{className:"absolute top-4 bottom-4 right-4 w-2 rounded-full",style:{background:"linear-gradient(180deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)",boxShadow:"-2px 0 4px rgba(0,0,0,0.4), inset -1px 0 2px rgba(255,255,255,0.3)"}}),v.jsx("div",{className:"absolute top-2 left-2 w-6 h-6 rounded-full",style:{background:"radial-gradient(circle, #FFD700 0%, #B8860B 100%)",boxShadow:"0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)"}}),v.jsx("div",{className:"absolute top-2 right-2 w-6 h-6 rounded-full",style:{background:"radial-gradient(circle, #FFD700 0%, #B8860B 100%)",boxShadow:"0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)"}}),v.jsx("div",{className:"absolute bottom-2 left-2 w-6 h-6 rounded-full",style:{background:"radial-gradient(circle, #FFD700 0%, #B8860B 100%)",boxShadow:"0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)"}}),v.jsx("div",{className:"absolute bottom-2 right-2 w-6 h-6 rounded-full",style:{background:"radial-gradient(circle, #FFD700 0%, #B8860B 100%)",boxShadow:"0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)"}})]}),v.jsxs("div",{className:`
                      absolute top-0 w-full h-28 rounded-t-lg transition-all duration-1000 origin-bottom border-4 border-yellow-600 transform-gpu
                      ${o?"rotateX-60 translateZ-8":"rotateX-0"}
                    `,style:{background:`
                        linear-gradient(135deg, #5d4037 0%, #8B4513 15%, #A0522D 30%, #D2691E 45%, #CD853F 55%, #A0522D 70%, #8B4513 85%, #5d4037 100%),
                        repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px),
                        repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,215,0,0.1) 1px, rgba(255,215,0,0.1) 2px)
                      `,boxShadow:`
                        inset 0 8px 16px rgba(255,215,0,0.4), 
                        inset 0 -4px 8px rgba(0,0,0,0.5),
                        inset 4px 0 8px rgba(255,215,0,0.2),
                        inset -4px 0 8px rgba(0,0,0,0.3),
                        0 12px 24px rgba(0,0,0,0.5),
                        0 0 0 3px #B8860B,
                        0 0 0 6px rgba(184,134,11,0.3)
                      `,transformStyle:"preserve-3d",transformOrigin:"bottom center"},children:[v.jsx("div",{className:"absolute top-4 left-4 right-4 h-2 rounded-full",style:{background:"linear-gradient(90deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)",boxShadow:"0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.4)"}}),v.jsx("div",{className:"absolute bottom-4 left-4 right-4 h-2 rounded-full",style:{background:"linear-gradient(90deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)",boxShadow:"0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.4)"}}),v.jsx("div",{className:"absolute inset-2 rounded opacity-30",style:{background:"radial-gradient(ellipse at center, rgba(255,215,0,0.6) 0%, transparent 70%)"}})]}),v.jsx("div",{className:"absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 flex items-center justify-center",style:{background:`
                        radial-gradient(circle, #FFD700 0%, #FFA500 30%, #FF8C00 60%, #B8860B 100%),
                        conic-gradient(from 0deg, #FFD700, #FFA500, #FFD700, #FFA500, #FFD700)
                      `,borderColor:"#B8860B",boxShadow:`
                        0 8px 16px rgba(0,0,0,0.5),
                        inset 0 4px 8px rgba(255,255,255,0.4),
                        inset 0 -4px 8px rgba(0,0,0,0.4),
                        0 0 20px rgba(255,215,0,0.6)
                      `,transformStyle:"preserve-3d"},children:v.jsx("div",{className:"w-4 h-4 rounded-full relative",style:{background:"radial-gradient(circle, #2c1810 0%, #1a0f0a 100%)",boxShadow:"inset 0 2px 4px rgba(0,0,0,0.9), 0 0 0 1px rgba(139,69,19,0.5)"},children:v.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-3",style:{background:"linear-gradient(180deg, #2c1810 0%, #1a0f0a 100%)",clipPath:"polygon(0 0, 100% 0, 80% 100%, 20% 100%)"}})})}),v.jsx("div",{className:"absolute inset-0 rounded-lg animate-pulse pointer-events-none",style:{background:`
                        radial-gradient(ellipse 120% 80% at 50% 60%, ${De.PRIMARY_ACCENT}40 0%, ${De.SECONDARY_ACCENT}30 30%, transparent 70%),
                        radial-gradient(ellipse 80% 60% at 30% 30%, ${De.SECONDARY_ACCENT}35 0%, transparent 60%),
                        radial-gradient(ellipse 100% 70% at 70% 70%, rgba(255,215,0,0.3) 0%, transparent 50%)
                      `,filter:"blur(20px)",animation:"magical-aura 3s ease-in-out infinite alternate"}}),!o&&v.jsx(v.Fragment,{children:[...Array(6)].map((_,x)=>v.jsx("div",{className:"absolute w-3 h-3 rounded-full animate-ping pointer-events-none",style:{background:x%3===0?De.SECONDARY_ACCENT:x%3===1?De.PRIMARY_ACCENT:"#FFD700",top:`${20+x*15}%`,left:`${15+x*12}%`,right:x>3?`${15+(x-3)*12}%`:"auto",animationDelay:`${x*.3}s`,animationDuration:`${2+x*.2}s`,filter:"blur(0.5px)",boxShadow:"0 0 10px currentColor"}},x))}),!o&&v.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(12)].map((_,x)=>v.jsx("div",{className:"absolute w-1 h-1 rounded-full animate-bounce",style:{background:`hsl(${45+x*30}, 80%, 60%)`,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`,opacity:.7,filter:"blur(0.5px)"}},x))})]}),v.jsxs("div",{className:"mt-12 text-center",children:[v.jsxs("p",{style:{color:De.TEXT_MUTED},className:"text-lg",children:["Prizes Discovered: ",t," / ",f.length]}),v.jsx("p",{style:{color:De.SECONDARY_ACCENT},className:"text-sm mt-2",children:n?"Opening chest...":u?"Click anywhere to continue...":"Click the chest to discover a prize!"})]})]})}),m&&l&&v.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 animate-fadeIn p-4 cursor-pointer",style:{animation:"prize-reveal 0.8s ease-out"},children:v.jsxs("div",{className:"p-6 rounded-2xl border-2 max-w-md w-full transform animate-bounce relative overflow-hidden",style:{backgroundColor:De.SURFACE,borderColor:De.PRIMARY_ACCENT,boxShadow:`
                      0 0 80px ${De.PRIMARY_ACCENT}90,
                      0 0 120px ${De.SECONDARY_ACCENT}60,
                      inset 0 2px 0 rgba(255,255,255,0.1),
                      inset 0 -2px 0 rgba(0,0,0,0.3)
                    `,animation:"prize-glow 2s ease-in-out infinite alternate, prize-float 3s ease-in-out infinite"},children:[v.jsx("div",{className:"absolute inset-0 opacity-20",style:{background:`
                        radial-gradient(circle at 30% 30%, ${De.PRIMARY_ACCENT} 0%, transparent 50%),
                        radial-gradient(circle at 70% 70%, ${De.SECONDARY_ACCENT} 0%, transparent 50%),
                        conic-gradient(from 0deg at 50% 50%, transparent, ${De.PRIMARY_ACCENT}20, transparent)
                      `}}),v.jsxs("div",{className:"text-center relative z-10",children:[v.jsxs("div",{className:"w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center relative",style:{background:`
                          linear-gradient(135deg, ${De.PRIMARY_ACCENT}, ${De.SECONDARY_ACCENT}),
                          radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent)
                        `,boxShadow:`
                          0 12px 30px rgba(0,0,0,0.4), 
                          0 0 0 6px ${De.PRIMARY_ACCENT}30,
                          inset 0 4px 8px rgba(255,255,255,0.2),
                          inset 0 -4px 8px rgba(0,0,0,0.2)
                        `},children:[v.jsx(m.icon,{className:"text-white relative z-10",size:32}),v.jsx("div",{className:"absolute inset-0 rounded-full animate-ping",style:{backgroundColor:`${De.PRIMARY_ACCENT}50`}}),v.jsx("div",{className:"absolute inset-0 rounded-full animate-pulse",style:{background:`conic-gradient(from 0deg, transparent, ${De.SECONDARY_ACCENT}40, transparent)`,animation:"icon-rotate 4s linear infinite"}})]}),v.jsx("h3",{className:"text-2xl font-bold mb-3",style:{color:De.TEXT_MAIN},children:m.category}),v.jsx("p",{className:"text-xl font-semibold mb-4",style:{color:De.SECONDARY_ACCENT},children:m.prize}),v.jsx("p",{className:"text-base mb-4",style:{color:De.TEXT_MUTED},children:m.winners}),m.description&&v.jsx("p",{className:"text-sm mb-4 italic",style:{color:De.TEXT_MUTED},children:m.description}),v.jsxs("div",{className:"text-left",children:[v.jsx("h4",{className:"text-base font-semibold mb-3 text-center",style:{color:De.SECONDARY_ACCENT},children:"What You Get:"}),v.jsx("div",{className:"space-y-2",children:m.items.map((_,x)=>v.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg transform hover:scale-102 transition-all duration-300",style:{backgroundColor:`${De.PRIMARY_ACCENT}15`,border:`1px solid ${De.PRIMARY_ACCENT}30`,boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[v.jsx(Av,{className:"mt-1 flex-shrink-0",size:14,style:{color:De.SECONDARY_ACCENT,filter:"drop-shadow(0 0 4px currentColor)"}}),v.jsx("p",{className:"text-sm font-medium",style:{color:De.TEXT_MAIN},children:_})]},x))})]}),v.jsx("div",{className:"mt-4 text-center",children:v.jsx("p",{className:"text-sm animate-pulse",style:{color:De.SECONDARY_ACCENT},children:"Click anywhere to continue..."})})]})]})})]})]}),v.jsx("style",{jsx:!0,children:`
        @keyframes treasure-glow {
          0% { 
            filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.8)) drop-shadow(0 5px 15px rgba(255, 104, 73, 0.6)) drop-shadow(0 0 50px rgba(255, 104, 73, 0.4));
          }
          100% { 
            filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.9)) drop-shadow(0 8px 20px rgba(255, 104, 73, 0.8)) drop-shadow(0 0 70px rgba(255, 104, 73, 0.6));
          }
        }
        
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          33% { transform: translateY(-8px) rotateY(2deg); }
          66% { transform: translateY(-4px) rotateY(-1deg); }
        }
        
        @keyframes magical-aura {
          0% { 
            filter: blur(20px);
            opacity: 0.6;
            transform: scale(1);
          }
          100% { 
            filter: blur(25px);
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        
        @keyframes prize-reveal {
          0% { 
            opacity: 0; 
            transform: scale(0.8) rotateY(-20deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05) rotateY(5deg);
          }
          100% { 
            opacity: 1; 
            transform: scale(1) rotateY(0deg);
          }
        }
        
        @keyframes prize-glow {
          0% { 
            box-shadow: 0 0 80px ${De.PRIMARY_ACCENT}90, 0 0 120px ${De.SECONDARY_ACCENT}60, inset 0 2px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.3);
          }
          100% { 
            box-shadow: 0 0 100px ${De.PRIMARY_ACCENT}100, 0 0 150px ${De.SECONDARY_ACCENT}80, inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.4);
          }
        }
        
        @keyframes prize-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes icon-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(40px) rotateX(10deg); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) rotateX(0deg); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
        
        .hover\\:rotateY-12:hover {
          transform: rotateY(-12deg) !important;
        }
        
        .hover\\:rotateX-8:hover {
          transform: rotateX(-8deg) rotateY(-12deg) !important;
        }
        
        .rotateX-60 {
          transform: rotateX(-60deg);
        }
        
        .translateZ-8 {
          transform: rotateX(-60deg) translateZ(8px);
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .hover\\:rotate-1:hover {
          transform: scale(1.05) rotate(1deg);
        }
      `})]})},Dt={PRIMARY_BG:"#0E0B16",PRIMARY_ACCENT:"#9370DB",SECONDARY_ACCENT:"#D8BFD8",SURFACE:"#1A162B",TEXT_MAIN:"#E0E0E0",TEXT_MUTED:"#BDBDBD",LINK_HOVER:"#B799FF",ERROR_WARNING:"#D9534F"},wN=()=>{const[t,e]=J.useState(null),[n,i]=J.useState(!1);J.useEffect(()=>{const c=()=>i(window.innerWidth<768);return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]);const r=[{question:"Can I join as a beginner?",answer:"Of course! We welcome beginners and experienced developers alike. This is a great opportunity to learn and build something new."},{question:"How much does it cost to participate?",answer:"United Hacks V6 is completely free to participate. We believe in making technology accessible to everyone."},{question:"Can I participate as a team?",answer:"Yes! You can form teams of up to 4 members. You can find teammates on our Discord server or participate solo."},{question:"What are the rules and guidelines?",answer:"You can find the rules and guidelines on the Discord and Devpost."},{question:"What should I build?",answer:"Anything! Build web apps, mobile apps, games, AI/ML projects, or any innovative solution. Creativity is encouraged!"},{question:"How will projects be judged?",answer:"Projects are evaluated based on Creativity, Practicality, Presentation, Design, and Technical Complexity."},{question:"When is the deadline to register?",answer:"Registration is open now! Registration deadline is 1st January 18th 2026. Make sure to sign up on Devpost, complete the Google Form, and join our Discord server."},{question:"Where is the workshop scheduled?",answer:"The workshop schedule is available on the Discord."},{question:"What do I need to submit?",answer:"You need to submit: 1) Public GitHub repository, 2) Demo video (2-5 mins), 3) Written explanation via Devpost. Live demo link is optional but helpful."},{question:"Do I have to pay?",answer:"Nope! everything is free!"},{question:"How does finding teammates work?",answer:"You can find teammates in Devpost or you can work solo. Make sure to include all team members names while submitting the project."},{question:"I have more questions",answer:"You can ask your questions on the Discord or email us at humans@hackunited.org."}],s=c=>{e(t===c?null:c)},o={closed:{rotateY:0,scale:1},open:{rotateY:n?0:180,scale:n?1:1.02,transition:{duration:.4,ease:"easeInOut"}}},a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.3}}},l={hidden:{opacity:0,y:20,scale:.9,rotateY:-15},visible:{opacity:1,y:0,scale:1,rotateY:0,transition:{duration:.6,ease:"easeOut"}}};return v.jsxs("section",{id:"faq",className:"py-16 sm:py-20 relative overflow-hidden min-h-screen flex items-center justify-center",style:{backgroundColor:Dt.PRIMARY_BG},children:[v.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full",children:[v.jsxs(Ge.div,{className:"text-center mb-12 sm:mb-16",initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[v.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent px-4 sm:px-0",style:{backgroundImage:`linear-gradient(to right, ${Dt.PRIMARY_ACCENT}, ${Dt.SECONDARY_ACCENT})`},children:"Frequently Asked Questions"}),v.jsx("p",{className:"text-lg sm:text-xl px-4 sm:px-0",style:{color:Dt.TEXT_MUTED},children:"Got questions? We've got answers!"})]}),n?v.jsx("div",{className:"grid grid-cols-1 gap-4 sm:gap-6 w-full",children:r.map((c,u)=>v.jsx(Ge.div,{className:"w-full",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:u*.1},children:v.jsxs("div",{className:"relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer",style:{backgroundColor:Dt.SURFACE,borderColor:t===u?Dt.PRIMARY_ACCENT:Dt.SURFACE},onClick:()=>s(u),children:[v.jsxs("div",{className:"flex items-center justify-between gap-4",children:[v.jsx("h3",{className:"font-semibold text-base sm:text-lg leading-tight",style:{color:Dt.TEXT_MAIN},children:c.question}),v.jsx(Ge.div,{animate:{rotate:t===u?180:0},transition:{duration:.3},children:v.jsx(Tv,{size:24,className:"sm:w-6 sm:h-6",style:{color:Dt.SECONDARY_ACCENT}})})]}),v.jsx(Ig,{initial:!1,children:t===u&&v.jsx(Ge.div,{initial:{opacity:0,height:0,marginTop:0},animate:{opacity:1,height:"auto",marginTop:"1rem"},exit:{opacity:0,height:0,marginTop:0},transition:{opacity:{duration:.2},height:{duration:.4,ease:"easeInOut"}},className:"overflow-hidden",children:v.jsx("p",{className:"text-sm sm:text-base leading-relaxed",style:{color:Dt.TEXT_MUTED},children:c.answer})})})]})},u))}):v.jsx(Ge.div,{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",variants:a,initial:"hidden",animate:"visible",children:r.map((c,u)=>v.jsx(Ge.div,{variants:l,className:"relative perspective-1000 h-36 md:h-40",children:v.jsxs(Ge.div,{className:"relative w-full h-full cursor-pointer preserve-3d",variants:o,animate:t===u?"open":"closed",whileHover:{rotateX:5,rotateZ:2,scale:1.05,boxShadow:`0 20px 40px ${Dt.PRIMARY_ACCENT}4D`,transition:{duration:.3}},onClick:()=>s(u),children:[v.jsxs("div",{className:"absolute inset-0 rounded-xl backface-hidden",style:{transformStyle:"preserve-3d",background:Dt.SURFACE,boxShadow:"0 2px 8px rgba(0,0,0,0.08)",transform:"rotate(2deg)",zIndex:2,borderColor:Dt.SECONDARY_ACCENT},children:[v.jsxs("div",{className:"p-3 sm:p-4 h-full flex flex-col justify-between",children:[v.jsx("h3",{className:"font-semibold text-base sm:text-lg leading-tight mb-2",style:{color:Dt.TEXT_MAIN},children:c.question}),v.jsx("div",{className:"flex justify-center",children:v.jsx(Ge.div,{animate:{rotate:t===u?180:0,color:t===u?Dt.PRIMARY_ACCENT:Dt.SECONDARY_ACCENT},transition:{duration:.3},children:v.jsx(Tv,{size:20,className:"sm:w-6 sm:h-6"})})})]}),v.jsx("div",{className:"absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300",style:{backgroundImage:`linear-gradient(to right, ${Dt.PRIMARY_ACCENT}1A, ${Dt.SECONDARY_ACCENT}1A)`}})]}),v.jsx("div",{className:"absolute inset-0 rounded-xl backface-hidden",style:{background:`linear-gradient(135deg, ${Dt.PRIMARY_ACCENT} 0%, ${Dt.SECONDARY_ACCENT} 100%)`,transform:"rotateY(180deg) rotate(2deg)",transformStyle:"preserve-3d",zIndex:3},children:v.jsxs("div",{className:"p-4 h-full flex flex-col justify-between",children:[v.jsx("p",{className:"text-white leading-relaxed text-sm",style:{color:Dt.TEXT_MAIN},children:c.answer}),v.jsx("div",{className:"flex justify-center",children:v.jsx(Ge.div,{animate:{rotate:180,color:Dt.TEXT_MAIN},children:v.jsx(Ub,{size:24})})})]})})]})},u))})]}),v.jsx("style",{children:`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `})]})},TN=()=>v.jsx("div",{style:{backgroundColor:Dt.PRIMARY_BG},children:v.jsx(wN,{})}),Ke={PRIMARY_BG:"#0E0B16",PRIMARY_ACCENT:"#9370DB",SECONDARY_ACCENT:"#D8BFD8",SURFACE:"#1A162B",TEXT_MAIN:"#E0E0E0",TEXT_MUTED:"#BDBDBD",LINK_HOVER:"#B799FF",ERROR_WARNING:"#D9534F",White:"#FFFFFF"},bN=()=>{const[t,e]=J.useState(null),n=[{id:"discord",href:"https://discord.gg/hackunited",icon:"/icons/discord.png",label:"Discord"},{id:"linkedin",href:"https://www.linkedin.com/company/hack-united/posts/?feedView=all",icon:"/icons/linkedin.png",label:"LinkedIn"},{id:"instagram",href:"https://www.instagram.com/hack_united/",icon:"/icons/instagram.png",label:"Instagram"}];return v.jsxs("section",{id:"contact",className:"py-20 relative overflow-hidden",style:{backgroundColor:Ke.PRIMARY_BG},children:[v.jsxs("div",{className:"absolute inset-0 opacity-10",children:[v.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse",style:{backgroundColor:Ke.PRIMARY_ACCENT}}),v.jsx("div",{className:"absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000",style:{backgroundColor:Ke.SECONDARY_ACCENT}}),v.jsx("div",{className:"absolute bottom-20 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000",style:{backgroundColor:Ke.PRIMARY_ACCENT}})]}),v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[v.jsxs("div",{className:"text-center mb-12 sm:mb-16",children:[v.jsxs("div",{className:"inline-flex items-center gap-2 mb-4",children:[v.jsx(ou,{className:"animate-pulse sm:w-6 sm:h-6",size:20,style:{color:Ke.PRIMARY_ACCENT}}),v.jsx("span",{className:"font-medium tracking-wide uppercase text-xs sm:text-sm",style:{color:Ke.PRIMARY_ACCENT},children:"Connect With Us"}),v.jsx(ou,{className:"animate-pulse delay-500 sm:w-6 sm:h-6",size:20,style:{color:Ke.SECONDARY_ACCENT}})]}),v.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent animate-gradient px-4 sm:px-0",style:{backgroundImage:`linear-gradient(to right, ${Ke.PRIMARY_ACCENT}, ${Ke.SECONDARY_ACCENT})`},children:"Get In Touch"}),v.jsx("p",{className:"text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0",style:{color:Ke.TEXT_MAIN},children:"Have questions? Want to get involved? We'd love to hear from you!"})]}),v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12",children:[v.jsxs("div",{className:"space-y-8",children:[v.jsxs(Ge.div,{className:"group relative overflow-hidden",onMouseEnter:()=>e("email"),onMouseLeave:()=>e(null),whileHover:{scale:1.02},transition:{duration:.3},children:[v.jsx("div",{className:"absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm",style:{backgroundImage:`linear-gradient(to right, ${Ke.PRIMARY_ACCENT}33, ${Ke.SECONDARY_ACCENT}33)`}}),v.jsxs("div",{className:"relative flex items-center space-x-4 p-6 rounded-xl border transition-all duration-300",style:{backgroundColor:Ke.SURFACE,borderColor:t==="email"?Ke.PRIMARY_ACCENT:Ke.SURFACE},children:[v.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300",style:{backgroundColor:Ke.PRIMARY_ACCENT},children:v.jsx(zb,{className:"text-white",size:24})}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-semibold text-white mb-1 transition-colors",style:{color:Ke.PRIMARY_ACCENT},children:"Email"}),v.jsx("p",{style:{color:Ke.SECONDARY_ACCENT},className:"hover:text-blue-300 transition-colors",children:v.jsx("a",{href:"mailto:humans@hackunited.org",className:"hover:underline",children:"humans@hackunited.org"})})]})]})]}),v.jsx("div",{className:"grid grid-cols-3 gap-3 sm:gap-4",children:n.map(i=>{const r=t===i.id;return v.jsxs(Ge.a,{href:i.href,target:"_blank",rel:"noopener noreferrer",className:"group relative overflow-hidden",onMouseEnter:()=>e(i.id),onMouseLeave:()=>e(null),whileHover:{scale:1.05,y:-4},transition:{duration:.3},children:[v.jsx("div",{className:"absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm",style:{backgroundImage:`linear-gradient(to right, ${Ke.PRIMARY_ACCENT}, ${Ke.SECONDARY_ACCENT})`}}),v.jsxs("div",{className:"relative flex flex-col items-center p-4 sm:p-6 rounded-xl border transition-all duration-300",style:{backgroundColor:Ke.SURFACE,borderColor:r?Ke.PRIMARY_ACCENT:Ke.SURFACE},children:[v.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300",style:{backgroundColor:Ke.SECONDARY_ACCENT},children:v.jsx("img",{src:i.icon,alt:i.label,className:"w-5 h-5 sm:w-6 sm:h-6 filter invert"})}),v.jsx("span",{className:"text-white font-medium transition-colors text-sm sm:text-base",style:{color:Ke.PRIMARY_ACCENT},children:i.label})]})]},i.id)})})]}),v.jsxs("div",{className:"group relative overflow-hidden",onMouseEnter:()=>e("register"),onMouseLeave:()=>e(null),children:[v.jsx("div",{className:"absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm",style:{backgroundImage:`linear-gradient(to right, ${Ke.PRIMARY_ACCENT}1A, ${Ke.SECONDARY_ACCENT}1A)`}}),v.jsxs("div",{className:"relative p-8 rounded-xl border transition-all duration-300 h-full flex flex-col justify-between",style:{backgroundColor:Ke.SURFACE,borderColor:t==="register"?Ke.PRIMARY_ACCENT:Ke.SURFACE},children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[v.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center",style:{backgroundImage:`linear-gradient(to right, ${Ke.PRIMARY_ACCENT}, ${Ke.SECONDARY_ACCENT})`},children:v.jsx(ou,{className:"text-white",size:16})}),v.jsx("h3",{className:"text-2xl font-bold text-white",style:{color:Ke.PRIMARY_ACCENT},children:"Don't wait! Register now!"})]}),v.jsx("p",{className:"mb-6 leading-relaxed",style:{color:Ke.TEXT_MAIN},children:"Join us on this innovation journey and push the boundaries of creativity and technology!"}),v.jsxs("div",{className:"text-left space-y-2 mb-6",style:{color:Ke.TEXT_MAIN},children:[v.jsxs("p",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:Ke.SECONDARY_ACCENT}}),"Click on the Register button below & fill out the form."]}),v.jsxs("p",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:Ke.SECONDARY_ACCENT}}),"Sign up on ",v.jsx("a",{href:"https://unitedhacksv6.devpost.com/",target:"_blank",rel:"noopener noreferrer",className:"underline font-semibold",style:{color:Ke.White},children:"Devpost"}),"."]}),v.jsxs("p",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:Ke.SECONDARY_ACCENT}}),"Join our ",v.jsx("a",{href:"https://discord.gg/hackunited",target:"_blank",rel:"noopener noreferrer",className:"underline font-semibold",style:{color:Ke.White},children:"Discord Server"}),"."]})]})]}),v.jsxs("a",{href:"https://unitedhacksv6.devpost.com/",target:"_blank",rel:"noopener noreferrer",className:"w-full text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 mt-4",style:{backgroundImage:`linear-gradient(to right, ${Ke.PRIMARY_ACCENT}, ${Ke.SECONDARY_ACCENT})`,boxShadow:`0 0 20px ${Ke.PRIMARY_ACCENT}40`},children:[v.jsx(Wb,{size:18}),"Register Now!"]})]})]})]})]}),v.jsx("style",{children:`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gg="178",AN=0,qx=1,CN=2,dE=1,RN=2,Ji=3,Xr=0,On=1,tr=2,zr=0,Do=1,Zx=2,Jx=3,Qx=4,PN=5,hs=100,NN=101,DN=102,IN=103,LN=104,FN=200,kN=201,UN=202,ON=203,Ep=204,wp=205,BN=206,VN=207,zN=208,HN=209,GN=210,jN=211,WN=212,XN=213,YN=214,Tp=0,bp=1,Ap=2,Wo=3,Cp=4,Rp=5,Pp=6,Np=7,wd=0,$N=1,KN=2,Hr=0,qN=1,ZN=2,JN=3,QN=4,eD=5,tD=6,nD=7,ey="attached",iD="detached",fE=300,Xo=301,Yo=302,qu=303,Dp=304,Td=306,El=1e3,sr=1001,Ip=1002,Xn=1003,rD=1004,yc=1005,Fi=1006,Ef=1007,_s=1008,ji=1009,hE=1010,pE=1011,wl=1012,jg=1013,Ps=1014,ki=1015,Wl=1016,Wg=1017,Xg=1018,Tl=1020,mE=35902,gE=1021,vE=1022,si=1023,bl=1026,Al=1027,xE=1028,Yg=1029,yE=1030,$g=1031,Kg=1033,hu=33776,pu=33777,mu=33778,gu=33779,Lp=35840,Fp=35841,kp=35842,Up=35843,Op=36196,Bp=37492,Vp=37496,zp=37808,Hp=37809,Gp=37810,jp=37811,Wp=37812,Xp=37813,Yp=37814,$p=37815,Kp=37816,qp=37817,Zp=37818,Jp=37819,Qp=37820,em=37821,vu=36492,tm=36494,nm=36495,_E=36283,im=36284,rm=36285,sm=36286,Zu=2300,om=2301,wf=2302,ty=2400,ny=2401,iy=2402,sD=2500,oD=3200,aD=3201,qg=0,lD=1,Pr="",Tt="srgb",$o="srgb-linear",Ju="linear",vt="srgb",Vs=7680,ry=519,cD=512,uD=513,dD=514,SE=515,fD=516,hD=517,pD=518,mD=519,sy=35044,oy="300 es",or=2e3,Qu=2001;class oa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ay=1234567;const qa=Math.PI/180,Ko=180/Math.PI;function Jr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[t&255]+dn[t>>8&255]+dn[t>>16&255]+dn[t>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function Zg(t,e){return(t%e+e)%e}function gD(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function vD(t,e,n){return t!==e?(n-t)/(e-t):0}function Za(t,e,n){return(1-n)*t+n*e}function xD(t,e,n,i){return Za(t,e,1-Math.exp(-n*i))}function yD(t,e=1){return e-Math.abs(Zg(t,e*2)-e)}function _D(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function SD(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function MD(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ED(t,e){return t+Math.random()*(e-t)}function wD(t){return t*(.5-Math.random())}function TD(t){t!==void 0&&(ay=t);let e=ay+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bD(t){return t*qa}function AD(t){return t*Ko}function CD(t){return(t&t-1)===0&&t!==0}function RD(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function PD(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ND(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*m,l*h,a*c);break;case"YXY":t.set(l*h,a*u,l*m,a*c);break;case"ZYZ":t.set(l*m,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function no(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const _n={DEG2RAD:qa,RAD2DEG:Ko,generateUUID:Jr,clamp:it,euclideanModulo:Zg,mapLinear:gD,inverseLerp:vD,lerp:Za,damp:xD,pingpong:yD,smoothstep:_D,smootherstep:SD,randInt:MD,randFloat:ED,randFloatSpread:wD,seededRandom:TD,degToRad:bD,radToDeg:AD,isPowerOfTwo:CD,ceilPowerOfTwo:RD,floorPowerOfTwo:PD,setQuaternionFromProperEuler:ND,normalize:vn,denormalize:no};class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rn{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],h=s[o+1],m=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=h,e[n+2]=m,e[n+3]=y;return}if(d!==y||l!==f||c!==h||u!==m){let g=1-a;const p=l*f+c*h+u*m+d*y,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),C=Math.atan2(b,p*_);g=Math.sin(g*C)/b,a=Math.sin(a*C)/b}const S=a*_;if(l=l*g+f*S,c=c*g+h*S,u=u*g+m*S,d=d*g+y*S,g===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],m=s[o+3];return e[n]=a*m+u*d+l*h-c*f,e[n+1]=l*m+u*f+c*d-a*h,e[n+2]=c*m+u*h+a*f-l*d,e[n+3]=u*m-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"YZX":this._x=f*u*d+c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d-f*h*m;break;case"XZY":this._x=f*u*d-c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d+f*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ly.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ly.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tf.copy(this).projectOnVector(e),this.sub(Tf)}reflect(e){return this.sub(Tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tf=new U,ly=new Rn;class Ze{constructor(e,n,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],m=i[8],y=r[0],g=r[3],p=r[6],_=r[1],x=r[4],S=r[7],b=r[2],C=r[5],A=r[8];return s[0]=o*y+a*_+l*b,s[3]=o*g+a*x+l*C,s[6]=o*p+a*S+l*A,s[1]=c*y+u*_+d*b,s[4]=c*g+u*x+d*C,s[7]=c*p+u*S+d*A,s[2]=f*y+h*_+m*b,s[5]=f*g+h*x+m*C,s[8]=f*p+h*S+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,m=n*d+i*f+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=h*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(bf.makeScale(e,n)),this}rotate(e){return this.premultiply(bf.makeRotation(-e)),this}translate(e,n){return this.premultiply(bf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bf=new Ze;function ME(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DD(){const t=Cl("canvas");return t.style.display="block",t}const cy={};function Io(t){t in cy||(cy[t]=!0,console.warn(t))}function ID(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function LD(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function FD(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const uy=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dy=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kD(){const t={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(r.r=Lo(r.r),r.g=Lo(r.g),r.b=Lo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pr?Ju:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Io("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Io("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[$o]:{primaries:e,whitePoint:i,transfer:Ju,toXYZ:uy,fromXYZ:dy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:uy,fromXYZ:dy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),t}const et=kD();function lr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zs;class UD{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zs===void 0&&(zs=Cl("canvas")),zs.width=e.width,zs.height=e.height;const r=zs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(lr(n[i]/255)*255):n[i]=lr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OD=0;class Jg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OD++}),this.uuid=Jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Af(r[o].image)):s.push(Af(r[o]))}else s=Af(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Af(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?UD.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BD=0;const Cf=new U;class an extends oa{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=sr,r=sr,s=Fi,o=_s,a=si,l=ji,c=an.DEFAULT_ANISOTROPY,u=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BD++}),this.uuid=Jr(),this.name="",this.source=new Jg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cf).x}get height(){return this.source.getSize(Cf).y}get depth(){return this.source.getSize(Cf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case El:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case Ip:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case El:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case Ip:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=fE;an.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,n=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(h+1)/2,b=(p+1)/2,C=(u+f)/4,A=(d+y)/4,R=(m+g)/4;return x>S&&x>b?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=A/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=R/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(d-y)/_,this.z=(f-u)/_,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VD extends oa{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ot(0,0,e,n),this.scissorTest=!1,this.viewport=new ot(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new an(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Jg(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ns extends VD{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class EE extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zD extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_c.copy(i.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Sc.subVectors(this.max,Ma),Hs.subVectors(e.a,Ma),Gs.subVectors(e.b,Ma),js.subVectors(e.c,Ma),gr.subVectors(Gs,Hs),vr.subVectors(js,Gs),ns.subVectors(Hs,js);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-ns.z,ns.y,gr.z,0,-gr.x,vr.z,0,-vr.x,ns.z,0,-ns.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-ns.y,ns.x,0];return!Rf(n,Hs,Gs,js,Sc)||(n=[1,0,0,0,1,0,0,0,1],!Rf(n,Hs,Gs,js,Sc))?!1:(Mc.crossVectors(gr,vr),n=[Mc.x,Mc.y,Mc.z],Rf(n,Hs,Gs,js,Sc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new U,new U,new U,new U,new U,new U,new U,new U],di=new U,_c=new ks,Hs=new U,Gs=new U,js=new U,gr=new U,vr=new U,ns=new U,Ma=new U,Sc=new U,Mc=new U,is=new U;function Rf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){is.fromArray(t,s);const a=r.x*Math.abs(is.x)+r.y*Math.abs(is.y)+r.z*Math.abs(is.z),l=e.dot(is),c=n.dot(is),u=i.dot(is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const HD=new ks,Ea=new U,Pf=new U;class aa{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):HD.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);const n=Ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(Pf)),this.expandByPoint(Ea.copy(e.center).sub(Pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yi=new U,Nf=new U,Ec=new U,xr=new U,Df=new U,wc=new U,If=new U;class Qg{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,n),Yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nf.copy(e).add(n).multiplyScalar(.5),Ec.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(Nf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ec),a=xr.dot(this.direction),l=-xr.dot(Ec),c=xr.lengthSq(),u=Math.abs(1-o*o);let d,f,h,m;if(u>0)if(d=o*l-a,f=o*a-l,m=s*u,d>=0)if(f>=-m)if(f<=m){const y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Nf).addScaledVector(Ec,f),h}intersectSphere(e,n){Yi.subVectors(e.center,this.origin);const i=Yi.dot(this.direction),r=Yi.dot(Yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,n,i,r,s){Df.subVectors(n,e),wc.subVectors(i,e),If.crossVectors(Df,wc);let o=this.direction.dot(If),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xr.subVectors(this.origin,e);const l=a*this.direction.dot(wc.crossVectors(xr,wc));if(l<0)return null;const c=a*this.direction.dot(Df.cross(xr));if(c<0||l+c>o)return null;const u=-a*xr.dot(If);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,n,i,r,s,o,a,l,c,u,d,f,h,m,y,g){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,h,m,y,g)}set(e,n,i,r,s,o,a,l,c,u,d,f,h,m,y,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ws.setFromMatrixColumn(e,0).length(),s=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,m=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+m*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=m+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,m=c*u,y=c*d;n[0]=f+y*a,n[4]=m*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-m,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,m=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=m+h*a,n[1]=h+m*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,m=a*u,y=a*d;n[0]=l*u,n[4]=m*c-h,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=h*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,m=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=m*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+m,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,h=o*c,m=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=h*d-m,n[2]=m*d-h,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GD,e,jD)}lookAt(e,n,i){const r=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),yr.crossVectors(i,zn),yr.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),yr.crossVectors(i,zn)),yr.normalize(),Tc.crossVectors(zn,yr),r[0]=yr.x,r[4]=Tc.x,r[8]=zn.x,r[1]=yr.y,r[5]=Tc.y,r[9]=zn.y,r[2]=yr.z,r[6]=Tc.z,r[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],m=i[2],y=i[6],g=i[10],p=i[14],_=i[3],x=i[7],S=i[11],b=i[15],C=r[0],A=r[4],R=r[8],T=r[12],M=r[1],L=r[5],X=r[9],H=r[13],te=r[2],ne=r[6],q=r[10],K=r[14],F=r[3],W=r[7],N=r[11],P=r[15];return s[0]=o*C+a*M+l*te+c*F,s[4]=o*A+a*L+l*ne+c*W,s[8]=o*R+a*X+l*q+c*N,s[12]=o*T+a*H+l*K+c*P,s[1]=u*C+d*M+f*te+h*F,s[5]=u*A+d*L+f*ne+h*W,s[9]=u*R+d*X+f*q+h*N,s[13]=u*T+d*H+f*K+h*P,s[2]=m*C+y*M+g*te+p*F,s[6]=m*A+y*L+g*ne+p*W,s[10]=m*R+y*X+g*q+p*N,s[14]=m*T+y*H+g*K+p*P,s[3]=_*C+x*M+S*te+b*F,s[7]=_*A+x*L+S*ne+b*W,s[11]=_*R+x*X+S*q+b*N,s[15]=_*T+x*H+S*K+b*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],m=e[3],y=e[7],g=e[11],p=e[15];return m*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*h-i*l*h)+y*(+n*l*h-n*c*f+s*o*f-r*o*h+r*c*u-s*l*u)+g*(+n*c*d-n*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],m=e[12],y=e[13],g=e[14],p=e[15],_=d*g*c-y*f*c+y*l*h-a*g*h-d*l*p+a*f*p,x=m*f*c-u*g*c-m*l*h+o*g*h+u*l*p-o*f*p,S=u*y*c-m*d*c+m*a*h-o*y*h-u*a*p+o*d*p,b=m*d*l-u*y*l-m*a*f+o*y*f+u*a*g-o*d*g,C=n*_+i*x+r*S+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(y*f*s-d*g*s-y*r*h+i*g*h+d*r*p-i*f*p)*A,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*p+i*l*p)*A,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*h-i*l*h)*A,e[4]=x*A,e[5]=(u*g*s-m*f*s+m*r*h-n*g*h-u*r*p+n*f*p)*A,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*p-n*l*p)*A,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*h+n*l*h)*A,e[8]=S*A,e[9]=(m*d*s-u*y*s-m*i*h+n*y*h+u*i*p-n*d*p)*A,e[10]=(o*y*s-m*a*s+m*i*c-n*y*c-o*i*p+n*a*p)*A,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*h-n*a*h)*A,e[12]=b*A,e[13]=(u*y*r-m*d*r+m*i*f-n*y*f-u*i*g+n*d*g)*A,e[14]=(m*a*r-o*y*r-m*i*l+n*y*l+o*i*g-n*a*g)*A,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,m=s*d,y=o*u,g=o*d,p=a*d,_=l*c,x=l*u,S=l*d,b=i.x,C=i.y,A=i.z;return r[0]=(1-(y+p))*b,r[1]=(h+S)*b,r[2]=(m-x)*b,r[3]=0,r[4]=(h-S)*C,r[5]=(1-(f+p))*C,r[6]=(g+_)*C,r[7]=0,r[8]=(m+x)*A,r[9]=(g-_)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ws.set(r[0],r[1],r[2]).length();const o=Ws.set(r[4],r[5],r[6]).length(),a=Ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fi.copy(this);const c=1/s,u=1/o,d=1/a;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=d,fi.elements[9]*=d,fi.elements[10]*=d,n.setFromRotationMatrix(fi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=or){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let h,m;if(a===or)h=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Qu)h=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=or){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,h=(i+r)*u;let m,y;if(a===or)m=(o+s)*d,y=-2*d;else if(a===Qu)m=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ws=new U,fi=new Ie,GD=new U(0,0,0),jD=new U(1,1,1),yr=new U,Tc=new U,zn=new U,fy=new Ie,hy=new Rn;class nn{constructor(e=0,n=0,i=0,r=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fy,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hy.setFromEuler(this),this.setFromQuaternion(hy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class wE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WD=0;const py=new U,Xs=new Rn,$i=new Ie,bc=new U,wa=new U,XD=new U,YD=new Rn,my=new U(1,0,0),gy=new U(0,1,0),vy=new U(0,0,1),xy={type:"added"},$D={type:"removed"},Ys={type:"childadded",child:null},Lf={type:"childremoved",child:null};class Pt extends oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WD++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new U,n=new nn,i=new Rn,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ze}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xs.setFromAxisAngle(e,n),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,n){return Xs.setFromAxisAngle(e,n),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(my,e)}rotateY(e){return this.rotateOnAxis(gy,e)}rotateZ(e){return this.rotateOnAxis(vy,e)}translateOnAxis(e,n){return py.copy(e).applyQuaternion(this.quaternion),this.position.add(py.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(my,e)}translateY(e){return this.translateOnAxis(gy,e)}translateZ(e){return this.translateOnAxis(vy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?bc.copy(e):bc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(wa,bc,this.up):$i.lookAt(bc,wa,this.up),this.quaternion.setFromRotationMatrix($i),r&&($i.extractRotation(r.matrixWorld),Xs.setFromRotationMatrix($i),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xy),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($D),Lf.child=e,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xy),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,XD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,YD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new U(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new U,Ki=new U,Ff=new U,qi=new U,$s=new U,Ks=new U,yy=new U,kf=new U,Uf=new U,Of=new U,Bf=new ot,Vf=new ot,zf=new ot;class _i{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),hi.subVectors(e,n),r.cross(hi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){hi.subVectors(r,n),Ki.subVectors(i,n),Ff.subVectors(e,n);const o=hi.dot(hi),a=hi.dot(Ki),l=hi.dot(Ff),c=Ki.dot(Ki),u=Ki.dot(Ff),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-h-m,m,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Bf.setScalar(0),Vf.setScalar(0),zf.setScalar(0),Bf.fromBufferAttribute(e,n),Vf.fromBufferAttribute(e,i),zf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bf,s.x),o.addScaledVector(Vf,s.y),o.addScaledVector(zf,s.z),o}static isFrontFacing(e,n,i,r){return hi.subVectors(i,n),Ki.subVectors(e,n),hi.cross(Ki).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),hi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _i.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return _i.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;$s.subVectors(r,i),Ks.subVectors(s,i),kf.subVectors(e,i);const l=$s.dot(kf),c=Ks.dot(kf);if(l<=0&&c<=0)return n.copy(i);Uf.subVectors(e,r);const u=$s.dot(Uf),d=Ks.dot(Uf);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector($s,o);Of.subVectors(e,s);const h=$s.dot(Of),m=Ks.dot(Of);if(m>=0&&h<=m)return n.copy(s);const y=h*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Ks,a);const g=u*m-h*d;if(g<=0&&d-u>=0&&h-m>=0)return yy.subVectors(s,r),a=(d-u)/(d-u+(h-m)),n.copy(r).addScaledVector(yy,a);const p=1/(g+y+f);return o=y*p,a=f*p,n.copy(i).addScaledVector($s,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const TE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Hf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=Zg(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Hf(o,s,e+1/3),this.g=Hf(o,s,e),this.b=Hf(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,n=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tt){const i=TE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return et.workingToColorSpace(fn.copy(this),e),Math.round(it(fn.r*255,0,255))*65536+Math.round(it(fn.g*255,0,255))*256+Math.round(it(fn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(fn.copy(this),n);const i=fn.r,r=fn.g,s=fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Tt){et.workingToColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,r=fn.b;return e!==Tt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(Ac);const i=Za(_r.h,Ac.h,n),r=Za(_r.s,Ac.s,n),s=Za(_r.l,Ac.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Xe;Xe.NAMES=TE;let KD=0;class Us extends oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KD++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=Do,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ep,this.blendDst=wp,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ry,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(i.blending=this.blending),this.side!==Xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ep&&(i.blendSrc=this.blendSrc),this.blendDst!==wp&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ry&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bE extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new U,Cc=new at;let qD=0;class Hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qD++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sy,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cc.fromBufferAttribute(this,n),Cc.applyMatrix3(e),this.setXY(n,Cc.x,Cc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=no(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=no(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=no(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=no(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=no(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sy&&(e.usage=this.usage),e}}class e0 extends Hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class AE extends Hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nn extends Hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ZD=0;const Qn=new Ie,Gf=new Pt,qs=new U,Hn=new ks,Ta=new ks,Qt=new U;class bi extends oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZD++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ME(e)?AE:e0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,n,i){return Qn.makeTranslation(e,n,i),this.applyMatrix4(Qn),this}scale(e,n,i){return Qn.makeScale(e,n,i),this.applyMatrix4(Qn),this}lookAt(e){return Gf.lookAt(e),Gf.updateMatrix(),this.applyMatrix4(Gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Hn.min,Ta.min),Hn.expandByPoint(Qt),Qt.addVectors(Hn.max,Ta.max),Hn.expandByPoint(Qt)):(Hn.expandByPoint(Ta.min),Hn.expandByPoint(Ta.max))}Hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Qt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qt.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),Qt.add(qs)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new U,l[R]=new U;const c=new U,u=new U,d=new U,f=new at,h=new at,m=new at,y=new U,g=new U;function p(R,T,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,R),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,M),u.sub(c),d.sub(c),h.sub(f),m.sub(f);const L=1/(h.x*m.y-m.x*h.y);isFinite(L)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(L),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(L),a[R].add(y),a[T].add(y),a[M].add(y),l[R].add(g),l[T].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,T=_.length;R<T;++R){const M=_[R],L=M.start,X=M.count;for(let H=L,te=L+X;H<te;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new U,S=new U,b=new U,C=new U;function A(R){b.fromBufferAttribute(r,R),C.copy(b);const T=a[R];x.copy(T),x.sub(b.multiplyScalar(b.dot(T))).normalize(),S.crossVectors(C,T);const L=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,T=_.length;R<T;++R){const M=_[R],L=M.start,X=M.count;for(let H=L,te=L+X;H<te;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Qt.fromBufferAttribute(e,n),Qt.normalize(),e.setXYZ(n,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?h=l[y]*a.data.stride+a.offset:h=l[y]*u;for(let p=0;p<u;p++)f[m++]=c[h++]}return new Hi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _y=new Ie,rs=new Qg,Rc=new aa,Sy=new U,Pc=new U,Nc=new U,Dc=new U,jf=new U,Ic=new U,My=new U,Lc=new U;class Ei extends Pt{constructor(e=new bi,n=new bE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ic.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(jf.fromBufferAttribute(d,e),o?Ic.addScaledVector(jf,u):Ic.addScaledVector(jf.sub(n),u))}n.add(Ic)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(s),rs.copy(e.ray).recast(e.near),!(Rc.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Rc,Sy)===null||rs.origin.distanceToSquared(Sy)>(e.far-e.near)**2))&&(_y.copy(s).invert(),rs.copy(e.ray).applyMatrix4(_y),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){const g=f[m],p=o[g.materialIndex],_=Math.max(g.start,h.start),x=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let S=_,b=x;S<b;S+=3){const C=a.getX(S),A=a.getX(S+1),R=a.getX(S+2);r=Fc(this,p,e,i,c,u,d,C,A,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let g=m,p=y;g<p;g+=3){const _=a.getX(g),x=a.getX(g+1),S=a.getX(g+2);r=Fc(this,o,e,i,c,u,d,_,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){const g=f[m],p=o[g.materialIndex],_=Math.max(g.start,h.start),x=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let S=_,b=x;S<b;S+=3){const C=S,A=S+1,R=S+2;r=Fc(this,p,e,i,c,u,d,C,A,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let g=m,p=y;g<p;g+=3){const _=g,x=g+1,S=g+2;r=Fc(this,o,e,i,c,u,d,_,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function JD(t,e,n,i,r,s,o,a){let l;if(e.side===On?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xr,a),l===null)return null;Lc.copy(a),Lc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Lc);return c<n.near||c>n.far?null:{distance:c,point:Lc.clone(),object:t}}function Fc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Pc),t.getVertexPosition(l,Nc),t.getVertexPosition(c,Dc);const u=JD(t,e,n,i,Pc,Nc,Dc,My);if(u){const d=new U;_i.getBarycoord(My,Pc,Nc,Dc,d),r&&(u.uv=_i.getInterpolatedAttribute(r,a,l,c,d,new at)),s&&(u.uv1=_i.getInterpolatedAttribute(s,a,l,c,d,new at)),o&&(u.normal=_i.getInterpolatedAttribute(o,a,l,c,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};_i.getNormal(Pc,Nc,Dc,f.normal),u.face=f,u.barycoord=d}return u}class Xl extends bi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(d,2));function m(y,g,p,_,x,S,b,C,A,R,T){const M=S/A,L=b/R,X=S/2,H=b/2,te=C/2,ne=A+1,q=R+1;let K=0,F=0;const W=new U;for(let N=0;N<q;N++){const P=N*L-H;for(let ee=0;ee<ne;ee++){const fe=ee*M-X;W[y]=fe*_,W[g]=P*x,W[p]=te,c.push(W.x,W.y,W.z),W[y]=0,W[g]=0,W[p]=C>0?1:-1,u.push(W.x,W.y,W.z),d.push(ee/A),d.push(1-N/R),K+=1}}for(let N=0;N<R;N++)for(let P=0;P<A;P++){const ee=f+P+ne*N,fe=f+P+ne*(N+1),V=f+(P+1)+ne*(N+1),Y=f+(P+1)+ne*N;l.push(ee,fe,Y),l.push(fe,V,Y),F+=6}a.addGroup(h,F,T),h+=F,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function xn(t){const e={};for(let n=0;n<t.length;n++){const i=qo(t[n]);for(const r in i)e[r]=i[r]}return e}function QD(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function CE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const eI={clone:qo,merge:xn};var tI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yr extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tI,this.fragmentShader=nI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qo(e.uniforms),this.uniformsGroups=QD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class RE extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=or}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new U,Ey=new at,wy=new at;class En extends RE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,n){return this.getViewBounds(e,Ey,wy),n.subVectors(wy,Ey)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(qa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zs=-90,Js=1;class iI extends Pt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Zs,Js,e,n);r.layers=this.layers,this.add(r);const s=new En(Zs,Js,e,n);s.layers=this.layers,this.add(s);const o=new En(Zs,Js,e,n);o.layers=this.layers,this.add(o);const a=new En(Zs,Js,e,n);a.layers=this.layers,this.add(a);const l=new En(Zs,Js,e,n);l.layers=this.layers,this.add(l);const c=new En(Zs,Js,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===or)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class PE extends an{constructor(e=[],n=Xo,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rI extends Ns{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new PE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xl(5,5,5),s=new Yr({name:"CubemapFromEquirect",uniforms:qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:zr});s.uniforms.tEquirect.value=n;const o=new Ei(r,s),a=n.minFilter;return n.minFilter===_s&&(n.minFilter=Fi),new iI(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Mo extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sI={type:"move"};class Wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;c.inputState.pinching&&f>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sI)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class oI extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ty=new U,by=new ot,Ay=new ot,aI=new U,Cy=new Ie,kc=new U,Xf=new aa,Ry=new Ie,Yf=new Qg;class lI extends Ei{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ey,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ks),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,kc),this.boundingBox.expandByPoint(kc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new aa),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,kc),this.boundingSphere.expandByPoint(kc)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xf.copy(this.boundingSphere),Xf.applyMatrix4(r),e.ray.intersectsSphere(Xf)!==!1&&(Ry.copy(r).invert(),Yf.copy(e.ray).applyMatrix4(Ry),!(this.boundingBox!==null&&Yf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Yf)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,n=this.geometry.attributes.skinWeight;for(let i=0,r=n.count;i<r;i++){e.fromBufferAttribute(n,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ey?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iD?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const i=this.skeleton,r=this.geometry;by.fromBufferAttribute(r.attributes.skinIndex,e),Ay.fromBufferAttribute(r.attributes.skinWeight,e),Ty.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let s=0;s<4;s++){const o=Ay.getComponent(s);if(o!==0){const a=by.getComponent(s);Cy.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),n.addScaledVector(aI.copy(Ty).applyMatrix4(Cy),o)}}return n.applyMatrix4(this.bindMatrixInverse)}}class am extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cI extends an{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Xn,u=Xn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Py=new Ie,uI=new Ie;class t0{constructor(e=[],n=[]){this.uuid=Jr(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const i=new Ie;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:uI;Py.multiplyMatrices(a,n[s]),Py.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new t0(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const i=new cI(n,e,e,si,ki);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=n[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new am),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let r=0,s=n.length;r<s;r++){const o=n[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}const $f=new U,dI=new U,fI=new Ze;class ds{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=$f.subVectors(i,n).cross(dI.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta($f),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fI.getNormalMatrix(e),r=this.coplanarPoint($f).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new aa,hI=new at(.5,.5),Uc=new U;class n0{constructor(e=new ds,n=new ds,i=new ds,r=new ds,s=new ds,o=new ds){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=or){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],h=r[8],m=r[9],y=r[10],g=r[11],p=r[12],_=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,g-h,S-p).normalize(),i[1].setComponents(l+s,f+c,g+h,S+p).normalize(),i[2].setComponents(l+o,f+u,g+m,S+_).normalize(),i[3].setComponents(l-o,f-u,g-m,S-_).normalize(),i[4].setComponents(l-a,f-d,g-y,S-x).normalize(),n===or)i[5].setComponents(l+a,f+d,g+y,S+x).normalize();else if(n===Qu)i[5].setComponents(a,d,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);const n=hI.distanceTo(e.center);return ss.radius=.7071067811865476+n,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Uc.x=r.normal.x>0?e.max.x:e.min.x,Uc.y=r.normal.y>0?e.max.y:e.min.y,Uc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class NE extends Us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ed=new U,td=new U,Ny=new Ie,ba=new Qg,Oc=new aa,Kf=new U,Dy=new U;class pI extends Pt{constructor(e=new bi,n=new NE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ed.fromBufferAttribute(n,r-1),td.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ed.distanceTo(td);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oc.copy(i.boundingSphere),Oc.applyMatrix4(r),Oc.radius+=s,e.ray.intersectsSphere(Oc)===!1)return;Ny.copy(r).invert(),ba.copy(e.ray).applyMatrix4(Ny);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=h,g=m-1;y<g;y+=c){const p=u.getX(y),_=u.getX(y+1),x=Bc(this,e,ba,l,p,_,y);x&&n.push(x)}if(this.isLineLoop){const y=u.getX(m-1),g=u.getX(h),p=Bc(this,e,ba,l,y,g,m-1);p&&n.push(p)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let y=h,g=m-1;y<g;y+=c){const p=Bc(this,e,ba,l,y,y+1,y);p&&n.push(p)}if(this.isLineLoop){const y=Bc(this,e,ba,l,m-1,h,m-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bc(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(ed.fromBufferAttribute(a,r),td.fromBufferAttribute(a,s),n.distanceSqToSegment(ed,td,Kf,Dy)>i)return;Kf.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Kf);if(!(c<e.near||c>e.far))return{distance:c,point:Dy.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class DE extends an{constructor(e,n,i=Ps,r,s,o,a=Xn,l=Xn,c,u=bl,d=1){if(u!==bl&&u!==Al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class mI{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,h=(o-u)/f;return(r+h)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new at:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new U,r=[],s=[],o=[],a=new U,l=new Ie;for(let h=0;h<=e;h++){const m=h/e;r[h]=this.getTangentAt(m,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(it(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,m))}o[h].crossVectors(r[h],s[h])}if(n===!0){let h=Math.acos(it(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],h*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function gI(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=IE(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=SI(t,e,s,n)),t.length>80*n){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=n;f<r;f+=n){const h=t[f],m=t[f+1];h<a&&(a=h),m<l&&(l=m),h>u&&(u=h),m>d&&(d=m)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Rl(s,o,n,a,l,c,0),o}function IE(t,e,n,i,r){let s;if(r===DI(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=Iy(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=Iy(o/i|0,t[o],t[o+1],s);return s&&Zo(s,s.next)&&(Nl(s),s=s.next),s}function Ds(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Zo(n,n.next)||Ft(n.prev,n,n.next)===0)){if(Nl(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Rl(t,e,n,i,r,s,o){if(!t)return;!o&&s&&bI(t,i,r,s);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(s?xI(t,i,r,s):vI(t)){e.push(l.i,t.i,c.i),Nl(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=yI(Ds(t),e),Rl(t,e,n,i,r,s,2)):o===2&&_I(t,e,n,i,r,s):Rl(Ds(t),e,n,i,r,s,1);break}}}function vI(t){const e=t.prev,n=t,i=t.next;if(Ft(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=Math.min(r,s,o),d=Math.min(a,l,c),f=Math.max(r,s,o),h=Math.max(a,l,c);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=h&&Ia(r,a,s,l,o,c,m.x,m.y)&&Ft(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xI(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Ft(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,h=Math.min(a,l,c),m=Math.min(u,d,f),y=Math.max(a,l,c),g=Math.max(u,d,f),p=lm(h,m,e,n,i),_=lm(y,g,e,n,i);let x=t.prevZ,S=t.nextZ;for(;x&&x.z>=p&&S&&S.z<=_;){if(x.x>=h&&x.x<=y&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&Ia(a,u,l,d,c,f,x.x,x.y)&&Ft(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=h&&S.x<=y&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&Ia(a,u,l,d,c,f,S.x,S.y)&&Ft(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=p;){if(x.x>=h&&x.x<=y&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&Ia(a,u,l,d,c,f,x.x,x.y)&&Ft(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=_;){if(S.x>=h&&S.x<=y&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&Ia(a,u,l,d,c,f,S.x,S.y)&&Ft(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function yI(t,e){let n=t;do{const i=n.prev,r=n.next.next;!Zo(i,r)&&FE(i,n,n.next,r)&&Pl(i,r)&&Pl(r,i)&&(e.push(i.i,n.i,r.i),Nl(n),Nl(n.next),n=t=r),n=n.next}while(n!==t);return Ds(n)}function _I(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&RI(o,a)){let l=kE(o,a);o=Ds(o,o.next),l=Ds(l,l.next),Rl(o,e,n,i,r,s,0),Rl(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function SI(t,e,n,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=IE(t,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(CI(c))}r.sort(MI);for(let s=0;s<r.length;s++)n=EI(r[s],n);return n}function MI(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function EI(t,e){const n=wI(t,e);if(!n)return e;const i=kE(n,t);return Ds(i,i.next),Ds(n,n.next)}function wI(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;if(Zo(t,n))return n;do{if(Zo(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>s&&(s=d,o=n.x<n.next.x?n:n.next,d===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&LE(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){const d=Math.abs(r-n.y)/(i-n.x);Pl(n,t)&&(d<u||d===u&&(n.x>o.x||n.x===o.x&&TI(o,n)))&&(o=n,u=d)}n=n.next}while(n!==a);return o}function TI(t,e){return Ft(t.prev,t,e.prev)<0&&Ft(e.next,t,t.next)<0}function bI(t,e,n,i){let r=t;do r.z===0&&(r.z=lm(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,AI(r)}function AI(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function lm(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function CI(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function LE(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Ia(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&LE(t,e,n,i,r,s,o,a)}function RI(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!PI(t,e)&&(Pl(t,e)&&Pl(e,t)&&NI(t,e)&&(Ft(t.prev,t,e.prev)||Ft(t,e.prev,e))||Zo(t,e)&&Ft(t.prev,t,t.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Zo(t,e){return t.x===e.x&&t.y===e.y}function FE(t,e,n,i){const r=zc(Ft(t,e,n)),s=zc(Ft(t,e,i)),o=zc(Ft(n,i,t)),a=zc(Ft(n,i,e));return!!(r!==s&&o!==a||r===0&&Vc(t,n,e)||s===0&&Vc(t,i,e)||o===0&&Vc(n,t,i)||a===0&&Vc(n,e,i))}function Vc(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function zc(t){return t>0?1:t<0?-1:0}function PI(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&FE(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Pl(t,e){return Ft(t.prev,t,t.next)<0?Ft(t,e,t.next)>=0&&Ft(t,t.prev,e)>=0:Ft(t,e,t.prev)<0||Ft(t,t.next,e)<0}function NI(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function kE(t,e){const n=cm(t.i,t.x,t.y),i=cm(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Iy(t,e,n,i){const r=cm(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Nl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function cm(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function DI(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class II{static triangulate(e,n,i=2){return gI(e,n,i)}}class i0{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return i0.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Ly(e),Fy(i,e);let o=e.length;n.forEach(Ly);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Fy(i,n[l]);const a=II.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ly(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Fy(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class bd extends bi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,h=[],m=[],y=[],g=[];for(let p=0;p<u;p++){const _=p*f-o;for(let x=0;x<c;x++){const S=x*d-s;m.push(S,-_,0),y.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const x=_+c*p,S=_+c*(p+1),b=_+1+c*(p+1),C=_+1+c*p;h.push(x,S,C),h.push(S,b,C)}this.setIndex(h),this.setAttribute("position",new Nn(m,3)),this.setAttribute("normal",new Nn(y,3)),this.setAttribute("uv",new Nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bd(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hc extends Us{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qg,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LI extends Us{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qg,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class FI extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kI extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Gc(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function UI(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function OI(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i}function ky(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*e;for(let l=0;l!==e;++l)r[o++]=t[a+l]}return r}function UE(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push(...o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)}class Ad{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){const a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class BI extends Ad{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ty,endingEnd:ty}}intervalChanged_(e,n,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ny:s=e,a=2*n-i;break;case iy:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ny:o=e,l=2*i-n;break;case iy:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}const c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,m=(i-n)/(r-n),y=m*m,g=y*m,p=-f*g+2*f*y-f*m,_=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*m+1,x=(-1-h)*g+(1.5+h)*y+.5*m,S=h*g-h*y;for(let b=0;b!==a;++b)s[b]=p*o[u+b]+_*o[c+b]+x*o[l+b]+S*o[d+b];return s}}class VI extends Ad{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}}class zI extends Ad{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ri{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gc(n,this.TimeBufferType),this.values=Gc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Gc(e.times,Array),values:Gc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new zI(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new VI(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new BI(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Zu:n=this.InterpolantFactoryMethodDiscrete;break;case om:n=this.InterpolantFactoryMethodLinear;break;case wf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zu;case this.InterpolantFactoryMethodLinear:return om;case this.InterpolantFactoryMethodSmooth:return wf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&UI(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===wf,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,f=d-i,h=d+i;for(let m=0;m!==i;++m){const y=n[d+m];if(y!==n[f+m]||y!==n[h+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let h=0;h!==i;++h)n[f+h]=n[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=om;class la extends Ri{constructor(e,n,i){super(e,n,i)}}la.prototype.ValueTypeName="bool";la.prototype.ValueBufferType=Array;la.prototype.DefaultInterpolation=Zu;la.prototype.InterpolantFactoryMethodLinear=void 0;la.prototype.InterpolantFactoryMethodSmooth=void 0;class OE extends Ri{constructor(e,n,i,r){super(e,n,i,r)}}OE.prototype.ValueTypeName="color";class Dl extends Ri{constructor(e,n,i,r){super(e,n,i,r)}}Dl.prototype.ValueTypeName="number";class HI extends Ad{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n);let c=e*a;for(let u=c+a;c!==u;c+=4)Rn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Jo extends Ri{constructor(e,n,i,r){super(e,n,i,r)}InterpolantFactoryMethodLinear(e){return new HI(this.times,this.values,this.getValueSize(),e)}}Jo.prototype.ValueTypeName="quaternion";Jo.prototype.InterpolantFactoryMethodSmooth=void 0;class ca extends Ri{constructor(e,n,i){super(e,n,i)}}ca.prototype.ValueTypeName="string";ca.prototype.ValueBufferType=Array;ca.prototype.DefaultInterpolation=Zu;ca.prototype.InterpolantFactoryMethodLinear=void 0;ca.prototype.InterpolantFactoryMethodSmooth=void 0;class Il extends Ri{constructor(e,n,i,r){super(e,n,i,r)}}Il.prototype.ValueTypeName="vector";class GI{constructor(e="",n=-1,i=[],r=sD){this.name=e,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=Jr(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)n.push(WI(i[o]).scale(r));const s=new this(e.name,e.duration,n,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const n=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)n.push(Ri.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,n,i,r){const s=n.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=OI(l);l=ky(l,1,u),c=ky(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Dl(".morphTargetInfluences["+n[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,n){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,n,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],n,i));return o}static parseAnimation(e,n){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,h,m,y){if(h.length!==0){const g=[],p=[];UE(h,g,p,m),g.length!==0&&y.push(new d(f,g,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let y=0;y<f[m].morphTargets.length;y++)h[f[m].morphTargets[y]]=-1;for(const y in h){const g=[],p=[];for(let _=0;_!==f[m].morphTargets.length;++_){const x=f[m];g.push(x.time),p.push(x.morphTarget===y?1:0)}r.push(new Dl(".morphTargetInfluence["+y+"]",g,p))}l=h.length*o}else{const h=".bones["+n[d].name+"]";i(Il,h+".position",f,"pos",r),i(Jo,h+".quaternion",f,"rot",r),i(Il,h+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let n=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];n=Math.max(n,s.times[s.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jI(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Dl;case"vector":case"vector2":case"vector3":case"vector4":return Il;case"color":return OE;case"quaternion":return Jo;case"bool":case"boolean":return la;case"string":return ca}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function WI(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jI(t.type);if(t.times===void 0){const n=[],i=[];UE(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const Ja={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class XI{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],m=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null}}}const YI=new XI;class Is{constructor(e){this.manager=e!==void 0?e:YI,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Is.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi={};class $I extends Error{constructor(e,n){super(e),this.response=n}}class KI extends Is{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ja.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Zi[e]!==void 0){Zi[e].push({onLoad:n,onProgress:i,onError:r});return}Zi[e]=[],Zi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Zi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=f?parseInt(f):0,m=h!==0;let y=0;const g=new ReadableStream({start(p){_();function _(){d.read().then(({done:x,value:S})=>{if(x)p.close();else{y+=S.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:h});for(let C=0,A=u.length;C<A;C++){const R=u[C];R.onProgress&&R.onProgress(b)}p.enqueue(S),_()}},x=>{p.error(x)})}}});return new Response(g)}else throw new $I(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return c.arrayBuffer().then(m=>h.decode(m))}}}).then(c=>{Ja.add(`file:${e}`,c);const u=Zi[e];delete Zi[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Zi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zi[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const Qs=new WeakMap;class qI extends Is{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ja.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0);else{let d=Qs.get(o);d===void 0&&(d=[],Qs.set(o,d)),d.push({onLoad:n,onError:r})}return o}const a=Cl("img");function l(){u(),n&&n(this);const d=Qs.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}Qs.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Ja.remove(`image:${e}`);const f=Qs.get(this)||[];for(let h=0;h<f.length;h++){const m=f[h];m.onError&&m.onError(d)}Qs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ja.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class ZI extends Is{constructor(e){super(e)}load(e,n,i,r){const s=new an,o=new qI(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Cd extends Pt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const qf=new Ie,Uy=new U,Oy=new U;class r0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=ji,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new n0,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Uy.setFromMatrixPosition(e.matrixWorld),n.position.copy(Uy),Oy.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Oy),n.updateMatrixWorld(),qf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class JI extends r0{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=Ko*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class QI extends Cd{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new JI}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const By=new Ie,Aa=new U,Zf=new U;class e3 extends r0{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Aa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Aa),Zf.copy(i.position),Zf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Zf),i.updateMatrixWorld(),r.makeTranslation(-Aa.x,-Aa.y,-Aa.z),By.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(By)}}class Vy extends Cd{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new e3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class BE extends RE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class t3 extends r0{constructor(){super(new BE(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class VE extends Cd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new t3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class n3 extends Cd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class i3{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}class r3 extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const s0="\\[\\]\\.:\\/",s3=new RegExp("["+s0+"]","g"),o0="[^"+s0+"]",o3="[^"+s0.replace("\\.","")+"]",a3=/((?:WC+[\/:])*)/.source.replace("WC",o0),l3=/(WCOD+)?/.source.replace("WCOD",o3),c3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",o0),u3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",o0),d3=new RegExp("^"+a3+l3+c3+u3+"$"),f3=["material","materials","bones","map"];class h3{constructor(e,n,i){const r=i||dt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}}class dt{constructor(e,n,i){this.path=n,this.parsedPath=i||dt.parseTrackName(n),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new dt.Composite(e,n,i):new dt(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(s3,"")}static parseTrackName(e){const n=d3.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);f3.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===n||a.uuid===n)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=dt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=h3;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function zy(t,e,n,i){const r=p3(i);switch(n){case gE:return t*e;case xE:return t*e/r.components*r.byteLength;case Yg:return t*e/r.components*r.byteLength;case yE:return t*e*2/r.components*r.byteLength;case $g:return t*e*2/r.components*r.byteLength;case vE:return t*e*3/r.components*r.byteLength;case si:return t*e*4/r.components*r.byteLength;case Kg:return t*e*4/r.components*r.byteLength;case hu:case pu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case mu:case gu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fp:case Up:return Math.max(t,16)*Math.max(e,8)/4;case Lp:case kp:return Math.max(t,8)*Math.max(e,8)/2;case Op:case Bp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case jp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Wp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $p:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Kp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case qp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case em:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vu:case tm:case nm:return Math.ceil(t/4)*Math.ceil(e/4)*16;case _E:case im:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rm:case sm:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function p3(t){switch(t){case ji:case hE:return{byteLength:1,components:1};case wl:case pE:case Wl:return{byteLength:2,components:1};case Wg:case Xg:return{byteLength:2,components:4};case Ps:case jg:case ki:return{byteLength:4,components:1};case mE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gg);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function m3(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],y=d[h];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const y=d[h];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var g3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,E3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,T3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,P3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,N3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,D3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,B3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,V3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,H3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X3="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,K3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xL=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yL=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_L=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SL=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ML=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,TL=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,DL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LL=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,BL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,WL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$L=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,JL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,QL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eF=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nF=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rF=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lF=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cF=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uF=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gF=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xF=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_F=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,MF=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,EF=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wF=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,TF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AF=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CF=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PF=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NF=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DF=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IF=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LF=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FF=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kF=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UF=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OF=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BF=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VF=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zF=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HF=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GF=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WF=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XF=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,YF=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$F=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:g3,alphahash_pars_fragment:v3,alphamap_fragment:x3,alphamap_pars_fragment:y3,alphatest_fragment:_3,alphatest_pars_fragment:S3,aomap_fragment:M3,aomap_pars_fragment:E3,batching_pars_vertex:w3,batching_vertex:T3,begin_vertex:b3,beginnormal_vertex:A3,bsdfs:C3,iridescence_fragment:R3,bumpmap_pars_fragment:P3,clipping_planes_fragment:N3,clipping_planes_pars_fragment:D3,clipping_planes_pars_vertex:I3,clipping_planes_vertex:L3,color_fragment:F3,color_pars_fragment:k3,color_pars_vertex:U3,color_vertex:O3,common:B3,cube_uv_reflection_fragment:V3,defaultnormal_vertex:z3,displacementmap_pars_vertex:H3,displacementmap_vertex:G3,emissivemap_fragment:j3,emissivemap_pars_fragment:W3,colorspace_fragment:X3,colorspace_pars_fragment:Y3,envmap_fragment:$3,envmap_common_pars_fragment:K3,envmap_pars_fragment:q3,envmap_pars_vertex:Z3,envmap_physical_pars_fragment:lL,envmap_vertex:J3,fog_vertex:Q3,fog_pars_vertex:eL,fog_fragment:tL,fog_pars_fragment:nL,gradientmap_pars_fragment:iL,lightmap_pars_fragment:rL,lights_lambert_fragment:sL,lights_lambert_pars_fragment:oL,lights_pars_begin:aL,lights_toon_fragment:cL,lights_toon_pars_fragment:uL,lights_phong_fragment:dL,lights_phong_pars_fragment:fL,lights_physical_fragment:hL,lights_physical_pars_fragment:pL,lights_fragment_begin:mL,lights_fragment_maps:gL,lights_fragment_end:vL,logdepthbuf_fragment:xL,logdepthbuf_pars_fragment:yL,logdepthbuf_pars_vertex:_L,logdepthbuf_vertex:SL,map_fragment:ML,map_pars_fragment:EL,map_particle_fragment:wL,map_particle_pars_fragment:TL,metalnessmap_fragment:bL,metalnessmap_pars_fragment:AL,morphinstance_vertex:CL,morphcolor_vertex:RL,morphnormal_vertex:PL,morphtarget_pars_vertex:NL,morphtarget_vertex:DL,normal_fragment_begin:IL,normal_fragment_maps:LL,normal_pars_fragment:FL,normal_pars_vertex:kL,normal_vertex:UL,normalmap_pars_fragment:OL,clearcoat_normal_fragment_begin:BL,clearcoat_normal_fragment_maps:VL,clearcoat_pars_fragment:zL,iridescence_pars_fragment:HL,opaque_fragment:GL,packing:jL,premultiplied_alpha_fragment:WL,project_vertex:XL,dithering_fragment:YL,dithering_pars_fragment:$L,roughnessmap_fragment:KL,roughnessmap_pars_fragment:qL,shadowmap_pars_fragment:ZL,shadowmap_pars_vertex:JL,shadowmap_vertex:QL,shadowmask_pars_fragment:eF,skinbase_vertex:tF,skinning_pars_vertex:nF,skinning_vertex:iF,skinnormal_vertex:rF,specularmap_fragment:sF,specularmap_pars_fragment:oF,tonemapping_fragment:aF,tonemapping_pars_fragment:lF,transmission_fragment:cF,transmission_pars_fragment:uF,uv_pars_fragment:dF,uv_pars_vertex:fF,uv_vertex:hF,worldpos_vertex:pF,background_vert:mF,background_frag:gF,backgroundCube_vert:vF,backgroundCube_frag:xF,cube_vert:yF,cube_frag:_F,depth_vert:SF,depth_frag:MF,distanceRGBA_vert:EF,distanceRGBA_frag:wF,equirect_vert:TF,equirect_frag:bF,linedashed_vert:AF,linedashed_frag:CF,meshbasic_vert:RF,meshbasic_frag:PF,meshlambert_vert:NF,meshlambert_frag:DF,meshmatcap_vert:IF,meshmatcap_frag:LF,meshnormal_vert:FF,meshnormal_frag:kF,meshphong_vert:UF,meshphong_frag:OF,meshphysical_vert:BF,meshphysical_frag:VF,meshtoon_vert:zF,meshtoon_frag:HF,points_vert:GF,points_frag:jF,shadow_vert:WF,shadow_frag:XF,sprite_vert:YF,sprite_frag:$F},ge={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Ii={basic:{uniforms:xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:xn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:xn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:xn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:xn([ge.points,ge.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:xn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:xn([ge.common,ge.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:xn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:xn([ge.sprite,ge.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:xn([ge.common,ge.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:xn([ge.lights,ge.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Ii.physical={uniforms:xn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const jc={r:0,b:0,g:0},os=new nn,KF=new Ie;function qF(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,d=null,f=0,h=null;function m(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?n:e).get(S)),S}function y(x){let S=!1;const b=m(x);b===null?p(a,l):b&&b.isColor&&(p(b,1),S=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(x,S){const b=m(S);b&&(b.isCubeTexture||b.mapping===Td)?(u===void 0&&(u=new Ei(new Xl(1,1,1),new Yr({name:"BackgroundCubeMaterial",uniforms:qo(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),os.copy(S.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(KF.makeRotationFromEuler(os)),u.material.toneMapped=et.getTransfer(b.colorSpace)!==vt,(d!==b||f!==b.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=b,f=b.version,h=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ei(new bd(2,2),new Yr({name:"BackgroundMaterial",uniforms:qo(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(b.colorSpace)!==vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,h=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,S){x.getRGB(jc,CE(t)),i.buffers.color.setClear(jc.r,jc.g,jc.b,S,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:y,addToRenderList:g,dispose:_}}function ZF(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,L,X,H,te){let ne=!1;const q=d(H,X,L);s!==q&&(s=q,c(s.object)),ne=h(M,H,X,te),ne&&m(M,H,X,te),te!==null&&e.update(te,t.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,S(M,L,X,H),te!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function d(M,L,X){const H=X.wireframe===!0;let te=i[M.id];te===void 0&&(te={},i[M.id]=te);let ne=te[L.id];ne===void 0&&(ne={},te[L.id]=ne);let q=ne[H];return q===void 0&&(q=f(l()),ne[H]=q),q}function f(M){const L=[],X=[],H=[];for(let te=0;te<n;te++)L[te]=0,X[te]=0,H[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:H,object:M,attributes:{},index:null}}function h(M,L,X,H){const te=s.attributes,ne=L.attributes;let q=0;const K=X.getAttributes();for(const F in K)if(K[F].location>=0){const N=te[F];let P=ne[F];if(P===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(P=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(P=M.instanceColor)),N===void 0||N.attribute!==P||P&&N.data!==P.data)return!0;q++}return s.attributesNum!==q||s.index!==H}function m(M,L,X,H){const te={},ne=L.attributes;let q=0;const K=X.getAttributes();for(const F in K)if(K[F].location>=0){let N=ne[F];N===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(N=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(N=M.instanceColor));const P={};P.attribute=N,N&&N.data&&(P.data=N.data),te[F]=P,q++}s.attributes=te,s.attributesNum=q,s.index=H}function y(){const M=s.newAttributes;for(let L=0,X=M.length;L<X;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){const X=s.newAttributes,H=s.enabledAttributes,te=s.attributeDivisors;X[M]=1,H[M]===0&&(t.enableVertexAttribArray(M),H[M]=1),te[M]!==L&&(t.vertexAttribDivisor(M,L),te[M]=L)}function _(){const M=s.newAttributes,L=s.enabledAttributes;for(let X=0,H=L.length;X<H;X++)L[X]!==M[X]&&(t.disableVertexAttribArray(X),L[X]=0)}function x(M,L,X,H,te,ne,q){q===!0?t.vertexAttribIPointer(M,L,X,te,ne):t.vertexAttribPointer(M,L,X,H,te,ne)}function S(M,L,X,H){y();const te=H.attributes,ne=X.getAttributes(),q=L.defaultAttributeValues;for(const K in ne){const F=ne[K];if(F.location>=0){let W=te[K];if(W===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),W!==void 0){const N=W.normalized,P=W.itemSize,ee=e.get(W);if(ee===void 0)continue;const fe=ee.buffer,V=ee.type,Y=ee.bytesPerElement,re=V===t.INT||V===t.UNSIGNED_INT||W.gpuType===jg;if(W.isInterleavedBufferAttribute){const $=W.data,le=$.stride,Ae=W.offset;if($.isInstancedInterleavedBuffer){for(let ve=0;ve<F.locationSize;ve++)p(F.location+ve,$.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ve=0;ve<F.locationSize;ve++)g(F.location+ve);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let ve=0;ve<F.locationSize;ve++)x(F.location+ve,P/F.locationSize,V,N,le*Y,(Ae+P/F.locationSize*ve)*Y,re)}else{if(W.isInstancedBufferAttribute){for(let $=0;$<F.locationSize;$++)p(F.location+$,W.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let $=0;$<F.locationSize;$++)g(F.location+$);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let $=0;$<F.locationSize;$++)x(F.location+$,P/F.locationSize,V,N,P*Y,P/F.locationSize*$*Y,re)}}else if(q!==void 0){const N=q[K];if(N!==void 0)switch(N.length){case 2:t.vertexAttrib2fv(F.location,N);break;case 3:t.vertexAttrib3fv(F.location,N);break;case 4:t.vertexAttrib4fv(F.location,N);break;default:t.vertexAttrib1fv(F.location,N)}}}}_()}function b(){R();for(const M in i){const L=i[M];for(const X in L){const H=L[X];for(const te in H)u(H[te].object),delete H[te];delete L[X]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const X in L){const H=L[X];for(const te in H)u(H[te].object),delete H[te];delete L[X]}delete i[M.id]}function A(M){for(const L in i){const X=i[L];if(X[M.id]===void 0)continue;const H=X[M.id];for(const te in H)u(H[te].object),delete H[te];delete X[M.id]}}function R(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function JF(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let m=0;m<d;m++)h+=u[m];n.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let m=0;for(let y=0;y<d;y++)m+=u[y]*f[y];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function QF(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==si&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Wl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ji&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ki&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:b,maxSamples:C}}function ek(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ds,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const _=s?0:i,x=_*4;let S=p.clippingState||null;l.value=S,S=u(m,f,x,h);for(let b=0;b!==x;++b)S[b]=n[b];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,m){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const p=h+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,S=h;x!==y;++x,S+=4)o.copy(d[x]).applyMatrix4(_,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function tk(t){let e=new WeakMap;function n(o,a){return a===qu?o.mapping=Xo:a===Dp&&(o.mapping=Yo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qu||a===Dp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rI(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Eo=4,Hy=[.125,.215,.35,.446,.526,.582],ps=20,Jf=new BE,Gy=new Xe;let Qf=null,eh=0,th=0,nh=!1;const fs=(1+Math.sqrt(5))/2,eo=1/fs,jy=[new U(-fs,eo,0),new U(fs,eo,0),new U(-eo,0,fs),new U(eo,0,fs),new U(0,fs,-eo),new U(0,fs,eo),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],nk=new U;class Wy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=nk}=s;Qf=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$y(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qf,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,Wc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xo||e.mapping===Yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qf=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Wl,format:si,colorSpace:$o,depthBuffer:!1},r=Xy(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xy(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ik(s)),this._blurMaterial=rk(s,e,n)}return r}_compileMaterial(e){const n=new Ei(this._lodPlanes[0],e);this._renderer.compile(n,Jf)}_sceneToCubeUV(e,n,i,r,s){const l=new En(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Gy),d.toneMapping=Hr,d.autoClear=!1;const m=new bE({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),y=new Ei(new Xl,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Gy),g=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const S=this._cubeSize;Wc(r,x*S,_>2?S:0,S,S),d.setRenderTarget(r),g&&d.render(y,l),d.render(e,l)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xo||e.mapping===Yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$y()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yy());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ei(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Wc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Jf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=jy[(r-s-1)%jy.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ei(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ps-1),y=s/m,g=isFinite(s)?1+Math.floor(u*y):ps;g>ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ps}`);const p=[];let _=0;for(let A=0;A<ps;++A){const R=A/y,T=Math.exp(-R*R/2);p.push(T),A===0?_+=T:A<g&&(_+=2*T)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-i;const S=this._sizeLods[r],b=3*S*(r>x-Eo?r-x+Eo:0),C=4*(this._cubeSize-S);Wc(n,b,C,3*S,2*S),l.setRenderTarget(n),l.render(d,Jf)}}function ik(t){const e=[],n=[],i=[];let r=t;const s=t-Eo+1+Hy.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Eo?l=Hy[o-t+Eo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,m=6,y=3,g=2,p=1,_=new Float32Array(y*m*h),x=new Float32Array(g*m*h),S=new Float32Array(p*m*h);for(let C=0;C<h;C++){const A=C%3*2/3-1,R=C>2?0:-1,T=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];_.set(T,y*m*C),x.set(f,g*m*C);const M=[C,C,C,C,C,C];S.set(M,p*m*C)}const b=new bi;b.setAttribute("position",new Hi(_,y)),b.setAttribute("uv",new Hi(x,g)),b.setAttribute("faceIndex",new Hi(S,p)),e.push(b),r>Eo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Xy(t,e,n){const i=new Ns(t,e,n);return i.texture.mapping=Td,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function rk(t,e,n){const i=new Float32Array(ps),r=new U(0,1,0);return new Yr({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:a0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function Yy(){return new Yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:a0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function $y(){return new Yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:a0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function a0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sk(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qu||l===Dp,u=l===Xo||l===Yo;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Wy(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new Wy(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ok(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Io("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ak(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,m=d.attributes.position;let y=0;if(h!==null){const _=h.array;y=h.version;for(let x=0,S=_.length;x<S;x+=3){const b=_[x+0],C=_[x+1],A=_[x+2];f.push(b,C,C,A,A,b)}}else if(m!==void 0){const _=m.array;y=m.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const b=x+0,C=x+1,A=x+2;f.push(b,C,C,A,A,b)}}else return;const g=new(ME(f)?AE:e0)(f,1);g.version=y;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function lk(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,s,f*o),n.update(h,i,1)}function c(f,h,m){m!==0&&(t.drawElementsInstanced(i,h,s,f*o,m),n.update(h,i,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=h[p];n.update(g,i,1)}function d(f,h,m,y){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,y,0,m);let p=0;for(let _=0;_<m;_++)p+=h[_]*y[_];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ck(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function uk(t,e,n){const i=new WeakMap,r=new ot;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var h=M;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),y===!0&&(S=2),g===!0&&(S=3);let b=a.attributes.position.count*S,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*C*4*d),R=new EE(A,b,C,d);R.type=ki,R.needsUpdate=!0;const T=S*4;for(let L=0;L<d;L++){const X=p[L],H=_[L],te=x[L],ne=b*C*4*L;for(let q=0;q<X.count;q++){const K=q*T;m===!0&&(r.fromBufferAttribute(X,q),A[ne+K+0]=r.x,A[ne+K+1]=r.y,A[ne+K+2]=r.z,A[ne+K+3]=0),y===!0&&(r.fromBufferAttribute(H,q),A[ne+K+4]=r.x,A[ne+K+5]=r.y,A[ne+K+6]=r.z,A[ne+K+7]=0),g===!0&&(r.fromBufferAttribute(te,q),A[ne+K+8]=r.x,A[ne+K+9]=r.y,A[ne+K+10]=r.z,A[ne+K+11]=te.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new at(b,C)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const y=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function dk(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const HE=new an,Ky=new DE(1,1),GE=new EE,jE=new zD,WE=new PE,qy=[],Zy=[],Jy=new Float32Array(16),Qy=new Float32Array(9),e_=new Float32Array(4);function ua(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qy[r];if(s===void 0&&(s=new Float32Array(r),qy[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rd(t,e){let n=Zy[e];n===void 0&&(n=new Int32Array(e),Zy[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function fk(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function hk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2fv(this.addr,e),Jt(n,e)}}function pk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;t.uniform3fv(this.addr,e),Jt(n,e)}}function mk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4fv(this.addr,e),Jt(n,e)}}function gk(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(Zt(n,i))return;e_.set(i),t.uniformMatrix2fv(this.addr,!1,e_),Jt(n,i)}}function vk(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(Zt(n,i))return;Qy.set(i),t.uniformMatrix3fv(this.addr,!1,Qy),Jt(n,i)}}function xk(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(Zt(n,i))return;Jy.set(i),t.uniformMatrix4fv(this.addr,!1,Jy),Jt(n,i)}}function yk(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _k(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2iv(this.addr,e),Jt(n,e)}}function Sk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3iv(this.addr,e),Jt(n,e)}}function Mk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4iv(this.addr,e),Jt(n,e)}}function Ek(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function wk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2uiv(this.addr,e),Jt(n,e)}}function Tk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3uiv(this.addr,e),Jt(n,e)}}function bk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4uiv(this.addr,e),Jt(n,e)}}function Ak(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ky.compareFunction=SE,s=Ky):s=HE,n.setTexture2D(e||s,r)}function Ck(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||jE,r)}function Rk(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||WE,r)}function Pk(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||GE,r)}function Nk(t){switch(t){case 5126:return fk;case 35664:return hk;case 35665:return pk;case 35666:return mk;case 35674:return gk;case 35675:return vk;case 35676:return xk;case 5124:case 35670:return yk;case 35667:case 35671:return _k;case 35668:case 35672:return Sk;case 35669:case 35673:return Mk;case 5125:return Ek;case 36294:return wk;case 36295:return Tk;case 36296:return bk;case 35678:case 36198:case 36298:case 36306:case 35682:return Ak;case 35679:case 36299:case 36307:return Ck;case 35680:case 36300:case 36308:case 36293:return Rk;case 36289:case 36303:case 36311:case 36292:return Pk}}function Dk(t,e){t.uniform1fv(this.addr,e)}function Ik(t,e){const n=ua(e,this.size,2);t.uniform2fv(this.addr,n)}function Lk(t,e){const n=ua(e,this.size,3);t.uniform3fv(this.addr,n)}function Fk(t,e){const n=ua(e,this.size,4);t.uniform4fv(this.addr,n)}function kk(t,e){const n=ua(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Uk(t,e){const n=ua(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ok(t,e){const n=ua(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Bk(t,e){t.uniform1iv(this.addr,e)}function Vk(t,e){t.uniform2iv(this.addr,e)}function zk(t,e){t.uniform3iv(this.addr,e)}function Hk(t,e){t.uniform4iv(this.addr,e)}function Gk(t,e){t.uniform1uiv(this.addr,e)}function jk(t,e){t.uniform2uiv(this.addr,e)}function Wk(t,e){t.uniform3uiv(this.addr,e)}function Xk(t,e){t.uniform4uiv(this.addr,e)}function Yk(t,e,n){const i=this.cache,r=e.length,s=Rd(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||HE,s[o])}function $k(t,e,n){const i=this.cache,r=e.length,s=Rd(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||jE,s[o])}function Kk(t,e,n){const i=this.cache,r=e.length,s=Rd(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||WE,s[o])}function qk(t,e,n){const i=this.cache,r=e.length,s=Rd(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||GE,s[o])}function Zk(t){switch(t){case 5126:return Dk;case 35664:return Ik;case 35665:return Lk;case 35666:return Fk;case 35674:return kk;case 35675:return Uk;case 35676:return Ok;case 5124:case 35670:return Bk;case 35667:case 35671:return Vk;case 35668:case 35672:return zk;case 35669:case 35673:return Hk;case 5125:return Gk;case 36294:return jk;case 36295:return Wk;case 36296:return Xk;case 35678:case 36198:case 36298:case 36306:case 35682:return Yk;case 35679:case 36299:case 36307:return $k;case 35680:case 36300:case 36308:case 36293:return Kk;case 36289:case 36303:case 36311:case 36292:return qk}}class Jk{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Nk(n.type)}}class Qk{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Zk(n.type)}}class eU{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function t_(t,e){t.seq.push(e),t.map[e.id]=e}function tU(t,e,n){const i=t.name,r=i.length;for(ih.lastIndex=0;;){const s=ih.exec(i),o=ih.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){t_(n,c===void 0?new Jk(a,t,e):new Qk(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new eU(a),t_(n,d)),n=d}}}class xu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);tU(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function n_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const nU=37297;let iU=0;function rU(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const i_=new Ze;function sU(t){et._getMatrix(i_,et.workingColorSpace,t);const e=`mat3( ${i_.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case Ju:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function r_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+rU(t.getShaderSource(e),o)}else return r}function oU(t,e){const n=sU(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function aU(t,e){let n;switch(e){case qN:n="Linear";break;case ZN:n="Reinhard";break;case JN:n="Cineon";break;case QN:n="ACESFilmic";break;case tD:n="AgX";break;case nD:n="Neutral";break;case eD:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xc=new U;function lU(){et.getLuminanceCoefficients(Xc);const t=Xc.x.toFixed(4),e=Xc.y.toFixed(4),n=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cU(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function uU(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function dU(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function La(t){return t!==""}function s_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fU=/^[ \t]*#include +<([\w\d./]+)>/gm;function um(t){return t.replace(fU,pU)}const hU=new Map;function pU(t,e){let n=Qe[e];if(n===void 0){const i=hU.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return um(n)}const mU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(t){return t.replace(mU,gU)}function gU(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function l_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vU(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===dE?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===RN?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function xU(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xo:case Yo:e="ENVMAP_TYPE_CUBE";break;case Td:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yU(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Yo:e="ENVMAP_MODE_REFRACTION";break}return e}function _U(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wd:e="ENVMAP_BLENDING_MULTIPLY";break;case $N:e="ENVMAP_BLENDING_MIX";break;case KN:e="ENVMAP_BLENDING_ADD";break}return e}function SU(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function MU(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=vU(n),c=xU(n),u=yU(n),d=_U(n),f=SU(n),h=cU(n),m=uU(s),y=r.createProgram();let g,p,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(La).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(La).join(`
`),p.length>0&&(p+=`
`)):(g=[l_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),p=[l_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hr?"#define TONE_MAPPING":"",n.toneMapping!==Hr?Qe.tonemapping_pars_fragment:"",n.toneMapping!==Hr?aU("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,oU("linearToOutputTexel",n.outputColorSpace),lU(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(La).join(`
`)),o=um(o),o=s_(o,n),o=o_(o,n),a=um(a),a=s_(a,n),a=o_(a,n),o=a_(o),a=a_(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===oy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===oy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=_+g+o,S=_+p+a,b=n_(r,r.VERTEX_SHADER,x),C=n_(r,r.FRAGMENT_SHADER,S);r.attachShader(y,b),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(L){if(t.debug.checkShaderErrors){const X=r.getProgramInfoLog(y).trim(),H=r.getShaderInfoLog(b).trim(),te=r.getShaderInfoLog(C).trim();let ne=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,C);else{const K=r_(r,b,"vertex"),F=r_(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+K+`
`+F)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(H===""||te==="")&&(q=!1);q&&(L.diagnostics={runnable:ne,programLog:X,vertexShader:{log:H,prefix:g},fragmentShader:{log:te,prefix:p}})}r.deleteShader(b),r.deleteShader(C),R=new xu(r,y),T=dU(r,y)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,nU)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iU++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=C,this}let EU=0;class wU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new TU(e),n.set(e,i)),i}}class TU{constructor(e){this.id=EU++,this.code=e,this.usedTimes=0}}function bU(t,e,n,i,r,s,o){const a=new wE,l=new wU,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let h=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,M,L,X,H){const te=X.fog,ne=H.geometry,q=T.isMeshStandardMaterial?X.environment:null,K=(T.isMeshStandardMaterial?n:e).get(T.envMap||q),F=K&&K.mapping===Td?K.image.height:null,W=m[T.type];T.precision!==null&&(h=r.getMaxPrecision(T.precision),h!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));const N=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,P=N!==void 0?N.length:0;let ee=0;ne.morphAttributes.position!==void 0&&(ee=1),ne.morphAttributes.normal!==void 0&&(ee=2),ne.morphAttributes.color!==void 0&&(ee=3);let fe,V,Y,re;if(W){const ht=Ii[W];fe=ht.vertexShader,V=ht.fragmentShader}else fe=T.vertexShader,V=T.fragmentShader,l.update(T),Y=l.getVertexShaderID(T),re=l.getFragmentShaderID(T);const $=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),Ae=H.isInstancedMesh===!0,ve=H.isBatchedMesh===!0,Fe=!!T.map,Be=!!T.matcap,ke=!!K,I=!!T.aoMap,ft=!!T.lightMap,Ye=!!T.bumpMap,nt=!!T.normalMap,_e=!!T.displacementMap,Je=!!T.emissiveMap,be=!!T.metalnessMap,qe=!!T.roughnessMap,zt=T.anisotropy>0,D=T.clearcoat>0,E=T.dispersion>0,z=T.iridescence>0,Q=T.sheen>0,se=T.transmission>0,Z=zt&&!!T.anisotropyMap,Pe=D&&!!T.clearcoatMap,pe=D&&!!T.clearcoatNormalMap,we=D&&!!T.clearcoatRoughnessMap,Ne=z&&!!T.iridescenceMap,oe=z&&!!T.iridescenceThicknessMap,Me=Q&&!!T.sheenColorMap,Ve=Q&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,me=!!T.specularColorMap,We=!!T.specularIntensityMap,k=se&&!!T.transmissionMap,xe=se&&!!T.thicknessMap,ae=!!T.gradientMap,Te=!!T.alphaMap,ue=T.alphaTest>0,ie=!!T.alphaHash,Ce=!!T.extensions;let $e=Hr;T.toneMapped&&($===null||$.isXRRenderTarget===!0)&&($e=t.toneMapping);const Mt={shaderID:W,shaderType:T.type,shaderName:T.name,vertexShader:fe,fragmentShader:V,defines:T.defines,customVertexShaderID:Y,customFragmentShaderID:re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:ve,batchingColor:ve&&H._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&H.instanceColor!==null,instancingMorph:Ae&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?t.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:$o,alphaToCoverage:!!T.alphaToCoverage,map:Fe,matcap:Be,envMap:ke,envMapMode:ke&&K.mapping,envMapCubeUVHeight:F,aoMap:I,lightMap:ft,bumpMap:Ye,normalMap:nt,displacementMap:f&&_e,emissiveMap:Je,normalMapObjectSpace:nt&&T.normalMapType===lD,normalMapTangentSpace:nt&&T.normalMapType===qg,metalnessMap:be,roughnessMap:qe,anisotropy:zt,anisotropyMap:Z,clearcoat:D,clearcoatMap:Pe,clearcoatNormalMap:pe,clearcoatRoughnessMap:we,dispersion:E,iridescence:z,iridescenceMap:Ne,iridescenceThicknessMap:oe,sheen:Q,sheenColorMap:Me,sheenRoughnessMap:Ve,specularMap:Oe,specularColorMap:me,specularIntensityMap:We,transmission:se,transmissionMap:k,thicknessMap:xe,gradientMap:ae,opaque:T.transparent===!1&&T.blending===Do&&T.alphaToCoverage===!1,alphaMap:Te,alphaTest:ue,alphaHash:ie,combine:T.combine,mapUv:Fe&&y(T.map.channel),aoMapUv:I&&y(T.aoMap.channel),lightMapUv:ft&&y(T.lightMap.channel),bumpMapUv:Ye&&y(T.bumpMap.channel),normalMapUv:nt&&y(T.normalMap.channel),displacementMapUv:_e&&y(T.displacementMap.channel),emissiveMapUv:Je&&y(T.emissiveMap.channel),metalnessMapUv:be&&y(T.metalnessMap.channel),roughnessMapUv:qe&&y(T.roughnessMap.channel),anisotropyMapUv:Z&&y(T.anisotropyMap.channel),clearcoatMapUv:Pe&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:pe&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&y(T.sheenRoughnessMap.channel),specularMapUv:Oe&&y(T.specularMap.channel),specularColorMapUv:me&&y(T.specularColorMap.channel),specularIntensityMapUv:We&&y(T.specularIntensityMap.channel),transmissionMapUv:k&&y(T.transmissionMap.channel),thicknessMapUv:xe&&y(T.thicknessMap.channel),alphaMapUv:Te&&y(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(nt||zt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ne.attributes.uv&&(Fe||Te),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:le,skinning:H.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,decodeVideoTexture:Fe&&T.map.isVideoTexture===!0&&et.getTransfer(T.map.colorSpace)===vt,decodeVideoTextureEmissive:Je&&T.emissiveMap.isVideoTexture===!0&&et.getTransfer(T.emissiveMap.colorSpace)===vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===tr,flipSided:T.side===On,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ce&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&T.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)M.push(L),M.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(_(M,T),x(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function _(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function x(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const M=m[T.type];let L;if(M){const X=Ii[M];L=eI.clone(X.uniforms)}else L=T.uniforms;return L}function b(T,M){let L;for(let X=0,H=u.length;X<H;X++){const te=u[X];if(te.cacheKey===M){L=te,++L.usedTimes;break}}return L===void 0&&(L=new MU(t,M,T,s),u.push(L)),L}function C(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function A(T){l.remove(T)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:b,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:R}}function AU(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function CU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function c_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function u_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,h,m,y,g){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:m,renderOrder:d.renderOrder,z:y,group:g},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=y,p.group=g),e++,p}function a(d,f,h,m,y,g){const p=o(d,f,h,m,y,g);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(d,f,h,m,y,g){const p=o(d,f,h,m,y,g);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(d,f){n.length>1&&n.sort(d||CU),i.length>1&&i.sort(f||c_),r.length>1&&r.sort(f||c_)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function RU(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new u_,t.set(i,[o])):r>=s.length?(o=new u_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function PU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Xe};break;case"SpotLight":n={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function NU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let DU=0;function IU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LU(t){const e=new PU,n=NU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new Ie,o=new Ie;function a(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,m=0,y=0,g=0,p=0,_=0,x=0,S=0,b=0,C=0,A=0;c.sort(IU);for(let T=0,M=c.length;T<M;T++){const L=c[T],X=L.color,H=L.intensity,te=L.distance,ne=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=X.r*H,d+=X.g*H,f+=X.b*H;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],H);A++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,F=n.get(L);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,i.directionalShadow[h]=F,i.directionalShadowMap[h]=ne,i.directionalShadowMatrix[h]=L.shadow.matrix,_++}i.directional[h]=q,h++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(X).multiplyScalar(H),q.distance=te,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[y]=q;const K=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,K.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[y]=K.matrix,L.castShadow){const F=n.get(L);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,i.spotShadow[y]=F,i.spotShadowMap[y]=ne,S++}y++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(X).multiplyScalar(H),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=q,g++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const K=L.shadow,F=n.get(L);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,F.shadowCameraNear=K.camera.near,F.shadowCameraFar=K.camera.far,i.pointShadow[m]=F,i.pointShadowMap[m]=ne,i.pointShadowMatrix[m]=L.shadow.matrix,x++}i.point[m]=q,m++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(H),q.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==h||R.pointLength!==m||R.spotLength!==y||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==b||R.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,R.directionalLength=h,R.pointLength=m,R.spotLength=y,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=b,R.numLightProbes=A,i.version=DU++)}function l(c,u){let d=0,f=0,h=0,m=0,y=0;const g=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const x=c[p];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(x.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(x.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function d_(t){const e=new LU(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function FU(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new d_(t),e.set(r,[a])):s>=o.length?(a=new d_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const kU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function OU(t,e,n){let i=new n0;const r=new at,s=new at,o=new ot,a=new FI({depthPacking:aD}),l=new kI,c={},u=n.maxTextureSize,d={[Xr]:On,[On]:Xr,[tr]:tr},f=new Yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:kU,fragmentShader:UU}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new bi;m.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ei(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dE;let p=this.type;this.render=function(C,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),X=t.state;X.setBlending(zr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const H=p!==Ji&&this.type===Ji,te=p===Ji&&this.type!==Ji;for(let ne=0,q=C.length;ne<q;ne++){const K=C[ne],F=K.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const W=F.getFrameExtents();if(r.multiply(W),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,F.mapSize.y=s.y)),F.map===null||H===!0||te===!0){const P=this.type!==Ji?{minFilter:Xn,magFilter:Xn}:{};F.map!==null&&F.map.dispose(),F.map=new Ns(r.x,r.y,P),F.map.texture.name=K.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const N=F.getViewportCount();for(let P=0;P<N;P++){const ee=F.getViewport(P);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),X.viewport(o),F.updateMatrices(K,P),i=F.getFrustum(),S(A,R,F.camera,K,this.type)}F.isPointLightShadow!==!0&&this.type===Ji&&_(F,R),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(T,M,L)};function _(C,A){const R=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ns(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,R,f,y,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,R,h,y,null)}function x(C,A,R,T){let M=null;const L=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const X=M.uuid,H=A.uuid;let te=c[X];te===void 0&&(te={},c[X]=te);let ne=te[H];ne===void 0&&(ne=M.clone(),te[H]=ne,A.addEventListener("dispose",b)),M=ne}if(M.visible=A.visible,M.wireframe=A.wireframe,T===Ji?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=t.properties.get(M);X.light=R}return M}function S(C,A,R,T,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Ji)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const H=e.update(C),te=C.material;if(Array.isArray(te)){const ne=H.groups;for(let q=0,K=ne.length;q<K;q++){const F=ne[q],W=te[F.materialIndex];if(W&&W.visible){const N=x(C,W,T,M);C.onBeforeShadow(t,C,A,R,H,N,F),t.renderBufferDirect(R,null,H,N,C,F),C.onAfterShadow(t,C,A,R,H,N,F)}}}else if(te.visible){const ne=x(C,te,T,M);C.onBeforeShadow(t,C,A,R,H,ne,null),t.renderBufferDirect(R,null,H,ne,C,null),C.onAfterShadow(t,C,A,R,H,ne,null)}}const X=C.children;for(let H=0,te=X.length;H<te;H++)S(X[H],A,R,T,M)}function b(C){C.target.removeEventListener("dispose",b);for(const R in c){const T=c[R],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const BU={[Tp]:bp,[Ap]:Pp,[Cp]:Np,[Wo]:Rp,[bp]:Tp,[Pp]:Ap,[Np]:Cp,[Rp]:Wo};function VU(t,e){function n(){let k=!1;const xe=new ot;let ae=null;const Te=new ot(0,0,0,0);return{setMask:function(ue){ae!==ue&&!k&&(t.colorMask(ue,ue,ue,ue),ae=ue)},setLocked:function(ue){k=ue},setClear:function(ue,ie,Ce,$e,Mt){Mt===!0&&(ue*=$e,ie*=$e,Ce*=$e),xe.set(ue,ie,Ce,$e),Te.equals(xe)===!1&&(t.clearColor(ue,ie,Ce,$e),Te.copy(xe))},reset:function(){k=!1,ae=null,Te.set(-1,0,0,0)}}}function i(){let k=!1,xe=!1,ae=null,Te=null,ue=null;return{setReversed:function(ie){if(xe!==ie){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),xe=ie;const $e=ue;ue=null,this.setClear($e)}},getReversed:function(){return xe},setTest:function(ie){ie?$(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(ie){ae!==ie&&!k&&(t.depthMask(ie),ae=ie)},setFunc:function(ie){if(xe&&(ie=BU[ie]),Te!==ie){switch(ie){case Tp:t.depthFunc(t.NEVER);break;case bp:t.depthFunc(t.ALWAYS);break;case Ap:t.depthFunc(t.LESS);break;case Wo:t.depthFunc(t.LEQUAL);break;case Cp:t.depthFunc(t.EQUAL);break;case Rp:t.depthFunc(t.GEQUAL);break;case Pp:t.depthFunc(t.GREATER);break;case Np:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Te=ie}},setLocked:function(ie){k=ie},setClear:function(ie){ue!==ie&&(xe&&(ie=1-ie),t.clearDepth(ie),ue=ie)},reset:function(){k=!1,ae=null,Te=null,ue=null,xe=!1}}}function r(){let k=!1,xe=null,ae=null,Te=null,ue=null,ie=null,Ce=null,$e=null,Mt=null;return{setTest:function(ht){k||(ht?$(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(ht){xe!==ht&&!k&&(t.stencilMask(ht),xe=ht)},setFunc:function(ht,ci,Wi){(ae!==ht||Te!==ci||ue!==Wi)&&(t.stencilFunc(ht,ci,Wi),ae=ht,Te=ci,ue=Wi)},setOp:function(ht,ci,Wi){(ie!==ht||Ce!==ci||$e!==Wi)&&(t.stencilOp(ht,ci,Wi),ie=ht,Ce=ci,$e=Wi)},setLocked:function(ht){k=ht},setClear:function(ht){Mt!==ht&&(t.clearStencil(ht),Mt=ht)},reset:function(){k=!1,xe=null,ae=null,Te=null,ue=null,ie=null,Ce=null,$e=null,Mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],m=null,y=!1,g=null,p=null,_=null,x=null,S=null,b=null,C=null,A=new Xe(0,0,0),R=0,T=!1,M=null,L=null,X=null,H=null,te=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(F)[1]),q=K>=1):F.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),q=K>=2);let W=null,N={};const P=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),fe=new ot().fromArray(P),V=new ot().fromArray(ee);function Y(k,xe,ae,Te){const ue=new Uint8Array(4),ie=t.createTexture();t.bindTexture(k,ie),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<ae;Ce++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,Te,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(xe+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return ie}const re={};re[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(t.DEPTH_TEST),o.setFunc(Wo),Ye(!1),nt(qx),$(t.CULL_FACE),I(zr);function $(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function le(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function Ae(k,xe){return d[k]!==xe?(t.bindFramebuffer(k,xe),d[k]=xe,k===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=xe),k===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function ve(k,xe){let ae=h,Te=!1;if(k){ae=f.get(xe),ae===void 0&&(ae=[],f.set(xe,ae));const ue=k.textures;if(ae.length!==ue.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Ce=ue.length;ie<Ce;ie++)ae[ie]=t.COLOR_ATTACHMENT0+ie;ae.length=ue.length,Te=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,Te=!0);Te&&t.drawBuffers(ae)}function Fe(k){return m!==k?(t.useProgram(k),m=k,!0):!1}const Be={[hs]:t.FUNC_ADD,[NN]:t.FUNC_SUBTRACT,[DN]:t.FUNC_REVERSE_SUBTRACT};Be[IN]=t.MIN,Be[LN]=t.MAX;const ke={[FN]:t.ZERO,[kN]:t.ONE,[UN]:t.SRC_COLOR,[Ep]:t.SRC_ALPHA,[GN]:t.SRC_ALPHA_SATURATE,[zN]:t.DST_COLOR,[BN]:t.DST_ALPHA,[ON]:t.ONE_MINUS_SRC_COLOR,[wp]:t.ONE_MINUS_SRC_ALPHA,[HN]:t.ONE_MINUS_DST_COLOR,[VN]:t.ONE_MINUS_DST_ALPHA,[jN]:t.CONSTANT_COLOR,[WN]:t.ONE_MINUS_CONSTANT_COLOR,[XN]:t.CONSTANT_ALPHA,[YN]:t.ONE_MINUS_CONSTANT_ALPHA};function I(k,xe,ae,Te,ue,ie,Ce,$e,Mt,ht){if(k===zr){y===!0&&(le(t.BLEND),y=!1);return}if(y===!1&&($(t.BLEND),y=!0),k!==PN){if(k!==g||ht!==T){if((p!==hs||S!==hs)&&(t.blendEquation(t.FUNC_ADD),p=hs,S=hs),ht)switch(k){case Do:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zx:t.blendFunc(t.ONE,t.ONE);break;case Jx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Do:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zx:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Jx:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qx:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,x=null,b=null,C=null,A.set(0,0,0),R=0,g=k,T=ht}return}ue=ue||xe,ie=ie||ae,Ce=Ce||Te,(xe!==p||ue!==S)&&(t.blendEquationSeparate(Be[xe],Be[ue]),p=xe,S=ue),(ae!==_||Te!==x||ie!==b||Ce!==C)&&(t.blendFuncSeparate(ke[ae],ke[Te],ke[ie],ke[Ce]),_=ae,x=Te,b=ie,C=Ce),($e.equals(A)===!1||Mt!==R)&&(t.blendColor($e.r,$e.g,$e.b,Mt),A.copy($e),R=Mt),g=k,T=!1}function ft(k,xe){k.side===tr?le(t.CULL_FACE):$(t.CULL_FACE);let ae=k.side===On;xe&&(ae=!ae),Ye(ae),k.blending===Do&&k.transparent===!1?I(zr):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const Te=k.stencilWrite;a.setTest(Te),Te&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Je(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(k){M!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),M=k)}function nt(k){k!==AN?($(t.CULL_FACE),k!==L&&(k===qx?t.cullFace(t.BACK):k===CN?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),L=k}function _e(k){k!==X&&(q&&t.lineWidth(k),X=k)}function Je(k,xe,ae){k?($(t.POLYGON_OFFSET_FILL),(H!==xe||te!==ae)&&(t.polygonOffset(xe,ae),H=xe,te=ae)):le(t.POLYGON_OFFSET_FILL)}function be(k){k?$(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function qe(k){k===void 0&&(k=t.TEXTURE0+ne-1),W!==k&&(t.activeTexture(k),W=k)}function zt(k,xe,ae){ae===void 0&&(W===null?ae=t.TEXTURE0+ne-1:ae=W);let Te=N[ae];Te===void 0&&(Te={type:void 0,texture:void 0},N[ae]=Te),(Te.type!==k||Te.texture!==xe)&&(W!==ae&&(t.activeTexture(ae),W=ae),t.bindTexture(k,xe||re[k]),Te.type=k,Te.texture=xe)}function D(){const k=N[W];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function z(){try{t.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{t.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{t.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{t.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{t.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{t.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{t.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{t.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(k){fe.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),fe.copy(k))}function Ve(k){V.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),V.copy(k))}function Oe(k,xe){let ae=c.get(xe);ae===void 0&&(ae=new WeakMap,c.set(xe,ae));let Te=ae.get(k);Te===void 0&&(Te=t.getUniformBlockIndex(xe,k.name),ae.set(k,Te))}function me(k,xe){const Te=c.get(xe).get(k);l.get(xe)!==Te&&(t.uniformBlockBinding(xe,Te,k.__bindingPointIndex),l.set(xe,Te))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},W=null,N={},d={},f=new WeakMap,h=[],m=null,y=!1,g=null,p=null,_=null,x=null,S=null,b=null,C=null,A=new Xe(0,0,0),R=0,T=!1,M=null,L=null,X=null,H=null,te=null,fe.set(0,0,t.canvas.width,t.canvas.height),V.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:le,bindFramebuffer:Ae,drawBuffers:ve,useProgram:Fe,setBlending:I,setMaterial:ft,setFlipSided:Ye,setCullFace:nt,setLineWidth:_e,setPolygonOffset:Je,setScissorTest:be,activeTexture:qe,bindTexture:zt,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:z,texImage2D:Ne,texImage3D:oe,updateUBOMapping:Oe,uniformBlockBinding:me,texStorage2D:pe,texStorage3D:we,texSubImage2D:Q,texSubImage3D:se,compressedTexSubImage2D:Z,compressedTexSubImage3D:Pe,scissor:Me,viewport:Ve,reset:We}}function zU(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,E){return h?new OffscreenCanvas(D,E):Cl("canvas")}function y(D,E,z){let Q=1;const se=zt(D);if((se.width>z||se.height>z)&&(Q=z/Math.max(se.width,se.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Z=Math.floor(Q*se.width),Pe=Math.floor(Q*se.height);d===void 0&&(d=m(Z,Pe));const pe=E?m(Z,Pe):d;return pe.width=Z,pe.height=Pe,pe.getContext("2d").drawImage(D,0,0,Z,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Z+"x"+Pe+")."),pe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){t.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(D,E,z,Q,se=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Z=E;if(E===t.RED&&(z===t.FLOAT&&(Z=t.R32F),z===t.HALF_FLOAT&&(Z=t.R16F),z===t.UNSIGNED_BYTE&&(Z=t.R8)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.R8UI),z===t.UNSIGNED_SHORT&&(Z=t.R16UI),z===t.UNSIGNED_INT&&(Z=t.R32UI),z===t.BYTE&&(Z=t.R8I),z===t.SHORT&&(Z=t.R16I),z===t.INT&&(Z=t.R32I)),E===t.RG&&(z===t.FLOAT&&(Z=t.RG32F),z===t.HALF_FLOAT&&(Z=t.RG16F),z===t.UNSIGNED_BYTE&&(Z=t.RG8)),E===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.RG8UI),z===t.UNSIGNED_SHORT&&(Z=t.RG16UI),z===t.UNSIGNED_INT&&(Z=t.RG32UI),z===t.BYTE&&(Z=t.RG8I),z===t.SHORT&&(Z=t.RG16I),z===t.INT&&(Z=t.RG32I)),E===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),z===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),z===t.UNSIGNED_INT&&(Z=t.RGB32UI),z===t.BYTE&&(Z=t.RGB8I),z===t.SHORT&&(Z=t.RGB16I),z===t.INT&&(Z=t.RGB32I)),E===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),z===t.UNSIGNED_INT&&(Z=t.RGBA32UI),z===t.BYTE&&(Z=t.RGBA8I),z===t.SHORT&&(Z=t.RGBA16I),z===t.INT&&(Z=t.RGBA32I)),E===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),E===t.RGBA){const Pe=se?Ju:et.getTransfer(Q);z===t.FLOAT&&(Z=t.RGBA32F),z===t.HALF_FLOAT&&(Z=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Z=Pe===vt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(D,E){let z;return D?E===null||E===Ps||E===Tl?z=t.DEPTH24_STENCIL8:E===ki?z=t.DEPTH32F_STENCIL8:E===wl&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ps||E===Tl?z=t.DEPTH_COMPONENT24:E===ki?z=t.DEPTH_COMPONENT32F:E===wl&&(z=t.DEPTH_COMPONENT16),z}function b(D,E){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Xn&&D.minFilter!==Fi?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function C(D){const E=D.target;E.removeEventListener("dispose",C),R(E),E.isVideoTexture&&u.delete(E)}function A(D){const E=D.target;E.removeEventListener("dispose",A),M(E)}function R(D){const E=i.get(D);if(E.__webglInit===void 0)return;const z=D.source,Q=f.get(z);if(Q){const se=Q[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(D),Object.keys(Q).length===0&&f.delete(z)}i.remove(D)}function T(D){const E=i.get(D);t.deleteTexture(E.__webglTexture);const z=D.source,Q=f.get(z);delete Q[E.__cacheKey],o.memory.textures--}function M(D){const E=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let se=0;se<E.__webglFramebuffer[Q].length;se++)t.deleteFramebuffer(E.__webglFramebuffer[Q][se]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=D.textures;for(let Q=0,se=z.length;Q<se;Q++){const Z=i.get(z[Q]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(z[Q])}i.remove(D)}let L=0;function X(){L=0}function H(){const D=L;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),L+=1,D}function te(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ne(D,E){const z=i.get(D);if(D.isVideoTexture&&be(D),D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){const Q=D.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(z,D,E);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function q(D,E){const z=i.get(D);if(D.version>0&&z.__version!==D.version){re(z,D,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function K(D,E){const z=i.get(D);if(D.version>0&&z.__version!==D.version){re(z,D,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function F(D,E){const z=i.get(D);if(D.version>0&&z.__version!==D.version){$(z,D,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const W={[El]:t.REPEAT,[sr]:t.CLAMP_TO_EDGE,[Ip]:t.MIRRORED_REPEAT},N={[Xn]:t.NEAREST,[rD]:t.NEAREST_MIPMAP_NEAREST,[yc]:t.NEAREST_MIPMAP_LINEAR,[Fi]:t.LINEAR,[Ef]:t.LINEAR_MIPMAP_NEAREST,[_s]:t.LINEAR_MIPMAP_LINEAR},P={[cD]:t.NEVER,[mD]:t.ALWAYS,[uD]:t.LESS,[SE]:t.LEQUAL,[dD]:t.EQUAL,[pD]:t.GEQUAL,[fD]:t.GREATER,[hD]:t.NOTEQUAL};function ee(D,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fi||E.magFilter===Ef||E.magFilter===yc||E.magFilter===_s||E.minFilter===Fi||E.minFilter===Ef||E.minFilter===yc||E.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,W[E.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,W[E.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,W[E.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,N[E.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,N[E.minFilter]),E.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xn||E.minFilter!==yc&&E.minFilter!==_s||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function fe(D,E){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",C));const Q=E.source;let se=f.get(Q);se===void 0&&(se={},f.set(Q,se));const Z=te(E);if(Z!==D.__cacheKey){se[Z]===void 0&&(se[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),se[Z].usedTimes++;const Pe=se[D.__cacheKey];Pe!==void 0&&(se[D.__cacheKey].usedTimes--,Pe.usedTimes===0&&T(E)),D.__cacheKey=Z,D.__webglTexture=se[Z].texture}return z}function V(D,E,z){return Math.floor(Math.floor(D/z)/E)}function Y(D,E,z,Q){const Z=D.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,z,Q,E.data);else{Z.sort((oe,Me)=>oe.start-Me.start);let Pe=0;for(let oe=1;oe<Z.length;oe++){const Me=Z[Pe],Ve=Z[oe],Oe=Me.start+Me.count,me=V(Ve.start,E.width,4),We=V(Me.start,E.width,4);Ve.start<=Oe+1&&me===We&&V(Ve.start+Ve.count-1,E.width,4)===me?Me.count=Math.max(Me.count,Ve.start+Ve.count-Me.start):(++Pe,Z[Pe]=Ve)}Z.length=Pe+1;const pe=t.getParameter(t.UNPACK_ROW_LENGTH),we=t.getParameter(t.UNPACK_SKIP_PIXELS),Ne=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let oe=0,Me=Z.length;oe<Me;oe++){const Ve=Z[oe],Oe=Math.floor(Ve.start/4),me=Math.ceil(Ve.count/4),We=Oe%E.width,k=Math.floor(Oe/E.width),xe=me,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,We),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,We,k,xe,ae,z,Q,E.data)}D.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,pe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,we),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ne)}}function re(D,E,z){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const se=fe(D,E),Z=E.source;n.bindTexture(Q,D.__webglTexture,t.TEXTURE0+z);const Pe=i.get(Z);if(Z.version!==Pe.__version||se===!0){n.activeTexture(t.TEXTURE0+z);const pe=et.getPrimaries(et.workingColorSpace),we=E.colorSpace===Pr?null:et.getPrimaries(E.colorSpace),Ne=E.colorSpace===Pr||pe===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let oe=y(E.image,!1,r.maxTextureSize);oe=qe(E,oe);const Me=s.convert(E.format,E.colorSpace),Ve=s.convert(E.type);let Oe=x(E.internalFormat,Me,Ve,E.colorSpace,E.isVideoTexture);ee(Q,E);let me;const We=E.mipmaps,k=E.isVideoTexture!==!0,xe=Pe.__version===void 0||se===!0,ae=Z.dataReady,Te=b(E,oe);if(E.isDepthTexture)Oe=S(E.format===Al,E.type),xe&&(k?n.texStorage2D(t.TEXTURE_2D,1,Oe,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Oe,oe.width,oe.height,0,Me,Ve,null));else if(E.isDataTexture)if(We.length>0){k&&xe&&n.texStorage2D(t.TEXTURE_2D,Te,Oe,We[0].width,We[0].height);for(let ue=0,ie=We.length;ue<ie;ue++)me=We[ue],k?ae&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,me.width,me.height,Me,Ve,me.data):n.texImage2D(t.TEXTURE_2D,ue,Oe,me.width,me.height,0,Me,Ve,me.data);E.generateMipmaps=!1}else k?(xe&&n.texStorage2D(t.TEXTURE_2D,Te,Oe,oe.width,oe.height),ae&&Y(E,oe,Me,Ve)):n.texImage2D(t.TEXTURE_2D,0,Oe,oe.width,oe.height,0,Me,Ve,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,Oe,We[0].width,We[0].height,oe.depth);for(let ue=0,ie=We.length;ue<ie;ue++)if(me=We[ue],E.format!==si)if(Me!==null)if(k){if(ae)if(E.layerUpdates.size>0){const Ce=zy(me.width,me.height,E.format,E.type);for(const $e of E.layerUpdates){const Mt=me.data.subarray($e*Ce/me.data.BYTES_PER_ELEMENT,($e+1)*Ce/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,$e,me.width,me.height,1,Me,Mt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,me.width,me.height,oe.depth,Me,me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,Oe,me.width,me.height,oe.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,me.width,me.height,oe.depth,Me,Ve,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,Oe,me.width,me.height,oe.depth,0,Me,Ve,me.data)}else{k&&xe&&n.texStorage2D(t.TEXTURE_2D,Te,Oe,We[0].width,We[0].height);for(let ue=0,ie=We.length;ue<ie;ue++)me=We[ue],E.format!==si?Me!==null?k?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,me.width,me.height,Me,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,Oe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ae&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,me.width,me.height,Me,Ve,me.data):n.texImage2D(t.TEXTURE_2D,ue,Oe,me.width,me.height,0,Me,Ve,me.data)}else if(E.isDataArrayTexture)if(k){if(xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,Oe,oe.width,oe.height,oe.depth),ae)if(E.layerUpdates.size>0){const ue=zy(oe.width,oe.height,E.format,E.type);for(const ie of E.layerUpdates){const Ce=oe.data.subarray(ie*ue/oe.data.BYTES_PER_ELEMENT,(ie+1)*ue/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,oe.width,oe.height,1,Me,Ve,Ce)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,Ve,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,oe.width,oe.height,oe.depth,0,Me,Ve,oe.data);else if(E.isData3DTexture)k?(xe&&n.texStorage3D(t.TEXTURE_3D,Te,Oe,oe.width,oe.height,oe.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,Ve,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,oe.width,oe.height,oe.depth,0,Me,Ve,oe.data);else if(E.isFramebufferTexture){if(xe)if(k)n.texStorage2D(t.TEXTURE_2D,Te,Oe,oe.width,oe.height);else{let ue=oe.width,ie=oe.height;for(let Ce=0;Ce<Te;Ce++)n.texImage2D(t.TEXTURE_2D,Ce,Oe,ue,ie,0,Me,Ve,null),ue>>=1,ie>>=1}}else if(We.length>0){if(k&&xe){const ue=zt(We[0]);n.texStorage2D(t.TEXTURE_2D,Te,Oe,ue.width,ue.height)}for(let ue=0,ie=We.length;ue<ie;ue++)me=We[ue],k?ae&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Me,Ve,me):n.texImage2D(t.TEXTURE_2D,ue,Oe,Me,Ve,me);E.generateMipmaps=!1}else if(k){if(xe){const ue=zt(oe);n.texStorage2D(t.TEXTURE_2D,Te,Oe,ue.width,ue.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Ve,oe)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Me,Ve,oe);g(E)&&p(Q),Pe.__version=Z.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function $(D,E,z){if(E.image.length!==6)return;const Q=fe(D,E),se=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+z);const Z=i.get(se);if(se.version!==Z.__version||Q===!0){n.activeTexture(t.TEXTURE0+z);const Pe=et.getPrimaries(et.workingColorSpace),pe=E.colorSpace===Pr?null:et.getPrimaries(E.colorSpace),we=E.colorSpace===Pr||Pe===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let ie=0;ie<6;ie++)!Ne&&!oe?Me[ie]=y(E.image[ie],!0,r.maxCubemapSize):Me[ie]=oe?E.image[ie].image:E.image[ie],Me[ie]=qe(E,Me[ie]);const Ve=Me[0],Oe=s.convert(E.format,E.colorSpace),me=s.convert(E.type),We=x(E.internalFormat,Oe,me,E.colorSpace),k=E.isVideoTexture!==!0,xe=Z.__version===void 0||Q===!0,ae=se.dataReady;let Te=b(E,Ve);ee(t.TEXTURE_CUBE_MAP,E);let ue;if(Ne){k&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,We,Ve.width,Ve.height);for(let ie=0;ie<6;ie++){ue=Me[ie].mipmaps;for(let Ce=0;Ce<ue.length;Ce++){const $e=ue[Ce];E.format!==si?Oe!==null?k?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,$e.width,$e.height,Oe,$e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,We,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,$e.width,$e.height,Oe,me,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,We,$e.width,$e.height,0,Oe,me,$e.data)}}}else{if(ue=E.mipmaps,k&&xe){ue.length>0&&Te++;const ie=zt(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,We,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(oe){k?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Me[ie].width,Me[ie].height,Oe,me,Me[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,We,Me[ie].width,Me[ie].height,0,Oe,me,Me[ie].data);for(let Ce=0;Ce<ue.length;Ce++){const Mt=ue[Ce].image[ie].image;k?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Mt.width,Mt.height,Oe,me,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,We,Mt.width,Mt.height,0,Oe,me,Mt.data)}}else{k?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Oe,me,Me[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,We,Oe,me,Me[ie]);for(let Ce=0;Ce<ue.length;Ce++){const $e=ue[Ce];k?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Oe,me,$e.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,We,Oe,me,$e.image[ie])}}}g(E)&&p(t.TEXTURE_CUBE_MAP),Z.__version=se.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function le(D,E,z,Q,se,Z){const Pe=s.convert(z.format,z.colorSpace),pe=s.convert(z.type),we=x(z.internalFormat,Pe,pe,z.colorSpace),Ne=i.get(E),oe=i.get(z);if(oe.__renderTarget=E,!Ne.__hasExternalTextures){const Me=Math.max(1,E.width>>Z),Ve=Math.max(1,E.height>>Z);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,Z,we,Me,Ve,E.depth,0,Pe,pe,null):n.texImage2D(se,Z,we,Me,Ve,0,Pe,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),Je(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,se,oe.__webglTexture,0,_e(E)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,se,oe.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(D,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,D),E.depthBuffer){const Q=E.depthTexture,se=Q&&Q.isDepthTexture?Q.type:null,Z=S(E.stencilBuffer,se),Pe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=_e(E);Je(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,Z,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,Z,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Z,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,D)}else{const Q=E.textures;for(let se=0;se<Q.length;se++){const Z=Q[se],Pe=s.convert(Z.format,Z.colorSpace),pe=s.convert(Z.type),we=x(Z.internalFormat,Pe,pe,Z.colorSpace),Ne=_e(E);z&&Je(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,we,E.width,E.height):Je(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,we,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,we,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ne(E.depthTexture,0);const se=Q.__webglTexture,Z=_e(E);if(E.depthTexture.format===bl)Je(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(E.depthTexture.format===Al)Je(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Fe(D){const E=i.get(D),z=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const Q=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",se)};Q.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=Q}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Q=D.texture.mipmaps;Q&&Q.length>0?ve(E.__webglFramebuffer[0],D):ve(E.__webglFramebuffer,D)}else if(z){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=t.createRenderbuffer(),Ae(E.__webglDepthbuffer[Q],D,!1);else{const se=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Z)}}else{const Q=D.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Ae(E.__webglDepthbuffer,D,!1);else{const se=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(D,E,z){const Q=i.get(D);E!==void 0&&le(Q.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Fe(D)}function ke(D){const E=D.texture,z=i.get(D),Q=i.get(E);D.addEventListener("dispose",A);const se=D.textures,Z=D.isWebGLCubeRenderTarget===!0,Pe=se.length>1;if(Pe||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let we=0;we<E.mipmaps.length;we++)z.__webglFramebuffer[pe][we]=t.createFramebuffer()}else z.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)z.__webglFramebuffer[pe]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let pe=0,we=se.length;pe<we;pe++){const Ne=i.get(se[pe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&Je(D)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const we=se[pe];z.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const Ne=s.convert(we.format,we.colorSpace),oe=s.convert(we.type),Me=x(we.internalFormat,Ne,oe,we.colorSpace,D.isXRRenderTarget===!0),Ve=_e(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Me,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Ae(z.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ee(t.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)le(z.__webglFramebuffer[pe][we],D,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we);else le(z.__webglFramebuffer[pe],D,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(E)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let pe=0,we=se.length;pe<we;pe++){const Ne=se[pe],oe=i.get(Ne);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ee(t.TEXTURE_2D,Ne),le(z.__webglFramebuffer,D,Ne,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),g(Ne)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pe=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Q.__webglTexture),ee(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)le(z.__webglFramebuffer[we],D,E,t.COLOR_ATTACHMENT0,pe,we);else le(z.__webglFramebuffer,D,E,t.COLOR_ATTACHMENT0,pe,0);g(E)&&p(pe),n.unbindTexture()}D.depthBuffer&&Fe(D)}function I(D){const E=D.textures;for(let z=0,Q=E.length;z<Q;z++){const se=E[z];if(g(se)){const Z=_(D),Pe=i.get(se).__webglTexture;n.bindTexture(Z,Pe),p(Z),n.unbindTexture()}}}const ft=[],Ye=[];function nt(D){if(D.samples>0){if(Je(D)===!1){const E=D.textures,z=D.width,Q=D.height;let se=t.COLOR_BUFFER_BIT;const Z=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(D),pe=E.length>1;if(pe)for(let Ne=0;Ne<E.length;Ne++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const we=D.texture.mipmaps;we&&we.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const oe=i.get(E[Ne]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,z,Q,0,0,z,Q,se,t.NEAREST),l===!0&&(ft.length=0,Ye.length=0,ft.push(t.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ft.push(Z),Ye.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ye)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ft))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Ne=0;Ne<E.length;Ne++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const oe=i.get(E[Ne]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function _e(D){return Math.min(r.maxSamples,D.samples)}function Je(D){const E=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(D){const E=o.render.frame;u.get(D)!==E&&(u.set(D,E),D.update())}function qe(D,E){const z=D.colorSpace,Q=D.format,se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==$o&&z!==Pr&&(et.getTransfer(z)===vt?(Q!==si||se!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function zt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.setTexture2D=ne,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=F,this.rebindTextures=Be,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Je}function HU(t,e){function n(i,r=Pr){let s;const o=et.getTransfer(r);if(i===ji)return t.UNSIGNED_BYTE;if(i===Wg)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===mE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===hE)return t.BYTE;if(i===pE)return t.SHORT;if(i===wl)return t.UNSIGNED_SHORT;if(i===jg)return t.INT;if(i===Ps)return t.UNSIGNED_INT;if(i===ki)return t.FLOAT;if(i===Wl)return t.HALF_FLOAT;if(i===gE)return t.ALPHA;if(i===vE)return t.RGB;if(i===si)return t.RGBA;if(i===bl)return t.DEPTH_COMPONENT;if(i===Al)return t.DEPTH_STENCIL;if(i===xE)return t.RED;if(i===Yg)return t.RED_INTEGER;if(i===yE)return t.RG;if(i===$g)return t.RG_INTEGER;if(i===Kg)return t.RGBA_INTEGER;if(i===hu||i===pu||i===mu||i===gu)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lp||i===Fp||i===kp||i===Up)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Up)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Op||i===Bp||i===Vp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Op||i===Bp)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zp||i===Hp||i===Gp||i===jp||i===Wp||i===Xp||i===Yp||i===$p||i===Kp||i===qp||i===Zp||i===Jp||i===Qp||i===em)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$p)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===em)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vu||i===tm||i===nm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vu)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_E||i===im||i===rm||i===sm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===im)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const GU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yr({vertexShader:GU,fragmentShader:jU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ei(new bd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XU extends oa{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,m=null;const y=new WU,g=n.getContextAttributes();let p=null,_=null;const x=[],S=[],b=new at;let C=null;const A=new En;A.viewport=new ot;const R=new En;R.viewport=new ot;const T=[A,R],M=new r3;let L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=x[V];return Y===void 0&&(Y=new Wf,x[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=x[V];return Y===void 0&&(Y=new Wf,x[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=x[V];return Y===void 0&&(Y=new Wf,x[V]=Y),Y.getHandSpace()};function H(V){const Y=S.indexOf(V.inputSource);if(Y===-1)return;const re=x[Y];re!==void 0&&(re.update(V.inputSource,V.frame,c||o),re.dispatchEvent({type:V.type,data:V.inputSource}))}function te(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",ne);for(let V=0;V<x.length;V++){const Y=S[V];Y!==null&&(S[V]=null,x[V].disconnect(Y))}L=null,X=null,y.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,_=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",te),r.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,$=null,le=null;g.depth&&(le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=g.stencil?Al:bl,$=g.stencil?Tl:Ps);const Ae={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ns(f.textureWidth,f.textureHeight,{format:si,type:ji,depthTexture:new DE(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new Ns(h.framebufferWidth,h.framebufferHeight,{format:si,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ne(V){for(let Y=0;Y<V.removed.length;Y++){const re=V.removed[Y],$=S.indexOf(re);$>=0&&(S[$]=null,x[$].disconnect(re))}for(let Y=0;Y<V.added.length;Y++){const re=V.added[Y];let $=S.indexOf(re);if($===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=S.length){S.push(re),$=Ae;break}else if(S[Ae]===null){S[Ae]=re,$=Ae;break}if($===-1)break}const le=x[$];le&&le.connect(re)}}const q=new U,K=new U;function F(V,Y,re){q.setFromMatrixPosition(Y.matrixWorld),K.setFromMatrixPosition(re.matrixWorld);const $=q.distanceTo(K),le=Y.projectionMatrix.elements,Ae=re.projectionMatrix.elements,ve=le[14]/(le[10]-1),Fe=le[14]/(le[10]+1),Be=(le[9]+1)/le[5],ke=(le[9]-1)/le[5],I=(le[8]-1)/le[0],ft=(Ae[8]+1)/Ae[0],Ye=ve*I,nt=ve*ft,_e=$/(-I+ft),Je=_e*-I;if(Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Je),V.translateZ(_e),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),le[10]===-1)V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const be=ve+_e,qe=Fe+_e,zt=Ye-Je,D=nt+($-Je),E=Be*Fe/qe*be,z=ke*Fe/qe*be;V.projectionMatrix.makePerspective(zt,D,E,z,be,qe),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function W(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let Y=V.near,re=V.far;y.texture!==null&&(y.depthNear>0&&(Y=y.depthNear),y.depthFar>0&&(re=y.depthFar)),M.near=R.near=A.near=Y,M.far=R.far=A.far=re,(L!==M.near||X!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,X=M.far),A.layers.mask=V.layers.mask|2,R.layers.mask=V.layers.mask|4,M.layers.mask=A.layers.mask|R.layers.mask;const $=V.parent,le=M.cameras;W(M,$);for(let Ae=0;Ae<le.length;Ae++)W(le[Ae],$);le.length===2?F(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),N(V,M,$)};function N(V,Y,re){re===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ko*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let P=null;function ee(V,Y){if(u=Y.getViewerPose(c||o),m=Y,u!==null){const re=u.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let $=!1;re.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let ve=0;ve<re.length;ve++){const Fe=re[ve];let Be=null;if(h!==null)Be=h.getViewport(Fe);else{const I=d.getViewSubImage(f,Fe);Be=I.viewport,ve===0&&(e.setRenderTargetTextures(_,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(_))}let ke=T[ve];ke===void 0&&(ke=new En,ke.layers.enable(ve),ke.viewport=new ot,T[ve]=ke),ke.matrix.fromArray(Fe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Fe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Be.x,Be.y,Be.width,Be.height),ve===0&&(M.matrix.copy(ke.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),$===!0&&M.cameras.push(ke)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const ve=d.getDepthInformation(re[0]);ve&&ve.isValid&&ve.texture&&y.init(e,ve,r.renderState)}}for(let re=0;re<x.length;re++){const $=S[re],le=x[re];$!==null&&le!==void 0&&le.update($,Y,c||o)}P&&P(V,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),m=null}const fe=new zE;fe.setAnimationLoop(ee),this.setAnimationLoop=function(V){P=V},this.dispose=function(){}}}const as=new nn,YU=new Ie;function $U(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,CE(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,_,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),y(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===On&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===On&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=e.get(p),x=_.envMap,S=_.envMapRotation;x&&(g.envMap.value=x,as.copy(S),as.x*=-1,as.y*=-1,as.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),g.envMapRotation.value.setFromMatrix4(YU.makeRotationFromEuler(as)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=x*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KU(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function c(_,x){let S=r[_.id];S===void 0&&(m(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",g));const b=x.program;i.updateUBOMapping(_,b);const C=e.render.frame;s[_.id]!==C&&(f(_),s[_.id]=C)}function u(_){const x=d();_.__bindingPointIndex=x;const S=t.createBuffer(),b=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=r[_.id],S=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,A=S.length;C<A;C++){const R=Array.isArray(S[C])?S[C]:[S[C]];for(let T=0,M=R.length;T<M;T++){const L=R[T];if(h(L,C,T,b)===!0){const X=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let te=0;for(let ne=0;ne<H.length;ne++){const q=H[ne],K=y(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,X+te,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,te),te+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(_,x,S,b){const C=_.value,A=x+"_"+S;if(b[A]===void 0)return typeof C=="number"||typeof C=="boolean"?b[A]=C:b[A]=C.clone(),!0;{const R=b[A];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return b[A]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function m(_){const x=_.uniforms;let S=0;const b=16;for(let A=0,R=x.length;A<R;A++){const T=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,L=T.length;M<L;M++){const X=T[M],H=Array.isArray(X.value)?X.value:[X.value];for(let te=0,ne=H.length;te<ne;te++){const q=H[te],K=y(q),F=S%b,W=F%K.boundary,N=F+W;S+=W,N!==0&&b-N<K.storage&&(S+=b-N),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=K.storage}}}const C=S%b;return C>0&&(S+=b-C),_.__size=S,_.__cache={},this}function y(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){const x=_.target;x.removeEventListener("dispose",g);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class qU{constructor(e={}){const{canvas:n=DD(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),y=new Int32Array(4);let g=null,p=null;const _=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let b=!1;this._outputColorSpace=Tt;let C=0,A=0,R=null,T=-1,M=null;const L=new ot,X=new ot;let H=null;const te=new Xe(0);let ne=0,q=n.width,K=n.height,F=1,W=null,N=null;const P=new ot(0,0,q,K),ee=new ot(0,0,q,K);let fe=!1;const V=new n0;let Y=!1,re=!1;const $=new Ie,le=new Ie,Ae=new U,ve=new ot,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ke(){return R===null?F:1}let I=i;function ft(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gg}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",ie,!1),I===null){const O="webgl2";if(I=ft(O,w),I===null)throw ft(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ye,nt,_e,Je,be,qe,zt,D,E,z,Q,se,Z,Pe,pe,we,Ne,oe,Me,Ve,Oe,me,We,k;function xe(){Ye=new ok(I),Ye.init(),me=new HU(I,Ye),nt=new QF(I,Ye,e,me),_e=new VU(I,Ye),nt.reverseDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),Je=new ck(I),be=new AU,qe=new zU(I,Ye,_e,be,nt,me,Je),zt=new tk(S),D=new sk(S),E=new m3(I),We=new ZF(I,E),z=new ak(I,E,Je,We),Q=new dk(I,z,E,Je),Me=new uk(I,nt,qe),we=new ek(be),se=new bU(S,zt,D,Ye,nt,We,we),Z=new $U(S,be),Pe=new RU,pe=new FU(Ye),oe=new qF(S,zt,D,_e,Q,h,l),Ne=new OU(S,Q,nt),k=new KU(I,Je,nt,_e),Ve=new JF(I,Ye,Je),Oe=new lk(I,Ye,Je),Je.programs=se.programs,S.capabilities=nt,S.extensions=Ye,S.properties=be,S.renderLists=Pe,S.shadowMap=Ne,S.state=_e,S.info=Je}xe();const ae=new XU(S,I);this.xr=ae,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(q,K,!1))},this.getSize=function(w){return w.set(q,K)},this.setSize=function(w,O,G=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,K=O,n.width=Math.floor(w*F),n.height=Math.floor(O*F),G===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(q*F,K*F).floor()},this.setDrawingBufferSize=function(w,O,G){q=w,K=O,F=G,n.width=Math.floor(w*G),n.height=Math.floor(O*G),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,O,G,j){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,O,G,j),_e.viewport(L.copy(P).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(ee)},this.setScissor=function(w,O,G,j){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,O,G,j),_e.scissor(X.copy(ee).multiplyScalar(F).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){_e.setScissorTest(fe=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,G=!0){let j=0;if(w){let B=!1;if(R!==null){const de=R.texture.format;B=de===Kg||de===$g||de===Yg}if(B){const de=R.texture.type,ye=de===ji||de===Ps||de===wl||de===Tl||de===Wg||de===Xg,Re=oe.getClearColor(),Ee=oe.getClearAlpha(),He=Re.r,je=Re.g,Le=Re.b;ye?(m[0]=He,m[1]=je,m[2]=Le,m[3]=Ee,I.clearBufferuiv(I.COLOR,0,m)):(y[0]=He,y[1]=je,y[2]=Le,y[3]=Ee,I.clearBufferiv(I.COLOR,0,y))}else j|=I.COLOR_BUFFER_BIT}O&&(j|=I.DEPTH_BUFFER_BIT),G&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),oe.dispose(),Pe.dispose(),pe.dispose(),be.dispose(),zt.dispose(),D.dispose(),Q.dispose(),We.dispose(),k.dispose(),se.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",l0),ae.removeEventListener("sessionend",c0),Qr.stop()};function Te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=Je.autoReset,O=Ne.enabled,G=Ne.autoUpdate,j=Ne.needsUpdate,B=Ne.type;xe(),Je.autoReset=w,Ne.enabled=O,Ne.autoUpdate=G,Ne.needsUpdate=j,Ne.type=B}function ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ce(w){const O=w.target;O.removeEventListener("dispose",Ce),$e(O)}function $e(w){Mt(w),be.remove(w)}function Mt(w){const O=be.get(w).programs;O!==void 0&&(O.forEach(function(G){se.releaseProgram(G)}),w.isShaderMaterial&&se.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,G,j,B,de){O===null&&(O=Fe);const ye=B.isMesh&&B.matrixWorld.determinant()<0,Re=nw(w,O,G,j,B);_e.setMaterial(j,ye);let Ee=G.index,He=1;if(j.wireframe===!0){if(Ee=z.getWireframeAttribute(G),Ee===void 0)return;He=2}const je=G.drawRange,Le=G.attributes.position;let st=je.start*He,gt=(je.start+je.count)*He;de!==null&&(st=Math.max(st,de.start*He),gt=Math.min(gt,(de.start+de.count)*He)),Ee!==null?(st=Math.max(st,0),gt=Math.min(gt,Ee.count)):Le!=null&&(st=Math.max(st,0),gt=Math.min(gt,Le.count));const Ot=gt-st;if(Ot<0||Ot===1/0)return;We.setup(B,j,Re,G,Ee);let Et,yt=Ve;if(Ee!==null&&(Et=E.get(Ee),yt=Oe,yt.setIndex(Et)),B.isMesh)j.wireframe===!0?(_e.setLineWidth(j.wireframeLinewidth*ke()),yt.setMode(I.LINES)):yt.setMode(I.TRIANGLES);else if(B.isLine){let Ue=j.linewidth;Ue===void 0&&(Ue=1),_e.setLineWidth(Ue*ke()),B.isLineSegments?yt.setMode(I.LINES):B.isLineLoop?yt.setMode(I.LINE_LOOP):yt.setMode(I.LINE_STRIP)}else B.isPoints?yt.setMode(I.POINTS):B.isSprite&&yt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Io("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))yt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ue=B._multiDrawStarts,Nt=B._multiDrawCounts,ut=B._multiDrawCount,Bn=Ee?E.get(Ee).bytesPerElement:1,Os=be.get(j).currentProgram.getUniforms();for(let Vn=0;Vn<ut;Vn++)Os.setValue(I,"_gl_DrawID",Vn),yt.render(Ue[Vn]/Bn,Nt[Vn])}else if(B.isInstancedMesh)yt.renderInstances(st,Ot,B.count);else if(G.isInstancedBufferGeometry){const Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Nt=Math.min(G.instanceCount,Ue);yt.renderInstances(st,Ot,Nt)}else yt.render(st,Ot)};function ht(w,O,G){w.transparent===!0&&w.side===tr&&w.forceSinglePass===!1?(w.side=On,w.needsUpdate=!0,Kl(w,O,G),w.side=Xr,w.needsUpdate=!0,Kl(w,O,G),w.side=tr):Kl(w,O,G)}this.compile=function(w,O,G=null){G===null&&(G=w),p=pe.get(G),p.init(O),x.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==G&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const j=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const Re=de[ye];ht(Re,G,B),j.add(Re)}else ht(de,G,B),j.add(de)}),p=x.pop(),j},this.compileAsync=function(w,O,G=null){const j=this.compile(w,O,G);return new Promise(B=>{function de(){if(j.forEach(function(ye){be.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){B(w);return}setTimeout(de,10)}Ye.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ci=null;function Wi(w){ci&&ci(w)}function l0(){Qr.stop()}function c0(){Qr.start()}const Qr=new zE;Qr.setAnimationLoop(Wi),typeof self<"u"&&Qr.setContext(self),this.setAnimationLoop=function(w){ci=w,ae.setAnimationLoop(w),w===null?Qr.stop():Qr.start()},ae.addEventListener("sessionstart",l0),ae.addEventListener("sessionend",c0),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,O,R),p=pe.get(w,x.length),p.init(O),x.push(p),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V.setFromProjectionMatrix(le),re=this.localClippingEnabled,Y=we.init(this.clippingPlanes,re),g=Pe.get(w,_.length),g.init(),_.push(g),ae.enabled===!0&&ae.isPresenting===!0){const de=S.xr.getDepthSensingMesh();de!==null&&Pd(de,O,-1/0,S.sortObjects)}Pd(w,O,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(W,N),Be=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Be&&oe.addToRenderList(g,w),this.info.render.frame++,Y===!0&&we.beginShadows();const G=p.state.shadowsArray;Ne.render(G,w,O),Y===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,B=g.transmissive;if(p.setupLights(),O.isArrayCamera){const de=O.cameras;if(B.length>0)for(let ye=0,Re=de.length;ye<Re;ye++){const Ee=de[ye];d0(j,B,w,Ee)}Be&&oe.render(w);for(let ye=0,Re=de.length;ye<Re;ye++){const Ee=de[ye];u0(g,w,Ee,Ee.viewport)}}else B.length>0&&d0(j,B,w,O),Be&&oe.render(w),u0(g,w,O);R!==null&&A===0&&(qe.updateMultisampleRenderTarget(R),qe.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(S,w,O),We.resetDefaultState(),T=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],Y===!0&&we.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Pd(w,O,G,j){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||V.intersectsSprite(w)){j&&ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(le);const ye=Q.update(w),Re=w.material;Re.visible&&g.push(w,ye,Re,G,ve.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||V.intersectsObject(w))){const ye=Q.update(w),Re=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ve.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ve.copy(ye.boundingSphere.center)),ve.applyMatrix4(w.matrixWorld).applyMatrix4(le)),Array.isArray(Re)){const Ee=ye.groups;for(let He=0,je=Ee.length;He<je;He++){const Le=Ee[He],st=Re[Le.materialIndex];st&&st.visible&&g.push(w,ye,st,G,ve.z,Le)}}else Re.visible&&g.push(w,ye,Re,G,ve.z,null)}}const de=w.children;for(let ye=0,Re=de.length;ye<Re;ye++)Pd(de[ye],O,G,j)}function u0(w,O,G,j){const B=w.opaque,de=w.transmissive,ye=w.transparent;p.setupLightsView(G),Y===!0&&we.setGlobalState(S.clippingPlanes,G),j&&_e.viewport(L.copy(j)),B.length>0&&$l(B,O,G),de.length>0&&$l(de,O,G),ye.length>0&&$l(ye,O,G),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function d0(w,O,G,j){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Ns(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Wl:ji,minFilter:_s,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const de=p.state.transmissionRenderTarget[j.id],ye=j.viewport||L;de.setSize(ye.z*S.transmissionResolutionScale,ye.w*S.transmissionResolutionScale);const Re=S.getRenderTarget(),Ee=S.getActiveCubeFace(),He=S.getActiveMipmapLevel();S.setRenderTarget(de),S.getClearColor(te),ne=S.getClearAlpha(),ne<1&&S.setClearColor(16777215,.5),S.clear(),Be&&oe.render(G);const je=S.toneMapping;S.toneMapping=Hr;const Le=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),Y===!0&&we.setGlobalState(S.clippingPlanes,j),$l(w,G,j),qe.updateMultisampleRenderTarget(de),qe.updateRenderTargetMipmap(de),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let gt=0,Ot=O.length;gt<Ot;gt++){const Et=O[gt],yt=Et.object,Ue=Et.geometry,Nt=Et.material,ut=Et.group;if(Nt.side===tr&&yt.layers.test(j.layers)){const Bn=Nt.side;Nt.side=On,Nt.needsUpdate=!0,f0(yt,G,j,Ue,Nt,ut),Nt.side=Bn,Nt.needsUpdate=!0,st=!0}}st===!0&&(qe.updateMultisampleRenderTarget(de),qe.updateRenderTargetMipmap(de))}S.setRenderTarget(Re,Ee,He),S.setClearColor(te,ne),Le!==void 0&&(j.viewport=Le),S.toneMapping=je}function $l(w,O,G){const j=O.isScene===!0?O.overrideMaterial:null;for(let B=0,de=w.length;B<de;B++){const ye=w[B],Re=ye.object,Ee=ye.geometry,He=ye.group;let je=ye.material;je.allowOverride===!0&&j!==null&&(je=j),Re.layers.test(G.layers)&&f0(Re,O,G,Ee,je,He)}}function f0(w,O,G,j,B,de){w.onBeforeRender(S,O,G,j,B,de),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(S,O,G,j,w,de),B.transparent===!0&&B.side===tr&&B.forceSinglePass===!1?(B.side=On,B.needsUpdate=!0,S.renderBufferDirect(G,O,j,B,w,de),B.side=Xr,B.needsUpdate=!0,S.renderBufferDirect(G,O,j,B,w,de),B.side=tr):S.renderBufferDirect(G,O,j,B,w,de),w.onAfterRender(S,O,G,j,B,de)}function Kl(w,O,G){O.isScene!==!0&&(O=Fe);const j=be.get(w),B=p.state.lights,de=p.state.shadowsArray,ye=B.state.version,Re=se.getParameters(w,B.state,de,O,G),Ee=se.getProgramCacheKey(Re);let He=j.programs;j.environment=w.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(w.isMeshStandardMaterial?D:zt).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,He===void 0&&(w.addEventListener("dispose",Ce),He=new Map,j.programs=He);let je=He.get(Ee);if(je!==void 0){if(j.currentProgram===je&&j.lightsStateVersion===ye)return p0(w,Re),je}else Re.uniforms=se.getUniforms(w),w.onBeforeCompile(Re,S),je=se.acquireProgram(Re,Ee),He.set(Ee,je),j.uniforms=Re.uniforms;const Le=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=we.uniform),p0(w,Re),j.needsLights=rw(w),j.lightsStateVersion=ye,j.needsLights&&(Le.ambientLightColor.value=B.state.ambient,Le.lightProbe.value=B.state.probe,Le.directionalLights.value=B.state.directional,Le.directionalLightShadows.value=B.state.directionalShadow,Le.spotLights.value=B.state.spot,Le.spotLightShadows.value=B.state.spotShadow,Le.rectAreaLights.value=B.state.rectArea,Le.ltc_1.value=B.state.rectAreaLTC1,Le.ltc_2.value=B.state.rectAreaLTC2,Le.pointLights.value=B.state.point,Le.pointLightShadows.value=B.state.pointShadow,Le.hemisphereLights.value=B.state.hemi,Le.directionalShadowMap.value=B.state.directionalShadowMap,Le.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Le.spotShadowMap.value=B.state.spotShadowMap,Le.spotLightMatrix.value=B.state.spotLightMatrix,Le.spotLightMap.value=B.state.spotLightMap,Le.pointShadowMap.value=B.state.pointShadowMap,Le.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=je,j.uniformsList=null,je}function h0(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=xu.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function p0(w,O){const G=be.get(w);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function nw(w,O,G,j,B){O.isScene!==!0&&(O=Fe),qe.resetTextureUnits();const de=O.fog,ye=j.isMeshStandardMaterial?O.environment:null,Re=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:$o,Ee=(j.isMeshStandardMaterial?D:zt).get(j.envMap||ye),He=j.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,je=!!G.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,gt=!!G.morphAttributes.color;let Ot=Hr;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ot=S.toneMapping);const Et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,yt=Et!==void 0?Et.length:0,Ue=be.get(j),Nt=p.state.lights;if(Y===!0&&(re===!0||w!==M)){const gn=w===M&&j.id===T;we.setState(j,w,gn)}let ut=!1;j.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Nt.state.version||Ue.outputColorSpace!==Re||B.isBatchedMesh&&Ue.batching===!1||!B.isBatchedMesh&&Ue.batching===!0||B.isBatchedMesh&&Ue.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ue.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ue.instancing===!1||!B.isInstancedMesh&&Ue.instancing===!0||B.isSkinnedMesh&&Ue.skinning===!1||!B.isSkinnedMesh&&Ue.skinning===!0||B.isInstancedMesh&&Ue.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ue.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ue.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ue.instancingMorph===!1&&B.morphTexture!==null||Ue.envMap!==Ee||j.fog===!0&&Ue.fog!==de||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==we.numPlanes||Ue.numIntersection!==we.numIntersection)||Ue.vertexAlphas!==He||Ue.vertexTangents!==je||Ue.morphTargets!==Le||Ue.morphNormals!==st||Ue.morphColors!==gt||Ue.toneMapping!==Ot||Ue.morphTargetsCount!==yt)&&(ut=!0):(ut=!0,Ue.__version=j.version);let Bn=Ue.currentProgram;ut===!0&&(Bn=Kl(j,O,B));let Os=!1,Vn=!1,da=!1;const Ct=Bn.getUniforms(),qn=Ue.uniforms;if(_e.useProgram(Bn.program)&&(Os=!0,Vn=!0,da=!0),j.id!==T&&(T=j.id,Vn=!0),Os||M!==w){_e.buffers.depth.getReversed()?($.copy(w.projectionMatrix),LD($),FD($),Ct.setValue(I,"projectionMatrix",$)):Ct.setValue(I,"projectionMatrix",w.projectionMatrix),Ct.setValue(I,"viewMatrix",w.matrixWorldInverse);const Cn=Ct.map.cameraPosition;Cn!==void 0&&Cn.setValue(I,Ae.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&Ct.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ct.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Vn=!0,da=!0)}if(B.isSkinnedMesh){Ct.setOptional(I,B,"bindMatrix"),Ct.setOptional(I,B,"bindMatrixInverse");const gn=B.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ct.setValue(I,"boneTexture",gn.boneTexture,qe))}B.isBatchedMesh&&(Ct.setOptional(I,B,"batchingTexture"),Ct.setValue(I,"batchingTexture",B._matricesTexture,qe),Ct.setOptional(I,B,"batchingIdTexture"),Ct.setValue(I,"batchingIdTexture",B._indirectTexture,qe),Ct.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&Ct.setValue(I,"batchingColorTexture",B._colorsTexture,qe));const Zn=G.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&Me.update(B,G,Bn),(Vn||Ue.receiveShadow!==B.receiveShadow)&&(Ue.receiveShadow=B.receiveShadow,Ct.setValue(I,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(qn.envMap.value=Ee,qn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(qn.envMapIntensity.value=O.environmentIntensity),Vn&&(Ct.setValue(I,"toneMappingExposure",S.toneMappingExposure),Ue.needsLights&&iw(qn,da),de&&j.fog===!0&&Z.refreshFogUniforms(qn,de),Z.refreshMaterialUniforms(qn,j,F,K,p.state.transmissionRenderTarget[w.id]),xu.upload(I,h0(Ue),qn,qe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(xu.upload(I,h0(Ue),qn,qe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ct.setValue(I,"center",B.center),Ct.setValue(I,"modelViewMatrix",B.modelViewMatrix),Ct.setValue(I,"normalMatrix",B.normalMatrix),Ct.setValue(I,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const gn=j.uniformsGroups;for(let Cn=0,Nd=gn.length;Cn<Nd;Cn++){const es=gn[Cn];k.update(es,Bn),k.bind(es,Bn)}}return Bn}function iw(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function rw(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,O,G){const j=be.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),be.get(w.texture).__webglTexture=O,be.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:G,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const G=be.get(w);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const sw=I.createFramebuffer();this.setRenderTarget=function(w,O=0,G=0){R=w,C=O,A=G;let j=!0,B=null,de=!1,ye=!1;if(w){const Ee=be.get(w);if(Ee.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(Ee.__webglFramebuffer===void 0)qe.setupRenderTarget(w);else if(Ee.__hasExternalTextures)qe.rebindTextures(w,be.get(w.texture).__webglTexture,be.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Le=w.depthTexture;if(Ee.__boundDepthTexture!==Le){if(Le!==null&&be.has(Le)&&(w.width!==Le.image.width||w.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(w)}}const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ye=!0);const je=be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[O])?B=je[O][G]:B=je[O],de=!0):w.samples>0&&qe.useMultisampledRTT(w)===!1?B=be.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?B=je[G]:B=je,L.copy(w.viewport),X.copy(w.scissor),H=w.scissorTest}else L.copy(P).multiplyScalar(F).floor(),X.copy(ee).multiplyScalar(F).floor(),H=fe;if(G!==0&&(B=sw),_e.bindFramebuffer(I.FRAMEBUFFER,B)&&j&&_e.drawBuffers(w,B),_e.viewport(L),_e.scissor(X),_e.setScissorTest(H),de){const Ee=be.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,G)}else if(ye){const Ee=be.get(w.texture),He=O;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,G,He)}else if(w!==null&&G!==0){const Ee=be.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ee.__webglTexture,G)}T=-1},this.readRenderTargetPixels=function(w,O,G,j,B,de,ye,Re=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){_e.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const He=w.textures[Re],je=He.format,Le=He.type;if(!nt.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-j&&G>=0&&G<=w.height-B&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Re),I.readPixels(O,G,j,B,me.convert(je),me.convert(Le),de))}finally{const He=R!==null?be.get(R).__webglFramebuffer:null;_e.bindFramebuffer(I.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(w,O,G,j,B,de,ye,Re=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(O>=0&&O<=w.width-j&&G>=0&&G<=w.height-B){_e.bindFramebuffer(I.FRAMEBUFFER,Ee);const He=w.textures[Re],je=He.format,Le=He.type;if(!nt.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,st),I.bufferData(I.PIXEL_PACK_BUFFER,de.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Re),I.readPixels(O,G,j,B,me.convert(je),me.convert(Le),0);const gt=R!==null?be.get(R).__webglFramebuffer:null;_e.bindFramebuffer(I.FRAMEBUFFER,gt);const Ot=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ID(I,Ot,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,st),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,de),I.deleteBuffer(st),I.deleteSync(Ot),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,G=0){const j=Math.pow(2,-G),B=Math.floor(w.image.width*j),de=Math.floor(w.image.height*j),ye=O!==null?O.x:0,Re=O!==null?O.y:0;qe.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ye,Re,B,de),_e.unbindTexture()};const ow=I.createFramebuffer(),aw=I.createFramebuffer();this.copyTextureToTexture=function(w,O,G=null,j=null,B=0,de=null){de===null&&(B!==0?(Io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=B,B=0):de=0);let ye,Re,Ee,He,je,Le,st,gt,Ot;const Et=w.isCompressedTexture?w.mipmaps[de]:w.image;if(G!==null)ye=G.max.x-G.min.x,Re=G.max.y-G.min.y,Ee=G.isBox3?G.max.z-G.min.z:1,He=G.min.x,je=G.min.y,Le=G.isBox3?G.min.z:0;else{const Zn=Math.pow(2,-B);ye=Math.floor(Et.width*Zn),Re=Math.floor(Et.height*Zn),w.isDataArrayTexture?Ee=Et.depth:w.isData3DTexture?Ee=Math.floor(Et.depth*Zn):Ee=1,He=0,je=0,Le=0}j!==null?(st=j.x,gt=j.y,Ot=j.z):(st=0,gt=0,Ot=0);const yt=me.convert(O.format),Ue=me.convert(O.type);let Nt;O.isData3DTexture?(qe.setTexture3D(O,0),Nt=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(qe.setTexture2DArray(O,0),Nt=I.TEXTURE_2D_ARRAY):(qe.setTexture2D(O,0),Nt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const ut=I.getParameter(I.UNPACK_ROW_LENGTH),Bn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Os=I.getParameter(I.UNPACK_SKIP_PIXELS),Vn=I.getParameter(I.UNPACK_SKIP_ROWS),da=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,He),I.pixelStorei(I.UNPACK_SKIP_ROWS,je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Le);const Ct=w.isDataArrayTexture||w.isData3DTexture,qn=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Zn=be.get(w),gn=be.get(O),Cn=be.get(Zn.__renderTarget),Nd=be.get(gn.__renderTarget);_e.bindFramebuffer(I.READ_FRAMEBUFFER,Cn.__webglFramebuffer),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,Nd.__webglFramebuffer);for(let es=0;es<Ee;es++)Ct&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(w).__webglTexture,B,Le+es),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(O).__webglTexture,de,Ot+es)),I.blitFramebuffer(He,je,ye,Re,st,gt,ye,Re,I.DEPTH_BUFFER_BIT,I.NEAREST);_e.bindFramebuffer(I.READ_FRAMEBUFFER,null),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||be.has(w)){const Zn=be.get(w),gn=be.get(O);_e.bindFramebuffer(I.READ_FRAMEBUFFER,ow),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,aw);for(let Cn=0;Cn<Ee;Cn++)Ct?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zn.__webglTexture,B,Le+Cn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zn.__webglTexture,B),qn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gn.__webglTexture,de,Ot+Cn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gn.__webglTexture,de),B!==0?I.blitFramebuffer(He,je,ye,Re,st,gt,ye,Re,I.COLOR_BUFFER_BIT,I.NEAREST):qn?I.copyTexSubImage3D(Nt,de,st,gt,Ot+Cn,He,je,ye,Re):I.copyTexSubImage2D(Nt,de,st,gt,He,je,ye,Re);_e.bindFramebuffer(I.READ_FRAMEBUFFER,null),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else qn?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Nt,de,st,gt,Ot,ye,Re,Ee,yt,Ue,Et.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Nt,de,st,gt,Ot,ye,Re,Ee,yt,Et.data):I.texSubImage3D(Nt,de,st,gt,Ot,ye,Re,Ee,yt,Ue,Et):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,de,st,gt,ye,Re,yt,Ue,Et.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,de,st,gt,Et.width,Et.height,yt,Et.data):I.texSubImage2D(I.TEXTURE_2D,de,st,gt,ye,Re,yt,Ue,Et);I.pixelStorei(I.UNPACK_ROW_LENGTH,ut),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Os),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,da),de===0&&O.generateMipmaps&&I.generateMipmap(Nt),_e.unbindTexture()},this.copyTextureToTexture3D=function(w,O,G=null,j=null,B=0){return Io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,G,j,B)},this.initRenderTarget=function(w){be.get(w).__webglFramebuffer===void 0&&qe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?qe.setTextureCube(w,0):w.isData3DTexture?qe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?qe.setTexture2DArray(w,0):qe.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){C=0,A=0,R=null,_e.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var ii=Uint8Array,wo=Uint16Array,ZU=Int32Array,XE=new ii([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),YE=new ii([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),JU=new ii([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$E=function(t,e){for(var n=new wo(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];for(var r=new ZU(n[30]),i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return{b:n,r}},KE=$E(XE,2),qE=KE.b,QU=KE.r;qE[28]=258,QU[258]=28;var eO=$E(YE,0),tO=eO.b,dm=new wo(32768);for(var bt=0;bt<32768;++bt){var Mr=(bt&43690)>>1|(bt&21845)<<1;Mr=(Mr&52428)>>2|(Mr&13107)<<2,Mr=(Mr&61680)>>4|(Mr&3855)<<4,dm[bt]=((Mr&65280)>>8|(Mr&255)<<8)>>1}var Qa=function(t,e,n){for(var i=t.length,r=0,s=new wo(e);r<i;++r)t[r]&&++s[t[r]-1];var o=new wo(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(n){a=new wo(1<<e);var l=15-e;for(r=0;r<i;++r)if(t[r])for(var c=r<<4|t[r],u=e-t[r],d=o[t[r]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[dm[d]>>l]=c}else for(a=new wo(i),r=0;r<i;++r)t[r]&&(a[r]=dm[o[t[r]-1]++]>>15-t[r]);return a},Yl=new ii(288);for(var bt=0;bt<144;++bt)Yl[bt]=8;for(var bt=144;bt<256;++bt)Yl[bt]=9;for(var bt=256;bt<280;++bt)Yl[bt]=7;for(var bt=280;bt<288;++bt)Yl[bt]=8;var ZE=new ii(32);for(var bt=0;bt<32;++bt)ZE[bt]=5;var nO=Qa(Yl,9,1),iO=Qa(ZE,5,1),rh=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},pi=function(t,e,n){var i=e/8|0;return(t[i]|t[i+1]<<8)>>(e&7)&n},sh=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},rO=function(t){return(t+7)/8|0},sO=function(t,e,n){return(n==null||n>t.length)&&(n=t.length),new ii(t.subarray(e,n))},oO=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],vi=function(t,e,n){var i=new Error(e||oO[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,vi),!n)throw i;return i},aO=function(t,e,n,i){var r=t.length,s=0;if(!r||e.f&&!e.l)return n||new ii(0);var o=!n,a=o||e.i!=2,l=e.i;o&&(n=new ii(r*3));var c=function(Fe){var Be=n.length;if(Fe>Be){var ke=new ii(Math.max(Be*2,Fe));ke.set(n),n=ke}},u=e.f||0,d=e.p||0,f=e.b||0,h=e.l,m=e.d,y=e.m,g=e.n,p=r*8;do{if(!h){u=pi(t,d,1);var _=pi(t,d+1,3);if(d+=3,_)if(_==1)h=nO,m=iO,y=9,g=5;else if(_==2){var C=pi(t,d,31)+257,A=pi(t,d+10,15)+4,R=C+pi(t,d+5,31)+1;d+=14;for(var T=new ii(R),M=new ii(19),L=0;L<A;++L)M[JU[L]]=pi(t,d+L*3,7);d+=A*3;for(var X=rh(M),H=(1<<X)-1,te=Qa(M,X,1),L=0;L<R;){var ne=te[pi(t,d,H)];d+=ne&15;var x=ne>>4;if(x<16)T[L++]=x;else{var q=0,K=0;for(x==16?(K=3+pi(t,d,3),d+=2,q=T[L-1]):x==17?(K=3+pi(t,d,7),d+=3):x==18&&(K=11+pi(t,d,127),d+=7);K--;)T[L++]=q}}var F=T.subarray(0,C),W=T.subarray(C);y=rh(F),g=rh(W),h=Qa(F,y,1),m=Qa(W,g,1)}else vi(1);else{var x=rO(d)+4,S=t[x-4]|t[x-3]<<8,b=x+S;if(b>r){l&&vi(0);break}a&&c(f+S),n.set(t.subarray(x,b),f),e.b=f+=S,e.p=d=b*8,e.f=u;continue}if(d>p){l&&vi(0);break}}a&&c(f+131072);for(var N=(1<<y)-1,P=(1<<g)-1,ee=d;;ee=d){var q=h[sh(t,d)&N],fe=q>>4;if(d+=q&15,d>p){l&&vi(0);break}if(q||vi(2),fe<256)n[f++]=fe;else if(fe==256){ee=d,h=null;break}else{var V=fe-254;if(fe>264){var L=fe-257,Y=XE[L];V=pi(t,d,(1<<Y)-1)+qE[L],d+=Y}var re=m[sh(t,d)&P],$=re>>4;re||vi(3),d+=re&15;var W=tO[$];if($>3){var Y=YE[$];W+=sh(t,d)&(1<<Y)-1,d+=Y}if(d>p){l&&vi(0);break}a&&c(f+131072);var le=f+V;if(f<W){var Ae=s-W,ve=Math.min(W,le);for(Ae+f<0&&vi(3);f<ve;++f)n[f]=i[Ae+f]}for(;f<le;++f)n[f]=n[f-W]}}e.l=h,e.p=ee,e.b=f,e.f=u,h&&(u=1,e.m=y,e.d=m,e.n=g)}while(!u);return f!=n.length&&o?sO(n,0,f):n.subarray(0,f)},lO=new ii(0),cO=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&vi(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&vi(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function uO(t,e){return aO(t.subarray(cO(t,e),-4),{i:2},e,e)}var dO=typeof TextDecoder<"u"&&new TextDecoder,fO=0;try{dO.decode(lO,{stream:!0}),fO=1}catch{}function JE(t,e,n){const i=n.length-t-1;if(e>=n[i])return i-1;if(e<=n[t])return t;let r=t,s=i,o=Math.floor((r+s)/2);for(;e<n[o]||e>=n[o+1];)e<n[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function hO(t,e,n,i){const r=[],s=[],o=[];r[0]=1;for(let a=1;a<=n;++a){s[a]=e-i[t+1-a],o[a]=i[t+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],d=s[a-c],f=r[c]/(u+d);r[c]=l+u*f,l=d*f}r[a]=l}return r}function pO(t,e,n,i){const r=JE(t,i,e),s=hO(r,i,t,e),o=new ot(0,0,0,0);for(let a=0;a<=t;++a){const l=n[r-t+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function mO(t,e,n,i,r){const s=[];for(let d=0;d<=n;++d)s[d]=0;const o=[];for(let d=0;d<=i;++d)o[d]=s.slice(0);const a=[];for(let d=0;d<=n;++d)a[d]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let d=1;d<=n;++d){l[d]=e-r[t+1-d],c[d]=r[t+d]-e;let f=0;for(let h=0;h<d;++h){const m=c[h+1],y=l[d-h];a[d][h]=m+y;const g=a[h][d-1]/a[d][h];a[h][d]=f+m*g,f=y*g}a[d][d]=f}for(let d=0;d<=n;++d)o[0][d]=a[d][n];for(let d=0;d<=n;++d){let f=0,h=1;const m=[];for(let y=0;y<=n;++y)m[y]=s.slice(0);m[0][0]=1;for(let y=1;y<=i;++y){let g=0;const p=d-y,_=n-y;d>=y&&(m[h][0]=m[f][0]/a[_+1][p],g=m[h][0]*a[p][_]);const x=p>=-1?1:-p,S=d-1<=_?y-1:n-d;for(let C=x;C<=S;++C)m[h][C]=(m[f][C]-m[f][C-1])/a[_+1][p+C],g+=m[h][C]*a[p+C][_];d<=_&&(m[h][y]=-m[f][y-1]/a[_+1][d],g+=m[h][y]*a[d][_]),o[y][d]=g;const b=f;f=h,h=b}}let u=n;for(let d=1;d<=i;++d){for(let f=0;f<=n;++f)o[d][f]*=u;u*=n-d}return o}function gO(t,e,n,i,r){const s=r<t?r:t,o=[],a=JE(t,i,e),l=mO(a,i,t,s,e),c=[];for(let u=0;u<n.length;++u){const d=n[u].clone(),f=d.w;d.x*=f,d.y*=f,d.z*=f,c[u]=d}for(let u=0;u<=s;++u){const d=c[a-t].clone().multiplyScalar(l[u][0]);for(let f=1;f<=t;++f)d.add(c[a-t+f].clone().multiplyScalar(l[u][f]));o[u]=d}for(let u=s+1;u<=r+1;++u)o[u]=new ot(0,0,0);return o}function vO(t,e){let n=1;for(let r=2;r<=t;++r)n*=r;let i=1;for(let r=2;r<=e;++r)i*=r;for(let r=2;r<=t-e;++r)i*=r;return n/i}function xO(t){const e=t.length,n=[],i=[];for(let s=0;s<e;++s){const o=t[s];n[s]=new U(o.x,o.y,o.z),i[s]=o.w}const r=[];for(let s=0;s<e;++s){const o=n[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(vO(s,a)*i[a]));r[s]=o.divideScalar(i[0])}return r}function yO(t,e,n,i,r){const s=gO(t,e,n,i,r);return xO(s)}class _O extends mI{constructor(e,n,i,r,s){super();const o=n?n.length-1:0,a=i?i.length:0;this.degree=e,this.knots=n,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||o;for(let l=0;l<a;++l){const c=i[l];this.controlPoints[l]=new ot(c.x,c.y,c.z,c.w)}}getPoint(e,n=new U){const i=n,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=pO(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),i.set(s.x,s.y,s.z)}getTangent(e,n=new U){const i=n,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=yO(this.degree,this.knots,this.controlPoints,r,1);return i.copy(s[1]).normalize(),i}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(n=>n.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(n=>new ot(n[0],n[1],n[2],n[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let tt,Gt,yn;class SO extends Is{constructor(e){super(e)}load(e,n,i,r){const s=this,o=s.path===""?i3.extractUrlBase(e):s.path,a=new KI(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{n(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e,n){if(AO(e))tt=new bO().parse(e);else{const r=tw(e);if(!CO(r))throw new Error("THREE.FBXLoader: Unknown format.");if(h_(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+h_(r));tt=new TO().parse(r)}const i=new ZI(this.manager).setPath(this.resourcePath||n).setCrossOrigin(this.crossOrigin);return new MO(i,this.manager).parse(tt)}}class MO{constructor(e,n){this.textureLoader=e,this.manager=n}parse(){Gt=this.parseConnections();const e=this.parseImages(),n=this.parseTextures(e),i=this.parseMaterials(n),r=this.parseDeformers(),s=new EO().parse(r);return this.parseScene(r,s,i),yn}parseConnections(){const e=new Map;return"Connections"in tt&&tt.Connections.connections.forEach(function(i){const r=i[0],s=i[1],o=i[2];e.has(r)||e.set(r,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},n={};if("Video"in tt.Objects){const i=tt.Objects.Video;for(const r in i){const s=i[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(i[r]);n[s.RelativeFilename||s.Filename]=c}}}}for(const i in e){const r=e[i];n[r]!==void 0?e[i]=n[r]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const n=e.Content,i=e.RelativeFilename||e.Filename,r=i.slice(i.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),s="image/tga";break;case"webp":s="image/webp";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof n=="string")return"data:"+s+";base64,"+n;{const o=new Uint8Array(n);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const n=new Map;if("Texture"in tt.Objects){const i=tt.Objects.Texture;for(const r in i){const s=this.parseTexture(i[r],e);n.set(parseInt(r),s)}}return n}parseTexture(e,n){const i=this.loadTexture(e,n);i.ID=e.id,i.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(i.wrapS=o===0?El:sr,i.wrapT=a===0?El:sr,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(e,n){const i=e.FileName.split(".").pop().toLowerCase();let r=this.manager.getHandler(`.${i}`);r===null&&(r=this.textureLoader);const s=r.path;s||r.setPath(this.textureLoader.path);const o=Gt.get(e.id).children;let a;if(o!==void 0&&o.length>0&&n[o[0].ID]!==void 0&&(a=n[o[0].ID],(a.indexOf("blob:")===0||a.indexOf("data:")===0)&&r.setPath(void 0)),a===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new an;const l=r.load(a);return r.setPath(s),l}parseMaterials(e){const n=new Map;if("Material"in tt.Objects){const i=tt.Objects.Material;for(const r in i){const s=this.parseMaterial(i[r],e);s!==null&&n.set(parseInt(r),s)}}return n}parseMaterial(e,n){const i=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Gt.has(i))return null;const o=this.parseParameters(e,n,i);let a;switch(s.toLowerCase()){case"phong":a=new Hc;break;case"lambert":a=new LI;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Hc;break}return a.setValues(o),a.name=r,a}parseParameters(e,n,i){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=et.colorSpaceToWorking(new Xe().fromArray(e.Diffuse.value),Tt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=et.colorSpaceToWorking(new Xe().fromArray(e.DiffuseColor.value),Tt)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=et.colorSpaceToWorking(new Xe().fromArray(e.Emissive.value),Tt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=et.colorSpaceToWorking(new Xe().fromArray(e.EmissiveColor.value),Tt)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),r.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(r.opacity===1||r.opacity===0)&&(r.opacity=e.Opacity?parseFloat(e.Opacity.value):null,r.opacity===null&&(r.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=et.colorSpaceToWorking(new Xe().fromArray(e.Specular.value),Tt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=et.colorSpaceToWorking(new Xe().fromArray(e.SpecularColor.value),Tt));const s=this;return Gt.get(i).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(n,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(n,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(n,o.ID),r.map!==void 0&&(r.map.colorSpace=Tt);break;case"DisplacementColor":r.displacementMap=s.getTexture(n,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(n,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=Tt);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(n,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(n,o.ID),r.envMap!==void 0&&(r.envMap.mapping=qu,r.envMap.colorSpace=Tt);break;case"SpecularColor":r.specularMap=s.getTexture(n,o.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=Tt);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(n,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,n){return"LayeredTexture"in tt.Objects&&n in tt.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),n=Gt.get(n).children[0].ID),e.get(n)}parseDeformers(){const e={},n={};if("Deformer"in tt.Objects){const i=tt.Objects.Deformer;for(const r in i){const s=i[r],o=Gt.get(parseInt(r));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,i);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(o,i),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),n[r]=a}}}return{skeletons:e,morphTargets:n}}parseSkeleton(e,n){const i=[];return e.children.forEach(function(r){const s=n[r.ID];if(s.attrType!=="Cluster")return;const o={ID:r.ID,indices:[],weights:[],transformLink:new Ie().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),i.push(o)}),{rawBones:i,bones:[]}}parseMorphTargets(e,n){const i=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],o=n[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Gt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(a)}return i}parseScene(e,n,i){yn=new Mo;const r=this.parseModels(e.skeletons,n,i),s=tt.Objects.Model,o=this;r.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),Gt.get(l.ID).parents.forEach(function(d){const f=r.get(d.ID);f!==void 0&&f.add(l)}),l.parent===null&&yn.add(l)}),this.bindSkeleton(e.skeletons,n,r),this.addGlobalSceneSettings(),yn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=ew(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new wO().parse();yn.children.length===1&&yn.children[0].isGroup&&(yn.children[0].animations=a,yn=yn.children[0]),yn.animations=a}parseModels(e,n,i){const r=new Map,s=tt.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=Gt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,n,i);break;case"NurbsCurve":u=this.createCurve(c,n);break;case"LimbNode":case"Root":u=new am;break;case"Null":default:u=new Mo;break}u.name=l.attrName?dt.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=a}this.getTransformData(u,l),r.set(a,u)}return r}buildSkeleton(e,n,i,r){let s=null;return e.parents.forEach(function(o){for(const a in n){const l=n[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const d=s;s=new am,s.matrixWorld.copy(c.transformLink),s.name=r?dt.sanitizeNodeName(r):"",s.userData.originalName=r,s.ID=i,l.bones[u]=s,d!==null&&s.add(d)}})}}),s}createCamera(e){let n,i;if(e.children.forEach(function(r){const s=tt.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)n=new Pt;else{let r=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(r=1);let s=1;i.NearPlane!==void 0&&(s=i.NearPlane.value/1e3);let o=1e3;i.FarPlane!==void 0&&(o=i.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(a=i.AspectWidth.value,l=i.AspectHeight.value);const c=a/l;let u=45;i.FieldOfView!==void 0&&(u=i.FieldOfView.value);const d=i.FocalLength?i.FocalLength.value:null;switch(r){case 0:n=new En(u,c,s,o),d!==null&&n.setFocalLength(d);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),n=new Pt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),n=new Pt;break}}return n}createLight(e){let n,i;if(e.children.forEach(function(r){const s=tt.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)n=new Pt;else{let r;i.LightType===void 0?r=0:r=i.LightType.value;let s=16777215;i.Color!==void 0&&(s=et.colorSpaceToWorking(new Xe().fromArray(i.Color.value),Tt));let o=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(o=0);let a=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?a=0:a=i.FarAttenuationEnd.value);const l=1;switch(r){case 0:n=new Vy(s,o,a,l);break;case 1:n=new VE(s,o);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=_n.degToRad(i.InnerAngle.value));let u=0;i.OuterAngle!==void 0&&(u=_n.degToRad(i.OuterAngle.value),u=Math.max(u,1)),n=new QI(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),n=new Vy(s,o);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(n.castShadow=!0)}return n}createMesh(e,n,i){let r,s=null,o=null;const a=[];if(e.children.forEach(function(l){n.has(l.ID)&&(s=n.get(l.ID)),i.has(l.ID)&&a.push(i.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Hc({name:Is.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.groups.length>0){let l=!1;for(let c=0,u=s.groups.length;c<u;c++){const d=s.groups[c];(d.materialIndex<0||d.materialIndex>=a.length)&&(d.materialIndex=a.length,l=!0)}if(l){const c=new Hc;a.push(c)}}return s.FBX_Deformer?(r=new lI(s,o),r.normalizeSkinWeights()):r=new Ei(s,o),r}createCurve(e,n){const i=e.children.reduce(function(s,o){return n.has(o.ID)&&(s=n.get(o.ID)),s},null),r=new NE({name:Is.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new pI(i,r)}getTransformData(e,n){const i={};"InheritType"in n&&(i.inheritType=parseInt(n.InheritType.value)),"RotationOrder"in n?i.eulerOrder=Ll(n.RotationOrder.value):i.eulerOrder=Ll(0),"Lcl_Translation"in n&&(i.translation=n.Lcl_Translation.value),"PreRotation"in n&&(i.preRotation=n.PreRotation.value),"Lcl_Rotation"in n&&(i.rotation=n.Lcl_Rotation.value),"PostRotation"in n&&(i.postRotation=n.PostRotation.value),"Lcl_Scaling"in n&&(i.scale=n.Lcl_Scaling.value),"ScalingOffset"in n&&(i.scalingOffset=n.ScalingOffset.value),"ScalingPivot"in n&&(i.scalingPivot=n.ScalingPivot.value),"RotationOffset"in n&&(i.rotationOffset=n.RotationOffset.value),"RotationPivot"in n&&(i.rotationPivot=n.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,n){"LookAtProperty"in n&&Gt.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=tt.Objects.Model[r.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),yn.add(e.target)):e.lookAt(new U().fromArray(o))}}})}bindSkeleton(e,n,i){const r=this.parsePoseNodes();for(const s in e){const o=e[s];Gt.get(parseInt(o.ID)).parents.forEach(function(l){if(n.has(l.ID)){const c=l.ID;Gt.get(c).parents.forEach(function(d){i.has(d.ID)&&i.get(d.ID).bind(new t0(o.bones),r[d.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in tt.Objects){const n=tt.Objects.Pose;for(const i in n)if(n[i].attrType==="BindPose"&&n[i].NbPoseNodes>0){const r=n[i].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new Ie().fromArray(s.Matrix.a)}):e[r.Node]=new Ie().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in tt){if("AmbientColor"in tt.GlobalSettings){const e=tt.GlobalSettings.AmbientColor.value,n=e[0],i=e[1],r=e[2];if(n!==0||i!==0||r!==0){const s=new Xe().setRGB(n,i,r,Tt);yn.add(new n3(s,1))}}"UnitScaleFactor"in tt.GlobalSettings&&(yn.userData.unitScaleFactor=tt.GlobalSettings.UnitScaleFactor.value)}}}class EO{constructor(){this.negativeMaterialIndices=!1}parse(e){const n=new Map;if("Geometry"in tt.Objects){const i=tt.Objects.Geometry;for(const r in i){const s=Gt.get(parseInt(r)),o=this.parseGeometry(s,i[r],e);n.set(parseInt(r),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),n}parseGeometry(e,n,i){switch(n.attrType){case"Mesh":return this.parseMeshGeometry(e,n,i);case"NurbsCurve":return this.parseNurbsGeometry(n)}}parseMeshGeometry(e,n,i){const r=i.skeletons,s=[],o=e.parents.map(function(d){return tt.Objects.Model[d.ID]});if(o.length===0)return;const a=e.children.reduce(function(d,f){return r[f.ID]!==void 0&&(d=r[f.ID]),d},null);e.children.forEach(function(d){i.morphTargets[d.ID]!==void 0&&s.push(i.morphTargets[d.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Ll(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=ew(c);return this.genGeometry(n,a,s,u)}genGeometry(e,n,i,r){const s=new bi;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,n),a=this.genBuffers(o),l=new Nn(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Nn(a.colors,3)),n&&(s.setAttribute("skinIndex",new e0(a.weightsIndices,4)),s.setAttribute("skinWeight",new Nn(a.vertexWeights,4)),s.FBX_Deformer=n),a.normal.length>0){const c=new Ze().getNormalMatrix(r),u=new Nn(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){const d=u===0?"uv":`uv${u}`;s.setAttribute(d,new Nn(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(d,f){d!==c&&(s.addGroup(u,f-u,c),c=d,u=f)}),s.groups.length>0){const d=s.groups[s.groups.length-1],f=d.start+d.count;f!==a.materialIndex.length&&s.addGroup(f,a.materialIndex.length-f,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,i,r),s}parseGeoNode(e,n){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor.Color&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return i.weightTable={},n!==null&&(i.skeleton=n,n.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){i.weightTable[o]===void 0&&(i.weightTable[o]=[]),i.weightTable[o].push({id:s,weight:r.weights[a]})})})),i}genBuffers(e){const n={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,r=0,s=!1,o=[],a=[],l=[],c=[],u=[],d=[];const f=this;return e.vertexIndices.forEach(function(h,m){let y,g=!1;h<0&&(h=h^-1,g=!0);let p=[],_=[];if(o.push(h*3,h*3+1,h*3+2),e.color){const x=Yc(m,i,h,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[h]!==void 0&&e.weightTable[h].forEach(function(x){_.push(x.weight),p.push(x.id)}),_.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const x=[0,0,0,0],S=[0,0,0,0];_.forEach(function(b,C){let A=b,R=p[C];S.forEach(function(T,M,L){if(A>T){L[M]=A,A=T;const X=x[M];x[M]=R,R=X}})}),p=x,_=S}for(;_.length<4;)_.push(0),p.push(0);for(let x=0;x<4;++x)u.push(_[x]),d.push(p[x])}if(e.normal){const x=Yc(m,i,h,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(y=Yc(m,i,h,e.material)[0],y<0&&(f.negativeMaterialIndices=!0,y=0)),e.uv&&e.uv.forEach(function(x,S){const b=Yc(m,i,h,x);c[S]===void 0&&(c[S]=[]),c[S].push(b[0]),c[S].push(b[1])}),r++,g&&(f.genFace(n,e,o,y,a,l,c,u,d,r),i++,r=0,o=[],a=[],l=[],c=[],u=[],d=[])}),n}getNormalNewell(e){const n=new U(0,0,0);for(let i=0;i<e.length;i++){const r=e[i],s=e[(i+1)%e.length];n.x+=(r.y-s.y)*(r.z+s.z),n.y+=(r.z-s.z)*(r.x+s.x),n.z+=(r.x-s.x)*(r.y+s.y)}return n.normalize(),n}getNormalTangentAndBitangent(e){const n=this.getNormalNewell(e),r=(Math.abs(n.z)>.5?new U(0,1,0):new U(0,0,1)).cross(n).normalize(),s=n.clone().cross(r).normalize();return{normal:n,tangent:r,bitangent:s}}flattenVertex(e,n,i){return new at(e.dot(n),e.dot(i))}genFace(e,n,i,r,s,o,a,l,c,u){let d;if(u>3){const f=[],h=n.baseVertexPositions||n.vertexPositions;for(let p=0;p<i.length;p+=3)f.push(new U(h[i[p]],h[i[p+1]],h[i[p+2]]));const{tangent:m,bitangent:y}=this.getNormalTangentAndBitangent(f),g=[];for(const p of f)g.push(this.flattenVertex(p,m,y));d=i0.triangulateShape(g,[])}else d=[[0,1,2]];for(const[f,h,m]of d)e.vertex.push(n.vertexPositions[i[f*3]]),e.vertex.push(n.vertexPositions[i[f*3+1]]),e.vertex.push(n.vertexPositions[i[f*3+2]]),e.vertex.push(n.vertexPositions[i[h*3]]),e.vertex.push(n.vertexPositions[i[h*3+1]]),e.vertex.push(n.vertexPositions[i[h*3+2]]),e.vertex.push(n.vertexPositions[i[m*3]]),e.vertex.push(n.vertexPositions[i[m*3+1]]),e.vertex.push(n.vertexPositions[i[m*3+2]]),n.skeleton&&(e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.vertexWeights.push(l[m*4]),e.vertexWeights.push(l[m*4+1]),e.vertexWeights.push(l[m*4+2]),e.vertexWeights.push(l[m*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3]),e.weightsIndices.push(c[m*4]),e.weightsIndices.push(c[m*4+1]),e.weightsIndices.push(c[m*4+2]),e.weightsIndices.push(c[m*4+3])),n.color&&(e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2]),e.colors.push(o[m*3]),e.colors.push(o[m*3+1]),e.colors.push(o[m*3+2])),n.material&&n.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),n.normal&&(e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2]),e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2]),e.normal.push(s[m*3]),e.normal.push(s[m*3+1]),e.normal.push(s[m*3+2])),n.uv&&n.uv.forEach(function(y,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(a[g][f*2]),e.uvs[g].push(a[g][f*2+1]),e.uvs[g].push(a[g][h*2]),e.uvs[g].push(a[g][h*2+1]),e.uvs[g].push(a[g][m*2]),e.uvs[g].push(a[g][m*2+1])})}addMorphTargets(e,n,i,r){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;i.forEach(function(o){o.rawTargets.forEach(function(a){const l=tt.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,n,l,r,a.name)})})}genMorphGeometry(e,n,i,r,s){const o=n.Vertices!==void 0?n.Vertices.a:[],a=n.PolygonVertexIndex!==void 0?n.PolygonVertexIndex.a:[],l=i.Vertices!==void 0?i.Vertices.a:[],c=i.Indexes!==void 0?i.Indexes.a:[],u=e.attributes.position.count*3,d=new Float32Array(u);for(let y=0;y<c.length;y++){const g=c[y]*3;d[g]=l[y*3],d[g+1]=l[y*3+1],d[g+2]=l[y*3+2]}const f={vertexIndices:a,vertexPositions:d,baseVertexPositions:o},h=this.genBuffers(f),m=new Nn(h.vertex,3);m.name=s||i.attrName,m.applyMatrix4(r),e.morphAttributes.position.push(m)}parseNormals(e){const n=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Normals.a;let s=[];return i==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:n,referenceType:i}}parseUVs(e){const n=e.MappingInformationType,i=e.ReferenceInformationType,r=e.UV.a;let s=[];return i==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:n,referenceType:i}}parseVertexColors(e){const n=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Colors.a;let s=[];i==="IndexToDirect"&&(s=e.ColorIndex.a);for(let o=0,a=new Xe;o<r.length;o+=4)a.fromArray(r,o),et.colorSpaceToWorking(a,Tt),a.toArray(r,o);return{dataSize:4,buffer:r,indices:s,mappingType:n,referenceType:i}}parseMaterialIndices(e){const n=e.MappingInformationType,i=e.ReferenceInformationType;if(n==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:n,referenceType:i}}parseNurbsGeometry(e){const n=parseInt(e.Order);if(isNaN(n))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new bi;const i=n-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let d=0,f=o.length;d<f;d+=4)s.push(new ot().fromArray(o,d));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=i,l=r.length-1-a;for(let d=0;d<i;++d)s.push(s[d])}const u=new _O(i,r,s,a,l).getPoints(s.length*12);return new bi().setFromPoints(u)}}class wO{parse(){const e=[],n=this.parseClips();if(n!==void 0)for(const i in n){const r=n[i],s=this.addClip(r);e.push(s)}return e}parseClips(){if(tt.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const n=this.parseAnimationLayers(e);return this.parseAnimStacks(n)}parseAnimationCurveNodes(){const e=tt.Objects.AnimationCurveNode,n=new Map;for(const i in e){const r=e[i];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};n.set(s.id,s)}}return n}parseAnimationCurves(e){const n=tt.Objects.AnimationCurve;for(const i in n){const r={id:n[i].id,times:n[i].KeyTime.a.map(RO),values:n[i].KeyValueFloat.a},s=Gt.get(r.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){const n=tt.Objects.AnimationLayer,i=new Map;for(const r in n){const s=[],o=Gt.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const d=Gt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(d!==void 0){const f=tt.Objects.Model[d.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const h={modelName:f.attrName?dt.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};yn.traverse(function(m){m.ID===f.id&&(h.transform=m.matrix,m.userData.transformData&&(h.eulerOrder=m.userData.transformData.eulerOrder))}),h.transform||(h.transform=new Ie),"PreRotation"in f&&(h.preRotation=f.PreRotation.value),"PostRotation"in f&&(h.postRotation=f.PostRotation.value),s[c]=h}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const d=Gt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,f=Gt.get(d).parents[0].ID,h=Gt.get(f).parents[0].ID,m=Gt.get(h).parents[0].ID,y=tt.Objects.Model[m],g={modelName:y.attrName?dt.sanitizeNodeName(y.attrName):"",morphName:tt.Objects.Deformer[d].attrName};s[c]=g}s[c][u.attr]=u}}}),i.set(parseInt(r),s))}return i}parseAnimStacks(e){const n=tt.Objects.AnimationStack,i={};for(const r in n){const s=Gt.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);i[r]={name:n[r].attrName,layer:o}}return i}addClip(e){let n=[];const i=this;return e.layer.forEach(function(r){n=n.concat(i.generateTracks(r))}),new GI(e.name,-1,n)}generateTracks(e){const n=[];let i=new U,r=new U;if(e.transform&&e.transform.decompose(i,new Rn,r),i=i.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");s!==void 0&&n.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&n.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");s!==void 0&&n.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&n.push(s)}return n}generateVectorTrack(e,n,i,r){const s=this.getTimesForAllAxes(n),o=this.getKeyframeTrackValues(s,n,i);return new Il(e+"."+r,s,o)}generateRotationTrack(e,n,i,r,s){let o,a;if(n.x!==void 0&&n.y!==void 0&&n.z!==void 0){const f=this.interpolateRotations(n.x,n.y,n.z,s);o=f[0],a=f[1]}const l=Ll(0);i!==void 0&&(i=i.map(_n.degToRad),i.push(l),i=new nn().fromArray(i),i=new Rn().setFromEuler(i)),r!==void 0&&(r=r.map(_n.degToRad),r.push(l),r=new nn().fromArray(r),r=new Rn().setFromEuler(r).invert());const c=new Rn,u=new nn,d=[];if(!a||!o)return new Jo(e+".quaternion",[0],[0]);for(let f=0;f<a.length;f+=3)u.set(a[f],a[f+1],a[f+2],s),c.setFromEuler(u),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),f>2&&new Rn().fromArray(d,(f-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(d,f/3*4);return new Jo(e+".quaternion",o,d)}generateMorphTrack(e){const n=e.DeformPercent.curves.morph,i=n.values.map(function(s){return s/100}),r=yn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Dl(e.modelName+".morphTargetInfluences["+r+"]",n.times,i)}getTimesForAllAxes(e){let n=[];if(e.x!==void 0&&(n=n.concat(e.x.times)),e.y!==void 0&&(n=n.concat(e.y.times)),e.z!==void 0&&(n=n.concat(e.z.times)),n=n.sort(function(i,r){return i-r}),n.length>1){let i=1,r=n[0];for(let s=1;s<n.length;s++){const o=n[s];o!==r&&(n[i]=o,r=o,i++)}n=n.slice(0,i)}return n}getKeyframeTrackValues(e,n,i){const r=i,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(n.x&&(o=n.x.times.indexOf(c)),n.y&&(a=n.y.times.indexOf(c)),n.z&&(l=n.z.times.indexOf(c)),o!==-1){const u=n.x.values[o];s.push(u),r[0]=u}else s.push(r[0]);if(a!==-1){const u=n.y.values[a];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=n.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e,n,i,r){const s=[],o=[];s.push(e.times[0]),o.push(_n.degToRad(e.values[0])),o.push(_n.degToRad(n.values[0])),o.push(_n.degToRad(i.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],n.values[a-1],i.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(_n.degToRad),u=[e.values[a],n.values[a],i.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const d=u.map(_n.degToRad),f=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],h=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(h[0]>=180||h[1]>=180||h[2]>=180){const y=Math.max(...h)/180,g=new nn(...c,r),p=new nn(...d,r),_=new Rn().setFromEuler(g),x=new Rn().setFromEuler(p);_.dot(x)&&x.set(-x.x,-x.y,-x.z,-x.w);const S=e.times[a-1],b=e.times[a]-S,C=new Rn,A=new nn;for(let R=0;R<1;R+=1/y)C.copy(_.clone().slerp(x.clone(),R)),s.push(S+R*b),A.setFromQuaternion(C,r),o.push(A.x),o.push(A.y),o.push(A.z)}else s.push(e.times[a]),o.push(_n.degToRad(e.values[a])),o.push(_n.degToRad(n.values[a])),o.push(_n.degToRad(i.values[a]))}return[s,o]}}class TO{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,n){this.currentProp=e,this.currentPropName=n}parse(e){this.currentIndent=0,this.allNodes=new QE,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const n=this,i=e.split(/[\r\n]+/);return i.forEach(function(r,s){const o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;const l=r.match("^\\t{"+n.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+n.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(n.currentIndent-1)+"}}");l?n.parseNodeBegin(r,l):c?n.parseNodeProperty(r,c,i[++s]):u?n.popStack():r.match(/^[^\s\t}]/)&&n.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,n){const i=n[1].trim().replace(/^"/,"").replace(/"$/,""),r=n[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:i},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,s):i in a?(i==="PoseNode"?a.PoseNode.push(s):a[i].id!==void 0&&(a[i]={},a[i][a[i].id]=a[i]),o.id!==""&&(a[i][o.id]=s)):typeof o.id=="number"?(a[i]={},a[i][o.id]=s):i!=="Properties70"&&(i==="PoseNode"?a[i]=[s]:a[i]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let n=e[0];e[0]!==""&&(n=parseInt(e[0]),isNaN(n)&&(n=e[0]));let i="",r="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:n,name:i,type:r}}parseNodeProperty(e,n,i){let r=n[1].replace(/^"/,"").replace(/"$/,"").trim(),s=n[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=i.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let d=s.split(",").slice(3);d=d.map(function(f){return f.trim().replace(/^"/,"")}),r="connections",s=[c,u],NO(s,d),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=ah(s))}parseNodePropertyContinued(e){const n=this.getCurrentNode();n.a+=e,e.slice(-1)!==","&&(n.a=ah(n.a))}parseNodeSpecialProperty(e,n,i){const r=i.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3];let c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=ah(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class bO{parse(e){const n=new f_(e);n.skip(23);const i=n.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const r=new QE;for(;!this.endOfContent(n);){const s=this.parseNode(n,i);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,n){const i={},r=n>=7500?e.getUint64():e.getUint32(),s=n>=7500?e.getUint64():e.getUint32();n>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(r===0)return null;const l=[];for(let f=0;f<s;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",d=l.length>2?l[2]:"";for(i.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const f=this.parseNode(e,n);f!==null&&this.parseSubNode(a,i,f)}return i.propertyList=l,typeof c=="number"&&(i.id=c),u!==""&&(i.attrName=u),d!==""&&(i.attrType=d),a!==""&&(i.name=a),i}parseSubNode(e,n,i){if(i.singleProperty===!0){const r=i.propertyList[0];Array.isArray(r)?(n[i.name]=i,i.a=r):n[i.name]=r}else if(e==="Connections"&&i.name==="C"){const r=[];i.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),n.connections===void 0&&(n.connections=[]),n.connections.push(r)}else if(i.name==="Properties70")Object.keys(i).forEach(function(s){n[s]=i[s]});else if(e==="Properties70"&&i.name==="P"){let r=i.propertyList[0],s=i.propertyList[1];const o=i.propertyList[2],a=i.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],n[r]={type:s,type2:o,flag:a,value:l}}else n[i.name]===void 0?typeof i.id=="number"?(n[i.name]={},n[i.name][i.id]=i):n[i.name]=i:i.name==="PoseNode"?(Array.isArray(n[i.name])||(n[i.name]=[n[i.name]]),n[i.name].push(i)):n[i.name][i.id]===void 0&&(n[i.name][i.id]=i)}parseProperty(e){const n=e.getString(1);let i;switch(n){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(n){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}const a=uO(new Uint8Array(e.getArrayBuffer(o))),l=new f_(a.buffer);switch(n){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+n)}}}class f_{constructor(e,n){this.dv=new DataView(e),this.offset=0,this.littleEndian=n!==void 0?n:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const n=[];for(let i=0;i<e;i++)n.push(this.getBoolean());return n}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const n=[];for(let i=0;i<e;i++)n.push(this.getInt32());return n}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,n;return this.littleEndian?(e=this.getUint32(),n=this.getUint32()):(n=this.getUint32(),e=this.getUint32()),n&2147483648?(n=~n&4294967295,e=~e&4294967295,e===4294967295&&(n=n+1&4294967295),e=e+1&4294967295,-(n*4294967296+e)):n*4294967296+e}getInt64Array(e){const n=[];for(let i=0;i<e;i++)n.push(this.getInt64());return n}getUint64(){let e,n;return this.littleEndian?(e=this.getUint32(),n=this.getUint32()):(n=this.getUint32(),e=this.getUint32()),n*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const n=[];for(let i=0;i<e;i++)n.push(this.getFloat32());return n}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const n=[];for(let i=0;i<e;i++)n.push(this.getFloat64());return n}getArrayBuffer(e){const n=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,n}getString(e){const n=this.offset;let i=new Uint8Array(this.dv.buffer,n,e);this.skip(e);const r=i.indexOf(0);return r>=0&&(i=new Uint8Array(this.dv.buffer,n,r)),this._textDecoder.decode(i)}}class QE{add(e,n){this[e]=n}}function AO(t){const e="Kaydara FBX Binary  \0";return t.byteLength>=e.length&&e===tw(t,0,e.length)}function CO(t){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let n=0;function i(r){const s=t[r-1];return t=t.slice(n+r),n++,s}for(let r=0;r<e.length;++r)if(i(1)===e[r])return!1;return!0}function h_(t){const e=/FBXVersion: (\d+)/,n=t.match(e);if(n)return parseInt(n[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function RO(t){return t/46186158e3}const PO=[];function Yc(t,e,n,i){let r;switch(i.mappingType){case"ByPolygonVertex":r=t;break;case"ByPolygon":r=e;break;case"ByVertice":r=n;break;case"AllSame":r=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(r=i.indices[r]);const s=r*i.dataSize,o=s+i.dataSize;return DO(PO,i.buffer,s,o)}const oh=new nn,to=new U;function ew(t){const e=new Ie,n=new Ie,i=new Ie,r=new Ie,s=new Ie,o=new Ie,a=new Ie,l=new Ie,c=new Ie,u=new Ie,d=new Ie,f=new Ie,h=t.inheritType?t.inheritType:0;t.translation&&e.setPosition(to.fromArray(t.translation));const m=Ll(0);if(t.preRotation){const L=t.preRotation.map(_n.degToRad);L.push(m),n.makeRotationFromEuler(oh.fromArray(L))}if(t.rotation){const L=t.rotation.map(_n.degToRad);L.push(t.eulerOrder||m),i.makeRotationFromEuler(oh.fromArray(L))}if(t.postRotation){const L=t.postRotation.map(_n.degToRad);L.push(m),r.makeRotationFromEuler(oh.fromArray(L)),r.invert()}t.scale&&s.scale(to.fromArray(t.scale)),t.scalingOffset&&a.setPosition(to.fromArray(t.scalingOffset)),t.scalingPivot&&o.setPosition(to.fromArray(t.scalingPivot)),t.rotationOffset&&l.setPosition(to.fromArray(t.rotationOffset)),t.rotationPivot&&c.setPosition(to.fromArray(t.rotationPivot)),t.parentMatrixWorld&&(d.copy(t.parentMatrix),u.copy(t.parentMatrixWorld));const y=n.clone().multiply(i).multiply(r),g=new Ie;g.extractRotation(u);const p=new Ie;p.copyPosition(u);const _=p.clone().invert().multiply(u),x=g.clone().invert().multiply(_),S=s,b=new Ie;if(h===0)b.copy(g).multiply(y).multiply(x).multiply(S);else if(h===1)b.copy(g).multiply(x).multiply(y).multiply(S);else{const X=new Ie().scale(new U().setFromMatrixScale(d)).clone().invert(),H=x.clone().multiply(X);b.copy(g).multiply(y).multiply(H).multiply(S)}const C=c.clone().invert(),A=o.clone().invert();let R=e.clone().multiply(l).multiply(c).multiply(n).multiply(i).multiply(r).multiply(C).multiply(a).multiply(o).multiply(s).multiply(A);const T=new Ie().copyPosition(R),M=u.clone().multiply(T);return f.copyPosition(M),R=f.clone().multiply(b),R.premultiply(u.invert()),R}function Ll(t){t=t||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return t===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[t]}function ah(t){return t.split(",").map(function(n){return parseFloat(n)})}function tw(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=t.byteLength),new TextDecoder().decode(new Uint8Array(t,e,n))}function NO(t,e){for(let n=0,i=t.length,r=e.length;n<r;n++,i++)t[i]=e[n]}function DO(t,e,n,i){for(let r=n,s=0;r<i;r++,s++)t[s]=e[r];return t}const IO=()=>{const t=J.useRef(null);return J.useEffect(()=>{if(!t.current)return;const e=new oI,n=new En(60,1,.1,1e3);n.position.set(0,2,8);const i=new qU({alpha:!0,antialias:!0});i.setSize(140,140),t.current.appendChild(i.domElement);const r=new VE(16777215,1.2);r.position.set(5,5,5),e.add(r),new SO().load("/_0731232307_texture.fbx",l=>{const u=new ks().setFromObject(l).getSize(new U),f=3/Math.max(u.x,u.y,u.z);l.scale.setScalar(f),e.add(l)});let o=0;const a=()=>{o+=.005,e.rotation.y=o,i.render(e,n),requestAnimationFrame(a)};return a(),()=>{i.dispose(),t.current&&(t.current.innerHTML="")}},[]),v.jsx("div",{ref:t})},Er={PRIMARY_BG:"#0E0B16",PRIMARY_ACCENT:"#9370DB",SECONDARY_ACCENT:"#D8BFD3",SURFACE:"#1A162B",TEXT_MAIN:"#E0E0E0",TEXT_MUTED:"#BDBDBD",LINK_HOVER:"#B799FF",ERROR_WARNING:"#D9534F"},LO=()=>{const t=[{name:"LinkedIn",url:"https://www.linkedin.com/company/hack-united/posts/?feedView=all",icon:"/icons/linkedin1.png"},{name:"Instagram",url:"https://www.instagram.com/hack_united/",icon:"/icons/instagram1.png"},{name:"Discord",url:"https://discord.gg/hackunited",icon:"/icons/discord1.png"},{name:"X",url:"https://x.com/hackunited_",icon:"/icons/X1.png"}],e=[{name:"About Us",href:"#about"},{name:"Event Rules",href:"https://unitedhacksv6.devpost.com/rules"},{name:"Donate",href:"https://www.hackunited.org/donate"},{name:"Sponsor Prospectus",href:"https://drive.google.com/file/d/13kB7zt1rcQ0lXdWlEDRP1qGt7mZ0sRyK/view"}],n=[{name:"Join our community",href:"https://www.hackunited.org/"},{name:"Email Us",href:"mailto:humans@hackunited.org"},{name:"Blog",href:"https://blog.hackunited.org/"},{name:"Volunteer",href:"https://www.hackunited.org/"}];return v.jsx("footer",{className:"py-12 border-t relative",style:{backgroundColor:Er.PRIMARY_BG,borderColor:`${Er.SURFACE}`},children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12",children:[v.jsxs("div",{className:"text-center md:text-left flex flex-col items-center md:items-start",children:[v.jsx("img",{src:"/HackUnitedLogo.webp",alt:"United Hacks Logo",className:"h-16 sm:h-20 w-auto mb-2 filter brightness-200"}),v.jsx("h3",{className:"text-lg sm:text-xl font-bold mb-1",style:{color:Er.TEXT_MAIN,fontFamily:"var(--font-heading)"},children:"United Hacks V6"}),v.jsx("p",{className:"text-xs sm:text-sm",style:{color:Er.TEXT_MUTED,fontFamily:"var(--font-body)"},children:"EIN: 81-2908499"}),v.jsx("div",{className:"flex justify-center md:justify-start space-x-3 sm:space-x-4 mt-4",children:t.map(i=>v.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:"p-1.5 sm:p-2 rounded-full transition-colors duration-200",title:i.name,children:v.jsx("img",{src:i.icon,alt:i.name,className:"w-5 h-5 sm:w-6 sm:h-6 filter invert hover:opacity-75 transition-all duration-300"})},i.name))})]}),v.jsxs("div",{className:"text-center md:text-left mt-8 md:mt-0",children:[v.jsx("h3",{className:"text-base sm:text-lg font-semibold mb-3 sm:mb-4",style:{color:Er.TEXT_MAIN,fontFamily:"var(--font-heading)"},children:"Company"}),v.jsx("div",{className:"space-y-1.5 sm:space-y-2 flex flex-col items-center md:items-start",style:{fontFamily:"var(--font-body)"},children:e.map(i=>v.jsx("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:"transition-colors text-sm sm:text-base",style:{color:Er.TEXT_MUTED},children:i.name},i.name))})]}),v.jsxs("div",{className:"text-center md:text-left mt-8 md:mt-0",children:[v.jsx("h3",{className:"text-base sm:text-lg font-semibold mb-3 sm:mb-4",style:{color:Er.TEXT_MAIN,fontFamily:"var(--font-heading)"},children:"Contact Us"}),v.jsx("div",{className:"space-y-1.5 sm:space-y-2 flex flex-col items-center md:items-start",style:{fontFamily:"var(--font-body)"},children:n.map(i=>v.jsx("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:"transition-colors text-sm sm:text-base",style:{color:Er.TEXT_MUTED},children:i.name},i.name))})]})]}),v.jsx("div",{className:"hidden md:block absolute right-4 bottom-4",children:v.jsx(IO,{})})]})})};function FO(){return J.useEffect(()=>{const t=e=>{const n=e.target;if(n.hash){e.preventDefault();const i=document.querySelector(n.hash);i&&i.scrollIntoView({behavior:"smooth"})}};return document.addEventListener("click",t),()=>document.removeEventListener("click",t)},[]),v.jsxs("div",{className:"min-h-screen bg-black text-white",children:[v.jsx($b,{}),v.jsx(Kb,{}),v.jsx(hN,{}),v.jsx(fN,{}),v.jsx(xN,{}),v.jsx(_N,{}),v.jsx(MN,{}),v.jsx(EN,{}),v.jsx(TN,{}),v.jsx(bN,{}),v.jsx(LO,{})]})}console.log(`%c==========================================
              PROJECT INFO
==========================================

%c Developed by: %cSujal Thapa
%c Role: %cUnited Hack Web Developer & Tech Lead
%c Hackathon: %cHackUnited V6
%c LinkedIn: %chttps://www.linkedin.com/in/iamsujalthapa/

==========================================`,"color: #FF6849; font-size: 18px; font-weight: bold;","color: #FFFFFF; font-size: 16px;","color: #F6C177; font-size: 16px; font-weight: bold;","color: #FFFFFF; font-size: 16px;","color: #F6C177; font-size: 16px; font-weight: bold;","color: #FFFFFF; font-size: 16px;","color: #F6C177; font-size: 16px; font-weight: bold;","color: #FFFFFF; font-size: 16px; text-decoration: underline;","color: #FF6849; font-size: 18px; font-weight: bold;");bS(document.getElementById("root")).render(v.jsx(J.StrictMode,{children:v.jsx(FO,{})}))});export default kO();
