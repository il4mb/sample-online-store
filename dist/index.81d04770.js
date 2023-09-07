let e,t,n,r,l,o,i,a,s,u,c;var f,p,d,h,g,m,_,y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function b(e,t){let n=/* @__PURE__ */Object.create(null),r=e.split(",");for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const E={},O=[],w=()=>{},x=()=>!1,C=/^on[^a-z]/,S=e=>C.test(e),k=e=>e.startsWith("onUpdate:"),P=Object.assign,T=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,A=(e,t)=>R.call(e,t),L=Array.isArray,V=e=>"[object Map]"===M(e),I=e=>"[object Set]"===M(e),$=e=>"function"==typeof e,j=e=>"string"==typeof e,U=e=>"symbol"==typeof e,F=e=>null!==e&&"object"==typeof e,D=e=>F(e)&&$(e.then)&&$(e.catch),N=Object.prototype.toString,M=e=>N.call(e),B=e=>M(e).slice(8,-1),W=e=>"[object Object]"===M(e),H=e=>j(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,q=/* @__PURE__ */b(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=e=>{let t=/* @__PURE__ */Object.create(null);return n=>{let r=t[n];return r||(t[n]=e(n))}},z=/-(\w)/g,K=G(e=>e.replace(z,(e,t)=>t?t.toUpperCase():"")),Q=/\B([A-Z])/g,Y=G(e=>e.replace(Q,"-$1").toLowerCase()),X=G(e=>e.charAt(0).toUpperCase()+e.slice(1)),J=G(e=>e?`on${X(e)}`:""),Z=(e,t)=>!Object.is(e,t),ee=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},et=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},en=e=>{let t=parseFloat(e);return isNaN(t)?e:t},er=e=>{let t=j(e)?Number(e):NaN;return isNaN(t)?e:t},el=()=>e||(e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==y?y:{});function eo(e){if(L(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],l=j(r)?function(e){let t={};return e.replace(es,"").split(ei).forEach(e=>{if(e){let n=e.split(ea);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}(r):eo(r);if(l)for(let e in l)t[e]=l[e]}return t}if(j(e)||F(e))return e}const ei=/;(?![^(]*\))/g,ea=/:([^]+)/,es=/\/\*[^]*?\*\//g;function eu(e){let t="";if(j(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){let r=eu(e[n]);r&&(t+=r+" ")}else if(F(e))for(let n in e)e[n]&&(t+=n+" ");return t.trim()}const ec=/* @__PURE__ */b("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");class ef{constructor(e=!1){this.detached=e,/**
     * @internal
     */this._active=!0,/**
     * @internal
     */this.effects=[],/**
     * @internal
     */this.cleanups=[],this.parent=t,!e&&t&&(this.index=(t.scopes||(t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){let n=t;try{return t=this,e()}finally{t=n}}}/**
   * This should only be called on non-detached scopes
   * @internal
   */on(){t=this}/**
   * This should only be called on non-detached scopes
   * @internal
   */off(){t=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}const ep=e=>{let t=new Set(e);return t.w=0,t.n=0,t},ed=e=>(e.w&ey)>0,eh=e=>(e.n&ey)>0,ev=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ey},eg=e=>{let{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){let l=t[r];ed(l)&&!eh(l)?l.delete(e):t[n++]=l,l.w&=~ey,l.n&=~ey}t.length=n}},em=/* @__PURE__ */new WeakMap;let e_=0,ey=1;const eb=Symbol(""),eE=Symbol("");class eO{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,function(e,n=t){n&&n.active&&n.effects.push(e)}(this,r)}run(){if(!this.active)return this.fn();let e=n,t=ex;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=n,n=this,ex=!0,ey=1<<++e_,e_<=30?ev(this):ew(this),this.fn()}finally{e_<=30&&eg(this),ey=1<<--e_,n=this.parent,ex=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){n===this?this.deferStop=!0:this.active&&(ew(this),this.onStop&&this.onStop(),this.active=!1)}}function ew(e){let{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ex=!0;const eC=[];function eS(){eC.push(ex),ex=!1}function ek(){let e=eC.pop();ex=void 0===e||e}function eP(e,t,r){if(ex&&n){let t=em.get(e);t||em.set(e,t=/* @__PURE__ */new Map);let n=t.get(r);n||t.set(r,n=ep()),eT(n,void 0)}}function eT(e,t){let r=!1;e_<=30?eh(e)||(e.n|=ey,r=!ed(e)):r=!e.has(n),r&&(e.add(n),n.deps.push(e))}function eR(e,t,n,r,l,o){let i=em.get(e);if(!i)return;let a=[];if("clear"===t)a=[...i.values()];else if("length"===n&&L(e)){let e=Number(r);i.forEach((t,n)=>{("length"===n||n>=e)&&a.push(t)})}else switch(void 0!==n&&a.push(i.get(n)),t){case"add":L(e)?H(n)&&a.push(i.get("length")):(a.push(i.get(eb)),V(e)&&a.push(i.get(eE)));break;case"delete":!L(e)&&(a.push(i.get(eb)),V(e)&&a.push(i.get(eE)));break;case"set":V(e)&&a.push(i.get(eb))}if(1===a.length)a[0]&&eA(a[0]);else{let e=[];for(let t of a)t&&e.push(...t);eA(ep(e))}}function eA(e,t){let n=L(e)?e:[...e];for(let e of n)e.computed&&eL(e,t);for(let e of n)e.computed||eL(e,t)}function eL(e,t){(e!==n||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const eV=b("__proto__,__v_isRef,__isVue"),eI=new Set(/* @__PURE__ */Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(U)),e$=/* @__PURE__ */eN(),ej=/* @__PURE__ */eN(!1,!0),eU=/* @__PURE__ */eN(!0),eF=/* @__PURE__ */function(){let e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){let n=th(this);for(let e=0,t=this.length;e<t;e++)eP(n,"get",e+"");let r=n[t](...e);return -1===r||!1===r?n[t](...e.map(th)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){eS();let n=th(this)[t].apply(this,e);return ek(),n}}),e}();function eD(e){let t=th(this);return eP(t,"has",e),t.hasOwnProperty(e)}function eN(e=!1,t=!1){return function(n,r,l){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&l===(e?t?ti:to:t?tl:tr).get(n))return n;let o=L(n);if(!e){if(o&&A(eF,r))return Reflect.get(eF,r,l);if("hasOwnProperty"===r)return eD}let i=Reflect.get(n,r,l);return(U(r)?eI.has(r):eV(r))?i:(e||eP(n,"get",r),t)?i:tb(i)?o&&H(r)?i:i.value:F(i)?e?tu(i):ta(i):i}}const eM=/* @__PURE__ */eW(),eB=/* @__PURE__ */eW(!0);function eW(e=!1){return function(t,n,r,l){let o=t[n];if(tp(o)&&tb(o)&&!tb(r))return!1;if(!e&&(td(r)||tp(r)||(o=th(o),r=th(r)),!L(t)&&tb(o)&&!tb(r)))return o.value=r,!0;let i=L(t)&&H(n)?Number(n)<t.length:A(t,n),a=Reflect.set(t,n,r,l);return t===th(l)&&(i?Z(r,o)&&eR(t,"set",n,r,o):eR(t,"add",n,r)),a}}const eH={get:e$,set:eM,deleteProperty:function(e,t){let n=A(e,t),r=e[t],l=Reflect.deleteProperty(e,t);return l&&n&&eR(e,"delete",t,void 0,r),l},has:function(e,t){let n=Reflect.has(e,t);return U(t)&&eI.has(t)||eP(e,"has",t),n},ownKeys:function(e){return eP(e,"iterate",L(e)?"length":eb),Reflect.ownKeys(e)}},eq={get:eU,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},eG=P({},eH,{get:ej,set:eB}),ez=e=>e,eK=e=>Reflect.getPrototypeOf(e);function eQ(e,t,n=!1,r=!1){e=e.__v_raw;let l=th(e),o=th(t);n||(t!==o&&eP(l,"get",t),eP(l,"get",o));let{has:i}=eK(l),a=r?ez:n?tm:tg;return i.call(l,t)?a(e.get(t)):i.call(l,o)?a(e.get(o)):void(e!==l&&e.get(t))}function eY(e,t=!1){let n=this.__v_raw,r=th(n),l=th(e);return t||(e!==l&&eP(r,"has",e),eP(r,"has",l)),e===l?n.has(e):n.has(e)||n.has(l)}function eX(e,t=!1){return e=e.__v_raw,t||eP(th(e),"iterate",eb),Reflect.get(e,"size",e)}function eJ(e){e=th(e);let t=th(this),n=eK(t),r=n.has.call(t,e);return r||(t.add(e),eR(t,"add",e,e)),this}function eZ(e,t){t=th(t);let n=th(this),{has:r,get:l}=eK(n),o=r.call(n,e);o||(e=th(e),o=r.call(n,e));let i=l.call(n,e);return n.set(e,t),o?Z(t,i)&&eR(n,"set",e,t,i):eR(n,"add",e,t),this}function e0(e){let t=th(this),{has:n,get:r}=eK(t),l=n.call(t,e);l||(e=th(e),l=n.call(t,e));let o=r?r.call(t,e):void 0,i=t.delete(e);return l&&eR(t,"delete",e,void 0,o),i}function e1(){let e=th(this),t=0!==e.size,n=e.clear();return t&&eR(e,"clear",void 0,void 0,void 0),n}function e2(e,t){return function(n,r){let l=this,o=l.__v_raw,i=th(o),a=t?ez:e?tm:tg;return e||eP(i,"iterate",eb),o.forEach((e,t)=>n.call(r,a(e),a(t),l))}}function e6(e,t,n){return function(...r){let l=this.__v_raw,o=th(l),i=V(o),a="entries"===e||e===Symbol.iterator&&i,s="keys"===e&&i,u=l[e](...r),c=n?ez:t?tm:tg;return t||eP(o,"iterate",s?eE:eb),{// iterator protocol
next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:a?[c(e[0]),c(e[1])]:c(e),done:t}},// iterable protocol
[Symbol.iterator](){return this}}}}function e8(e){return function(...t){return"delete"!==e&&this}}const[e3,e4,e5,e7]=/* @__PURE__ */function(){let e={get(e){return eQ(this,e)},get size(){return eX(this)},has:eY,add:eJ,set:eZ,delete:e0,clear:e1,forEach:e2(!1,!1)},t={get(e){return eQ(this,e,!1,!0)},get size(){return eX(this)},has:eY,add:eJ,set:eZ,delete:e0,clear:e1,forEach:e2(!1,!0)},n={get(e){return eQ(this,e,!0)},get size(){return eX(this,!0)},has(e){return eY.call(this,e,!0)},add:e8("add"),set:e8("set"),delete:e8("delete"),clear:e8("clear"),forEach:e2(!0,!1)},r={get(e){return eQ(this,e,!0,!0)},get size(){return eX(this,!0)},has(e){return eY.call(this,e,!0)},add:e8("add"),set:e8("set"),delete:e8("delete"),clear:e8("clear"),forEach:e2(!0,!0)},l=["keys","values","entries",Symbol.iterator];return l.forEach(l=>{e[l]=e6(l,!1,!1),n[l]=e6(l,!0,!1),t[l]=e6(l,!1,!0),r[l]=e6(l,!0,!0)}),[e,n,t,r]}();function e9(e,t){let n=t?e?e7:e5:e?e4:e3;return(t,r,l)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(A(n,r)&&r in t?n:t,r,l)}const te={get:/* @__PURE__ */e9(!1,!1)},tt={get:/* @__PURE__ */e9(!1,!0)},tn={get:/* @__PURE__ */e9(!0,!1)},tr=/* @__PURE__ */new WeakMap,tl=/* @__PURE__ */new WeakMap,to=/* @__PURE__ */new WeakMap,ti=/* @__PURE__ */new WeakMap;function ta(e){return tp(e)?e:tc(e,!1,eH,te,tr)}function ts(e){return tc(e,!1,eG,tt,tl)}function tu(e){return tc(e,!0,eq,tn,to)}function tc(e,t,n,r,l){if(!F(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let o=l.get(e);if(o)return o;let i=e.__v_skip||!Object.isExtensible(e)?0/* INVALID */:function(e){switch(e){case"Object":case"Array":return 1/* COMMON */;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2/* COLLECTION */;default:return 0/* INVALID */}}(B(e));if(0/* INVALID */===i)return e;let a=new Proxy(e,2/* COLLECTION */===i?r:n);return l.set(e,a),a}function tf(e){return tp(e)?tf(e.__v_raw):!!(e&&e.__v_isReactive)}function tp(e){return!!(e&&e.__v_isReadonly)}function td(e){return!!(e&&e.__v_isShallow)}function th(e){let t=e&&e.__v_raw;return t?th(t):e}function tv(e){return et(e,"__v_skip",!0),e}const tg=e=>F(e)?ta(e):e,tm=e=>F(e)?tu(e):e;function t_(e){ex&&n&&eT((e=th(e)).dep||(e.dep=ep()))}function ty(e,t){e=th(e);let n=e.dep;n&&eA(n)}function tb(e){return!!(e&&!0===e.__v_isRef)}function tE(e,t){return tb(e)?e:new tO(e,t)}class tO{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:th(e),this._value=t?e:tg(e)}get value(){return t_(this),this._value}set value(e){let t=this.__v_isShallow||td(e)||tp(e);Z(e=t?e:th(e),this._rawValue)&&(this._rawValue=e,this._value=t?e:tg(e),ty(this,e))}}function tw(e){return tb(e)?e.value:e}const tx={get:(e,t,n)=>tw(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let l=e[t];return tb(l)&&!tb(n)?(l.value=n,!0):Reflect.set(e,t,n,r)}};function tC(e){return tf(e)?e:new Proxy(e,tx)}class tS{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new eO(e,()=>{this._dirty||(this._dirty=!0,ty(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){let e=th(this);return t_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function tk(e,t,n=!1){let r,l;let o=$(e);o?(r=e,l=w):(r=e.get,l=e.set);let i=new tS(r,l,o||!l,n);return i}function tP(e,t,n,r){let l;try{l=r?e(...r):e()}catch(e){tR(e,t,n)}return l}function tT(e,t,n,r){if($(e)){let l=tP(e,t,n,r);return l&&D(l)&&l.catch(e=>{tR(e,t,n)}),l}let l=[];for(let o=0;o<e.length;o++)l.push(tT(e[o],t,n,r));return l}function tR(e,t,n,r=!0){if(t&&t.vnode,t){let r=t.parent,l=t.proxy;for(;r;){let t=r.ec;if(t){for(let r=0;r<t.length;r++)if(!1===t[r](e,l,n))return}r=r.parent}let o=t.appContext.config.errorHandler;if(o){tP(o,null,10,[e,l,n]);return}}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let tA=!1,tL=!1;const tV=[];let tI=0;const t$=[];let tj=null,tU=0;const tF=/* @__PURE__ */Promise.resolve();let tD=null;function tN(e){let t=tD||tF;return e?t.then(this?e.bind(this):e):t}function tM(e){tV.length&&tV.includes(e,tA&&e.allowRecurse?tI+1:tI)||(null==e.id?tV.push(e):tV.splice(function(e){let t=tI+1,n=tV.length;for(;t<n;){let r=t+n>>>1,l=tq(tV[r]);l<e?t=r+1:n=r}return t}(e.id),0,e),tB())}function tB(){tA||tL||(tL=!0,tD=tF.then(function e(t){tL=!1,tA=!0,tV.sort(tG);try{for(tI=0;tI<tV.length;tI++){let e=tV[tI];e&&!1!==e.active&&tP(e,null,14)}}finally{tI=0,tV.length=0,tH(t),tA=!1,tD=null,(tV.length||t$.length)&&e(t)}}))}function tW(e,t=tA?tI+1:0){for(;t<tV.length;t++){let e=tV[t];e&&e.pre&&(tV.splice(t,1),t--,e())}}function tH(e){if(t$.length){let e=[...new Set(t$)];if(t$.length=0,tj){tj.push(...e);return}for((tj=e).sort((e,t)=>tq(e)-tq(t)),tU=0;tU<tj.length;tU++)tj[tU]();tj=null,tU=0}}const tq=e=>null==e.id?1/0:e.id,tG=(e,t)=>{let n=tq(e)-tq(t);if(0===n){if(e.pre&&!t.pre)return -1;if(t.pre&&!e.pre)return 1}return n};let tz=[],tK=!1;function tQ(e,...t){r?r.emit(e,...t):tK||tz.push({event:e,args:t})}const tY=/* @__PURE__ */t0("component:added"/* COMPONENT_ADDED */),tX=/* @__PURE__ */t0("component:updated"/* COMPONENT_UPDATED */),tJ=/* @__PURE__ */t0("component:removed"/* COMPONENT_REMOVED */),tZ=e=>{r&&"function"==typeof r.cleanupBuffer&&// remove the component if it wasn't buffered
!r.cleanupBuffer(e)&&tJ(e)};function t0(e){return t=>{tQ(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}function t1(e,t,...n){let r;if(e.isUnmounted)return;let l=e.vnode.props||E,o=n,i=t.startsWith("update:"),a=i&&t.slice(7);if(a&&a in l){let e=`${"modelValue"===a?"model":a}Modifiers`,{number:t,trim:r}=l[e]||E;r&&(o=n.map(e=>j(e)?e.trim():e)),t&&(o=n.map(en))}if(__VUE_PROD_DEVTOOLS__){var s;s=o,tQ("component:emit"/* COMPONENT_EMIT */,e.appContext.app,e,t,s)}let u=l[r=J(t)]||// also try camelCase event handler (#2249)
l[r=J(K(t))];!u&&i&&(u=l[r=J(Y(t))]),u&&tT(u,e,6,o);let c=l[r+"Once"];if(c){if(e.emitted){if(e.emitted[r])return}else e.emitted={};e.emitted[r]=!0,tT(c,e,6,o)}}function t2(e,t){return!!(e&&S(t))&&(A(e,(t=t.slice(2).replace(/Once$/,""))[0].toLowerCase()+t.slice(1))||A(e,Y(t))||A(e,t))}let t6=null,t8=null;function t3(e){let t=t6;return t6=e,t8=e&&e.type.__scopeId||null,t}function t4(e){let t,n;let{type:r,vnode:l,proxy:o,withProxy:i,props:a,propsOptions:[s],slots:u,attrs:c,emit:f,render:p,renderCache:d,data:h,setupState:g,ctx:m,inheritAttrs:_}=e,y=t3(e);try{if(4&l.shapeFlag){let e=i||o;t=rb(p.call(e,e,d,a,g,h,m)),n=c}else t=rb(r.length>1?r(a,{attrs:c,slots:u,emit:f}):r(a,null)),n=r.props?c:t5(c)}catch(n){rf.length=0,tR(n,e,1),t=r_(ru)}let b=t;if(n&&!1!==_){let e=Object.keys(n),{shapeFlag:t}=b;e.length&&7&t&&(s&&e.some(k)&&(n=t7(n,s)),b=ry(b,n))}return l.dirs&&((b=ry(b)).dirs=b.dirs?b.dirs.concat(l.dirs):l.dirs),l.transition&&(b.transition=l.transition),t=b,t3(y),t}const t5=e=>{let t;for(let n in e)("class"===n||"style"===n||S(n))&&((t||(t={}))[n]=e[n]);return t},t7=(e,t)=>{let n={};for(let r in e)k(r)&&r.slice(9) in t||(n[r]=e[r]);return n};function t9(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let l=0;l<r.length;l++){let o=r[l];if(t[o]!==e[o]&&!t2(n,o))return!0}return!1}const ne=e=>e.__isSuspense,nt={};function nn(e,n,{immediate:r,deep:l,flush:o,onTrack:i,onTrigger:a}=E){var s;let u,c,f,p;let d=t===(null==(s=rS)?void 0:s.scope)?rS:null,h=!1,g=!1;if(tb(e)?(u=()=>e.value,h=td(e)):tf(e)?(u=()=>e,l=!0):L(e)?(g=!0,h=e.some(e=>tf(e)||td(e)),u=()=>e.map(e=>tb(e)?e.value:tf(e)?no(e):$(e)?tP(e,d,2):void 0)):u=$(e)?n?()=>tP(e,d,2):()=>{if(!d||!d.isUnmounted)return c&&c(),tT(e,d,3,[m])}:w,n&&l){let e=u;u=()=>no(e())}let m=e=>{c=b.onStop=()=>{tP(e,d,4)}};if(rL){if(m=w,n?r&&tT(n,d,3,[u(),g?[]:void 0,m]):u(),"sync"!==o)return w;{let e=rD();f=e.__watcherHandles||(e.__watcherHandles=[])}}let _=g?Array(e.length).fill(nt):nt,y=()=>{if(b.active){if(n){let e=b.run();(l||h||(g?e.some((e,t)=>Z(e,_[t])):Z(e,_)))&&(c&&c(),tT(n,d,3,[e,// pass undefined as the old value when it's changed for the first time
_===nt?void 0:g&&_[0]===nt?[]:_,m]),_=e)}else b.run()}};y.allowRecurse=!!n,"sync"===o?p=y:"post"===o?p=()=>rl(y,d&&d.suspense):(y.pre=!0,d&&(y.id=d.uid),p=()=>tM(y));let b=new eO(u,p);n?r?y():_=b.run():"post"===o?rl(b.run.bind(b),d&&d.suspense):b.run();let O=()=>{b.stop(),d&&d.scope&&T(d.scope.effects,b)};return f&&f.push(O),O}function nr(e,t,n){let r;let l=this.proxy,o=j(e)?e.includes(".")?nl(l,e):()=>l[e]:e.bind(l,l);$(t)?r=t:(r=t.handler,n=t);let i=rS;rT(this);let a=nn(o,r.bind(l),n);return i?rT(i):rR(),a}function nl(e,t){let n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function no(e,t){if(!F(e)||e.__v_skip||(t=t||/* @__PURE__ */new Set).has(e))return e;if(t.add(e),tb(e))no(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)no(e[n],t);else if(I(e)||V(e))e.forEach(e=>{no(e,t)});else if(W(e))for(let n in e)no(e[n],t);return e}function ni(e,t,n,r){let l=e.dirs,o=t&&t.dirs;for(let i=0;i<l.length;i++){let a=l[i];o&&(a.oldValue=o[i].value);let s=a.dir[r];s&&(eS(),tT(s,n,8,[e.el,a,e,t]),ek())}}function na(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:/* @__PURE__ */new Map};return nS(()=>{e.isMounted=!0}),nT(()=>{e.isUnmounting=!0}),e}const ns=[Function,Array],nu={mode:String,appear:Boolean,persisted:Boolean,// enter
onBeforeEnter:ns,onEnter:ns,onAfterEnter:ns,onEnterCancelled:ns,// leave
onBeforeLeave:ns,onLeave:ns,onAfterLeave:ns,onLeaveCancelled:ns,// appear
onBeforeAppear:ns,onAppear:ns,onAfterAppear:ns,onAppearCancelled:ns},nc={name:"BaseTransition",props:nu,setup(e,{slots:t}){let n;let r=rk(),l=na();return()=>{let o=t.default&&ng(t.default(),!0);if(!o||!o.length)return;let i=o[0];if(o.length>1){for(let e of o)if(e.type!==ru){i=e;break}}let a=th(e),{mode:s}=a;if(l.isLeaving)return nd(i);let u=nh(i);if(!u)return nd(i);let c=np(u,a,l,r);nv(u,c);let f=r.subTree,p=f&&nh(f),d=!1,{getTransitionKey:h}=u.type;if(h){let e=h();void 0===n?n=e:e!==n&&(n=e,d=!0)}if(p&&p.type!==ru&&(!rh(u,p)||d)){let e=np(p,a,l,r);if(nv(p,e),"out-in"===s)return l.isLeaving=!0,e.afterLeave=()=>{l.isLeaving=!1,!1!==r.update.active&&r.update()},nd(i);"in-out"===s&&u.type!==ru&&(e.delayLeave=(e,t,n)=>{let r=nf(l,p);r[String(p.key)]=p,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=n})}return i}}};function nf(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=/* @__PURE__ */Object.create(null),n.set(t.type,r)),r}function np(e,t,n,r){let{appear:l,mode:o,persisted:i=!1,onBeforeEnter:a,onEnter:s,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:f,onLeave:p,onAfterLeave:d,onLeaveCancelled:h,onBeforeAppear:g,onAppear:m,onAfterAppear:_,onAppearCancelled:y}=t,b=String(e.key),E=nf(n,e),O=(e,t)=>{e&&tT(e,r,9,t)},w=(e,t)=>{let n=t[1];O(e,t),L(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},x={mode:o,persisted:i,beforeEnter(t){let r=a;if(!n.isMounted){if(!l)return;r=g||a}t._leaveCb&&t._leaveCb(!0);let o=E[b];o&&rh(e,o)&&o.el._leaveCb&&o.el._leaveCb(),O(r,[t])},enter(e){let t=s,r=u,o=c;if(!n.isMounted){if(!l)return;t=m||s,r=_||u,o=y||c}let i=!1,a=e._enterCb=t=>{i||(i=!0,t?O(o,[e]):O(r,[e]),x.delayedLeave&&x.delayedLeave(),e._enterCb=void 0)};t?w(t,[e,a]):a()},leave(t,r){let l=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();O(f,[t]);let o=!1,i=t._leaveCb=n=>{o||(o=!0,r(),n?O(h,[t]):O(d,[t]),t._leaveCb=void 0,E[l]!==e||delete E[l])};E[l]=e,p?w(p,[t,i]):i()},clone:e=>np(e,t,n,r)};return x}function nd(e){if(ny(e))return(e=ry(e)).children=null,e}function nh(e){return ny(e)?e.children?e.children[0]:void 0:e}function nv(e,t){6&e.shapeFlag&&e.component?nv(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ng(e,t=!1,n){let r=[],l=0;for(let o=0;o<e.length;o++){let i=e[o],a=null==n?i.key:String(n)+String(null!=i.key?i.key:o);i.type===ra?(128&i.patchFlag&&l++,r=r.concat(ng(i.children,t,a))):(t||i.type!==ru)&&r.push(null!=a?ry(i,{key:a}):i)}if(l>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function nm(e,t){return $(e)?P({name:e.name},t,{setup:e}):e}const n_=e=>!!e.type.__asyncLoader,ny=e=>e.type.__isKeepAlive;function nb(e,t){nO(e,"a",t)}function nE(e,t){nO(e,"da",t)}function nO(e,t,n=rS){let r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(nw(t,r,n),n){let e=n.parent;for(;e&&e.parent;)ny(e.parent.vnode)&&function(e,t,n,r){let l=nw(t,e,r,!0);nR(()=>{T(r[t],l)},n)}(r,t,n,e),e=e.parent}}function nw(e,t,n=rS,r=!1){if(n){let l=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;eS(),rT(n);let l=tT(t,n,e,r);return rR(),ek(),l});return r?l.unshift(o):l.push(o),o}}const nx=e=>(t,n=rS)=>(!rL||"sp"===e)&&nw(e,(...e)=>t(...e),n),nC=nx("bm"),nS=nx("m"),nk=nx("bu"),nP=nx("u"),nT=nx("bum"),nR=nx("um"),nA=nx("sp"),nL=nx("rtg"),nV=nx("rtc");function nI(e,t=rS){nw("ec",e,t)}const n$=Symbol.for("v-ndc"),nj=e=>e?rA(e)?r$(e)||e.proxy:nj(e.parent):null,nU=P(/* @__PURE__ */Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>nj(e.parent),$root:e=>nj(e.root),$emit:e=>e.emit,$options:e=>__VUE_OPTIONS_API__?nW(e):e.type,$forceUpdate:e=>e.f||(e.f=()=>tM(e.update)),$nextTick:e=>e.n||(e.n=tN.bind(e.proxy)),$watch:e=>__VUE_OPTIONS_API__?nr.bind(e):w}),nF=(e,t)=>e!==E&&!e.__isScriptSetup&&A(e,t),nD={get({_:e},t){let n,r,l;let{ctx:o,setupState:i,data:a,props:s,accessCache:u,type:c,appContext:f}=e;if("$"!==t[0]){let r=u[t];if(void 0!==r)switch(r){case 1/* SETUP */:return i[t];case 2/* DATA */:return a[t];case 4/* CONTEXT */:return o[t];case 3/* PROPS */:return s[t]}else{if(nF(i,t))return u[t]=1/* SETUP */,i[t];if(a!==E&&A(a,t))return u[t]=2/* DATA */,a[t];if(// props
(n=e.propsOptions[0])&&A(n,t))return u[t]=3/* PROPS */,s[t];if(o!==E&&A(o,t))return u[t]=4/* CONTEXT */,o[t];(!__VUE_OPTIONS_API__||nM)&&(u[t]=0/* OTHER */)}}let p=nU[t];return p?("$attrs"===t&&eP(e,"get",t),p(e)):(r=c.__cssModules)&&(r=r[t])?r:o!==E&&A(o,t)?(u[t]=4/* CONTEXT */,o[t]):A(l=f.config.globalProperties,t)?l[t]:void 0},set({_:e},t,n){let{data:r,setupState:l,ctx:o}=e;return nF(l,t)?(l[t]=n,!0):r!==E&&A(r,t)?(r[t]=n,!0):!A(e.props,t)&&!("$"===t[0]&&t.slice(1) in e)&&(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:l,propsOptions:o}},i){let a;return!!n[i]||e!==E&&A(e,i)||nF(t,i)||(a=o[0])&&A(a,i)||A(r,i)||A(nU,i)||A(l.config.globalProperties,i)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:A(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function nN(e){return L(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}let nM=!0;function nB(e,t,n){tT(L(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function nW(e){let t;let n=e.type,{mixins:r,extends:l}=n,{mixins:o,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,s=i.get(n);return s?t=s:o.length||r||l?(t={},o.length&&o.forEach(e=>nH(t,e,a,!0)),nH(t,n,a)):t=n,F(n)&&i.set(n,t),t}function nH(e,t,n,r=!1){let{mixins:l,extends:o}=t;for(let i in o&&nH(e,o,n,!0),l&&l.forEach(t=>nH(e,t,n,!0)),t)if(r&&"expose"===i);else{let r=nq[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}const nq={data:nG,props:nY,emits:nY,// objects
methods:nQ,computed:nQ,// lifecycle
beforeCreate:nK,created:nK,beforeMount:nK,mounted:nK,beforeUpdate:nK,updated:nK,beforeDestroy:nK,beforeUnmount:nK,destroyed:nK,unmounted:nK,activated:nK,deactivated:nK,errorCaptured:nK,serverPrefetch:nK,// assets
components:nQ,directives:nQ,// watch
watch:function(e,t){if(!e)return t;if(!t)return e;let n=P(/* @__PURE__ */Object.create(null),e);for(let r in t)n[r]=nK(e[r],t[r]);return n},// provide / inject
provide:nG,inject:function(e,t){return nQ(nz(e),nz(t))}};function nG(e,t){return t?e?function(){return P($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function nz(e){if(L(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function nK(e,t){return e?[...new Set([].concat(e,t))]:t}function nQ(e,t){return e?P(/* @__PURE__ */Object.create(null),e,t):t}function nY(e,t){return e?L(e)&&L(t)?[.../* @__PURE__ */new Set([...e,...t])]:P(/* @__PURE__ */Object.create(null),nN(e),nN(null!=t?t:{})):t}function nX(){return{app:null,config:{isNativeTag:x,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:/* @__PURE__ */Object.create(null),optionsCache:/* @__PURE__ */new WeakMap,propsCache:/* @__PURE__ */new WeakMap,emitsCache:/* @__PURE__ */new WeakMap}}let nJ=0,nZ=null;function n0(e,t){if(rS){let n=rS.provides,r=rS.parent&&rS.parent.provides;r===n&&(n=rS.provides=Object.create(r)),n[e]=t}}function n1(e,t,n=!1){let r=rS||t6;if(r||nZ){let l=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:nZ._context.provides;if(l&&e in l)return l[e];if(arguments.length>1)return n&&$(t)?t.call(r&&r.proxy):t}}function n2(e,t,n,r){let l;let[o,i]=e.propsOptions,a=!1;if(t)for(let s in t){let u;if(q(s))continue;let c=t[s];o&&A(o,u=K(s))?i&&i.includes(u)?(l||(l={}))[u]=c:n[u]=c:t2(e.emitsOptions,s)||s in r&&c===r[s]||(r[s]=c,a=!0)}if(i){let t=th(n),r=l||E;for(let l=0;l<i.length;l++){let a=i[l];n[a]=n6(o,t,a,r[a],e,!A(r,a))}}return a}function n6(e,t,n,r,l,o){let i=e[n];if(null!=i){let e=A(i,"default");if(e&&void 0===r){let e=i.default;if(i.type!==Function&&!i.skipFactory&&$(e)){let{propsDefaults:o}=l;n in o?r=o[n]:(rT(l),r=o[n]=e.call(null,t),rR())}else r=e}i[0/* shouldCast */]&&(o&&!e?r=!1:i[1/* shouldCastTrue */]&&(""===r||r===Y(n))&&(r=!0))}return r}function n8(e){let t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function n3(e,t){return L(t)?t.findIndex(t=>n8(t)===n8(e)):$(t)?n8(t)===n8(e)?0:-1:-1}const n4=e=>"_"===e[0]||"$stable"===e,n5=e=>L(e)?e.map(rb):[rb(e)],n7=(e,t,n)=>{if(t._n)return t;let r=function(e,t=t6,n){if(!t||e._n)return e;let r=(...n)=>{let l;r._d&&(rp+=-1);let o=t3(t);try{l=e(...n)}finally{t3(o),r._d&&(rp+=1)}return __VUE_PROD_DEVTOOLS__&&tX(t),l};return r._n=!0,r._c=!0,r._d=!0,r}((...e)=>n5(t(...e)),n);return r._c=!1,r},n9=(e,t,n)=>{let r=e._ctx;for(let n in e){if(n4(n))continue;let l=e[n];if($(l))t[n]=n7(n,l,r);else if(null!=l){let e=n5(l);t[n]=()=>e}}},re=(e,t)=>{let n=n5(t);e.slots.default=()=>n},rt=(e,t)=>{if(32&e.vnode.shapeFlag){let n=t._;n?(e.slots=th(t),et(t,"_",n)):n9(t,e.slots={})}else e.slots={},t&&re(e,t);et(e.slots,rv,1)},rn=(e,t,n)=>{let{vnode:r,slots:l}=e,o=!0,i=E;if(32&r.shapeFlag){let e=t._;e?n&&1===e?o=!1:(P(l,t),n||1!==e||delete l._):(o=!t.$stable,n9(t,l)),i=t}else t&&(re(e,t),i={default:1});if(o)for(let e in l)n4(e)||e in i||delete l[e]};function rr(e,t,n,r,l=!1){if(L(e)){e.forEach((e,o)=>rr(e,t&&(L(t)?t[o]:t),n,r,l));return}if(n_(r)&&!l)return;let o=4&r.shapeFlag?r$(r.component)||r.component.proxy:r.el,i=l?null:o,{i:a,r:s}=e,u=t&&t.r,c=a.refs===E?a.refs={}:a.refs,f=a.setupState;if(null!=u&&u!==s&&(j(u)?(c[u]=null,A(f,u)&&(f[u]=null)):tb(u)&&(u.value=null)),$(s))tP(s,a,12,[i,c]);else{let t=j(s),r=tb(s);if(t||r){let a=()=>{if(e.f){let n=t?A(f,s)?f[s]:c[s]:s.value;l?L(n)&&T(n,o):L(n)?n.includes(o)||n.push(o):t?(c[s]=[o],A(f,s)&&(f[s]=c[s])):(s.value=[o],e.k&&(c[e.k]=s.value))}else t?(c[s]=i,A(f,s)&&(f[s]=i)):r&&(s.value=i,e.k&&(c[e.k]=i))};i?(a.id=-1,rl(a,n)):a()}}}const rl=function(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):(L(e)?t$.push(...e):tj&&tj.includes(e,e.allowRecurse?tU+1:tU)||t$.push(e),tB())};function ro({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}const ri=e=>e.__isTeleport,ra=Symbol.for("v-fgt"),rs=Symbol.for("v-txt"),ru=Symbol.for("v-cmt"),rc=Symbol.for("v-stc"),rf=[];let rp=1;function rd(e){return!!e&&!0===e.__v_isVNode}function rh(e,t){return e.type===t.type&&e.key===t.key}const rv="__vInternal",rg=({key:e})=>null!=e?e:null,rm=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?j(e)||tb(e)||$(e)?{i:t6,r:e,k:t,f:!!n}:e:null),r_=function(e,t=null,n=null,r=0,l=null,o=!1){var i,a,s;if(e&&e!==n$||(e=ru),rd(e)){let r=ry(e,t,!0);return n&&rO(r,n),r.patchFlag|=-2,r}if($(i=e)&&"__vccOpts"in i&&(e=e.__vccOpts),t){let{class:e,style:n}=t=(s=t)?tf(s)||tp(s)||rv in s?P({},s):s:null;e&&!j(e)&&(t.class=eu(e)),F(n)&&((tf(a=n)||tp(a))&&!L(n)&&(n=P({},n)),t.style=eo(n))}let u=j(e)?1:ne(e)?128:ri(e)?64:F(e)?4:$(e)?2:0;return function(e,t=null,n=null,r=0,l=null,o=e===ra?0:1,i=!1,a=!1){let s={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rg(t),ref:t&&rm(t),scopeId:t8,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:t6};return a?(rO(s,n),128&o&&e.normalize(s)):n&&(s.shapeFlag|=j(n)?8:16),s}(e,t,n,r,l,u,o,!0)};function ry(e,t,n=!1){let{props:r,ref:l,patchFlag:o,children:i}=e,a=t?function(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if("class"===e)t.class!==r.class&&(t.class=eu([t.class,r.class]));else if("style"===e)t.style=eo([t.style,r.style]);else if(S(e)){let n=t[e],l=r[e];l&&n!==l&&!(L(n)&&n.includes(l))&&(t[e]=n?[].concat(n,l):l)}else""!==e&&(t[e]=r[e])}return t}(r||{},t):r,s={__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&rg(a),ref:t&&t.ref?// if the vnode itself already has a ref, cloneVNode will need to merge
// the refs so the single vnode can be set on multiple refs
n&&l?L(l)?l.concat(rm(t)):[l,rm(t)]:rm(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,// if the vnode is cloned with extra props, we can no longer assume its
// existing patch flag to be reliable and need to add the FULL_PROPS flag.
// note: preserve flag for fragments since they use the flag for children
// fast paths only.
patchFlag:t&&e.type!==ra?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,// These should technically only be non-null on mounted VNodes. However,
// they *should* be copied for kept-alive vnodes. So we just always copy
// them since them being non-null during a mount doesn't affect the logic as
// they will simply be overwritten.
component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ry(e.ssContent),ssFallback:e.ssFallback&&ry(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return s}function rb(e){return null==e||"boolean"==typeof e?r_(ru):L(e)?r_(ra,null,e.slice()):"object"==typeof e?rE(e):r_(rs,null,String(e))}function rE(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:ry(e)}function rO(e,t){let n=0,{shapeFlag:r}=e;if(null==t)t=null;else if(L(t))n=16;else if("object"==typeof t){if(65&r){let n=t.default;n&&(n._c&&(n._d=!1),rO(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;r||rv in t?3===r&&t6&&(1===t6.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=t6}}else $(t)?(t={default:t,_ctx:t6},n=32):(t=String(t),64&r?(n=16,t=[function(e=" ",t=0){return r_(rs,null,e,t)}(t)]):n=8);e.children=t,e.shapeFlag|=n}function rw(e,t,n,r=null){tT(e,t,7,[n,r])}const rx=nX();let rC=0,rS=null;const rk=()=>rS||t6;let rP="__VUE_INSTANCE_SETTERS__";(o=el()[rP])||(o=el()[rP]=[]),o.push(e=>rS=e),l=e=>{o.length>1?o.forEach(t=>t(e)):o[0](e)};const rT=e=>{l(e),e.scope.on()},rR=()=>{rS&&rS.scope.off(),l(null)};function rA(e){return 4&e.vnode.shapeFlag}let rL=!1;function rV(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:F(t)&&(__VUE_PROD_DEVTOOLS__&&(e.devtoolsRawSetupState=t),e.setupState=tC(t)),rI(e,n)}function rI(e,t,n){let r=e.type;if(!e.render){if(!t&&i&&!r.render){let t=r.template||nW(e).template;if(t){let{isCustomElement:n,compilerOptions:l}=e.appContext.config,{delimiters:o,compilerOptions:a}=r,s=P(P({isCustomElement:n,delimiters:o},l),a);r.render=i(t,s)}}e.render=r.render||w,a&&a(e)}__VUE_OPTIONS_API__&&(rT(e),eS(),function(e){let t=nW(e),n=e.proxy,r=e.ctx;nM=!1,t.beforeCreate&&nB(t.beforeCreate,e,"bc");let{data:l,computed:o,methods:i,watch:a,provide:s,inject:u,created:c,beforeMount:f,mounted:p,beforeUpdate:d,updated:h,activated:g,deactivated:m,beforeDestroy:_,beforeUnmount:y,destroyed:b,unmounted:E,render:O,renderTracked:x,renderTriggered:C,errorCaptured:S,serverPrefetch:k,expose:P,inheritAttrs:T,components:R,directives:A,filters:V}=t;if(u&&function(e,t,n=w){for(let n in L(e)&&(e=nz(e)),e){let r;let l=e[n];tb(r=F(l)?"default"in l?n1(l.from||n,l.default,!0):n1(l.from||n):n1(l))?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:e=>r.value=e}):t[n]=r}}(u,r,null),i)for(let e in i){let t=i[e];$(t)&&(r[e]=t.bind(n))}if(l){let t=l.call(n,n);F(t)&&(e.data=ta(t))}if(nM=!0,o)for(let e in o){let t=o[e],l=$(t)?t.bind(n,n):$(t.get)?t.get.bind(n,n):w,i=!$(t)&&$(t.set)?t.set.bind(n):w,a=rj({get:l,set:i});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(a)for(let e in a)(function e(t,n,r,l){let o=l.includes(".")?nl(r,l):()=>r[l];if(j(t)){let e=n[t];$(e)&&nn(o,e,void 0)}else if($(t))nn(o,t.bind(r),void 0);else if(F(t)){if(L(t))t.forEach(t=>e(t,n,r,l));else{let e=$(t.handler)?t.handler.bind(r):n[t.handler];$(e)&&nn(o,e,t)}}})(a[e],r,n,e);if(s){let e=$(s)?s.call(n):s;Reflect.ownKeys(e).forEach(t=>{n0(t,e[t])})}function I(e,t){L(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(c&&nB(c,e,"c"),I(nC,f),I(nS,p),I(nk,d),I(nP,h),I(nb,g),I(nE,m),I(nI,S),I(nV,x),I(nL,C),I(nT,y),I(nR,E),I(nA,k),L(P)){if(P.length){let t=e.exposed||(e.exposed={});P.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={})}O&&e.render===w&&(e.render=O),null!=T&&(e.inheritAttrs=T),R&&(e.components=R),A&&(e.directives=A)}(e),ek(),rR())}function r$(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(tC(tv(e.exposed)),{get:(t,n)=>n in t?t[n]:n in nU?nU[n](e):void 0,has:(e,t)=>t in e||t in nU}))}const rj=(e,t)=>tk(e,t,rL);function rU(e,t,n){let r=arguments.length;return 2!==r?(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&rd(n)&&(n=[n]),r_(e,t,n)):!F(t)||L(t)?r_(e,null,t):rd(t)?r_(e,null,[t]):r_(e,t)}const rF=Symbol.for("v-scx"),rD=()=>{{let e=n1(rF);return e}},rN="3.3.4",rM="undefined"!=typeof document?document:null,rB=rM&&/* @__PURE__ */rM.createElement("template"),rW=/\s*!important$/;function rH(e,t,n){if(L(n))n.forEach(n=>rH(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{let r=function(e,t){let n=rG[t];if(n)return n;let r=K(t);if("filter"!==r&&r in e)return rG[t]=r;r=X(r);for(let n=0;n<rq.length;n++){let l=rq[n]+r;if(l in e)return rG[t]=l}return t}(e,t);rW.test(n)?e.setProperty(Y(r),n.replace(rW,""),"important"):e[r]=n}}const rq=["Webkit","Moz","ms"],rG={},rz="http://www.w3.org/1999/xlink",rK=/(?:Once|Passive|Capture)$/;let rQ=0;const rY=/* @__PURE__ */Promise.resolve(),rX=()=>rQ||(rY.then(()=>rQ=0),rQ=Date.now()),rJ=/^on[a-z]/;"undefined"!=typeof HTMLElement&&HTMLElement;const rZ="transition",r0="animation",r1=(e,{slots:t})=>rU(nc,r4(e),t);r1.displayName="Transition";const r2={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},r6=r1.props=P({},nu,r2),r8=(e,t=[])=>{L(e)?e.forEach(e=>e(...t)):e&&e(...t)},r3=e=>!!e&&(L(e)?e.some(e=>e.length>1):e.length>1);function r4(e){let t={};for(let n in e)n in r2||(t[n]=e[n]);if(!1===e.css)return t;let{name:n="v",type:r,duration:l,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:s=o,appearActiveClass:u=i,appearToClass:c=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,h=function(e){if(null==e)return null;{if(F(e))return[r5(e.enter),r5(e.leave)];let t=r5(e);return[t,t]}}(l),g=h&&h[0],m=h&&h[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:b,onLeave:E,onLeaveCancelled:O,onBeforeAppear:w=_,onAppear:x=y,onAppearCancelled:C=b}=t,S=(e,t,n)=>{r9(e,t?c:a),r9(e,t?u:i),n&&n()},k=(e,t)=>{e._isLeaving=!1,r9(e,f),r9(e,d),r9(e,p),t&&t()},T=e=>(t,n)=>{let l=e?x:y,i=()=>S(t,e,n);r8(l,[t,i]),le(()=>{r9(t,e?s:o),r7(t,e?c:a),r3(l)||ln(t,r,g,i)})};return P(t,{onBeforeEnter(e){r8(_,[e]),r7(e,o),r7(e,i)},onBeforeAppear(e){r8(w,[e]),r7(e,s),r7(e,u)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>k(e,t);r7(e,f),li(),r7(e,p),le(()=>{e._isLeaving&&(r9(e,f),r7(e,d),r3(E)||ln(e,r,m,n))}),r8(E,[e,n])},onEnterCancelled(e){S(e,!1),r8(b,[e])},onAppearCancelled(e){S(e,!0),r8(C,[e])},onLeaveCancelled(e){k(e),r8(O,[e])}})}function r5(e){let t=er(e);return t}function r7(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=/* @__PURE__ */new Set)).add(t)}function r9(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function le(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let lt=0;function ln(e,t,n,r){let l=e._endId=++lt,o=()=>{l===e._endId&&r()};if(n)return setTimeout(o,n);let{type:i,timeout:a,propCount:s}=lr(e,t);if(!i)return r();let u=i+"end",c=0,f=()=>{e.removeEventListener(u,p),o()},p=t=>{t.target===e&&++c>=s&&f()};setTimeout(()=>{c<s&&f()},a+1),e.addEventListener(u,p)}function lr(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),l=r(`${rZ}Delay`),o=r(`${rZ}Duration`),i=ll(l,o),a=r(`${r0}Delay`),s=r(`${r0}Duration`),u=ll(a,s),c=null,f=0,p=0;t===rZ?i>0&&(c=rZ,f=i,p=o.length):t===r0?u>0&&(c=r0,f=u,p=s.length):p=(c=(f=Math.max(i,u))>0?i>u?rZ:r0:null)?c===rZ?o.length:s.length:0;let d=c===rZ&&/\b(transform|all)(,|$)/.test(r(`${rZ}Property`).toString());return{type:c,timeout:f,propCount:p,hasTransform:d}}function ll(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>lo(t)+lo(e[n])))}function lo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function li(){return document.body.offsetHeight}const la=/* @__PURE__ */new WeakMap,ls=/* @__PURE__ */new WeakMap,lu={name:"TransitionGroup",props:P({},r6,{tag:String,moveClass:String}),setup(e,{slots:t}){let n,r;let l=rk(),o=na();return nP(()=>{if(!n.length)return;let t=e.moveClass||`${e.name||"v"}-move`;if(!function(e,t,n){let r=e.cloneNode();e._vtc&&e._vtc.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display="none";let l=1===t.nodeType?t:t.parentNode;l.appendChild(r);let{hasTransform:o}=lr(r);return l.removeChild(r),o}(n[0].el,l.vnode.el,t))return;n.forEach(lc),n.forEach(lf);let r=n.filter(lp);li(),r.forEach(e=>{let n=e.el,r=n.style;r7(n,t),r.transform=r.webkitTransform=r.transitionDuration="";let l=n._moveCb=e=>{(!e||e.target===n)&&(!e||/transform$/.test(e.propertyName))&&(n.removeEventListener("transitionend",l),n._moveCb=null,r9(n,t))};n.addEventListener("transitionend",l)})}),()=>{let i=th(e),a=r4(i),s=i.tag||ra;n=r,r=t.default?ng(t.default()):[];for(let e=0;e<r.length;e++){let t=r[e];null!=t.key&&nv(t,np(t,a,o,l))}if(n)for(let e=0;e<n.length;e++){let t=n[e];nv(t,np(t,a,o,l)),la.set(t,t.el.getBoundingClientRect())}return r_(s,null,r)}}};function lc(e){let t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function lf(e){ls.set(e,e.el.getBoundingClientRect())}function lp(e){let t=la.get(e),n=ls.get(e),r=t.left-n.left,l=t.top-n.top;if(r||l){let t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${l}px)`,t.transitionDuration="0s",e}}lu.props;const ld=P({patchProp:(e,t,n,r,l=!1,o,i,a,s)=>{var u;"class"===t?function(e,t,n){let r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,r,l):"style"===t?function(e,t,n){let r=e.style,l=j(n);if(n&&!l){if(t&&!j(t))for(let e in t)null==n[e]&&rH(r,e,"");for(let e in n)rH(r,e,n[e])}else{let o=r.display;l?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=o)}}(e,n,r):S(t)?k(t)||function(e,t,n,r,l=null){let o=e._vei||(e._vei={}),i=o[t];if(r&&i)i.value=r;else{let[n,a]=function(e){let t;if(rK.test(e)){let n;for(t={};n=e.match(rK);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}let n=":"===e[2]?e.slice(3):Y(e.slice(2));return[n,t]}(t);if(r){let i=o[t]=function(e,t){let n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();tT(function(e,t){if(!L(t))return t;{let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}}(e,n.value),t,5,[e])};return n.value=e,n.attached=rX(),n}(r,l);!function(e,t,n,r){e.addEventListener(t,n,r)}(e,n,i,a)}else i&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,i,a),o[t]=void 0)}}(e,t,0,r,i):("."===t[0]?(t=t.slice(1),!0):"^"===t[0]?(t=t.slice(1),!1):(u=t,l?"innerHTML"===u||"textContent"===u||u in e&&rJ.test(u)&&$(r):!("spellcheck"===u||"draggable"===u||"translate"===u||"form"===u||"list"===u&&"INPUT"===e.tagName||"type"===u&&"TEXTAREA"===e.tagName||rJ.test(u)&&j(r))&&u in e))?function(e,t,n,r,l,o,i){if("innerHTML"===t||"textContent"===t){r&&i(r,l,o),e[t]=null==n?"":n;return}let a=e.tagName;if("value"===t&&"PROGRESS"!==a&&// custom elements may use _value internally
!a.includes("-")){e._value=n;let r="OPTION"===a?e.getAttribute("value"):e.value,l=null==n?"":n;r!==l&&(e.value=l),null==n&&e.removeAttribute(t);return}let s=!1;if(""===n||null==n){let r=typeof e[t];if("boolean"===r){var u;n=!!(u=n)||""===u}else null==n&&"string"===r?(n="",s=!0):"number"===r&&(n=0,s=!0)}try{e[t]=n}catch(e){}s&&e.removeAttribute(t)}(e,t,r,o,i,a,s):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),function(e,t,n,r,l){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(rz,t.slice(6,t.length)):e.setAttributeNS(rz,t,n);else{let r=ec(t);null==n||r&&!(n||""===n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}(e,t,r,l))}},{insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let l=t?rM.createElementNS("http://www.w3.org/2000/svg",e):rM.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&l.setAttribute("multiple",r.multiple),l},createText:e=>rM.createTextNode(e),createComment:e=>rM.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rM.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},// __UNSAFE__
// Reason: innerHTML.
// Static content here can only come from compiled templates.
// As long as the user only uses trusted templates, this is safe.
insertStaticContent(e,t,n,r,l,o){let i=n?n.previousSibling:t.lastChild;if(l&&(l===o||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),n),l!==o&&(l=l.nextSibling););else{rB.innerHTML=r?`<svg>${e}</svg>`:e;let l=rB.content;if(r){let e=l.firstChild;for(;e.firstChild;)l.appendChild(e.firstChild);l.removeChild(e)}t.insertBefore(l,n)}return[// first
i?i.nextSibling:t.firstChild,// last
n?n.previousSibling:t.lastChild]}});function lh(){// @ts-ignore
return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:void 0!==y?y:{}}const lv="function"==typeof Proxy;class lg{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;let n={};if(e.settings)for(let t in e.settings){let r=e.settings[t];n[t]=r.defaultValue}let r=`__vue-devtools-plugin-settings__${e.id}`,l=Object.assign({},n);try{let e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(l,t)}catch(e){// noop
}this.fallbacks={getSettings:()=>l,setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(e){// noop
}l=e},now:()=>{var e;return(void 0!==u||("undefined"!=typeof window&&window.performance?(u=!0,c=window.performance):void 0!==y&&(null===(e=y.perf_hooks)||void 0===e?void 0:e.performance)?(u=!0,c=y.perf_hooks.performance):u=!1),u)?c.now():Date.now()}},t&&t.on("plugin:settings:set",(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){for(let t of(this.target=e,this.onQueue))this.target.on[t.method](...t.args);for(let e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}const lm="undefined"!=typeof window,l_=Object.assign;function ly(e,t){let n={};for(let r in t){let l=t[r];n[r]=lE(l)?l.map(e):e(l)}return n}const lb=()=>{},lE=Array.isArray,lO=/\/$/,lw=e=>e.replace(lO,"");/**
 * Transforms a URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */function lx(e,t,n="/"){let r,l={},o="",i="",a=t.indexOf("#"),s=t.indexOf("?");// empty path means a relative query or hash `?foo=f`, `#thing`
return a<s&&a>=0&&(s=-1),s>-1&&(r=t.slice(0,s),l=e(o=t.slice(s+1,a>-1?a:t.length))),a>-1&&(r=r||t.slice(0,a),// keep the # character
i=t.slice(a,t.length)),{fullPath:// no search and no query
(r=/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */function(e,t){let n,r;if(e.startsWith("/"))return e;if(!e)return t;let l=t.split("/"),o=e.split("/"),i=o[o.length-1];(".."===i||"."===i)&&o.push("");let a=l.length-1;for(n=0;n<o.length;n++)// we stay on the same position
if("."!==(r=o[n])){// go up in the from array
if(".."===r)a>1&&a--;else break}return l.slice(0,a).join("/")+"/"+o// ensure we use at least the last element in the toSegments
.slice(n-(n===o.length?1:0)).join("/")}(null!=r?r:t,n))+(o&&"?")+o+i,path:r,query:l,hash:i}}/**
 * Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */function lC(e,t){return(// no base or base is not found at the beginning
t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e)}/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */function lS(e,t){// since the original record has an undefined value for aliasOf
// but all aliases point to the original record, this will always compare
// the original record
return(e.aliasOf||e)===(t.aliasOf||t)}function lk(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let l in e){var n,r;if(n=e[l],r=t[l],lE(n)?!lP(n,r):lE(r)?!lP(r,n):n!==r)return!1}return!0}/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */function lP(e,t){return lE(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}(f=g||(g={})).pop="pop",f.push="push",(p=m||(m={})).back="back",p.forward="forward",p.unknown="";// remove any character before the hash
const lT=/^[^#]+#/;function lR(e,t){return e.replace(lT,"#")+t}const lA=()=>({left:window.pageXOffset,top:window.pageYOffset});function lL(e,t){let n=history.state?history.state.position-t:-1;return n+e}const lV=new Map;// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }
let lI=()=>location.protocol+"//"+location.host;/**
 * Creates a normalized history location from a window.location object
 * @param base - The base path
 * @param location - The window.location object
 */function l$(e,t){let{pathname:n,search:r,hash:l}=t,o=e.indexOf("#");if(o>-1){let t=l.includes(e.slice(o))?e.slice(o).length:1,n=l.slice(t);return"/"!==n[0]&&(n="/"+n),lC(n,"")}let i=lC(n,e);return i+r+l}/**
 * Creates a state object
 */function lj(e,t,n,r=!1,l=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:l?lA():null}}function lU(e){return"string"==typeof e||"symbol"==typeof e}/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */const lF={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lD=Symbol("");function lN(e,t){return l_(Error(),{type:e,[lD]:!0},t)}function lM(e,t){return e instanceof Error&&lD in e&&(null==t||!!(e.type&t))}/**
     * An aborted navigation is a navigation that failed because a navigation
     * guard returned `false` or called `next(false)`
     */(d=_||(_={}))[d.aborted=4]="aborted",/**
     * A cancelled navigation is a navigation that failed because a more recent
     * navigation finished started (not necessarily finished).
     */d[d.cancelled=8]="cancelled",/**
     * A duplicated navigation is a navigation that failed because it was
     * initiated while already being at the exact same location.
     */d[d.duplicated=16]="duplicated";// default pattern for a param: non-greedy everything but /
const lB="[^/]+?",lW={sensitive:!1,strict:!1,start:!0,end:!0},lH=/[.+*?^${}()[\]/\\]/g;/**
 * This allows detecting splats at the end of a path: /home/:id(.*)*
 *
 * @param score - score to check
 * @returns true if the last entry is negative
 */function lq(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const lG={type:0/* TokenType.Static */,value:""},lz=/[a-zA-Z0-9_]/;function lK(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */function lQ(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function lY(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const lX=/#/g,lJ=/&/g,lZ=/\//g,l0=/=/g,l1=/\?/g,l2=/\+/g,l6=/%5B/g,l8=/%5D/g,l3=/%5E/g,l4=/%60/g,l5=/%7B/g,l7=/%7C/g,l9=/%7D/g,oe=/%20/g;// %23
/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */function ot(e){return encodeURI(""+e).replace(l7,"|").replace(l6,"[").replace(l8,"]")}/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */function on(e){return ot(e)// Encode the space as +, encode the + to differentiate it from the space
.replace(l2,"%2B").replace(oe,"+").replace(lX,"%23").replace(lJ,"%26").replace(l4,"`").replace(l5,"{").replace(l9,"}").replace(l3,"^")}/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */function or(e){return null==e?"":ot(e).replace(lX,"%23").replace(l1,"%3F").replace(lZ,"%2F")}/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */function ol(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */function oo(e){let t={};// avoid creating an object with an empty key and empty value
// because of split('&')
if(""===e||"?"===e)return t;let n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let e=0;e<r.length;++e){// pre decode the + into space
let n=r[e].replace(l2," "),l=n.indexOf("="),o=ol(l<0?n:n.slice(0,l)),i=l<0?null:ol(n.slice(l+1));if(o in t){// an extra variable for ts types
let e=t[o];lE(e)||(e=t[o]=[e]),e.push(i)}else t[o]=i}return t}/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */function oi(e){let t="";for(let n in e){let r=e[n];if(n=on(n).replace(l0,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}// keep null values
let l=lE(r)?r.map(e=>e&&on(e)):[r&&on(r)];l.forEach(e=>{void 0!==e&&(// only append & with non-empty search
t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */const oa=Symbol(""),os=Symbol(""),ou=Symbol(""),oc=Symbol(""),of=Symbol("");/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */function op(){let e=[];return{add:function(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function od(e,t,n,r,l){// keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
let o=r&&// name is defined if record is because of the function overload
(r.enterCallbacks[l]=r.enterCallbacks[l]||[]);return()=>new Promise((i,a)=>{let s=e=>{!1===e?a(lN(4/* ErrorTypes.NAVIGATION_ABORTED */,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof e||e&&"object"==typeof e?a(lN(2/* ErrorTypes.NAVIGATION_GUARD_REDIRECT */,{from:t,to:e})):(o&&// since enterCallbackArray is truthy, both record and name also are
    r.enterCallbacks[l]===o&&"function"==typeof e&&o.push(e),i())},u=e.call(r&&r.instances[l],t,n,s),c=Promise.resolve(u);e.length<3&&(c=c.then(s)),c.catch(e=>a(e))})}function oh(e,t,n,r){let l=[];for(let o of e)for(let e in o.components){let i=o.components[e];// skip update and leave guards if the route component is not mounted
if("beforeRouteEnter"===t||o.instances[e]){if("object"==typeof i||"displayName"in i||"props"in i||"__vccOpts"in i){// __vccOpts is added by vue-class-component and contain the regular options
let a=i.__vccOpts||i,s=a[t];s&&l.push(od(s,n,r,o,e))}else{// start requesting the chunk already
let a=i();l.push(()=>a.then(l=>{if(!l)return Promise.reject(Error(`Couldn't resolve component "${e}" at "${o.path}"`));let i=l.__esModule||"Module"===l[Symbol.toStringTag]?l.default:l;// replace the function with the resolved component
    // cannot be null or undefined because we went into the for loop
    o.components[e]=i;// __vccOpts is added by vue-class-component and contain the regular options
    let a=i.__vccOpts||i,s=a[t];return s&&od(s,n,r,o,e)()}))}}}return l}// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
function ov(e){let t=n1(ou),n=n1(oc),r=tk(()=>t.resolve(tw(e.to))),l=tk(()=>{let{matched:e}=r.value,{length:t}=e,l=e[t-1],o=n.matched;if(!l||!o.length)return -1;let i=o.findIndex(lS.bind(null,l));if(i>-1)return i;// possible parent record
let a=om(e[t-2]);return t>1&&// if the parent and matched route have the same path, this link is
// referring to the empty child. Or we currently are on a different
// child of the same parent
om(l)===a&&// avoid comparing the child with its parent
o[o.length-1].path!==a?o.findIndex(lS.bind(null,e[t-2])):i}),o=tk(()=>l.value>-1&&function(e,t){for(let n in t){let r=t[n],l=e[n];if("string"==typeof r){if(r!==l)return!1}else if(!lE(l)||l.length!==r.length||r.some((e,t)=>e!==l[t]))return!1}return!0}(n.params,r.value.params)),i=tk(()=>l.value>-1&&l.value===n.matched.length-1&&lk(n.params,r.value.params));// devtools only
if(__VUE_PROD_DEVTOOLS__&&lm){let e=rk();if(e){let t={route:r.value,isActive:o.value,isExactActive:i.value};// @ts-expect-error: this is internal
e.__vrl_devtools=e.__vrl_devtools||[],// @ts-expect-error: this is internal
e.__vrl_devtools.push(t),nn(()=>{t.route=r.value,t.isActive=o.value,t.isExactActive=i.value},null,{flush:"post"})}}/**
     * NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
     */return{route:r,href:tk(()=>r.value.href),isActive:o,isExactActive:i,navigate:function(n={}){return!function(e){// don't redirect with control keys
if(!e.metaKey&&!e.altKey&&!e.ctrlKey&&!e.shiftKey&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){// don't redirect if `target="_blank"`
// @ts-expect-error getAttribute does exist
if(e.currentTarget&&e.currentTarget.getAttribute){// @ts-expect-error getAttribute exists
let t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(n)?Promise.resolve():t[tw(e.replace)?"replace":"push"](tw(e.to)).catch(lb)}}}const og=nm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,// inactiveClass: String,
exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ov,setup(e,{slots:t}){let n=ta(ov(e)),{options:r}=n1(ou),l=tk(()=>({[o_(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,// [getLinkClass(
    //   props.inactiveClass,
    //   options.linkInactiveClass,
    //   'router-link-inactive'
    // )]: !link.isExactActive,
    [o_(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{let r=t.default&&t.default(n);return e.custom?r:rU("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,// this would override user added attrs but Vue will still add
// the listener, so we end up triggering both
onClick:n.navigate,class:l.value},r)}}});/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */function om(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */const o_=(e,t,n)=>null!=e?e:null!=t?t:n,oy=nm({name:"RouterView",// #674 we manually inherit them
inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},// Better compat for @vue/compat users
// https://github.com/vuejs/router/issues/1315
compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=n1(of),l=tk(()=>e.route||r.value),o=n1(os,0),i=tk(()=>{let e,t=tw(o),{matched:n}=l.value;for(;(e=n[t])&&!e.components;)t++;return t}),a=tk(()=>l.value.matched[i.value]);n0(os,tk(()=>i.value+1)),n0(oa,a),n0(of,l);let s=tE(void 0,!1);return nn(()=>[s.value,a.value,e.name],([e,t,n],[r,l,o])=>{t&&(// this will update the instance for new instances as well as reused
// instances when navigating to a new route
t.instances[n]=e,l&&l!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=l.leaveGuards),t.updateGuards.size||(t.updateGuards=l.updateGuards))),!e||!t||// if there is no instance but to and from are the same this might be
// the first visit
l&&lS(t,l)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{let r=l.value,o=e.name,u=a.value,c=u&&u.components[o];if(!c)return ob(n.default,{Component:c,route:r});// props from route configuration
let f=u.props[o],p=f?!0===f?r.params:"function"==typeof f?f(r):f:null,d=rU(c,l_({},p,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(u.instances[o]=null)},ref:s}));if(__VUE_PROD_DEVTOOLS__&&lm&&d.ref){// TODO: can display if it's an alias, its props
let e={depth:i.value,name:u.name,path:u.path,meta:u.meta},t=lE(d.ref)?d.ref.map(e=>e.i):[d.ref.i];t.forEach(t=>{// @ts-expect-error
t.__vrv_devtools=e})}return(// h and <component :is="..."> both accept vnodes
ob(n.default,{Component:d,route:r})||d)}}});function ob(e,t){if(!e)return null;let n=e(t);return 1===n.length?n[0]:n}/**
 * Copies a route location and removes any problematic properties that cannot be shown in devtools (e.g. Vue instances).
 *
 * @param routeLocation - routeLocation to format
 * @param tooltip - optional tooltip
 * @returns a copy of the routeLocation
 */function oE(e,t){let n=l_({},e,{// remove variables that can contain vue instances
matched:e.matched.map(e=>(function(e,t){let n={};for(let r in e)t.includes(r)||(n[r]=e[r]);return n})(e,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function oO(e){return{_custom:{display:e}}}// to support multiple router instances
let ow=0;function ox(e){let t=[],{record:n}=e;null!=n.name&&t.push({label:String(n.name),textColor:0,backgroundColor:2282478}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:16486972}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:15485081}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:8702998}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:2450411}),n.redirect&&t.push({label:"string"==typeof n.redirect?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:6710886});// add an id to be able to select it. Using the `path` is not possible because
// empty path children would collide with their parents
let r=n.__vd_id;return null==r&&(r=String(oC++),n.__vd_id=r),{id:r,label:n.path,tags:t,children:e.children.map(ox)}}//  incremental id for route records and inspector state
let oC=0;const oS=/^\/(.*)\/([a-z]*)$/;function ok(e){e.__vd_match=!1,e.children.forEach(ok)}// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const oP=/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */function(e){let t,n,r;let l=/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */function(e,t){// normalized ordered array of matchers
let n=[],r=new Map;function l(e,i,a){let s,u;// used later on to remove by name
let c=!a,f={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */function(e){let t={},n=e.props||!1;if("component"in e)t.default=n;else // Would need user feedback for use cases
for(let r in e.components)t[r]="object"==typeof n?n[r]:n;return t}(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};// we might be the child of an alias
f.aliasOf=a&&a.record;let p=lY(t,e),d=[f];if("alias"in e){let t="string"==typeof e.alias?[e.alias]:e.alias;for(let e of t)d.push(l_({},f,{// this allows us to hold a copy of the `components` option
// so that async components cache is hold on the original record
components:a?a.record.components:f.components,path:e,// we might be the child of an alias
aliasOf:a?a.record:f}))}for(let t of d){let{path:d}=t;// Build up the path for nested routes if the child isn't an absolute
// route. Only add the / delimiter if the child path isn't empty and if the
// parent path doesn't have a trailing slash
if(i&&"/"!==d[0]){let e=i.record.path,n="/"===e[e.length-1]?"":"/";t.path=i.record.path+(d&&n+d)}if(// create the object beforehand, so it can be passed to children
s=function(e,t,n){let r=/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */function(e,t){let n=l_({},lW,t),r=[],l=n.start?"^":"",o=[];for(let t of e){// the root segment needs special treatment
let e=t.length?[]:[90/* PathScore.Root */];n.strict&&!t.length&&(l+="/");for(let r=0;r<t.length;r++){let i=t[r],a=40/* PathScore.Segment */+(n.sensitive?.25/* PathScore.BonusCaseSensitive */:0);if(0/* TokenType.Static */===i.type)r||(l+="/"),l+=i.value.replace(lH,"\\$&"),a+=40/* PathScore.Static */;else if(1/* TokenType.Param */===i.type){let{value:e,repeatable:n,optional:s,regexp:u}=i;o.push({name:e,repeatable:n,optional:s});let c=u||lB;// the user provided a custom regexp /:id(\\d+)
if(c!==lB){a+=10/* PathScore.BonusCustomRegExp */;// make sure the regexp is valid before using it
try{RegExp(`(${c})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${c}): `+t.message)}}// when we repeat we must take care of the repeating leading slash
let f=n?`((?:${c})(?:/(?:${c}))*)`:`(${c})`;r||(f=// or /:p?-:p2
s&&t.length<2?`(?:/${f})`:"/"+f),s&&(f+="?"),l+=f,a+=20/* PathScore.Dynamic */,s&&(a+=-8/* PathScore.BonusOptional */),n&&(a+=-20/* PathScore.BonusRepeatable */),".*"===c&&(a+=-50/* PathScore.BonusWildcard */)}e.push(a)}// an empty array like /home/ -> [[{home}], []]
// if (!segment.length) pattern += '/'
r.push(e)}// only apply the strict bonus to the last score
if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001/* PathScore.BonusStrict */}n.strict||(l+="/?"),n.end?l+="$":n.strict&&(l+="(?:/|$)");let i=new RegExp(l,n.sensitive?"":"i");return{re:i,score:r,keys:o,parse:function(e){let t=e.match(i),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||"",l=o[e-1];n[l.name]=r&&l.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(let l of e)for(let e of(r&&n.endsWith("/")||(n+="/"),r=!1,l))if(0/* TokenType.Static */===e.type)n+=e.value;else if(1/* TokenType.Param */===e.type){let{value:o,repeatable:i,optional:a}=e,s=o in t?t[o]:"";if(lE(s)&&!i)throw Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);let u=lE(s)?s.join("/"):s;if(!u){if(a)l.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${o}"`)}n+=u}// avoid empty path when we have multiple optional params
return n||"/"}}}(// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function(e){let t,n;if(!e)return[[]];if("/"===e)return[[lG]];if(!e.startsWith("/"))throw Error(`Invalid path "${e}"`);// if (tokenCache.has(path)) return tokenCache.get(path)!
function r(e){throw Error(`ERR (${l})/"${u}": ${e}`)}let l=0/* TokenizerState.Static */,o=0,i=[];function a(){t&&i.push(t),t=[]}// index on the path
let s=0,u="",c="";function f(){u&&(0/* TokenizerState.Static */===l?t.push({type:0/* TokenType.Static */,value:u}):1/* TokenizerState.Param */===l||2/* TokenizerState.ParamRegExp */===l||3/* TokenizerState.ParamRegExpEnd */===l?(t.length>1&&("*"===n||"+"===n)&&r(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),t.push({type:1/* TokenType.Param */,value:u,regexp:c,repeatable:"*"===n||"+"===n,optional:"*"===n||"?"===n})):r("Invalid state to consume buffer"),u="")}for(;s<e.length;){if("\\"===(n=e[s++])&&2/* TokenizerState.ParamRegExp */!==l){o=l,l=4/* TokenizerState.EscapeNext */;continue}switch(l){case 0/* TokenizerState.Static */:"/"===n?(u&&f(),a()):":"===n?(f(),l=1/* TokenizerState.Param */):u+=n;break;case 4/* TokenizerState.EscapeNext */:u+=n,l=o;break;case 1/* TokenizerState.Param */:"("===n?l=2/* TokenizerState.ParamRegExp */:lz.test(n)?u+=n:(f(),l=0/* TokenizerState.Static */,"*"!==n&&"?"!==n&&"+"!==n&&s--);break;case 2/* TokenizerState.ParamRegExp */:")"===n?"\\"==c[c.length-1]?c=c.slice(0,-1)+n:l=3/* TokenizerState.ParamRegExpEnd */:c+=n;break;case 3/* TokenizerState.ParamRegExpEnd */:// same as finalizing a param
f(),l=0/* TokenizerState.Static */,"*"!==n&&"?"!==n&&"+"!==n&&s--,c="";break;default:r("Unknown state")}}// tokenCache.set(path, tokens)
return 2/* TokenizerState.ParamRegExp */===l&&r(`Unfinished custom RegExp for param "${u}"`),f(),a(),i}(e.path),n),l=l_(r,{record:e,parent:t,// these needs to be populated by the parent
children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}(t,i,p),a?a.alias.push(s):(// otherwise, the first record is the original and others are aliases
(u=u||s)!==s&&u.alias.push(s),c&&e.name&&!lQ(s)&&o(e.name)),f.children){let e=f.children;for(let t=0;t<e.length;t++)l(e[t],s,a&&a.children[t])}// if there was no original record, then the first one was not an alias and all
// other aliases (if any) need to reference this record when adding children
a=a||s,(s.record.components&&Object.keys(s.record.components).length||s.record.name||s.record.redirect)&&function(e){let t=0;for(;t<n.length&&/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 *
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */function(e,t){let n=0,r=e.score,l=t.score;for(;n<r.length&&n<l.length;){let e=/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 *
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */function(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];// only keep going if diff === 0
if(r)return r;n++}return(// if the last subsegment was Static, the shorter segments should be sorted first
// otherwise sort the longest segment first
e.length<t.length?1===e.length&&80/* PathScore.Segment */===e[0]?-1:1:e.length>t.length?1===t.length&&80/* PathScore.Segment */===t[0]?1:-1:0)}(r[n],l[n]);// do not return if both are equal
if(e)return e;n++}if(1===Math.abs(l.length-r.length)){if(lq(r))return 1;if(lq(l))return -1}// if a and b share the same score entries but b has more, sort b first
return l.length-r.length;// this is the ternary version
// return aScore.length < bScore.length
//   ? 1
//   : aScore.length > bScore.length
//   ? -1
//   : 0
}(e,n[t])>=0&&// Adding children with empty path should still appear before the parent
// https://github.com/vuejs/router/issues/1124
(e.record.path!==n[t].record.path||!function e(t,n){return n.children.some(n=>n===t||e(t,n))}(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!lQ(e)&&r.set(e.record.name,e)}(s)}return u?()=>{// since other matchers are aliases, they should be removed by the original matcher
o(u)}:lb}function o(e){if(lU(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}return t=lY({strict:!1,end:!0,sensitive:!1},t),// add initial routes
e.forEach(e=>l(e)),{addRoute:l,resolve:function(e,t){let l,o,i;let a={};if("name"in e&&e.name){if(!(l=r.get(e.name)))throw lN(1/* ErrorTypes.MATCHER_NOT_FOUND */,{location:e});i=l.record.name,a=l_(lK(t.params,// TODO: only keep optional params coming from a parent record
l.keys.filter(e=>!e.optional).map(e=>e.name)),// #1497 this ensures better active/exact matching
e.params&&lK(e.params,l.keys.map(e=>e.name))),// throws if cannot be stringified
o=l.stringify(a)}else if("path"in e)// no need to resolve the path with the matcher as it was provided
// this also allows the user to control the encoding
o=e.path,(l=n.find(e=>e.re.test(o)))&&(// we know the matcher works because we tested the regexp
a=l.parse(o),i=l.record.name);else{if(!// match by name or path of current route
(l=t.name?r.get(t.name):n.find(e=>e.re.test(t.path))))throw lN(1/* ErrorTypes.MATCHER_NOT_FOUND */,{location:e,currentLocation:t});i=l.record.name,// since we are navigating to the same location, we don't need to pick the
// params like when `name` is provided
a=l_({},t.params,e.params),o=l.stringify(a)}let s=[],u=l;for(;u;)// reversed order so parents are at the beginning
s.unshift(u.record),u=u.parent;return{name:i,path:o,params:a,matched:s,meta:s.reduce((e,t)=>l_(e,t.meta),{})}},removeRoute:o,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}(e.routes,e),o=e.parseQuery||oo,i=e.stringifyQuery||oi,a=e.history,s=op(),u=op(),c=op(),f=tE(lF,!0),p=lF;lm&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");let d=ly.bind(null,e=>""+e),h=ly.bind(null,or),m=ly.bind(null,ol);function _(e,t){let n;if(// const objectLocation = routerLocationAsObject(rawLocation)
// we create a copy to modify it later
t=l_({},t||f.value),"string"==typeof e){let n=lx(o,e,t.path),r=l.resolve({path:n.path},t),i=a.createHref(n.fullPath);// locationNormalized is always a new object
return l_(n,r,{params:m(r.params),hash:ol(n.hash),redirectedFrom:void 0,href:i})}// path could be relative in object as well
if("path"in e)n=l_({},e,{path:lx(o,e.path,t.path).path});else{// remove any nullish param
let r=l_({},e.params);for(let e in r)null==r[e]&&delete r[e];// pass encoded values to the matcher, so it can produce encoded path and fullPath
n=l_({},e,{params:h(r)}),// current location params are decoded, we need to encode them in case the
// matcher merges the params
t.params=h(t.params)}let r=l.resolve(n,t),s=e.hash||"";// the matcher might have merged current location params, so
// we need to run the decoding again
r.params=d(m(r.params));let u=/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */function(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,l_({},e,{hash:ot(s).replace(l5,"{").replace(l9,"}").replace(l3,"^"),path:r.path})),c=a.createHref(u);return l_({fullPath:u,hash:// hash
s,query:// nested objects, so we keep the query as is, meaning it can contain
// numbers at `$route.query`, but at the point, the user will have to
// use their own type anyway.
// https://github.com/vuejs/router/issues/328#issuecomment-649481567
i===oi?/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */function(e){let t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=lE(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}(e.query):e.query||{}},r,{redirectedFrom:void 0,href:c})}function y(e){return"string"==typeof e?lx(o,e,f.value.path):l_({},e)}function b(e,t){if(p!==e)return lN(8/* ErrorTypes.NAVIGATION_CANCELLED */,{from:t,to:e})}function E(e){let t=e.matched[e.matched.length-1];if(t&&t.redirect){let{redirect:n}=t,r="function"==typeof n?n(e):n;return"string"==typeof r&&// @ts-expect-error: force empty params when a string is passed to let
// the router parse them again
((r=r.includes("?")||r.includes("#")?r=y(r):{path:r}).params={}),l_({query:e.query,hash:e.hash,// avoid transferring params if the redirect has a path
params:"path"in r?{}:e.params},r)}}function O(e,t){let n;let r=p=_(e),l=f.value,o=e.state,a=e.force,s=!0===e.replace,u=E(r);return u?O(l_(y(u),{state:"object"==typeof u?l_({},o,u.state):o,force:a,replace:s}),t||r):(r.redirectedFrom=t,!a&&/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param stringifyQuery - A function that takes a query object of type LocationQueryRaw and returns a string representation of it.
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */function(e,t,n){let r=t.matched.length-1,l=n.matched.length-1;return r>-1&&r===l&&lS(t.matched[r],n.matched[l])&&lk(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,l,r)&&(n=lN(16/* ErrorTypes.NAVIGATION_DUPLICATED */,{to:r,from:l}),// trigger scroll to allow scrolling to the same anchor
L(l,l,// history.listen is with a redirect, which makes it become a push
!0,// cannot be manually navigated to
!1)),(n?Promise.resolve(n):C(r,l)).catch(e=>lM(e)?lM(e,2/* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)?e:A(e)// also returns the error
    :R(e,r,l)).then(e=>{if(e){if(lM(e,2/* ErrorTypes.NAVIGATION_GUARD_REDIRECT */))return O(l_({replace:s},y(e.to),{state:"object"==typeof e.to?l_({},o,e.to.state):o,force:a}),t||r)}else e=k(r,l,!0,s,o);return S(r,l,e),e}))}/**
     * Helper to reject and skip all navigation guards if a new navigation happened
     * @param to
     * @param from
     */function w(e,t){let n=b(e,t);return n?Promise.reject(n):Promise.resolve()}function x(e){let t=I.values().next().value;// support Vue < 3.3
return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}// TODO: refactor the whole before guards by internally using router.beforeEach
function C(e,t){let n;let[r,l,o]=function(e,t){let n=[],r=[],l=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){let o=t.matched[i];o&&(e.matched.find(e=>lS(e,o))?r.push(o):n.push(o));let a=e.matched[i];a&&!t.matched.find(e=>lS(e,a))&&l.push(a)}return[n,r,l]}(e,t);// leavingRecords is already reversed
for(let l of(// all components here have been resolved once because we are leaving
n=oh(r.reverse(),"beforeRouteLeave",e,t),r))l.leaveGuards.forEach(r=>{n.push(od(r,e,t))});let i=w.bind(null,e,t);// run the queue of per route beforeRouteLeave guards
return n.push(i),j(n).then(()=>{for(let r of(// check global guards beforeEach
n=[],s.list()))n.push(od(r,e,t));return n.push(i),j(n)}).then(()=>{for(let r of(// check in components beforeRouteUpdate
n=oh(l,"beforeRouteUpdate",e,t),l))r.updateGuards.forEach(r=>{n.push(od(r,e,t))});// run the queue of per route beforeEnter guards
return n.push(i),j(n)}).then(()=>{for(let r of(// check the route beforeEnter
n=[],o))if(r.beforeEnter){if(lE(r.beforeEnter))for(let l of r.beforeEnter)n.push(od(l,e,t));else n.push(od(r.beforeEnter,e,t))}// run the queue of per route beforeEnter guards
return n.push(i),j(n)}).then(()=>(// NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
    // clear existing enterCallbacks, these are added by extractComponentsGuards
    e.matched.forEach(e=>e.enterCallbacks={}),// check in-component beforeRouteEnter
    (n=oh(o,"beforeRouteEnter",e,t)).push(i),j(n))).then(()=>{for(let r of(// check global guards beforeResolve
n=[],u.list()))n.push(od(r,e,t));return n.push(i),j(n)})// catch any navigation canceled
.catch(e=>lM(e,8/* ErrorTypes.NAVIGATION_CANCELLED */)?e:Promise.reject(e))}function S(e,t,n){// navigation is confirmed, call afterGuards
// TODO: wrap with error handlers
c.list().forEach(r=>x(()=>r(e,t,n)))}/**
     * - Cleans up any navigation guards
     * - Changes the url if necessary
     * - Calls the scrollBehavior
     */function k(e,t,n,r,l){// a more recent navigation took place
let o=b(e,t);if(o)return o;// only consider as push if it's not the first navigation
let i=t===lF,s=lm?history.state:{};n&&(r||i?a.replace(e.fullPath,l_({scroll:i&&s&&s.scroll},l)):a.push(e.fullPath,l)),// accept current navigation
f.value=e,L(e,t,n,i),A()}// Initialization and Errors
let P=op(),T=op();/**
     * Trigger errorHandlers added via onError and throws the error as well
     *
     * @param error - error to throw
     * @param to - location we were navigating to when the error happened
     * @param from - location we were navigating from when the error happened
     * @returns the error as a rejected promise
     */function R(e,t,n){A(e);let r=T.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function A(e){return n||(// still not ready if an error happened
n=!e,t||(t=a.listen((e,t,n)=>{if(!$.listening)return;// cannot be a redirect route because it was in history
let r=_(e),l=E(r);if(l){O(l_(l,{replace:!0}),r).catch(lb);return}p=r;let o=f.value;// TODO: should be moved to web history?
if(lm){var i,s;i=lL(o.fullPath,n.delta),s=lA(),lV.set(i,s)}C(r,o).catch(e=>lM(e,12/* ErrorTypes.NAVIGATION_CANCELLED */)?e:lM(e,2/* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)?(// Here we could call if (info.delta) routerHistory.go(-info.delta,
    // false) but this is bug prone as we have no way to wait the
    // navigation to be finished before calling pushWithRedirect. Using
    // a setTimeout of 16ms seems to work but there is no guarantee for
    // it to work on every browser. So instead we do not restore the
    // history entry and trigger a new navigation as requested by the
    // navigation guard.
    // the error is already handled by router.push we just want to avoid
    // logging the error
    O(e.to,r).then(e=>{lM(e,20/* ErrorTypes.NAVIGATION_DUPLICATED */)&&!n.delta&&n.type===g.pop&&a.go(-1,!1)}).catch(lb),Promise.reject()):(n.delta&&a.go(-n.delta,!1),R(e,r,o))).then(e=>{(e=e||k(r,o,!1))&&(n.delta&&// a new navigation has been triggered, so we do not want to revert, that will change the current history
// entry while a different route is displayed
!lM(e,8/* ErrorTypes.NAVIGATION_CANCELLED */)?a.go(-n.delta,!1):n.type===g.pop&&lM(e,20/* ErrorTypes.NAVIGATION_DUPLICATED */)&&// it's like a push but lacks the information of the direction
a.go(-1,!1)),S(r,o,e)}).catch(lb)})),P.list().forEach(([t,n])=>e?n(e):t()),P.reset()),e}// Scroll behavior
function L(t,n,r,l){let{scrollBehavior:o}=e;if(!lm||!o)return Promise.resolve();let i=!r&&function(e){let t=lV.get(e);return(// consume it so it's not used again
lV.delete(e),t)}(lL(t.fullPath,0))||(l||!r)&&history.state&&history.state.scroll||null;return tN().then(()=>o(t,n,i)).then(e=>e&&function(e){let t;if("el"in e){let n=e.el,r="string"==typeof n&&n.startsWith("#"),l="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l)return;t=function(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e)).catch(e=>R(e,t,n))}let V=e=>a.go(e),I=new Set,$={currentRoute:f,listening:!0,addRoute:function(e,t){let n,r;return lU(e)?(n=l.getRecordMatcher(e),r=t):r=e,l.addRoute(r,n)},removeRoute:function(e){let t=l.getRecordMatcher(e);t&&l.removeRoute(t)},hasRoute:function(e){return!!l.getRecordMatcher(e)},getRoutes:function(){return l.getRoutes().map(e=>e.record)},resolve:_,options:e,push:function(e){return O(e)},replace:function(e){return O(l_(y(e),{replace:!0}))},go:V,back:()=>V(-1),forward:()=>V(1),beforeEach:s.add,beforeResolve:u.add,afterEach:c.add,onError:T.add,isReady:function(){return n&&f.value!==lF?Promise.resolve():new Promise((e,t)=>{P.add([e,t])})},install(e){e.component("RouterLink",og),e.component("RouterView",oy),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>tw(f)}),lm&&// used for the initial navigation client side to avoid pushing
// multiple times when the router is used in multiple apps
!r&&f.value===lF&&(// see above
r=!0,O(a.location).catch(e=>{}));let o={};for(let e in lF)Object.defineProperty(o,e,{get:()=>f.value[e],enumerable:!0});e.provide(ou,this),e.provide(oc,ts(o)),e.provide(of,f);let i=e.unmount;I.add(e),e.unmount=function(){I.delete(e),I.size<1&&(// invalidate the current navigation
p=lF,t&&t(),t=null,f.value=lF,r=!1,n=!1),i()},__VUE_PROD_DEVTOOLS__&&lm&&function(e,t,n){// Take over router.beforeEach and afterEach
// make sure we are not registering the devtool twice
if(t.__hasDevtools)return;t.__hasDevtools=!0;// increment to support multiple router instances
let r=ow++;!function(e,t){let n=lh(),r=lh().__VUE_DEVTOOLS_GLOBAL_HOOK__,l=lv&&e.enableEarlyProxy;if(r&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))r.emit("devtools-plugin:setup",e,t);else{let o=l?new lg(e,r):null,i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:e,setupFn:t,proxy:o}),o&&t(o.proxiedTarget)}}({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},l=>{let o;"function"!=typeof l.now&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),// display state added by the router
l.on.inspectComponent((e,n)=>{e.instanceData&&e.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:oE(t.currentRoute.value,"Current Route")})}),// mark router-link as active and display tags on router views
l.on.visitComponentTree(({treeNode:e,componentInstance:t})=>{if(t.__vrv_devtools){let n=t.__vrv_devtools;e.tags.push({label:(n.name?`${n.name.toString()}: `:"")+n.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:15485081})}lE(t.__vrl_devtools)&&(t.__devtoolsApi=l,t.__vrl_devtools.forEach(t=>{let n=16486972,r="";t.isExactActive?(n=8702998,r="This is exactly active"):t.isActive&&(n=2450411,r="This link is active"),e.tags.push({label:t.route.path,textColor:0,tooltip:r,backgroundColor:n})}))}),nn(t.currentRoute,()=>{// refresh active state
u(),l.notifyComponentUpdate(),l.sendInspectorTree(s),l.sendInspectorState(s)},void 0);let i="router:navigations:"+r;l.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),// const errorsLayerId = 'router:errors'
// api.addTimelineLayer({
//   id: errorsLayerId,
//   label: 'Router Errors',
//   color: 0xea5455,
// })
t.onError((e,t)=>{l.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:t.fullPath,logType:"error",time:l.now(),data:{error:e},groupId:t.meta.__navigationId}})});// attached to `meta` and used to group events
let a=0;t.beforeEach((e,t)=>{let n={guard:oO("beforeEach"),from:oE(t,"Current Location during this navigation"),to:oE(e,"Target location")};// Used to group navigations together, hide from devtools
Object.defineProperty(e.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:i,event:{time:l.now(),title:"Start of navigation",subtitle:e.fullPath,data:n,groupId:e.meta.__navigationId}})}),t.afterEach((e,t,n)=>{let r={guard:oO("afterEach")};n?(r.failure={_custom:{type:Error,readOnly:!0,display:n?n.message:"",tooltip:"Navigation Failure",value:n}},r.status=oO("❌")):r.status=oO("✅"),// we set here to have the right order
r.from=oE(t,"Current Location during this navigation"),r.to=oE(e,"Target location"),l.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:e.fullPath,time:l.now(),data:r,logType:n?"warning":"default",groupId:e.meta.__navigationId}})});/**
         * Inspector of Existing routes
         */let s="router-inspector:"+r;function u(){// the routes view isn't active
if(!o)return;let e=o,r=n.getRoutes().filter(e=>!e.parent);// reset match state to false
r.forEach(ok),e.filter&&(r=r.filter(t=>(function e(t,n){let r=String(t.re).match(oS);if(t.__vd_match=!1,!r||r.length<3)return!1;// use a regexp without $ at the end to match nested routes better
    let l=new RegExp(r[1].replace(/\$$/,""),r[2]);if(l.test(n))return(// exception case: `/`
    // mark children as matches
    t.children.forEach(t=>e(t,n)),("/"!==t.record.path||"/"===n)&&(t.__vd_match=t.re.test(n),!0));let o=t.record.path.toLowerCase(),i=ol(o);return(// also allow partial matching on the path
    !!(!n.startsWith("/")&&(i.includes(n)||o.includes(n))||i.startsWith(n)||o.startsWith(n)||t.record.name&&String(t.record.name).includes(n))||t.children.some(t=>e(t,n)))})(t,e.filter.toLowerCase()))),// mark active routes
r.forEach(e=>(function e(t,n){// no route will be active if matched is empty
    // reset the matching state
    let r=n.matched.length&&lS(n.matched[n.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=r,r||(t.__vd_active=n.matched.some(e=>lS(e,t.record))),t.children.forEach(t=>e(t,n))})(e,t.currentRoute.value)),e.rootNodes=r.map(ox)}l.addInspector({id:s,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"}),l.on.getInspectorTree(t=>{o=t,t.app===e&&t.inspectorId===s&&u()}),/**
         * Display information about the currently selected route record
         */l.on.getInspectorState(t=>{if(t.app===e&&t.inspectorId===s){let e=n.getRoutes(),r=e.find(e=>e.record.__vd_id===t.nodeId);r&&(t.state={options:function(e){let{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return null!=t.name&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(e=>`${e.name}${e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}`).join(" "),tooltip:"Param keys",value:e.keys}}}),null!=t.redirect&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(e=>e.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(e=>e.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}(r)})}}),l.sendInspectorTree(s),l.sendInspectorState(s)})}(e,this,l)}};// TODO: type this as NavigationGuardReturn or similar instead of any
function j(e){return e.reduce((e,t)=>e.then(()=>x(t)),Promise.resolve())}return $}({// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
history:(// Make sure this implementation is fine in terms of encoding, specially for IE11
// for `file://`, directly use the pathname and ignore the base
// location.pathname contains an initial `/` even at the root: `https://example.com`
(h=location.host?h||location.pathname+location.search:"").includes("#")||(h+="#"),/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */function(e){e=// Generic utils
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */function(e){if(!e){if(lm){// respect <base> tag
let t=document.querySelector("base");// strip full URL origin
e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/"}// remove the trailing slash so all other method can just do `base + fullPath`
// to build an href
return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),lw(e)}(e);let t=function(e){let{history:t,location:n}=window,r={value:l$(e,n)},l={value:t.state};function o(r,o,i){/**
         * if a base tag is provided, and we are on a normal domain, we have to
         * respect the provided `base` attribute because pushState() will use it and
         * potentially erase anything before the `#` like at
         * https://github.com/vuejs/router/issues/685 where a base of
         * `/folder/#` but a base of `/` would erase the `/folder/` section. If
         * there is no host, the `<base>` tag makes no sense and if there isn't a
         * base tag we can just use everything after the `#`.
         */let a=e.indexOf("#"),s=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:lI()+e+r;try{// BROWSER QUIRK
// NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
t[i?"replaceState":"pushState"](o,"",s),l.value=o}catch(e){console.error(e),// Force the navigation, this also resets the call count
n[i?"replace":"assign"](s)}}return l.value||o(r.value,{back:null,current:r.value,forward:null,// the length is off by one, we need to decrease it
position:t.length-1,replaced:!0,// don't add a scroll as the user may have an anchor, and we want
// scrollBehavior to be triggered without a saved position
scroll:null},!0),{location:r,state:l,push:function(e,n){// Add to current entry the information of where we are going
// as well as saving the current position
let i=l_({},// history.replaceState
// https://github.com/vuejs/router/issues/366
l.value,t.state,{forward:e,scroll:lA()});o(i.current,i,!0);let a=l_({},lj(r.value,e,null),{position:i.position+1},n);o(e,a,!1),r.value=e},replace:function(e,n){let i=l_({},t.state,lj(l.value.back,e,l.value.forward,!0),n,{position:l.value.position});o(e,i,!0),r.value=e}}}(e),n=function(e,t,n,r){let l=[],o=[],i=null,a=({state:o})=>{let a=l$(e,location),s=n.value,u=t.value,c=0;if(o){// ignore the popstate and reset the pauseState
if(n.value=a,t.value=o,i&&i===s){i=null;return}c=u?o.position-u.position:0}else r(a);// console.log({ deltaFromCurrent })
// Here we could also revert the navigation by calling history.go(-delta)
// this listener will have to be adapted to not trigger again and to wait for the url
// to be updated before triggering the listeners. Some kind of validation function would also
// need to be passed to the listeners so the navigation can be accepted
// call all listeners
l.forEach(e=>{e(n.value,s,{delta:c,type:g.pop,direction:c?c>0?m.forward:m.back:m.unknown})})};function s(){let{history:e}=window;e.state&&e.replaceState(l_({},e.state,{scroll:lA()}),"")}return(// set up the listeners and prepare teardown callbacks
window.addEventListener("popstate",a),// TODO: could we use 'pagehide' or 'visibilitychange' instead?
// https://developer.chrome.com/blog/page-lifecycle-api/
window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:function(){i=n.value},listen:function(e){// set up the listener and prepare teardown callbacks
l.push(e);let t=()=>{let t=l.indexOf(e);t>-1&&l.splice(t,1)};return o.push(t),t},destroy:function(){for(let e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",s)}})}(e,t.state,t.location,t.replace),r=l_({// it's overridden right after
location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:lR.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}(h)),routes:[{path:"/",component:{template:"<div>Home</div>"}},{path:"/about",component:{template:"<div>About</div>"}}]}),oT=((...e)=>{let t=(s||(s=function(e,t){var n;let l,o;"boolean"!=typeof __VUE_OPTIONS_API__&&(el().__VUE_OPTIONS_API__=!0),"boolean"!=typeof __VUE_PROD_DEVTOOLS__&&(el().__VUE_PROD_DEVTOOLS__=!1);let i=el();i.__VUE__=!0,__VUE_PROD_DEVTOOLS__&&function e(t,n){var l,o;if(r=t)r.enabled=!0,tz.forEach(({event:e,args:t})=>r.emit(e,...t)),tz=[];else if(// browser environment to avoid the timer handle stalling test runner exit
// (#4815)
"undefined"==typeof window||!// some envs mock window but not fully
window.HTMLElement||(null==(o=null==(l=window.navigator)?void 0:l.userAgent)?void 0:o.includes("jsdom")))tK=!0,tz=[];else{let t=n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[];t.push(t=>{e(t,n)}),setTimeout(()=>{r||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,tK=!0,tz=[])},3e3)}}(i.__VUE_DEVTOOLS_GLOBAL_HOOK__,i);let{insert:a,remove:s,patchProp:u,createElement:c,createText:f,createComment:p,setText:d,setElementText:h,parentNode:g,nextSibling:m,setScopeId:_=w,insertStaticContent:y}=e,b=(e,t,n,r=null,l=null,o=null,i=!1,a=null,s=!!t.dynamicChildren)=>{if(e===t)return;e&&!rh(e,t)&&(r=eu(e),er(e,l,o,!0),e=null),-2===t.patchFlag&&(s=!1,t.dynamicChildren=null);let{type:u,ref:c,shapeFlag:f}=t;switch(u){case rs:x(e,t,n,r);break;case ru:C(e,t,n,r);break;case rc:null==e&&S(t,n,r,i);break;case ra:B(e,t,n,r,l,o,i,a,s);break;default:1&f?R(e,t,n,r,l,o,i,a,s):6&f?W(e,t,n,r,l,o,i,a,s):64&f?u.process(e,t,n,r,l,o,i,a,s,ep):128&f&&u.process(e,t,n,r,l,o,i,a,s,ep)}null!=c&&l&&rr(c,e&&e.ref,o,t||e,!t)},x=(e,t,n,r)=>{if(null==e)a(t.el=f(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},C=(e,t,n,r)=>{null==e?a(t.el=p(t.children||""),n,r):t.el=e.el},S=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r,e.el,e.anchor)},k=({el:e,anchor:t},n,r)=>{let l;for(;e&&e!==t;)l=m(e),a(e,n,r),e=l;a(t,n,r)},T=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=m(e),s(e),e=n;s(t)},R=(e,t,n,r,l,o,i,a,s)=>{i=i||"svg"===t.type,null==e?V(t,n,r,l,o,i,a,s):U(e,t,l,o,i,a,s)},V=(e,t,n,r,l,o,i,s)=>{let f,p;let{type:d,props:g,shapeFlag:m,transition:_,dirs:y}=e;if(f=e.el=c(e.type,o,g&&g.is,g),8&m?h(f,e.children):16&m&&j(e.children,f,null,r,l,o&&"foreignObject"!==d,i,s),y&&ni(e,null,r,"created"),I(f,e,e.scopeId,i,r),g){for(let t in g)"value"===t||q(t)||u(f,t,null,g[t],o,e.children,r,l,es);"value"in g&&u(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&rw(p,r,e)}__VUE_PROD_DEVTOOLS__&&(Object.defineProperty(f,"__vnode",{value:e,enumerable:!1}),Object.defineProperty(f,"__vueParentComponent",{value:r,enumerable:!1})),y&&ni(e,null,r,"beforeMount");let b=(!l||l&&!l.pendingBranch)&&_&&!_.persisted;b&&_.beforeEnter(f),a(f,t,n),((p=g&&g.onVnodeMounted)||b||y)&&rl(()=>{p&&rw(p,r,e),b&&_.enter(f),y&&ni(e,null,r,"mounted")},l)},I=(e,t,n,r,l)=>{if(n&&_(e,n),r)for(let t=0;t<r.length;t++)_(e,r[t]);if(l&&t===l.subTree){let t=l.vnode;I(e,t,t.scopeId,t.slotScopeIds,l.parent)}},j=(e,t,n,r,l,o,i,a,s=0)=>{for(let u=s;u<e.length;u++){let s=e[u]=a?rE(e[u]):rb(e[u]);b(null,s,t,n,r,l,o,i,a)}},U=(e,t,n,r,l,o,i)=>{let a;let s=t.el=e.el,{patchFlag:c,dynamicChildren:f,dirs:p}=t;c|=16&e.patchFlag;let d=e.props||E,g=t.props||E;n&&ro(n,!1),(a=g.onVnodeBeforeUpdate)&&rw(a,n,t,e),p&&ni(t,e,n,"beforeUpdate"),n&&ro(n,!0);let m=l&&"foreignObject"!==t.type;if(f?N(e.dynamicChildren,f,s,n,r,m,o):i||X(e,t,s,null,n,r,m,o,!1),c>0){if(16&c)M(s,t,d,g,n,r,l);else if(2&c&&d.class!==g.class&&u(s,"class",null,g.class,l),4&c&&u(s,"style",d.style,g.style,l),8&c){let o=t.dynamicProps;for(let t=0;t<o.length;t++){let i=o[t],a=d[i],c=g[i];(c!==a||"value"===i)&&u(s,i,a,c,l,e.children,n,r,es)}}1&c&&e.children!==t.children&&h(s,t.children)}else i||null!=f||M(s,t,d,g,n,r,l);((a=g.onVnodeUpdated)||p)&&rl(()=>{a&&rw(a,n,t,e),p&&ni(t,e,n,"updated")},r)},N=(e,t,n,r,l,o,i)=>{for(let a=0;a<t.length;a++){let s=e[a],u=t[a],c=// which will not have a mounted element
s.el&&// - In the case of a Fragment, we need to provide the actual parent
// of the Fragment itself so it can move its children.
(s.type===ra||// - In the case of different nodes, there is going to be a replacement
// which also requires the correct parent container
!rh(s,u)||// - In the case of a component, it could contain anything.
70&s.shapeFlag)?g(s.el):// just pass the block element here to avoid a DOM parentNode call.
n;b(s,u,c,null,r,l,o,i,!0)}},M=(e,t,n,r,l,o,i)=>{if(n!==r){if(n!==E)for(let a in n)q(a)||a in r||u(e,a,n[a],null,i,t.children,l,o,es);for(let a in r){if(q(a))continue;let s=r[a],c=n[a];s!==c&&"value"!==a&&u(e,a,c,s,i,t.children,l,o,es)}"value"in r&&u(e,"value",n.value,r.value)}},B=(e,t,n,r,l,o,i,s,u)=>{let c=t.el=e?e.el:f(""),p=t.anchor=e?e.anchor:f(""),{patchFlag:d,dynamicChildren:h,slotScopeIds:g}=t;g&&(s=s?s.concat(g):g),null==e?(a(c,n,r),a(p,n,r),j(t.children,n,p,l,o,i,s,u)):d>0&&64&d&&h&&// #2715 the previous fragment could've been a BAILed one as a result
// of renderSlot() with no valid children
e.dynamicChildren?(N(e.dynamicChildren,h,n,l,o,i,s),//  get moved around. Make sure all root level vnodes inherit el.
// #2134 or if it's a component root, it may also get moved around
// as the component is being moved.
(null!=t.key||l&&t===l.subTree)&&function e(t,n,r=!1){let l=t.children,o=n.children;if(L(l)&&L(o))for(let t=0;t<l.length;t++){let n=l[t],i=o[t];!(1&i.shapeFlag)||i.dynamicChildren||((i.patchFlag<=0||32===i.patchFlag)&&((i=o[t]=rE(o[t])).el=n.el),r||e(n,i)),i.type===rs&&(i.el=n.el)}}(e,t,!0)):X(e,t,n,p,l,o,i,s,u)},W=(e,t,n,r,l,o,i,a,s)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?l.ctx.activate(t,n,r,i,s):H(t,n,r,l,o,i,s):G(e,t,s)},H=(e,t,n,r,l,o,i)=>{let a=e.component=function(e,t,n){let r=e.type,l=(t?t.appContext:e.appContext)||rx,o={uid:rC++,vnode:e,type:r,parent:t,appContext:l,root:null,// to be immediately set
next:null,subTree:null,// will be set synchronously right after creation
effect:null,update:null,// will be set synchronously right after creation
scope:new ef(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],// local resolved assets
components:null,directives:null,// resolved props and emits options
propsOptions:function e(t,n,r=!1){let l=n.propsCache,o=l.get(t);if(o)return o;let i=t.props,a={},s=[],u=!1;if(__VUE_OPTIONS_API__&&!$(t)){let l=t=>{u=!0;let[r,l]=e(t,n,!0);P(a,r),l&&s.push(...l)};!r&&n.mixins.length&&n.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!u)return F(t)&&l.set(t,O),O;if(L(i))for(let e=0;e<i.length;e++){let t=K(i[e]);"$"!==t[0]&&(a[t]=E)}else if(i)for(let e in i){let t=K(e);if("$"!==t[0]){let n=i[e],r=a[t]=L(n)||$(n)?{type:n}:P({},n);if(r){let e=n3(Boolean,r.type),n=n3(String,r.type);r[0/* shouldCast */]=e>-1,r[1/* shouldCastTrue */]=n<0||e<n,(e>-1||A(r,"default"))&&s.push(t)}}}let c=[a,s];return F(t)&&l.set(t,c),c}(r,l),emitsOptions:function e(t,n,r=!1){let l=n.emitsCache,o=l.get(t);if(void 0!==o)return o;let i=t.emits,a={},s=!1;if(__VUE_OPTIONS_API__&&!$(t)){let l=t=>{let r=e(t,n,!0);r&&(s=!0,P(a,r))};!r&&n.mixins.length&&n.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return i||s?(L(i)?i.forEach(e=>a[e]=null):P(a,i),F(t)&&l.set(t,a),a):(F(t)&&l.set(t,null),null)}(r,l),// emit
emit:null,// to be set immediately
emitted:null,// props default value
propsDefaults:E,// inheritAttrs
inheritAttrs:r.inheritAttrs,// state
ctx:E,data:E,props:E,attrs:E,slots:E,refs:E,setupState:E,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,// lifecycle hooks
// not using enums here because it results in computed properties
isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=t1.bind(null,o),e.ce&&e.ce(o),o}(e,r,l);if(ny(e)&&(a.ctx.renderer=ep),function(e,t=!1){rL=t;let{props:n,children:r}=e.vnode,l=rA(e);(function(e,t,n,r=!1){let l={},o={};for(let n in et(o,rv,1),e.propsDefaults=/* @__PURE__ */Object.create(null),n2(e,t,l,o),e.propsOptions[0])n in l||(l[n]=void 0);n?e.props=r?l:ts(l):e.type.props?e.props=l:e.props=o,e.attrs=o})(e,n,l,t),rt(e,r),l&&function(e,t){let n=e.type;e.accessCache=/* @__PURE__ */Object.create(null),e.proxy=tv(new Proxy(e.ctx,nD));let{setup:r}=n;if(r){var l;let n=e.setupContext=r.length>1?{get attrs(){return l.attrsProxy||(l.attrsProxy=new Proxy(l.attrs,{get:(e,t)=>(eP(l,"get","$attrs"),e[t])}))},slots:(l=e).slots,emit:l.emit,expose:e=>{l.exposed=e||{}}}:null;rT(e),eS();let o=tP(r,e,0,[e.props,n]);if(ek(),rR(),D(o)){if(o.then(rR,rR),t)return o.then(n=>{rV(e,n,t)}).catch(t=>{tR(t,e,0)});e.asyncDep=o}else rV(e,o,t)}else rI(e,t)}(e,t),rL=!1}(a),a.asyncDep){if(l&&l.registerDep(a,z),!e.el){let e=a.subTree=r_(ru);C(null,e,t,n)}return}z(a,e,t,n,l,o,i)},G=(e,t,n)=>{let r=t.component=e.component;if(function(e,t,n){let{props:r,children:l,component:o}=e,{props:i,children:a,patchFlag:s}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!n||!(s>=0))return(!!l||!!a)&&(!a||!a.$stable)||r!==i&&(r?!i||t9(r,i,u):!!i);if(1024&s)return!0;if(16&s)return r?t9(r,i,u):!!i;if(8&s){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(i[n]!==r[n]&&!t2(u,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved){Q(r,t,n);return}r.next=t,function(e){let t=tV.indexOf(e);t>tI&&tV.splice(t,1)}(r.update),r.update()}else t.el=e.el,r.vnode=t},z=(e,t,n,r,l,i,a)=>{let s=e.effect=new eO(()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:s,vnode:u}=e,c=n;ro(e,!1),n?(n.el=u.el,Q(e,n,a)):n=u,r&&ee(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&rw(t,s,n,u),ro(e,!0);let f=t4(e),p=e.subTree;e.subTree=f,b(p,f,g(p.el),eu(p),e,l,i),n.el=f.el,null===c&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,f.el),o&&rl(o,l),(t=n.props&&n.props.onVnodeUpdated)&&rl(()=>rw(t,s,n,u),l),__VUE_PROD_DEVTOOLS__&&tX(e)}else{let a;let{el:s,props:u}=t,{bm:c,m:f,parent:p}=e,d=n_(t);if(ro(e,!1),c&&ee(c),!d&&(a=u&&u.onVnodeBeforeMount)&&rw(a,p,t),ro(e,!0),s&&o){let n=()=>{e.subTree=t4(e),o(s,e.subTree,e,l,null)};d?t.type.__asyncLoader().then(// which means it won't track dependencies - but it's ok because
// a server-rendered async wrapper is already in resolved state
// and it will never need to change.
()=>!e.isUnmounted&&n()):n()}else{let o=e.subTree=t4(e);b(null,o,n,r,e,l,i),t.el=o.el}if(f&&rl(f,l),!d&&(a=u&&u.onVnodeMounted)){let e=t;rl(()=>rw(a,p,e),l)}(256&t.shapeFlag||p&&n_(p.vnode)&&256&p.vnode.shapeFlag)&&e.a&&rl(e.a,l),e.isMounted=!0,__VUE_PROD_DEVTOOLS__&&tY(e),t=n=r=null}},()=>tM(u),e.scope),u=e.update=()=>s.run();u.id=e.uid,ro(e,!0),u()},Q=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){let{props:l,attrs:o,vnode:{patchFlag:i}}=e,a=th(l),[s]=e.propsOptions,u=!1;if(// - #1942 if hmr is enabled with sfc component
// - vite#872 non-sfc component used by sfc component
(r||i>0)&&!(16&i)){if(8&i){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(t2(e.emitsOptions,i))continue;let c=t[i];if(s){if(A(o,i))c!==o[i]&&(o[i]=c,u=!0);else{let t=K(i);l[t]=n6(s,a,t,c,e,!1)}}else c!==o[i]&&(o[i]=c,u=!0)}}}else{let r;for(let i in n2(e,t,l,o)&&(u=!0),a)t&&// for camelCase
(A(t,i)||// it's possible the original props was passed in as kebab-case
// and converted to camelCase (#955)
(r=Y(i))!==i&&A(t,r))||(s?n&&// for camelCase
(void 0!==n[i]||// for kebab-case
void 0!==n[r])&&(l[i]=n6(s,a,i,void 0,e,!0)):delete l[i]);if(o!==a)for(let e in o)t&&A(t,e)||(delete o[e],u=!0)}u&&eR(e,"set","$attrs")}(e,t.props,r,n),rn(e,t.children,n),eS(),tW(),ek()},X=(e,t,n,r,l,o,i,a,s=!1)=>{let u=e&&e.children,c=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:d}=t;if(p>0){if(128&p){Z(u,f,n,r,l,o,i,a,s);return}if(256&p){J(u,f,n,r,l,o,i,a,s);return}}8&d?(16&c&&es(u,l,o),f!==u&&h(n,f)):16&c?16&d?Z(u,f,n,r,l,o,i,a,s):es(u,l,o,!0):(8&c&&h(n,""),16&d&&j(f,n,r,l,o,i,a,s))},J=(e,t,n,r,l,o,i,a,s)=>{let u;e=e||O,t=t||O;let c=e.length,f=t.length,p=Math.min(c,f);for(u=0;u<p;u++){let r=t[u]=s?rE(t[u]):rb(t[u]);b(e[u],r,n,null,l,o,i,a,s)}c>f?es(e,l,o,!0,!1,p):j(t,n,r,l,o,i,a,s,p)},Z=(e,t,n,r,l,o,i,a,s)=>{let u=0,c=t.length,f=e.length-1,p=c-1;for(;u<=f&&u<=p;){let r=e[u],c=t[u]=s?rE(t[u]):rb(t[u]);if(rh(r,c))b(r,c,n,null,l,o,i,a,s);else break;u++}for(;u<=f&&u<=p;){let r=e[f],u=t[p]=s?rE(t[p]):rb(t[p]);if(rh(r,u))b(r,u,n,null,l,o,i,a,s);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,f=e<c?t[e].el:r;for(;u<=p;)b(null,t[u]=s?rE(t[u]):rb(t[u]),n,f,l,o,i,a,s),u++}}else if(u>p)for(;u<=f;)er(e[u],l,o,!0),u++;else{let d;let h=u,g=u,m=/* @__PURE__ */new Map;for(u=g;u<=p;u++){let e=t[u]=s?rE(t[u]):rb(t[u]);null!=e.key&&m.set(e.key,u)}let _=0,y=p-g+1,E=!1,w=0,x=Array(y);for(u=0;u<y;u++)x[u]=0;for(u=h;u<=f;u++){let r;let c=e[u];if(_>=y){er(c,l,o,!0);continue}if(null!=c.key)r=m.get(c.key);else for(d=g;d<=p;d++)if(0===x[d-g]&&rh(c,t[d])){r=d;break}void 0===r?er(c,l,o,!0):(x[r-g]=u+1,r>=w?w=r:E=!0,b(c,t[r],n,null,l,o,i,a,s),_++)}let C=E?function(e){let t,n,r,l,o;let i=e.slice(),a=[0],s=e.length;for(t=0;t<s;t++){let s=e[t];if(0!==s){if(e[n=a[a.length-1]]<s){i[t]=n,a.push(t);continue}for(r=0,l=a.length-1;r<l;)e[a[o=r+l>>1]]<s?r=o+1:l=o;s<e[a[r]]&&(r>0&&(i[t]=a[r-1]),a[r]=t)}}for(r=a.length,l=a[r-1];r-- >0;)a[r]=l,l=i[l];return a}(x):O;for(d=C.length-1,u=y-1;u>=0;u--){let e=g+u,f=t[e],p=e+1<c?t[e+1].el:r;0===x[u]?b(null,f,n,p,l,o,i,a,s):E&&(d<0||u!==C[d]?en(f,n,p,2):d--)}}},en=(e,t,n,r,l=null)=>{let{el:o,type:i,transition:s,children:u,shapeFlag:c}=e;if(6&c){en(e.component.subTree,t,n,r);return}if(128&c){e.suspense.move(t,n,r);return}if(64&c){i.move(e,t,n,ep);return}if(i===ra){a(o,t,n);for(let e=0;e<u.length;e++)en(u[e],t,n,r);a(e.anchor,t,n);return}if(i===rc){k(e,t,n);return}let f=2!==r&&1&c&&s;if(f){if(0===r)s.beforeEnter(o),a(o,t,n),rl(()=>s.enter(o),l);else{let{leave:e,delayLeave:r,afterLeave:l}=s,i=()=>a(o,t,n),u=()=>{e(o,()=>{i(),l&&l()})};r?r(o,i,u):u()}}else a(o,t,n)},er=(e,t,n,r=!1,l=!1)=>{let o;let{type:i,props:a,ref:s,children:u,dynamicChildren:c,shapeFlag:f,patchFlag:p,dirs:d}=e;if(null!=s&&rr(s,null,n,e,!0),256&f){t.ctx.deactivate(e);return}let h=1&f&&d,g=!n_(e);if(g&&(o=a&&a.onVnodeBeforeUnmount)&&rw(o,t,e),6&f)ea(e.component,n,r);else{if(128&f){e.suspense.unmount(n,r);return}h&&ni(e,null,t,"beforeUnmount"),64&f?e.type.remove(e,t,n,l,ep,r):c&&// #1153: fast path should not be taken for non-stable (v-for) fragments
(i!==ra||p>0&&64&p)?es(c,t,n,!1,!0):(i===ra&&384&p||!l&&16&f)&&es(u,t,n),r&&eo(e)}(g&&(o=a&&a.onVnodeUnmounted)||h)&&rl(()=>{o&&rw(o,t,e),h&&ni(e,null,t,"unmounted")},n)},eo=e=>{let{type:t,el:n,anchor:r,transition:l}=e;if(t===ra){ei(n,r);return}if(t===rc){T(e);return}let o=()=>{s(n),l&&!l.persisted&&l.afterLeave&&l.afterLeave()};if(1&e.shapeFlag&&l&&!l.persisted){let{leave:t,delayLeave:r}=l,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},ei=(e,t)=>{let n;for(;e!==t;)n=m(e),s(e),e=n;s(t)},ea=(e,t,n)=>{let{bum:r,scope:l,update:o,subTree:i,um:a}=e;r&&ee(r),l.stop(),o&&(o.active=!1,er(i,e,t,n)),a&&rl(a,t),rl(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve()),__VUE_PROD_DEVTOOLS__&&tZ(e)},es=(e,t,n,r=!1,l=!1,o=0)=>{for(let i=o;i<e.length;i++)er(e[i],t,n,r,l)},eu=e=>6&e.shapeFlag?eu(e.component.subTree):128&e.shapeFlag?e.suspense.next():m(e.anchor||e.el),ec=(e,t,n)=>{null==e?t._vnode&&er(t._vnode,null,null,!0):b(t._vnode||null,e,t,null,null,null,n),tW(),tH(),t._vnode=e},ep={p:b,um:er,m:en,r:eo,mt:H,mc:j,pc:X,pbc:N,n:eu,o:e};return t&&([l,o]=t(ep)),{render:ec,hydrate:l,createApp:(n=l,function(e,t=null){$(e)||(e=P({},e)),null==t||F(t)||(t=null);let r=nX(),l=/* @__PURE__ */new Set,o=!1,i=r.app={_uid:nJ++,_component:e,_props:t,_container:null,_context:r,_instance:null,version:rN,get config(){return r.config},set config(v){},use:(e,...t)=>(l.has(e)||(e&&$(e.install)?(l.add(e),e.install(i,...t)):$(e)&&(l.add(e),e(i,...t))),i),mixin:e=>(__VUE_OPTIONS_API__&&!r.mixins.includes(e)&&r.mixins.push(e),i),component:(e,t)=>t?(r.components[e]=t,i):r.components[e],directive:(e,t)=>t?(r.directives[e]=t,i):r.directives[e],mount(l,a,s){if(!o){let u=r_(e,t);return u.appContext=r,a&&n?n(u,l):ec(u,l,s),o=!0,i._container=l,l.__vue_app__=i,__VUE_PROD_DEVTOOLS__&&(i._instance=u.component,tQ("app:init"/* APP_INIT */,i,rN,{Fragment:ra,Text:rs,Comment:ru,Static:rc})),r$(u.component)||u.component.proxy}},unmount(){o&&(ec(null,i._container),__VUE_PROD_DEVTOOLS__&&(i._instance=null,tQ("app:unmount"/* APP_UNMOUNT */,i)),delete i._container.__vue_app__)},provide:(e,t)=>(r.provides[e]=t,i),runWithContext(e){nZ=i;try{return e()}finally{nZ=null}}};return i})}}(ld))).createApp(...e),{mount:n}=t;return t.mount=e=>{let r=function(e){if(j(e)){let t=document.querySelector(e);return t}return e}(e);if(!r)return;let l=t._component;$(l)||l.render||l.template||(l.template=r.innerHTML),r.innerHTML="";let o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t})({});oT.use(oP),oT.mount("#app");//# sourceMappingURL=index.81d04770.js.map

//# sourceMappingURL=index.81d04770.js.map
