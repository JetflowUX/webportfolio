(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var ix={exports:{}},Fc={},rx={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),OM=Symbol.for("react.portal"),kM=Symbol.for("react.fragment"),BM=Symbol.for("react.strict_mode"),zM=Symbol.for("react.profiler"),VM=Symbol.for("react.provider"),HM=Symbol.for("react.context"),GM=Symbol.for("react.forward_ref"),WM=Symbol.for("react.suspense"),jM=Symbol.for("react.memo"),XM=Symbol.for("react.lazy"),wm=Symbol.iterator;function $M(t){return t===null||typeof t!="object"?null:(t=wm&&t[wm]||t["@@iterator"],typeof t=="function"?t:null)}var sx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ox=Object.assign,ax={};function co(t,e,n){this.props=t,this.context=e,this.refs=ax,this.updater=n||sx}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lx(){}lx.prototype=co.prototype;function Ch(t,e,n){this.props=t,this.context=e,this.refs=ax,this.updater=n||sx}var Rh=Ch.prototype=new lx;Rh.constructor=Ch;ox(Rh,co.prototype);Rh.isPureReactComponent=!0;var Tm=Array.isArray,cx=Object.prototype.hasOwnProperty,bh={current:null},ux={key:!0,ref:!0,__self:!0,__source:!0};function dx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cx.call(e,i)&&!ux.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ra,type:t,key:s,ref:o,props:r,_owner:bh.current}}function YM(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ph(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function qM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Am=/\/+/g;function uu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qM(""+t.key):e.toString(36)}function Il(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ra:case OM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+uu(o,0):i,Tm(r)?(n="",t!=null&&(n=t.replace(Am,"$&/")+"/"),Il(r,e,n,"",function(c){return c})):r!=null&&(Ph(r)&&(r=YM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Am,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Tm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+uu(s,a);o+=Il(s,e,n,l,r)}else if(l=$M(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+uu(s,a++),o+=Il(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wa(t,e,n){if(t==null)return t;var i=[],r=0;return Il(t,i,"","",function(s){return e.call(n,s,r++)}),i}function KM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Ul={transition:null},ZM={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:bh};function fx(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:Wa,forEach:function(t,e,n){Wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wa(t,function(){e++}),e},toArray:function(t){return Wa(t,function(e){return e})||[]},only:function(t){if(!Ph(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=co;Be.Fragment=kM;Be.Profiler=zM;Be.PureComponent=Ch;Be.StrictMode=BM;Be.Suspense=WM;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZM;Be.act=fx;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ox({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cx.call(e,l)&&!ux.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ra,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:HM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VM,_context:t},t.Consumer=t};Be.createElement=dx;Be.createFactory=function(t){var e=dx.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:GM,render:t}};Be.isValidElement=Ph;Be.lazy=function(t){return{$$typeof:XM,_payload:{_status:-1,_result:t},_init:KM}};Be.memo=function(t,e){return{$$typeof:jM,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};Be.unstable_act=fx;Be.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Be.useContext=function(t){return Qt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Be.useId=function(){return Qt.current.useId()};Be.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Be.useRef=function(t){return Qt.current.useRef(t)};Be.useState=function(t){return Qt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return Qt.current.useTransition()};Be.version="18.3.1";rx.exports=Be;var re=rx.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QM=re,JM=Symbol.for("react.element"),eE=Symbol.for("react.fragment"),tE=Object.prototype.hasOwnProperty,nE=QM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iE={key:!0,ref:!0,__self:!0,__source:!0};function hx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)tE.call(e,i)&&!iE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:JM,type:t,key:s,ref:o,props:r,_owner:nE.current}}Fc.Fragment=eE;Fc.jsx=hx;Fc.jsxs=hx;ix.exports=Fc;var T=ix.exports,px={exports:{}},Mn={},mx={exports:{}},gx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,j){var K=L.length;L.push(j);e:for(;0<K;){var ae=K-1>>>1,Me=L[ae];if(0<r(Me,j))L[ae]=j,L[K]=Me,K=ae;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var j=L[0],K=L.pop();if(K!==j){L[0]=K;e:for(var ae=0,Me=L.length,qe=Me>>>1;ae<qe;){var W=2*(ae+1)-1,ne=L[W],me=W+1,oe=L[me];if(0>r(ne,K))me<Me&&0>r(oe,ne)?(L[ae]=oe,L[me]=K,ae=me):(L[ae]=ne,L[W]=K,ae=W);else if(me<Me&&0>r(oe,K))L[ae]=oe,L[me]=K,ae=me;else break e}}return j}function r(L,j){var K=L.sortIndex-j.sortIndex;return K!==0?K:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=L)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function y(L){if(x=!1,_(L),!v)if(n(l)!==null)v=!0,$(R);else{var j=n(c);j!==null&&X(y,j.startTime-L)}}function R(L,j){v=!1,x&&(x=!1,f(b),b=-1),p=!0;var K=h;try{for(_(j),d=n(l);d!==null&&(!(d.expirationTime>j)||L&&!D());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,h=d.priorityLevel;var Me=ae(d.expirationTime<=j);j=t.unstable_now(),typeof Me=="function"?d.callback=Me:d===n(l)&&i(l),_(j)}else i(l);d=n(l)}if(d!==null)var qe=!0;else{var W=n(c);W!==null&&X(y,W.startTime-j),qe=!1}return qe}finally{d=null,h=K,p=!1}}var C=!1,A=null,b=-1,E=5,S=-1;function D(){return!(t.unstable_now()-S<E)}function B(){if(A!==null){var L=t.unstable_now();S=L;var j=!0;try{j=A(!0,L)}finally{j?H():(C=!1,A=null)}}else C=!1}var H;if(typeof g=="function")H=function(){g(B)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,J=q.port2;q.port1.onmessage=B,H=function(){J.postMessage(null)}}else H=function(){m(B,0)};function $(L){A=L,C||(C=!0,H())}function X(L,j){b=m(function(){L(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,$(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var K=h;h=j;try{return L()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=h;h=L;try{return j()}finally{h=K}},t.unstable_scheduleCallback=function(L,j,K){var ae=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ae+K:ae):K=ae,L){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=K+Me,L={id:u++,callback:j,priorityLevel:L,startTime:K,expirationTime:Me,sortIndex:-1},K>ae?(L.sortIndex=K,e(c,L),n(l)===null&&L===n(c)&&(x?(f(b),b=-1):x=!0,X(y,K-ae))):(L.sortIndex=Me,e(l,L),v||p||(v=!0,$(R))),L},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(L){var j=h;return function(){var K=h;h=j;try{return L.apply(this,arguments)}finally{h=K}}}})(gx);mx.exports=gx;var rE=mx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sE=re,yn=rE;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vx=new Set,sa={};function ts(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for(sa[t]=e,t=0;t<e.length;t++)vx.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rd=Object.prototype.hasOwnProperty,oE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cm={},Rm={};function aE(t){return Rd.call(Rm,t)?!0:Rd.call(Cm,t)?!1:oE.test(t)?Rm[t]=!0:(Cm[t]=!0,!1)}function lE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cE(t,e,n,i){if(e===null||typeof e>"u"||lE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dh=/[\-:]([a-z])/g;function Lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dh,Lh);Ot[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dh,Lh);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dh,Lh);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nh(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cE(e,n,r,i)&&(n=null),i||r===null?aE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=sE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Ih=Symbol.for("react.strict_mode"),bd=Symbol.for("react.profiler"),xx=Symbol.for("react.provider"),_x=Symbol.for("react.context"),Uh=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),Dd=Symbol.for("react.suspense_list"),Fh=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),yx=Symbol.for("react.offscreen"),bm=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,du;function Fo(t){if(du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||""}return`
`+du+t}var fu=!1;function hu(t,e){if(!t||fu)return"";fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function uE(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=hu(t.type,!1),t;case 11:return t=hu(t.type.render,!1),t;case 1:return t=hu(t.type,!0),t;default:return""}}function Ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case bd:return"Profiler";case Ih:return"StrictMode";case Pd:return"Suspense";case Dd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _x:return(t.displayName||"Context")+".Consumer";case xx:return(t._context.displayName||"Context")+".Provider";case Uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fh:return e=t.displayName||null,e!==null?e:Ld(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return Ld(t(e))}catch{}}return null}function dE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ld(e);case 8:return e===Ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fE(t){var e=Sx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=fE(t))}function Mx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Sx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nd(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ex(t,e){e=e.checked,e!=null&&Nh(t,"checked",e,!1)}function Id(t,e){Ex(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ud(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ud(t,e,n){(e!=="number"||tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Oo(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function wx(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Nm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,Ax=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hE=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(t){hE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xo[e]=Xo[t]})});function Cx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xo.hasOwnProperty(t)&&Xo[t]?(""+e).trim():e+"px"}function Rx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Cx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var pE=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kd(t,e){if(e){if(pE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function Oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vd=null,Bs=null,zs=null;function Im(t){if(t=Da(t)){if(typeof Vd!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Vc(e),Vd(t.stateNode,t.type,e))}}function bx(t){Bs?zs?zs.push(t):zs=[t]:Bs=t}function Px(){if(Bs){var t=Bs,e=zs;if(zs=Bs=null,Im(t),e)for(t=0;t<e.length;t++)Im(e[t])}}function Dx(t,e){return t(e)}function Lx(){}var pu=!1;function Nx(t,e,n){if(pu)return t(e,n);pu=!0;try{return Dx(t,e,n)}finally{pu=!1,(Bs!==null||zs!==null)&&(Lx(),Px())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var i=Vc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Hd=!1;if(Li)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Hd=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Hd=!1}function mE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var $o=!1,nc=null,ic=!1,Gd=null,gE={onError:function(t){$o=!0,nc=t}};function vE(t,e,n,i,r,s,o,a,l){$o=!1,nc=null,mE.apply(gE,arguments)}function xE(t,e,n,i,r,s,o,a,l){if(vE.apply(this,arguments),$o){if($o){var c=nc;$o=!1,nc=null}else throw Error(te(198));ic||(ic=!0,Gd=c)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ix(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Um(t){if(ns(t)!==t)throw Error(te(188))}function _E(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Um(r),t;if(s===i)return Um(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Ux(t){return t=_E(t),t!==null?Fx(t):null}function Fx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fx(t);if(e!==null)return e;t=t.sibling}return null}var Ox=yn.unstable_scheduleCallback,Fm=yn.unstable_cancelCallback,yE=yn.unstable_shouldYield,SE=yn.unstable_requestPaint,wt=yn.unstable_now,ME=yn.unstable_getCurrentPriorityLevel,kh=yn.unstable_ImmediatePriority,kx=yn.unstable_UserBlockingPriority,rc=yn.unstable_NormalPriority,EE=yn.unstable_LowPriority,Bx=yn.unstable_IdlePriority,Oc=null,li=null;function wE(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Oc,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:CE,TE=Math.log,AE=Math.LN2;function CE(t){return t>>>=0,t===0?32:31-(TE(t)/AE|0)|0}var Ya=64,qa=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ko(a):(s&=o,s!==0&&(i=ko(s)))}else o=n&~r,o!==0?i=ko(o):s!==0&&(i=ko(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function RE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=RE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zx(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function mu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function PE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function Vx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Hx,zh,Gx,Wx,jx,jd=!1,Ka=[],nr=null,ir=null,rr=null,la=new Map,ca=new Map,Zi=[],DE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Om(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":la.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(e.pointerId)}}function Eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Da(e),e!==null&&zh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function LE(t,e,n,i,r){switch(e){case"focusin":return nr=Eo(nr,t,e,n,i,r),!0;case"dragenter":return ir=Eo(ir,t,e,n,i,r),!0;case"mouseover":return rr=Eo(rr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return la.set(s,Eo(la.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ca.set(s,Eo(ca.get(s)||null,t,e,n,i,r)),!0}return!1}function Xx(t){var e=kr(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=Ix(n),e!==null){t.blockedOn=e,jx(t.priority,function(){Gx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zd=i,n.target.dispatchEvent(i),zd=null}else return e=Da(n),e!==null&&zh(e),t.blockedOn=n,!1;e.shift()}return!0}function km(t,e,n){Fl(t)&&n.delete(e)}function NE(){jd=!1,nr!==null&&Fl(nr)&&(nr=null),ir!==null&&Fl(ir)&&(ir=null),rr!==null&&Fl(rr)&&(rr=null),la.forEach(km),ca.forEach(km)}function wo(t,e){t.blockedOn===e&&(t.blockedOn=null,jd||(jd=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,NE)))}function ua(t){function e(r){return wo(r,t)}if(0<Ka.length){wo(Ka[0],t);for(var n=1;n<Ka.length;n++){var i=Ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(nr!==null&&wo(nr,t),ir!==null&&wo(ir,t),rr!==null&&wo(rr,t),la.forEach(e),ca.forEach(e),n=0;n<Zi.length;n++)i=Zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Zi.length&&(n=Zi[0],n.blockedOn===null);)Xx(n),n.blockedOn===null&&Zi.shift()}var Vs=ki.ReactCurrentBatchConfig,oc=!0;function IE(t,e,n,i){var r=et,s=Vs.transition;Vs.transition=null;try{et=1,Vh(t,e,n,i)}finally{et=r,Vs.transition=s}}function UE(t,e,n,i){var r=et,s=Vs.transition;Vs.transition=null;try{et=4,Vh(t,e,n,i)}finally{et=r,Vs.transition=s}}function Vh(t,e,n,i){if(oc){var r=Xd(t,e,n,i);if(r===null)Tu(t,e,i,ac,n),Om(t,i);else if(LE(r,t,e,n,i))i.stopPropagation();else if(Om(t,i),e&4&&-1<DE.indexOf(t)){for(;r!==null;){var s=Da(r);if(s!==null&&Hx(s),s=Xd(t,e,n,i),s===null&&Tu(t,e,i,ac,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tu(t,e,i,null,n)}}var ac=null;function Xd(t,e,n,i){if(ac=null,t=Oh(i),t=kr(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ix(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ac=t,null}function $x(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ME()){case kh:return 1;case kx:return 4;case rc:case EE:return 16;case Bx:return 536870912;default:return 16}default:return 16}}var er=null,Hh=null,Ol=null;function Yx(){if(Ol)return Ol;var t,e=Hh,n=e.length,i,r="value"in er?er.value:er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ol=r.slice(t,1<i?1-i:void 0)}function kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function Bm(){return!1}function En(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:Bm,this.isPropagationStopped=Bm,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gh=En(uo),Pa=xt({},uo,{view:0,detail:0}),FE=En(Pa),gu,vu,To,kc=xt({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(gu=t.screenX-To.screenX,vu=t.screenY-To.screenY):vu=gu=0,To=t),gu)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),zm=En(kc),OE=xt({},kc,{dataTransfer:0}),kE=En(OE),BE=xt({},Pa,{relatedTarget:0}),xu=En(BE),zE=xt({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),VE=En(zE),HE=xt({},uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GE=En(HE),WE=xt({},uo,{data:0}),Vm=En(WE),jE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$E={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$E[t])?!!e[t]:!1}function Wh(){return YE}var qE=xt({},Pa,{key:function(t){if(t.key){var e=jE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wh,charCode:function(t){return t.type==="keypress"?kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KE=En(qE),ZE=xt({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hm=En(ZE),QE=xt({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wh}),JE=En(QE),e1=xt({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),t1=En(e1),n1=xt({},kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),i1=En(n1),r1=[9,13,27,32],jh=Li&&"CompositionEvent"in window,Yo=null;Li&&"documentMode"in document&&(Yo=document.documentMode);var s1=Li&&"TextEvent"in window&&!Yo,qx=Li&&(!jh||Yo&&8<Yo&&11>=Yo),Gm=" ",Wm=!1;function Kx(t,e){switch(t){case"keyup":return r1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function o1(t,e){switch(t){case"compositionend":return Zx(e);case"keypress":return e.which!==32?null:(Wm=!0,Gm);case"textInput":return t=e.data,t===Gm&&Wm?null:t;default:return null}}function a1(t,e){if(Ms)return t==="compositionend"||!jh&&Kx(t,e)?(t=Yx(),Ol=Hh=er=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qx&&e.locale!=="ko"?null:e.data;default:return null}}var l1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!l1[t.type]:e==="textarea"}function Qx(t,e,n,i){bx(i),e=lc(e,"onChange"),0<e.length&&(n=new Gh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qo=null,da=null;function c1(t){c_(t,0)}function Bc(t){var e=Ts(t);if(Mx(e))return t}function u1(t,e){if(t==="change")return e}var Jx=!1;if(Li){var _u;if(Li){var yu="oninput"in document;if(!yu){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),yu=typeof Xm.oninput=="function"}_u=yu}else _u=!1;Jx=_u&&(!document.documentMode||9<document.documentMode)}function $m(){qo&&(qo.detachEvent("onpropertychange",e_),da=qo=null)}function e_(t){if(t.propertyName==="value"&&Bc(da)){var e=[];Qx(e,da,t,Oh(t)),Nx(c1,e)}}function d1(t,e,n){t==="focusin"?($m(),qo=e,da=n,qo.attachEvent("onpropertychange",e_)):t==="focusout"&&$m()}function f1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bc(da)}function h1(t,e){if(t==="click")return Bc(e)}function p1(t,e){if(t==="input"||t==="change")return Bc(e)}function m1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:m1;function fa(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Rd.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qm(t,e){var n=Ym(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ym(n)}}function t_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?t_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function n_(){for(var t=window,e=tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tc(t.document)}return e}function Xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function g1(t){var e=n_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&t_(n.ownerDocument.documentElement,n)){if(i!==null&&Xh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qm(n,s);var o=qm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v1=Li&&"documentMode"in document&&11>=document.documentMode,Es=null,$d=null,Ko=null,Yd=!1;function Km(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yd||Es==null||Es!==tc(i)||(i=Es,"selectionStart"in i&&Xh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ko&&fa(Ko,i)||(Ko=i,i=lc($d,"onSelect"),0<i.length&&(e=new Gh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},Su={},i_={};Li&&(i_=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function zc(t){if(Su[t])return Su[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i_)return Su[t]=e[n];return t}var r_=zc("animationend"),s_=zc("animationiteration"),o_=zc("animationstart"),a_=zc("transitionend"),l_=new Map,Zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){l_.set(t,e),ts(e,[t])}for(var Mu=0;Mu<Zm.length;Mu++){var Eu=Zm[Mu],x1=Eu.toLowerCase(),_1=Eu[0].toUpperCase()+Eu.slice(1);xr(x1,"on"+_1)}xr(r_,"onAnimationEnd");xr(s_,"onAnimationIteration");xr(o_,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(a_,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function Qm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,xE(i,e,void 0,t),t.currentTarget=null}function c_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Qm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Qm(r,a,c),s=l}}}if(ic)throw t=Gd,ic=!1,Gd=null,t}function ct(t,e){var n=e[Jd];n===void 0&&(n=e[Jd]=new Set);var i=t+"__bubble";n.has(i)||(u_(e,t,2,!1),n.add(i))}function wu(t,e,n){var i=0;e&&(i|=4),u_(n,t,i,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[Ja]){t[Ja]=!0,vx.forEach(function(n){n!=="selectionchange"&&(y1.has(n)||wu(n,!1,t),wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,wu("selectionchange",!1,e))}}function u_(t,e,n,i){switch($x(e)){case 1:var r=IE;break;case 4:r=UE;break;default:r=Vh}n=r.bind(null,e,n,t),r=void 0,!Hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Nx(function(){var c=s,u=Oh(n),d=[];e:{var h=l_.get(t);if(h!==void 0){var p=Gh,v=t;switch(t){case"keypress":if(kl(n)===0)break e;case"keydown":case"keyup":p=KE;break;case"focusin":v="focus",p=xu;break;case"focusout":v="blur",p=xu;break;case"beforeblur":case"afterblur":p=xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=kE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=JE;break;case r_:case s_:case o_:p=VE;break;case a_:p=t1;break;case"scroll":p=FE;break;case"wheel":p=i1;break;case"copy":case"cut":case"paste":p=GE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hm}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,_;g!==null;){_=g;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,f!==null&&(y=aa(g,f),y!=null&&x.push(pa(g,y,_)))),m)break;g=g.return}0<x.length&&(h=new p(h,v,null,n,u),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==zd&&(v=n.relatedTarget||n.fromElement)&&(kr(v)||v[Ni]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?kr(v):null,v!==null&&(m=ns(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=zm,y="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Hm,y="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:Ts(p),_=v==null?h:Ts(v),h=new x(y,g+"leave",p,n,u),h.target=m,h.relatedTarget=_,y=null,kr(u)===c&&(x=new x(f,g+"enter",v,n,u),x.target=_,x.relatedTarget=m,y=x),m=y,p&&v)t:{for(x=p,f=v,g=0,_=x;_;_=ss(_))g++;for(_=0,y=f;y;y=ss(y))_++;for(;0<g-_;)x=ss(x),g--;for(;0<_-g;)f=ss(f),_--;for(;g--;){if(x===f||f!==null&&x===f.alternate)break t;x=ss(x),f=ss(f)}x=null}else x=null;p!==null&&Jm(d,h,p,x,!1),v!==null&&m!==null&&Jm(d,m,v,x,!0)}}e:{if(h=c?Ts(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=u1;else if(jm(h))if(Jx)R=p1;else{R=f1;var C=d1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=h1);if(R&&(R=R(t,c))){Qx(d,R,n,u);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ud(h,"number",h.value)}switch(C=c?Ts(c):window,t){case"focusin":(jm(C)||C.contentEditable==="true")&&(Es=C,$d=c,Ko=null);break;case"focusout":Ko=$d=Es=null;break;case"mousedown":Yd=!0;break;case"contextmenu":case"mouseup":case"dragend":Yd=!1,Km(d,n,u);break;case"selectionchange":if(v1)break;case"keydown":case"keyup":Km(d,n,u)}var A;if(jh)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ms?Kx(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(qx&&n.locale!=="ko"&&(Ms||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ms&&(A=Yx()):(er=u,Hh="value"in er?er.value:er.textContent,Ms=!0)),C=lc(c,b),0<C.length&&(b=new Vm(b,t,null,n,u),d.push({event:b,listeners:C}),A?b.data=A:(A=Zx(n),A!==null&&(b.data=A)))),(A=s1?o1(t,n):a1(t,n))&&(c=lc(c,"onBeforeInput"),0<c.length&&(u=new Vm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}c_(d,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=aa(t,n),s!=null&&i.unshift(pa(t,s,r)),s=aa(t,e),s!=null&&i.push(pa(t,s,r))),t=t.return}return i}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=aa(n,s),l!=null&&o.unshift(pa(n,l,a))):r||(l=aa(n,s),l!=null&&o.push(pa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var S1=/\r\n?/g,M1=/\u0000|\uFFFD/g;function eg(t){return(typeof t=="string"?t:""+t).replace(S1,`
`).replace(M1,"")}function el(t,e,n){if(e=eg(e),eg(t)!==e&&n)throw Error(te(425))}function cc(){}var qd=null,Kd=null;function Zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qd=typeof setTimeout=="function"?setTimeout:void 0,E1=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,w1=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(t){return tg.resolve(null).then(t).catch(T1)}:Qd;function T1(t){setTimeout(function(){throw t})}function Au(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ua(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ua(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ng(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),oi="__reactFiber$"+fo,ma="__reactProps$"+fo,Ni="__reactContainer$"+fo,Jd="__reactEvents$"+fo,A1="__reactListeners$"+fo,C1="__reactHandles$"+fo;function kr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ng(t);t!==null;){if(n=t[oi])return n;t=ng(t)}return e}t=n,n=t.parentNode}return null}function Da(t){return t=t[oi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Vc(t){return t[ma]||null}var ef=[],As=-1;function _r(t){return{current:t}}function ut(t){0>As||(t.current=ef[As],ef[As]=null,As--)}function st(t,e){As++,ef[As]=t.current,t.current=e}var hr={},Xt=_r(hr),on=_r(!1),Yr=hr;function Ys(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function uc(){ut(on),ut(Xt)}function ig(t,e,n){if(Xt.current!==hr)throw Error(te(168));st(Xt,e),st(on,n)}function d_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,dE(t)||"Unknown",r));return xt({},n,i)}function dc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Yr=Xt.current,st(Xt,t),st(on,on.current),!0}function rg(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=d_(t,e,Yr),i.__reactInternalMemoizedMergedChildContext=t,ut(on),ut(Xt),st(Xt,t)):ut(on),st(on,n)}var Mi=null,Hc=!1,Cu=!1;function f_(t){Mi===null?Mi=[t]:Mi.push(t)}function R1(t){Hc=!0,f_(t)}function yr(){if(!Cu&&Mi!==null){Cu=!0;var t=0,e=et;try{var n=Mi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,Hc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),Ox(kh,yr),r}finally{et=e,Cu=!1}}return null}var Cs=[],Rs=0,fc=null,hc=0,Pn=[],Dn=0,qr=null,wi=1,Ti="";function Pr(t,e){Cs[Rs++]=hc,Cs[Rs++]=fc,fc=t,hc=e}function h_(t,e,n){Pn[Dn++]=wi,Pn[Dn++]=Ti,Pn[Dn++]=qr,qr=t;var i=wi;t=Ti;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-qn(e)+r|n<<r|i,Ti=s+t}else wi=1<<s|n<<r|i,Ti=t}function $h(t){t.return!==null&&(Pr(t,1),h_(t,1,0))}function Yh(t){for(;t===fc;)fc=Cs[--Rs],Cs[Rs]=null,hc=Cs[--Rs],Cs[Rs]=null;for(;t===qr;)qr=Pn[--Dn],Pn[Dn]=null,Ti=Pn[--Dn],Pn[Dn]=null,wi=Pn[--Dn],Pn[Dn]=null}var vn=null,gn=null,ft=!1,Xn=null;function p_(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nf(t){if(ft){var e=gn;if(e){var n=e;if(!sg(t,e)){if(tf(t))throw Error(te(418));e=sr(n.nextSibling);var i=vn;e&&sg(t,e)?p_(i,n):(t.flags=t.flags&-4097|2,ft=!1,vn=t)}}else{if(tf(t))throw Error(te(418));t.flags=t.flags&-4097|2,ft=!1,vn=t}}}function og(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function tl(t){if(t!==vn)return!1;if(!ft)return og(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zd(t.type,t.memoizedProps)),e&&(e=gn)){if(tf(t))throw m_(),Error(te(418));for(;e;)p_(t,e),e=sr(e.nextSibling)}if(og(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?sr(t.stateNode.nextSibling):null;return!0}function m_(){for(var t=gn;t;)t=sr(t.nextSibling)}function qs(){gn=vn=null,ft=!1}function qh(t){Xn===null?Xn=[t]:Xn.push(t)}var b1=ki.ReactCurrentBatchConfig;function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function nl(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ag(t){var e=t._init;return e(t._payload)}function g_(t){function e(f,g){if(t){var _=f.deletions;_===null?(f.deletions=[g],f.flags|=16):_.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=cr(f,g),f.index=0,f.sibling=null,f}function s(f,g,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<g?(f.flags|=2,g):_):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,_,y){return g===null||g.tag!==6?(g=Iu(_,f.mode,y),g.return=f,g):(g=r(g,_),g.return=f,g)}function l(f,g,_,y){var R=_.type;return R===Ss?u(f,g,_.props.children,y,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&ag(R)===g.type)?(y=r(g,_.props),y.ref=Ao(f,g,_),y.return=f,y):(y=jl(_.type,_.key,_.props,null,f.mode,y),y.ref=Ao(f,g,_),y.return=f,y)}function c(f,g,_,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Uu(_,f.mode,y),g.return=f,g):(g=r(g,_.children||[]),g.return=f,g)}function u(f,g,_,y,R){return g===null||g.tag!==7?(g=jr(_,f.mode,y,R),g.return=f,g):(g=r(g,_),g.return=f,g)}function d(f,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Iu(""+g,f.mode,_),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ja:return _=jl(g.type,g.key,g.props,null,f.mode,_),_.ref=Ao(f,null,g),_.return=f,_;case ys:return g=Uu(g,f.mode,_),g.return=f,g;case qi:var y=g._init;return d(f,y(g._payload),_)}if(Oo(g)||So(g))return g=jr(g,f.mode,_,null),g.return=f,g;nl(f,g)}return null}function h(f,g,_,y){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(f,g,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ja:return _.key===R?l(f,g,_,y):null;case ys:return _.key===R?c(f,g,_,y):null;case qi:return R=_._init,h(f,g,R(_._payload),y)}if(Oo(_)||So(_))return R!==null?null:u(f,g,_,y,null);nl(f,_)}return null}function p(f,g,_,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(_)||null,a(g,f,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ja:return f=f.get(y.key===null?_:y.key)||null,l(g,f,y,R);case ys:return f=f.get(y.key===null?_:y.key)||null,c(g,f,y,R);case qi:var C=y._init;return p(f,g,_,C(y._payload),R)}if(Oo(y)||So(y))return f=f.get(_)||null,u(g,f,y,R,null);nl(g,y)}return null}function v(f,g,_,y){for(var R=null,C=null,A=g,b=g=0,E=null;A!==null&&b<_.length;b++){A.index>b?(E=A,A=null):E=A.sibling;var S=h(f,A,_[b],y);if(S===null){A===null&&(A=E);break}t&&A&&S.alternate===null&&e(f,A),g=s(S,g,b),C===null?R=S:C.sibling=S,C=S,A=E}if(b===_.length)return n(f,A),ft&&Pr(f,b),R;if(A===null){for(;b<_.length;b++)A=d(f,_[b],y),A!==null&&(g=s(A,g,b),C===null?R=A:C.sibling=A,C=A);return ft&&Pr(f,b),R}for(A=i(f,A);b<_.length;b++)E=p(A,f,b,_[b],y),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?b:E.key),g=s(E,g,b),C===null?R=E:C.sibling=E,C=E);return t&&A.forEach(function(D){return e(f,D)}),ft&&Pr(f,b),R}function x(f,g,_,y){var R=So(_);if(typeof R!="function")throw Error(te(150));if(_=R.call(_),_==null)throw Error(te(151));for(var C=R=null,A=g,b=g=0,E=null,S=_.next();A!==null&&!S.done;b++,S=_.next()){A.index>b?(E=A,A=null):E=A.sibling;var D=h(f,A,S.value,y);if(D===null){A===null&&(A=E);break}t&&A&&D.alternate===null&&e(f,A),g=s(D,g,b),C===null?R=D:C.sibling=D,C=D,A=E}if(S.done)return n(f,A),ft&&Pr(f,b),R;if(A===null){for(;!S.done;b++,S=_.next())S=d(f,S.value,y),S!==null&&(g=s(S,g,b),C===null?R=S:C.sibling=S,C=S);return ft&&Pr(f,b),R}for(A=i(f,A);!S.done;b++,S=_.next())S=p(A,f,b,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?b:S.key),g=s(S,g,b),C===null?R=S:C.sibling=S,C=S);return t&&A.forEach(function(B){return e(f,B)}),ft&&Pr(f,b),R}function m(f,g,_,y){if(typeof _=="object"&&_!==null&&_.type===Ss&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ja:e:{for(var R=_.key,C=g;C!==null;){if(C.key===R){if(R=_.type,R===Ss){if(C.tag===7){n(f,C.sibling),g=r(C,_.props.children),g.return=f,f=g;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&ag(R)===C.type){n(f,C.sibling),g=r(C,_.props),g.ref=Ao(f,C,_),g.return=f,f=g;break e}n(f,C);break}else e(f,C);C=C.sibling}_.type===Ss?(g=jr(_.props.children,f.mode,y,_.key),g.return=f,f=g):(y=jl(_.type,_.key,_.props,null,f.mode,y),y.ref=Ao(f,g,_),y.return=f,f=y)}return o(f);case ys:e:{for(C=_.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(f,g.sibling),g=r(g,_.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=Uu(_,f.mode,y),g.return=f,f=g}return o(f);case qi:return C=_._init,m(f,g,C(_._payload),y)}if(Oo(_))return v(f,g,_,y);if(So(_))return x(f,g,_,y);nl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,_),g.return=f,f=g):(n(f,g),g=Iu(_,f.mode,y),g.return=f,f=g),o(f)):n(f,g)}return m}var Ks=g_(!0),v_=g_(!1),pc=_r(null),mc=null,bs=null,Kh=null;function Zh(){Kh=bs=mc=null}function Qh(t){var e=pc.current;ut(pc),t._currentValue=e}function rf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){mc=t,Kh=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Kh!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(mc===null)throw Error(te(308));bs=t,mc.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Br=null;function Jh(t){Br===null?Br=[t]:Br.push(t)}function x_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Jh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function __(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,Jh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function Bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bh(t,n)}}function lg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gc(t,e,n,i){var r=t.updateQueue;Ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=xt({},d,h);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=d}}function cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var La={},ci=_r(La),ga=_r(La),va=_r(La);function zr(t){if(t===La)throw Error(te(174));return t}function tp(t,e){switch(st(va,e),st(ga,t),st(ci,La),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Od(e,t)}ut(ci),st(ci,e)}function Zs(){ut(ci),ut(ga),ut(va)}function y_(t){zr(va.current);var e=zr(ci.current),n=Od(e,t.type);e!==n&&(st(ga,t),st(ci,n))}function np(t){ga.current===t&&(ut(ci),ut(ga))}var mt=_r(0);function vc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ru=[];function ip(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var zl=ki.ReactCurrentDispatcher,bu=ki.ReactCurrentBatchConfig,Kr=0,vt=null,Ct=null,Lt=null,xc=!1,Zo=!1,xa=0,P1=0;function Bt(){throw Error(te(321))}function rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function sp(t,e,n,i,r,s){if(Kr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zl.current=t===null||t.memoizedState===null?I1:U1,t=n(i,r),Zo){s=0;do{if(Zo=!1,xa=0,25<=s)throw Error(te(301));s+=1,Lt=Ct=null,e.updateQueue=null,zl.current=F1,t=n(i,r)}while(Zo)}if(zl.current=_c,e=Ct!==null&&Ct.next!==null,Kr=0,Lt=Ct=vt=null,xc=!1,e)throw Error(te(300));return t}function op(){var t=xa!==0;return xa=0,t}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?vt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Fn(){if(Ct===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Lt===null?vt.memoizedState:Lt.next;if(e!==null)Lt=e,Ct=t;else{if(t===null)throw Error(te(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Lt===null?vt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function _a(t,e){return typeof e=="function"?e(t):e}function Pu(t){var e=Fn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,vt.lanes|=u,Zr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Du(t){var e=Fn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function S_(){}function M_(t,e){var n=vt,i=Fn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,ap(T_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,ya(9,w_.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(te(349));Kr&30||E_(n,e,r)}return r}function E_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w_(t,e,n,i){e.value=n,e.getSnapshot=i,A_(e)&&C_(t)}function T_(t,e,n){return n(function(){A_(e)&&C_(t)})}function A_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function C_(t){var e=Ii(t,1);e!==null&&Kn(e,t,1,-1)}function ug(t){var e=ri();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},e.queue=t,t=t.dispatch=N1.bind(null,vt,t),[e.memoizedState,t]}function ya(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function R_(){return Fn().memoizedState}function Vl(t,e,n,i){var r=ri();vt.flags|=t,r.memoizedState=ya(1|e,n,void 0,i===void 0?null:i)}function Gc(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&rp(i,o.deps)){r.memoizedState=ya(e,n,s,i);return}}vt.flags|=t,r.memoizedState=ya(1|e,n,s,i)}function dg(t,e){return Vl(8390656,8,t,e)}function ap(t,e){return Gc(2048,8,t,e)}function b_(t,e){return Gc(4,2,t,e)}function P_(t,e){return Gc(4,4,t,e)}function D_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function L_(t,e,n){return n=n!=null?n.concat([t]):null,Gc(4,4,D_.bind(null,e,t),n)}function lp(){}function N_(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function I_(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function U_(t,e,n){return Kr&21?(ei(n,e)||(n=zx(),vt.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function D1(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=bu.transition;bu.transition={};try{t(!1),e()}finally{et=n,bu.transition=i}}function F_(){return Fn().memoizedState}function L1(t,e,n){var i=lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},O_(t))k_(e,n);else if(n=x_(t,e,n,i),n!==null){var r=Kt();Kn(n,t,i,r),B_(n,e,i)}}function N1(t,e,n){var i=lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(O_(t))k_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,Jh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=x_(t,e,r,i),n!==null&&(r=Kt(),Kn(n,t,i,r),B_(n,e,i))}}function O_(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function k_(t,e){Zo=xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bh(t,n)}}var _c={readContext:Un,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},I1={readContext:Un,useCallback:function(t,e){return ri().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:dg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,D_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=ri();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ri();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=L1.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ri();return t={current:t},e.memoizedState=t},useState:ug,useDebugValue:lp,useDeferredValue:function(t){return ri().memoizedState=t},useTransition:function(){var t=ug(!1),e=t[0];return t=D1.bind(null,t[1]),ri().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ri();if(ft){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Nt===null)throw Error(te(349));Kr&30||E_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,dg(T_.bind(null,i,s,t),[t]),i.flags|=2048,ya(9,w_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ri(),e=Nt.identifierPrefix;if(ft){var n=Ti,i=wi;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=P1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},U1={readContext:Un,useCallback:N_,useContext:Un,useEffect:ap,useImperativeHandle:L_,useInsertionEffect:b_,useLayoutEffect:P_,useMemo:I_,useReducer:Pu,useRef:R_,useState:function(){return Pu(_a)},useDebugValue:lp,useDeferredValue:function(t){var e=Fn();return U_(e,Ct.memoizedState,t)},useTransition:function(){var t=Pu(_a)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:S_,useSyncExternalStore:M_,useId:F_,unstable_isNewReconciler:!1},F1={readContext:Un,useCallback:N_,useContext:Un,useEffect:ap,useImperativeHandle:L_,useInsertionEffect:b_,useLayoutEffect:P_,useMemo:I_,useReducer:Du,useRef:R_,useState:function(){return Du(_a)},useDebugValue:lp,useDeferredValue:function(t){var e=Fn();return Ct===null?e.memoizedState=t:U_(e,Ct.memoizedState,t)},useTransition:function(){var t=Du(_a)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:S_,useSyncExternalStore:M_,useId:F_,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wc={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=lr(t),s=Ri(i,r);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,r),e!==null&&(Kn(e,t,r,i),Bl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=lr(t),s=Ri(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,r),e!==null&&(Kn(e,t,r,i),Bl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=lr(t),r=Ri(n,i);r.tag=2,e!=null&&(r.callback=e),e=or(t,r,i),e!==null&&(Kn(e,t,i,n),Bl(e,t,i))}};function fg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!fa(n,i)||!fa(r,s):!0}function z_(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=an(e)?Yr:Xt.current,i=e.contextTypes,s=(i=i!=null)?Ys(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function hg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Wc.enqueueReplaceState(e,e.state,null)}function of(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ep(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=an(e)?Yr:Xt.current,r.context=Ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wc.enqueueReplaceState(r,r.state,null),gc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",i=e;do n+=uE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Lu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var O1=typeof WeakMap=="function"?WeakMap:Map;function V_(t,e,n){n=Ri(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Sc||(Sc=!0,vf=i),af(t,e)},n}function H_(t,e,n){n=Ri(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){af(t,e),typeof i!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new O1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Z1.bind(null,t,e,n),e.then(t,t))}function mg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ri(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var k1=ki.ReactCurrentOwner,sn=!1;function Yt(t,e,n,i){e.child=t===null?v_(e,null,n,i):Ks(e,t.child,n,i)}function vg(t,e,n,i,r){n=n.render;var s=e.ref;return Hs(e,r),i=sp(t,e,n,i,s,r),n=op(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(ft&&n&&$h(e),e.flags|=1,Yt(t,e,i,r),e.child)}function xg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!gp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,G_(t,e,s,i,r)):(t=jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(o,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function G_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(fa(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return lf(t,e,n,i,r)}function W_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Ds,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(Ds,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(Ds,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(Ds,pn),pn|=i;return Yt(t,e,r,n),e.child}function j_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lf(t,e,n,i,r){var s=an(n)?Yr:Xt.current;return s=Ys(e,s),Hs(e,r),n=sp(t,e,n,i,s,r),i=op(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(ft&&i&&$h(e),e.flags|=1,Yt(t,e,n,r),e.child)}function _g(t,e,n,i,r){if(an(n)){var s=!0;dc(e)}else s=!1;if(Hs(e,r),e.stateNode===null)Hl(t,e),z_(e,n,i),of(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=an(n)?Yr:Xt.current,c=Ys(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&hg(e,o,i,c),Ki=!1;var h=e.memoizedState;o.state=h,gc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||on.current||Ki?(typeof u=="function"&&(sf(e,n,u,i),l=e.memoizedState),(a=Ki||fg(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,__(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Wn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=an(n)?Yr:Xt.current,l=Ys(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&hg(e,o,i,l),Ki=!1,h=e.memoizedState,o.state=h,gc(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||on.current||Ki?(typeof p=="function"&&(sf(e,n,p,i),v=e.memoizedState),(c=Ki||fg(e,n,c,i,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return cf(t,e,n,i,s,r)}function cf(t,e,n,i,r,s){j_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&rg(e,n,!1),Ui(t,e,s);i=e.stateNode,k1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=i.state,r&&rg(e,n,!0),e.child}function X_(t){var e=t.stateNode;e.pendingContext?ig(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ig(t,e.context,!1),tp(t,e.containerInfo)}function yg(t,e,n,i,r){return qs(),qh(r),e.flags|=256,Yt(t,e,n,i),e.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function df(t){return{baseLanes:t,cachePool:null,transitions:null}}function $_(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(mt,r&1),t===null)return nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$c(o,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=df(n),e.memoizedState=uf,t):cp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return B1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=cr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=uf,i}return s=t.child,t=s.sibling,i=cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function cp(t,e){return e=$c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,i){return i!==null&&qh(i),Ks(e,t.child,null,n),t=cp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function B1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Lu(Error(te(422))),il(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=$c({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ks(e,t.child,null,o),e.child.memoizedState=df(o),e.memoizedState=uf,s);if(!(e.mode&1))return il(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Lu(s,i,void 0),il(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),Kn(i,t,r,-1))}return mp(),i=Lu(Error(te(421))),il(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Q1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=sr(r.nextSibling),vn=e,ft=!0,Xn=null,t!==null&&(Pn[Dn++]=wi,Pn[Dn++]=Ti,Pn[Dn++]=qr,wi=t.id,Ti=t.overflow,qr=e),e=cp(e,i.children),e.flags|=4096,e)}function Sg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rf(t.return,e,n)}function Nu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Y_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sg(t,n,e);else if(t.tag===19)Sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Nu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Nu(e,!0,n,null,s);break;case"together":Nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function z1(t,e,n){switch(e.tag){case 3:X_(e),qs();break;case 5:y_(e);break;case 1:an(e.type)&&dc(e);break;case 4:tp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(pc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?$_(t,e,n):(st(mt,mt.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);st(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Y_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,W_(t,e,n)}return Ui(t,e,n)}var q_,ff,K_,Z_;q_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ff=function(){};K_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(ci.current);var s=null;switch(n){case"input":r=Nd(t,r),i=Nd(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Fd(t,r),i=Fd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cc)}kd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Z_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Co(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function V1(t,e,n){var i=e.pendingProps;switch(Yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return an(e.type)&&uc(),zt(e),null;case 3:return i=e.stateNode,Zs(),ut(on),ut(Xt),ip(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(yf(Xn),Xn=null))),ff(t,e),zt(e),null;case 5:np(e);var r=zr(va.current);if(n=e.type,t!==null&&e.stateNode!=null)K_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return zt(e),null}if(t=zr(ci.current),tl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[ma]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<Bo.length;r++)ct(Bo[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Pm(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Lm(i,s),ct("invalid",i)}kd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&el(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&el(i.textContent,a,t),r=["children",""+a]):sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":Xa(i),Dm(i,s,!0);break;case"textarea":Xa(i),Nm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[oi]=e,t[ma]=i,q_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bd(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<Bo.length;r++)ct(Bo[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Pm(t,i),r=Nd(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Lm(t,i),r=Fd(t,i),ct("invalid",t);break;default:r=i}kd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ax(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oa(t,l):typeof l=="number"&&oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&Nh(t,s,l,o))}switch(n){case"input":Xa(t),Dm(t,i,!1);break;case"textarea":Xa(t),Nm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Z_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=zr(va.current),zr(ci.current),tl(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:el(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&el(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return zt(e),null;case 13:if(ut(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&gn!==null&&e.mode&1&&!(e.flags&128))m_(),qs(),e.flags|=98560,s=!1;else if(s=tl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[oi]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Xn!==null&&(yf(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Rt===0&&(Rt=3):mp())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Zs(),ff(t,e),t===null&&ha(e.stateNode.containerInfo),zt(e),null;case 10:return Qh(e.type._context),zt(e),null;case 17:return an(e.type)&&uc(),zt(e),null;case 19:if(ut(mt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Co(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vc(t),o!==null){for(e.flags|=128,Co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Js&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304)}else{if(!i)if(t=vc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return zt(e),null}else 2*wt()-s.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=mt.current,st(mt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return pp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function H1(t,e){switch(Yh(e),e.tag){case 1:return an(e.type)&&uc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zs(),ut(on),ut(Xt),ip(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return np(e),null;case 13:if(ut(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(mt),null;case 4:return Zs(),null;case 10:return Qh(e.type._context),null;case 22:case 23:return pp(),null;case 24:return null;default:return null}}var rl=!1,Wt=!1,G1=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function hf(t,e,n){try{n()}catch(i){St(t,e,i)}}var Mg=!1;function W1(t,e){if(qd=oc,t=n_(),Xh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kd={focusedElem:t,selectionRange:n},oc=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Wn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){St(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=Mg,Mg=!1,v}function Qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hf(e,n,s)}r=r.next}while(r!==i)}}function jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Q_(t){var e=t.alternate;e!==null&&(t.alternate=null,Q_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[ma],delete e[Jd],delete e[A1],delete e[C1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function J_(t){return t.tag===5||t.tag===3||t.tag===4}function Eg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||J_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cc));else if(i!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}function gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}var It=null,jn=!1;function Vi(t,e,n){for(n=n.child;n!==null;)ey(t,e,n),n=n.sibling}function ey(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Oc,n)}catch{}switch(n.tag){case 5:Wt||Ps(n,e);case 6:var i=It,r=jn;It=null,Vi(t,e,n),It=i,jn=r,It!==null&&(jn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(jn?(t=It,n=n.stateNode,t.nodeType===8?Au(t.parentNode,n):t.nodeType===1&&Au(t,n),ua(t)):Au(It,n.stateNode));break;case 4:i=It,r=jn,It=n.stateNode.containerInfo,jn=!0,Vi(t,e,n),It=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hf(n,e,o),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!Wt&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Vi(t,e,n),Wt=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function wg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new G1),e.forEach(function(i){var r=J1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,jn=!1;break e;case 3:It=a.stateNode.containerInfo,jn=!0;break e;case 4:It=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(It===null)throw Error(te(160));ey(s,o,r),It=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ty(e,t),e=e.sibling}function ty(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ii(t),i&4){try{Qo(3,t,t.return),jc(3,t)}catch(x){St(t,t.return,x)}try{Qo(5,t,t.return)}catch(x){St(t,t.return,x)}}break;case 1:Bn(e,t),ii(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if(Bn(e,t),ii(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{oa(r,"")}catch(x){St(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ex(r,s),Bd(a,o);var c=Bd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Rx(r,d):u==="dangerouslySetInnerHTML"?Ax(r,d):u==="children"?oa(r,d):Nh(r,u,d,c)}switch(a){case"input":Id(r,s);break;case"textarea":wx(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ks(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[ma]=s}catch(x){St(t,t.return,x)}}break;case 6:if(Bn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){St(t,t.return,x)}}break;case 3:if(Bn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ua(e.containerInfo)}catch(x){St(t,t.return,x)}break;case 4:Bn(e,t),ii(t);break;case 13:Bn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(fp=wt())),i&4&&wg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||u,Bn(e,t),Wt=c):Bn(e,t),ii(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(pe=t,u=t.child;u!==null;){for(d=pe=u;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Qo(4,h,h.return);break;case 1:Ps(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){St(i,n,x)}}break;case 5:Ps(h,h.return);break;case 22:if(h.memoizedState!==null){Ag(d);continue}}p!==null?(p.return=h,pe=p):Ag(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cx("display",o))}catch(x){St(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){St(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bn(e,t),ii(t),i&4&&wg(t);break;case 21:break;default:Bn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(J_(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(oa(r,""),i.flags&=-33);var s=Eg(t);gf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Eg(t);mf(t,a,o);break;default:throw Error(te(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function j1(t,e,n){pe=t,ny(t)}function ny(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||rl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=rl;var c=Wt;if(rl=o,(Wt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?Cg(r):l!==null?(l.return=o,pe=l):Cg(r);for(;s!==null;)pe=s,ny(s),s=s.sibling;pe=r,rl=a,Wt=c}Tg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Tg(t)}}function Tg(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||jc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ua(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Wt||e.flags&512&&pf(e)}catch(h){St(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Ag(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Cg(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jc(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{pf(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{pf(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var X1=Math.ceil,yc=ki.ReactCurrentDispatcher,up=ki.ReactCurrentOwner,In=ki.ReactCurrentBatchConfig,Ye=0,Nt=null,At=null,Ft=0,pn=0,Ds=_r(0),Rt=0,Sa=null,Zr=0,Xc=0,dp=0,Jo=null,rn=null,fp=0,Js=1/0,Si=null,Sc=!1,vf=null,ar=null,sl=!1,tr=null,Mc=0,ea=0,xf=null,Gl=-1,Wl=0;function Kt(){return Ye&6?wt():Gl!==-1?Gl:Gl=wt()}function lr(t){return t.mode&1?Ye&2&&Ft!==0?Ft&-Ft:b1.transition!==null?(Wl===0&&(Wl=zx()),Wl):(t=et,t!==0||(t=window.event,t=t===void 0?16:$x(t.type)),t):1}function Kn(t,e,n,i){if(50<ea)throw ea=0,xf=null,Error(te(185));ba(t,n,i),(!(Ye&2)||t!==Nt)&&(t===Nt&&(!(Ye&2)&&(Xc|=n),Rt===4&&Qi(t,Ft)),ln(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Js=wt()+500,Hc&&yr()))}function ln(t,e){var n=t.callbackNode;bE(t,e);var i=sc(t,t===Nt?Ft:0);if(i===0)n!==null&&Fm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Fm(n),e===1)t.tag===0?R1(Rg.bind(null,t)):f_(Rg.bind(null,t)),w1(function(){!(Ye&6)&&yr()}),n=null;else{switch(Vx(i)){case 1:n=kh;break;case 4:n=kx;break;case 16:n=rc;break;case 536870912:n=Bx;break;default:n=rc}n=uy(n,iy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iy(t,e){if(Gl=-1,Wl=0,Ye&6)throw Error(te(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var i=sc(t,t===Nt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ec(t,i);else{e=i;var r=Ye;Ye|=2;var s=sy();(Nt!==t||Ft!==e)&&(Si=null,Js=wt()+500,Wr(t,e));do try{q1();break}catch(a){ry(t,a)}while(!0);Zh(),yc.current=s,Ye=r,At!==null?e=0:(Nt=null,Ft=0,e=Rt)}if(e!==0){if(e===2&&(r=Wd(t),r!==0&&(i=r,e=_f(t,r))),e===1)throw n=Sa,Wr(t,0),Qi(t,i),ln(t,wt()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!$1(r)&&(e=Ec(t,i),e===2&&(s=Wd(t),s!==0&&(i=s,e=_f(t,s))),e===1))throw n=Sa,Wr(t,0),Qi(t,i),ln(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Dr(t,rn,Si);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=fp+500-wt(),10<e)){if(sc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Qd(Dr.bind(null,t,rn,Si),e);break}Dr(t,rn,Si);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*X1(i/1960))-i,10<i){t.timeoutHandle=Qd(Dr.bind(null,t,rn,Si),i);break}Dr(t,rn,Si);break;case 5:Dr(t,rn,Si);break;default:throw Error(te(329))}}}return ln(t,wt()),t.callbackNode===n?iy.bind(null,t):null}function _f(t,e){var n=Jo;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=Ec(t,e),t!==2&&(e=rn,rn=n,e!==null&&yf(e)),t}function yf(t){rn===null?rn=t:rn.push.apply(rn,t)}function $1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~dp,e&=~Xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function Rg(t){if(Ye&6)throw Error(te(327));Gs();var e=sc(t,0);if(!(e&1))return ln(t,wt()),null;var n=Ec(t,e);if(t.tag!==0&&n===2){var i=Wd(t);i!==0&&(e=i,n=_f(t,i))}if(n===1)throw n=Sa,Wr(t,0),Qi(t,e),ln(t,wt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,rn,Si),ln(t,wt()),null}function hp(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Js=wt()+500,Hc&&yr())}}function Qr(t){tr!==null&&tr.tag===0&&!(Ye&6)&&Gs();var e=Ye;Ye|=1;var n=In.transition,i=et;try{if(In.transition=null,et=1,t)return t()}finally{et=i,In.transition=n,Ye=e,!(Ye&6)&&yr()}}function pp(){pn=Ds.current,ut(Ds)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,E1(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Yh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&uc();break;case 3:Zs(),ut(on),ut(Xt),ip();break;case 5:np(i);break;case 4:Zs();break;case 13:ut(mt);break;case 19:ut(mt);break;case 10:Qh(i.type._context);break;case 22:case 23:pp()}n=n.return}if(Nt=t,At=t=cr(t.current,null),Ft=pn=e,Rt=0,Sa=null,dp=Xc=Zr=0,rn=Jo=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Br=null}return t}function ry(t,e){do{var n=At;try{if(Zh(),zl.current=_c,xc){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}xc=!1}if(Kr=0,Lt=Ct=vt=null,Zo=!1,xa=0,up.current=null,n===null||n.return===null){Rt=1,Sa=e,At=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=mg(o);if(p!==null){p.flags&=-257,gg(p,o,a,s,e),p.mode&1&&pg(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){pg(s,c,e),mp();break e}l=Error(te(426))}}else if(ft&&a.mode&1){var m=mg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),gg(m,o,a,s,e),qh(Qs(l,a));break e}}s=l=Qs(l,a),Rt!==4&&(Rt=2),Jo===null?Jo=[s]:Jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=V_(s,l,e);lg(s,f);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ar===null||!ar.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=H_(s,a,e);lg(s,y);break e}}s=s.return}while(s!==null)}ay(n)}catch(R){e=R,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function sy(){var t=yc.current;return yc.current=_c,t===null?_c:t}function mp(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Nt===null||!(Zr&268435455)&&!(Xc&268435455)||Qi(Nt,Ft)}function Ec(t,e){var n=Ye;Ye|=2;var i=sy();(Nt!==t||Ft!==e)&&(Si=null,Wr(t,e));do try{Y1();break}catch(r){ry(t,r)}while(!0);if(Zh(),Ye=n,yc.current=i,At!==null)throw Error(te(261));return Nt=null,Ft=0,Rt}function Y1(){for(;At!==null;)oy(At)}function q1(){for(;At!==null&&!yE();)oy(At)}function oy(t){var e=cy(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?ay(t):At=e,up.current=null}function ay(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=H1(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,At=null;return}}else if(n=V1(n,e,pn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Rt===0&&(Rt=5)}function Dr(t,e,n){var i=et,r=In.transition;try{In.transition=null,et=1,K1(t,e,n,i)}finally{In.transition=r,et=i}return null}function K1(t,e,n,i){do Gs();while(tr!==null);if(Ye&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PE(t,s),t===Nt&&(At=Nt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,uy(rc,function(){return Gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=et;et=1;var a=Ye;Ye|=4,up.current=null,W1(t,n),ty(n,t),g1(Kd),oc=!!qd,Kd=qd=null,t.current=n,j1(n),SE(),Ye=a,et=o,In.transition=s}else t.current=n;if(sl&&(sl=!1,tr=t,Mc=r),s=t.pendingLanes,s===0&&(ar=null),wE(n.stateNode),ln(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sc)throw Sc=!1,t=vf,vf=null,t;return Mc&1&&t.tag!==0&&Gs(),s=t.pendingLanes,s&1?t===xf?ea++:(ea=0,xf=t):ea=0,yr(),null}function Gs(){if(tr!==null){var t=Vx(Mc),e=In.transition,n=et;try{if(In.transition=null,et=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,Mc=0,Ye&6)throw Error(te(331));var r=Ye;for(Ye|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:Qo(8,u,s)}var d=u.child;if(d!==null)d.return=u,pe=d;else for(;pe!==null;){u=pe;var h=u.sibling,p=u.return;if(Q_(u),u===c){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,pe=f;break e}pe=s.return}}var g=t.current;for(pe=g;pe!==null;){o=pe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,pe=_;else e:for(o=g;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jc(9,a)}}catch(R){St(a,a.return,R)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Ye=r,yr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Oc,t)}catch{}i=!0}return i}finally{et=n,In.transition=e}}return!1}function bg(t,e,n){e=Qs(n,e),e=V_(t,e,1),t=or(t,e,1),e=Kt(),t!==null&&(ba(t,1,e),ln(t,e))}function St(t,e,n){if(t.tag===3)bg(t,t,n);else for(;e!==null;){if(e.tag===3){bg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){t=Qs(n,t),t=H_(e,t,1),e=or(e,t,1),t=Kt(),e!==null&&(ba(e,1,t),ln(e,t));break}}e=e.return}}function Z1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ft&n)===n&&(Rt===4||Rt===3&&(Ft&130023424)===Ft&&500>wt()-fp?Wr(t,0):dp|=n),ln(t,e)}function ly(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=Kt();t=Ii(t,e),t!==null&&(ba(t,e,n),ln(t,n))}function Q1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ly(t,n)}function J1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),ly(t,n)}var cy;cy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,z1(t,e,n);sn=!!(t.flags&131072)}else sn=!1,ft&&e.flags&1048576&&h_(e,hc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Hl(t,e),t=e.pendingProps;var r=Ys(e,Xt.current);Hs(e,n),r=sp(null,e,i,t,r,n);var s=op();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,dc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ep(e),r.updater=Wc,e.stateNode=r,r._reactInternals=e,of(e,i,t,n),e=cf(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&$h(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Hl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tw(i),t=Wn(i,t),r){case 0:e=lf(null,e,i,t,n);break e;case 1:e=_g(null,e,i,t,n);break e;case 11:e=vg(null,e,i,t,n);break e;case 14:e=xg(null,e,i,Wn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),lf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),_g(t,e,i,r,n);case 3:e:{if(X_(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,__(t,e),gc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qs(Error(te(423)),e),e=yg(t,e,i,n,r);break e}else if(i!==r){r=Qs(Error(te(424)),e),e=yg(t,e,i,n,r);break e}else for(gn=sr(e.stateNode.containerInfo.firstChild),vn=e,ft=!0,Xn=null,n=v_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),i===r){e=Ui(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return y_(e),t===null&&nf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Zd(i,r)?o=null:s!==null&&Zd(i,s)&&(e.flags|=32),j_(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&nf(e),null;case 13:return $_(t,e,n);case 4:return tp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ks(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),vg(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(pc,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!on.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ri(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Hs(e,n),r=Un(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),xg(t,e,i,r,n);case 15:return G_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Hl(t,e),e.tag=1,an(i)?(t=!0,dc(e)):t=!1,Hs(e,n),z_(e,i,r),of(e,i,r,n),cf(null,e,i,!0,t,n);case 19:return Y_(t,e,n);case 22:return W_(t,e,n)}throw Error(te(156,e.tag))};function uy(t,e){return Ox(t,e)}function ew(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new ew(t,e,n,i)}function gp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tw(t){if(typeof t=="function")return gp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uh)return 11;if(t===Fh)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")gp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return jr(n.children,r,s,e);case Ih:o=8,r|=8;break;case bd:return t=Ln(12,n,e,r|2),t.elementType=bd,t.lanes=s,t;case Pd:return t=Ln(13,n,e,r),t.elementType=Pd,t.lanes=s,t;case Dd:return t=Ln(19,n,e,r),t.elementType=Dd,t.lanes=s,t;case yx:return $c(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xx:o=10;break e;case _x:o=9;break e;case Uh:o=11;break e;case Fh:o=14;break e;case qi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function $c(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=yx,t.lanes=n,t.stateNode={isHidden:!1},t}function Iu(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Uu(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mu(0),this.expirationTimes=mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vp(t,e,n,i,r,s,o,a,l){return t=new nw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ep(s),t}function iw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function dy(t){if(!t)return hr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(an(n))return d_(t,n,e)}return e}function fy(t,e,n,i,r,s,o,a,l){return t=vp(n,i,!0,t,r,s,o,a,l),t.context=dy(null),n=t.current,i=Kt(),r=lr(n),s=Ri(i,r),s.callback=e??null,or(n,s,r),t.current.lanes=r,ba(t,r,i),ln(t,i),t}function Yc(t,e,n,i){var r=e.current,s=Kt(),o=lr(r);return n=dy(n),e.context===null?e.context=n:e.pendingContext=n,e=Ri(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=or(r,e,o),t!==null&&(Kn(t,r,o,s),Bl(t,r,o)),o}function wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xp(t,e){Pg(t,e),(t=t.alternate)&&Pg(t,e)}function rw(){return null}var hy=typeof reportError=="function"?reportError:function(t){console.error(t)};function _p(t){this._internalRoot=t}qc.prototype.render=_p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Yc(t,e,null,null)};qc.prototype.unmount=_p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Yc(null,t,null,null)}),e[Ni]=null}};function qc(t){this._internalRoot=t}qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zi.length&&e!==0&&e<Zi[n].priority;n++);Zi.splice(n,0,t),n===0&&Xx(t)}};function yp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dg(){}function sw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=wc(o);s.call(c)}}var o=fy(e,i,t,0,null,!1,!1,"",Dg);return t._reactRootContainer=o,t[Ni]=o.current,ha(t.nodeType===8?t.parentNode:t),Qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=wc(l);a.call(c)}}var l=vp(t,0,!1,null,null,!1,!1,"",Dg);return t._reactRootContainer=l,t[Ni]=l.current,ha(t.nodeType===8?t.parentNode:t),Qr(function(){Yc(e,l,n,i)}),l}function Zc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=wc(o);a.call(l)}}Yc(e,o,t,r)}else o=sw(n,e,t,r,i);return wc(o)}Hx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(Bh(e,n|1),ln(e,wt()),!(Ye&6)&&(Js=wt()+500,yr()))}break;case 13:Qr(function(){var i=Ii(t,1);if(i!==null){var r=Kt();Kn(i,t,1,r)}}),xp(t,1)}};zh=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=Kt();Kn(e,t,134217728,n)}xp(t,134217728)}};Gx=function(t){if(t.tag===13){var e=lr(t),n=Ii(t,e);if(n!==null){var i=Kt();Kn(n,t,e,i)}xp(t,e)}};Wx=function(){return et};jx=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Vd=function(t,e,n){switch(e){case"input":if(Id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vc(i);if(!r)throw Error(te(90));Mx(i),Id(i,r)}}}break;case"textarea":wx(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};Dx=hp;Lx=Qr;var ow={usingClientEntryPoint:!1,Events:[Da,Ts,Vc,bx,Px,hp]},Ro={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aw={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ux(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Oc=ol.inject(aw),li=ol}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ow;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yp(e))throw Error(te(200));return iw(t,e,null,n)};Mn.createRoot=function(t,e){if(!yp(t))throw Error(te(299));var n=!1,i="",r=hy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vp(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,ha(t.nodeType===8?t.parentNode:t),new _p(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Ux(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Qr(t)};Mn.hydrate=function(t,e,n){if(!Kc(e))throw Error(te(200));return Zc(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!yp(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=hy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fy(e,null,t,1,n??null,r,!1,s,o),t[Ni]=e.current,ha(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new qc(e)};Mn.render=function(t,e,n){if(!Kc(e))throw Error(te(200));return Zc(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!Kc(t))throw Error(te(40));return t._reactRootContainer?(Qr(function(){Zc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Mn.unstable_batchedUpdates=hp;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Kc(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Zc(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function py(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(py)}catch(t){console.error(t)}}py(),px.exports=Mn;var lw=px.exports,my,Lg=lw;my=Lg.createRoot,Lg.hydrateRoot;const Sp=re.createContext({});function Mp(t){const e=re.useRef(null);return e.current===null&&(e.current=t()),e.current}const Qc=re.createContext(null),Ep=re.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class cw extends re.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function uw({children:t,isPresent:e}){const n=re.useId(),i=re.useRef(null),r=re.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=re.useContext(Ep);return re.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),T.jsx(cw,{isPresent:e,childRef:i,sizeRef:r,children:re.cloneElement(t,{ref:i})})}const dw=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=Mp(fw),l=re.useId(),c=re.useCallback(d=>{a.set(d,!0);for(const h of a.values())if(!h)return;i&&i()},[a,i]),u=re.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),c]:[n,c]);return re.useMemo(()=>{a.forEach((d,h)=>a.set(h,!1))},[n]),re.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=T.jsx(uw,{isPresent:n,children:t})),T.jsx(Qc.Provider,{value:u,children:t})};function fw(){return new Map}function gy(t=!0){const e=re.useContext(Qc);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=re.useId();re.useEffect(()=>{t&&r(s)},[t]);const o=re.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const al=t=>t.key||"";function Ng(t){const e=[];return re.Children.forEach(t,n=>{re.isValidElement(n)&&e.push(n)}),e}const wp=typeof window<"u",vy=wp?re.useLayoutEffect:re.useEffect,hw=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=gy(o),c=re.useMemo(()=>Ng(t),[t]),u=o&&!a?[]:c.map(al),d=re.useRef(!0),h=re.useRef(c),p=Mp(()=>new Map),[v,x]=re.useState(c),[m,f]=re.useState(c);vy(()=>{d.current=!1,h.current=c;for(let y=0;y<m.length;y++){const R=al(m[y]);u.includes(R)?p.delete(R):p.get(R)!==!0&&p.set(R,!1)}},[m,u.length,u.join("-")]);const g=[];if(c!==v){let y=[...c];for(let R=0;R<m.length;R++){const C=m[R],A=al(C);u.includes(A)||(y.splice(R,0,C),g.push(C))}s==="wait"&&g.length&&(y=g),f(Ng(y)),x(c);return}const{forceRender:_}=re.useContext(Sp);return T.jsx(T.Fragment,{children:m.map(y=>{const R=al(y),C=o&&!a?!1:c===m||u.includes(R),A=()=>{if(p.has(R))p.set(R,!0);else return;let b=!0;p.forEach(E=>{E||(b=!1)}),b&&(_==null||_(),f(h.current),o&&(l==null||l()),i&&i())};return T.jsx(dw,{isPresent:C,initial:!d.current||n?void 0:!1,custom:C?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:C?void 0:A,children:y},R)})})},xn=t=>t;let xy=xn;function Tp(t){let e;return()=>(e===void 0&&(e=t()),e)}const eo=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},bi=t=>t*1e3,Pi=t=>t/1e3,pw={useManualTiming:!1};function mw(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const p=d&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const ll=["read","resolveKeyframes","update","preRender","render","postRender"],gw=40;function _y(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=ll.reduce((f,g)=>(f[g]=mw(s),f),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:h}=o,p=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,gw),1),r.timestamp=f,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),h.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},v=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:ll.reduce((f,g)=>{const _=o[g];return f[g]=(y,R=!1,C=!1)=>(n||v(),_.schedule(y,R,C)),f},{}),cancel:f=>{for(let g=0;g<ll.length;g++)o[ll[g]].cancel(f)},state:r,steps:o}}const{schedule:dt,cancel:pr,state:Ut,steps:Fu}=_y(typeof requestAnimationFrame<"u"?requestAnimationFrame:xn,!0),yy=re.createContext({strict:!1}),Ig={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},to={};for(const t in Ig)to[t]={isEnabled:e=>Ig[t].some(n=>!!e[n])};function vw(t){for(const e in t)to[e]={...to[e],...t[e]}}const xw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Tc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||xw.has(t)}let Sy=t=>!Tc(t);function _w(t){t&&(Sy=e=>e.startsWith("on")?!Tc(e):t(e))}try{_w(require("@emotion/is-prop-valid").default)}catch{}function yw(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(Sy(r)||n===!0&&Tc(r)||!e&&!Tc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function Sw(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const Jc=re.createContext({});function Ma(t){return typeof t=="string"||Array.isArray(t)}function eu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Ap=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Cp=["initial",...Ap];function tu(t){return eu(t.animate)||Cp.some(e=>Ma(t[e]))}function My(t){return!!(tu(t)||t.variants)}function Mw(t,e){if(tu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Ma(n)?n:void 0,animate:Ma(i)?i:void 0}}return t.inherit!==!1?e:{}}function Ew(t){const{initial:e,animate:n}=Mw(t,re.useContext(Jc));return re.useMemo(()=>({initial:e,animate:n}),[Ug(e),Ug(n)])}function Ug(t){return Array.isArray(t)?t.join(" "):t}const ww=Symbol.for("motionComponentSymbol");function Ls(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Tw(t,e,n){return re.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ls(n)&&(n.current=i))},[e])}const Rp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Aw="framerAppearId",Ey="data-"+Rp(Aw),{schedule:bp}=_y(queueMicrotask,!1),wy=re.createContext({});function Cw(t,e,n,i,r){var s,o;const{visualElement:a}=re.useContext(Jc),l=re.useContext(yy),c=re.useContext(Qc),u=re.useContext(Ep).reducedMotion,d=re.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const h=d.current,p=re.useContext(wy);h&&!h.projection&&r&&(h.type==="html"||h.type==="svg")&&Rw(d.current,n,r,p);const v=re.useRef(!1);re.useInsertionEffect(()=>{h&&v.current&&h.update(n,c)});const x=n[Ey],m=re.useRef(!!x&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return vy(()=>{h&&(v.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),bp.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())}),re.useEffect(()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var f;(f=window.MotionHandoffMarkAsComplete)===null||f===void 0||f.call(window,x)}),m.current=!1))}),h}function Rw(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Ty(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Ls(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Ty(t){if(t)return t.options.allowProjection!==!1?t.projection:Ty(t.parent)}function bw({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&vw(t);function a(c,u){let d;const h={...re.useContext(Ep),...c,layoutId:Pw(c)},{isStatic:p}=h,v=Ew(c),x=i(c,p);if(!p&&wp){Dw();const m=Lw(h);d=m.MeasureLayout,v.visualElement=Cw(r,x,h,e,m.ProjectionNode)}return T.jsxs(Jc.Provider,{value:v,children:[d&&v.visualElement?T.jsx(d,{visualElement:v.visualElement,...h}):null,n(r,c,Tw(x,v.visualElement,u),x,p,v.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=re.forwardRef(a);return l[ww]=r,l}function Pw({layoutId:t}){const e=re.useContext(Sp).id;return e&&t!==void 0?e+"-"+t:t}function Dw(t,e){re.useContext(yy).strict}function Lw(t){const{drag:e,layout:n}=to;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Nw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pp(t){return typeof t!="string"||t.includes("-")?!1:!!(Nw.indexOf(t)>-1||/[A-Z]/u.test(t))}function Fg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Dp(t,e,n,i){if(typeof e=="function"){const[r,s]=Fg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Fg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Sf=t=>Array.isArray(t),Iw=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Uw=t=>Sf(t)?t[t.length-1]||0:t,jt=t=>!!(t&&t.getVelocity);function Xl(t){const e=jt(t)?t.get():t;return Iw(e)?e.toValue():e}function Fw({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:Ow(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const Ay=t=>(e,n)=>{const i=re.useContext(Jc),r=re.useContext(Qc),s=()=>Fw(t,e,i,r);return n?s():Mp(s)};function Ow(t,e,n,i){const r={},s=i(t,{});for(const h in s)r[h]=Xl(s[h]);let{initial:o,animate:a}=t;const l=tu(t),c=My(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!eu(d)){const h=Array.isArray(d)?d:[d];for(let p=0;p<h.length;p++){const v=Dp(t,h[p]);if(v){const{transitionEnd:x,transition:m,...f}=v;for(const g in f){let _=f[g];if(Array.isArray(_)){const y=u?_.length-1:0;_=_[y]}_!==null&&(r[g]=_)}for(const g in x)r[g]=x[g]}}}return r}const ho=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],is=new Set(ho),Cy=t=>e=>typeof e=="string"&&e.startsWith(t),Ry=Cy("--"),kw=Cy("var(--"),Lp=t=>kw(t)?Bw.test(t.split("/*")[0].trim()):!1,Bw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,by=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Fi=(t,e,n)=>n>e?e:n<t?t:n,po={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ea={...po,transform:t=>Fi(0,1,t)},cl={...po,default:1},Na=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Yi=Na("deg"),ui=Na("%"),Ae=Na("px"),zw=Na("vh"),Vw=Na("vw"),Og={...ui,parse:t=>ui.parse(t)/100,transform:t=>ui.transform(t*100)},Hw={borderWidth:Ae,borderTopWidth:Ae,borderRightWidth:Ae,borderBottomWidth:Ae,borderLeftWidth:Ae,borderRadius:Ae,radius:Ae,borderTopLeftRadius:Ae,borderTopRightRadius:Ae,borderBottomRightRadius:Ae,borderBottomLeftRadius:Ae,width:Ae,maxWidth:Ae,height:Ae,maxHeight:Ae,top:Ae,right:Ae,bottom:Ae,left:Ae,padding:Ae,paddingTop:Ae,paddingRight:Ae,paddingBottom:Ae,paddingLeft:Ae,margin:Ae,marginTop:Ae,marginRight:Ae,marginBottom:Ae,marginLeft:Ae,backgroundPositionX:Ae,backgroundPositionY:Ae},Gw={rotate:Yi,rotateX:Yi,rotateY:Yi,rotateZ:Yi,scale:cl,scaleX:cl,scaleY:cl,scaleZ:cl,skew:Yi,skewX:Yi,skewY:Yi,distance:Ae,translateX:Ae,translateY:Ae,translateZ:Ae,x:Ae,y:Ae,z:Ae,perspective:Ae,transformPerspective:Ae,opacity:Ea,originX:Og,originY:Og,originZ:Ae},kg={...po,transform:Math.round},Np={...Hw,...Gw,zIndex:kg,size:Ae,fillOpacity:Ea,strokeOpacity:Ea,numOctaves:kg},Ww={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},jw=ho.length;function Xw(t,e,n){let i="",r=!0;for(let s=0;s<jw;s++){const o=ho[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=by(a,Np[o]);if(!l){r=!1;const u=Ww[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Ip(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(is.has(l)){o=!0;continue}else if(Ry(l)){r[l]=c;continue}else{const u=by(c,Np[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=Xw(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const $w={offset:"stroke-dashoffset",array:"stroke-dasharray"},Yw={offset:"strokeDashoffset",array:"strokeDasharray"};function qw(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?$w:Yw;t[s.offset]=Ae.transform(-i);const o=Ae.transform(e),a=Ae.transform(n);t[s.array]=`${o} ${a}`}function Bg(t,e,n){return typeof t=="string"?t:Ae.transform(e+n*t)}function Kw(t,e,n){const i=Bg(e,t.x,t.width),r=Bg(n,t.y,t.height);return`${i} ${r}`}function Up(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(Ip(t,c,d),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:p,dimensions:v}=t;h.transform&&(v&&(p.transform=h.transform),delete h.transform),v&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=Kw(v,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),o!==void 0&&qw(h,o,a,l,!1)}const Fp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Py=()=>({...Fp(),attrs:{}}),Op=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Dy(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Ly=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ny(t,e,n,i){Dy(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Ly.has(r)?r:Rp(r),e.attrs[r])}const Ac={};function Zw(t){Object.assign(Ac,t)}function Iy(t,{layout:e,layoutId:n}){return is.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ac[t]||t==="opacity")}function kp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(jt(r[o])||e.style&&jt(e.style[o])||Iy(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function Uy(t,e,n){const i=kp(t,e,n);for(const r in t)if(jt(t[r])||jt(e[r])){const s=ho.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function Qw(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const zg=["x","y","width","height","cx","cy","r"],Jw={useVisualState:Ay({scrapeMotionValuesFromProps:Uy,createRenderState:Py,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(is.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<zg.length;a++){const l=zg[a];t[l]!==e[l]&&(o=!0)}o&&dt.read(()=>{Qw(n,i),dt.render(()=>{Up(i,r,Op(n.tagName),t.transformTemplate),Ny(n,i)})})}})},eT={useVisualState:Ay({scrapeMotionValuesFromProps:kp,createRenderState:Fp})};function Fy(t,e,n){for(const i in e)!jt(e[i])&&!Iy(i,n)&&(t[i]=e[i])}function tT({transformTemplate:t},e){return re.useMemo(()=>{const n=Fp();return Ip(n,e,t),Object.assign({},n.vars,n.style)},[e])}function nT(t,e){const n=t.style||{},i={};return Fy(i,n,t),Object.assign(i,tT(t,e)),i}function iT(t,e){const n={},i=nT(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function rT(t,e,n,i){const r=re.useMemo(()=>{const s=Py();return Up(s,e,Op(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Fy(s,t.style,t),r.style={...s,...r.style}}return r}function sT(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Pp(n)?rT:iT)(i,s,o,n),c=yw(i,typeof n=="string",t),u=n!==re.Fragment?{...c,...l,ref:r}:{},{children:d}=i,h=re.useMemo(()=>jt(d)?d.get():d,[d]);return re.createElement(n,{...u,children:h})}}function oT(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Pp(i)?Jw:eT,preloadedFeatures:t,useRender:sT(r),createVisualElement:e,Component:i};return bw(o)}}function Oy(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function nu(t,e,n){const i=t.getProps();return Dp(i,e,n!==void 0?n:i.custom,t)}const aT=Tp(()=>window.ScrollTimeline!==void 0);class lT{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(aT()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class cT extends lT{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Bp(t,e){return t?t[e]||t.default||t:void 0}const Mf=2e4;function ky(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Mf;)e+=n,i=t.next(e);return e>=Mf?1/0:e}function zp(t){return typeof t=="function"}function Vg(t,e){t.timeline=e,t.onfinish=null}const Vp=t=>Array.isArray(t)&&typeof t[0]=="number",uT={linearEasing:void 0};function dT(t,e){const n=Tp(t);return()=>{var i;return(i=uT[e])!==null&&i!==void 0?i:n()}}const Cc=dT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),By=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(eo(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function zy(t){return!!(typeof t=="function"&&Cc()||!t||typeof t=="string"&&(t in Ef||Cc())||Vp(t)||Array.isArray(t)&&t.every(zy))}const zo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Ef={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zo([0,.65,.55,1]),circOut:zo([.55,0,1,.45]),backIn:zo([.31,.01,.66,-.59]),backOut:zo([.33,1.53,.69,.99])};function Vy(t,e){if(t)return typeof t=="function"&&Cc()?By(t,e):Vp(t)?zo(t):Array.isArray(t)?t.map(n=>Vy(n,e)||Ef.easeOut):Ef[t]}const Gn={x:!1,y:!1};function Hy(){return Gn.x||Gn.y}function fT(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function Gy(t,e){const n=fT(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function Hg(t){return e=>{e.pointerType==="touch"||Hy()||t(e)}}function hT(t,e,n={}){const[i,r,s]=Gy(t,n),o=Hg(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=Hg(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const Wy=(t,e)=>e?t===e?!0:Wy(t,e.parentElement):!1,Hp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,pT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function mT(t){return pT.has(t.tagName)||t.tabIndex!==-1}const Vo=new WeakSet;function Gg(t){return e=>{e.key==="Enter"&&t(e)}}function Ou(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const gT=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Gg(()=>{if(Vo.has(n))return;Ou(n,"down");const r=Gg(()=>{Ou(n,"up")}),s=()=>Ou(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Wg(t){return Hp(t)&&!Hy()}function vT(t,e,n={}){const[i,r,s]=Gy(t,n),o=a=>{const l=a.currentTarget;if(!Wg(a)||Vo.has(l))return;Vo.add(l);const c=e(a),u=(p,v)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),!(!Wg(p)||!Vo.has(l))&&(Vo.delete(l),typeof c=="function"&&c(p,{success:v}))},d=p=>{u(p,n.useGlobalTarget||Wy(l,p.target))},h=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",h,r)};return i.forEach(a=>{!mT(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>gT(c,r),r)}),s}function xT(t){return t==="x"||t==="y"?Gn[t]?null:(Gn[t]=!0,()=>{Gn[t]=!1}):Gn.x||Gn.y?null:(Gn.x=Gn.y=!0,()=>{Gn.x=Gn.y=!1})}const jy=new Set(["width","height","top","left","right","bottom",...ho]);let $l;function _T(){$l=void 0}const di={now:()=>($l===void 0&&di.set(Ut.isProcessing||pw.useManualTiming?Ut.timestamp:performance.now()),$l),set:t=>{$l=t,queueMicrotask(_T)}};function Gp(t,e){t.indexOf(e)===-1&&t.push(e)}function Wp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class jp{constructor(){this.subscriptions=[]}add(e){return Gp(this.subscriptions,e),()=>Wp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Xy(t,e){return e?t*(1e3/e):0}const jg=30,yT=t=>!isNaN(parseFloat(t));class ST{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=di.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=di.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=yT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new jp);const i=this.events[e].add(n);return e==="change"?()=>{i(),dt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=di.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>jg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,jg);return Xy(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function wa(t,e){return new ST(t,e)}function MT(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,wa(n))}function ET(t,e){const n=nu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=Uw(s[o]);MT(t,o,a)}}function wT(t){return!!(jt(t)&&t.add)}function wf(t,e){const n=t.getValue("willChange");if(wT(n))return n.add(e)}function $y(t){return t.props[Ey]}const Yy=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,TT=1e-7,AT=12;function CT(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Yy(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>TT&&++a<AT);return o}function Ia(t,e,n,i){if(t===e&&n===i)return xn;const r=s=>CT(s,0,1,t,n);return s=>s===0||s===1?s:Yy(r(s),e,i)}const qy=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Ky=t=>e=>1-t(1-e),Zy=Ia(.33,1.53,.69,.99),Xp=Ky(Zy),Qy=qy(Xp),Jy=t=>(t*=2)<1?.5*Xp(t):.5*(2-Math.pow(2,-10*(t-1))),$p=t=>1-Math.sin(Math.acos(t)),eS=Ky($p),tS=qy($p),nS=t=>/^0[^.\s]+$/u.test(t);function RT(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||nS(t):!0}const ta=t=>Math.round(t*1e5)/1e5,Yp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function bT(t){return t==null}const PT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,qp=(t,e)=>n=>!!(typeof n=="string"&&PT.test(n)&&n.startsWith(t)||e&&!bT(n)&&Object.prototype.hasOwnProperty.call(n,e)),iS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Yp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},DT=t=>Fi(0,255,t),ku={...po,transform:t=>Math.round(DT(t))},Vr={test:qp("rgb","red"),parse:iS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+ku.transform(t)+", "+ku.transform(e)+", "+ku.transform(n)+", "+ta(Ea.transform(i))+")"};function LT(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Tf={test:qp("#"),parse:LT,transform:Vr.transform},Ns={test:qp("hsl","hue"),parse:iS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+ui.transform(ta(e))+", "+ui.transform(ta(n))+", "+ta(Ea.transform(i))+")"},Gt={test:t=>Vr.test(t)||Tf.test(t)||Ns.test(t),parse:t=>Vr.test(t)?Vr.parse(t):Ns.test(t)?Ns.parse(t):Tf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Vr.transform(t):Ns.transform(t)},NT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function IT(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Yp))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(NT))===null||n===void 0?void 0:n.length)||0)>0}const rS="number",sS="color",UT="var",FT="var(",Xg="${}",OT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ta(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(OT,l=>(Gt.test(l)?(i.color.push(s),r.push(sS),n.push(Gt.parse(l))):l.startsWith(FT)?(i.var.push(s),r.push(UT),n.push(l)):(i.number.push(s),r.push(rS),n.push(parseFloat(l))),++s,Xg)).split(Xg);return{values:n,split:a,indexes:i,types:r}}function oS(t){return Ta(t).values}function aS(t){const{split:e,types:n}=Ta(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===rS?s+=ta(r[o]):a===sS?s+=Gt.transform(r[o]):s+=r[o]}return s}}const kT=t=>typeof t=="number"?0:t;function BT(t){const e=oS(t);return aS(t)(e.map(kT))}const mr={test:IT,parse:oS,createTransformer:aS,getAnimatableNone:BT},zT=new Set(["brightness","contrast","saturate","opacity"]);function VT(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Yp)||[];if(!i)return t;const r=n.replace(i,"");let s=zT.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const HT=/\b([a-z-]*)\(.*?\)/gu,Af={...mr,getAnimatableNone:t=>{const e=t.match(HT);return e?e.map(VT).join(" "):t}},GT={...Np,color:Gt,backgroundColor:Gt,outlineColor:Gt,fill:Gt,stroke:Gt,borderColor:Gt,borderTopColor:Gt,borderRightColor:Gt,borderBottomColor:Gt,borderLeftColor:Gt,filter:Af,WebkitFilter:Af},Kp=t=>GT[t];function lS(t,e){let n=Kp(t);return n!==Af&&(n=mr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const WT=new Set(["auto","none","0"]);function jT(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!WT.has(s)&&Ta(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=lS(n,r)}const $g=t=>t===po||t===Ae,Yg=(t,e)=>parseFloat(t.split(", ")[e]),qg=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return Yg(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?Yg(s[1],t):0}},XT=new Set(["x","y","z"]),$T=ho.filter(t=>!XT.has(t));function YT(t){const e=[];return $T.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const no={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:qg(4,13),y:qg(5,14)};no.translateX=no.x;no.translateY=no.y;const Xr=new Set;let Cf=!1,Rf=!1;function cS(){if(Rf){const t=Array.from(Xr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=YT(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Rf=!1,Cf=!1,Xr.forEach(t=>t.complete()),Xr.clear()}function uS(){Xr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Rf=!0)})}function qT(){uS(),cS()}class Zp{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Xr.add(this),Cf||(Cf=!0,dt.read(uS),dt.resolveKeyframes(cS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Xr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Xr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const dS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),KT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ZT(t){const e=KT.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function fS(t,e,n=1){const[i,r]=ZT(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return dS(o)?parseFloat(o):o}return Lp(r)?fS(r,e,n+1):r}const hS=t=>e=>e.test(t),QT={test:t=>t==="auto",parse:t=>t},pS=[po,Ae,ui,Yi,Vw,zw,QT],Kg=t=>pS.find(hS(t));class mS extends Zp{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Lp(c))){const u=fS(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!jy.has(i)||e.length!==2)return;const[r,s]=e,o=Kg(r),a=Kg(s);if(o!==a)if($g(o)&&$g(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)RT(e[r])&&i.push(r);i.length&&jT(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=no[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=no[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Zg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(mr.test(t)||t==="0")&&!t.startsWith("url("));function JT(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function eA(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Zg(r,e),a=Zg(s,e);return!o||!a?!1:JT(t)||(n==="spring"||zp(n))&&i}const tA=t=>t!==null;function iu(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(tA),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const nA=40;class gS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=di.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>nA?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&qT(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=di.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!eA(e,i,r,s))if(o)this.options.duration=0;else{l&&l(iu(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const gt=(t,e,n)=>t+(e-t)*n;function Bu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function iA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Bu(l,a,t+1/3),s=Bu(l,a,t),o=Bu(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Rc(t,e){return n=>n>0?e:t}const zu=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},rA=[Tf,Vr,Ns],sA=t=>rA.find(e=>e.test(t));function Qg(t){const e=sA(t);if(!e)return!1;let n=e.parse(t);return e===Ns&&(n=iA(n)),n}const Jg=(t,e)=>{const n=Qg(t),i=Qg(e);if(!n||!i)return Rc(t,e);const r={...n};return s=>(r.red=zu(n.red,i.red,s),r.green=zu(n.green,i.green,s),r.blue=zu(n.blue,i.blue,s),r.alpha=gt(n.alpha,i.alpha,s),Vr.transform(r))},oA=(t,e)=>n=>e(t(n)),Ua=(...t)=>t.reduce(oA),bf=new Set(["none","hidden"]);function aA(t,e){return bf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function lA(t,e){return n=>gt(t,e,n)}function Qp(t){return typeof t=="number"?lA:typeof t=="string"?Lp(t)?Rc:Gt.test(t)?Jg:dA:Array.isArray(t)?vS:typeof t=="object"?Gt.test(t)?Jg:cA:Rc}function vS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Qp(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function cA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Qp(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function uA(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const dA=(t,e)=>{const n=mr.createTransformer(e),i=Ta(t),r=Ta(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?bf.has(t)&&!r.values.length||bf.has(e)&&!i.values.length?aA(t,e):Ua(vS(uA(i,r),r.values),n):Rc(t,e)};function xS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?gt(t,e,n):Qp(t)(t,e)}const fA=5;function _S(t,e,n){const i=Math.max(e-fA,0);return Xy(n-t(i),e-i)}const yt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Vu=.001;function hA({duration:t=yt.duration,bounce:e=yt.bounce,velocity:n=yt.velocity,mass:i=yt.mass}){let r,s,o=1-e;o=Fi(yt.minDamping,yt.maxDamping,o),t=Fi(yt.minDuration,yt.maxDuration,Pi(t)),o<1?(r=c=>{const u=c*o,d=u*t,h=u-n,p=Pf(c,o),v=Math.exp(-d);return Vu-h/p*v},s=c=>{const d=c*o*t,h=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,v=Math.exp(-d),x=Pf(Math.pow(c,2),o);return(-r(c)+Vu>0?-1:1)*((h-p)*v)/x}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-Vu+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=mA(r,s,a);if(t=bi(t),isNaN(l))return{stiffness:yt.stiffness,damping:yt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const pA=12;function mA(t,e,n){let i=n;for(let r=1;r<pA;r++)i=i-t(i)/e(i);return i}function Pf(t,e){return t*Math.sqrt(1-e*e)}const gA=["duration","bounce"],vA=["stiffness","damping","mass"];function ev(t,e){return e.some(n=>t[n]!==void 0)}function xA(t){let e={velocity:yt.velocity,stiffness:yt.stiffness,damping:yt.damping,mass:yt.mass,isResolvedFromDuration:!1,...t};if(!ev(t,vA)&&ev(t,gA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Fi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:yt.mass,stiffness:r,damping:s}}else{const n=hA(t);e={...e,...n,mass:yt.mass},e.isResolvedFromDuration=!0}return e}function yS(t=yt.visualDuration,e=yt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:h,isResolvedFromDuration:p}=xA({...n,velocity:-Pi(n.velocity||0)}),v=h||0,x=c/(2*Math.sqrt(l*u)),m=o-s,f=Pi(Math.sqrt(l/u)),g=Math.abs(m)<5;i||(i=g?yt.restSpeed.granular:yt.restSpeed.default),r||(r=g?yt.restDelta.granular:yt.restDelta.default);let _;if(x<1){const R=Pf(f,x);_=C=>{const A=Math.exp(-x*f*C);return o-A*((v+x*f*m)/R*Math.sin(R*C)+m*Math.cos(R*C))}}else if(x===1)_=R=>o-Math.exp(-f*R)*(m+(v+f*m)*R);else{const R=f*Math.sqrt(x*x-1);_=C=>{const A=Math.exp(-x*f*C),b=Math.min(R*C,300);return o-A*((v+x*f*m)*Math.sinh(b)+R*m*Math.cosh(b))/R}}const y={calculatedDuration:p&&d||null,next:R=>{const C=_(R);if(p)a.done=R>=d;else{let A=0;x<1&&(A=R===0?bi(v):_S(_,R,C));const b=Math.abs(A)<=i,E=Math.abs(o-C)<=r;a.done=b&&E}return a.value=a.done?o:C,a},toString:()=>{const R=Math.min(ky(y),Mf),C=By(A=>y.next(R*A).value,R,30);return R+"ms "+C}};return y}function tv({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],h={done:!1,value:d},p=b=>a!==void 0&&b<a||l!==void 0&&b>l,v=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let x=n*e;const m=d+x,f=o===void 0?m:o(m);f!==m&&(x=f-d);const g=b=>-x*Math.exp(-b/i),_=b=>f+g(b),y=b=>{const E=g(b),S=_(b);h.done=Math.abs(E)<=c,h.value=h.done?f:S};let R,C;const A=b=>{p(h.value)&&(R=b,C=yS({keyframes:[h.value,v(h.value)],velocity:_S(_,b,h.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:b=>{let E=!1;return!C&&R===void 0&&(E=!0,y(b),A(b)),R!==void 0&&b>=R?C.next(b-R):(!E&&y(b),h)}}}const _A=Ia(.42,0,1,1),yA=Ia(0,0,.58,1),SS=Ia(.42,0,.58,1),SA=t=>Array.isArray(t)&&typeof t[0]!="number",MA={linear:xn,easeIn:_A,easeInOut:SS,easeOut:yA,circIn:$p,circInOut:tS,circOut:eS,backIn:Xp,backInOut:Qy,backOut:Zy,anticipate:Jy},nv=t=>{if(Vp(t)){xy(t.length===4);const[e,n,i,r]=t;return Ia(e,n,i,r)}else if(typeof t=="string")return MA[t];return t};function EA(t,e,n){const i=[],r=n||xS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||xn:e;a=Ua(l,a)}i.push(a)}return i}function wA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(xy(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=EA(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const h=eo(t[d],t[d+1],u);return a[d](h)};return n?u=>c(Fi(t[0],t[s-1],u)):c}function TA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=eo(0,e,i);t.push(gt(n,1,r))}}function AA(t){const e=[0];return TA(e,t.length-1),e}function CA(t,e){return t.map(n=>n*e)}function RA(t,e){return t.map(()=>e||SS).splice(0,t.length-1)}function bc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=SA(i)?i.map(nv):nv(i),s={done:!1,value:e[0]},o=CA(n&&n.length===e.length?n:AA(e),t),a=wA(o,e,{ease:Array.isArray(r)?r:RA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const bA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>dt.update(e,!0),stop:()=>pr(e),now:()=>Ut.isProcessing?Ut.timestamp:di.now()}},PA={decay:tv,inertia:tv,tween:bc,keyframes:bc,spring:yS},DA=t=>t/100;class Jp extends gS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Zp,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=zp(n)?n:PA[n]||bc;let l,c;a!==bc&&typeof e[0]!="number"&&(l=Ua(DA,xS(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=ky(u));const{calculatedDuration:d}=u,h=d+r,p=h*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:h,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:b}=this.options;return{done:!0,value:b[b.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:h,repeat:p,repeatType:v,repeatDelay:x,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const f=this.currentTime-h*(this.speed>=0?1:-1),g=this.speed>=0?f<0:f>u;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let _=this.currentTime,y=s;if(p){const b=Math.min(this.currentTime,u)/d;let E=Math.floor(b),S=b%1;!S&&b>=1&&(S=1),S===1&&E--,E=Math.min(E,p+1),!!(E%2)&&(v==="reverse"?(S=1-S,x&&(S-=x/d)):v==="mirror"&&(y=o)),_=Fi(0,1,S)*d}const R=g?{done:!1,value:l[0]}:y.next(_);a&&(R.value=a(R.value));let{done:C}=R;!g&&c!==null&&(C=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return A&&r!==void 0&&(R.value=iu(l,this.options,r)),m&&m(R.value),A&&this.finish(),R}get duration(){const{resolved:e}=this;return e?Pi(e.calculatedDuration):0}get time(){return Pi(this.currentTime)}set time(e){e=bi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Pi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=bA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const LA=new Set(["opacity","clipPath","filter","transform"]);function NA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Vy(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const IA=Tp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Pc=10,UA=2e4;function FA(t){return zp(t.type)||t.type==="spring"||!zy(t.ease)}function OA(t,e){const n=new Jp({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<UA;)i=n.sample(s),r.push(i.value),s+=Pc;return{times:void 0,keyframes:r,duration:s-Pc,ease:"linear"}}const MS={anticipate:Jy,backInOut:Qy,circInOut:tS};function kA(t){return t in MS}class iv extends gS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new mS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Cc()&&kA(s)&&(s=MS[s]),FA(this.options)){const{onComplete:d,onUpdate:h,motionValue:p,element:v,...x}=this.options,m=OA(e,x);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const u=NA(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(Vg(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(iu(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Pi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Pi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=bi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return xn;const{animation:i}=n;Vg(i,e)}return xn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:h,...p}=this.options,v=new Jp({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),x=bi(this.time);c.setWithVelocity(v.sample(x-Pc).value,v.sample(x).value,Pc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return IA()&&i&&LA.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const BA={type:"spring",stiffness:500,damping:25,restSpeed:10},zA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),VA={type:"keyframes",duration:.8},HA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},GA=(t,{keyframes:e})=>e.length>2?VA:is.has(t)?t.startsWith("scale")?zA(e[1]):BA:HA;function WA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const em=(t,e,n,i={},r,s)=>o=>{const a=Bp(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-bi(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};WA(a)||(u={...u,...GA(t,u)}),u.duration&&(u.duration=bi(u.duration)),u.repeatDelay&&(u.repeatDelay=bi(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const h=iu(u.keyframes,a);if(h!==void 0)return dt.update(()=>{u.onUpdate(h),u.onComplete()}),new cT([])}return!s&&iv.supports(u)?new iv(u):new Jp(u)};function jA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function ES(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const h=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||u&&jA(u,d))continue;const v={delay:n,...Bp(o||{},d)};let x=!1;if(window.MotionHandoffAnimation){const f=$y(t);if(f){const g=window.MotionHandoffAnimation(f,d,dt);g!==null&&(v.startTime=g,x=!0)}}wf(t,d),h.start(em(d,h,p,t.shouldReduceMotion&&jy.has(d)?{type:!1}:v,t,x));const m=h.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{dt.update(()=>{a&&ET(t,a)})}),c}function Df(t,e,n={}){var i;const r=nu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(ES(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:h}=s;return XA(t,e,u+c,d,h,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function XA(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort($A).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Df(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function $A(t,e){return t.sortNodePosition(e)}function YA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Df(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Df(t,e,n);else{const r=typeof e=="function"?nu(t,e,n.custom):e;i=Promise.all(ES(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const qA=Cp.length;function wS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?wS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<qA;n++){const i=Cp[n],r=t.props[i];(Ma(r)||r===!1)&&(e[i]=r)}return e}const KA=[...Ap].reverse(),ZA=Ap.length;function QA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>YA(t,n,i)))}function JA(t){let e=QA(t),n=rv(),i=!0;const r=l=>(c,u)=>{var d;const h=nu(t,u,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(h){const{transition:p,transitionEnd:v,...x}=h;c={...c,...x,...v}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=wS(t.parent)||{},d=[],h=new Set;let p={},v=1/0;for(let m=0;m<ZA;m++){const f=KA[m],g=n[f],_=c[f]!==void 0?c[f]:u[f],y=Ma(_),R=f===l?g.isActive:null;R===!1&&(v=m);let C=_===u[f]&&_!==c[f]&&y;if(C&&i&&t.manuallyAnimateOnMount&&(C=!1),g.protectedKeys={...p},!g.isActive&&R===null||!_&&!g.prevProp||eu(_)||typeof _=="boolean")continue;const A=eC(g.prevProp,_);let b=A||f===l&&g.isActive&&!C&&y||m>v&&y,E=!1;const S=Array.isArray(_)?_:[_];let D=S.reduce(r(f),{});R===!1&&(D={});const{prevResolvedValues:B={}}=g,H={...B,...D},q=X=>{b=!0,h.has(X)&&(E=!0,h.delete(X)),g.needsAnimating[X]=!0;const L=t.getValue(X);L&&(L.liveStyle=!1)};for(const X in H){const L=D[X],j=B[X];if(p.hasOwnProperty(X))continue;let K=!1;Sf(L)&&Sf(j)?K=!Oy(L,j):K=L!==j,K?L!=null?q(X):h.add(X):L!==void 0&&h.has(X)?q(X):g.protectedKeys[X]=!0}g.prevProp=_,g.prevResolvedValues=D,g.isActive&&(p={...p,...D}),i&&t.blockInitialAnimation&&(b=!1),b&&(!(C&&A)||E)&&d.push(...S.map(X=>({animation:X,options:{type:f}})))}if(h.size){const m={};h.forEach(f=>{const g=t.getBaseTarget(f),_=t.getValue(f);_&&(_.liveStyle=!0),m[f]=g??null}),d.push({animation:m})}let x=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(x=!1),i=!1,x?e(d):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(h=>{var p;return(p=h.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=rv(),i=!0}}}function eC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Oy(e,t):!1}function Er(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function rv(){return{animate:Er(!0),whileInView:Er(),whileHover:Er(),whileTap:Er(),whileDrag:Er(),whileFocus:Er(),exit:Er()}}class Sr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class tC extends Sr{constructor(e){super(e),e.animationState||(e.animationState=JA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();eu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let nC=0;class iC extends Sr{constructor(){super(...arguments),this.id=nC++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const rC={animation:{Feature:tC},exit:{Feature:iC}};function Aa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Fa(t){return{point:{x:t.pageX,y:t.pageY}}}const sC=t=>e=>Hp(e)&&t(e,Fa(e));function na(t,e,n,i){return Aa(t,e,sC(n),i)}const sv=(t,e)=>Math.abs(t-e);function oC(t,e){const n=sv(t.x,e.x),i=sv(t.y,e.y);return Math.sqrt(n**2+i**2)}class TS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Gu(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=oC(d.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:v}=d,{timestamp:x}=Ut;this.history.push({...v,timestamp:x});const{onStart:m,onMove:f}=this.handlers;h||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,d)},this.handlePointerMove=(d,h)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Hu(h,this.transformPagePoint),dt.update(this.updatePoint,!0)},this.handlePointerUp=(d,h)=>{this.end();const{onEnd:p,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Gu(d.type==="pointercancel"?this.lastMoveEventInfo:Hu(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),v&&v(d,m)},!Hp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Fa(e),a=Hu(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Ut;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Gu(a,this.history)),this.removeListeners=Ua(na(this.contextWindow,"pointermove",this.handlePointerMove),na(this.contextWindow,"pointerup",this.handlePointerUp),na(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),pr(this.updatePoint)}}function Hu(t,e){return e?{point:e(t.point)}:t}function ov(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Gu({point:t},e){return{point:t,delta:ov(t,AS(e)),offset:ov(t,aC(e)),velocity:lC(e,.1)}}function aC(t){return t[0]}function AS(t){return t[t.length-1]}function lC(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=AS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>bi(e)));)n--;if(!i)return{x:0,y:0};const s=Pi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const CS=1e-4,cC=1-CS,uC=1+CS,RS=.01,dC=0-RS,fC=0+RS;function Sn(t){return t.max-t.min}function hC(t,e,n){return Math.abs(t-e)<=n}function av(t,e,n,i=.5){t.origin=i,t.originPoint=gt(e.min,e.max,t.origin),t.scale=Sn(n)/Sn(e),t.translate=gt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=cC&&t.scale<=uC||isNaN(t.scale))&&(t.scale=1),(t.translate>=dC&&t.translate<=fC||isNaN(t.translate))&&(t.translate=0)}function ia(t,e,n,i){av(t.x,e.x,n.x,i?i.originX:void 0),av(t.y,e.y,n.y,i?i.originY:void 0)}function lv(t,e,n){t.min=n.min+e.min,t.max=t.min+Sn(e)}function pC(t,e,n){lv(t.x,e.x,n.x),lv(t.y,e.y,n.y)}function cv(t,e,n){t.min=e.min-n.min,t.max=t.min+Sn(e)}function ra(t,e,n){cv(t.x,e.x,n.x),cv(t.y,e.y,n.y)}function mC(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?gt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?gt(n,t,i.max):Math.min(t,n)),t}function uv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function gC(t,{top:e,left:n,bottom:i,right:r}){return{x:uv(t.x,n,r),y:uv(t.y,e,i)}}function dv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function vC(t,e){return{x:dv(t.x,e.x),y:dv(t.y,e.y)}}function xC(t,e){let n=.5;const i=Sn(t),r=Sn(e);return r>i?n=eo(e.min,e.max-i,t.min):i>r&&(n=eo(t.min,t.max-r,e.min)),Fi(0,1,n)}function _C(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Lf=.35;function yC(t=Lf){return t===!1?t=0:t===!0&&(t=Lf),{x:fv(t,"left","right"),y:fv(t,"top","bottom")}}function fv(t,e,n){return{min:hv(t,e),max:hv(t,n)}}function hv(t,e){return typeof t=="number"?t:t[e]||0}const pv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Is=()=>({x:pv(),y:pv()}),mv=()=>({min:0,max:0}),Et=()=>({x:mv(),y:mv()});function Rn(t){return[t("x"),t("y")]}function bS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function SC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function MC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Wu(t){return t===void 0||t===1}function Nf({scale:t,scaleX:e,scaleY:n}){return!Wu(t)||!Wu(e)||!Wu(n)}function Lr(t){return Nf(t)||PS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function PS(t){return gv(t.x)||gv(t.y)}function gv(t){return t&&t!=="0%"}function Dc(t,e,n){const i=t-n,r=e*i;return n+r}function vv(t,e,n,i,r){return r!==void 0&&(t=Dc(t,r,i)),Dc(t,n,i)+e}function If(t,e=0,n=1,i,r){t.min=vv(t.min,e,n,i,r),t.max=vv(t.max,e,n,i,r)}function DS(t,{x:e,y:n}){If(t.x,e.translate,e.scale,e.originPoint),If(t.y,n.translate,n.scale,n.originPoint)}const xv=.999999999999,_v=1.0000000000001;function EC(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Fs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,DS(t,o)),i&&Lr(s.latestValues)&&Fs(t,s.latestValues))}e.x<_v&&e.x>xv&&(e.x=1),e.y<_v&&e.y>xv&&(e.y=1)}function Us(t,e){t.min=t.min+e,t.max=t.max+e}function yv(t,e,n,i,r=.5){const s=gt(t.min,t.max,r);If(t,e,n,s,i)}function Fs(t,e){yv(t.x,e.x,e.scaleX,e.scale,e.originX),yv(t.y,e.y,e.scaleY,e.scale,e.originY)}function LS(t,e){return bS(MC(t.getBoundingClientRect(),e))}function wC(t,e,n){const i=LS(t,n),{scroll:r}=e;return r&&(Us(i.x,r.offset.x),Us(i.y,r.offset.y)),i}const NS=({current:t})=>t?t.ownerDocument.defaultView:null,TC=new WeakMap;class AC{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Et(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Fa(u).point)},s=(u,d)=>{const{drag:h,dragPropagation:p,onDragStart:v}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=xT(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Rn(m=>{let f=this.getAxisMotionValue(m).get()||0;if(ui.test(f)){const{projection:g}=this.visualElement;if(g&&g.layout){const _=g.layout.layoutBox[m];_&&(f=Sn(_)*(parseFloat(f)/100))}}this.originPoint[m]=f}),v&&dt.postRender(()=>v(u,d)),wf(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:v,onDrag:x}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=CC(m),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),x&&x(u,d)},a=(u,d)=>this.stop(u,d),l=()=>Rn(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new TS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:NS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&dt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!ul(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=mC(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ls(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=gC(r.layoutBox,n):this.constraints=!1,this.elastic=yC(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Rn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=_C(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ls(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=wC(i,r.root,this.visualElement.getTransformPagePoint());let o=vC(r.layout.layoutBox,s);if(n){const a=n(SC(o));this.hasMutatedConstraints=!!a,a&&(o=bS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Rn(u=>{if(!ul(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[u]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return wf(this.visualElement,e),i.start(em(e,i,0,n,this.visualElement,!1))}stopAnimation(){Rn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Rn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Rn(n=>{const{drag:i}=this.getProps();if(!ul(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-gt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ls(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Rn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=xC({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Rn(o=>{if(!ul(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(gt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;TC.set(this.visualElement,this);const e=this.visualElement.current,n=na(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ls(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),dt.read(i);const o=Aa(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Rn(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Lf,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function ul(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function CC(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class RC extends Sr{constructor(e){super(e),this.removeGroupControls=xn,this.removeListeners=xn,this.controls=new AC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||xn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Sv=t=>(e,n)=>{t&&dt.postRender(()=>t(e,n))};class bC extends Sr{constructor(){super(...arguments),this.removePointerDownListener=xn}onPointerDown(e){this.session=new TS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:NS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Sv(e),onStart:Sv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&dt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=na(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Yl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Mv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const bo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ae.test(t))t=parseFloat(t);else return t;const n=Mv(t,e.target.x),i=Mv(t,e.target.y);return`${n}% ${i}%`}},PC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=mr.parse(t);if(r.length>5)return i;const s=mr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=gt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class DC extends re.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;Zw(LC),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Yl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||dt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),bp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function IS(t){const[e,n]=gy(),i=re.useContext(Sp);return T.jsx(DC,{...t,layoutGroup:i,switchLayoutGroup:re.useContext(wy),isPresent:e,safeToRemove:n})}const LC={borderRadius:{...bo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bo,borderTopRightRadius:bo,borderBottomLeftRadius:bo,borderBottomRightRadius:bo,boxShadow:PC};function NC(t,e,n){const i=jt(t)?t:wa(t);return i.start(em("",i,e,n)),i.animation}function IC(t){return t instanceof SVGElement&&t.tagName!=="svg"}const UC=(t,e)=>t.depth-e.depth;class FC{constructor(){this.children=[],this.isDirty=!1}add(e){Gp(this.children,e),this.isDirty=!0}remove(e){Wp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(UC),this.isDirty=!1,this.children.forEach(e)}}function OC(t,e){const n=di.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(pr(i),t(s-e))};return dt.read(i,!0),()=>pr(i)}const US=["TopLeft","TopRight","BottomLeft","BottomRight"],kC=US.length,Ev=t=>typeof t=="string"?parseFloat(t):t,wv=t=>typeof t=="number"||Ae.test(t);function BC(t,e,n,i,r,s){r?(t.opacity=gt(0,n.opacity!==void 0?n.opacity:1,zC(i)),t.opacityExit=gt(e.opacity!==void 0?e.opacity:1,0,VC(i))):s&&(t.opacity=gt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<kC;o++){const a=`border${US[o]}Radius`;let l=Tv(e,a),c=Tv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||wv(l)===wv(c)?(t[a]=Math.max(gt(Ev(l),Ev(c),i),0),(ui.test(c)||ui.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=gt(e.rotate||0,n.rotate||0,i))}function Tv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const zC=FS(0,.5,eS),VC=FS(.5,.95,xn);function FS(t,e,n){return i=>i<t?0:i>e?1:n(eo(t,e,i))}function Av(t,e){t.min=e.min,t.max=e.max}function An(t,e){Av(t.x,e.x),Av(t.y,e.y)}function Cv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Rv(t,e,n,i,r){return t-=e,t=Dc(t,1/n,i),r!==void 0&&(t=Dc(t,1/r,i)),t}function HC(t,e=0,n=1,i=.5,r,s=t,o=t){if(ui.test(e)&&(e=parseFloat(e),e=gt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=gt(s.min,s.max,i);t===s&&(a-=e),t.min=Rv(t.min,e,n,a,r),t.max=Rv(t.max,e,n,a,r)}function bv(t,e,[n,i,r],s,o){HC(t,e[n],e[i],e[r],e.scale,s,o)}const GC=["x","scaleX","originX"],WC=["y","scaleY","originY"];function Pv(t,e,n,i){bv(t.x,e,GC,n?n.x:void 0,i?i.x:void 0),bv(t.y,e,WC,n?n.y:void 0,i?i.y:void 0)}function Dv(t){return t.translate===0&&t.scale===1}function OS(t){return Dv(t.x)&&Dv(t.y)}function Lv(t,e){return t.min===e.min&&t.max===e.max}function jC(t,e){return Lv(t.x,e.x)&&Lv(t.y,e.y)}function Nv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function kS(t,e){return Nv(t.x,e.x)&&Nv(t.y,e.y)}function Iv(t){return Sn(t.x)/Sn(t.y)}function Uv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class XC{constructor(){this.members=[]}add(e){Gp(this.members,e),e.scheduleRender()}remove(e){if(Wp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function $C(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:h,skewX:p,skewY:v}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),v&&(i+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Nr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ho=typeof window<"u"&&window.MotionDebug!==void 0,ju=["","X","Y","Z"],YC={visibility:"hidden"},Fv=1e3;let qC=0;function Xu(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function BS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=$y(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",dt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&BS(i)}function zS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=qC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ho&&(Nr.totalNodes=Nr.resolvedTargetDeltas=Nr.recalculatedProjection=0),this.nodes.forEach(QC),this.nodes.forEach(iR),this.nodes.forEach(rR),this.nodes.forEach(JC),Ho&&window.MotionDebug.record(Nr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new FC)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new jp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=IC(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const h=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=OC(h,250),Yl.hasAnimatedSinceResize&&(Yl.hasAnimatedSinceResize=!1,this.nodes.forEach(kv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||cR,{onLayoutAnimationStart:m,onLayoutAnimationComplete:f}=u.getProps(),g=!this.targetLayout||!kS(this.targetLayout,v)||p,_=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||_||h&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,_);const y={...Bp(x,"layout"),onPlay:m,onComplete:f};(u.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y)}else h||kv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,pr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sR),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&BS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ov);return}this.isUpdating||this.nodes.forEach(tR),this.isUpdating=!1,this.nodes.forEach(nR),this.nodes.forEach(KC),this.nodes.forEach(ZC),this.clearAllSnapshots();const a=di.now();Ut.delta=Fi(0,1e3/60,a-Ut.timestamp),Ut.timestamp=a,Ut.isProcessing=!0,Fu.update.process(Ut),Fu.preRender.process(Ut),Fu.render.process(Ut),Ut.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,bp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(eR),this.sharedNodes.forEach(oR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,dt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){dt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Et(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!OS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Lr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),uR(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Et();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(dR))){const{scroll:u}=this.root;u&&(Us(l.x,u.offset.x),Us(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=Et();if(An(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:h}=u;u!==this.root&&d&&h.layoutScroll&&(d.wasRoot&&An(l,o),Us(l.x,d.offset.x),Us(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=Et();An(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Fs(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Lr(u.latestValues)&&Fs(l,u.latestValues)}return Lr(this.latestValues)&&Fs(l,this.latestValues),l}removeTransform(o){const a=Et();An(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Lr(c.latestValues))continue;Nf(c.latestValues)&&c.updateSnapshot();const u=Et(),d=c.measurePageBox();An(u,d),Pv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Lr(this.latestValues)&&Pv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ut.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!(!this.layout||!(d||h))){if(this.resolvedRelativeTargetAt=Ut.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Et(),this.relativeTargetOrigin=Et(),ra(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),An(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Et(),this.targetWithTransforms=Et()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),pC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):An(this.target,this.layout.layoutBox),DS(this.target,this.targetDelta)):An(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Et(),this.relativeTargetOrigin=Et(),ra(this.relativeTargetOrigin,this.target,p.target),An(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ho&&Nr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Nf(this.parent.latestValues)||PS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ut.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;An(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;EC(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Et());const{target:v}=a;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Cv(this.prevProjectionDelta.x,this.projectionDelta.x),Cv(this.prevProjectionDelta.y,this.projectionDelta.y)),ia(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==p||!Uv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Uv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Ho&&Nr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Is(),this.projectionDelta=Is(),this.projectionDeltaWithTransform=Is()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Is();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Et(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=p!==v,m=this.getStack(),f=!m||m.members.length<=1,g=!!(x&&!f&&this.options.crossfade===!0&&!this.path.some(lR));this.animationProgress=0;let _;this.mixTargetDelta=y=>{const R=y/1e3;Bv(d.x,o.x,R),Bv(d.y,o.y,R),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ra(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),aR(this.relativeTarget,this.relativeTargetOrigin,h,R),_&&jC(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=Et()),An(_,this.relativeTarget)),x&&(this.animationValues=u,BC(u,c,this.latestValues,R,g,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=R},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(pr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=dt.update(()=>{Yl.hasAnimatedSinceResize=!0,this.currentAnimation=NC(0,Fv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Fv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&VS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Et();const d=Sn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const h=Sn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}An(a,l),Fs(a,u),ia(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new XC),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Xu("z",o,c,this.animationValues);for(let u=0;u<ju.length;u++)Xu(`rotate${ju[u]}`,o,c,this.animationValues),Xu(`skew${ju[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return YC;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Xl(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Xl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Lr(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const h=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=$C(this.projectionDeltaWithTransform,this.treeScale,h),u&&(c.transform=u(h,c.transform));const{x:p,y:v}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${v.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=d===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const x in Ac){if(h[x]===void 0)continue;const{correct:m,applyTo:f}=Ac[x],g=c.transform==="none"?h[x]:m(h[x],d);if(f){const _=f.length;for(let y=0;y<_;y++)c[f[y]]=g}else c[x]=g}return this.options.layoutId&&(c.pointerEvents=d===this?Xl(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Ov),this.root.sharedNodes.clear()}}}function KC(t){t.updateLayout()}function ZC(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Rn(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=Sn(h);h.min=i[d].min,h.max=h.min+p}):VS(s,n.layoutBox,i)&&Rn(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=Sn(i[d]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Is();ia(a,i,n.layoutBox);const l=Is();o?ia(l,t.applyTransform(r,!0),n.measuredBox):ia(l,i,n.layoutBox);const c=!OS(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:h,layout:p}=d;if(h&&p){const v=Et();ra(v,n.layoutBox,h.layoutBox);const x=Et();ra(x,i,p.layoutBox),kS(v,x)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=v,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function QC(t){Ho&&Nr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function JC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function eR(t){t.clearSnapshot()}function Ov(t){t.clearMeasurements()}function tR(t){t.isLayoutDirty=!1}function nR(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function kv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function iR(t){t.resolveTargetDelta()}function rR(t){t.calcProjection()}function sR(t){t.resetSkewAndRotation()}function oR(t){t.removeLeadSnapshot()}function Bv(t,e,n){t.translate=gt(e.translate,0,n),t.scale=gt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function zv(t,e,n,i){t.min=gt(e.min,n.min,i),t.max=gt(e.max,n.max,i)}function aR(t,e,n,i){zv(t.x,e.x,n.x,i),zv(t.y,e.y,n.y,i)}function lR(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const cR={duration:.45,ease:[.4,0,.1,1]},Vv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Hv=Vv("applewebkit/")&&!Vv("chrome/")?Math.round:xn;function Gv(t){t.min=Hv(t.min),t.max=Hv(t.max)}function uR(t){Gv(t.x),Gv(t.y)}function VS(t,e,n){return t==="position"||t==="preserve-aspect"&&!hC(Iv(e),Iv(n),.2)}function dR(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const fR=zS({attachResizeListener:(t,e)=>Aa(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$u={current:void 0},HS=zS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!$u.current){const t=new fR({});t.mount(window),t.setOptions({layoutScroll:!0}),$u.current=t}return $u.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),hR={pan:{Feature:bC},drag:{Feature:RC,ProjectionNode:HS,MeasureLayout:IS}};function Wv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&dt.postRender(()=>s(e,Fa(e)))}class pR extends Sr{mount(){const{current:e}=this.node;e&&(this.unmount=hT(e,n=>(Wv(this.node,n,"Start"),i=>Wv(this.node,i,"End"))))}unmount(){}}class mR extends Sr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ua(Aa(this.node.current,"focus",()=>this.onFocus()),Aa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function jv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&dt.postRender(()=>s(e,Fa(e)))}class gR extends Sr{mount(){const{current:e}=this.node;e&&(this.unmount=vT(e,n=>(jv(this.node,n,"Start"),(i,{success:r})=>jv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Uf=new WeakMap,Yu=new WeakMap,vR=t=>{const e=Uf.get(t.target);e&&e(t)},xR=t=>{t.forEach(vR)};function _R({root:t,...e}){const n=t||document;Yu.has(n)||Yu.set(n,{});const i=Yu.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(xR,{root:t,...e})),i[r]}function yR(t,e,n){const i=_R(e);return Uf.set(t,n),i.observe(t),()=>{Uf.delete(t),i.unobserve(t)}}const SR={some:0,all:1};class MR extends Sr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:SR[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),h=c?u:d;h&&h(l)};return yR(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(ER(e,n))&&this.startObserver()}unmount(){}}function ER({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const wR={inView:{Feature:MR},tap:{Feature:gR},focus:{Feature:mR},hover:{Feature:pR}},TR={layout:{ProjectionNode:HS,MeasureLayout:IS}},Ff={current:null},GS={current:!1};function AR(){if(GS.current=!0,!!wp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ff.current=t.matches;t.addListener(e),e()}else Ff.current=!1}const CR=[...pS,Gt,mr],RR=t=>CR.find(hS(t)),Xv=new WeakMap;function bR(t,e,n){for(const i in e){const r=e[i],s=n[i];if(jt(r))t.addValue(i,r);else if(jt(s))t.addValue(i,wa(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,wa(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const $v=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class PR{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Zp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=di.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,dt.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=tu(n),this.isVariantNode=My(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const v=h[p];l[p]!==void 0&&jt(v)&&v.set(l[p],!1)}}mount(e){this.current=e,Xv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),GS.current||AR(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ff.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Xv.delete(this.current),this.projection&&this.projection.unmount(),pr(this.notifyUpdate),pr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=is.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&dt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in to){const n=to[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Et()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<$v.length;i++){const r=$v[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=bR(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=wa(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(dS(r)||nS(r))?r=parseFloat(r):!RR(r)&&mr.test(n)&&(r=lS(e,n)),this.setBaseTarget(e,jt(r)?r.get():r)),jt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Dp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!jt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new jp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class WS extends PR{constructor(){super(...arguments),this.KeyframeResolver=mS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;jt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function DR(t){return window.getComputedStyle(t)}class LR extends WS{constructor(){super(...arguments),this.type="html",this.renderInstance=Dy}readValueFromInstance(e,n){if(is.has(n)){const i=Kp(n);return i&&i.default||0}else{const i=DR(e),r=(Ry(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return LS(e,n)}build(e,n,i){Ip(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return kp(e,n,i)}}class NR extends WS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Et}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(is.has(n)){const i=Kp(n);return i&&i.default||0}return n=Ly.has(n)?n:Rp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return Uy(e,n,i)}build(e,n,i){Up(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){Ny(e,n,i,r)}mount(e){this.isSVGTag=Op(e.tagName),super.mount(e)}}const IR=(t,e)=>Pp(t)?new NR(e):new LR(e,{allowProjection:t!==re.Fragment}),UR=oT({...rC,...wR,...hR,...TR},IR),Zn=Sw(UR);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),OR=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),Yv=t=>{const e=OR(t);return e.charAt(0).toUpperCase()+e.slice(1)},jS=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),kR=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var BR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=re.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>re.createElement("svg",{ref:l,...BR,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:jS("lucide",r),...!s&&!kR(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,u])=>re.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=(t,e)=>{const n=re.forwardRef(({className:i,...r},s)=>re.createElement(zR,{ref:s,iconNode:e,className:jS(`lucide-${FR(Yv(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Yv(t),n};/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],HR=en("arrow-down",VR);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],XS=en("arrow-left",GR);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],$r=en("arrow-up-right",WR);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],qv=en("check",jR);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XR=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],$R=en("eye",XR);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],$S=en("layout-dashboard",YR);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],KR=en("link",qR);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],QR=en("linkedin",ZR);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],eb=en("log-out",JR);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],nb=en("mail",tb);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],rb=en("map-pin",ib);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ob=en("phone",sb);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Kv=en("plus",ab);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],cb=en("sparkles",lb);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],db=en("trash-2",ub);function tm(){const[t,e]=re.useState({x:0,y:0}),[n,i]=re.useState(!1);return re.useEffect(()=>{const r=o=>{e({x:o.clientX,y:o.clientY})},s=o=>{const a=o.target;a.tagName.toLowerCase()==="a"||a.tagName.toLowerCase()==="button"||a.closest("a")||a.closest("button")||a.classList.contains("hover-target")?i(!0):i(!1)};return window.addEventListener("mousemove",r),window.addEventListener("mouseover",s),()=>{window.removeEventListener("mousemove",r),window.removeEventListener("mouseover",s)}},[]),T.jsxs(T.Fragment,{children:[T.jsx(Zn.div,{className:"pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-difference",animate:{x:t.x,y:t.y,scale:n?0:1},transition:{type:"tween",ease:"backOut",duration:.1}}),T.jsx(Zn.div,{className:"pointer-events-none fixed left-0 top-0 z-[99] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent mix-blend-difference",animate:{x:t.x,y:t.y,scale:n?1.5:1,backgroundColor:n?"rgba(212, 255, 51, 0.2)":"rgba(212, 255, 51, 0)"},transition:{type:"spring",stiffness:150,damping:15,mass:.5}})]})}function nm(){return T.jsx("div",{className:"pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay",children:T.jsxs("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",className:"h-full w-full",children:[T.jsx("filter",{id:"noiseFilter",children:T.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.85",numOctaves:"3",stitchTiles:"stitch"})}),T.jsx("rect",{width:"100%",height:"100%",filter:"url(#noiseFilter)"})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const im="170",fb=0,Zv=1,hb=2,YS=1,pb=2,yi=3,gr=0,cn=1,Ei=2,ur=0,Ws=1,Of=2,Qv=3,Jv=4,mb=5,Fr=100,gb=101,vb=102,xb=103,_b=104,yb=200,Sb=201,Mb=202,Eb=203,kf=204,Bf=205,wb=206,Tb=207,Ab=208,Cb=209,Rb=210,bb=211,Pb=212,Db=213,Lb=214,zf=0,Vf=1,Hf=2,io=3,Gf=4,Wf=5,jf=6,Xf=7,qS=0,Nb=1,Ib=2,dr=0,Ub=1,Fb=2,Ob=3,kb=4,Bb=5,zb=6,Vb=7,KS=300,ro=301,so=302,$f=303,Yf=304,ru=306,qf=1e3,Hr=1001,Kf=1002,Qn=1003,Hb=1004,dl=1005,ai=1006,qu=1007,Gr=1008,Oi=1009,ZS=1010,QS=1011,Ca=1012,rm=1013,Jr=1014,Ai=1015,Oa=1016,sm=1017,om=1018,oo=1020,JS=35902,eM=1021,tM=1022,Yn=1023,nM=1024,iM=1025,js=1026,ao=1027,rM=1028,am=1029,sM=1030,lm=1031,cm=1033,ql=33776,Kl=33777,Zl=33778,Ql=33779,Zf=35840,Qf=35841,Jf=35842,eh=35843,th=36196,nh=37492,ih=37496,rh=37808,sh=37809,oh=37810,ah=37811,lh=37812,ch=37813,uh=37814,dh=37815,fh=37816,hh=37817,ph=37818,mh=37819,gh=37820,vh=37821,Jl=36492,xh=36494,_h=36495,oM=36283,yh=36284,Sh=36285,Mh=36286,Gb=3200,Wb=3201,aM=0,jb=1,Ji="",bn="srgb",mo="srgb-linear",su="linear",tt="srgb",os=7680,e0=519,Xb=512,$b=513,Yb=514,lM=515,qb=516,Kb=517,Zb=518,Qb=519,t0=35044,n0="300 es",Ci=2e3,Lc=2001;class go{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,Eh=180/Math.PI;function ka(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function Jb(t,e){return(t%e+e)%e}function Zu(t,e,n){return(1-n)*t+n*e}function Po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,o,a,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],x=r[0],m=r[3],f=r[6],g=r[1],_=r[4],y=r[7],R=r[2],C=r[5],A=r[8];return s[0]=o*x+a*g+l*R,s[3]=o*m+a*_+l*C,s[6]=o*f+a*y+l*A,s[1]=c*x+u*g+d*R,s[4]=c*m+u*_+d*C,s[7]=c*f+u*y+d*A,s[2]=h*x+p*g+v*R,s[5]=h*m+p*_+v*C,s[8]=h*f+p*y+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Qu.makeScale(e,n)),this}rotate(e){return this.premultiply(Qu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qu=new Ue;function cM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Nc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eP(){const t=Nc("canvas");return t.style.display="block",t}const i0={};function Go(t){t in i0||(i0[t]=!0,console.warn(t))}function tP(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function nP(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function iP(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===tt&&(t.r=Di(t.r),t.g=Di(t.g),t.b=Di(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===tt&&(t.r=Xs(t.r),t.g=Xs(t.g),t.b=Xs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Ji?su:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Di(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const r0=[.64,.33,.3,.6,.15,.06],s0=[.2126,.7152,.0722],o0=[.3127,.329],a0=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l0=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[mo]:{primaries:r0,whitePoint:o0,transfer:su,toXYZ:a0,fromXYZ:l0,luminanceCoefficients:s0,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:r0,whitePoint:o0,transfer:tt,toXYZ:a0,fromXYZ:l0,luminanceCoefficients:s0,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});let as;class rP{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=Nc("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=as}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Di(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Di(n[i]/255)*255):n[i]=Di(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sP=0;class uM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sP++}),this.uuid=ka(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ju(r[o].image)):s.push(Ju(r[o]))}else s=Ju(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ju(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?rP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oP=0;class un extends go{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Hr,r=Hr,s=ai,o=Gr,a=Yn,l=Oi,c=un.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oP++}),this.uuid=ka(),this.name="",this.source=new uM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==KS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qf:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case Kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qf:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case Kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=KS;un.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,n=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,R=(f+1)/2,C=(u+h)/4,A=(d+x)/4,b=(v+m)/4;return _>y&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=A/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=b/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-x)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aP extends go{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new nt(0,0,e,n),this.scissorTest=!1,this.viewport=new nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new uM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends aP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dM extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lP extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ba{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||c!==p||u!==v){let m=1-a;const f=l*h+c*p+u*v+d*x,g=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const R=Math.sqrt(_),C=Math.atan2(R,f*g);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const y=a*g;if(l=l*m+h*y,c=c*m+p*y,u=u*m+v*y,d=d*m+x*y,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*d+l*p-c*h,e[n+1]=l*v+u*h+c*d-a*p,e[n+2]=c*v+u*p+a*h-l*d,e[n+3]=u*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(c0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(c0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ed.copy(this).projectOnVector(e),this.sub(ed)}reflect(e){return this.sub(ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new O,c0=new Ba;class za{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),hl.subVectors(this.max,Do),ls.subVectors(e.a,Do),cs.subVectors(e.b,Do),us.subVectors(e.c,Do),Hi.subVectors(cs,ls),Gi.subVectors(us,cs),wr.subVectors(ls,us);let n=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-wr.z,wr.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,wr.z,0,-wr.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-wr.y,wr.x,0];return!td(n,ls,cs,us,hl)||(n=[1,0,0,0,1,0,0,0,1],!td(n,ls,cs,us,hl))?!1:(pl.crossVectors(Hi,Gi),n=[pl.x,pl.y,pl.z],td(n,ls,cs,us,hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new O,new O,new O,new O,new O,new O,new O,new O],zn=new O,fl=new za,ls=new O,cs=new O,us=new O,Hi=new O,Gi=new O,wr=new O,Do=new O,hl=new O,pl=new O,Tr=new O;function td(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Tr.fromArray(t,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=n.dot(Tr),u=i.dot(Tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cP=new za,Lo=new O,nd=new O;class ou{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):cP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const n=Lo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(nd)),this.expandByPoint(Lo.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new O,id=new O,ml=new O,Wi=new O,rd=new O,gl=new O,sd=new O;class fM{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){id.copy(e).add(n).multiplyScalar(.5),ml.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(id);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ml),a=Wi.dot(this.direction),l=-Wi.dot(ml),c=Wi.lengthSq(),u=Math.abs(1-o*o);let d,h,p,v;if(u>0)if(d=o*l-a,h=o*a-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const x=1/u;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(id).addScaledVector(ml,h),p}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){rd.subVectors(n,e),gl.subVectors(i,e),sd.crossVectors(rd,gl);let o=this.direction.dot(sd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(gl.crossVectors(Wi,gl));if(l<0)return null;const c=a*this.direction.dot(rd.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(sd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,v,x,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,v,x,m)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,v,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,v=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,x=c*d;n[0]=h+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,x=c*d;n[0]=h-x*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,v=a*u,x=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=x-h*d,n[8]=v*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=o*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uP,e,dP)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ji.crossVectors(i,fn),ji.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ji.crossVectors(i,fn)),ji.normalize(),vl.crossVectors(fn,ji),r[0]=ji.x,r[4]=vl.x,r[8]=fn.x,r[1]=ji.y,r[5]=vl.y,r[9]=fn.y,r[2]=ji.z,r[6]=vl.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],f=i[14],g=i[3],_=i[7],y=i[11],R=i[15],C=r[0],A=r[4],b=r[8],E=r[12],S=r[1],D=r[5],B=r[9],H=r[13],q=r[2],J=r[6],$=r[10],X=r[14],L=r[3],j=r[7],K=r[11],ae=r[15];return s[0]=o*C+a*S+l*q+c*L,s[4]=o*A+a*D+l*J+c*j,s[8]=o*b+a*B+l*$+c*K,s[12]=o*E+a*H+l*X+c*ae,s[1]=u*C+d*S+h*q+p*L,s[5]=u*A+d*D+h*J+p*j,s[9]=u*b+d*B+h*$+p*K,s[13]=u*E+d*H+h*X+p*ae,s[2]=v*C+x*S+m*q+f*L,s[6]=v*A+x*D+m*J+f*j,s[10]=v*b+x*B+m*$+f*K,s[14]=v*E+x*H+m*X+f*ae,s[3]=g*C+_*S+y*q+R*L,s[7]=g*A+_*D+y*J+R*j,s[11]=g*b+_*B+y*$+R*K,s[15]=g*E+_*H+y*X+R*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],x=e[7],m=e[11],f=e[15];return v*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],x=e[13],m=e[14],f=e[15],g=d*m*c-x*h*c+x*l*p-a*m*p-d*l*f+a*h*f,_=v*h*c-u*m*c-v*l*p+o*m*p+u*l*f-o*h*f,y=u*x*c-v*d*c+v*a*p-o*x*p-u*a*f+o*d*f,R=v*d*l-u*x*l-v*a*h+o*x*h+u*a*m-o*d*m,C=n*g+i*_+r*y+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=g*A,e[1]=(x*h*s-d*m*s-x*r*p+i*m*p+d*r*f-i*h*f)*A,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*A,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(u*m*s-v*h*s+v*r*p-n*m*p-u*r*f+n*h*f)*A,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*f-n*l*f)*A,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(v*d*s-u*x*s-v*i*p+n*x*p+u*i*f-n*d*f)*A,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*f+n*a*f)*A,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*A,e[12]=R*A,e[13]=(u*x*r-v*d*r+v*i*h-n*x*h-u*i*m+n*d*m)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,v=s*d,x=o*u,m=o*d,f=a*d,g=l*c,_=l*u,y=l*d,R=i.x,C=i.y,A=i.z;return r[0]=(1-(x+f))*R,r[1]=(p+y)*R,r[2]=(v-_)*R,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(h+f))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(v+_)*A,r[9]=(m-g)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ds.set(r[0],r[1],r[2]).length();const o=ds.set(r[4],r[5],r[6]).length(),a=ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,u=1/o,d=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,n.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ci){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===Ci)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Lc)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ci){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let v,x;if(a===Ci)v=(o+s)*d,x=-2*d;else if(a===Lc)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ds=new O,Vn=new ht,uP=new O(0,0,0),dP=new O(1,1,1),ji=new O,vl=new O,fn=new O,u0=new ht,d0=new Ba;class fi{constructor(e=0,n=0,i=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return u0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return d0.setFromEuler(this),this.setFromQuaternion(d0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class hM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fP=0;const f0=new O,fs=new Ba,vi=new ht,xl=new O,No=new O,hP=new O,pP=new Ba,h0=new O(1,0,0),p0=new O(0,1,0),m0=new O(0,0,1),g0={type:"added"},mP={type:"removed"},hs={type:"childadded",child:null},od={type:"childremoved",child:null};class Zt extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fP++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new O,n=new fi,i=new Ba,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ue}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(h0,e)}rotateY(e){return this.rotateOnAxis(p0,e)}rotateZ(e){return this.rotateOnAxis(m0,e)}translateOnAxis(e,n){return f0.copy(e).applyQuaternion(this.quaternion),this.position.add(f0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(h0,e)}translateY(e){return this.translateOnAxis(p0,e)}translateZ(e){return this.translateOnAxis(m0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xl.copy(e):xl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(No,xl,this.up):vi.lookAt(xl,No,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(vi),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(g0),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(mP),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(g0),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,hP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,pP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new O(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new O,xi=new O,ad=new O,_i=new O,ps=new O,ms=new O,v0=new O,ld=new O,cd=new O,ud=new O,dd=new nt,fd=new nt,hd=new nt;class $n{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),xi.subVectors(i,n),ad.subVectors(e,n);const o=Hn.dot(Hn),a=Hn.dot(xi),l=Hn.dot(ad),c=xi.dot(xi),u=xi.dot(ad),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return dd.setScalar(0),fd.setScalar(0),hd.setScalar(0),dd.fromBufferAttribute(e,n),fd.fromBufferAttribute(e,i),hd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(dd,s.x),o.addScaledVector(fd,s.y),o.addScaledVector(hd,s.z),o}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),xi.subVectors(e,n),Hn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Hn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ps.subVectors(r,i),ms.subVectors(s,i),ld.subVectors(e,i);const l=ps.dot(ld),c=ms.dot(ld);if(l<=0&&c<=0)return n.copy(i);cd.subVectors(e,r);const u=ps.dot(cd),d=ms.dot(cd);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ps,o);ud.subVectors(e,s);const p=ps.dot(ud),v=ms.dot(ud);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ms,a);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return v0.subVectors(s,r),a=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(v0,a);const f=1/(m+x+h);return o=x*f,a=h*f,n.copy(i).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},_l={h:0,s:0,l:0};function pd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=Jb(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=pd(o,s,e+1/3),this.g=pd(o,s,e),this.b=pd(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=pM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return $e.fromWorkingColorSpace(Ht.copy(this),e),Math.round(qt(Ht.r*255,0,255))*65536+Math.round(qt(Ht.g*255,0,255))*256+Math.round(qt(Ht.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=bn){$e.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(_l);const i=Zu(Xi.h,_l.h,n),r=Zu(Xi.s,_l.s,n),s=Zu(Xi.l,_l.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new ze;ze.NAMES=pM;let gP=0;class vo extends go{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gP++}),this.uuid=ka(),this.name="",this.blending=Ws,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=Bf,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kf&&(i.blendSrc=this.blendSrc),this.blendDst!==Bf&&(i.blendDst=this.blendDst),this.blendEquation!==Fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ic extends vo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=qS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new O,yl=new Ve;class Jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=t0,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Po(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Po(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Po(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t0&&(e.usage=this.usage),e}}class mM extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gM extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _n extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vP=0;const Cn=new ht,md=new Zt,gs=new O,hn=new za,Io=new za,Dt=new O;class ti extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vP++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cM(e)?gM:mM)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _n(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(hn.min,Io.min),hn.expandByPoint(Dt),Dt.addVectors(hn.max,Io.max),hn.expandByPoint(Dt)):(hn.expandByPoint(Io.min),hn.expandByPoint(Io.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),Dt.add(gs)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new O,l[b]=new O;const c=new O,u=new O,d=new O,h=new Ve,p=new Ve,v=new Ve,x=new O,m=new O;function f(b,E,S){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(D),a[b].add(x),a[E].add(x),a[S].add(x),l[b].add(m),l[E].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,E=g.length;b<E;++b){const S=g[b],D=S.start,B=S.count;for(let H=D,q=D+B;H<q;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new O,y=new O,R=new O,C=new O;function A(b){R.fromBufferAttribute(r,b),C.copy(R);const E=a[b];_.copy(E),_.sub(R.multiplyScalar(R.dot(E))).normalize(),y.crossVectors(C,E);const D=y.dot(l[b])<0?-1:1;o.setXYZW(b,_.x,_.y,_.z,D)}for(let b=0,E=g.length;b<E;++b){const S=g[b],D=S.start,B=S.count;for(let H=D,q=D+B;H<q;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new Jn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ti,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x0=new ht,Ar=new fM,Sl=new ou,_0=new O,Ml=new O,El=new O,wl=new O,gd=new O,Tl=new O,y0=new O,Al=new O;class Nn extends Zt{constructor(e=new ti,n=new Ic){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(gd.fromBufferAttribute(d,e),o?Tl.addScaledVector(gd,u):Tl.addScaledVector(gd.sub(n),u))}n.add(Tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Sl.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Sl,_0)===null||Ar.origin.distanceToSquared(_0)>(e.far-e.near)**2))&&(x0.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(x0),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,R=_;y<R;y+=3){const C=a.getX(y),A=a.getX(y+1),b=a.getX(y+2);r=Cl(this,f,e,i,c,u,d,C,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const g=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Cl(this,o,e,i,c,u,d,g,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,R=_;y<R;y+=3){const C=y,A=y+1,b=y+2;r=Cl(this,f,e,i,c,u,d,C,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const g=m,_=m+1,y=m+2;r=Cl(this,o,e,i,c,u,d,g,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function xP(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gr,a),l===null)return null;Al.copy(a),Al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Al);return c<n.near||c>n.far?null:{distance:c,point:Al.clone(),object:t}}function Cl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ml),t.getVertexPosition(l,El),t.getVertexPosition(c,wl);const u=xP(t,e,n,i,Ml,El,wl,y0);if(u){const d=new O;$n.getBarycoord(y0,Ml,El,wl,d),r&&(u.uv=$n.getInterpolatedAttribute(r,a,l,c,d,new Ve)),s&&(u.uv1=$n.getInterpolatedAttribute(s,a,l,c,d,new Ve)),o&&(u.normal=$n.getInterpolatedAttribute(o,a,l,c,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};$n.getNormal(Ml,El,wl,h.normal),u.face=h,u.barycoord=d}return u}class Va extends ti{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(d,2));function v(x,m,f,g,_,y,R,C,A,b,E){const S=y/A,D=R/b,B=y/2,H=R/2,q=C/2,J=A+1,$=b+1;let X=0,L=0;const j=new O;for(let K=0;K<$;K++){const ae=K*D-H;for(let Me=0;Me<J;Me++){const qe=Me*S-B;j[x]=qe*g,j[m]=ae*_,j[f]=q,c.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[f]=C>0?1:-1,u.push(j.x,j.y,j.z),d.push(Me/A),d.push(1-K/b),X+=1}}for(let K=0;K<b;K++)for(let ae=0;ae<A;ae++){const Me=h+ae+J*K,qe=h+ae+J*(K+1),W=h+(ae+1)+J*(K+1),ne=h+(ae+1)+J*K;l.push(Me,qe,ne),l.push(qe,W,ne),L+=6}a.addGroup(p,L,E),p+=L,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=lo(t[n]);for(const r in i)e[r]=i[r]}return e}function _P(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const yP={clone:lo,merge:$t};var SP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends vo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SP,this.fragmentShader=MP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=_P(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xM extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new O,S0=new Ve,M0=new Ve;class mn extends xM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Eh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,S0,M0),n.subVectors(M0,S0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ku*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vs=-90,xs=1;class EP extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(vs,xs,e,n);r.layers=this.layers,this.add(r);const s=new mn(vs,xs,e,n);s.layers=this.layers,this.add(s);const o=new mn(vs,xs,e,n);o.layers=this.layers,this.add(o);const a=new mn(vs,xs,e,n);a.layers=this.layers,this.add(a);const l=new mn(vs,xs,e,n);l.layers=this.layers,this.add(l);const c=new mn(vs,xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class _M extends un{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ro,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wP extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _M(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ai}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Va(5,5,5),s=new vr({name:"CubemapFromEquirect",uniforms:lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:ur});s.uniforms.tEquirect.value=n;const o=new Nn(r,s),a=n.minFilter;return n.minFilter===Gr&&(n.minFilter=ai),new EP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const vd=new O,TP=new O,AP=new Ue;class Ir{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vd.subVectors(i,n).cross(TP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||AP.getNormalMatrix(e),r=this.coplanarPoint(vd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new ou,Rl=new O;class um{constructor(e=new Ir,n=new Ir,i=new Ir,r=new Ir,s=new Ir,o=new Ir){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],v=r[9],x=r[10],m=r[11],f=r[12],g=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-f).normalize(),i[1].setComponents(l+s,h+c,m+p,y+f).normalize(),i[2].setComponents(l+o,h+u,m+v,y+g).normalize(),i[3].setComponents(l-o,h-u,m-v,y-g).normalize(),i[4].setComponents(l-a,h-d,m-x,y-_).normalize(),n===Ci)i[5].setComponents(l+a,h+d,m+x,y+_).normalize();else if(n===Lc)i[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Rl.x=r.normal.x>0?e.max.x:e.min.x,Rl.y=r.normal.y>0?e.max.y:e.min.y,Rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function CP(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],x=d[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const x=d[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class au extends ti{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],v=[],x=[],m=[];for(let f=0;f<u;f++){const g=f*h-o;for(let _=0;_<c;_++){const y=_*d-s;v.push(y,-g,0),x.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const _=g+c*f,y=g+c*(f+1),R=g+1+c*(f+1),C=g+1+c*f;p.push(_,y,C),p.push(y,R,C)}this.setIndex(p),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.width,e.height,e.widthSegments,e.heightSegments)}}var RP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bP=`#ifdef USE_ALPHAHASH
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
#endif`,PP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IP=`#ifdef USE_AOMAP
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
#endif`,UP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FP=`#ifdef USE_BATCHING
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
#endif`,OP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zP=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VP=`#ifdef USE_IRIDESCENCE
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
#endif`,HP=`#ifdef USE_BUMPMAP
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
#endif`,GP=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$P=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KP=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ZP=`#define PI 3.141592653589793
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
} // validated`,QP=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JP=`vec3 transformedNormal = objectNormal;
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
#endif`,e2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r2="gl_FragColor = linearToOutputTexel( gl_FragColor );",s2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o2=`#ifdef USE_ENVMAP
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
#endif`,a2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l2=`#ifdef USE_ENVMAP
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
#endif`,c2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u2=`#ifdef USE_ENVMAP
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
#endif`,d2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m2=`#ifdef USE_GRADIENTMAP
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
}`,g2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_2=`uniform bool receiveShadow;
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
#endif`,y2=`#ifdef USE_ENVMAP
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
#endif`,S2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T2=`PhysicalMaterial material;
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
#endif`,A2=`struct PhysicalMaterial {
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
}`,C2=`
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
#endif`,R2=`#if defined( RE_IndirectDiffuse )
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
#endif`,b2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O2=`#if defined( USE_POINTS_UV )
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
#endif`,k2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G2=`#ifdef USE_MORPHTARGETS
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
#endif`,W2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K2=`#ifdef USE_NORMALMAP
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
#endif`,Z2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fD=`float getShadowMask() {
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
}`,hD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pD=`#ifdef USE_SKINNING
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
#endif`,mD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gD=`#ifdef USE_SKINNING
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
#endif`,vD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_D=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SD=`#ifdef USE_TRANSMISSION
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
#endif`,MD=`#ifdef USE_TRANSMISSION
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
#endif`,ED=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RD=`uniform sampler2D t2D;
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
}`,bD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ND=`#include <common>
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
}`,ID=`#if DEPTH_PACKING == 3200
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
}`,UD=`#define DISTANCE
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
}`,FD=`#define DISTANCE
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
}`,OD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BD=`uniform float scale;
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
}`,zD=`uniform vec3 diffuse;
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
}`,VD=`#include <common>
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
}`,HD=`uniform vec3 diffuse;
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
}`,GD=`#define LAMBERT
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
}`,WD=`#define LAMBERT
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
}`,jD=`#define MATCAP
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
}`,XD=`#define MATCAP
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
}`,$D=`#define NORMAL
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
}`,YD=`#define NORMAL
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
}`,qD=`#define PHONG
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
}`,KD=`#define PHONG
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
}`,ZD=`#define STANDARD
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
}`,QD=`#define STANDARD
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
}`,JD=`#define TOON
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
}`,eL=`#define TOON
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
}`,tL=`uniform float size;
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
}`,nL=`uniform vec3 diffuse;
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
}`,iL=`#include <common>
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
}`,rL=`uniform vec3 color;
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
}`,sL=`uniform float rotation;
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
}`,oL=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:RP,alphahash_pars_fragment:bP,alphamap_fragment:PP,alphamap_pars_fragment:DP,alphatest_fragment:LP,alphatest_pars_fragment:NP,aomap_fragment:IP,aomap_pars_fragment:UP,batching_pars_vertex:FP,batching_vertex:OP,begin_vertex:kP,beginnormal_vertex:BP,bsdfs:zP,iridescence_fragment:VP,bumpmap_pars_fragment:HP,clipping_planes_fragment:GP,clipping_planes_pars_fragment:WP,clipping_planes_pars_vertex:jP,clipping_planes_vertex:XP,color_fragment:$P,color_pars_fragment:YP,color_pars_vertex:qP,color_vertex:KP,common:ZP,cube_uv_reflection_fragment:QP,defaultnormal_vertex:JP,displacementmap_pars_vertex:e2,displacementmap_vertex:t2,emissivemap_fragment:n2,emissivemap_pars_fragment:i2,colorspace_fragment:r2,colorspace_pars_fragment:s2,envmap_fragment:o2,envmap_common_pars_fragment:a2,envmap_pars_fragment:l2,envmap_pars_vertex:c2,envmap_physical_pars_fragment:y2,envmap_vertex:u2,fog_vertex:d2,fog_pars_vertex:f2,fog_fragment:h2,fog_pars_fragment:p2,gradientmap_pars_fragment:m2,lightmap_pars_fragment:g2,lights_lambert_fragment:v2,lights_lambert_pars_fragment:x2,lights_pars_begin:_2,lights_toon_fragment:S2,lights_toon_pars_fragment:M2,lights_phong_fragment:E2,lights_phong_pars_fragment:w2,lights_physical_fragment:T2,lights_physical_pars_fragment:A2,lights_fragment_begin:C2,lights_fragment_maps:R2,lights_fragment_end:b2,logdepthbuf_fragment:P2,logdepthbuf_pars_fragment:D2,logdepthbuf_pars_vertex:L2,logdepthbuf_vertex:N2,map_fragment:I2,map_pars_fragment:U2,map_particle_fragment:F2,map_particle_pars_fragment:O2,metalnessmap_fragment:k2,metalnessmap_pars_fragment:B2,morphinstance_vertex:z2,morphcolor_vertex:V2,morphnormal_vertex:H2,morphtarget_pars_vertex:G2,morphtarget_vertex:W2,normal_fragment_begin:j2,normal_fragment_maps:X2,normal_pars_fragment:$2,normal_pars_vertex:Y2,normal_vertex:q2,normalmap_pars_fragment:K2,clearcoat_normal_fragment_begin:Z2,clearcoat_normal_fragment_maps:Q2,clearcoat_pars_fragment:J2,iridescence_pars_fragment:eD,opaque_fragment:tD,packing:nD,premultiplied_alpha_fragment:iD,project_vertex:rD,dithering_fragment:sD,dithering_pars_fragment:oD,roughnessmap_fragment:aD,roughnessmap_pars_fragment:lD,shadowmap_pars_fragment:cD,shadowmap_pars_vertex:uD,shadowmap_vertex:dD,shadowmask_pars_fragment:fD,skinbase_vertex:hD,skinning_pars_vertex:pD,skinning_vertex:mD,skinnormal_vertex:gD,specularmap_fragment:vD,specularmap_pars_fragment:xD,tonemapping_fragment:_D,tonemapping_pars_fragment:yD,transmission_fragment:SD,transmission_pars_fragment:MD,uv_pars_fragment:ED,uv_pars_vertex:wD,uv_vertex:TD,worldpos_vertex:AD,background_vert:CD,background_frag:RD,backgroundCube_vert:bD,backgroundCube_frag:PD,cube_vert:DD,cube_frag:LD,depth_vert:ND,depth_frag:ID,distanceRGBA_vert:UD,distanceRGBA_frag:FD,equirect_vert:OD,equirect_frag:kD,linedashed_vert:BD,linedashed_frag:zD,meshbasic_vert:VD,meshbasic_frag:HD,meshlambert_vert:GD,meshlambert_frag:WD,meshmatcap_vert:jD,meshmatcap_frag:XD,meshnormal_vert:$D,meshnormal_frag:YD,meshphong_vert:qD,meshphong_frag:KD,meshphysical_vert:ZD,meshphysical_frag:QD,meshtoon_vert:JD,meshtoon_frag:eL,points_vert:tL,points_frag:nL,shadow_vert:iL,shadow_frag:rL,sprite_vert:sL,sprite_frag:oL},le={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},si={basic:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:$t([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:$t([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:$t([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:$t([le.points,le.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:$t([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:$t([le.common,le.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:$t([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:$t([le.sprite,le.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:$t([le.common,le.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:$t([le.lights,le.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};si.physical={uniforms:$t([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const bl={r:0,b:0,g:0},Rr=new fi,aL=new ht;function lL(t,e,n,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function x(g){let _=!1;const y=v(g);y===null?f(a,l):y&&y.isColor&&(f(y,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const y=v(_);y&&(y.isCubeTexture||y.mapping===ru)?(u===void 0&&(u=new Nn(new Va(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:lo(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Rr.copy(_.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(aL.makeRotationFromEuler(Rr)),u.material.toneMapped=$e.getTransfer(y.colorSpace)!==tt,(d!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Nn(new au(2,2),new vr({name:"BackgroundMaterial",uniforms:lo(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=$e.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,_){g.getRGB(bl,vM(t)),i.buffers.color.setClear(bl.r,bl.g,bl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(a,l)},render:x,addToRenderList:m}}function cL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,D,B,H,q){let J=!1;const $=d(H,B,D);s!==$&&(s=$,c(s.object)),J=p(S,H,B,q),J&&v(S,H,B,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,y(S,D,B,H),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,D,B){const H=B.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let J=q[D.id];J===void 0&&(J={},q[D.id]=J);let $=J[H];return $===void 0&&($=h(l()),J[H]=$),$}function h(S){const D=[],B=[],H=[];for(let q=0;q<n;q++)D[q]=0,B[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,D,B,H){const q=s.attributes,J=D.attributes;let $=0;const X=B.getAttributes();for(const L in X)if(X[L].location>=0){const K=q[L];let ae=J[L];if(ae===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;$++}return s.attributesNum!==$||s.index!==H}function v(S,D,B,H){const q={},J=D.attributes;let $=0;const X=B.getAttributes();for(const L in X)if(X[L].location>=0){let K=J[L];K===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));const ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),q[L]=ae,$++}s.attributes=q,s.attributesNum=$,s.index=H}function x(){const S=s.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function m(S){f(S,0)}function f(S,D){const B=s.newAttributes,H=s.enabledAttributes,q=s.attributeDivisors;B[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),q[S]!==D&&(t.vertexAttribDivisor(S,D),q[S]=D)}function g(){const S=s.newAttributes,D=s.enabledAttributes;for(let B=0,H=D.length;B<H;B++)D[B]!==S[B]&&(t.disableVertexAttribArray(B),D[B]=0)}function _(S,D,B,H,q,J,$){$===!0?t.vertexAttribIPointer(S,D,B,q,J):t.vertexAttribPointer(S,D,B,H,q,J)}function y(S,D,B,H){x();const q=H.attributes,J=B.getAttributes(),$=D.defaultAttributeValues;for(const X in J){const L=J[X];if(L.location>=0){let j=q[X];if(j===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const K=j.normalized,ae=j.itemSize,Me=e.get(j);if(Me===void 0)continue;const qe=Me.buffer,W=Me.type,ne=Me.bytesPerElement,me=W===t.INT||W===t.UNSIGNED_INT||j.gpuType===rm;if(j.isInterleavedBufferAttribute){const oe=j.data,be=oe.stride,Le=j.offset;if(oe.isInstancedInterleavedBuffer){for(let ke=0;ke<L.locationSize;ke++)f(L.location+ke,oe.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ke=0;ke<L.locationSize;ke++)m(L.location+ke);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let ke=0;ke<L.locationSize;ke++)_(L.location+ke,ae/L.locationSize,W,K,be*ne,(Le+ae/L.locationSize*ke)*ne,me)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<L.locationSize;oe++)f(L.location+oe,j.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<L.locationSize;oe++)m(L.location+oe);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let oe=0;oe<L.locationSize;oe++)_(L.location+oe,ae/L.locationSize,W,K,ae*ne,ae/L.locationSize*oe*ne,me)}}else if($!==void 0){const K=$[X];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(L.location,K);break;case 3:t.vertexAttrib3fv(L.location,K);break;case 4:t.vertexAttrib4fv(L.location,K);break;default:t.vertexAttrib1fv(L.location,K)}}}}g()}function R(){b();for(const S in i){const D=i[S];for(const B in D){const H=D[B];for(const q in H)u(H[q].object),delete H[q];delete D[B]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const B in D){const H=D[B];for(const q in H)u(H[q].object),delete H[q];delete D[B]}delete i[S.id]}function A(S){for(const D in i){const B=i[D];if(B[S.id]===void 0)continue;const H=B[S.id];for(const q in H)u(H[q].object),delete H[q];delete B[S.id]}}function b(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function uL(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x]*h[x];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Yn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const b=A===Oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Oi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ai&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:R,maxSamples:C}}function fL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ir,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,_=g*4;let y=f.clippingState||null;l.value=y,y=u(v,h,_,p);for(let R=0;R!==_;++R)y[R]=n[R];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const f=p+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(d[_]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function hL(t){let e=new WeakMap;function n(o,a){return a===$f?o.mapping=ro:a===Yf&&(o.mapping=so),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$f||a===Yf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wP(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pL extends xM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=4,E0=[.125,.215,.35,.446,.526,.582],Or=20,xd=new pL,w0=new ze;let _d=null,yd=0,Sd=0,Md=!1;const Ur=(1+Math.sqrt(5))/2,_s=1/Ur,T0=[new O(-Ur,_s,0),new O(Ur,_s,0),new O(-_s,0,Ur),new O(_s,0,Ur),new O(0,Ur,-_s),new O(0,Ur,_s),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class A0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,yd,Sd),this._renderer.xr.enabled=Md,e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ro||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Oa,format:Yn,colorSpace:mo,depthBuffer:!1},r=C0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mL(s)),this._blurMaterial=gL(s,e,n)}return r}_compileMaterial(e){const n=new Nn(this._lodPlanes[0],e);this._renderer.compile(n,xd)}_sceneToCubeUV(e,n,i,r){const a=new mn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(w0),u.toneMapping=dr,u.autoClear=!1;const p=new Ic({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),v=new Nn(new Va,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(w0),x=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;Pl(r,g*_,f>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ro||e.mapping===so;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=b0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,xd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=T0[(r-s-1)%T0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Nn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Or-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):Or;m>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);const f=[];let g=0;for(let A=0;A<Or;++A){const b=A/x,E=Math.exp(-b*b/2);f.push(E),A===0?g+=E:A<m&&(g+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const y=this._sizeLods[r],R=3*y*(r>_-Os?r-_+Os:0),C=4*(this._cubeSize-y);Pl(n,R,C,3*y,2*y),l.setRenderTarget(n),l.render(d,xd)}}function mL(t){const e=[],n=[],i=[];let r=t;const s=t-Os+1+E0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Os?l=E0[o-t+Os-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,x=3,m=2,f=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,b=C>2?0:-1,E=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];g.set(E,x*v*C),_.set(h,m*v*C);const S=[C,C,C,C,C,C];y.set(S,f*v*C)}const R=new ti;R.setAttribute("position",new Jn(g,x)),R.setAttribute("uv",new Jn(_,m)),R.setAttribute("faceIndex",new Jn(y,f)),e.push(R),r>Os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function C0(t,e,n){const i=new es(t,e,n);return i.texture.mapping=ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gL(t,e,n){const i=new Float32Array(Or),r=new O(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dm(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function R0(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dm(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function b0(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function dm(){return`

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
	`}function vL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$f||l===Yf,u=l===ro||l===so;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new A0(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new A0(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function xL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Go("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _L(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let _=0,y=g.length;_<y;_+=3){const R=g[_+0],C=g[_+1],A=g[_+2];h.push(R,C,C,A,A,R)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const R=_+0,C=_+1,A=_+2;h.push(R,C,C,A,A,R)}}else return;const m=new(cM(h)?gM:mM)(h,1);m.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function yL(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];n.update(m,i,1)}function d(h,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,v);let f=0;for(let g=0;g<v;g++)f+=p[g]*x[g];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function SL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ML(t,e,n){const i=new WeakMap,r=new nt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*C*4*d),b=new dM(A,R,C,d);b.type=Ai,b.needsUpdate=!0;const E=y*4;for(let D=0;D<d;D++){const B=f[D],H=g[D],q=_[D],J=R*C*4*D;for(let $=0;$<B.count;$++){const X=$*E;v===!0&&(r.fromBufferAttribute(B,$),A[J+X+0]=r.x,A[J+X+1]=r.y,A[J+X+2]=r.z,A[J+X+3]=0),x===!0&&(r.fromBufferAttribute(H,$),A[J+X+4]=r.x,A[J+X+5]=r.y,A[J+X+6]=r.z,A[J+X+7]=0),m===!0&&(r.fromBufferAttribute(q,$),A[J+X+8]=r.x,A[J+X+9]=r.y,A[J+X+10]=r.z,A[J+X+11]=q.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new Ve(R,C)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function EL(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class SM extends un{constructor(e,n,i,r,s,o,a,l,c,u=js){if(u!==js&&u!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===js&&(i=Jr),i===void 0&&u===ao&&(i=oo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qn,this.minFilter=l!==void 0?l:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const MM=new un,P0=new SM(1,1),EM=new dM,wM=new lP,TM=new _M,D0=[],L0=[],N0=new Float32Array(16),I0=new Float32Array(9),U0=new Float32Array(4);function xo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=D0[r];if(s===void 0&&(s=new Float32Array(r),D0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lu(t,e){let n=L0[e];n===void 0&&(n=new Int32Array(e),L0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function TL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function AL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function CL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function RL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;U0.set(i),t.uniformMatrix2fv(this.addr,!1,U0),Pt(n,i)}}function bL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;I0.set(i),t.uniformMatrix3fv(this.addr,!1,I0),Pt(n,i)}}function PL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;N0.set(i),t.uniformMatrix4fv(this.addr,!1,N0),Pt(n,i)}}function DL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function LL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function NL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function IL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function UL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function FL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function OL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function kL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function BL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(P0.compareFunction=lM,s=P0):s=MM,n.setTexture2D(e||s,r)}function zL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||wM,r)}function VL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||TM,r)}function HL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||EM,r)}function GL(t){switch(t){case 5126:return wL;case 35664:return TL;case 35665:return AL;case 35666:return CL;case 35674:return RL;case 35675:return bL;case 35676:return PL;case 5124:case 35670:return DL;case 35667:case 35671:return LL;case 35668:case 35672:return NL;case 35669:case 35673:return IL;case 5125:return UL;case 36294:return FL;case 36295:return OL;case 36296:return kL;case 35678:case 36198:case 36298:case 36306:case 35682:return BL;case 35679:case 36299:case 36307:return zL;case 35680:case 36300:case 36308:case 36293:return VL;case 36289:case 36303:case 36311:case 36292:return HL}}function WL(t,e){t.uniform1fv(this.addr,e)}function jL(t,e){const n=xo(e,this.size,2);t.uniform2fv(this.addr,n)}function XL(t,e){const n=xo(e,this.size,3);t.uniform3fv(this.addr,n)}function $L(t,e){const n=xo(e,this.size,4);t.uniform4fv(this.addr,n)}function YL(t,e){const n=xo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qL(t,e){const n=xo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KL(t,e){const n=xo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ZL(t,e){t.uniform1iv(this.addr,e)}function QL(t,e){t.uniform2iv(this.addr,e)}function JL(t,e){t.uniform3iv(this.addr,e)}function eN(t,e){t.uniform4iv(this.addr,e)}function tN(t,e){t.uniform1uiv(this.addr,e)}function nN(t,e){t.uniform2uiv(this.addr,e)}function iN(t,e){t.uniform3uiv(this.addr,e)}function rN(t,e){t.uniform4uiv(this.addr,e)}function sN(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||MM,s[o])}function oN(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||wM,s[o])}function aN(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||TM,s[o])}function lN(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||EM,s[o])}function cN(t){switch(t){case 5126:return WL;case 35664:return jL;case 35665:return XL;case 35666:return $L;case 35674:return YL;case 35675:return qL;case 35676:return KL;case 5124:case 35670:return ZL;case 35667:case 35671:return QL;case 35668:case 35672:return JL;case 35669:case 35673:return eN;case 5125:return tN;case 36294:return nN;case 36295:return iN;case 36296:return rN;case 35678:case 36198:case 36298:case 36306:case 35682:return sN;case 35679:case 36299:case 36307:return oN;case 35680:case 36300:case 36308:case 36293:return aN;case 36289:case 36303:case 36311:case 36292:return lN}}class uN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=GL(n.type)}}class dN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cN(n.type)}}class fN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function F0(t,e){t.seq.push(e),t.map[e.id]=e}function hN(t,e,n){const i=t.name,r=i.length;for(Ed.lastIndex=0;;){const s=Ed.exec(i),o=Ed.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){F0(n,c===void 0?new uN(a,t,e):new dN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new fN(a),F0(n,d)),n=d}}}class ec{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);hN(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function O0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pN=37297;let mN=0;function gN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const k0=new Ue;function vN(t){$e._getMatrix(k0,$e.workingColorSpace,t);const e=`mat3( ${k0.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case su:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function B0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+gN(t.getShaderSource(e),o)}else return r}function xN(t,e){const n=vN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function _N(t,e){let n;switch(e){case Ub:n="Linear";break;case Fb:n="Reinhard";break;case Ob:n="Cineon";break;case kb:n="ACESFilmic";break;case zb:n="AgX";break;case Vb:n="Neutral";break;case Bb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Dl=new O;function yN(){$e.getLuminanceCoefficients(Dl);const t=Dl.x.toFixed(4),e=Dl.y.toFixed(4),n=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function MN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function EN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Wo(t){return t!==""}function z0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function V0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wN=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(t){return t.replace(wN,AN)}const TN=new Map;function AN(t,e){let n=Oe[e];if(n===void 0){const i=TN.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wh(n)}const CN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H0(t){return t.replace(CN,RN)}function RN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function G0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function bN(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===YS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===pb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function PN(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ro:case so:e="ENVMAP_TYPE_CUBE";break;case ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function LN(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case qS:e="ENVMAP_BLENDING_MULTIPLY";break;case Nb:e="ENVMAP_BLENDING_MIX";break;case Ib:e="ENVMAP_BLENDING_ADD";break}return e}function NN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=bN(n),c=PN(n),u=DN(n),d=LN(n),h=NN(n),p=SN(n),v=MN(s),x=r.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Wo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Wo).join(`
`),f.length>0&&(f+=`
`)):(m=[G0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),f=[G0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==dr?_N("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,xN("linearToOutputTexel",n.outputColorSpace),yN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),o=wh(o),o=z0(o,n),o=V0(o,n),a=wh(a),a=z0(a,n),a=V0(a,n),o=H0(o),a=H0(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===n0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===n0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=g+m+o,y=g+f+a,R=O0(r,r.VERTEX_SHADER,_),C=O0(r,r.FRAGMENT_SHADER,y);r.attachShader(x,R),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(D){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(R).trim(),q=r.getShaderInfoLog(C).trim();let J=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,C);else{const X=B0(r,R,"vertex"),L=B0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+X+`
`+L)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||q==="")&&($=!1);$&&(D.diagnostics={runnable:J,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:q,prefix:f}})}r.deleteShader(R),r.deleteShader(C),b=new ec(r,x),E=EN(r,x)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,pN)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mN++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=C,this}let UN=0;class FN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ON(e),n.set(e,i)),i}}class ON{constructor(e){this.id=UN++,this.code=e,this.usedTimes=0}}function kN(t,e,n,i,r,s,o){const a=new hM,l=new FN,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,D,B,H){const q=B.fog,J=H.geometry,$=E.isMeshStandardMaterial?B.environment:null,X=(E.isMeshStandardMaterial?n:e).get(E.envMap||$),L=X&&X.mapping===ru?X.image.height:null,j=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const K=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ae=K!==void 0?K.length:0;let Me=0;J.morphAttributes.position!==void 0&&(Me=1),J.morphAttributes.normal!==void 0&&(Me=2),J.morphAttributes.color!==void 0&&(Me=3);let qe,W,ne,me;if(j){const Je=si[j];qe=Je.vertexShader,W=Je.fragmentShader}else qe=E.vertexShader,W=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const oe=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Le=H.isInstancedMesh===!0,ke=H.isBatchedMesh===!0,pt=!!E.map,je=!!E.matcap,Mt=!!X,F=!!E.aoMap,wn=!!E.lightMap,He=!!E.bumpMap,Ge=!!E.normalMap,Ce=!!E.displacementMap,ot=!!E.emissiveMap,Te=!!E.metalnessMap,P=!!E.roughnessMap,M=E.anisotropy>0,k=E.clearcoat>0,Z=E.dispersion>0,ee=E.iridescence>0,Y=E.sheen>0,Ee=E.transmission>0,ue=M&&!!E.anisotropyMap,ge=k&&!!E.clearcoatMap,Xe=k&&!!E.clearcoatNormalMap,ie=k&&!!E.clearcoatRoughnessMap,ve=ee&&!!E.iridescenceMap,Re=ee&&!!E.iridescenceThicknessMap,Pe=Y&&!!E.sheenColorMap,xe=Y&&!!E.sheenRoughnessMap,We=!!E.specularMap,Fe=!!E.specularColorMap,it=!!E.specularIntensityMap,N=Ee&&!!E.transmissionMap,ce=Ee&&!!E.thicknessMap,G=!!E.gradientMap,Q=!!E.alphaMap,he=E.alphaTest>0,de=!!E.alphaHash,Ne=!!E.extensions;let _t=dr;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(_t=t.toneMapping);const kt={shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:qe,fragmentShader:W,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ke,batchingColor:ke&&H._colorsTexture!==null,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:mo,alphaToCoverage:!!E.alphaToCoverage,map:pt,matcap:je,envMap:Mt,envMapMode:Mt&&X.mapping,envMapCubeUVHeight:L,aoMap:F,lightMap:wn,bumpMap:He,normalMap:Ge,displacementMap:h&&Ce,emissiveMap:ot,normalMapObjectSpace:Ge&&E.normalMapType===jb,normalMapTangentSpace:Ge&&E.normalMapType===aM,metalnessMap:Te,roughnessMap:P,anisotropy:M,anisotropyMap:ue,clearcoat:k,clearcoatMap:ge,clearcoatNormalMap:Xe,clearcoatRoughnessMap:ie,dispersion:Z,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:Re,sheen:Y,sheenColorMap:Pe,sheenRoughnessMap:xe,specularMap:We,specularColorMap:Fe,specularIntensityMap:it,transmission:Ee,transmissionMap:N,thicknessMap:ce,gradientMap:G,opaque:E.transparent===!1&&E.blending===Ws&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:he,alphaHash:de,combine:E.combine,mapUv:pt&&x(E.map.channel),aoMapUv:F&&x(E.aoMap.channel),lightMapUv:wn&&x(E.lightMap.channel),bumpMapUv:He&&x(E.bumpMap.channel),normalMapUv:Ge&&x(E.normalMap.channel),displacementMapUv:Ce&&x(E.displacementMap.channel),emissiveMapUv:ot&&x(E.emissiveMap.channel),metalnessMapUv:Te&&x(E.metalnessMap.channel),roughnessMapUv:P&&x(E.roughnessMap.channel),anisotropyMapUv:ue&&x(E.anisotropyMap.channel),clearcoatMapUv:ge&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(E.sheenRoughnessMap.channel),specularMapUv:We&&x(E.specularMap.channel),specularColorMapUv:Fe&&x(E.specularColorMap.channel),specularIntensityMapUv:it&&x(E.specularIntensityMap.channel),transmissionMapUv:N&&x(E.transmissionMap.channel),thicknessMapUv:ce&&x(E.thicknessMap.channel),alphaMapUv:Q&&x(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ge||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(pt||Q),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:be,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:pt&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===tt,decodeVideoTextureEmissive:ot&&E.emissiveMap.isVideoTexture===!0&&$e.getTransfer(E.emissiveMap.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ei,flipSided:E.side===cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function f(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(g(S,E),_(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function g(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const S=v[E.type];let D;if(S){const B=si[S];D=yP.clone(B.uniforms)}else D=E.uniforms;return D}function R(E,S){let D;for(let B=0,H=u.length;B<H;B++){const q=u[B];if(q.cacheKey===S){D=q,++D.usedTimes;break}}return D===void 0&&(D=new IN(t,S,E,s),u.push(D)),D}function C(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:b}}function BN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function zN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function W0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function j0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,v,x,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function a(d,h,p,v,x,m){const f=o(d,h,p,v,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,v,x,m){const f=o(d,h,p,v,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||zN),i.length>1&&i.sort(h||W0),r.length>1&&r.sort(h||W0)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function VN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new j0,t.set(i,[o])):r>=s.length?(o=new j0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function HN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new ze};break;case"SpotLight":n={position:new O,direction:new O,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function GN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WN=0;function jN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function XN(t){const e=new HN,n=GN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new ht,o=new ht;function a(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,x=0,m=0,f=0,g=0,_=0,y=0,R=0,C=0,A=0;c.sort(jN);for(let E=0,S=c.length;E<S;E++){const D=c[E],B=D.color,H=D.intensity,q=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*H,d+=B.g*H,h+=B.b*H;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],H);A++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,L=n.get(D);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=D.shadow.matrix,g++}i.directional[p]=$,p++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(B).multiplyScalar(H),$.distance=q,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[x]=$;const X=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,X.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[x]=X.matrix,D.castShadow){const L=n.get(D);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=J,y++}x++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(B).multiplyScalar(H),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=$,m++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const X=D.shadow,L=n.get(D);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,L.shadowCameraNear=X.camera.near,L.shadowCameraFar=X.camera.far,i.pointShadow[v]=L,i.pointShadowMap[v]=J,i.pointShadowMatrix[v]=D.shadow.matrix,_++}i.point[v]=$,v++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(H),$.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[f]=$,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==v||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==f||b.numDirectionalShadows!==g||b.numPointShadows!==_||b.numSpotShadows!==y||b.numSpotMaps!==R||b.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,b.directionalLength=p,b.pointLength=v,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=f,b.numDirectionalShadows=g,b.numPointShadows=_,b.numSpotShadows=y,b.numSpotMaps=R,b.numLightProbes=A,i.version=WN++)}function l(c,u){let d=0,h=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const _=c[f];if(_.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function X0(t){const e=new XN(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function $N(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new X0(t),e.set(r,[a])):s>=o.length?(a=new X0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class YN extends vo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qN extends vo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZN=`uniform sampler2D shadow_pass;
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
}`;function QN(t,e,n){let i=new um;const r=new Ve,s=new Ve,o=new nt,a=new YN({depthPacking:Wb}),l=new qN,c={},u=n.maxTextureSize,d={[gr]:cn,[cn]:gr,[Ei]:Ei},h=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:KN,fragmentShader:ZN}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new ti;v.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Nn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=YS;let f=this.type;this.render=function(C,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),B=t.state;B.setBlending(ur),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=f!==yi&&this.type===yi,q=f===yi&&this.type!==yi;for(let J=0,$=C.length;J<$;J++){const X=C[J],L=X.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const j=L.getFrameExtents();if(r.multiply(j),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,L.mapSize.y=s.y)),L.map===null||H===!0||q===!0){const ae=this.type!==yi?{minFilter:Qn,magFilter:Qn}:{};L.map!==null&&L.map.dispose(),L.map=new es(r.x,r.y,ae),L.map.texture.name=X.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const K=L.getViewportCount();for(let ae=0;ae<K;ae++){const Me=L.getViewport(ae);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),B.viewport(o),L.updateMatrices(X,ae),i=L.getFrustum(),y(A,b,L.camera,X,this.type)}L.isPointLightShadow!==!0&&this.type===yi&&g(L,b),L.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(E,S,D)};function g(C,A){const b=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new es(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,b,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,b,p,x,null)}function _(C,A,b,E){let S=null;const D=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=S.uuid,H=A.uuid;let q=c[B];q===void 0&&(q={},c[B]=q);let J=q[H];J===void 0&&(J=S.clone(),q[H]=J,A.addEventListener("dispose",R)),S=J}if(S.visible=A.visible,S.wireframe=A.wireframe,E===yi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=t.properties.get(S);B.light=b}return S}function y(C,A,b,E,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===yi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const H=e.update(C),q=C.material;if(Array.isArray(q)){const J=H.groups;for(let $=0,X=J.length;$<X;$++){const L=J[$],j=q[L.materialIndex];if(j&&j.visible){const K=_(C,j,E,S);C.onBeforeShadow(t,C,A,b,H,K,L),t.renderBufferDirect(b,null,H,K,C,L),C.onAfterShadow(t,C,A,b,H,K,L)}}}else if(q.visible){const J=_(C,q,E,S);C.onBeforeShadow(t,C,A,b,H,J,null),t.renderBufferDirect(b,null,H,J,C,null),C.onAfterShadow(t,C,A,b,H,J,null)}}const B=C.children;for(let H=0,q=B.length;H<q;H++)y(B[H],A,b,E,S)}function R(C){C.target.removeEventListener("dispose",R);for(const b in c){const E=c[b],S=C.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const JN={[zf]:Vf,[Hf]:jf,[Gf]:Xf,[io]:Wf,[Vf]:zf,[jf]:Hf,[Xf]:Gf,[Wf]:io};function e3(t,e){function n(){let N=!1;const ce=new nt;let G=null;const Q=new nt(0,0,0,0);return{setMask:function(he){G!==he&&!N&&(t.colorMask(he,he,he,he),G=he)},setLocked:function(he){N=he},setClear:function(he,de,Ne,_t,kt){kt===!0&&(he*=_t,de*=_t,Ne*=_t),ce.set(he,de,Ne,_t),Q.equals(ce)===!1&&(t.clearColor(he,de,Ne,_t),Q.copy(ce))},reset:function(){N=!1,G=null,Q.set(-1,0,0,0)}}}function i(){let N=!1,ce=!1,G=null,Q=null,he=null;return{setReversed:function(de){if(ce!==de){const Ne=e.get("EXT_clip_control");ce?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const _t=he;he=null,this.setClear(_t)}ce=de},getReversed:function(){return ce},setTest:function(de){de?oe(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(de){G!==de&&!N&&(t.depthMask(de),G=de)},setFunc:function(de){if(ce&&(de=JN[de]),Q!==de){switch(de){case zf:t.depthFunc(t.NEVER);break;case Vf:t.depthFunc(t.ALWAYS);break;case Hf:t.depthFunc(t.LESS);break;case io:t.depthFunc(t.LEQUAL);break;case Gf:t.depthFunc(t.EQUAL);break;case Wf:t.depthFunc(t.GEQUAL);break;case jf:t.depthFunc(t.GREATER);break;case Xf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=de}},setLocked:function(de){N=de},setClear:function(de){he!==de&&(ce&&(de=1-de),t.clearDepth(de),he=de)},reset:function(){N=!1,G=null,Q=null,he=null,ce=!1}}}function r(){let N=!1,ce=null,G=null,Q=null,he=null,de=null,Ne=null,_t=null,kt=null;return{setTest:function(Je){N||(Je?oe(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!N&&(t.stencilMask(Je),ce=Je)},setFunc:function(Je,On,hi){(G!==Je||Q!==On||he!==hi)&&(t.stencilFunc(Je,On,hi),G=Je,Q=On,he=hi)},setOp:function(Je,On,hi){(de!==Je||Ne!==On||_t!==hi)&&(t.stencilOp(Je,On,hi),de=Je,Ne=On,_t=hi)},setLocked:function(Je){N=Je},setClear:function(Je){kt!==Je&&(t.clearStencil(Je),kt=Je)},reset:function(){N=!1,ce=null,G=null,Q=null,he=null,de=null,Ne=null,_t=null,kt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],v=null,x=!1,m=null,f=null,g=null,_=null,y=null,R=null,C=null,A=new ze(0,0,0),b=0,E=!1,S=null,D=null,B=null,H=null,q=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(L)[1]),$=X>=1):L.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),$=X>=2);let j=null,K={};const ae=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),qe=new nt().fromArray(ae),W=new nt().fromArray(Me);function ne(N,ce,G,Q){const he=new Uint8Array(4),de=t.createTexture();t.bindTexture(N,de),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<G;Ne++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return de}const me={};me[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(io),He(!1),Ge(Zv),oe(t.CULL_FACE),F(ur);function oe(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function be(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function Le(N,ce){return d[N]!==ce?(t.bindFramebuffer(N,ce),d[N]=ce,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ce),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function ke(N,ce){let G=p,Q=!1;if(N){G=h.get(ce),G===void 0&&(G=[],h.set(ce,G));const he=N.textures;if(G.length!==he.length||G[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Ne=he.length;de<Ne;de++)G[de]=t.COLOR_ATTACHMENT0+de;G.length=he.length,Q=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,Q=!0);Q&&t.drawBuffers(G)}function pt(N){return v!==N?(t.useProgram(N),v=N,!0):!1}const je={[Fr]:t.FUNC_ADD,[gb]:t.FUNC_SUBTRACT,[vb]:t.FUNC_REVERSE_SUBTRACT};je[xb]=t.MIN,je[_b]=t.MAX;const Mt={[yb]:t.ZERO,[Sb]:t.ONE,[Mb]:t.SRC_COLOR,[kf]:t.SRC_ALPHA,[Rb]:t.SRC_ALPHA_SATURATE,[Ab]:t.DST_COLOR,[wb]:t.DST_ALPHA,[Eb]:t.ONE_MINUS_SRC_COLOR,[Bf]:t.ONE_MINUS_SRC_ALPHA,[Cb]:t.ONE_MINUS_DST_COLOR,[Tb]:t.ONE_MINUS_DST_ALPHA,[bb]:t.CONSTANT_COLOR,[Pb]:t.ONE_MINUS_CONSTANT_COLOR,[Db]:t.CONSTANT_ALPHA,[Lb]:t.ONE_MINUS_CONSTANT_ALPHA};function F(N,ce,G,Q,he,de,Ne,_t,kt,Je){if(N===ur){x===!0&&(be(t.BLEND),x=!1);return}if(x===!1&&(oe(t.BLEND),x=!0),N!==mb){if(N!==m||Je!==E){if((f!==Fr||y!==Fr)&&(t.blendEquation(t.FUNC_ADD),f=Fr,y=Fr),Je)switch(N){case Ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Of:t.blendFunc(t.ONE,t.ONE);break;case Qv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Of:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Qv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,_=null,R=null,C=null,A.set(0,0,0),b=0,m=N,E=Je}return}he=he||ce,de=de||G,Ne=Ne||Q,(ce!==f||he!==y)&&(t.blendEquationSeparate(je[ce],je[he]),f=ce,y=he),(G!==g||Q!==_||de!==R||Ne!==C)&&(t.blendFuncSeparate(Mt[G],Mt[Q],Mt[de],Mt[Ne]),g=G,_=Q,R=de,C=Ne),(_t.equals(A)===!1||kt!==b)&&(t.blendColor(_t.r,_t.g,_t.b,kt),A.copy(_t),b=kt),m=N,E=!1}function wn(N,ce){N.side===Ei?be(t.CULL_FACE):oe(t.CULL_FACE);let G=N.side===cn;ce&&(G=!G),He(G),N.blending===Ws&&N.transparent===!1?F(ur):F(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(N){S!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),S=N)}function Ge(N){N!==fb?(oe(t.CULL_FACE),N!==D&&(N===Zv?t.cullFace(t.BACK):N===hb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),D=N}function Ce(N){N!==B&&($&&t.lineWidth(N),B=N)}function ot(N,ce,G){N?(oe(t.POLYGON_OFFSET_FILL),(H!==ce||q!==G)&&(t.polygonOffset(ce,G),H=ce,q=G)):be(t.POLYGON_OFFSET_FILL)}function Te(N){N?oe(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function P(N){N===void 0&&(N=t.TEXTURE0+J-1),j!==N&&(t.activeTexture(N),j=N)}function M(N,ce,G){G===void 0&&(j===null?G=t.TEXTURE0+J-1:G=j);let Q=K[G];Q===void 0&&(Q={type:void 0,texture:void 0},K[G]=Q),(Q.type!==N||Q.texture!==ce)&&(j!==G&&(t.activeTexture(G),j=G),t.bindTexture(N,ce||me[N]),Q.type=N,Q.texture=ce)}function k(){const N=K[j];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(N){qe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),qe.copy(N))}function xe(N){W.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),W.copy(N))}function We(N,ce){let G=c.get(ce);G===void 0&&(G=new WeakMap,c.set(ce,G));let Q=G.get(N);Q===void 0&&(Q=t.getUniformBlockIndex(ce,N.name),G.set(N,Q))}function Fe(N,ce){const Q=c.get(ce).get(N);l.get(ce)!==Q&&(t.uniformBlockBinding(ce,Q,N.__bindingPointIndex),l.set(ce,Q))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},j=null,K={},d={},h=new WeakMap,p=[],v=null,x=!1,m=null,f=null,g=null,_=null,y=null,R=null,C=null,A=new ze(0,0,0),b=0,E=!1,S=null,D=null,B=null,H=null,q=null,qe.set(0,0,t.canvas.width,t.canvas.height),W.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:be,bindFramebuffer:Le,drawBuffers:ke,useProgram:pt,setBlending:F,setMaterial:wn,setFlipSided:He,setCullFace:Ge,setLineWidth:Ce,setPolygonOffset:ot,setScissorTest:Te,activeTexture:P,bindTexture:M,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Re,updateUBOMapping:We,uniformBlockBinding:Fe,texStorage2D:Xe,texStorage3D:ie,texSubImage2D:Y,texSubImage3D:Ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Pe,viewport:xe,reset:it}}function $0(t,e,n,i){const r=t3(i);switch(n){case eM:return t*e;case nM:return t*e;case iM:return t*e*2;case rM:return t*e/r.components*r.byteLength;case am:return t*e/r.components*r.byteLength;case sM:return t*e*2/r.components*r.byteLength;case lm:return t*e*2/r.components*r.byteLength;case tM:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case cm:return t*e*4/r.components*r.byteLength;case ql:case Kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:case eh:return Math.max(t,16)*Math.max(e,8)/4;case Zf:case Jf:return Math.max(t,8)*Math.max(e,8)/2;case th:case nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case oh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ch:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case dh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case mh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Jl:case xh:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*16;case oM:case yh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Sh:case Mh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function t3(t){switch(t){case Oi:case ZS:return{byteLength:1,components:1};case Ca:case QS:case Oa:return{byteLength:2,components:1};case sm:case om:return{byteLength:2,components:4};case Jr:case rm:case Ai:return{byteLength:4,components:1};case JS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function n3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,M){return p?new OffscreenCanvas(P,M):Nc("canvas")}function x(P,M,k){let Z=1;const ee=Te(P);if((ee.width>k||ee.height>k)&&(Z=k/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(Z*ee.width),Ee=Math.floor(Z*ee.height);d===void 0&&(d=v(Y,Ee));const ue=M?v(Y,Ee):d;return ue.width=Y,ue.height=Ee,ue.getContext("2d").drawImage(P,0,0,Y,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Ee+")."),ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){t.generateMipmap(P)}function g(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(P,M,k,Z,ee=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=M;if(M===t.RED&&(k===t.FLOAT&&(Y=t.R32F),k===t.HALF_FLOAT&&(Y=t.R16F),k===t.UNSIGNED_BYTE&&(Y=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.R8UI),k===t.UNSIGNED_SHORT&&(Y=t.R16UI),k===t.UNSIGNED_INT&&(Y=t.R32UI),k===t.BYTE&&(Y=t.R8I),k===t.SHORT&&(Y=t.R16I),k===t.INT&&(Y=t.R32I)),M===t.RG&&(k===t.FLOAT&&(Y=t.RG32F),k===t.HALF_FLOAT&&(Y=t.RG16F),k===t.UNSIGNED_BYTE&&(Y=t.RG8)),M===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RG8UI),k===t.UNSIGNED_SHORT&&(Y=t.RG16UI),k===t.UNSIGNED_INT&&(Y=t.RG32UI),k===t.BYTE&&(Y=t.RG8I),k===t.SHORT&&(Y=t.RG16I),k===t.INT&&(Y=t.RG32I)),M===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),k===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),k===t.UNSIGNED_INT&&(Y=t.RGB32UI),k===t.BYTE&&(Y=t.RGB8I),k===t.SHORT&&(Y=t.RGB16I),k===t.INT&&(Y=t.RGB32I)),M===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),k===t.UNSIGNED_INT&&(Y=t.RGBA32UI),k===t.BYTE&&(Y=t.RGBA8I),k===t.SHORT&&(Y=t.RGBA16I),k===t.INT&&(Y=t.RGBA32I)),M===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),M===t.RGBA){const Ee=ee?su:$e.getTransfer(Z);k===t.FLOAT&&(Y=t.RGBA32F),k===t.HALF_FLOAT&&(Y=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Y=Ee===tt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(P,M){let k;return P?M===null||M===Jr||M===oo?k=t.DEPTH24_STENCIL8:M===Ai?k=t.DEPTH32F_STENCIL8:M===Ca&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jr||M===oo?k=t.DEPTH_COMPONENT24:M===Ai?k=t.DEPTH_COMPONENT32F:M===Ca&&(k=t.DEPTH_COMPONENT16),k}function R(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qn&&P.minFilter!==ai?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){const M=P.target;M.removeEventListener("dispose",C),b(M),M.isVideoTexture&&u.delete(M)}function A(P){const M=P.target;M.removeEventListener("dispose",A),S(M)}function b(P){const M=i.get(P);if(M.__webglInit===void 0)return;const k=P.source,Z=h.get(k);if(Z){const ee=Z[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(P),Object.keys(Z).length===0&&h.delete(k)}i.remove(P)}function E(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const k=P.source,Z=h.get(k);delete Z[M.__cacheKey],o.memory.textures--}function S(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ee=0;ee<M.__webglFramebuffer[Z].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[Z][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=P.textures;for(let Z=0,ee=k.length;Z<ee;Z++){const Y=i.get(k[Z]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(k[Z])}i.remove(P)}let D=0;function B(){D=0}function H(){const P=D;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function q(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function J(P,M){const k=i.get(P);if(P.isVideoTexture&&Ce(P),P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,P,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function $(P,M){const k=i.get(P);if(P.version>0&&k.__version!==P.version){W(k,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function X(P,M){const k=i.get(P);if(P.version>0&&k.__version!==P.version){W(k,P,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function L(P,M){const k=i.get(P);if(P.version>0&&k.__version!==P.version){ne(k,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const j={[qf]:t.REPEAT,[Hr]:t.CLAMP_TO_EDGE,[Kf]:t.MIRRORED_REPEAT},K={[Qn]:t.NEAREST,[Hb]:t.NEAREST_MIPMAP_NEAREST,[dl]:t.NEAREST_MIPMAP_LINEAR,[ai]:t.LINEAR,[qu]:t.LINEAR_MIPMAP_NEAREST,[Gr]:t.LINEAR_MIPMAP_LINEAR},ae={[Xb]:t.NEVER,[Qb]:t.ALWAYS,[$b]:t.LESS,[lM]:t.LEQUAL,[Yb]:t.EQUAL,[Zb]:t.GEQUAL,[qb]:t.GREATER,[Kb]:t.NOTEQUAL};function Me(P,M){if(M.type===Ai&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ai||M.magFilter===qu||M.magFilter===dl||M.magFilter===Gr||M.minFilter===ai||M.minFilter===qu||M.minFilter===dl||M.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,j[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,j[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,j[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qn||M.minFilter!==dl&&M.minFilter!==Gr||M.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function qe(P,M){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",C));const Z=M.source;let ee=h.get(Z);ee===void 0&&(ee={},h.set(Z,ee));const Y=q(M);if(Y!==P.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[Y].usedTimes++;const Ee=ee[P.__cacheKey];Ee!==void 0&&(ee[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(M)),P.__cacheKey=Y,P.__webglTexture=ee[Y].texture}return k}function W(P,M,k){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const ee=qe(P,M),Y=M.source;n.bindTexture(Z,P.__webglTexture,t.TEXTURE0+k);const Ee=i.get(Y);if(Y.version!==Ee.__version||ee===!0){n.activeTexture(t.TEXTURE0+k);const ue=$e.getPrimaries($e.workingColorSpace),ge=M.colorSpace===Ji?null:$e.getPrimaries(M.colorSpace),Xe=M.colorSpace===Ji||ue===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ie=x(M.image,!1,r.maxTextureSize);ie=ot(M,ie);const ve=s.convert(M.format,M.colorSpace),Re=s.convert(M.type);let Pe=_(M.internalFormat,ve,Re,M.colorSpace,M.isVideoTexture);Me(Z,M);let xe;const We=M.mipmaps,Fe=M.isVideoTexture!==!0,it=Ee.__version===void 0||ee===!0,N=Y.dataReady,ce=R(M,ie);if(M.isDepthTexture)Pe=y(M.format===ao,M.type),it&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,Pe,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ve,Re,null));else if(M.isDataTexture)if(We.length>0){Fe&&it&&n.texStorage2D(t.TEXTURE_2D,ce,Pe,We[0].width,We[0].height);for(let G=0,Q=We.length;G<Q;G++)xe=We[G],Fe?N&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,xe.width,xe.height,ve,Re,xe.data):n.texImage2D(t.TEXTURE_2D,G,Pe,xe.width,xe.height,0,ve,Re,xe.data);M.generateMipmaps=!1}else Fe?(it&&n.texStorage2D(t.TEXTURE_2D,ce,Pe,ie.width,ie.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ve,Re,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ve,Re,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Pe,We[0].width,We[0].height,ie.depth);for(let G=0,Q=We.length;G<Q;G++)if(xe=We[G],M.format!==Yn)if(ve!==null)if(Fe){if(N)if(M.layerUpdates.size>0){const he=$0(xe.width,xe.height,M.format,M.type);for(const de of M.layerUpdates){const Ne=xe.data.subarray(de*he/xe.data.BYTES_PER_ELEMENT,(de+1)*he/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,de,xe.width,xe.height,1,ve,Ne)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,xe.width,xe.height,ie.depth,ve,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Pe,xe.width,xe.height,ie.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,xe.width,xe.height,ie.depth,ve,Re,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Pe,xe.width,xe.height,ie.depth,0,ve,Re,xe.data)}else{Fe&&it&&n.texStorage2D(t.TEXTURE_2D,ce,Pe,We[0].width,We[0].height);for(let G=0,Q=We.length;G<Q;G++)xe=We[G],M.format!==Yn?ve!==null?Fe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,xe.width,xe.height,ve,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Pe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?N&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,xe.width,xe.height,ve,Re,xe.data):n.texImage2D(t.TEXTURE_2D,G,Pe,xe.width,xe.height,0,ve,Re,xe.data)}else if(M.isDataArrayTexture)if(Fe){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Pe,ie.width,ie.height,ie.depth),N)if(M.layerUpdates.size>0){const G=$0(ie.width,ie.height,M.format,M.type);for(const Q of M.layerUpdates){const he=ie.data.subarray(Q*G/ie.data.BYTES_PER_ELEMENT,(Q+1)*G/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,ve,Re,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Re,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,ve,Re,ie.data);else if(M.isData3DTexture)Fe?(it&&n.texStorage3D(t.TEXTURE_3D,ce,Pe,ie.width,ie.height,ie.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Re,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,ve,Re,ie.data);else if(M.isFramebufferTexture){if(it)if(Fe)n.texStorage2D(t.TEXTURE_2D,ce,Pe,ie.width,ie.height);else{let G=ie.width,Q=ie.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,Pe,G,Q,0,ve,Re,null),G>>=1,Q>>=1}}else if(We.length>0){if(Fe&&it){const G=Te(We[0]);n.texStorage2D(t.TEXTURE_2D,ce,Pe,G.width,G.height)}for(let G=0,Q=We.length;G<Q;G++)xe=We[G],Fe?N&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ve,Re,xe):n.texImage2D(t.TEXTURE_2D,G,Pe,ve,Re,xe);M.generateMipmaps=!1}else if(Fe){if(it){const G=Te(ie);n.texStorage2D(t.TEXTURE_2D,ce,Pe,G.width,G.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Re,ie)}else n.texImage2D(t.TEXTURE_2D,0,Pe,ve,Re,ie);m(M)&&f(Z),Ee.__version=Y.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ne(P,M,k){if(M.image.length!==6)return;const Z=qe(P,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+k);const Y=i.get(ee);if(ee.version!==Y.__version||Z===!0){n.activeTexture(t.TEXTURE0+k);const Ee=$e.getPrimaries($e.workingColorSpace),ue=M.colorSpace===Ji?null:$e.getPrimaries(M.colorSpace),ge=M.colorSpace===Ji||Ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Xe=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!Xe&&!ie?ve[Q]=x(M.image[Q],!0,r.maxCubemapSize):ve[Q]=ie?M.image[Q].image:M.image[Q],ve[Q]=ot(M,ve[Q]);const Re=ve[0],Pe=s.convert(M.format,M.colorSpace),xe=s.convert(M.type),We=_(M.internalFormat,Pe,xe,M.colorSpace),Fe=M.isVideoTexture!==!0,it=Y.__version===void 0||Z===!0,N=ee.dataReady;let ce=R(M,Re);Me(t.TEXTURE_CUBE_MAP,M);let G;if(Xe){Fe&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,We,Re.width,Re.height);for(let Q=0;Q<6;Q++){G=ve[Q].mipmaps;for(let he=0;he<G.length;he++){const de=G[he];M.format!==Yn?Pe!==null?Fe?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,de.width,de.height,Pe,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,We,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,de.width,de.height,Pe,xe,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,We,de.width,de.height,0,Pe,xe,de.data)}}}else{if(G=M.mipmaps,Fe&&it){G.length>0&&ce++;const Q=Te(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,We,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){Fe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,Pe,xe,ve[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,ve[Q].width,ve[Q].height,0,Pe,xe,ve[Q].data);for(let he=0;he<G.length;he++){const Ne=G[he].image[Q].image;Fe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Ne.width,Ne.height,Pe,xe,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,We,Ne.width,Ne.height,0,Pe,xe,Ne.data)}}else{Fe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,xe,ve[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,Pe,xe,ve[Q]);for(let he=0;he<G.length;he++){const de=G[he];Fe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Pe,xe,de.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,We,Pe,xe,de.image[Q])}}}m(M)&&f(t.TEXTURE_CUBE_MAP),Y.__version=ee.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function me(P,M,k,Z,ee,Y){const Ee=s.convert(k.format,k.colorSpace),ue=s.convert(k.type),ge=_(k.internalFormat,Ee,ue,k.colorSpace),Xe=i.get(M),ie=i.get(k);if(ie.__renderTarget=M,!Xe.__hasExternalTextures){const ve=Math.max(1,M.width>>Y),Re=Math.max(1,M.height>>Y);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Y,ge,ve,Re,M.depth,0,Ee,ue,null):n.texImage2D(ee,Y,ge,ve,Re,0,Ee,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ee,ie.__webglTexture,0,He(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ee,ie.__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(P,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const Z=M.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,Y=y(M.stencilBuffer,ee),Ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=He(M);Ge(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,Y,M.width,M.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,Y,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Y,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,P)}else{const Z=M.textures;for(let ee=0;ee<Z.length;ee++){const Y=Z[ee],Ee=s.convert(Y.format,Y.colorSpace),ue=s.convert(Y.type),ge=_(Y.internalFormat,Ee,ue,Y.colorSpace),Xe=He(M);k&&Ge(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,ge,M.width,M.height):Ge(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const ee=Z.__webglTexture,Y=He(M);if(M.depthTexture.format===js)Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===ao)Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Le(P){const M=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Z}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");be(M.__webglFramebuffer,P)}else if(k){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),oe(M.__webglDepthbuffer[Z],P,!1);else{const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),oe(M.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(P,M,k){const Z=i.get(P);M!==void 0&&me(Z.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Le(P)}function pt(P){const M=P.texture,k=i.get(P),Z=i.get(M);P.addEventListener("dispose",A);const ee=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let ge=0;ge<M.mipmaps.length;ge++)k.__webglFramebuffer[ue][ge]=t.createFramebuffer()}else k.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)k.__webglFramebuffer[ue]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ue=0,ge=ee.length;ue<ge;ue++){const Xe=i.get(ee[ue]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&Ge(P)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const ge=ee[ue];k.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const Xe=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),ve=_(ge.internalFormat,Xe,ie,ge.colorSpace,P.isXRRenderTarget===!0),Re=He(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ve,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(k.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Me(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)me(k.__webglFramebuffer[ue][ge],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else me(k.__webglFramebuffer[ue],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ue=0,ge=ee.length;ue<ge;ue++){const Xe=ee[ue],ie=i.get(Xe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),Me(t.TEXTURE_2D,Xe),me(k.__webglFramebuffer,P,Xe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(Xe)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Z.__webglTexture),Me(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)me(k.__webglFramebuffer[ge],P,M,t.COLOR_ATTACHMENT0,ue,ge);else me(k.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,ue,0);m(M)&&f(ue),n.unbindTexture()}P.depthBuffer&&Le(P)}function je(P){const M=P.textures;for(let k=0,Z=M.length;k<Z;k++){const ee=M[k];if(m(ee)){const Y=g(P),Ee=i.get(ee).__webglTexture;n.bindTexture(Y,Ee),f(Y),n.unbindTexture()}}}const Mt=[],F=[];function wn(P){if(P.samples>0){if(Ge(P)===!1){const M=P.textures,k=P.width,Z=P.height;let ee=t.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(P),ue=M.length>1;if(ue)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const Xe=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Xe,0)}t.blitFramebuffer(0,0,k,Z,0,0,k,Z,ee,t.NEAREST),l===!0&&(Mt.length=0,F.length=0,Mt.push(t.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Mt.push(Y),F.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const Xe=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function He(P){return Math.min(r.maxSamples,P.samples)}function Ge(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ce(P){const M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function ot(P,M){const k=P.colorSpace,Z=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==mo&&k!==Ji&&($e.getTransfer(k)===tt?(Z!==Yn||ee!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Te(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=L,this.rebindTextures=ke,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ge}function i3(t,e){function n(i,r=Ji){let s;const o=$e.getTransfer(r);if(i===Oi)return t.UNSIGNED_BYTE;if(i===sm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===om)return t.UNSIGNED_SHORT_5_5_5_1;if(i===JS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ZS)return t.BYTE;if(i===QS)return t.SHORT;if(i===Ca)return t.UNSIGNED_SHORT;if(i===rm)return t.INT;if(i===Jr)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===Oa)return t.HALF_FLOAT;if(i===eM)return t.ALPHA;if(i===tM)return t.RGB;if(i===Yn)return t.RGBA;if(i===nM)return t.LUMINANCE;if(i===iM)return t.LUMINANCE_ALPHA;if(i===js)return t.DEPTH_COMPONENT;if(i===ao)return t.DEPTH_STENCIL;if(i===rM)return t.RED;if(i===am)return t.RED_INTEGER;if(i===sM)return t.RG;if(i===lm)return t.RG_INTEGER;if(i===cm)return t.RGBA_INTEGER;if(i===ql||i===Kl||i===Zl||i===Ql)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ql)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ql)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ql)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zf||i===Qf||i===Jf||i===eh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===th||i===nh||i===ih)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===th||i===nh)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ih)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh||i===vh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ah)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ch)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ph)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jl||i===xh||i===_h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jl)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oM||i===yh||i===Sh||i===Mh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class r3 extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jo extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s3={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const o3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a3=`
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

}`;class l3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vr({vertexShader:o3,fragmentShader:a3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Nn(new au(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c3 extends go{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const x=new l3,m=n.getContextAttributes();let f=null,g=null;const _=[],y=[],R=new Ve;let C=null;const A=new mn;A.viewport=new nt;const b=new mn;b.viewport=new nt;const E=[A,b],S=new r3;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=_[W];return ne===void 0&&(ne=new wd,_[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=_[W];return ne===void 0&&(ne=new wd,_[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=_[W];return ne===void 0&&(ne=new wd,_[W]=ne),ne.getHandSpace()};function H(W){const ne=y.indexOf(W.inputSource);if(ne===-1)return;const me=_[ne];me!==void 0&&(me.update(W.inputSource,W.frame,c||o),me.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",J);for(let W=0;W<_.length;W++){const ne=y[W];ne!==null&&(y[W]=null,_[W].disconnect(ne))}D=null,B=null,x.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,g=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",q),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new es(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,me=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?ao:js,me=m.stencil?oo:Jr);const be={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new es(h.textureWidth,h.textureHeight,{format:Yn,type:Oi,depthTexture:new SM(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(W){for(let ne=0;ne<W.removed.length;ne++){const me=W.removed[ne],oe=y.indexOf(me);oe>=0&&(y[oe]=null,_[oe].disconnect(me))}for(let ne=0;ne<W.added.length;ne++){const me=W.added[ne];let oe=y.indexOf(me);if(oe===-1){for(let Le=0;Le<_.length;Le++)if(Le>=y.length){y.push(me),oe=Le;break}else if(y[Le]===null){y[Le]=me,oe=Le;break}if(oe===-1)break}const be=_[oe];be&&be.connect(me)}}const $=new O,X=new O;function L(W,ne,me){$.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(me.matrixWorld);const oe=$.distanceTo(X),be=ne.projectionMatrix.elements,Le=me.projectionMatrix.elements,ke=be[14]/(be[10]-1),pt=be[14]/(be[10]+1),je=(be[9]+1)/be[5],Mt=(be[9]-1)/be[5],F=(be[8]-1)/be[0],wn=(Le[8]+1)/Le[0],He=ke*F,Ge=ke*wn,Ce=oe/(-F+wn),ot=Ce*-F;if(ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ot),W.translateZ(Ce),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Te=ke+Ce,P=pt+Ce,M=He-ot,k=Ge+(oe-ot),Z=je*pt/P*Te,ee=Mt*pt/P*Te;W.projectionMatrix.makePerspective(M,k,Z,ee,Te,P),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function j(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ne=W.near,me=W.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(me=x.depthFar)),S.near=b.near=A.near=ne,S.far=b.far=A.far=me,(D!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,B=S.far),A.layers.mask=W.layers.mask|2,b.layers.mask=W.layers.mask|4,S.layers.mask=A.layers.mask|b.layers.mask;const oe=W.parent,be=S.cameras;j(S,oe);for(let Le=0;Le<be.length;Le++)j(be[Le],oe);be.length===2?L(S,A,b):S.projectionMatrix.copy(A.projectionMatrix),K(W,S,oe)};function K(W,ne,me){me===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Eh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ae=null;function Me(W,ne){if(u=ne.getViewerPose(c||o),v=ne,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let oe=!1;me.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Le=0;Le<me.length;Le++){const ke=me[Le];let pt=null;if(p!==null)pt=p.getViewport(ke);else{const Mt=d.getViewSubImage(h,ke);pt=Mt.viewport,Le===0&&(e.setRenderTargetTextures(g,Mt.colorTexture,h.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(g))}let je=E[Le];je===void 0&&(je=new mn,je.layers.enable(Le),je.viewport=new nt,E[Le]=je),je.matrix.fromArray(ke.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ke.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(pt.x,pt.y,pt.width,pt.height),Le===0&&(S.matrix.copy(je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(je)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Le=d.getDepthInformation(me[0]);Le&&Le.isValid&&Le.texture&&x.init(e,Le,r.renderState)}}for(let me=0;me<_.length;me++){const oe=y[me],be=_[me];oe!==null&&be!==void 0&&be.update(oe,ne,c||o)}ae&&ae(W,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const qe=new yM;qe.setAnimationLoop(Me),this.setAnimationLoop=function(W){ae=W},this.dispose=function(){}}}const br=new fi,u3=new ht;function d3(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,vM(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),_=g.envMap,y=g.envMapRotation;_&&(m.envMap.value=_,br.copy(y),br.x*=-1,br.y*=-1,br.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(u3.makeRotationFromEuler(br)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function f3(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const y=_.program;i.uniformBlockBinding(g,y)}function c(g,_){let y=r[g.id];y===void 0&&(v(g),y=u(g),r[g.id]=y,g.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(g,R);const C=e.render.frame;s[g.id]!==C&&(h(g),s[g.id]=C)}function u(g){const _=d();g.__bindingPointIndex=_;const y=t.createBuffer(),R=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],y=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,A=y.length;C<A;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,S=b.length;E<S;E++){const D=b[E];if(p(D,C,E,R)===!0){const B=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let J=0;J<H.length;J++){const $=H[J],X=x($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,B+q,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,q),q+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,y,R){const C=g.value,A=_+"_"+y;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const b=R[A];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return R[A]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function v(g){const _=g.uniforms;let y=0;const R=16;for(let A=0,b=_.length;A<b;A++){const E=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,D=E.length;S<D;S++){const B=E[S],H=Array.isArray(B.value)?B.value:[B.value];for(let q=0,J=H.length;q<J;q++){const $=H[q],X=x($),L=y%R,j=L%X.boundary,K=L+j;y+=j,K!==0&&R-K<X.storage&&(y+=R-K),B.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=X.storage}}}const C=y%R;return C>0&&(y+=R-C),g.__size=y,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class h3{constructor(e={}){const{canvas:n=eP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=dr,this.toneMappingExposure=1;const y=this;let R=!1,C=0,A=0,b=null,E=-1,S=null;const D=new nt,B=new nt;let H=null;const q=new ze(0);let J=0,$=n.width,X=n.height,L=1,j=null,K=null;const ae=new nt(0,0,$,X),Me=new nt(0,0,$,X);let qe=!1;const W=new um;let ne=!1,me=!1;const oe=new ht,be=new ht,Le=new O,ke=new nt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Mt(){return b===null?L:1}let F=i;function wn(w,I){return n.getContext(w,I)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${im}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",de,!1),F===null){const I="webgl2";if(F=wn(I,w),F===null)throw wn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let He,Ge,Ce,ot,Te,P,M,k,Z,ee,Y,Ee,ue,ge,Xe,ie,ve,Re,Pe,xe,We,Fe,it,N;function ce(){He=new xL(F),He.init(),Fe=new i3(F,He),Ge=new dL(F,He,e,Fe),Ce=new e3(F,He),Ge.reverseDepthBuffer&&h&&Ce.buffers.depth.setReversed(!0),ot=new SL(F),Te=new BN,P=new n3(F,He,Ce,Te,Ge,Fe,ot),M=new hL(y),k=new vL(y),Z=new CP(F),it=new cL(F,Z),ee=new _L(F,Z,ot,it),Y=new EL(F,ee,Z,ot),Pe=new ML(F,Ge,P),ie=new fL(Te),Ee=new kN(y,M,k,He,Ge,it,ie),ue=new d3(y,Te),ge=new VN,Xe=new $N(He),Re=new lL(y,M,k,Ce,Y,p,l),ve=new QN(y,Y,Ge),N=new f3(F,ot,Ge,Ce),xe=new uL(F,He,ot),We=new yL(F,He,ot),ot.programs=Ee.programs,y.capabilities=Ge,y.extensions=He,y.properties=Te,y.renderLists=ge,y.shadowMap=ve,y.state=Ce,y.info=ot}ce();const G=new c3(y,F);this.xr=G,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=He.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=He.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(w){w!==void 0&&(L=w,this.setSize($,X,!1))},this.getSize=function(w){return w.set($,X)},this.setSize=function(w,I,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,X=I,n.width=Math.floor(w*L),n.height=Math.floor(I*L),z===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set($*L,X*L).floor()},this.setDrawingBufferSize=function(w,I,z){$=w,X=I,L=z,n.width=Math.floor(w*z),n.height=Math.floor(I*z),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,I,z,V){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,I,z,V),Ce.viewport(D.copy(ae).multiplyScalar(L).round())},this.getScissor=function(w){return w.copy(Me)},this.setScissor=function(w,I,z,V){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,I,z,V),Ce.scissor(B.copy(Me).multiplyScalar(L).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(w){Ce.setScissorTest(qe=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(w=!0,I=!0,z=!0){let V=0;if(w){let U=!1;if(b!==null){const se=b.texture.format;U=se===cm||se===lm||se===am}if(U){const se=b.texture.type,fe=se===Oi||se===Jr||se===Ca||se===oo||se===sm||se===om,_e=Re.getClearColor(),ye=Re.getClearAlpha(),De=_e.r,Ie=_e.g,Se=_e.b;fe?(v[0]=De,v[1]=Ie,v[2]=Se,v[3]=ye,F.clearBufferuiv(F.COLOR,0,v)):(x[0]=De,x[1]=Ie,x[2]=Se,x[3]=ye,F.clearBufferiv(F.COLOR,0,x))}else V|=F.COLOR_BUFFER_BIT}I&&(V|=F.DEPTH_BUFFER_BIT),z&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",de,!1),ge.dispose(),Xe.dispose(),Te.dispose(),M.dispose(),k.dispose(),Y.dispose(),it.dispose(),N.dispose(),Ee.dispose(),G.dispose(),G.removeEventListener("sessionstart",gm),G.removeEventListener("sessionend",vm),Mr.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=ot.autoReset,I=ve.enabled,z=ve.autoUpdate,V=ve.needsUpdate,U=ve.type;ce(),ot.autoReset=w,ve.enabled=I,ve.autoUpdate=z,ve.needsUpdate=V,ve.type=U}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ne(w){const I=w.target;I.removeEventListener("dispose",Ne),_t(I)}function _t(w){kt(w),Te.remove(w)}function kt(w){const I=Te.get(w).programs;I!==void 0&&(I.forEach(function(z){Ee.releaseProgram(z)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,z,V,U,se){I===null&&(I=pt);const fe=U.isMesh&&U.matrixWorld.determinant()<0,_e=IM(w,I,z,V,U);Ce.setMaterial(V,fe);let ye=z.index,De=1;if(V.wireframe===!0){if(ye=ee.getWireframeAttribute(z),ye===void 0)return;De=2}const Ie=z.drawRange,Se=z.attributes.position;let Ke=Ie.start*De,rt=(Ie.start+Ie.count)*De;se!==null&&(Ke=Math.max(Ke,se.start*De),rt=Math.min(rt,(se.start+se.count)*De)),ye!==null?(Ke=Math.max(Ke,0),rt=Math.min(rt,ye.count)):Se!=null&&(Ke=Math.max(Ke,0),rt=Math.min(rt,Se.count));const at=rt-Ke;if(at<0||at===1/0)return;it.setup(U,V,_e,z,ye);let tn,Ze=xe;if(ye!==null&&(tn=Z.get(ye),Ze=We,Ze.setIndex(tn)),U.isMesh)V.wireframe===!0?(Ce.setLineWidth(V.wireframeLinewidth*Mt()),Ze.setMode(F.LINES)):Ze.setMode(F.TRIANGLES);else if(U.isLine){let we=V.linewidth;we===void 0&&(we=1),Ce.setLineWidth(we*Mt()),U.isLineSegments?Ze.setMode(F.LINES):U.isLineLoop?Ze.setMode(F.LINE_LOOP):Ze.setMode(F.LINE_STRIP)}else U.isPoints?Ze.setMode(F.POINTS):U.isSprite&&Ze.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ze.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ze.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const we=U._multiDrawStarts,pi=U._multiDrawCounts,Qe=U._multiDrawCount,kn=ye?Z.get(ye).bytesPerElement:1,rs=Te.get(V).currentProgram.getUniforms();for(let dn=0;dn<Qe;dn++)rs.setValue(F,"_gl_DrawID",dn),Ze.render(we[dn]/kn,pi[dn])}else if(U.isInstancedMesh)Ze.renderInstances(Ke,at,U.count);else if(z.isInstancedBufferGeometry){const we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,pi=Math.min(z.instanceCount,we);Ze.renderInstances(Ke,at,pi)}else Ze.render(Ke,at)};function Je(w,I,z){w.transparent===!0&&w.side===Ei&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,Ga(w,I,z),w.side=gr,w.needsUpdate=!0,Ga(w,I,z),w.side=Ei):Ga(w,I,z)}this.compile=function(w,I,z=null){z===null&&(z=w),f=Xe.get(z),f.init(I),_.push(f),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),w!==z&&w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const _e=se[fe];Je(_e,z,U),V.add(_e)}else Je(se,z,U),V.add(se)}),_.pop(),f=null,V},this.compileAsync=function(w,I,z=null){const V=this.compile(w,I,z);return new Promise(U=>{function se(){if(V.forEach(function(fe){Te.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){U(w);return}setTimeout(se,10)}He.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let On=null;function hi(w){On&&On(w)}function gm(){Mr.stop()}function vm(){Mr.start()}const Mr=new yM;Mr.setAnimationLoop(hi),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(w){On=w,G.setAnimationLoop(w),w===null?Mr.stop():Mr.start()},G.addEventListener("sessionstart",gm),G.addEventListener("sessionend",vm),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,I,b),f=Xe.get(w,_.length),f.init(I),_.push(f),be.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(be),me=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,me),m=ge.get(w,g.length),m.init(),g.push(m),G.enabled===!0&&G.isPresenting===!0){const se=y.xr.getDepthSensingMesh();se!==null&&cu(se,I,-1/0,y.sortObjects)}cu(w,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(j,K),je=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,je&&Re.addToRenderList(m,w),this.info.render.frame++,ne===!0&&ie.beginShadows();const z=f.state.shadowsArray;ve.render(z,w,I),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,U=m.transmissive;if(f.setupLights(),I.isArrayCamera){const se=I.cameras;if(U.length>0)for(let fe=0,_e=se.length;fe<_e;fe++){const ye=se[fe];_m(V,U,w,ye)}je&&Re.render(w);for(let fe=0,_e=se.length;fe<_e;fe++){const ye=se[fe];xm(m,w,ye,ye.viewport)}}else U.length>0&&_m(V,U,w,I),je&&Re.render(w),xm(m,w,I);b!==null&&(P.updateMultisampleRenderTarget(b),P.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(y,w,I),it.resetDefaultState(),E=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],ne===!0&&ie.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function cu(w,I,z,V){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){V&&ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(be);const fe=Y.update(w),_e=w.material;_e.visible&&m.push(w,fe,_e,z,ke.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){const fe=Y.update(w),_e=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ke.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ke.copy(fe.boundingSphere.center)),ke.applyMatrix4(w.matrixWorld).applyMatrix4(be)),Array.isArray(_e)){const ye=fe.groups;for(let De=0,Ie=ye.length;De<Ie;De++){const Se=ye[De],Ke=_e[Se.materialIndex];Ke&&Ke.visible&&m.push(w,fe,Ke,z,ke.z,Se)}}else _e.visible&&m.push(w,fe,_e,z,ke.z,null)}}const se=w.children;for(let fe=0,_e=se.length;fe<_e;fe++)cu(se[fe],I,z,V)}function xm(w,I,z,V){const U=w.opaque,se=w.transmissive,fe=w.transparent;f.setupLightsView(z),ne===!0&&ie.setGlobalState(y.clippingPlanes,z),V&&Ce.viewport(D.copy(V)),U.length>0&&Ha(U,I,z),se.length>0&&Ha(se,I,z),fe.length>0&&Ha(fe,I,z),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function _m(w,I,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new es(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Oa:Oi,minFilter:Gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const se=f.state.transmissionRenderTarget[V.id],fe=V.viewport||D;se.setSize(fe.z,fe.w);const _e=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(q),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),je&&Re.render(z);const ye=y.toneMapping;y.toneMapping=dr;const De=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),ne===!0&&ie.setGlobalState(y.clippingPlanes,V),Ha(w,z,V),P.updateMultisampleRenderTarget(se),P.updateRenderTargetMipmap(se),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Se=0,Ke=I.length;Se<Ke;Se++){const rt=I[Se],at=rt.object,tn=rt.geometry,Ze=rt.material,we=rt.group;if(Ze.side===Ei&&at.layers.test(V.layers)){const pi=Ze.side;Ze.side=cn,Ze.needsUpdate=!0,ym(at,z,V,tn,Ze,we),Ze.side=pi,Ze.needsUpdate=!0,Ie=!0}}Ie===!0&&(P.updateMultisampleRenderTarget(se),P.updateRenderTargetMipmap(se))}y.setRenderTarget(_e),y.setClearColor(q,J),De!==void 0&&(V.viewport=De),y.toneMapping=ye}function Ha(w,I,z){const V=I.isScene===!0?I.overrideMaterial:null;for(let U=0,se=w.length;U<se;U++){const fe=w[U],_e=fe.object,ye=fe.geometry,De=V===null?fe.material:V,Ie=fe.group;_e.layers.test(z.layers)&&ym(_e,I,z,ye,De,Ie)}}function ym(w,I,z,V,U,se){w.onBeforeRender(y,I,z,V,U,se),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(y,I,z,V,w,se),U.transparent===!0&&U.side===Ei&&U.forceSinglePass===!1?(U.side=cn,U.needsUpdate=!0,y.renderBufferDirect(z,I,V,U,w,se),U.side=gr,U.needsUpdate=!0,y.renderBufferDirect(z,I,V,U,w,se),U.side=Ei):y.renderBufferDirect(z,I,V,U,w,se),w.onAfterRender(y,I,z,V,U,se)}function Ga(w,I,z){I.isScene!==!0&&(I=pt);const V=Te.get(w),U=f.state.lights,se=f.state.shadowsArray,fe=U.state.version,_e=Ee.getParameters(w,U.state,se,I,z),ye=Ee.getProgramCacheKey(_e);let De=V.programs;V.environment=w.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(w.isMeshStandardMaterial?k:M).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",Ne),De=new Map,V.programs=De);let Ie=De.get(ye);if(Ie!==void 0){if(V.currentProgram===Ie&&V.lightsStateVersion===fe)return Mm(w,_e),Ie}else _e.uniforms=Ee.getUniforms(w),w.onBeforeCompile(_e,y),Ie=Ee.acquireProgram(_e,ye),De.set(ye,Ie),V.uniforms=_e.uniforms;const Se=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=ie.uniform),Mm(w,_e),V.needsLights=FM(w),V.lightsStateVersion=fe,V.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Ie,V.uniformsList=null,Ie}function Sm(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=ec.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Mm(w,I){const z=Te.get(w);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function IM(w,I,z,V,U){I.isScene!==!0&&(I=pt),P.resetTextureUnits();const se=I.fog,fe=V.isMeshStandardMaterial?I.environment:null,_e=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:mo,ye=(V.isMeshStandardMaterial?k:M).get(V.envMap||fe),De=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,rt=!!z.morphAttributes.color;let at=dr;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(at=y.toneMapping);const tn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ze=tn!==void 0?tn.length:0,we=Te.get(V),pi=f.state.lights;if(ne===!0&&(me===!0||w!==S)){const Tn=w===S&&V.id===E;ie.setState(V,w,Tn)}let Qe=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==pi.state.version||we.outputColorSpace!==_e||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==ye||V.fog===!0&&we.fog!==se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==De||we.vertexTangents!==Ie||we.morphTargets!==Se||we.morphNormals!==Ke||we.morphColors!==rt||we.toneMapping!==at||we.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,we.__version=V.version);let kn=we.currentProgram;Qe===!0&&(kn=Ga(V,I,U));let rs=!1,dn=!1,_o=!1;const lt=kn.getUniforms(),ni=we.uniforms;if(Ce.useProgram(kn.program)&&(rs=!0,dn=!0,_o=!0),V.id!==E&&(E=V.id,dn=!0),rs||S!==w){Ce.buffers.depth.getReversed()?(oe.copy(w.projectionMatrix),nP(oe),iP(oe),lt.setValue(F,"projectionMatrix",oe)):lt.setValue(F,"projectionMatrix",w.projectionMatrix),lt.setValue(F,"viewMatrix",w.matrixWorldInverse);const Bi=lt.map.cameraPosition;Bi!==void 0&&Bi.setValue(F,Le.setFromMatrixPosition(w.matrixWorld)),Ge.logarithmicDepthBuffer&&lt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&lt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,dn=!0,_o=!0)}if(U.isSkinnedMesh){lt.setOptional(F,U,"bindMatrix"),lt.setOptional(F,U,"bindMatrixInverse");const Tn=U.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),lt.setValue(F,"boneTexture",Tn.boneTexture,P))}U.isBatchedMesh&&(lt.setOptional(F,U,"batchingTexture"),lt.setValue(F,"batchingTexture",U._matricesTexture,P),lt.setOptional(F,U,"batchingIdTexture"),lt.setValue(F,"batchingIdTexture",U._indirectTexture,P),lt.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(F,"batchingColorTexture",U._colorsTexture,P));const yo=z.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0)&&Pe.update(U,z,kn),(dn||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,lt.setValue(F,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ni.envMap.value=ye,ni.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(ni.envMapIntensity.value=I.environmentIntensity),dn&&(lt.setValue(F,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&UM(ni,_o),se&&V.fog===!0&&ue.refreshFogUniforms(ni,se),ue.refreshMaterialUniforms(ni,V,L,X,f.state.transmissionRenderTarget[w.id]),ec.upload(F,Sm(we),ni,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ec.upload(F,Sm(we),ni,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&lt.setValue(F,"center",U.center),lt.setValue(F,"modelViewMatrix",U.modelViewMatrix),lt.setValue(F,"normalMatrix",U.normalMatrix),lt.setValue(F,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Tn=V.uniformsGroups;for(let Bi=0,zi=Tn.length;Bi<zi;Bi++){const Em=Tn[Bi];N.update(Em,kn),N.bind(Em,kn)}}return kn}function UM(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function FM(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,I,z){Te.get(w.texture).__webglTexture=I,Te.get(w.depthTexture).__webglTexture=z;const V=Te.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const z=Te.get(w);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,z=0){b=w,C=I,A=z;let V=!0,U=null,se=!1,fe=!1;if(w){const ye=Te.get(w);if(ye.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(ye.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(ye.__hasExternalTextures)P.rebindTextures(w,Te.get(w.texture).__webglTexture,Te.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Se=w.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&Te.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(fe=!0);const Ie=Te.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?U=Ie[I][z]:U=Ie[I],se=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?U=Te.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[z]:U=Ie,D.copy(w.viewport),B.copy(w.scissor),H=w.scissorTest}else D.copy(ae).multiplyScalar(L).floor(),B.copy(Me).multiplyScalar(L).floor(),H=qe;if(Ce.bindFramebuffer(F.FRAMEBUFFER,U)&&V&&Ce.drawBuffers(w,U),Ce.viewport(D),Ce.scissor(B),Ce.setScissorTest(H),se){const ye=Te.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,z)}else if(fe){const ye=Te.get(w.texture),De=I||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,De)}E=-1},this.readRenderTargetPixels=function(w,I,z,V,U,se,fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){Ce.bindFramebuffer(F.FRAMEBUFFER,_e);try{const ye=w.texture,De=ye.format,Ie=ye.type;if(!Ge.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-V&&z>=0&&z<=w.height-U&&F.readPixels(I,z,V,U,Fe.convert(De),Fe.convert(Ie),se)}finally{const ye=b!==null?Te.get(b).__webglFramebuffer:null;Ce.bindFramebuffer(F.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,I,z,V,U,se,fe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){const ye=w.texture,De=ye.format,Ie=ye.type;if(!Ge.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-V&&z>=0&&z<=w.height-U){Ce.bindFramebuffer(F.FRAMEBUFFER,_e);const Se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Se),F.bufferData(F.PIXEL_PACK_BUFFER,se.byteLength,F.STREAM_READ),F.readPixels(I,z,V,U,Fe.convert(De),Fe.convert(Ie),0);const Ke=b!==null?Te.get(b).__webglFramebuffer:null;Ce.bindFramebuffer(F.FRAMEBUFFER,Ke);const rt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await tP(F,rt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,se),F.deleteBuffer(Se),F.deleteSync(rt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,z=0){w.isTexture!==!0&&(Go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-z),U=Math.floor(w.image.width*V),se=Math.floor(w.image.height*V),fe=I!==null?I.x:0,_e=I!==null?I.y:0;P.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,fe,_e,U,se),Ce.unbindTexture()},this.copyTextureToTexture=function(w,I,z=null,V=null,U=0){w.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let se,fe,_e,ye,De,Ie,Se,Ke,rt;const at=w.isCompressedTexture?w.mipmaps[U]:w.image;z!==null?(se=z.max.x-z.min.x,fe=z.max.y-z.min.y,_e=z.isBox3?z.max.z-z.min.z:1,ye=z.min.x,De=z.min.y,Ie=z.isBox3?z.min.z:0):(se=at.width,fe=at.height,_e=at.depth||1,ye=0,De=0,Ie=0),V!==null?(Se=V.x,Ke=V.y,rt=V.z):(Se=0,Ke=0,rt=0);const tn=Fe.convert(I.format),Ze=Fe.convert(I.type);let we;I.isData3DTexture?(P.setTexture3D(I,0),we=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(P.setTexture2DArray(I,0),we=F.TEXTURE_2D_ARRAY):(P.setTexture2D(I,0),we=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const pi=F.getParameter(F.UNPACK_ROW_LENGTH),Qe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),kn=F.getParameter(F.UNPACK_SKIP_PIXELS),rs=F.getParameter(F.UNPACK_SKIP_ROWS),dn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,at.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ye),F.pixelStorei(F.UNPACK_SKIP_ROWS,De),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ie);const _o=w.isDataArrayTexture||w.isData3DTexture,lt=I.isDataArrayTexture||I.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const ni=Te.get(w),yo=Te.get(I),Tn=Te.get(ni.__renderTarget),Bi=Te.get(yo.__renderTarget);Ce.bindFramebuffer(F.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ce.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let zi=0;zi<_e;zi++)_o&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.get(w).__webglTexture,U,Ie+zi),w.isDepthTexture?(lt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.get(I).__webglTexture,U,rt+zi),F.blitFramebuffer(ye,De,se,fe,Se,Ke,se,fe,F.DEPTH_BUFFER_BIT,F.NEAREST)):lt?F.copyTexSubImage3D(we,U,Se,Ke,rt+zi,ye,De,se,fe):F.copyTexSubImage2D(we,U,Se,Ke,rt+zi,ye,De,se,fe);Ce.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else lt?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(we,U,Se,Ke,rt,se,fe,_e,tn,Ze,at.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(we,U,Se,Ke,rt,se,fe,_e,tn,at.data):F.texSubImage3D(we,U,Se,Ke,rt,se,fe,_e,tn,Ze,at):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,Se,Ke,se,fe,tn,Ze,at.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,Se,Ke,at.width,at.height,tn,at.data):F.texSubImage2D(F.TEXTURE_2D,U,Se,Ke,se,fe,tn,Ze,at);F.pixelStorei(F.UNPACK_ROW_LENGTH,pi),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,kn),F.pixelStorei(F.UNPACK_SKIP_ROWS,rs),F.pixelStorei(F.UNPACK_SKIP_IMAGES,dn),U===0&&I.generateMipmaps&&F.generateMipmap(we),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,I,z=null,V=null,U=0){return w.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,w=arguments[2],I=arguments[3],U=arguments[4]||0),Go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,I,z,V,U)},this.initRenderTarget=function(w){Te.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,Ce.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}class p3 extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class AM extends vo{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Y0=new ht,Th=new fM,Ll=new ou,Nl=new O;class m3 extends Zt{constructor(e=new ti,n=new AM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(r),Ll.radius+=s,e.ray.intersectsSphere(Ll)===!1)return;Y0.copy(r).invert(),Th.copy(e.ray).applyMatrix4(Y0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=h,x=p;v<x;v++){const m=c.getX(v);Nl.fromBufferAttribute(d,m),q0(Nl,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=h,x=p;v<x;v++)Nl.fromBufferAttribute(d,v),q0(Nl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function q0(t,e,n,i,r,s,o){const a=Th.distanceSqToPoint(t);if(a<n){const l=new O;Th.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class fm extends ti{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new _n(s,3)),this.setAttribute("normal",new _n(s.slice(),3)),this.setAttribute("uv",new _n(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const _=new O,y=new O,R=new O;for(let C=0;C<n.length;C+=3)p(n[C+0],_),p(n[C+1],y),p(n[C+2],R),l(_,y,R,g)}function l(g,_,y,R){const C=R+1,A=[];for(let b=0;b<=C;b++){A[b]=[];const E=g.clone().lerp(y,b/C),S=_.clone().lerp(y,b/C),D=C-b;for(let B=0;B<=D;B++)B===0&&b===C?A[b][B]=E:A[b][B]=E.clone().lerp(S,B/D)}for(let b=0;b<C;b++)for(let E=0;E<2*(C-b)-1;E++){const S=Math.floor(E/2);E%2===0?(h(A[b][S+1]),h(A[b+1][S]),h(A[b][S])):(h(A[b][S+1]),h(A[b+1][S+1]),h(A[b+1][S]))}}function c(g){const _=new O;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(g),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function u(){const g=new O;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const y=m(g)/2/Math.PI+.5,R=f(g)/Math.PI+.5;o.push(y,1-R)}v(),d()}function d(){for(let g=0;g<o.length;g+=6){const _=o[g+0],y=o[g+2],R=o[g+4],C=Math.max(_,y,R),A=Math.min(_,y,R);C>.9&&A<.1&&(_<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),R<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,_){const y=g*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function v(){const g=new O,_=new O,y=new O,R=new O,C=new Ve,A=new Ve,b=new Ve;for(let E=0,S=0;E<s.length;E+=9,S+=6){g.set(s[E+0],s[E+1],s[E+2]),_.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),C.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),b.set(o[S+4],o[S+5]),R.copy(g).add(_).add(y).divideScalar(3);const D=m(R);x(C,S+0,g,D),x(A,S+2,_,D),x(b,S+4,y,D)}}function x(g,_,y,R){R<0&&g.x===1&&(o[_]=g.x-1),y.x===0&&y.z===0&&(o[_]=R/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fm(e.vertices,e.indices,e.radius,e.details)}}class Uc extends fm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Uc(e.radius,e.detail)}}class hm extends ti{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new O,d=new O,h=new O;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const x=v/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(x),d.y=(e+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const x=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,f=(r+1)*(p-1)+v,g=(r+1)*p+v;o.push(x,m,g),o.push(m,f,g)}this.setIndex(o),this.setAttribute("position",new _n(a,3)),this.setAttribute("normal",new _n(l,3)),this.setAttribute("uv",new _n(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class g3 extends vo{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aM,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class v3 extends g3{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class CM extends Zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Td=new ht,K0=new O,Z0=new O;class x3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new um,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;K0.setFromMatrixPosition(e.matrixWorld),n.position.copy(K0),Z0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Z0),n.updateMatrixWorld(),Td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Td)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Q0=new ht,Uo=new O,Ad=new O;class _3 extends x3{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Uo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Uo),Ad.copy(i.position),Ad.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ad),i.updateMatrixWorld(),r.makeTranslation(-Uo.x,-Uo.y,-Uo.z),Q0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Q0)}}class J0 extends CM{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new _3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class y3 extends CM{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class S3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ex(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=ex();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function ex(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:im}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=im);function pm(){const t=re.useRef(null);return re.useEffect(()=>{if(!t.current)return;const e=new p3,n=new mn(60,window.innerWidth/window.innerHeight,.1,120);n.position.set(0,.2,8.5);const i=new h3({alpha:!0,antialias:!0,powerPreference:"high-performance"});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),t.current.appendChild(i.domElement);const r=new jo;e.add(r);const s=new Uc(2.2,4),o=new v3({color:9371466,metalness:.35,roughness:.15,transmission:.28,thickness:.9,transparent:!0,opacity:.26,clearcoat:1}),a=new Nn(s,o);a.position.set(2.5,-.2,-3),r.add(a);const l=new hm(3.4,.06,32,220),c=new Ic({color:10729471,transparent:!0,opacity:.24}),u=new Nn(l,c);u.rotation.x=Math.PI/2.6,u.position.set(-2.2,1.6,-5),r.add(u);const d=new Uc(1.45,1),h=new Ic({color:16777215,wireframe:!0,transparent:!0,opacity:.2}),p=new Nn(d,h);p.position.set(-2.9,-1.8,-4),r.add(p);const v=new ti,x=1200,m=new Float32Array(x*3);for(let B=0;B<x*3;B+=3)m[B]=(Math.random()-.5)*28,m[B+1]=(Math.random()-.5)*18,m[B+2]=(Math.random()-.5)*22;v.setAttribute("position",new Jn(m,3));const f=new AM({color:10857928,size:.03,transparent:!0,opacity:.45,blending:Of}),g=new m3(v,f);e.add(g);const _=new y3(16777215,.5);e.add(_);const y=new J0(11992891,1.35,40,2);y.position.set(4.2,2.8,3.5),e.add(y);const R=new J0(5796607,.95,34,2);R.position.set(-5,-2.5,1.2),e.add(R);let C=0,A=0;const b=B=>{C=(B.clientX/window.innerWidth-.5)*2,A=(B.clientY/window.innerHeight-.5)*2};document.addEventListener("mousemove",b);const E=new S3,S=()=>{const B=E.getElapsedTime();a.rotation.x=B*.17,a.rotation.y=B*.22,a.position.y=-.2+Math.sin(B*.8)*.35,u.rotation.z=B*.2,u.position.x=-2.2+Math.sin(B*.35)*.25,p.rotation.x=-B*.16,p.rotation.y=B*.23,g.rotation.y=B*.014,g.rotation.x=Math.sin(B*.08)*.08,n.position.x+=(C*.42-n.position.x)*.025,n.position.y+=(-A*.3-n.position.y)*.025,n.lookAt(0,0,-2.5),i.render(e,n),requestAnimationFrame(S)};S();const D=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",D),()=>{window.removeEventListener("resize",D),document.removeEventListener("mousemove",b),t.current&&i.domElement.parentNode===t.current&&t.current.removeChild(i.domElement),s.dispose(),o.dispose(),l.dispose(),c.dispose(),d.dispose(),h.dispose(),v.dispose(),f.dispose(),i.dispose()}},[]),T.jsx("div",{ref:t,className:"fixed inset-0 z-0 pointer-events-none"})}const mm=[{id:"01",title:"Personal Portfolio",category:"UX + Product Identity",summary:"A focused case-study experience highlighting process, rationale, and outcomes for product-facing design work.",href:"https://adebisijethro.framer.website/",tech:["UX Writing","Interaction Design","Case Study"],align:"left",tone:"lime"},{id:"02",title:"Behance Showcase",category:"Curated Project Gallery",summary:"A gallery-first experience with selected UI concepts, brand explorations, and practical design challenges.",href:"https://www.behance.net/adebisijethro",tech:["UI Systems","Branding","Presentation"],align:"right",tone:"cyan"},{id:"03",title:"LinkedIn Profile",category:"Professional Presence",summary:"Career timeline, cross-functional work history, and collaborative design impact across teams.",href:"https://www.linkedin.com/in/jethro-adebisi-21872a20b/",tech:["Communication","Leadership","Collaboration"],align:"center",tone:"orange"}];function M3(t){switch(t){case"lime":return"from-lime-300/25 to-lime-500/5";case"cyan":return"from-cyan-300/20 to-cyan-600/5";case"orange":return"from-orange-300/25 to-orange-500/10";default:return"from-violet-300/20 to-violet-600/10"}}function E3(t){return t==="left"?"md:ml-0 md:mr-auto":t==="right"?"md:ml-auto md:mr-0":"md:mx-auto"}function w3({card:t,index:e}){return T.jsxs(Zn.article,{className:`floating-web-card hover-target relative w-full max-w-[760px] rounded-3xl border border-white/15 p-4 ${E3(t.align)}`,initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-120px"},transition:{duration:.8,delay:e*.07,ease:[.16,1,.3,1]},whileHover:{y:-10,rotateX:1.5,rotateY:-1.5},style:{transformStyle:"preserve-3d"},children:[T.jsx(Zn.div,{className:"absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/10 blur-2xl",animate:{y:[0,12,0],x:[0,-8,0]},transition:{duration:7+e,repeat:1/0,ease:"easeInOut"}}),T.jsxs("div",{className:"browser-view overflow-hidden rounded-2xl border border-white/10",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 bg-black/35 px-4 py-3",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-red-300/90"}),T.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-yellow-300/90"}),T.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-green-300/90"})]}),T.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:t.category})]}),T.jsxs("div",{className:"preview-grid relative min-h-[420px] p-6 md:p-8",children:[T.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${M3(t.tone)}`}),T.jsx("iframe",{title:t.title,src:t.href,loading:"lazy",referrerPolicy:"no-referrer",className:"absolute inset-0 h-full w-full border-0 opacity-25 mix-blend-screen",sandbox:"allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"}),T.jsx("div",{className:"absolute inset-0 bg-black/35"}),T.jsxs("div",{className:"relative z-10 flex min-h-[360px] flex-col justify-between",children:[T.jsxs("div",{className:"mb-5 flex items-center justify-between gap-4",children:[T.jsxs("p",{className:"font-mono text-[11px] uppercase tracking-[0.22em] text-accent",children:["Project ",t.id]}),T.jsxs("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"hover-target inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-all hover:border-accent hover:text-accent",children:["Open Site ",T.jsx($r,{size:12})]})]}),T.jsxs("div",{children:[T.jsx("h3",{className:"font-serif text-4xl leading-[0.9] text-zinc-100 md:text-5xl",children:t.title}),T.jsx("p",{className:"mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base",children:t.summary}),T.jsx("div",{className:"mt-6 flex flex-wrap gap-2",children:t.tech.map(n=>T.jsx("span",{className:"rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-200",children:n},n))}),T.jsxs("div",{className:"mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-200",children:["Live website preview ",T.jsx($r,{size:12})]})]})]})]})]})]})}function T3({cards:t=mm}){return T.jsxs("section",{id:"work",className:"project-field mx-auto w-full max-w-[1500px] rounded-[2.5rem] px-6 py-24 md:px-12",children:[T.jsxs("div",{className:"mb-14 flex items-center gap-6",children:[T.jsx("h2",{className:"font-mono text-xs uppercase tracking-[0.22em] text-zinc-400",children:"Floating Web Views"}),T.jsx("div",{className:"h-px flex-1 bg-white/10"}),T.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500",children:"One-page portfolio deck"})]}),T.jsx("div",{className:"mb-10 max-w-3xl",children:T.jsxs("h3",{className:"font-serif text-5xl leading-[0.9] tracking-[-0.01em] text-zinc-100 md:text-7xl",children:["Interactive links as",T.jsx("span",{className:"block italic text-accent",children:"floating browser elements"})]})}),T.jsx("div",{className:"space-y-12",children:t.map((e,n)=>T.jsx(w3,{card:e,index:n},e.id))})]})}function Cd({year:t,role:e,company:n,location:i,details:r,isLast:s}){const[o,a]=re.useState(!1);return T.jsxs("div",{className:`group relative py-8 cursor-none hover-target ${s?"":"border-b border-white/10"}`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[T.jsxs("div",{className:"flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8 relative z-10",children:[T.jsx("div",{className:"font-mono text-sm text-muted w-32 shrink-0",children:t}),T.jsxs("div",{className:"flex-grow",children:[T.jsx("h3",{className:"font-serif text-3xl md:text-4xl group-hover:text-accent transition-colors duration-300",children:e}),T.jsx("div",{className:"font-sans text-lg text-foreground/80 mt-1",children:n})]}),T.jsx("div",{className:"font-mono text-xs text-muted uppercase tracking-widest text-left md:text-right w-32 shrink-0",children:i})]}),T.jsx(hw,{children:o&&T.jsx(Zn.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.4,ease:[.16,1,.3,1]},className:"overflow-hidden",children:T.jsx("div",{className:"pt-6 md:pl-40 pr-8 pb-4",children:T.jsx("ul",{className:"space-y-3",children:r.map((l,c)=>T.jsxs("li",{className:"font-sans text-sm text-muted leading-relaxed flex gap-3",children:[T.jsx("span",{className:"text-accent mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"}),T.jsx("span",{children:l})]},c))})})})})]})}const RM="admin@admin.com",bM="admin123",PM="jethro-admin-authed",DM="jethro-admin-sites",A3=[{title:"Discover",copy:"User interviews, behaviour mapping, and usability testing to expose what matters before visual decisions are made."},{title:"Design",copy:"Wireframes and prototypes that align product goals with intuitive interaction models and clean information flow."},{title:"Deliver",copy:"Cross-functional collaboration with product and marketing teams to ship coherent experiences across web and brand touchpoints."}],C3=["Figma","Sketch","InVision","Zeplin","Marvel","Adobe Photoshop","Adobe Illustrator","Adobe InDesign","HTML","CSS","JavaScript","TypeScript"],LM=["lime","cyan","orange","violet"];function NM(t){const e=t.trim();return e?/^https?:\/\//i.test(e)?e:`https://${e}`:""}function R3(t){return t.split(",").map(e=>e.trim()).filter(Boolean)}function b3(){const t=mm.map((e,n)=>({id:e.id,name:e.name,category:e.category,summary:e.summary,href:e.href,tech:e.tech,tone:e.tone,align:e.align}));if(typeof window>"u")return t;try{const e=window.localStorage.getItem(DM);if(!e)return t;const n=JSON.parse(e);return!Array.isArray(n)||n.length===0?t:n.map((i,r)=>({id:i.id||`site-${r}`,name:i.name||"Untitled website",category:i.category||"Case Study",summary:i.summary||"No summary provided.",href:NM(i.href),tech:Array.isArray(i.tech)?i.tech.filter(Boolean).slice(0,4):[],tone:LM.includes(i.tone)?i.tone:"lime",align:i.align==="left"||i.align==="right"||i.align==="center"?i.align:r%3===0?"left":r%3===1?"right":"center"})).filter(i=>!!i.href)}catch{return t}}function P3(t){window.localStorage.setItem(DM,JSON.stringify(t))}function D3(){return typeof window>"u"?!1:window.sessionStorage.getItem(PM)==="true"}function tx(t){window.sessionStorage.setItem(PM,t?"true":"false")}function Ah(t){window.history.pushState({},"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function L3({sites:t,onAdminOpen:e}){const n=re.useMemo(()=>t.length>0?t:mm.map(i=>({id:i.id,name:i.name,category:i.category,summary:i.summary,href:i.href,tech:i.tech,tone:i.tone,align:i.align})),[t]);return T.jsxs("div",{className:"min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background",children:[T.jsx(tm,{}),T.jsx(nm,{}),T.jsx(pm,{}),T.jsx("nav",{className:"fixed inset-x-0 top-0 z-40 px-6 py-5 md:px-12",children:T.jsxs("div",{className:"mx-auto flex w-full max-w-[1500px] items-center justify-between rounded-full border border-white/10 bg-black/35 px-5 py-3 backdrop-blur-lg",children:[T.jsx("a",{href:"#top",className:"hover-target text-lg font-serif italic tracking-wide",children:"AJ"}),T.jsxs("div",{className:"hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.22em] md:flex",children:[T.jsx("a",{href:"#work",className:"hover-target transition-colors hover:text-accent",children:"Projects"}),T.jsx("a",{href:"#about",className:"hover-target transition-colors hover:text-accent",children:"Profile"}),T.jsx("a",{href:"#experience",className:"hover-target transition-colors hover:text-accent",children:"Journey"}),T.jsx("a",{href:"#contact",className:"hover-target transition-colors hover:text-accent",children:"Contact"})]}),T.jsxs("button",{type:"button",onClick:e,className:"hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent",children:[T.jsx($S,{size:13})," Admin"]})]})}),T.jsxs("main",{className:"relative z-10",id:"top",children:[T.jsxs("section",{className:"mx-auto grid min-h-screen w-full max-w-[1500px] grid-cols-1 gap-12 px-6 pb-20 pt-32 md:px-12 lg:grid-cols-12 lg:items-end",children:[T.jsxs(Zn.div,{className:"lg:col-span-8",initial:{opacity:0,y:26},animate:{opacity:1,y:0},transition:{duration:.9,ease:[.22,1,.36,1]},children:[T.jsxs("div",{className:"mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.24em] text-accent",children:[T.jsx("span",{children:"UX Designer"}),T.jsx("span",{className:"h-px w-10 bg-accent/60"}),T.jsx("span",{children:"Lagos, Nigeria"})]}),T.jsxs("h1",{className:"leading-[0.85] tracking-[-0.03em]",children:[T.jsx("span",{className:"block font-serif text-[14vw] md:text-[11vw] lg:text-[9rem]",children:"Adebisi"}),T.jsx("span",{className:"text-stroke block pr-3 font-serif text-[14vw] italic md:text-[11vw] lg:text-[9rem]",children:"Jethro"})]}),T.jsx("p",{className:"mt-8 max-w-2xl text-xl leading-relaxed text-zinc-300 md:text-2xl",children:"A passionate and results-oriented UX Designer with 2+ years of experience creating user-centric digital and physical products through research, prototyping, and usability-led design decisions."})]}),T.jsx(Zn.aside,{className:"lg:col-span-4",initial:{opacity:0,y:35},animate:{opacity:1,y:0},transition:{delay:.25,duration:.8},children:T.jsxs("div",{className:"hero-card hover-target rounded-3xl border border-white/10 p-6",children:[T.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[T.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-muted",children:"Quick Info"}),T.jsx(cb,{size:16,className:"text-accent"})]}),T.jsxs("div",{className:"space-y-4 text-sm text-zinc-300",children:[T.jsxs("p",{className:"flex items-center gap-3",children:[T.jsx(rb,{size:14,className:"text-accent"})," Lagos, Nigeria"]}),T.jsxs("a",{href:"mailto:adebisireuel@gmail.com",className:"hover-target flex items-center gap-3 transition-colors hover:text-accent",children:[T.jsx(nb,{size:14,className:"text-accent"})," adebisireuel@gmail.com"]}),T.jsxs("a",{href:"tel:+2348186281244",className:"hover-target flex items-center gap-3 transition-colors hover:text-accent",children:[T.jsx(ob,{size:14,className:"text-accent"})," +234 818 628 1244"]})]}),T.jsxs("div",{className:"mt-6 border-t border-white/10 pt-6",children:[T.jsx("p",{className:"mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted",children:"Primary Focus"}),T.jsx("p",{className:"text-base leading-relaxed text-zinc-200",children:"User Research, Prototyping, Usability Testing, Interface Systems, and Brand-aligned Product Experiences."})]})]})}),T.jsxs("div",{className:"lg:col-span-12 flex items-center gap-4 pt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400",children:[T.jsx(HR,{size:15,className:"animate-bounce text-accent"}),T.jsx("span",{children:"Scroll to enter the project deck"})]})]}),T.jsx(T3,{projects:n}),T.jsxs("section",{id:"about",className:"mx-auto w-full max-w-[1500px] px-6 py-28 md:px-12",children:[T.jsxs("div",{className:"mb-14 flex items-center gap-6",children:[T.jsx("h2",{className:"font-mono text-xs uppercase tracking-[0.22em] text-muted",children:"About + Method"}),T.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),T.jsxs("div",{className:"grid grid-cols-1 gap-16 lg:grid-cols-12",children:[T.jsxs("div",{className:"lg:col-span-5",children:[T.jsxs("h3",{className:"mb-7 font-serif text-5xl leading-[0.9] md:text-6xl",children:["Designing with",T.jsx("span",{className:"block italic text-accent",children:"clarity and empathy"})]}),T.jsx("p",{className:"mb-6 text-lg leading-relaxed text-zinc-300",children:"I collaborate with founders, product teams, and marketing teams to create experiences that feel coherent from first interaction to long-term retention."}),T.jsx("p",{className:"text-lg leading-relaxed text-zinc-300",children:"Beyond product execution, I bring training and facilitation experience that helps teams understand design principles, user behaviour, and practical implementation constraints."})]}),T.jsxs("div",{className:"lg:col-span-7",children:[T.jsx("div",{className:"grid grid-cols-1 gap-5 md:grid-cols-3",children:A3.map(i=>T.jsxs("article",{className:"hover-target rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/40",children:[T.jsx("h4",{className:"mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent",children:i.title}),T.jsx("p",{className:"text-sm leading-relaxed text-zinc-300",children:i.copy})]},i.title))}),T.jsxs("div",{className:"mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6",children:[T.jsx("h4",{className:"mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted",children:"Tools + Craft"}),T.jsx("div",{className:"flex flex-wrap gap-2",children:C3.map(i=>T.jsx("span",{className:"rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-200",children:i},i))})]})]})]})]}),T.jsxs("section",{id:"experience",className:"mx-auto w-full max-w-[1500px] px-6 py-28 md:px-12",children:[T.jsxs("div",{className:"mb-14 flex items-center gap-6",children:[T.jsx("h2",{className:"font-mono text-xs uppercase tracking-[0.22em] text-muted",children:"Professional Experience"}),T.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),T.jsx(Cd,{year:"2023 - Present",role:"Freelance Product Designer",company:"Independent",location:"Lagos, Nigeria",details:["Designed user-centric digital and physical products for startups and established companies, improving UX and engagement.","Conducted user research and usability testing to refine prototypes and optimize interaction flow.","Used Figma, Sketch, and InVision to build high-fidelity mockups and clickable prototypes."]}),T.jsx(Cd,{year:"2022",role:"Digital Designer",company:"Filtar.Africa",location:"Lagos, Nigeria",details:["Developed cohesive, user-centered experiences across web, social media, and campaign assets.","Collaborated with marketing to align content with engagement goals and strengthen brand consistency.","Produced visual systems using Photoshop, Illustrator, and InDesign."]}),T.jsx(Cd,{year:"2019 - 2022",role:"Adobe Creative Suite Instructor",company:"Kavit Digital",location:"Lagos, Nigeria",details:["Delivered practical Adobe Creative Suite training for diverse learning styles and backgrounds.","Combined theory with project-based learning to build industry-standard execution skills in learners."],isLast:!0})]}),T.jsx("section",{className:"mx-auto w-full max-w-[1500px] border-t border-white/10 px-6 py-28 md:px-12",children:T.jsxs("div",{className:"grid grid-cols-1 gap-8 lg:grid-cols-3",children:[T.jsxs("article",{className:"rounded-3xl border border-white/10 bg-white/[0.03] p-6",children:[T.jsx("h3",{className:"mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted",children:"Education"}),T.jsx("p",{className:"text-lg text-zinc-100",children:"Google UX Design Professional Certificate"}),T.jsx("p",{className:"mt-1 text-sm text-zinc-400",children:"Completed July 2022"}),T.jsx("p",{className:"mt-5 text-sm leading-relaxed text-zinc-300",children:"Core training in user-centered design, prototyping, and usability testing workflows."}),T.jsx("p",{className:"mt-6 text-lg text-zinc-100",children:"B.Ed. Mathematics and Education"}),T.jsx("p",{className:"mt-1 text-sm text-zinc-400",children:"University of Lagos · Expected Aug 2025"})]}),T.jsxs("article",{className:"rounded-3xl border border-white/10 bg-white/[0.03] p-6",children:[T.jsx("h3",{className:"mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted",children:"Awards + Certifications"}),T.jsxs("ul",{className:"space-y-4 text-sm leading-relaxed text-zinc-300",children:[T.jsxs("li",{children:[T.jsx("span",{className:"font-medium text-zinc-100",children:"First Place - Product Design"}),T.jsx("p",{className:"text-zinc-400",children:"GDG Lagos 20 Days Challenge, 2024"})]}),T.jsxs("li",{children:[T.jsx("span",{className:"font-medium text-zinc-100",children:"Social Psychology Certification"}),T.jsx("p",{className:"text-zinc-400",children:"Wesleyan University, 2022"})]}),T.jsxs("li",{children:[T.jsx("span",{className:"font-medium text-zinc-100",children:"BED Mathematics Scholarship"}),T.jsx("p",{className:"text-zinc-400",children:"University of Lagos, 2020-2025"})]})]})]}),T.jsxs("article",{className:"rounded-3xl border border-white/10 bg-white/[0.03] p-6",children:[T.jsx("h3",{className:"mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted",children:"Volunteer Work"}),T.jsx("p",{className:"text-sm leading-relaxed text-zinc-300",children:"Provided graphic design services and creative support for community-focused tech and design organizations including GDG Lagos, MLSA Lagos, and ACM-SIGCHI Lagos."})]})]})}),T.jsxs("footer",{id:"contact",className:"mx-auto w-full max-w-[1500px] px-6 pb-20 pt-20 text-center md:px-12",children:[T.jsxs(Zn.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},children:[T.jsxs("h2",{className:"font-serif text-[16vw] leading-[0.8] tracking-[-0.02em] md:text-[11vw]",children:["Let us",T.jsx("span",{className:"text-stroke ml-4 italic",children:"build"})]}),T.jsxs("a",{href:"mailto:adebisireuel@gmail.com",className:"hover-target mt-8 inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-all hover:border-accent hover:bg-accent hover:text-black",children:["Start a conversation ",T.jsx($r,{size:14})]})]}),T.jsxs("div",{className:"mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.2em] text-zinc-400 md:flex-row",children:[T.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-5",children:[T.jsxs("a",{href:"https://adebisijethro.framer.website/",target:"_blank",rel:"noopener noreferrer",className:"hover-target inline-flex items-center gap-2 transition-colors hover:text-accent",children:["Portfolio ",T.jsx($r,{size:13})]}),T.jsxs("a",{href:"https://www.linkedin.com/in/jethro-adebisi-21872a20b/",target:"_blank",rel:"noopener noreferrer",className:"hover-target inline-flex items-center gap-2 transition-colors hover:text-accent",children:["LinkedIn ",T.jsx(QR,{size:13})]}),T.jsxs("a",{href:"https://www.behance.net/adebisijethro",target:"_blank",rel:"noopener noreferrer",className:"hover-target inline-flex items-center gap-2 transition-colors hover:text-accent",children:["Behance ",T.jsx($r,{size:13})]})]}),T.jsxs("p",{children:["© ",new Date().getFullYear()," Adebisi Jethro"]})]})]})]})]})}function N3({onLogin:t,onBackHome:e,error:n}){const[i,r]=re.useState(RM),[s,o]=re.useState(bM);return T.jsxs("div",{className:"min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background",children:[T.jsx(tm,{}),T.jsx(nm,{}),T.jsx(pm,{}),T.jsxs("main",{className:"relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-6 py-8 md:px-12",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("button",{type:"button",onClick:e,className:"hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent",children:[T.jsx(XS,{size:13})," Home"]}),T.jsx("div",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500",children:"/login2admin"})]}),T.jsx("section",{className:"flex flex-1 items-center justify-center py-12",children:T.jsxs("div",{className:"grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-12",children:[T.jsxs(Zn.div,{className:"lg:col-span-5",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},children:[T.jsxs("h1",{className:"font-serif text-5xl leading-[0.9] md:text-6xl",children:["Admin access for",T.jsx("span",{className:"block italic text-accent",children:"website links"})]}),T.jsx("p",{className:"mt-6 max-w-lg text-lg leading-relaxed text-zinc-300",children:"Sign in to add the websites you built. Every saved link is rendered on the homepage as a floating live browser preview."}),T.jsxs("div",{className:"mt-8 space-y-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm text-zinc-300",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx(qv,{size:14,className:"text-accent"})," Username: admin@admin.com"]}),T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx(qv,{size:14,className:"text-accent"})," Password: admin123"]})]})]}),T.jsxs(Zn.form,{className:"hero-card lg:col-span-7 rounded-3xl border border-white/10 p-6 md:p-8",initial:{opacity:0,y:28},animate:{opacity:1,y:0},transition:{duration:.8,delay:.1},onSubmit:a=>{a.preventDefault(),t(i,s)},children:[T.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[T.jsxs("div",{children:[T.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-muted",children:"Secure Login"}),T.jsx("h2",{className:"mt-2 text-2xl font-medium text-zinc-100",children:"Admin Dashboard"})]}),T.jsx($S,{className:"text-accent"})]}),T.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[T.jsxs("label",{className:"space-y-2",children:[T.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:"Username"}),T.jsx("input",{className:"w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent",value:i,onChange:a=>r(a.target.value),placeholder:"admin@admin.com",autoComplete:"username"})]}),T.jsxs("label",{className:"space-y-2",children:[T.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:"Password"}),T.jsx("input",{type:"password",className:"w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent",value:s,onChange:a=>o(a.target.value),placeholder:"admin123",autoComplete:"current-password"})]})]}),n?T.jsx("div",{className:"mt-4 rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200",children:n}):null,T.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-4",children:[T.jsxs("button",{type:"submit",className:"hover-target inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-black transition-transform hover:-translate-y-0.5",children:["Open Dashboard ",T.jsx($r,{size:13})]}),T.jsx("button",{type:"button",onClick:()=>Ah("/"),className:"hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent",children:"Back to home"})]})]})]})})]})]})}function I3({sites:t,onLogout:e,onHome:n,onSitesChange:i}){const[r,s]=re.useState({name:"",category:"Case Study",summary:"",href:"",tech:"",tone:"lime"}),[o,a]=re.useState(null),[l,c]=re.useState(""),u=t.length;function d(){s({name:"",category:"Case Study",summary:"",href:"",tech:"",tone:"lime"}),a(null)}function h(x){a(x.id),s({name:x.name,category:x.category,summary:x.summary,href:x.href,tech:x.tech.join(", "),tone:x.tone}),c(`Editing ${x.name}`)}function p(x){const m=t.filter(f=>f.id!==x);i(m),o===x&&d(),c("Website removed from homepage deck")}function v(){const x=r.name.trim(),m=NM(r.href);if(!x||!m||!r.summary.trim()){c("Add a title, link, and summary before saving.");return}const f={id:o??`site-${Date.now()}`,name:x,category:r.category.trim()||"Case Study",summary:r.summary.trim(),href:m,tech:R3(r.tech).slice(0,4),tone:r.tone,align:(t.length+1)%3===0?"center":t.length%2===0?"left":"right"},g=o?t.map(_=>_.id===o?f:_):[f,...t];i(g),d(),c(`${f.name} saved to the homepage`)}return T.jsxs("div",{className:"min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background",children:[T.jsx(tm,{}),T.jsx(nm,{}),T.jsx(pm,{}),T.jsxs("main",{className:"relative z-10 mx-auto min-h-screen w-full max-w-[1500px] px-6 py-8 md:px-12",children:[T.jsxs("div",{className:"flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between",children:[T.jsxs("div",{children:[T.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.22em] text-accent",children:"Admin dashboard"}),T.jsx("h1",{className:"mt-2 font-serif text-4xl md:text-5xl",children:"Website links manager"}),T.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"Add sites here and they will appear on the homepage as floating embedded views."})]}),T.jsxs("div",{className:"flex flex-wrap gap-3",children:[T.jsxs("button",{type:"button",onClick:n,className:"hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent",children:[T.jsx(XS,{size:13})," Home"]}),T.jsxs("button",{type:"button",onClick:e,className:"hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent",children:[T.jsx(eb,{size:13})," Logout"]})]})]}),T.jsxs("section",{className:"mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12",children:[T.jsxs(Zn.div,{className:"hero-card lg:col-span-5 rounded-3xl border border-white/10 p-6 md:p-8",initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.7},children:[T.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[T.jsxs("div",{children:[T.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-muted",children:"Create or edit"}),T.jsx("h2",{className:"mt-2 text-2xl font-medium text-zinc-100",children:"Website entry"})]}),T.jsx(Kv,{className:"text-accent"})]}),T.jsxs("div",{className:"space-y-4",children:[T.jsxs("label",{className:"space-y-2",children:[T.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:"Project name"}),T.jsx("input",{className:"w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent",value:r.name,onChange:x=>s(m=>({...m,name:x.target.value})),placeholder:"My newest case study"})]}),T.jsxs("label",{className:"space-y-2",children:[T.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:"Website link"}),T.jsx("input",{className:"w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent",value:r.href,onChange:x=>s(m=>({...m,href:x.target.value})),placeholder:"https://yourwebsite.com"})]}),T.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[T.jsxs("label",{className:"space-y-2",children:[T.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:"Category"}),T.jsx("input",{className:"w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent",value:r.category,onChange:x=>s(m=>({...m,category:x.target.value})),placeholder:"Case Study"})]}),T.jsxs("label",{className:"space-y-2",children:[T.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:"Accent"}),T.jsx("select",{className:"w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors focus:border-accent",value:r.tone,onChange:x=>s(m=>({...m,tone:x.target.value})),children:LM.map(x=>T.jsx("option",{value:x,children:x},x))})]})]}),T.jsxs("label",{className:"space-y-2",children:[T.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:"Summary"}),T.jsx("textarea",{className:"min-h-[120px] w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent",value:r.summary,onChange:x=>s(m=>({...m,summary:x.target.value})),placeholder:"Short description that appears on the homepage card"})]}),T.jsxs("label",{className:"space-y-2",children:[T.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:"Tags"}),T.jsx("input",{className:"w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent",value:r.tech,onChange:x=>s(m=>({...m,tech:x.target.value})),placeholder:"UX, Framer, Product"})]})]}),l?T.jsx("div",{className:"mt-5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300",children:l}):null,T.jsxs("div",{className:"mt-6 flex flex-wrap gap-3",children:[T.jsxs("button",{type:"button",onClick:v,className:"hover-target inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-black transition-transform hover:-translate-y-0.5",children:[T.jsx(Kv,{size:13})," Save to homepage"]}),T.jsx("button",{type:"button",onClick:d,className:"hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent",children:"Reset form"})]})]}),T.jsxs("div",{className:"lg:col-span-7",children:[T.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[T.jsxs("p",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500",children:[u," saved websites"]}),T.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500",children:"Homepage renders live previews"})]}),T.jsx("div",{className:"space-y-5",children:t.map(x=>T.jsxs("article",{className:"rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-6",children:[T.jsxs("div",{className:"flex flex-col gap-4 md:flex-row md:items-start md:justify-between",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[T.jsx("h3",{className:"text-2xl font-medium text-zinc-100",children:x.name}),T.jsx("span",{className:"rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent",children:x.category})]}),T.jsx("p",{className:"mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300",children:x.summary}),T.jsxs("a",{href:x.href,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-flex items-center gap-2 text-sm text-zinc-200 transition-colors hover:text-accent",children:[T.jsx(KR,{size:13})," ",x.href]}),T.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:(x.tech??[]).map(m=>T.jsx("span",{className:"rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:m},m))})]}),T.jsxs("div",{className:"flex flex-wrap gap-2",children:[T.jsx("button",{type:"button",onClick:()=>h(x),className:"hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent",children:"Edit"}),T.jsxs("button",{type:"button",onClick:()=>p(x.id),className:"hover-target inline-flex items-center gap-2 rounded-full border border-red-400/30 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-red-200 transition-colors hover:border-red-300 hover:text-red-100",children:[T.jsx(db,{size:13})," Delete"]})]})]}),T.jsxs("div",{className:"mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/30",children:[T.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500",children:[T.jsx($R,{size:13,className:"text-accent"})," Homepage preview",T.jsxs("button",{type:"button",className:"ml-auto inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-accent",onClick:()=>window.open(x.href,"_blank","noopener,noreferrer"),children:["Open ",T.jsx($r,{size:12})]})]}),T.jsx("iframe",{title:`${x.name} preview`,src:x.href,className:"h-[280px] w-full border-0 bg-black",loading:"lazy"})]})]},x.id))})]})]})]})]})}function U3(){const[t,e]=re.useState(()=>window.location.pathname),[n,i]=re.useState(b3),[r,s]=re.useState(()=>D3()),[o,a]=re.useState(null);re.useEffect(()=>{const p=()=>{e(window.location.pathname)};return window.addEventListener("popstate",p),()=>window.removeEventListener("popstate",p)},[]),re.useEffect(()=>{P3(n)},[n]);const l=t==="/login2admin",c=()=>{Ah("/"),e("/")},u=()=>{Ah("/login2admin"),e("/login2admin")},d=(p,v)=>{if(p.trim()===RM&&v===bM){tx(!0),s(!0),a(null),u();return}a("Incorrect username or password.")},h=()=>{tx(!1),s(!1),a(null),c()};return l&&r?T.jsx(I3,{sites:n,onLogout:h,onHome:c,onSitesChange:i}):l?T.jsx(N3,{onLogin:d,onBackHome:c,error:o}):T.jsx(L3,{sites:n,onAdminOpen:u})}const nx=document.getElementById("root");nx&&my(nx).render(T.jsx(U3,{}));
