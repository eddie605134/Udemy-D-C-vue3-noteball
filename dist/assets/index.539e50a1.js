const ub=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};ub();function Wl(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const db="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fb=Wl(db);function qf(t){return!!t||t===""}function Ql(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Be(i)?pb(i):Ql(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Be(t))return t;if(ze(t))return t}}const hb=/;(?![^(]*\))/g,mb=/:(.+)/;function pb(t){const e={};return t.split(hb).forEach(n=>{if(n){const i=n.split(mb);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function kn(t){let e="";if(Be(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const i=kn(t[n]);i&&(e+=i+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yt=t=>Be(t)?t:t==null?"":K(t)||ze(t)&&(t.toString===Wf||!Z(t.toString))?JSON.stringify(t,Hf,2):String(t),Hf=(t,e)=>e&&e.__v_isRef?Hf(t,e.value):_i(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Gf(e)?{[`Set(${e.size})`]:[...e.values()]}:ze(e)&&!K(e)&&!Qf(e)?String(e):e,we={},xi=[],Dt=()=>{},gb=()=>!1,bb=/^on[^a-z]/,To=t=>bb.test(t),Yl=t=>t.startsWith("onUpdate:"),tt=Object.assign,Xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vb=Object.prototype.hasOwnProperty,ae=(t,e)=>vb.call(t,e),K=Array.isArray,_i=t=>So(t)==="[object Map]",Gf=t=>So(t)==="[object Set]",Z=t=>typeof t=="function",Be=t=>typeof t=="string",Jl=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",Kf=t=>ze(t)&&Z(t.then)&&Z(t.catch),Wf=Object.prototype.toString,So=t=>Wf.call(t),wb=t=>So(t).slice(8,-1),Qf=t=>So(t)==="[object Object]",Zl=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ms=Wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Co=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yb=/-(\w)/g,jt=Co(t=>t.replace(yb,(e,n)=>n?n.toUpperCase():"")),kb=/\B([A-Z])/g,ji=Co(t=>t.replace(kb,"-$1").toLowerCase()),Ao=Co(t=>t.charAt(0).toUpperCase()+t.slice(1)),ya=Co(t=>t?`on${Ao(t)}`:""),Ir=(t,e)=>!Object.is(t,e),Ls=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ws=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Du;const xb=()=>Du||(Du=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let wt;class Yf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&wt&&(this.parent=wt,this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){wt=this}off(){wt=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Xf(t){return new Yf(t)}function _b(t,e=wt){e&&e.active&&e.effects.push(t)}function Eb(){return wt}function Ib(t){wt&&wt.cleanups.push(t)}const ec=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Jf=t=>(t.w&xn)>0,Zf=t=>(t.n&xn)>0,Tb=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=xn},Sb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Jf(r)&&!Zf(r)?r.delete(t):e[n++]=r,r.w&=~xn,r.n&=~xn}e.length=n}},Ya=new WeakMap;let sr=0,xn=1;const Xa=30;let Rt;const jn=Symbol(""),Ja=Symbol("");class tc{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_b(this,i)}run(){if(!this.active)return this.fn();let e=Rt,n=gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Rt,Rt=this,gn=!0,xn=1<<++sr,sr<=Xa?Tb(this):Ou(this),this.fn()}finally{sr<=Xa&&Sb(this),xn=1<<--sr,Rt=this.parent,gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rt===this?this.deferStop=!0:this.active&&(Ou(this),this.onStop&&this.onStop(),this.active=!1)}}function Ou(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gn=!0;const eh=[];function Bi(){eh.push(gn),gn=!1}function qi(){const t=eh.pop();gn=t===void 0?!0:t}function xt(t,e,n){if(gn&&Rt){let i=Ya.get(t);i||Ya.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=ec()),th(r)}}function th(t,e){let n=!1;sr<=Xa?Zf(t)||(t.n|=xn,n=!Jf(t)):n=!t.has(Rt),n&&(t.add(Rt),Rt.deps.push(t))}function Zt(t,e,n,i,r,s){const o=Ya.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?Zl(n)&&a.push(o.get("length")):(a.push(o.get(jn)),_i(t)&&a.push(o.get(Ja)));break;case"delete":K(t)||(a.push(o.get(jn)),_i(t)&&a.push(o.get(Ja)));break;case"set":_i(t)&&a.push(o.get(jn));break}if(a.length===1)a[0]&&Za(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Za(ec(l))}}function Za(t,e){const n=K(t)?t:[...t];for(const i of n)i.computed&&Pu(i);for(const i of n)i.computed||Pu(i)}function Pu(t,e){(t!==Rt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Cb=Wl("__proto__,__v_isRef,__isVue"),nh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jl)),Ab=nc(),Rb=nc(!1,!0),Nb=nc(!0),Mu=Db();function Db(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ce(this);for(let s=0,o=this.length;s<o;s++)xt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(ce)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Bi();const i=ce(this)[e].apply(this,n);return qi(),i}}),t}function nc(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?Wb:ah:e?oh:sh).get(i))return i;const o=K(i);if(!t&&o&&ae(Mu,r))return Reflect.get(Mu,r,s);const a=Reflect.get(i,r,s);return(Jl(r)?nh.has(r):Cb(r))||(t||xt(i,"get",r),e)?a:Se(a)?o&&Zl(r)?a:a.value:ze(a)?t?lh(a):Cn(a):a}}const Ob=ih(),Pb=ih(!0);function ih(t=!1){return function(n,i,r,s){let o=n[i];if(Tr(o)&&Se(o)&&!Se(r))return!1;if(!t&&!Tr(r)&&(el(r)||(r=ce(r),o=ce(o)),!K(n)&&Se(o)&&!Se(r)))return o.value=r,!0;const a=K(n)&&Zl(i)?Number(i)<n.length:ae(n,i),l=Reflect.set(n,i,r,s);return n===ce(s)&&(a?Ir(r,o)&&Zt(n,"set",i,r):Zt(n,"add",i,r)),l}}function Mb(t,e){const n=ae(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Zt(t,"delete",e,void 0),i}function Lb(t,e){const n=Reflect.has(t,e);return(!Jl(e)||!nh.has(e))&&xt(t,"has",e),n}function Fb(t){return xt(t,"iterate",K(t)?"length":jn),Reflect.ownKeys(t)}const rh={get:Ab,set:Ob,deleteProperty:Mb,has:Lb,ownKeys:Fb},Ub={get:Nb,set(t,e){return!0},deleteProperty(t,e){return!0}},zb=tt({},rh,{get:Rb,set:Pb}),ic=t=>t,Ro=t=>Reflect.getPrototypeOf(t);function xs(t,e,n=!1,i=!1){t=t.__v_raw;const r=ce(t),s=ce(e);n||(e!==s&&xt(r,"get",e),xt(r,"get",s));const{has:o}=Ro(r),a=i?ic:n?oc:Sr;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function _s(t,e=!1){const n=this.__v_raw,i=ce(n),r=ce(t);return e||(t!==r&&xt(i,"has",t),xt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Es(t,e=!1){return t=t.__v_raw,!e&&xt(ce(t),"iterate",jn),Reflect.get(t,"size",t)}function Lu(t){t=ce(t);const e=ce(this);return Ro(e).has.call(e,t)||(e.add(t),Zt(e,"add",t,t)),this}function Fu(t,e){e=ce(e);const n=ce(this),{has:i,get:r}=Ro(n);let s=i.call(n,t);s||(t=ce(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Ir(e,o)&&Zt(n,"set",t,e):Zt(n,"add",t,e),this}function Uu(t){const e=ce(this),{has:n,get:i}=Ro(e);let r=n.call(e,t);r||(t=ce(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Zt(e,"delete",t,void 0),s}function zu(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&Zt(t,"clear",void 0,void 0),n}function Is(t,e){return function(i,r){const s=this,o=s.__v_raw,a=ce(o),l=e?ic:t?oc:Sr;return!t&&xt(a,"iterate",jn),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ts(t,e,n){return function(...i){const r=this.__v_raw,s=ce(r),o=_i(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?ic:e?oc:Sr;return!e&&xt(s,"iterate",l?Ja:jn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function sn(t){return function(...e){return t==="delete"?!1:this}}function Vb(){const t={get(s){return xs(this,s)},get size(){return Es(this)},has:_s,add:Lu,set:Fu,delete:Uu,clear:zu,forEach:Is(!1,!1)},e={get(s){return xs(this,s,!1,!0)},get size(){return Es(this)},has:_s,add:Lu,set:Fu,delete:Uu,clear:zu,forEach:Is(!1,!0)},n={get(s){return xs(this,s,!0)},get size(){return Es(this,!0)},has(s){return _s.call(this,s,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Is(!0,!1)},i={get(s){return xs(this,s,!0,!0)},get size(){return Es(this,!0)},has(s){return _s.call(this,s,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:Is(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ts(s,!1,!1),n[s]=Ts(s,!0,!1),e[s]=Ts(s,!1,!0),i[s]=Ts(s,!0,!0)}),[t,n,e,i]}const[$b,jb,Bb,qb]=Vb();function rc(t,e){const n=e?t?qb:Bb:t?jb:$b;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ae(n,r)&&r in i?n:i,r,s)}const Hb={get:rc(!1,!1)},Gb={get:rc(!1,!0)},Kb={get:rc(!0,!1)},sh=new WeakMap,oh=new WeakMap,ah=new WeakMap,Wb=new WeakMap;function Qb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yb(t){return t.__v_skip||!Object.isExtensible(t)?0:Qb(wb(t))}function Cn(t){return Tr(t)?t:sc(t,!1,rh,Hb,sh)}function Xb(t){return sc(t,!1,zb,Gb,oh)}function lh(t){return sc(t,!0,Ub,Kb,ah)}function sc(t,e,n,i,r){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Yb(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Xt(t){return Tr(t)?Xt(t.__v_raw):!!(t&&t.__v_isReactive)}function Tr(t){return!!(t&&t.__v_isReadonly)}function el(t){return!!(t&&t.__v_isShallow)}function ch(t){return Xt(t)||Tr(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Yn(t){return Ws(t,"__v_skip",!0),t}const Sr=t=>ze(t)?Cn(t):t,oc=t=>ze(t)?lh(t):t;function uh(t){gn&&Rt&&(t=ce(t),th(t.dep||(t.dep=ec())))}function dh(t,e){t=ce(t),t.dep&&Za(t.dep)}function Se(t){return!!(t&&t.__v_isRef===!0)}function pt(t){return fh(t,!1)}function Jb(t){return fh(t,!0)}function fh(t,e){return Se(t)?t:new Zb(t,e)}class Zb{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:Sr(e)}get value(){return uh(this),this._value}set value(e){e=this.__v_isShallow?e:ce(e),Ir(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Sr(e),dh(this))}}function Ce(t){return Se(t)?t.value:t}const ev={get:(t,e,n)=>Ce(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function hh(t){return Xt(t)?t:new Proxy(t,ev)}function tv(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=mh(t,n);return e}class nv{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function mh(t,e,n){const i=t[e];return Se(i)?i:new nv(t,e,n)}class iv{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new tc(e,()=>{this._dirty||(this._dirty=!0,dh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ce(this);return uh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function rv(t,e,n=!1){let i,r;const s=Z(t);return s?(i=t,r=Dt):(i=t.get,r=t.set),new iv(i,r,s||!r,n)}function bn(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){No(s,e,n)}return r}function Tt(t,e,n,i){if(Z(t)){const s=bn(t,e,n,i);return s&&Kf(s)&&s.catch(o=>{No(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(Tt(t[s],e,n,i));return r}function No(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){bn(l,null,10,[t,o,a]);return}}sv(t,n,r,i)}function sv(t,e,n,i=!0){console.error(t)}let Qs=!1,tl=!1;const yt=[];let Gt=0;const fr=[];let or=null,pi=0;const hr=[];let cn=null,gi=0;const ph=Promise.resolve();let ac=null,nl=null;function lc(t){const e=ac||ph;return t?e.then(this?t.bind(this):t):e}function ov(t){let e=Gt+1,n=yt.length;for(;e<n;){const i=e+n>>>1;Cr(yt[i])<t?e=i+1:n=i}return e}function gh(t){(!yt.length||!yt.includes(t,Qs&&t.allowRecurse?Gt+1:Gt))&&t!==nl&&(t.id==null?yt.push(t):yt.splice(ov(t.id),0,t),bh())}function bh(){!Qs&&!tl&&(tl=!0,ac=ph.then(yh))}function av(t){const e=yt.indexOf(t);e>Gt&&yt.splice(e,1)}function vh(t,e,n,i){K(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),bh()}function lv(t){vh(t,or,fr,pi)}function cv(t){vh(t,cn,hr,gi)}function Do(t,e=null){if(fr.length){for(nl=e,or=[...new Set(fr)],fr.length=0,pi=0;pi<or.length;pi++)or[pi]();or=null,pi=0,nl=null,Do(t,e)}}function wh(t){if(Do(),hr.length){const e=[...new Set(hr)];if(hr.length=0,cn){cn.push(...e);return}for(cn=e,cn.sort((n,i)=>Cr(n)-Cr(i)),gi=0;gi<cn.length;gi++)cn[gi]();cn=null,gi=0}}const Cr=t=>t.id==null?1/0:t.id;function yh(t){tl=!1,Qs=!0,Do(t),yt.sort((n,i)=>Cr(n)-Cr(i));const e=Dt;try{for(Gt=0;Gt<yt.length;Gt++){const n=yt[Gt];n&&n.active!==!1&&bn(n,null,14)}}finally{Gt=0,yt.length=0,wh(),Qs=!1,ac=null,(yt.length||fr.length||hr.length)&&yh(t)}}function uv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||we;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=i[u]||we;f&&(r=n.map(p=>p.trim())),d&&(r=n.map(Qa))}let a,l=i[a=ya(e)]||i[a=ya(jt(e))];!l&&s&&(l=i[a=ya(ji(e))]),l&&Tt(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Tt(c,t,6,r)}}function kh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Z(t)){const l=c=>{const u=kh(c,e,!0);u&&(a=!0,tt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(i.set(t,null),null):(K(s)?s.forEach(l=>o[l]=null):tt(o,s),i.set(t,o),o)}function Oo(t,e){return!t||!To(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,ji(e))||ae(t,e))}let Ze=null,xh=null;function Ys(t){const e=Ze;return Ze=t,xh=t&&t.type.__scopeId||null,e}function Ar(t,e=Ze,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Yu(-1);const s=Ys(e),o=t(...r);return Ys(s),i._d&&Yu(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function ka(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:p,ctx:g,inheritAttrs:x}=t;let y,S;const P=Ys(t);try{if(n.shapeFlag&4){const Q=r||i;y=zt(u.call(Q,Q,d,s,p,f,g)),S=l}else{const Q=e;y=zt(Q.length>1?Q(s,{attrs:l,slots:a,emit:c}):Q(s,null)),S=e.props?l:dv(l)}}catch(Q){pr.length=0,No(Q,t,1),y=Ne(St)}let q=y;if(S&&x!==!1){const Q=Object.keys(S),{shapeFlag:te}=q;Q.length&&te&7&&(o&&Q.some(Yl)&&(S=fv(S,o)),q=_n(q,S))}return n.dirs&&(q=_n(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),y=q,Ys(P),y}const dv=t=>{let e;for(const n in t)(n==="class"||n==="style"||To(n))&&((e||(e={}))[n]=t[n]);return e},fv=(t,e)=>{const n={};for(const i in t)(!Yl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function hv(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Vu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!Oo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vu(i,o,c):!0:!!o;return!1}function Vu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Oo(n,s))return!0}return!1}function mv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const pv=t=>t.__isSuspense;function gv(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):cv(t)}function Fs(t,e){if(je){let n=je.provides;const i=je.parent&&je.parent.provides;i===n&&(n=je.provides=Object.create(i)),n[t]=e}}function Ot(t,e,n=!1){const i=je||Ze;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(i.proxy):e}}const $u={};function Bn(t,e,n){return _h(t,e,n)}function _h(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=we){const a=je;let l,c=!1,u=!1;if(Se(t)?(l=()=>t.value,c=el(t)):Xt(t)?(l=()=>t,i=!0):K(t)?(u=!0,c=t.some(S=>Xt(S)||el(S)),l=()=>t.map(S=>{if(Se(S))return S.value;if(Xt(S))return Un(S);if(Z(S))return bn(S,a,2)})):Z(t)?e?l=()=>bn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Tt(t,a,3,[f])}:l=Dt,e&&i){const S=l;l=()=>Un(S())}let d,f=S=>{d=y.onStop=()=>{bn(S,a,4)}};if(Nr)return f=Dt,e?n&&Tt(e,a,3,[l(),u?[]:void 0,f]):l(),Dt;let p=u?[]:$u;const g=()=>{if(!!y.active)if(e){const S=y.run();(i||c||(u?S.some((P,q)=>Ir(P,p[q])):Ir(S,p)))&&(d&&d(),Tt(e,a,3,[S,p===$u?void 0:p,f]),p=S)}else y.run()};g.allowRecurse=!!e;let x;r==="sync"?x=g:r==="post"?x=()=>dt(g,a&&a.suspense):x=()=>lv(g);const y=new tc(l,x);return e?n?g():p=y.run():r==="post"?dt(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&Xl(a.scope.effects,y)}}function bv(t,e,n){const i=this.proxy,r=Be(t)?t.includes(".")?Eh(i,t):()=>i[t]:t.bind(i,i);let s;Z(e)?s=e:(s=e.handler,n=e);const o=je;Ai(this);const a=_h(r,s.bind(i),n);return o?Ai(o):qn(),a}function Eh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Un(t,e){if(!ze(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Se(t))Un(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)Un(t[n],e);else if(Gf(t)||_i(t))t.forEach(n=>{Un(n,e)});else if(Qf(t))for(const n in t)Un(t[n],e);return t}function vv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Lo(()=>{t.isMounted=!0}),Ah(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],wv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},setup(t,{slots:e}){const n=hc(),i=vv();let r;return()=>{const s=e.default&&Th(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const x of s)if(x.type!==St){o=x;break}}const a=ce(t),{mode:l}=a;if(i.isLeaving)return xa(o);const c=ju(o);if(!c)return xa(o);const u=il(c,a,i,n);rl(c,u);const d=n.subTree,f=d&&ju(d);let p=!1;const{getTransitionKey:g}=c.type;if(g){const x=g();r===void 0?r=x:x!==r&&(r=x,p=!0)}if(f&&f.type!==St&&(!Ln(c,f)||p)){const x=il(f,a,i,n);if(rl(f,x),l==="out-in")return i.isLeaving=!0,x.afterLeave=()=>{i.isLeaving=!1,n.update()},xa(o);l==="in-out"&&c.type!==St&&(x.delayLeave=(y,S,P)=>{const q=Ih(i,f);q[String(f.key)]=f,y._leaveCb=()=>{S(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},yv=wv;function Ih(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function il(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:x,onAppear:y,onAfterAppear:S,onAppearCancelled:P}=e,q=String(t.key),Q=Ih(n,t),te=(M,ne)=>{M&&Tt(M,i,9,ne)},he=(M,ne)=>{const ue=ne[1];te(M,ne),K(M)?M.every(Te=>Te.length<=1)&&ue():M.length<=1&&ue()},J={mode:s,persisted:o,beforeEnter(M){let ne=a;if(!n.isMounted)if(r)ne=x||a;else return;M._leaveCb&&M._leaveCb(!0);const ue=Q[q];ue&&Ln(t,ue)&&ue.el._leaveCb&&ue.el._leaveCb(),te(ne,[M])},enter(M){let ne=l,ue=c,Te=u;if(!n.isMounted)if(r)ne=y||l,ue=S||c,Te=P||u;else return;let Oe=!1;const gt=M._enterCb=ut=>{Oe||(Oe=!0,ut?te(Te,[M]):te(ue,[M]),J.delayedLeave&&J.delayedLeave(),M._enterCb=void 0)};ne?he(ne,[M,gt]):gt()},leave(M,ne){const ue=String(t.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return ne();te(d,[M]);let Te=!1;const Oe=M._leaveCb=gt=>{Te||(Te=!0,ne(),gt?te(g,[M]):te(p,[M]),M._leaveCb=void 0,Q[ue]===t&&delete Q[ue])};Q[ue]=t,f?he(f,[M,Oe]):Oe()},clone(M){return il(M,e,n,i)}};return J}function xa(t){if(Po(t))return t=_n(t),t.children=null,t}function ju(t){return Po(t)?t.children?t.children[0]:void 0:t}function rl(t,e){t.shapeFlag&6&&t.component?rl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Th(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===rt?(o.patchFlag&128&&r++,i=i.concat(Th(o.children,e,a))):(e||o.type!==St)&&i.push(a!=null?_n(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Sh(t){return Z(t)?{setup:t,name:t.name}:t}const mr=t=>!!t.type.__asyncLoader,Po=t=>t.type.__isKeepAlive;function kv(t,e){Ch(t,"a",e)}function xv(t,e){Ch(t,"da",e)}function Ch(t,e,n=je){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Mo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Po(r.parent.vnode)&&_v(i,e,n,r),r=r.parent}}function _v(t,e,n,i){const r=Mo(e,t,i,!0);Fo(()=>{Xl(i[e],r)},n)}function Mo(t,e,n=je,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Bi(),Ai(n);const a=Tt(e,n,t,o);return qn(),qi(),a});return i?r.unshift(s):r.push(s),s}}const rn=t=>(e,n=je)=>(!Nr||t==="sp")&&Mo(t,e,n),Ev=rn("bm"),Lo=rn("m"),Iv=rn("bu"),Tv=rn("u"),Ah=rn("bum"),Fo=rn("um"),Sv=rn("sp"),Cv=rn("rtg"),Av=rn("rtc");function Rv(t,e=je){Mo("ec",t,e)}function Xs(t,e){const n=Ze;if(n===null)return t;const i=$o(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=we]=e[s];Z(o)&&(o={mounted:o,updated:o}),o.deep&&Un(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Dn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Bi(),Tt(l,n,8,[t.el,a,t,e]),qi())}}const Rh="components";function cc(t,e){return Dv(Rh,t,!0,e)||t}const Nv=Symbol();function Dv(t,e,n=!0,i=!1){const r=Ze||je;if(r){const s=r.type;if(t===Rh){const a=c0(s,!1);if(a&&(a===e||a===jt(e)||a===Ao(jt(e))))return s}const o=Bu(r[t]||s[t],e)||Bu(r.appContext[t],e);return!o&&i?s:o}}function Bu(t,e){return t&&(t[e]||t[jt(e)]||t[Ao(jt(e))])}function Ov(t,e,n,i){let r;const s=n&&n[i];if(K(t)||Be(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(ze(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}function Pv(t,e,n={},i,r){if(Ze.isCE||Ze.parent&&mr(Ze.parent)&&Ze.parent.isCE)return Ne("slot",e==="default"?null:{name:e},i&&i());let s=t[e];s&&s._c&&(s._d=!1),Le();const o=s&&Nh(s(n)),a=Uo(rt,{key:n.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Nh(t){return t.some(e=>eo(e)?!(e.type===St||e.type===rt&&!Nh(e.children)):!0)?t:null}const sl=t=>t?Bh(t)?$o(t)||t.proxy:sl(t.parent):null,Js=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sl(t.parent),$root:t=>sl(t.root),$emit:t=>t.emit,$options:t=>Oh(t),$forceUpdate:t=>t.f||(t.f=()=>gh(t.update)),$nextTick:t=>t.n||(t.n=lc.bind(t.proxy)),$watch:t=>bv.bind(t)}),Mv={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(i!==we&&ae(i,e))return o[e]=1,i[e];if(r!==we&&ae(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ae(c,e))return o[e]=3,s[e];if(n!==we&&ae(n,e))return o[e]=4,n[e];ol&&(o[e]=0)}}const u=Js[e];let d,f;if(u)return e==="$attrs"&&xt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==we&&ae(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ae(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==we&&ae(r,e)?(r[e]=n,!0):i!==we&&ae(i,e)?(i[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==we&&ae(t,o)||e!==we&&ae(e,o)||(a=s[0])&&ae(a,o)||ae(i,o)||ae(Js,o)||ae(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ol=!0;function Lv(t){const e=Oh(t),n=t.proxy,i=t.ctx;ol=!1,e.beforeCreate&&qu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:x,deactivated:y,beforeDestroy:S,beforeUnmount:P,destroyed:q,unmounted:Q,render:te,renderTracked:he,renderTriggered:J,errorCaptured:M,serverPrefetch:ne,expose:ue,inheritAttrs:Te,components:Oe,directives:gt,filters:ut}=e;if(c&&Fv(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ye in o){const me=o[ye];Z(me)&&(i[ye]=me.bind(n))}if(r){const ye=r.call(n,n);ze(ye)&&(t.data=Cn(ye))}if(ol=!0,s)for(const ye in s){const me=s[ye],bt=Z(me)?me.bind(n,n):Z(me.get)?me.get.bind(n,n):Dt,ui=!Z(me)&&Z(me.set)?me.set.bind(n):Dt,qt=lt({get:bt,set:ui});Object.defineProperty(i,ye,{enumerable:!0,configurable:!0,get:()=>qt.value,set:Lt=>qt.value=Lt})}if(a)for(const ye in a)Dh(a[ye],i,n,ye);if(l){const ye=Z(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(me=>{Fs(me,ye[me])})}u&&qu(u,t,"c");function Me(ye,me){K(me)?me.forEach(bt=>ye(bt.bind(n))):me&&ye(me.bind(n))}if(Me(Ev,d),Me(Lo,f),Me(Iv,p),Me(Tv,g),Me(kv,x),Me(xv,y),Me(Rv,M),Me(Av,he),Me(Cv,J),Me(Ah,P),Me(Fo,Q),Me(Sv,ne),K(ue))if(ue.length){const ye=t.exposed||(t.exposed={});ue.forEach(me=>{Object.defineProperty(ye,me,{get:()=>n[me],set:bt=>n[me]=bt})})}else t.exposed||(t.exposed={});te&&t.render===Dt&&(t.render=te),Te!=null&&(t.inheritAttrs=Te),Oe&&(t.components=Oe),gt&&(t.directives=gt)}function Fv(t,e,n=Dt,i=!1){K(t)&&(t=al(t));for(const r in t){const s=t[r];let o;ze(s)?"default"in s?o=Ot(s.from||r,s.default,!0):o=Ot(s.from||r):o=Ot(s),Se(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function qu(t,e,n){Tt(K(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Dh(t,e,n,i){const r=i.includes(".")?Eh(n,i):()=>n[i];if(Be(t)){const s=e[t];Z(s)&&Bn(r,s)}else if(Z(t))Bn(r,t.bind(n));else if(ze(t))if(K(t))t.forEach(s=>Dh(s,e,n,i));else{const s=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(s)&&Bn(r,s,t)}}function Oh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Zs(l,c,o,!0)),Zs(l,e,o)),s.set(e,l),l}function Zs(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Zs(t,s,n,!0),r&&r.forEach(o=>Zs(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Uv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Uv={data:Hu,props:Pn,emits:Pn,methods:Pn,computed:Pn,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Pn,directives:Pn,watch:Vv,provide:Hu,inject:zv};function Hu(t,e){return e?t?function(){return tt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function zv(t,e){return Pn(al(t),al(e))}function al(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Pn(t,e){return t?tt(tt(Object.create(null),t),e):e}function Vv(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const i in e)n[i]=it(t[i],e[i]);return n}function $v(t,e,n,i=!1){const r={},s={};Ws(s,zo,1),t.propsDefaults=Object.create(null),Ph(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Xb(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function jv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ce(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Oo(t.emitsOptions,f))continue;const p=e[f];if(l)if(ae(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=jt(f);r[g]=ll(l,a,g,p,t,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Ph(t,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!ae(e,d)&&((u=ji(d))===d||!ae(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=ll(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!ae(e,d)&&!0)&&(delete s[d],c=!0)}c&&Zt(t,"set","$attrs")}function Ph(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ms(l))continue;const c=e[l];let u;r&&ae(r,u=jt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Oo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ce(n),c=a||we;for(let u=0;u<s.length;u++){const d=s[u];n[d]=ll(r,l,d,c[d],t,!ae(c,d))}}return o}function ll(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Z(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Ai(r),i=c[n]=l.call(null,e),qn())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ji(n))&&(i=!0))}return i}function Mh(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Z(t)){const u=d=>{l=!0;const[f,p]=Mh(d,e,!0);tt(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return i.set(t,xi),xi;if(K(s))for(let u=0;u<s.length;u++){const d=jt(s[u]);Gu(d)&&(o[d]=we)}else if(s)for(const u in s){const d=jt(u);if(Gu(d)){const f=s[u],p=o[d]=K(f)||Z(f)?{type:f}:f;if(p){const g=Qu(Boolean,p.type),x=Qu(String,p.type);p[0]=g>-1,p[1]=x<0||g<x,(g>-1||ae(p,"default"))&&a.push(d)}}}const c=[o,a];return i.set(t,c),c}function Gu(t){return t[0]!=="$"}function Ku(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Wu(t,e){return Ku(t)===Ku(e)}function Qu(t,e){return K(e)?e.findIndex(n=>Wu(n,t)):Z(e)&&Wu(e,t)?0:-1}const Lh=t=>t[0]==="_"||t==="$stable",uc=t=>K(t)?t.map(zt):[zt(t)],Bv=(t,e,n)=>{if(e._n)return e;const i=Ar((...r)=>uc(e(...r)),n);return i._c=!1,i},Fh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Lh(r))continue;const s=t[r];if(Z(s))e[r]=Bv(r,s,i);else if(s!=null){const o=uc(s);e[r]=()=>o}}},Uh=(t,e)=>{const n=uc(e);t.slots.default=()=>n},qv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),Ws(e,"_",n)):Fh(e,t.slots={})}else t.slots={},e&&Uh(t,e);Ws(t.slots,zo,1)},Hv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=we;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(tt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Fh(e,r)),o=e}else e&&(Uh(t,e),o={default:1});if(s)for(const a in r)!Lh(a)&&!(a in o)&&delete r[a]};function zh(){return{app:null,config:{isNativeTag:gb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gv=0;function Kv(t,e){return function(i,r=null){Z(i)||(i=Object.assign({},i)),r!=null&&!ze(r)&&(r=null);const s=zh(),o=new Set;let a=!1;const l=s.app={_uid:Gv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:d0,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(l,...u)):Z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const f=Ne(i,r);return f.appContext=s,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,$o(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function cl(t,e,n,i,r=!1){if(K(t)){t.forEach((f,p)=>cl(f,e&&(K(e)?e[p]:e),n,i,r));return}if(mr(i)&&!r)return;const s=i.shapeFlag&4?$o(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===we?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Be(c)?(u[c]=null,ae(d,c)&&(d[c]=null)):Se(c)&&(c.value=null)),Z(l))bn(l,a,12,[o,u]);else{const f=Be(l),p=Se(l);if(f||p){const g=()=>{if(t.f){const x=f?u[l]:l.value;r?K(x)&&Xl(x,s):K(x)?x.includes(s)||x.push(s):f?(u[l]=[s],ae(d,l)&&(d[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,ae(d,l)&&(d[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,dt(g,n)):g()}}}const dt=gv;function Wv(t){return Qv(t)}function Qv(t,e){const n=xb();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Dt,cloneNode:g,insertStaticContent:x}=t,y=(h,m,b,k=null,w=null,C=null,D=!1,T=null,A=!!m.dynamicChildren)=>{if(h===m)return;h&&!Ln(h,m)&&(k=z(h),Et(h,w,C,!0),h=null),m.patchFlag===-2&&(A=!1,m.dynamicChildren=null);const{type:_,ref:V,shapeFlag:L}=m;switch(_){case dc:S(h,m,b,k);break;case St:P(h,m,b,k);break;case _a:h==null&&q(m,b,k,D);break;case rt:gt(h,m,b,k,w,C,D,T,A);break;default:L&1?he(h,m,b,k,w,C,D,T,A):L&6?ut(h,m,b,k,w,C,D,T,A):(L&64||L&128)&&_.process(h,m,b,k,w,C,D,T,A,ke)}V!=null&&w&&cl(V,h&&h.ref,C,m||h,!m)},S=(h,m,b,k)=>{if(h==null)i(m.el=a(m.children),b,k);else{const w=m.el=h.el;m.children!==h.children&&c(w,m.children)}},P=(h,m,b,k)=>{h==null?i(m.el=l(m.children||""),b,k):m.el=h.el},q=(h,m,b,k)=>{[h.el,h.anchor]=x(h.children,m,b,k,h.el,h.anchor)},Q=({el:h,anchor:m},b,k)=>{let w;for(;h&&h!==m;)w=f(h),i(h,b,k),h=w;i(m,b,k)},te=({el:h,anchor:m})=>{let b;for(;h&&h!==m;)b=f(h),r(h),h=b;r(m)},he=(h,m,b,k,w,C,D,T,A)=>{D=D||m.type==="svg",h==null?J(m,b,k,w,C,D,T,A):ue(h,m,w,C,D,T,A)},J=(h,m,b,k,w,C,D,T)=>{let A,_;const{type:V,props:L,shapeFlag:$,transition:W,patchFlag:le,dirs:ge}=h;if(h.el&&g!==void 0&&le===-1)A=h.el=g(h.el);else{if(A=h.el=o(h.type,C,L&&L.is,L),$&8?u(A,h.children):$&16&&ne(h.children,A,null,k,w,C&&V!=="foreignObject",D,T),ge&&Dn(h,null,k,"created"),L){for(const _e in L)_e!=="value"&&!Ms(_e)&&s(A,_e,null,L[_e],C,h.children,k,w,R);"value"in L&&s(A,"value",null,L.value),(_=L.onVnodeBeforeMount)&&Ut(_,k,h)}M(A,h,h.scopeId,D,k)}ge&&Dn(h,null,k,"beforeMount");const be=(!w||w&&!w.pendingBranch)&&W&&!W.persisted;be&&W.beforeEnter(A),i(A,m,b),((_=L&&L.onVnodeMounted)||be||ge)&&dt(()=>{_&&Ut(_,k,h),be&&W.enter(A),ge&&Dn(h,null,k,"mounted")},w)},M=(h,m,b,k,w)=>{if(b&&p(h,b),k)for(let C=0;C<k.length;C++)p(h,k[C]);if(w){let C=w.subTree;if(m===C){const D=w.vnode;M(h,D,D.scopeId,D.slotScopeIds,w.parent)}}},ne=(h,m,b,k,w,C,D,T,A=0)=>{for(let _=A;_<h.length;_++){const V=h[_]=T?un(h[_]):zt(h[_]);y(null,V,m,b,k,w,C,D,T)}},ue=(h,m,b,k,w,C,D)=>{const T=m.el=h.el;let{patchFlag:A,dynamicChildren:_,dirs:V}=m;A|=h.patchFlag&16;const L=h.props||we,$=m.props||we;let W;b&&On(b,!1),(W=$.onVnodeBeforeUpdate)&&Ut(W,b,m,h),V&&Dn(m,h,b,"beforeUpdate"),b&&On(b,!0);const le=w&&m.type!=="foreignObject";if(_?Te(h.dynamicChildren,_,T,b,k,le,C):D||bt(h,m,T,null,b,k,le,C,!1),A>0){if(A&16)Oe(T,m,L,$,b,k,w);else if(A&2&&L.class!==$.class&&s(T,"class",null,$.class,w),A&4&&s(T,"style",L.style,$.style,w),A&8){const ge=m.dynamicProps;for(let be=0;be<ge.length;be++){const _e=ge[be],At=L[_e],di=$[_e];(di!==At||_e==="value")&&s(T,_e,At,di,w,h.children,b,k,R)}}A&1&&h.children!==m.children&&u(T,m.children)}else!D&&_==null&&Oe(T,m,L,$,b,k,w);((W=$.onVnodeUpdated)||V)&&dt(()=>{W&&Ut(W,b,m,h),V&&Dn(m,h,b,"updated")},k)},Te=(h,m,b,k,w,C,D)=>{for(let T=0;T<m.length;T++){const A=h[T],_=m[T],V=A.el&&(A.type===rt||!Ln(A,_)||A.shapeFlag&70)?d(A.el):b;y(A,_,V,null,k,w,C,D,!0)}},Oe=(h,m,b,k,w,C,D)=>{if(b!==k){for(const T in k){if(Ms(T))continue;const A=k[T],_=b[T];A!==_&&T!=="value"&&s(h,T,_,A,D,m.children,w,C,R)}if(b!==we)for(const T in b)!Ms(T)&&!(T in k)&&s(h,T,b[T],null,D,m.children,w,C,R);"value"in k&&s(h,"value",b.value,k.value)}},gt=(h,m,b,k,w,C,D,T,A)=>{const _=m.el=h?h.el:a(""),V=m.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:$,slotScopeIds:W}=m;W&&(T=T?T.concat(W):W),h==null?(i(_,b,k),i(V,b,k),ne(m.children,b,V,w,C,D,T,A)):L>0&&L&64&&$&&h.dynamicChildren?(Te(h.dynamicChildren,$,b,w,C,D,T),(m.key!=null||w&&m===w.subTree)&&Vh(h,m,!0)):bt(h,m,b,V,w,C,D,T,A)},ut=(h,m,b,k,w,C,D,T,A)=>{m.slotScopeIds=T,h==null?m.shapeFlag&512?w.ctx.activate(m,b,k,D,A):Pe(m,b,k,w,C,D,A):Me(h,m,A)},Pe=(h,m,b,k,w,C,D)=>{const T=h.component=r0(h,k,w);if(Po(h)&&(T.ctx.renderer=ke),s0(T),T.asyncDep){if(w&&w.registerDep(T,ye),!h.el){const A=T.subTree=Ne(St);P(null,A,m,b)}return}ye(T,h,m,b,w,C,D)},Me=(h,m,b)=>{const k=m.component=h.component;if(hv(h,m,b))if(k.asyncDep&&!k.asyncResolved){me(k,m,b);return}else k.next=m,av(k.update),k.update();else m.el=h.el,k.vnode=m},ye=(h,m,b,k,w,C,D)=>{const T=()=>{if(h.isMounted){let{next:V,bu:L,u:$,parent:W,vnode:le}=h,ge=V,be;On(h,!1),V?(V.el=le.el,me(h,V,D)):V=le,L&&Ls(L),(be=V.props&&V.props.onVnodeBeforeUpdate)&&Ut(be,W,V,le),On(h,!0);const _e=ka(h),At=h.subTree;h.subTree=_e,y(At,_e,d(At.el),z(At),h,w,C),V.el=_e.el,ge===null&&mv(h,_e.el),$&&dt($,w),(be=V.props&&V.props.onVnodeUpdated)&&dt(()=>Ut(be,W,V,le),w)}else{let V;const{el:L,props:$}=m,{bm:W,m:le,parent:ge}=h,be=mr(m);if(On(h,!1),W&&Ls(W),!be&&(V=$&&$.onVnodeBeforeMount)&&Ut(V,ge,m),On(h,!0),L&&ee){const _e=()=>{h.subTree=ka(h),ee(L,h.subTree,h,w,null)};be?m.type.__asyncLoader().then(()=>!h.isUnmounted&&_e()):_e()}else{const _e=h.subTree=ka(h);y(null,_e,b,k,h,w,C),m.el=_e.el}if(le&&dt(le,w),!be&&(V=$&&$.onVnodeMounted)){const _e=m;dt(()=>Ut(V,ge,_e),w)}(m.shapeFlag&256||ge&&mr(ge.vnode)&&ge.vnode.shapeFlag&256)&&h.a&&dt(h.a,w),h.isMounted=!0,m=b=k=null}},A=h.effect=new tc(T,()=>gh(_),h.scope),_=h.update=()=>A.run();_.id=h.uid,On(h,!0),_()},me=(h,m,b)=>{m.component=h;const k=h.vnode.props;h.vnode=m,h.next=null,jv(h,m.props,k,b),Hv(h,m.children,b),Bi(),Do(void 0,h.update),qi()},bt=(h,m,b,k,w,C,D,T,A=!1)=>{const _=h&&h.children,V=h?h.shapeFlag:0,L=m.children,{patchFlag:$,shapeFlag:W}=m;if($>0){if($&128){qt(_,L,b,k,w,C,D,T,A);return}else if($&256){ui(_,L,b,k,w,C,D,T,A);return}}W&8?(V&16&&R(_,w,C),L!==_&&u(b,L)):V&16?W&16?qt(_,L,b,k,w,C,D,T,A):R(_,w,C,!0):(V&8&&u(b,""),W&16&&ne(L,b,k,w,C,D,T,A))},ui=(h,m,b,k,w,C,D,T,A)=>{h=h||xi,m=m||xi;const _=h.length,V=m.length,L=Math.min(_,V);let $;for($=0;$<L;$++){const W=m[$]=A?un(m[$]):zt(m[$]);y(h[$],W,b,null,w,C,D,T,A)}_>V?R(h,w,C,!0,!1,L):ne(m,b,k,w,C,D,T,A,L)},qt=(h,m,b,k,w,C,D,T,A)=>{let _=0;const V=m.length;let L=h.length-1,$=V-1;for(;_<=L&&_<=$;){const W=h[_],le=m[_]=A?un(m[_]):zt(m[_]);if(Ln(W,le))y(W,le,b,null,w,C,D,T,A);else break;_++}for(;_<=L&&_<=$;){const W=h[L],le=m[$]=A?un(m[$]):zt(m[$]);if(Ln(W,le))y(W,le,b,null,w,C,D,T,A);else break;L--,$--}if(_>L){if(_<=$){const W=$+1,le=W<V?m[W].el:k;for(;_<=$;)y(null,m[_]=A?un(m[_]):zt(m[_]),b,le,w,C,D,T,A),_++}}else if(_>$)for(;_<=L;)Et(h[_],w,C,!0),_++;else{const W=_,le=_,ge=new Map;for(_=le;_<=$;_++){const vt=m[_]=A?un(m[_]):zt(m[_]);vt.key!=null&&ge.set(vt.key,_)}let be,_e=0;const At=$-le+1;let di=!1,Au=0;const tr=new Array(At);for(_=0;_<At;_++)tr[_]=0;for(_=W;_<=L;_++){const vt=h[_];if(_e>=At){Et(vt,w,C,!0);continue}let Ft;if(vt.key!=null)Ft=ge.get(vt.key);else for(be=le;be<=$;be++)if(tr[be-le]===0&&Ln(vt,m[be])){Ft=be;break}Ft===void 0?Et(vt,w,C,!0):(tr[Ft-le]=_+1,Ft>=Au?Au=Ft:di=!0,y(vt,m[Ft],b,null,w,C,D,T,A),_e++)}const Ru=di?Yv(tr):xi;for(be=Ru.length-1,_=At-1;_>=0;_--){const vt=le+_,Ft=m[vt],Nu=vt+1<V?m[vt+1].el:k;tr[_]===0?y(null,Ft,b,Nu,w,C,D,T,A):di&&(be<0||_!==Ru[be]?Lt(Ft,b,Nu,2):be--)}}},Lt=(h,m,b,k,w=null)=>{const{el:C,type:D,transition:T,children:A,shapeFlag:_}=h;if(_&6){Lt(h.component.subTree,m,b,k);return}if(_&128){h.suspense.move(m,b,k);return}if(_&64){D.move(h,m,b,ke);return}if(D===rt){i(C,m,b);for(let L=0;L<A.length;L++)Lt(A[L],m,b,k);i(h.anchor,m,b);return}if(D===_a){Q(h,m,b);return}if(k!==2&&_&1&&T)if(k===0)T.beforeEnter(C),i(C,m,b),dt(()=>T.enter(C),w);else{const{leave:L,delayLeave:$,afterLeave:W}=T,le=()=>i(C,m,b),ge=()=>{L(C,()=>{le(),W&&W()})};$?$(C,le,ge):ge()}else i(C,m,b)},Et=(h,m,b,k=!1,w=!1)=>{const{type:C,props:D,ref:T,children:A,dynamicChildren:_,shapeFlag:V,patchFlag:L,dirs:$}=h;if(T!=null&&cl(T,null,b,h,!0),V&256){m.ctx.deactivate(h);return}const W=V&1&&$,le=!mr(h);let ge;if(le&&(ge=D&&D.onVnodeBeforeUnmount)&&Ut(ge,m,h),V&6)F(h.component,b,k);else{if(V&128){h.suspense.unmount(b,k);return}W&&Dn(h,null,m,"beforeUnmount"),V&64?h.type.remove(h,m,b,w,ke,k):_&&(C!==rt||L>0&&L&64)?R(_,m,b,!1,!0):(C===rt&&L&384||!w&&V&16)&&R(A,m,b),k&&wa(h)}(le&&(ge=D&&D.onVnodeUnmounted)||W)&&dt(()=>{ge&&Ut(ge,m,h),W&&Dn(h,null,m,"unmounted")},b)},wa=h=>{const{type:m,el:b,anchor:k,transition:w}=h;if(m===rt){v(b,k);return}if(m===_a){te(h);return}const C=()=>{r(b),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:T}=w,A=()=>D(b,C);T?T(h.el,C,A):A()}else C()},v=(h,m)=>{let b;for(;h!==m;)b=f(h),r(h),h=b;r(m)},F=(h,m,b)=>{const{bum:k,scope:w,update:C,subTree:D,um:T}=h;k&&Ls(k),w.stop(),C&&(C.active=!1,Et(D,h,m,b)),T&&dt(T,m),dt(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},R=(h,m,b,k=!1,w=!1,C=0)=>{for(let D=C;D<h.length;D++)Et(h[D],m,b,k,w)},z=h=>h.shapeFlag&6?z(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),pe=(h,m,b)=>{h==null?m._vnode&&Et(m._vnode,null,null,!0):y(m._vnode||null,h,m,null,null,null,b),wh(),m._vnode=h},ke={p:y,um:Et,m:Lt,r:wa,mt:Pe,mc:ne,pc:bt,pbc:Te,n:z,o:t};let re,ee;return e&&([re,ee]=e(ke)),{render:pe,hydrate:re,createApp:Kv(pe,re)}}function On({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Vh(t,e,n=!1){const i=t.children,r=e.children;if(K(i)&&K(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=un(r[s]),a.el=o.el),n||Vh(o,a))}}function Yv(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Xv=t=>t.__isTeleport,rt=Symbol(void 0),dc=Symbol(void 0),St=Symbol(void 0),_a=Symbol(void 0),pr=[];let Nt=null;function Le(t=!1){pr.push(Nt=t?null:[])}function Jv(){pr.pop(),Nt=pr[pr.length-1]||null}let Rr=1;function Yu(t){Rr+=t}function $h(t){return t.dynamicChildren=Rr>0?Nt||xi:null,Jv(),Rr>0&&Nt&&Nt.push(t),t}function at(t,e,n,i,r,s){return $h(N(t,e,n,i,r,s,!0))}function Uo(t,e,n,i,r){return $h(Ne(t,e,n,i,r,!0))}function eo(t){return t?t.__v_isVNode===!0:!1}function Ln(t,e){return t.type===e.type&&t.key===e.key}const zo="__vInternal",jh=({key:t})=>t!=null?t:null,Us=({ref:t,ref_key:e,ref_for:n})=>t!=null?Be(t)||Se(t)||Z(t)?{i:Ze,r:t,k:e,f:!!n}:t:null;function N(t,e=null,n=null,i=0,r=null,s=t===rt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jh(e),ref:e&&Us(e),scopeId:xh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(fc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),Rr>0&&!o&&Nt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Nt.push(l),l}const Ne=Zv;function Zv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Nv)&&(t=St),eo(t)){const a=_n(t,e,!0);return n&&fc(a,n),Rr>0&&!s&&Nt&&(a.shapeFlag&6?Nt[Nt.indexOf(t)]=a:Nt.push(a)),a.patchFlag|=-2,a}if(u0(t)&&(t=t.__vccOpts),e){e=e0(e);let{class:a,style:l}=e;a&&!Be(a)&&(e.class=kn(a)),ze(l)&&(ch(l)&&!K(l)&&(l=tt({},l)),e.style=Ql(l))}const o=Be(t)?1:pv(t)?128:Xv(t)?64:ze(t)?4:Z(t)?2:0;return N(t,e,n,i,r,o,s,!0)}function e0(t){return t?ch(t)||zo in t?tt({},t):t:null}function _n(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?t0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&jh(a),ref:e&&e.ref?n&&r?K(r)?r.concat(Us(e)):[r,Us(e)]:Us(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_n(t.ssContent),ssFallback:t.ssFallback&&_n(t.ssFallback),el:t.el,anchor:t.anchor}}function Wr(t=" ",e=0){return Ne(dc,null,t,e)}function Vo(t="",e=!1){return e?(Le(),Uo(St,null,t)):Ne(St,null,t)}function zt(t){return t==null||typeof t=="boolean"?Ne(St):K(t)?Ne(rt,null,t.slice()):typeof t=="object"?un(t):Ne(dc,null,String(t))}function un(t){return t.el===null||t.memo?t:_n(t)}function fc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),fc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(zo in e)?e._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),i&64?(n=16,e=[Wr(e)]):n=8);t.children=e,t.shapeFlag|=n}function t0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=kn([e.class,i.class]));else if(r==="style")e.style=Ql([e.style,i.style]);else if(To(r)){const s=e[r],o=i[r];o&&s!==o&&!(K(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Ut(t,e,n,i=null){Tt(t,e,7,[n,i])}const n0=zh();let i0=0;function r0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||n0,s={uid:i0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mh(i,r),emitsOptions:kh(i,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:i.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=uv.bind(null,s),t.ce&&t.ce(s),s}let je=null;const hc=()=>je||Ze,Ai=t=>{je=t,t.scope.on()},qn=()=>{je&&je.scope.off(),je=null};function Bh(t){return t.vnode.shapeFlag&4}let Nr=!1;function s0(t,e=!1){Nr=e;const{props:n,children:i}=t.vnode,r=Bh(t);$v(t,n,r,e),qv(t,i);const s=r?o0(t,e):void 0;return Nr=!1,s}function o0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Yn(new Proxy(t.ctx,Mv));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?l0(t):null;Ai(t),Bi();const s=bn(i,t,0,[t.props,r]);if(qi(),qn(),Kf(s)){if(s.then(qn,qn),e)return s.then(o=>{Xu(t,o,e)}).catch(o=>{No(o,t,0)});t.asyncDep=s}else Xu(t,s,e)}else qh(t,e)}function Xu(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=hh(e)),qh(t,n)}let Ju;function qh(t,e,n){const i=t.type;if(!t.render){if(!e&&Ju&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=tt(tt({isCustomElement:s,delimiters:a},o),l);i.render=Ju(r,c)}}t.render=i.render||Dt}Ai(t),Bi(),Lv(t),qi(),qn()}function a0(t){return new Proxy(t.attrs,{get(e,n){return xt(t,"get","$attrs"),e[n]}})}function l0(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=a0(t))},slots:t.slots,emit:t.emit,expose:e}}function $o(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(hh(Yn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Js)return Js[n](t)}}))}function c0(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function u0(t){return Z(t)&&"__vccOpts"in t}const lt=(t,e)=>rv(t,e,Nr);function Hh(t,e,n){const i=arguments.length;return i===2?ze(e)&&!K(e)?eo(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&eo(n)&&(n=[n]),Ne(t,e,n))}const d0="3.2.37",f0="http://www.w3.org/2000/svg",Fn=typeof document!="undefined"?document:null,Zu=Fn&&Fn.createElement("template"),h0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Fn.createElementNS(f0,t):Fn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Zu.innerHTML=i?`<svg>${t}</svg>`:t;const a=Zu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function m0(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function p0(t,e,n){const i=t.style,r=Be(n);if(n&&!r){for(const s in n)ul(i,s,n[s]);if(e&&!Be(e))for(const s in e)n[s]==null&&ul(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const ed=/\s*!important$/;function ul(t,e,n){if(K(n))n.forEach(i=>ul(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=g0(t,e);ed.test(n)?t.setProperty(ji(i),n.replace(ed,""),"important"):t[i]=n}}const td=["Webkit","Moz","ms"],Ea={};function g0(t,e){const n=Ea[e];if(n)return n;let i=jt(e);if(i!=="filter"&&i in t)return Ea[e]=i;i=Ao(i);for(let r=0;r<td.length;r++){const s=td[r]+i;if(s in t)return Ea[e]=s}return e}const nd="http://www.w3.org/1999/xlink";function b0(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(nd,e.slice(6,e.length)):t.setAttributeNS(nd,e,n);else{const s=fb(e);n==null||s&&!qf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function v0(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Gh,w0]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let dl=0;const y0=Promise.resolve(),k0=()=>{dl=0},x0=()=>dl||(y0.then(k0),dl=Gh());function bi(t,e,n,i){t.addEventListener(e,n,i)}function _0(t,e,n,i){t.removeEventListener(e,n,i)}function E0(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=I0(e);if(i){const c=s[e]=T0(i,r);bi(t,a,c,l)}else o&&(_0(t,a,o,l),s[e]=void 0)}}const id=/(?:Once|Passive|Capture)$/;function I0(t){let e;if(id.test(t)){e={};let n;for(;n=t.match(id);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ji(t.slice(2)),e]}function T0(t,e){const n=i=>{const r=i.timeStamp||Gh();(w0||r>=n.attached-1)&&Tt(S0(i,n.value),e,5,[i])};return n.value=t,n.attached=x0(),n}function S0(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const rd=/^on[a-z]/,C0=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?m0(t,i,r):e==="style"?p0(t,n,i):To(e)?Yl(e)||E0(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):A0(t,e,i,r))?v0(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),b0(t,e,i,r))};function A0(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&rd.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||rd.test(e)&&Be(n)?!1:e in t}const R0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};yv.props;const sd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>Ls(e,n):e};function N0(t){t.target.composing=!0}function od(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const to={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=sd(r);const s=i||r.props&&r.props.type==="number";bi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Qa(a)),t._assign(a)}),n&&bi(t,"change",()=>{t.value=t.value.trim()}),e||(bi(t,"compositionstart",N0),bi(t,"compositionend",od),bi(t,"change",od))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=sd(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&Qa(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},D0=["ctrl","shift","alt","meta"],O0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>D0.some(n=>t[`${n}Key`]&&!e.includes(n))},Hn=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=O0[e[r]];if(s&&s(n,e))return}return t(n,...i)},P0=tt({patchProp:C0},h0);let ad;function M0(){return ad||(ad=Wv(P0))}const L0=(...t)=>{const e=M0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=F0(i);if(!r)return;const s=e._component;!Z(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function F0(t){return Be(t)?document.querySelector(t):t}function U0(t){return Eb()?(Ib(t),!0):!1}var ld;const Qr=typeof window!="undefined",z0=t=>typeof t=="string",Ia=()=>{};Qr&&((ld=window==null?void 0:window.navigator)==null?void 0:ld.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const V0=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$0=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,j0=(t,e)=>{const n=t.getFullYear(),i=t.getMonth(),r=t.getDate(),s=t.getHours(),o=t.getMinutes(),a=t.getSeconds(),l=t.getMilliseconds(),c=t.getDay(),u={YY:String(n).slice(-2),YYYY:n,M:i+1,MM:`${i+1}`.padStart(2,"0"),D:String(r),DD:`${r}`.padStart(2,"0"),H:String(s),HH:`${s}`.padStart(2,"0"),h:`${s%12||12}`.padStart(1,"0"),hh:`${s%12||12}`.padStart(2,"0"),m:String(o),mm:`${o}`.padStart(2,"0"),s:String(a),ss:`${a}`.padStart(2,"0"),SSS:`${l}`.padStart(3,"0"),d:c};return e.replace($0,(d,f)=>f||u[d])},B0=t=>{if(t===null)return new Date(NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(V0);if(e){const n=e[2]-1||0,i=(e[7]||"0").substring(0,3);return new Date(e[1],n,e[3]||1,e[4]||0,e[5]||0,e[6]||0,i)}}return new Date(t)};function q0(t,e="HH:mm:ss"){return lt(()=>j0(B0(Ce(t)),Ce(e)))}function zs(t){var e;const n=Ce(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Kh=Qr?window:void 0;Qr&&window.document;Qr&&window.navigator;Qr&&window.location;function Ta(...t){let e,n,i,r;if(z0(t[0])?([n,i,r]=t,e=Kh):[e,n,i,r]=t,!e)return Ia;let s=Ia;const o=Bn(()=>zs(e),l=>{s(),l&&(l.addEventListener(n,i,r),s=()=>{l.removeEventListener(n,i,r),s=Ia})},{immediate:!0,flush:"post"}),a=()=>{o(),s()};return U0(a),a}function Wh(t,e,n={}){const{window:i=Kh,ignore:r,capture:s=!0}=n;if(!i)return;const o=pt(!0);let a;const l=d=>{i.clearTimeout(a);const f=zs(t),p=d.composedPath();!f||f===d.target||p.includes(f)||!o.value||r&&r.length>0&&r.some(g=>{const x=zs(g);return x&&(d.target===x||p.includes(x))})||e(d)},c=[Ta(i,"click",l,{passive:!0,capture:s}),Ta(i,"pointerdown",d=>{const f=zs(t);o.value=!!f&&!d.composedPath().includes(f)},{passive:!0}),Ta(i,"pointerup",d=>{if(d.button===0){const f=d.composedPath();d.composedPath=()=>f,a=i.setTimeout(()=>l(d),50)}},{passive:!0})];return()=>c.forEach(d=>d())}const fl=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},hl="__vueuse_ssr_handlers__";fl[hl]=fl[hl]||{};fl[hl];var cd;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(cd||(cd={}));var H0=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Qh;const jo=t=>Qh=t,Yh=Symbol();function ml(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var gr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(gr||(gr={}));function G0(){const t=Xf(!0),e=t.run(()=>pt({}));let n=[],i=[];const r=Yn({install(s){jo(r),r._a=s,s.provide(Yh,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!H0?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Xh=()=>{};function ud(t,e,n,i=Xh){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&hc()&&Fo(r),r}function fi(t,...e){t.slice().forEach(n=>{n(...e)})}function pl(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];ml(r)&&ml(i)&&t.hasOwnProperty(n)&&!Se(i)&&!Xt(i)?t[n]=pl(r,i):t[n]=i}return t}const K0=Symbol();function W0(t){return!ml(t)||!t.hasOwnProperty(K0)}const{assign:Ht}=Object;function Q0(t){return!!(Se(t)&&t.effect)}function Y0(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=tv(n.state.value[t]);return Ht(u,s,Object.keys(o||{}).reduce((d,f)=>(d[f]=Yn(lt(()=>{jo(n);const p=n._s.get(t);return o[f].call(p,p)})),d),{}))}return l=Jh(t,c,e,n,i,!0),l.$reset=function(){const d=r?r():{};this.$patch(f=>{Ht(f,d)})},l}function Jh(t,e,n={},i,r,s){let o;const a=Ht({actions:{}},n),l={deep:!0};let c,u,d=Yn([]),f=Yn([]),p;const g=i.state.value[t];!s&&!g&&(i.state.value[t]={}),pt({});let x;function y(J){let M;c=u=!1,typeof J=="function"?(J(i.state.value[t]),M={type:gr.patchFunction,storeId:t,events:p}):(pl(i.state.value[t],J),M={type:gr.patchObject,payload:J,storeId:t,events:p});const ne=x=Symbol();lc().then(()=>{x===ne&&(c=!0)}),u=!0,fi(d,M,i.state.value[t])}const S=Xh;function P(){o.stop(),d=[],f=[],i._s.delete(t)}function q(J,M){return function(){jo(i);const ne=Array.from(arguments),ue=[],Te=[];function Oe(Pe){ue.push(Pe)}function gt(Pe){Te.push(Pe)}fi(f,{args:ne,name:J,store:te,after:Oe,onError:gt});let ut;try{ut=M.apply(this&&this.$id===t?this:te,ne)}catch(Pe){throw fi(Te,Pe),Pe}return ut instanceof Promise?ut.then(Pe=>(fi(ue,Pe),Pe)).catch(Pe=>(fi(Te,Pe),Promise.reject(Pe))):(fi(ue,ut),ut)}}const Q={_p:i,$id:t,$onAction:ud.bind(null,f),$patch:y,$reset:S,$subscribe(J,M={}){const ne=ud(d,J,M.detached,()=>ue()),ue=o.run(()=>Bn(()=>i.state.value[t],Te=>{(M.flush==="sync"?u:c)&&J({storeId:t,type:gr.direct,events:p},Te)},Ht({},l,M)));return ne},$dispose:P},te=Cn(Ht({},Q));i._s.set(t,te);const he=i._e.run(()=>(o=Xf(),o.run(()=>e())));for(const J in he){const M=he[J];if(Se(M)&&!Q0(M)||Xt(M))s||(g&&W0(M)&&(Se(M)?M.value=g[J]:pl(M,g[J])),i.state.value[t][J]=M);else if(typeof M=="function"){const ne=q(J,M);he[J]=ne,a.actions[J]=M}}return Ht(te,he),Ht(ce(te),he),Object.defineProperty(te,"$state",{get:()=>i.state.value[t],set:J=>{y(M=>{Ht(M,J)})}}),i._p.forEach(J=>{Ht(te,o.run(()=>J({store:te,app:i._a,pinia:i,options:a})))}),g&&s&&n.hydrate&&n.hydrate(te.$state,g),c=!0,u=!0,te}function Zh(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function o(a,l){const c=hc();return a=a||c&&Ot(Yh),a&&jo(a),a=Qh,a._s.has(i)||(s?Jh(i,e,r,a):Y0(i,r,a)),a._s.get(i)}return o.$id=i,o}function X0(t){{t=ce(t);const e={};for(const n in t){const i=t[n];(Se(i)||Xt(i))&&(e[n]=mh(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},J0=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),i.push(n[u],n[d],n[f],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(em(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):J0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw Error();const f=s<<2|a>>4;if(i.push(f),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Z0=function(t){const e=em(t);return tm.encodeByteArray(e,!0)},nm=function(t){return Z0(t).replace(/\./g,"")},ew=function(t){try{return tm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function im(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function rm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nw(){return qe().indexOf("Electron/")>=0}function om(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iw(){return qe().indexOf("MSAppHost/")>=0}function rw(){return typeof indexedDB=="object"}function sw(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="FirebaseError";class oi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ow,Object.setPrototypeOf(this,oi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}}class Yr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?aw(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new oi(r,a,i)}}function aw(t,e){return t.replace(lw,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const lw=/\{\$([^}]+)}/g;function cw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function no(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(dd(s)&&dd(o)){if(!no(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function dd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ar(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function lr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uw(t,e){const n=new dw(t,e);return n.subscribe.bind(n)}class dw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");fw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Sa),r.error===void 0&&(r.error=Sa),r.complete===void 0&&(r.complete=Sa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new tw;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pw(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:mw(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mw(t){return t===Mn?void 0:t}function pw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const bw={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},vw=de.INFO,ww={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},yw=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=ww[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mc{constructor(e){this.name=e,this._logLevel=vw,this._logHandler=yw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const kw=(t,e)=>e.some(n=>t instanceof n);let fd,hd;function xw(){return fd||(fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _w(){return hd||(hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const am=new WeakMap,gl=new WeakMap,lm=new WeakMap,Ca=new WeakMap,pc=new WeakMap;function Ew(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vn(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&am.set(n,t)}).catch(()=>{}),pc.set(e,t),e}function Iw(t){if(gl.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gl.set(t,e)}let bl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Tw(t){bl=t(bl)}function Sw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Aa(this),e,...n);return lm.set(i,e.sort?e.sort():[e]),vn(i)}:_w().includes(t)?function(...e){return t.apply(Aa(this),e),vn(am.get(this))}:function(...e){return vn(t.apply(Aa(this),e))}}function Cw(t){return typeof t=="function"?Sw(t):(t instanceof IDBTransaction&&Iw(t),kw(t,xw())?new Proxy(t,bl):t)}function vn(t){if(t instanceof IDBRequest)return Ew(t);if(Ca.has(t))return Ca.get(t);const e=Cw(t);return e!==t&&(Ca.set(t,e),pc.set(e,t)),e}const Aa=t=>pc.get(t);function Aw(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=vn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(vn(o.result),l.oldVersion,l.newVersion,vn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Rw=["get","getKey","getAll","getAllKeys","count"],Nw=["put","add","delete","clear"],Ra=new Map;function md(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Nw.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Rw.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Ra.set(e,s),s}Tw(t=>({...t,get:(e,n,i)=>md(e,n)||t.get(e,n,i),has:(e,n)=>!!md(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ow(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ow(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vl="@firebase/app",pd="0.7.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new mc("@firebase/app"),Pw="@firebase/app-compat",Mw="@firebase/analytics-compat",Lw="@firebase/analytics",Fw="@firebase/app-check-compat",Uw="@firebase/app-check",zw="@firebase/auth",Vw="@firebase/auth-compat",$w="@firebase/database",jw="@firebase/database-compat",Bw="@firebase/functions",qw="@firebase/functions-compat",Hw="@firebase/installations",Gw="@firebase/installations-compat",Kw="@firebase/messaging",Ww="@firebase/messaging-compat",Qw="@firebase/performance",Yw="@firebase/performance-compat",Xw="@firebase/remote-config",Jw="@firebase/remote-config-compat",Zw="@firebase/storage",ey="@firebase/storage-compat",ty="@firebase/firestore",ny="@firebase/firestore-compat",iy="firebase",ry="9.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="[DEFAULT]",sy={[vl]:"fire-core",[Pw]:"fire-core-compat",[Lw]:"fire-analytics",[Mw]:"fire-analytics-compat",[Uw]:"fire-app-check",[Fw]:"fire-app-check-compat",[zw]:"fire-auth",[Vw]:"fire-auth-compat",[$w]:"fire-rtdb",[jw]:"fire-rtdb-compat",[Bw]:"fire-fn",[qw]:"fire-fn-compat",[Hw]:"fire-iid",[Gw]:"fire-iid-compat",[Kw]:"fire-fcm",[Ww]:"fire-fcm-compat",[Qw]:"fire-perf",[Yw]:"fire-perf-compat",[Xw]:"fire-rc",[Jw]:"fire-rc-compat",[Zw]:"fire-gcs",[ey]:"fire-gcs-compat",[ty]:"fire-fst",[ny]:"fire-fst-compat","fire-js":"fire-js",[iy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new Map,wl=new Map;function oy(t,e){try{t.container.addComponent(e)}catch(n){gc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(wl.has(e))return gc.debug(`There were multiple attempts to register component ${e}.`),!1;wl.set(e,t);for(const n of io.values())oy(n,t);return!0}function bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Jn=new Yr("app","Firebase",ay);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=ry;function cy(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:cm,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Jn.create("bad-app-name",{appName:String(i)});const r=io.get(i);if(r){if(no(t,r.options)&&no(n,r.config))return r;throw Jn.create("duplicate-app",{appName:i})}const s=new gw(i);for(const a of wl.values())s.addComponent(a);const o=new ly(t,n,s);return io.set(i,o),o}function um(t=cm){const e=io.get(t);if(!e)throw Jn.create("no-app",{appName:t});return e}function wn(t,e,n){var i;let r=(i=sy[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gc.warn(a.join(" "));return}Ri(new Xn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="firebase-heartbeat-database",dy=1,Dr="firebase-heartbeat-store";let Na=null;function dm(){return Na||(Na=Aw(uy,dy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dr)}}}).catch(t=>{throw Jn.create("storage-open",{originalErrorMessage:t.message})})),Na}async function fy(t){var e;try{return(await dm()).transaction(Dr).objectStore(Dr).get(fm(t))}catch(n){throw Jn.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function gd(t,e){var n;try{const r=(await dm()).transaction(Dr,"readwrite");return await r.objectStore(Dr).put(e,fm(t)),r.done}catch(i){throw Jn.create("storage-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message})}}function fm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=1024,my=30*24*60*60*1e3;class py{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new by(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=my}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bd(),{heartbeatsToSend:n,unsentEntries:i}=gy(this._heartbeatsCache.heartbeats),r=nm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function bd(){return new Date().toISOString().substring(0,10)}function gy(t,e=hy){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),vd(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vd(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class by{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rw()?sw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vd(t){return nm(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t){Ri(new Xn("platform-logger",e=>new Dw(e),"PRIVATE")),Ri(new Xn("heartbeat",e=>new py(e),"PRIVATE")),wn(vl,pd,t),wn(vl,pd,"esm2017"),wn("fire-js","")}vy("");var wy="firebase",yy="9.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(wy,yy,"app");var ky=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,vc=vc||{},G=ky||self;function ro(){}function yl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xy(t){return Object.prototype.hasOwnProperty.call(t,Da)&&t[Da]||(t[Da]=++_y)}var Da="closure_uid_"+(1e9*Math.random()>>>0),_y=0;function Ey(t,e,n){return t.call.apply(t.bind,arguments)}function Iy(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=Ey:We=Iy,We.apply(null,arguments)}function Ss(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function An(){this.s=this.s,this.o=this.o}var Ty=0;An.prototype.s=!1;An.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ty!=0)&&xy(this)};An.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},mm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function Sy(t){e:{var e=vk;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function wd(t){return Array.prototype.concat.apply([],arguments)}function wc(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function so(t){return/^[\s\xa0]*$/.test(t)}var yd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function st(t,e){return t.indexOf(e)!=-1}function Oa(t,e){return t<e?-1:t>e?1:0}var ot;e:{var kd=G.navigator;if(kd){var xd=kd.userAgent;if(xd){ot=xd;break e}}ot=""}function yc(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function pm(t){const e={};for(const n in t)e[n]=t[n];return e}var _d="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gm(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<_d.length;s++)n=_d[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function kc(t){return kc[" "](t),t}kc[" "]=ro;function Cy(t){var e=Ny;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Ay=st(ot,"Opera"),Ni=st(ot,"Trident")||st(ot,"MSIE"),bm=st(ot,"Edge"),kl=bm||Ni,vm=st(ot,"Gecko")&&!(st(ot.toLowerCase(),"webkit")&&!st(ot,"Edge"))&&!(st(ot,"Trident")||st(ot,"MSIE"))&&!st(ot,"Edge"),Ry=st(ot.toLowerCase(),"webkit")&&!st(ot,"Edge");function wm(){var t=G.document;return t?t.documentMode:void 0}var oo;e:{var Pa="",Ma=function(){var t=ot;if(vm)return/rv:([^\);]+)(\)|;)/.exec(t);if(bm)return/Edge\/([\d\.]+)/.exec(t);if(Ni)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ry)return/WebKit\/(\S+)/.exec(t);if(Ay)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ma&&(Pa=Ma?Ma[1]:""),Ni){var La=wm();if(La!=null&&La>parseFloat(Pa)){oo=String(La);break e}}oo=Pa}var Ny={};function Dy(){return Cy(function(){let t=0;const e=yd(String(oo)).split("."),n=yd("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=Oa(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Oa(r[2].length==0,s[2].length==0)||Oa(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var xl;if(G.document&&Ni){var Ed=wm();xl=Ed||parseInt(oo,10)||void 0}else xl=void 0;var Oy=xl,Py=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",ro,e),G.removeEventListener("test",ro,e)}catch{}return t}();function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};function Or(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vm){e:{try{kc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:My[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Or.Z.h.call(this)}}Xe(Or,et);var My={2:"touch",3:"pen",4:"mouse"};Or.prototype.h=function(){Or.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var es="closure_listenable_"+(1e6*Math.random()|0),Ly=0;function Fy(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++Ly,this.ca=this.fa=!1}function Bo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function qo(t){this.src=t,this.g={},this.h=0}qo.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=El(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Fy(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};function _l(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=hm(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Bo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function El(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}var xc="closure_lm_"+(1e6*Math.random()|0),Fa={};function ym(t,e,n,i,r){if(i&&i.once)return xm(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ym(t,e[s],n,i,r);return null}return n=Ic(n),t&&t[es]?t.N(e,n,Zr(i)?!!i.capture:!!i,r):km(t,e,n,!1,i,r)}function km(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Zr(r)?!!r.capture:!!r,a=Ec(t);if(a||(t[xc]=a=new qo(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=Uy(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Py||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Em(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Uy(){function t(n){return e.call(t.src,t.listener,n)}var e=zy;return t}function xm(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)xm(t,e[s],n,i,r);return null}return n=Ic(n),t&&t[es]?t.O(e,n,Zr(i)?!!i.capture:!!i,r):km(t,e,n,!0,i,r)}function _m(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)_m(t,e[s],n,i,r);else i=Zr(i)?!!i.capture:!!i,n=Ic(n),t&&t[es]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=El(s,n,i,r),-1<n&&(Bo(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ec(t))&&(e=t.g[e.toString()],t=-1,e&&(t=El(e,n,i,r)),(n=-1<t?e[t]:null)&&_c(n))}function _c(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[es])_l(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Em(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ec(e))?(_l(n,t),n.h==0&&(n.src=null,e[xc]=null)):Bo(t)}}}function Em(t){return t in Fa?Fa[t]:Fa[t]="on"+t}function zy(t,e){if(t.ca)t=!0;else{e=new Or(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&_c(t),t=n.call(i,e)}return t}function Ec(t){return t=t[xc],t instanceof qo?t:null}var Ua="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ic(t){return typeof t=="function"?t:(t[Ua]||(t[Ua]=function(e){return t.handleEvent(e)}),t[Ua])}function He(){An.call(this),this.i=new qo(this),this.P=this,this.I=null}Xe(He,An);He.prototype[es]=!0;He.prototype.removeEventListener=function(t,e,n,i){_m(this,t,e,n,i)};function Qe(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var r=e;e=new et(i,t),gm(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Cs(o,i,!0,e)&&r}if(o=e.g=t,r=Cs(o,i,!0,e)&&r,r=Cs(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Cs(o,i,!1,e)&&r}He.prototype.M=function(){if(He.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Bo(n[i]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};He.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Cs(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&_l(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var Tc=G.JSON.stringify;function Vy(){var t=Tm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $y{constructor(){this.h=this.g=null}add(e,n){const i=Im.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Im=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new jy,t=>t.reset());class jy{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function By(t){G.setTimeout(()=>{throw t},0)}function Sc(t,e){Il||qy(),Tl||(Il(),Tl=!0),Tm.add(t,e)}var Il;function qy(){var t=G.Promise.resolve(void 0);Il=function(){t.then(Hy)}}var Tl=!1,Tm=new $y;function Hy(){for(var t;t=Vy();){try{t.h.call(t.g)}catch(n){By(n)}var e=Im;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Tl=!1}function Ho(t,e){He.call(this),this.h=t||1,this.g=e||G,this.j=We(this.kb,this),this.l=Date.now()}Xe(Ho,He);O=Ho.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Qe(this,"tick"),this.da&&(Cc(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){Ho.Z.M.call(this),Cc(this),delete this.g};function Ac(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function Sm(t){t.g=Ac(()=>{t.g=null,t.i&&(t.i=!1,Sm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Gy extends An{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sm(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pr(t){An.call(this),this.h=t,this.g={}}Xe(Pr,An);var Id=[];function Cm(t,e,n,i){Array.isArray(n)||(n&&(Id[0]=n.toString()),n=Id);for(var r=0;r<n.length;r++){var s=ym(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Am(t){yc(t.g,function(e,n){this.g.hasOwnProperty(n)&&_c(e)},t),t.g={}}Pr.prototype.M=function(){Pr.Z.M.call(this),Am(this)};Pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Go(){this.g=!0}Go.prototype.Aa=function(){this.g=!1};function Ky(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Wy(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function wi(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Yy(t,n)+(i?" "+i:"")})}function Qy(t,e){t.info(function(){return"TIMEOUT: "+e})}Go.prototype.info=function(){};function Yy(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Tc(n)}catch{return e}}var ai={},Td=null;function Ko(){return Td=Td||new He}ai.Ma="serverreachability";function Rm(t){et.call(this,ai.Ma,t)}Xe(Rm,et);function Mr(t){const e=Ko();Qe(e,new Rm(e))}ai.STAT_EVENT="statevent";function Nm(t,e){et.call(this,ai.STAT_EVENT,t),this.stat=e}Xe(Nm,et);function ct(t){const e=Ko();Qe(e,new Nm(e,t))}ai.Na="timingevent";function Dm(t,e){et.call(this,ai.Na,t),this.size=e}Xe(Dm,et);function ts(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Wo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Om={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Rc(){}Rc.prototype.h=null;function Sd(t){return t.h||(t.h=t.i())}function Pm(){}var ns={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Nc(){et.call(this,"d")}Xe(Nc,et);function Dc(){et.call(this,"c")}Xe(Dc,et);var Sl;function Qo(){}Xe(Qo,Rc);Qo.prototype.g=function(){return new XMLHttpRequest};Qo.prototype.i=function(){return{}};Sl=new Qo;function is(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Pr(this),this.P=Xy,t=kl?125:void 0,this.W=new Ho(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Mm}function Mm(){this.i=null,this.g="",this.h=!1}var Xy=45e3,Cl={},ao={};O=is.prototype;O.setTimeout=function(t){this.P=t};function Al(t,e,n){t.K=1,t.v=Xo(en(e)),t.s=n,t.U=!0,Lm(t,null)}function Lm(t,e){t.F=Date.now(),rs(t),t.A=en(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Bm(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Mm,t.g=cp(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Gy(We(t.Ia,t,t.g),t.O)),Cm(t.V,t.g,"readystatechange",t.gb),e=t.H?pm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Mr(),Ky(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&Kt(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const u=Kt(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(u!=3||kl||this.g&&(this.h.h||this.g.ga()||Nd(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?Mr(3):Mr(2)),Yo(this);var n=this.g.ba();this.N=n;t:if(Fm(this)){var i=Nd(this.g);t="";var r=i.length,s=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){zn(this),br(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Wy(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!so(a)){var c=a;break t}}c=null}if(n=c)wi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rl(this,n);else{this.i=!1,this.o=3,ct(12),zn(this),br(this);break e}}this.U?(Um(this,u,o),kl&&this.i&&u==3&&(Cm(this.V,this.W,"tick",this.fb),this.W.start())):(wi(this.j,this.m,o,null),Rl(this,o)),u==4&&zn(this),this.i&&!this.I&&(u==4?sp(this.l,this):(this.i=!1,rs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),zn(this),br(this)}}}catch{}finally{}};function Fm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Um(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=Jy(t,n),r==ao){e==4&&(t.o=4,ct(14),i=!1),wi(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Cl){t.o=4,ct(15),wi(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else wi(t.j,t.m,r,null),Rl(t,r);Fm(t)&&r!=ao&&r!=Cl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ct(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),$c(e),e.L=!0,ct(11))):(wi(t.j,t.m,n,"[Invalid Chunked Response]"),zn(t),br(t))}O.fb=function(){if(this.g){var t=Kt(this.g),e=this.g.ga();this.C<e.length&&(Yo(this),Um(this,t,e),this.i&&t!=4&&rs(this))}};function Jy(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ao:(n=Number(e.substring(n,i)),isNaN(n)?Cl:(i+=1,i+n>e.length?ao:(e=e.substr(i,n),t.C=i+n,e)))}O.cancel=function(){this.I=!0,zn(this)};function rs(t){t.Y=Date.now()+t.P,zm(t,t.P)}function zm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ts(We(t.eb,t),e)}function Yo(t){t.B&&(G.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Qy(this.j,this.A),this.K!=2&&(Mr(),ct(17)),zn(this),this.o=2,br(this)):zm(this,this.Y-t)};function br(t){t.l.G==0||t.I||sp(t.l,t)}function zn(t){Yo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Cc(t.W),Am(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Rl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Nl(n.i,t))){if(n.I=t.N,!t.J&&Nl(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)fo(n),ea(n);else break e;Vc(n),ct(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=ts(We(n.ab,n),6e3));if(1>=Gm(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Vn(n,11)}else if((t.J||n.g==t)&&fo(n),!so(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const d=c[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=i.i;!s.g&&(st(g,"spdy")||st(g,"quic")||st(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Mc(s,s.h),s.h=null))}if(i.D){const x=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;x&&(i.sa=x,Ee(i.F,i.D,x))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=lp(i,i.H?i.la:null,i.W),o.J){Km(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Yo(a),rs(a)),i.g=o}else ip(i);0<n.l.length&&ta(n)}else c[0]!="stop"&&c[0]!="close"||Vn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Vn(n,7):zc(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Mr(4)}catch{}}function Zy(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(yl(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Oc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yl(t)||typeof t=="string")mm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(yl(t)||typeof t=="string"){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=Zy(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function Hi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Hi)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}O=Hi.prototype;O.R=function(){Pc(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return Pc(this),this.g.concat()};function Pc(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];Zn(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],Zn(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}O.get=function(t,e){return Zn(this.h,t)?this.h[t]:e};O.set=function(t,e){Zn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};function Zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Vm=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ek(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ei(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ei){this.g=e!==void 0?e:t.g,lo(this,t.j),this.s=t.s,co(this,t.i),uo(this,t.m),this.l=t.l,e=t.h;var n=new Lr;n.i=e.i,e.g&&(n.g=new Hi(e.g),n.h=e.h),Cd(this,n),this.o=t.o}else t&&(n=String(t).match(Vm))?(this.g=!!e,lo(this,n[1]||"",!0),this.s=vr(n[2]||""),co(this,n[3]||"",!0),uo(this,n[4]),this.l=vr(n[5]||"",!0),Cd(this,n[6]||"",!0),this.o=vr(n[7]||"")):(this.g=!!e,this.h=new Lr(null,this.g))}ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(cr(e,Ad,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(cr(e,Ad,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(cr(n,n.charAt(0)=="/"?sk:rk,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",cr(n,ak)),t.join("")};function en(t){return new ei(t)}function lo(t,e,n){t.j=n?vr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function co(t,e,n){t.i=n?vr(e,!0):e}function uo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cd(t,e,n){e instanceof Lr?(t.h=e,lk(t.h,t.g)):(n||(e=cr(e,ok)),t.h=new Lr(e,t.g))}function Ee(t,e,n){t.h.set(e,n)}function Xo(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function tk(t){return t instanceof ei?en(t):new ei(t,void 0)}function nk(t,e,n,i){var r=new ei(null,void 0);return t&&lo(r,t),e&&co(r,e),n&&uo(r,n),i&&(r.l=i),r}function vr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function cr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ik),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ik(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ad=/[#\/\?@]/g,rk=/[#\?:]/g,sk=/[#\?]/g,ok=/[#\?@]/g,ak=/#/g;function Lr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rn(t){t.g||(t.g=new Hi,t.h=0,t.i&&ek(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Lr.prototype;O.add=function(t,e){Rn(this),this.i=null,t=Gi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $m(t,e){Rn(t),e=Gi(t,e),Zn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Zn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Pc(t)))}function jm(t,e){return Rn(t),e=Gi(t,e),Zn(t.g.h,e)}O.forEach=function(t,e){Rn(this),this.g.forEach(function(n,i){mm(n,function(r){t.call(e,r,i,this)},this)},this)};O.T=function(){Rn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n};O.R=function(t){Rn(this);var e=[];if(typeof t=="string")jm(this,t)&&(e=wd(e,this.g.get(Gi(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=wd(e,t[n])}return e};O.set=function(t,e){return Rn(this),this.i=null,t=Gi(this,t),jm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Bm(t,e,n){$m(t,e),0<n.length&&(t.i=null,t.g.set(Gi(t,e),wc(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;i[s]!==""&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function Gi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lk(t,e){e&&!t.j&&(Rn(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&($m(this,i),Bm(this,r,n))},t)),t.j=e}var ck=class{constructor(t,e){this.h=t,this.g=e}};function qm(t){this.l=t||uk,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ea&&G.g.Ea()&&G.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uk=10;function Hm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gm(t){return t.h?1:t.g?t.g.size:0}function Nl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mc(t,e){t.g?t.g.add(e):t.h=e}function Km(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qm.prototype.cancel=function(){if(this.i=Wm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wc(t.i)}function Lc(){}Lc.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};Lc.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function dk(){this.g=new Lc}function fk(t,e,n){const i=n||"";try{Oc(t,function(r,s){let o=r;Zr(r)&&(o=Tc(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function hk(t,e){const n=new Go;if(G.Image){const i=new Image;i.onload=Ss(As,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ss(As,n,i,"TestLoadImage: error",!1,e),i.onabort=Ss(As,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ss(As,n,i,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function As(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function ss(t){this.l=t.$b||null,this.j=t.ib||!1}Xe(ss,Rc);ss.prototype.g=function(){return new Jo(this.l,this.j)};ss.prototype.i=function(t){return function(){return t}}({});function Jo(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Fc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(Jo,He);var Fc=0;O=Jo.prototype;O.open=function(t,e){if(this.readyState!=Fc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fr(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=Fc};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fr(this)),this.g&&(this.readyState=3,Fr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof G.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qm(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Qm(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?os(this):Fr(this),this.readyState==3&&Qm(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,os(this))};O.Ta=function(t){this.g&&(this.response=t,os(this))};O.ha=function(){this.g&&os(this)};function os(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fr(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mk=G.JSON.parse;function De(t){He.call(this),this.headers=new Hi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ym,this.K=this.L=!1}Xe(De,He);var Ym="",pk=/^https?$/i,gk=["POST","PUT"];O=De.prototype;O.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Sl.g(),this.C=this.u?Sd(this.u):Sd(Sl),this.g.onreadystatechange=We(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Rd(this,s);return}t=n||"";const r=new Hi(this.headers);i&&Oc(i,function(s,o){r.set(o,s)}),i=Sy(r.T()),n=G.FormData&&t instanceof G.FormData,!(0<=hm(gk,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zm(this),0<this.B&&((this.K=bk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.pa,this)):this.A=Ac(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Rd(this,s)}};function bk(t){return Ni&&Dy()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function vk(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof vc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function Rd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xm(t),Zo(t)}function Xm(t){t.D||(t.D=!0,Qe(t,"complete"),Qe(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Zo(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zo(this,!0)),De.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?Jm(this):this.cb())};O.cb=function(){Jm(this)};function Jm(t){if(t.h&&typeof vc!="undefined"&&(!t.C[1]||Kt(t)!=4||t.ba()!=2)){if(t.v&&Kt(t)==4)Ac(t.Fa,0,t);else if(Qe(t,"readystatechange"),Kt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(Vm)[1]||null;if(!r&&G.self&&G.self.location){var s=G.self.location.protocol;r=s.substr(0,s.length-1)}i=!pk.test(r?r.toLowerCase():"")}n=i}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var o=2<Kt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Xm(t)}}finally{Zo(t)}}}}function Zo(t,e){if(t.g){Zm(t);const n=t.g,i=t.C[0]?ro:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=i}catch{}}}function Zm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function Kt(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mk(e)}};function Nd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ym:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function wk(t){let e="";return yc(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Uc(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=wk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ep(t){this.za=0,this.l=[],this.h=new Go,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,t),this.$a=nr("retryDelaySeedMs",1e4,t),this.Ya=nr("forwardChannelMaxRetries",2,t),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new qm(t&&t.concurrentRequestLimit),this.Ca=new dk,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=ep.prototype;O.ma=8;O.G=1;function zc(t){if(tp(t),t.G==3){var e=t.V++,n=en(t.F);Ee(n,"SID",t.J),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),as(t,n),e=new is(t,t.h,e,void 0),e.K=2,e.v=Xo(en(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=cp(e.l,null),e.g.ea(e.v)),e.F=Date.now(),rs(e)}ap(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ea(t){t.g&&($c(t),t.g.cancel(),t.g=null)}function tp(t){ea(t),t.u&&(G.clearTimeout(t.u),t.u=null),fo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function za(t,e){t.l.push(new ck(t.Za++,e)),t.G==3&&ta(t)}function ta(t){Hm(t.i)||t.m||(t.m=!0,Sc(t.Ha,t),t.C=0)}function yk(t,e){return Gm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ts(We(t.Ha,t,e),op(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new is(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=pm(s),gm(s,this.P)):s=this.P),this.o===null&&(r.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=np(this,r,e),n=en(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),as(this,n),this.o&&s&&Uc(n,this.o,s),Mc(this.i,r),this.Ra&&Ee(n,"TYPE","init"),this.ja?(Ee(n,"$req",e),Ee(n,"SID","null"),r.$=!0,Al(r,n,null)):Al(r,n,e),this.G=2}}else this.G==3&&(t?Dd(this,t):this.l.length==0||Hm(this.i)||Dd(this))};function Dd(t,e){var n;e?n=e.m:n=t.V++;const i=en(t.F);Ee(i,"SID",t.J),Ee(i,"RID",n),Ee(i,"AID",t.U),as(t,i),t.o&&t.s&&Uc(i,t.o,t.s),n=new is(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=np(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Mc(t.i,n),Al(n,i,e)}function as(t,e){t.j&&Oc({},function(n,i){Ee(e,i,n)})}function np(t,e,n){n=Math.min(t.l.length,n);var i=t.j?We(t.j.Oa,t.j,t):null;e:{var r=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=s,0>c)s=Math.max(0,r[l].h-100),a=!1;else try{fk(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function ip(t){t.g||t.u||(t.Y=1,Sc(t.Ga,t),t.A=0)}function Vc(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ts(We(t.Ga,t),op(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,rp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ts(We(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),ea(this),rp(this))};function $c(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function rp(t){t.g=new is(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=en(t.oa);Ee(e,"RID","rpc"),Ee(e,"SID",t.J),Ee(e,"CI",t.N?"0":"1"),Ee(e,"AID",t.U),as(t,e),Ee(e,"TYPE","xmlhttp"),t.o&&t.s&&Uc(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Xo(en(e)),n.s=null,n.U=!0,Lm(n,t)}O.ab=function(){this.v!=null&&(this.v=null,ea(this),Vc(this),ct(19))};function fo(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function sp(t,e){var n=null;if(t.g==e){fo(t),$c(t),t.g=null;var i=2}else if(Nl(t.i,e))n=e.D,Km(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=Ko(),Qe(i,new Dm(i,n)),ta(t)}else ip(t);else if(r=e.o,r==3||r==0&&0<t.I||!(i==1&&yk(t,e)||i==2&&Vc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Vn(t,5);break;case 4:Vn(t,10);break;case 3:Vn(t,6);break;default:Vn(t,2)}}}function op(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Vn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=We(t.jb,t);n||(n=new ei("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||lo(n,"https"),Xo(n)),hk(n.toString(),i)}else ct(2);t.G=0,t.j&&t.j.va(e),ap(t),tp(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))};function ap(t){t.G=0,t.I=-1,t.j&&((Wm(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,wc(t.l),t.l.length=0),t.j.ua())}function lp(t,e,n){let i=tk(n);if(i.i!="")e&&co(i,e+"."+i.i),uo(i,i.m);else{const r=G.location;i=nk(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&yc(t.aa,function(r,s){Ee(i,s,r)}),e=t.D,n=t.sa,e&&n&&Ee(i,e,n),Ee(i,"VER",t.ma),as(t,i),i}function cp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new De(new ss({ib:!0})):new De(t.qa),e.L=t.H,e}function up(){}O=up.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function ho(){if(Ni&&!(10<=Number(Oy)))throw Error("Environmental error: no available transport.")}ho.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){He.call(this),this.g=new ep(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!so(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!so(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ki(this)}Xe(_t,He);_t.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Sc(We(t.hb,t,e))),ct(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=lp(t,null,t.W),ta(t)};_t.prototype.close=function(){zc(this.g)};_t.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,za(this.g,e)}else this.v?(e={},e.__data__=Tc(t),za(this.g,e)):za(this.g,t)};_t.prototype.M=function(){this.g.j=null,delete this.j,zc(this.g),delete this.g,_t.Z.M.call(this)};function dp(t){Nc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(dp,Nc);function fp(){Dc.call(this),this.status=1}Xe(fp,Dc);function Ki(t){this.g=t}Xe(Ki,up);Ki.prototype.xa=function(){Qe(this.g,"a")};Ki.prototype.wa=function(t){Qe(this.g,new dp(t))};Ki.prototype.va=function(t){Qe(this.g,new fp)};Ki.prototype.ua=function(){Qe(this.g,"b")};ho.prototype.createWebChannel=ho.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;Wo.NO_ERROR=0;Wo.TIMEOUT=8;Wo.HTTP_ERROR=6;Om.COMPLETE="complete";Pm.EventType=ns;ns.OPEN="a";ns.CLOSE="b";ns.ERROR="c";ns.MESSAGE="d";He.prototype.listen=He.prototype.N;De.prototype.listenOnce=De.prototype.O;De.prototype.getLastError=De.prototype.La;De.prototype.getLastErrorCode=De.prototype.Da;De.prototype.getStatus=De.prototype.ba;De.prototype.getResponseJson=De.prototype.Qa;De.prototype.getResponseText=De.prototype.ga;De.prototype.send=De.prototype.ea;var kk=function(){return new ho},xk=function(){return Ko()},Va=Wo,_k=Om,Ek=ai,Od={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ik=ss,Rs=Pm,Tk=De;const Pd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi="9.8.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new mc("@firebase/firestore");function Md(){return ti.logLevel}function U(t,...e){if(ti.logLevel<=de.DEBUG){const n=e.map(jc);ti.debug(`Firestore (${Wi}): ${t}`,...n)}}function En(t,...e){if(ti.logLevel<=de.ERROR){const n=e.map(jc);ti.error(`Firestore (${Wi}): ${t}`,...n)}}function Ld(t,...e){if(ti.logLevel<=de.WARN){const n=e.map(jc);ti.warn(`Firestore (${Wi}): ${t}`,...n)}}function jc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function xe(t,e){t||Y()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends oi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ck{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class Ak{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(xe(typeof i.accessToken=="string"),new Sk(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new ft(e)}}class Rk{constructor(e,n,i){this.type="FirstParty",this.user=ft.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Nk{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Rk(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ok{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const i=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?r(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.p=n.token,new Dk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Pk(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function fe(t,e){return t<e?-1:t>e?1:0}function Di(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Fe(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Fe(0,0))}static max(){return new ie(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,i){n===void 0?n=0:n>e.length&&Y(),i===void 0?i=e.length-n:i>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Ur.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ur?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Ur{construct(e,n,i){return new Ie(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new j(E.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const Mk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Ur{construct(e,n,i){return new Je(e,n,i)}static isValidIdentifier(e){return Mk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new j(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new j(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new j(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Ie.fromString(e))}static fromName(e){return new B(Ie.fromString(e).popFirst(5))}static empty(){return new B(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Ie(e.slice()))}}function Lk(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=ie.fromTimestamp(i===1e9?new Fe(n+1,0):new Fe(n,i));return new In(r,B.empty(),e)}function Fk(t){return new In(t.readTime,t.key,-1)}class In{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new In(ie.min(),B.empty(),-1)}static max(){return new In(ie.max(),B.empty(),-1)}}function Uk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==zk)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,i)=>{n(e)})}static reject(e){return new I((n,i)=>{i(e)})}static waitFor(e){return new I((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(e){let n=I.resolve(!1);for(const i of e)n=n.next(r=>r?I.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new I((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(e,n){return new I((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function cs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.it(i),this.rt=i=>n.writeSequenceNumber(i))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bc.ot=-1;class Ve{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ns(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ns(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ns(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ns(this.root,e,this.comparator,!0)}}class Ns{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Ge.RED,this.left=r!=null?r:Ge.EMPTY,this.right=s!=null?s:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new Ge(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ud(this.data.getIterator())}getIteratorFrom(e){return new Ud(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Ud{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new Ue(Je.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Di(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const $k=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tn(t){if(xe(!!t),typeof t=="string"){let e=0;const n=$k.exec(t);if(xe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Oi(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gp(t){const e=t.mapValue.fields.__previous_value__;return pp(e)?gp(e):e}function zr(t){const e=Tn(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n,i,r,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){return t==null}function mo(t){return t===0&&1/t==-1/0}function Bk(t){return typeof t=="number"&&Number.isInteger(t)&&!mo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ni(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pp(t)?4:qk(t)?9007199254740991:10:Y()}function Bt(t,e){if(t===e)return!0;const n=ni(t);if(n!==ni(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zr(t).isEqual(zr(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=Tn(i.timestampValue),o=Tn(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Oi(i.bytesValue).isEqual(Oi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Re(i.geoPointValue.latitude)===Re(r.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Re(i.integerValue)===Re(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=Re(i.doubleValue),o=Re(r.doubleValue);return s===o?mo(s)===mo(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Di(t.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Fd(s)!==Fd(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Bt(s[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Vr(t,e){return(t.values||[]).find(n=>Bt(n,e))!==void 0}function Mi(t,e){if(t===e)return 0;const n=ni(t),i=ni(e);if(n!==i)return fe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=Re(r.integerValue||r.doubleValue),a=Re(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return zd(t.timestampValue,e.timestampValue);case 4:return zd(zr(t),zr(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(r,s){const o=Oi(r),a=Oi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=fe(o[l],a[l]);if(c!==0)return c}return fe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=fe(Re(r.latitude),Re(s.latitude));return o!==0?o:fe(Re(r.longitude),Re(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Mi(o[l],a[l]);if(c)return c}return fe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===Ds.mapValue&&s===Ds.mapValue)return 0;if(r===Ds.mapValue)return 1;if(s===Ds.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=fe(a[u],c[u]);if(d!==0)return d;const f=Mi(o[a[u]],l[c[u]]);if(f!==0)return f}return fe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function zd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Tn(t),i=Tn(e),r=fe(n.seconds,i.seconds);return r!==0?r:fe(n.nanos,i.nanos)}function Ei(t){return Dl(t)}function Dl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=Tn(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Oi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Dl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Dl(i.fields[a])}`;return s+"}"}(t.mapValue):Y();var e,n}function Ol(t){return!!t&&"integerValue"in t}function qc(t){return!!t&&"arrayValue"in t}function Vd(t){return!!t&&"nullValue"in t}function $d(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vs(t){return!!t&&"mapValue"in t}function wr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return li(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=wr(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Vs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wr(n)}setAll(e){let n=Je.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=wr(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Vs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Vs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){li(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new ht(wr(this.value))}}function bp(t){const e=[];return li(t.fields,(n,i)=>{const r=new Je([n]);if(Vs(i)){const s=bp(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,i,r,s,o){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ke(e,0,ie.min(),ie.min(),ht.empty(),0)}static newFoundDocument(e,n,i){return new Ke(e,1,n,ie.min(),i,0)}static newNoDocument(e,n){return new Ke(e,2,n,ie.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,ie.min(),ht.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function jd(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Hk(t,e,n,i,r,s,o)}function Hc(t){const e=X(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>{return(r=i).field.canonicalString()+r.op.toString()+Ei(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),na(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ei(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ei(i)).join(",")),e.ut=n}return e.ut}function Gk(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Ei(i.value)}`;var i}).join(", ")}]`),na(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ei(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ei(n)).join(",")),`Target(${e})`}function Gc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!ex(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Bt(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qd(t.startAt,e.startAt)&&qd(t.endAt,e.endAt)}function Pl(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class mt extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,i):new Kk(e,n,i):n==="array-contains"?new Yk(e,i):n==="in"?new Xk(e,i):n==="not-in"?new Jk(e,i):n==="array-contains-any"?new Zk(e,i):new mt(e,n,i)}static ct(e,n,i){return n==="in"?new Wk(e,i):new Qk(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Mi(n,this.value)):n!==null&&ni(this.value)===ni(n)&&this.at(Mi(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Kk extends mt{constructor(e,n,i){super(e,n,i),this.key=B.fromName(i.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.at(n)}}class Wk extends mt{constructor(e,n){super(e,"in",n),this.keys=vp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Qk extends mt{constructor(e,n){super(e,"not-in",n),this.keys=vp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>B.fromName(i.referenceValue))}class Yk extends mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qc(n)&&Vr(n.arrayValue,this.value)}}class Xk extends mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vr(this.value.arrayValue,n)}}class Jk extends mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vr(this.value.arrayValue,n)}}class Zk extends mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Vr(this.value.arrayValue,i))}}class po{constructor(e,n){this.position=e,this.inclusive=n}}class Ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function ex(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Bd(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=B.comparator(B.fromName(o.referenceValue),n.key):i=Mi(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function qd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function tx(t,e,n,i,r,s,o,a){return new us(t,e,n,i,r,s,o,a)}function Kc(t){return new us(t)}function nx(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function yp(t){for(const e of t.filters)if(e.ht())return e.field;return null}function ix(t){return t.collectionGroup!==null}function $r(t){const e=X(t);if(e.lt===null){e.lt=[];const n=yp(e),i=wp(e);if(n!==null&&i===null)n.isKeyField()||e.lt.push(new Ii(n)),e.lt.push(new Ii(Je.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ii(Je.keyField(),s))}}}return e.lt}function ii(t){const e=X(t);if(!e.ft)if(e.limitType==="F")e.ft=jd(e.path,e.collectionGroup,$r(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of $r(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ii(s.field,o))}const i=e.endAt?new po(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new po(e.startAt.position,e.startAt.inclusive):null;e.ft=jd(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.ft}function kp(t,e,n){return new us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ia(t,e){return Gc(ii(t),ii(e))&&t.limitType===e.limitType}function xp(t){return`${Hc(ii(t))}|lt:${t.limitType}`}function Ml(t){return`Query(target=${Gk(ii(t))}; limitType=${t.limitType})`}function Wc(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):B.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=Bd(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,$r(n),i)||n.endAt&&!function(r,s,o){const a=Bd(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,$r(n),i))}(t,e)}function rx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _p(t){return(e,n)=>{let i=!1;for(const r of $r(t)){const s=sx(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function sx(t,e,n){const i=t.field.isKeyField()?B.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),l=o.data.field(r);return a!==null&&l!==null?Mi(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mo(e)?"-0":e}}function Ip(t){return{integerValue:""+t}}function ox(t,e){return Bk(e)?Ip(e):Ep(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this._=void 0}}function ax(t,e,n){return t instanceof go?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof jr?Sp(t,e):t instanceof Br?Cp(t,e):function(i,r){const s=Tp(i,r),o=Hd(s)+Hd(i._t);return Ol(s)&&Ol(i._t)?Ip(o):Ep(i.wt,o)}(t,e)}function lx(t,e,n){return t instanceof jr?Sp(t,e):t instanceof Br?Cp(t,e):n}function Tp(t,e){return t instanceof bo?Ol(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class go extends ra{}class jr extends ra{constructor(e){super(),this.elements=e}}function Sp(t,e){const n=Ap(e);for(const i of t.elements)n.some(r=>Bt(r,i))||n.push(i);return{arrayValue:{values:n}}}class Br extends ra{constructor(e){super(),this.elements=e}}function Cp(t,e){let n=Ap(e);for(const i of t.elements)n=n.filter(r=>!Bt(r,i));return{arrayValue:{values:n}}}class bo extends ra{constructor(e,n){super(),this.wt=e,this._t=n}}function Hd(t){return Re(t.integerValue||t.doubleValue)}function Ap(t){return qc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function cx(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof jr&&i instanceof jr||n instanceof Br&&i instanceof Br?Di(n.elements,i.elements,Bt):n instanceof bo&&i instanceof bo?Bt(n._t,i._t):n instanceof go&&i instanceof go}(t.transform,e.transform)}class ux{constructor(e,n){this.version=e,this.transformResults=n}}class Pt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $s(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sa{}function Rp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qc(t.key,Pt.none()):new ds(t.key,t.data,Pt.none());{const n=t.data,i=ht.empty();let r=new Ue(Je.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Nn(t.key,i,new Ct(r.toArray()),Pt.none())}}function dx(t,e,n){t instanceof ds?function(i,r,s){const o=i.value.clone(),a=Kd(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Nn?function(i,r,s){if(!$s(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=Kd(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(Np(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function yr(t,e,n,i){return t instanceof ds?function(r,s,o,a){if(!$s(r.precondition,s))return o;const l=r.value.clone(),c=Wd(r.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Nn?function(r,s,o,a){if(!$s(r.precondition,s))return o;const l=Wd(r.fieldTransforms,a,s),c=s.data;return c.setAll(Np(r)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(r,s,o){return $s(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function fx(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=Tp(i.transform,r||null);s!=null&&(n===null&&(n=ht.empty()),n.set(i.field,s))}return n||null}function Gd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Di(n,i,(r,s)=>cx(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ds extends sa{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Nn extends sa{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Np(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Kd(t,e,n){const i=new Map;xe(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,lx(o,a,n[r]))}return i}function Wd(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,ax(s,o,e))}return i}class Qc extends sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hx extends sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,oe;function px(t){switch(t){default:return Y();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Dp(t){if(t===void 0)return En("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ae.OK:return E.OK;case Ae.CANCELLED:return E.CANCELLED;case Ae.UNKNOWN:return E.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return E.INTERNAL;case Ae.UNAVAILABLE:return E.UNAVAILABLE;case Ae.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ae.NOT_FOUND:return E.NOT_FOUND;case Ae.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ae.ABORTED:return E.ABORTED;case Ae.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ae.DATA_LOSS:return E.DATA_LOSS;default:return Y()}}(oe=Ae||(Ae={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){li(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return mp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=new Ve(B.comparator);function tn(){return gx}const Op=new Ve(B.comparator);function ur(...t){let e=Op;for(const n of t)e=e.insert(n.key,n);return e}function Pp(t){let e=Op;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function $n(){return kr()}function Mp(){return kr()}function kr(){return new Qi(t=>t.toString(),(t,e)=>t.isEqual(e))}const bx=new Ve(B.comparator),vx=new Ue(B.comparator);function se(...t){let e=vx;for(const n of t)e=e.add(n);return e}const wx=new Ue(fe);function Lp(){return wx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,fs.createSynthesizedTargetChangeForCurrentChange(e,n)),new oa(ie.min(),i,Lp(),tn(),se())}}class fs{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new fs(Ye.EMPTY_BYTE_STRING,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,i,r){this.gt=e,this.removedTargetIds=n,this.key=i,this.yt=r}}class Fp{constructor(e,n){this.targetId=e,this.It=n}}class Up{constructor(e,n,i=Ye.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Qd{constructor(){this.Tt=0,this.Et=Xd(),this.At=Ye.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=se(),n=se(),i=se();return this.Et.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:Y()}}),new fs(this.At,this.Rt,e,n,i)}Dt(){this.bt=!1,this.Et=Xd()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class yx{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=tn(),this.Bt=Yd(),this.Lt=new Ue(fe)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const i=this.Qt(n);switch(e.state){case 0:this.jt(n)&&i.Vt(e.resumeToken);break;case 1:i.kt(),i.Pt||i.Dt(),i.Vt(e.resumeToken);break;case 2:i.kt(),i.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(i.Ot(),i.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),i.Vt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((i,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,i=e.It.count,r=this.Ht(n);if(r){const s=r.target;if(Pl(s))if(i===0){const o=new B(s.path);this.Kt(n,o,Ke.newNoDocument(o,ie.min()))}else xe(i===1);else this.Jt(n)!==i&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&Pl(a.target)){const l=new B(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,Ke.newNoDocument(l,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let i=se();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ht(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const r=new oa(e,n,this.Lt,this.$t,i);return this.$t=tn(),this.Bt=Yd(),this.Lt=new Ue(fe),r}qt(e,n){if(!this.jt(e))return;const i=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,i),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,i){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),i&&(this.$t=this.$t.insert(n,i))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Qd,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Ue(fe),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new Qd),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function Yd(){return new Ve(B.comparator)}function Xd(){return new Ve(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class _x{constructor(e,n){this.databaseId=e,this.dt=n}}function vo(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zp(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Ex(t,e){return vo(t,e.toTimestamp())}function Jt(t){return xe(!!t),ie.fromTimestamp(function(e){const n=Tn(e);return new Fe(n.seconds,n.nanos)}(t))}function Yc(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Vp(t){const e=Ie.fromString(t);return xe(Bp(e)),e}function Ll(t,e){return Yc(t.databaseId,e.path)}function $a(t,e){const n=Vp(e);if(n.get(1)!==t.databaseId.projectId)throw new j(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B($p(n))}function Fl(t,e){return Yc(t.databaseId,e)}function Ix(t){const e=Vp(t);return e.length===4?Ie.emptyPath():$p(e)}function Ul(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $p(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jd(t,e,n){return{name:Ll(t,e),fields:n.value.mapValue.fields}}function Tx(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(l,c){return l.dt?(xe(c===void 0||typeof c=="string"),Ye.fromBase64String(c||"")):(xe(c===void 0||c instanceof Uint8Array),Ye.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?E.UNKNOWN:Dp(l.code);return new j(c,l.message||"")}(o);n=new Up(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=$a(t,i.document.name),s=Jt(i.document.updateTime),o=new ht({mapValue:{fields:i.document.fields}}),a=Ke.newFoundDocument(r,s,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new js(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=$a(t,i.document),s=i.readTime?Jt(i.readTime):ie.min(),o=Ke.newNoDocument(r,s),a=i.removedTargetIds||[];n=new js([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=$a(t,i.document),s=i.removedTargetIds||[];n=new js([],s,r,null)}else{if(!("filter"in e))return Y();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new mx(r),o=i.targetId;n=new Fp(o,s)}}return n}function Sx(t,e){let n;if(e instanceof ds)n={update:Jd(t,e.key,e.value)};else if(e instanceof Qc)n={delete:Ll(t,e.key)};else if(e instanceof Nn)n={update:Jd(t,e.key,e.data),updateMask:Fx(e.fieldMask)};else{if(!(e instanceof hx))return Y();n={verify:Ll(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof go)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof jr)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Br)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof bo)return{fieldPath:s.field.canonicalString(),increment:o._t};throw Y()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Ex(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function Cx(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?Jt(i.updateTime):Jt(r);return s.isEqual(ie.min())&&(s=Jt(r)),new ux(s,i.transformResults||[])}(n,e))):[]}function Ax(t,e){return{documents:[Fl(t,e.path)]}}function Rx(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Fl(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fl(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(l){if(l.length===0)return;const c=l.map(u=>function(d){if(d.op==="=="){if($d(d.value))return{unaryFilter:{field:hi(d.field),op:"IS_NAN"}};if(Vd(d.value))return{unaryFilter:{field:hi(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if($d(d.value))return{unaryFilter:{field:hi(d.field),op:"IS_NOT_NAN"}};if(Vd(d.value))return{unaryFilter:{field:hi(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hi(d.field),op:Px(d.op),value:d.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:hi(u.field),direction:Ox(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,c){return l.dt||na(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Nx(t){let e=Ix(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){xe(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=jp(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new Ii(yi(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,na(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,f=u.values||[];return new po(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,f=u.values||[];return new po(f,d)}(n.endAt)),tx(e,r,o,s,a,"F",l,c)}function Dx(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function jp(t){return t?t.unaryFilter!==void 0?[Lx(t)]:t.fieldFilter!==void 0?[Mx(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>jp(e)).reduce((e,n)=>e.concat(n)):Y():[]}function Ox(t){return kx[t]}function Px(t){return xx[t]}function hi(t){return{fieldPath:t.canonicalString()}}function yi(t){return Je.fromServerFormat(t.fieldPath)}function Mx(t){return mt.create(yi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Lx(t){switch(t.unaryFilter.op){case"IS_NAN":const e=yi(t.unaryFilter.field);return mt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=yi(t.unaryFilter.field);return mt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yi(t.unaryFilter.field);return mt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=yi(t.unaryFilter.field);return mt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}function Fx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&dx(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=yr(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=yr(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Mp();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=Rp(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(ie.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Di(this.mutations,e.mutations,(n,i)=>Gd(n,i))&&Di(this.baseMutations,e.baseMutations,(n,i)=>Gd(n,i))}}class Xc{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){xe(e.mutations.length===i.length);let r=bx;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Xc(e,n,i,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,i,r,s=ie.min(),o=ie.min(),a=Ye.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e){this.ne=e}}function $x(t){const e=Nx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.ze=new Bx}addToCollectionParentIndex(e,n){return this.ze.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(In.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(In.min())}updateCollectionGroup(e,n,i){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class Bx{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new Ue(Ie.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Ue(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Li(0)}static Rn(){return new Li(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.changes=new Qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?I.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.getBaseDocument(e,n,i))).next(r=>(i!==null&&yr(i.mutation,r,Ct.empty(),Fe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,se()).next(()=>i))}getLocalViewOfDocuments(e,n,i=se()){const r=$n();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=ur();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=$n();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,se()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=tn();const o=kr(),a=kr();return n.forEach((l,c)=>{const u=i.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof Nn)?s=s.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),yr(u.mutation,c,u.mutation.getFieldMask(),Fe.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new Hx(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const i=kr();let r=new Ve((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||Ct.empty();u=a.applyToLocalView(c,u),i.set(l,u);const d=(r.get(a.batchId)||se()).add(l);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=Mp();u.forEach(f=>{if(!s.has(f)){const p=Rp(n.get(f),i.get(f));p!==null&&d.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return I.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ix(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):I.resolve($n());let a=-1,l=s;return o.next(c=>I.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(u)?I.resolve():this.getBaseDocument(e,u,d).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,se())).next(u=>({batchId:a,changes:Pp(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(i=>{let r=ur();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=ur();return this.indexManager.getCollectionParents(e,r).next(o=>I.forEach(o,a=>{const l=function(c,u){return new us(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,d)=>{s=s.insert(u,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,i).next(s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId))).next(s=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Ke.newInvalidDocument(c)))});let o=ur();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&yr(c.mutation,l,Ct.empty(),Fe.now()),Wc(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,i){return i===null||i.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):I.resolve(Ke.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return I.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var i;return this.Jn.set(n.id,{id:(i=n).id,version:i.version,createTime:Jt(i.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(i){return{name:i.name,query:$x(i.bundledQuery),readTime:Jt(i.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(){this.overlays=new Ve(B.comparator),this.Xn=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const i=$n();return I.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.ie(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.Xn.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(i)),I.resolve()}getOverlaysForCollection(e,n,i){const r=$n(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return I.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new Ve((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=s.get(c.largestBatchId);u===null&&(u=$n(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=$n(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return I.resolve(a)}ie(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(i.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new zx(n,i));let s=this.Xn.get(n);s===void 0&&(s=se(),this.Xn.set(n,s)),this.Xn.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.Zn=new Ue($e.ts),this.es=new Ue($e.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new $e(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new $e(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}us(e){const n=new B(new Ie([])),i=new $e(n,e),r=new $e(n,e+1),s=[];return this.es.forEachInRange([i,r],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new B(new Ie([])),i=new $e(n,e),r=new $e(n,e+1);let s=se();return this.es.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class $e{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return B.comparator(e.key,n.key)||fe(e.ls,n.ls)}static ns(e,n){return fe(e.ls,n.ls)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Ue($e.ts)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ux(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.ws(i),s=r<0?0:r;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new $e(n,0),r=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([i,r],o=>{const a=this._s(o.ls);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Ue(fe);return n.forEach(r=>{const s=new $e(r,0),o=new $e(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{i=i.add(a.ls)})}),I.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;B.isDocumentKey(s)||(s=s.child(""));const o=new $e(new B(s),0);let a=new Ue(fe);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},o),I.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(i=>{const r=this._s(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){xe(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.ds;return I.forEach(n.mutations,r=>{const s=new $e(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=i})}In(e){}containsKey(e,n){const i=new $e(n,0),r=this.ds.firstAfterOrEqual(i);return I.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.ps=e,this.docs=new Ve(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return I.resolve(i?i.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let i=tn();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Ke.newInvalidDocument(r))}),I.resolve(i)}getAllFromCollection(e,n,i){let r=tn();const s=new B(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Uk(Fk(l),i)<=0||(r=r.insert(l.key,l.mutableCopy()))}return I.resolve(r)}getAllFromCollectionGroup(e,n,i,r){Y()}Is(e,n){return I.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new Xx(this)}getSize(e){return I.resolve(this.size)}}class Xx extends qx{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(i)}),I.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.persistence=e,this.Ts=new Qi(n=>Hc(n),Gc),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Es=0,this.As=new Jc,this.targetCount=0,this.Rs=Li.An()}forEachTarget(e,n){return this.Ts.forEach((i,r)=>n(r)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Es&&(this.Es=n),I.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Li(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.vn(n),I.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),I.waitFor(s).next(()=>r)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const i=this.Ts.get(n)||null;return I.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),I.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),I.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return I.resolve(i)}containsKey(e,n){return I.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Bc(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new Jx(this),this.indexManager=new jx,this.remoteDocumentCache=function(i){return new Yx(i)}(i=>this.referenceDelegate.Ss(i)),this.wt=new Vx(n),this.Ds=new Kx(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.bs[e.toKey()];return i||(i=new Qx(n,this.referenceDelegate),this.bs[e.toKey()]=i),i}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,i){U("MemoryPersistence","Starting transaction:",e);const r=new e1(this.Ps.next());return this.referenceDelegate.Cs(),i(r).next(s=>this.referenceDelegate.xs(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ns(e,n){return I.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class e1 extends Vk{constructor(e){super(),this.currentSequenceNumber=e}}class Zc{constructor(e){this.persistence=e,this.ks=new Jc,this.Os=null}static Ms(e){return new Zc(e)}get Fs(){if(this.Os)return this.Os;throw Y()}addReference(e,n,i){return this.ks.addReference(i,n),this.Fs.delete(i.toString()),I.resolve()}removeReference(e,n,i){return this.ks.removeReference(i,n),this.Fs.add(i.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),I.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Fs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Fs,i=>{const r=B.fromPath(i);return this.$s(e,r).next(s=>{s||n.removeEntry(r,ie.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(i=>{i?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return I.or([()=>I.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Pi=i,this.vi=r}static Vi(e,n){let i=se(),r=se();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new eu(e,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ci(e,n).next(s=>s||this.xi(e,n,r,i)).next(s=>s||this.Ni(e,n))}Ci(e,n){return I.resolve(null)}xi(e,n,i,r){return nx(n)||r.isEqual(ie.min())?this.Ni(e,n):this.Di.getDocuments(e,i).next(s=>{const o=this.ki(n,s);return this.Oi(n,o,i,r)?this.Ni(e,n):(Md()<=de.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ml(n)),this.Mi(e,o,n,Lk(r,-1)))})}ki(e,n){let i=new Ue(_p(e));return n.forEach((r,s)=>{Wc(e,s)&&(i=i.add(s))}),i}Oi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(e,n){return Md()<=de.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Ml(n)),this.Di.getDocumentsMatchingQuery(e,n,In.min())}Mi(e,n,i,r){return this.Di.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n,i,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new Ve(fe),this.Bi=new Qi(s=>Hc(s),Gc),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(i)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gx(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function i1(t,e,n,i){return new n1(t,e,n,i)}async function qp(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.qi(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=se();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Ki:c,removedBatchIds:o,addedBatchIds:a}))})})}function r1(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,d=u.keys();let f=I.resolve();return d.forEach(p=>{f=f.next(()=>c.getEntry(a,p)).next(g=>{const x=l.docVersions.get(p);xe(x!==null),g.version.compareTo(x)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=se();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function Hp(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function s1(t,e){const n=X(t),i=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((u,d)=>{const f=r.get(d);if(!f)return;a.push(n.Vs.removeMatchingKeys(s,u.removedDocuments,d).next(()=>n.Vs.addMatchingKeys(s,u.addedDocuments,d)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(d)?p=p.withResumeToken(Ye.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,i)),r=r.insert(d,p),function(g,x,y){return g.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,p,u)&&a.push(n.Vs.updateTargetData(s,p))});let l=tn(),c=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(o1(s,o,e.documentUpdates).next(u=>{l=u.Gi,c=u.Qi})),!i.isEqual(ie.min())){const u=n.Vs.getLastRemoteSnapshotVersion(s).next(d=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.$i=r,s))}function o1(t,e,n){let i=se(),r=se();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=tn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Gi:o,Qi:r}})}function a1(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function l1(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Vs.getTargetData(i,e).next(s=>s?(r=s,I.resolve(r)):n.Vs.allocateTargetId(i).next(o=>(r=new Kn(e,o,0,i.currentSequenceNumber),n.Vs.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.$i.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(i.targetId,i),n.Bi.set(e,i.targetId)),i})}async function zl(t,e,n){const i=X(t),r=i.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!cs(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.$i=i.$i.remove(e),i.Bi.delete(r.target)}function Zd(t,e,n){const i=X(t);let r=ie.min(),s=se();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=X(a),d=u.Bi.get(c);return d!==void 0?I.resolve(u.$i.get(d)):u.Vs.getTargetData(l,c)}(i,o,ii(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Fi.getDocumentsMatchingQuery(o,e,n?r:ie.min(),n?s:se())).next(a=>(c1(i,rx(e),a),{documents:a,ji:s})))}function c1(t,e,n){let i=ie.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.Li.set(e,i)}class ef{constructor(){this.activeTargetIds=Lp()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u1{constructor(){this.Fr=new ef,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,i){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new ef,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,i,r,s){const o=this.oo(e,n);U("RestConnection","Sending: ",o,i);const a={};return this.uo(a,r,s),this.co(e,o,a,i).then(l=>(U("RestConnection","Received: ",l),l),l=>{throw Ld("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",i),l})}ao(e,n,i,r,s,o){return this.ro(e,n,i,r,s)}uo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Wi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}oo(e,n){const i=f1[e];return`${this.so}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,i,r){return new Promise((s,o)=>{const a=new Tk;a.listenOnce(_k.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Va.NO_ERROR:const c=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(c)),s(c);break;case Va.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new j(E.DEADLINE_EXCEEDED,"Request time out"));break;case Va.HTTP_ERROR:const u=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const f=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(g)>=0?g:E.UNKNOWN}(d.status);o(new j(f,d.message))}else o(new j(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(E.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,i,15)})}ho(e,n,i){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=kk(),o=xk(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ik({})),this.uo(a.initMessageHeaders,n,i),im()||sm()||nw()||om()||iw()||rm()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=r.join("");U("Connection","Creating WebChannel: "+l,a);const c=s.createWebChannel(l,a);let u=!1,d=!1;const f=new h1({jr:g=>{d?U("Connection","Not sending because WebChannel is closed:",g):(u||(U("Connection","Opening WebChannel transport."),c.open(),u=!0),U("Connection","WebChannel sending:",g),c.send(g))},Wr:()=>c.close()}),p=(g,x,y)=>{g.listen(x,S=>{try{y(S)}catch(P){setTimeout(()=>{throw P},0)}})};return p(c,Rs.EventType.OPEN,()=>{d||U("Connection","WebChannel transport opened.")}),p(c,Rs.EventType.CLOSE,()=>{d||(d=!0,U("Connection","WebChannel transport closed"),f.eo())}),p(c,Rs.EventType.ERROR,g=>{d||(d=!0,Ld("Connection","WebChannel transport errored:",g),f.eo(new j(E.UNAVAILABLE,"The operation could not be completed")))}),p(c,Rs.EventType.MESSAGE,g=>{var x;if(!d){const y=g.data[0];xe(!!y);const S=y,P=S.error||((x=S[0])===null||x===void 0?void 0:x.error);if(P){U("Connection","WebChannel received error:",P);const q=P.status;let Q=function(he){const J=Ae[he];if(J!==void 0)return Dp(J)}(q),te=P.message;Q===void 0&&(Q=E.INTERNAL,te="Unknown error status: "+q+" with message "+P.message),d=!0,f.eo(new j(Q,te)),c.close()}else U("Connection","WebChannel received:",y),f.no(y)}}),p(o,Ek.STAT_EVENT,g=>{g.stat===Od.PROXY?U("Connection","Detected buffering proxy"):g.stat===Od.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function ja(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){return new _x(t,!0)}class Gp{constructor(e,n,i=1e3,r=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=i,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-i);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n,i,r,s,o,a,l){this.js=e,this.Ao=i,this.Ro=r,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Gp(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Po===n&&this.Uo(i,r)},i=>{e(()=>{const r=new j(E.UNKNOWN,"Fetching auth token failed: "+i.message);return this.qo(r)})})}Uo(e,n){const i=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{i(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{i(()=>this.qo(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class p1 extends Kp{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=Tx(this.wt,e),i=function(r){if(!("targetChange"in r))return ie.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?ie.min():s.readTime?Jt(s.readTime):ie.min()}(e);return this.listener.Go(n,i)}Qo(e){const n={};n.database=Ul(this.wt),n.addTarget=function(r,s){let o;const a=s.target;return o=Pl(a)?{documents:Ax(r,a)}:{query:Rx(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=zp(r,s.resumeToken):s.snapshotVersion.compareTo(ie.min())>0&&(o.readTime=vo(r,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const i=Dx(this.wt,e);i&&(n.labels=i),this.Mo(n)}jo(e){const n={};n.database=Ul(this.wt),n.removeTarget=e,this.Mo(n)}}class g1 extends Kp{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=Cx(e.writeResults,e.commitTime),i=Jt(e.commitTime);return this.listener.Jo(i,n)}return xe(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Ul(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Sx(this.wt,i))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1 extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=i,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new j(E.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.bo.ro(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(E.UNKNOWN,r.toString())})}ao(e,n,i,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(E.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class v1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(En(n),this.su=!1):U("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{i.enqueueAndForget(async()=>{ci(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=X(a);l.lu.add(4),await hs(l),l._u.set("Unknown"),l.lu.delete(4),await la(l)}(this))})}),this._u=new v1(i,r)}}async function la(t){if(ci(t))for(const e of t.fu)await e(!0)}async function hs(t){for(const e of t.fu)await e(!1)}function Wp(t,e){const n=X(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),iu(n)?nu(n):Yi(n).Co()&&tu(n,e))}function Qp(t,e){const n=X(t),i=Yi(n);n.hu.delete(e),i.Co()&&Yp(n,e),n.hu.size===0&&(i.Co()?i.ko():ci(n)&&n._u.set("Unknown"))}function tu(t,e){t.wu.Nt(e.targetId),Yi(t).Qo(e)}function Yp(t,e){t.wu.Nt(e),Yi(t).jo(e)}function nu(t){t.wu=new yx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Yi(t).start(),t._u.iu()}function iu(t){return ci(t)&&!Yi(t).Do()&&t.hu.size>0}function ci(t){return X(t).lu.size===0}function Xp(t){t.wu=void 0}async function y1(t){t.hu.forEach((e,n)=>{tu(t,e)})}async function k1(t,e){Xp(t),iu(t)?(t._u.uu(e),nu(t)):t._u.set("Unknown")}async function x1(t,e,n){if(t._u.set("Online"),e instanceof Up&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.hu.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.hu.delete(o),i.wu.removeTarget(o))}(t,e)}catch(i){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await wo(t,i)}else if(e instanceof js?t.wu.Ut(e):e instanceof Fp?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(ie.min()))try{const i=await Hp(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.wu.Yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.hu.get(l);c&&r.hu.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=r.hu.get(a);if(!l)return;r.hu.set(a,l.withResumeToken(Ye.EMPTY_BYTE_STRING,l.snapshotVersion)),Yp(r,a);const c=new Kn(l.target,a,1,l.sequenceNumber);tu(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){U("RemoteStore","Failed to raise snapshot:",i),await wo(t,i)}}async function wo(t,e,n){if(!cs(e))throw e;t.lu.add(1),await hs(t),t._u.set("Offline"),n||(n=()=>Hp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await la(t)})}function Jp(t,e){return e().catch(n=>wo(t,n,e))}async function ca(t){const e=X(t),n=Sn(e);let i=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;_1(e);)try{const r=await a1(e.localStore,i);if(r===null){e.au.length===0&&n.ko();break}i=r.batchId,E1(e,r)}catch(r){await wo(e,r)}Zp(e)&&eg(e)}function _1(t){return ci(t)&&t.au.length<10}function E1(t,e){t.au.push(e);const n=Sn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Zp(t){return ci(t)&&!Sn(t).Do()&&t.au.length>0}function eg(t){Sn(t).start()}async function I1(t){Sn(t).Xo()}async function T1(t){const e=Sn(t);for(const n of t.au)e.Ho(n.mutations)}async function S1(t,e,n){const i=t.au.shift(),r=Xc.from(i,e,n);await Jp(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ca(t)}async function C1(t,e){e&&Sn(t).zo&&await async function(n,i){if(r=i.code,px(r)&&r!==E.ABORTED){const s=n.au.shift();Sn(n).No(),await Jp(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ca(n)}var r}(t,e),Zp(t)&&eg(t)}async function nf(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const i=ci(n);n.lu.add(3),await hs(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await la(n)}async function A1(t,e){const n=X(t);e?(n.lu.delete(2),await la(n)):e||(n.lu.add(2),await hs(n),n._u.set("Unknown"))}function Yi(t){return t.mu||(t.mu=function(e,n,i){const r=X(e);return r.tu(),new p1(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,i)}(t.datastore,t.asyncQueue,{zr:y1.bind(null,t),Jr:k1.bind(null,t),Go:x1.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),iu(t)?nu(t):t._u.set("Unknown")):(await t.mu.stop(),Xp(t))})),t.mu}function Sn(t){return t.gu||(t.gu=function(e,n,i){const r=X(e);return r.tu(),new g1(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,i)}(t.datastore,t.asyncQueue,{zr:I1.bind(null,t),Jr:C1.bind(null,t),Yo:T1.bind(null,t),Jo:S1.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await ca(t)):(await t.gu.stop(),t.au.length>0&&(U("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new ru(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function su(t,e){if(En("AsyncQueue",`${e}: ${t}`),cs(t))return new j(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.comparator=e?(n,i)=>e(n,i)||B.comparator(n.key,i.key):(n,i)=>B.comparator(n.key,i.key),this.keyedMap=ur(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Ti;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.yu=new Ve(B.comparator)}track(e){const n=e.doc.key,i=this.yu.get(n);i?e.type!==0&&i.type===3?this.yu=this.yu.insert(n,e):e.type===3&&i.type!==1?this.yu=this.yu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.yu=this.yu.remove(n):e.type===1&&i.type===2?this.yu=this.yu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):Y():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Fi{constructor(e,n,i,r,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,r){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Fi(e,n,Ti.emptySet(n),s,i,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.Iu=void 0,this.listeners=[]}}class N1{constructor(){this.queries=new Qi(e=>xp(e),ia),this.onlineState="Unknown",this.Tu=new Set}}async function D1(t,e){const n=X(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new R1),r)try{s.Iu=await n.onListen(i)}catch(o){const a=su(o,`Initialization of query '${Ml(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&ou(n)}async function O1(t,e){const n=X(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function P1(t,e){const n=X(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(r)&&(i=!0);o.Iu=r}}i&&ou(n)}function M1(t,e,n){const i=X(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function ou(t){t.Tu.forEach(e=>{e.next()})}class L1{constructor(e,n,i){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=i||{}}Au(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Fi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Du||!i)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.key=e}}class ng{constructor(e){this.key=e}}class F1{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=se(),this.mutatedKeys=se(),this.Lu=_p(e),this.Uu=new Ti(this.Lu)}get qu(){return this.Fu}Ku(e,n){const i=n?n.Gu:new rf,r=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,d)=>{const f=r.get(u),p=Wc(this.query,d)?d:null,g=!!f&&this.mutatedKeys.has(f.key),x=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;f&&p?f.data.isEqual(p.data)?g!==x&&(i.track({type:3,doc:p}),y=!0):this.Qu(f,p)||(i.track({type:2,doc:p}),y=!0,(l&&this.Lu(p,l)>0||c&&this.Lu(p,c)<0)&&(a=!0)):!f&&p?(i.track({type:0,doc:p}),y=!0):f&&!p&&(i.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(p?(o=o.add(p),s=x?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{Uu:o,Gu:i,Oi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((c,u)=>function(d,f){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return p(d)-p(f)}(c.type,u.type)||this.Lu(c.doc,u.doc)),this.ju(i);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,s.length!==0||l?{snapshot:new Fi(this.query,e.Uu,r,s,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new rf,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=se(),this.Uu.forEach(i=>{this.Hu(i.key)&&(this.Bu=this.Bu.add(i.key))});const n=[];return e.forEach(i=>{this.Bu.has(i)||n.push(new ng(i))}),this.Bu.forEach(i=>{e.has(i)||n.push(new tg(i))}),n}Ju(e){this.Fu=e.ji,this.Bu=se();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Fi.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class U1{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class z1{constructor(e){this.key=e,this.Xu=!1}}class V1{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Qi(a=>xp(a),ia),this.ec=new Map,this.nc=new Set,this.sc=new Ve(B.comparator),this.ic=new Map,this.rc=new Jc,this.oc={},this.uc=new Map,this.cc=Li.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function $1(t,e){const n=X1(t);let i,r;const s=n.tc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Yu();else{const o=await l1(n.localStore,ii(e));n.isPrimaryClient&&Wp(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await j1(n,e,i,a==="current")}return r}async function j1(t,e,n,i){t.hc=(u,d,f)=>async function(p,g,x,y){let S=g.view.Ku(x);S.Oi&&(S=await Zd(p.localStore,g.query,!1).then(({documents:Q})=>g.view.Ku(Q,S)));const P=y&&y.targetChanges.get(g.targetId),q=g.view.applyChanges(S,p.isPrimaryClient,P);return of(p,g.targetId,q.zu),q.snapshot}(t,u,d,f);const r=await Zd(t.localStore,e,!0),s=new F1(e,r.ji),o=s.Ku(r.documents),a=fs.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);of(t,n,l.zu);const c=new U1(e,n,s);return t.tc.set(e,c),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function B1(t,e){const n=X(t),i=n.tc.get(e),r=n.ec.get(i.targetId);if(r.length>1)return n.ec.set(i.targetId,r.filter(s=>!ia(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await zl(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Qp(n.remoteStore,i.targetId),Vl(n,i.targetId)}).catch(ls)):(Vl(n,i.targetId),await zl(n.localStore,i.targetId,!0))}async function q1(t,e,n){const i=J1(t);try{const r=await function(s,o){const a=X(s),l=Fe.now(),c=o.reduce((f,p)=>f.add(p.key),se());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=tn(),g=se();return a.Ui.getEntries(f,c).next(x=>{p=x,p.forEach((y,S)=>{S.isValidDocument()||(g=g.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(x=>{u=x;const y=[];for(const S of o){const P=fx(S,u.get(S.key).overlayedDocument);P!=null&&y.push(new Nn(S.key,P,bp(P.value.mapValue),Pt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,y,o)}).next(x=>{d=x;const y=x.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,x.batchId,y)})}).then(()=>({batchId:d.batchId,changes:Pp(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let l=s.oc[s.currentUser.toKey()];l||(l=new Ve(fe)),l=l.insert(o,a),s.oc[s.currentUser.toKey()]=l}(i,r.batchId,n),await ms(i,r.changes),await ca(i.remoteStore)}catch(r){const s=su(r,"Failed to persist write");n.reject(s)}}async function ig(t,e){const n=X(t);try{const i=await s1(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.ic.get(s);o&&(xe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?xe(o.Xu):r.removedDocuments.size>0&&(xe(o.Xu),o.Xu=!1))}),await ms(n,i,e)}catch(i){await ls(i)}}function sf(t,e,n){const i=X(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=X(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.Eu(o)&&(l=!0)}),l&&ou(a)}(i.eventManager,e),r.length&&i.Zu.Go(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function H1(t,e,n){const i=X(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.ic.get(e),s=r&&r.key;if(s){let o=new Ve(B.comparator);o=o.insert(s,Ke.newNoDocument(s,ie.min()));const a=se().add(s),l=new oa(ie.min(),new Map,new Ue(fe),o,a);await ig(i,l),i.sc=i.sc.remove(s),i.ic.delete(e),au(i)}else await zl(i.localStore,e,!1).then(()=>Vl(i,e,n)).catch(ls)}async function G1(t,e){const n=X(t),i=e.batch.batchId;try{const r=await r1(n.localStore,e);sg(n,i,null),rg(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ms(n,r)}catch(r){await ls(r)}}async function K1(t,e,n){const i=X(t);try{const r=await function(s,o){const a=X(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(xe(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);sg(i,e,n),rg(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ms(i,r)}catch(r){await ls(r)}}function rg(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function sg(t,e,n){const i=X(t);let r=i.oc[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.oc[i.currentUser.toKey()]=r}}function Vl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ec.get(e))t.tc.delete(i),n&&t.Zu.lc(i,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(i=>{t.rc.containsKey(i)||og(t,i)})}function og(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Qp(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),au(t))}function of(t,e,n){for(const i of n)i instanceof tg?(t.rc.addReference(i.key,e),W1(t,i)):i instanceof ng?(U("SyncEngine","Document no longer in limbo: "+i.key),t.rc.removeReference(i.key,e),t.rc.containsKey(i.key)||og(t,i.key)):Y()}function W1(t,e){const n=e.key,i=n.path.canonicalString();t.sc.get(n)||t.nc.has(i)||(U("SyncEngine","New document in limbo: "+n),t.nc.add(i),au(t))}function au(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new B(Ie.fromString(e)),i=t.cc.next();t.ic.set(i,new z1(n)),t.sc=t.sc.insert(n,i),Wp(t.remoteStore,new Kn(ii(Kc(n.path)),i,2,Bc.ot))}}async function ms(t,e,n){const i=X(t),r=[],s=[],o=[];i.tc.isEmpty()||(i.tc.forEach((a,l)=>{o.push(i.hc(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=eu.Vi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),i.Zu.Go(r),await async function(a,l){const c=X(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(l,d=>I.forEach(d.Pi,f=>c.persistence.referenceDelegate.addReference(u,d.targetId,f)).next(()=>I.forEach(d.vi,f=>c.persistence.referenceDelegate.removeReference(u,d.targetId,f)))))}catch(u){if(!cs(u))throw u;U("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const f=c.$i.get(d),p=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(p);c.$i=c.$i.insert(d,g)}}}(i.localStore,s))}async function Q1(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const i=await qp(n.localStore,e);n.currentUser=e,function(r,s){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new j(E.CANCELLED,s))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ms(n,i.Ki)}}function Y1(t,e){const n=X(t),i=n.ic.get(e);if(i&&i.Xu)return se().add(i.key);{let r=se();const s=n.ec.get(e);if(!s)return r;for(const o of s){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function X1(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ig.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Y1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=H1.bind(null,e),e.Zu.Go=P1.bind(null,e.eventManager),e.Zu.lc=M1.bind(null,e.eventManager),e}function J1(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=G1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=K1.bind(null,e),e}class Z1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=aa(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return i1(this.persistence,new t1,e.initialUser,this.wt)}_c(e){return new Zx(Zc.Ms,this.wt)}dc(e){return new u1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class e_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>sf(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Q1.bind(null,this.syncEngine),await A1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new N1}createDatastore(e){const n=aa(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new m1(r));var r;return function(s,o,a,l){return new b1(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>sf(this.syncEngine,a,0),o=tf.V()?new tf:new d1,new w1(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,l,c){const u=new V1(i,r,s,o,a,l);return c&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);U("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await hs(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=ft.UNAUTHENTICATED,this.clientId=hp.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=su(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function i_(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await qp(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function r_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await s_(t);U("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>nf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>nf(e.remoteStore,s)),t.onlineComponents=e}async function s_(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await i_(t,new Z1)),t.offlineComponents}async function ag(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await r_(t,new e_)),t.onlineComponents}function o_(t){return ag(t).then(e=>e.syncEngine)}async function af(t){const e=await ag(t),n=e.eventManager;return n.onListen=$1.bind(null,e.syncEngine),n.onUnlisten=B1.bind(null,e.syncEngine),n}const lf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t,e,n){if(!n)throw new j(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function a_(t,e,n,i){if(e===!0&&i===!0)throw new j(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cf(t){if(!B.isDocumentKey(t))throw new j(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uf(t){if(B.isDocumentKey(t))throw new j(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lu(t);throw new j(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function l_(t,e){if(e<=0)throw new j(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,a_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new df({}),this._settingsFrozen=!1,e instanceof Pi?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new j(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(r.options.projectId)}(e))}get app(){if(!this._app)throw new j(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new df(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ck;switch(n.type){case"gapi":const i=n.client;return xe(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Nk(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new j(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lf.get(e);n&&(U("ComponentProvider","Removing Datastore"),lf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class Xi{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Xi(this.firestore,e,this._query)}}class yn extends Xi{constructor(e,n,i){super(e,n,Kc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new B(e))}withConverter(e){return new yn(this.firestore,e,this._path)}}function c_(t,e,...n){if(t=nt(t),lg("collection","path",e),t instanceof cu){const i=Ie.fromString(e,...n);return uf(i),new yn(t,null,i)}{if(!(t instanceof kt||t instanceof yn))throw new j(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ie.fromString(e,...n));return uf(i),new yn(t.firestore,null,i)}}function $l(t,e,...n){if(t=nt(t),arguments.length===1&&(e=hp.I()),lg("doc","path",e),t instanceof cu){const i=Ie.fromString(e,...n);return cf(i),new kt(t,null,new B(i))}{if(!(t instanceof kt||t instanceof yn))throw new j(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ie.fromString(e,...n));return cf(i),new kt(t.firestore,t instanceof yn?t.converter:null,new B(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Gp(this,"async_queue_retry"),this.Kc=()=>{const n=ja();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=ja();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=ja();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Gn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!cs(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(i=>{this.Bc=i,this.Lc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw En("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Lc=!1,i))));return this.Oc=n,n}enqueueAfterDelay(e,n,i){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=ru.createAndSchedule(this,e,n,i,s=>this.Wc(s));return this.$c.push(r),r}Gc(){this.Bc&&Y()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function ff(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ui extends cu{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new u_,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ug(this),this._firestoreClient.terminate()}}function d_(t=um()){return bc(t,"firestore").getImmediate()}function cg(t){return t._firestoreClient||ug(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ug(t){var e;const n=t._freezeSettings(),i=function(r,s,o,a){return new jk(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new n_(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zi(Ye.fromBase64String(e))}catch(n){throw new j(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zi(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=/^__.*__$/;class h_{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Nn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ds(e,this.data,n,this.fieldTransforms)}}class dg{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Nn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class fu{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.wt=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new fu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:i,na:!1});return r.sa(e),r}ia(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:i,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return yo(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(fg(this.Zc)&&f_.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class m_{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=i||aa(e)}aa(e,n,i,r=!1){return new fu({Zc:e,methodName:n,ca:i,path:Je.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function hg(t){const e=t._freezeSettings(),n=aa(t._databaseId);return new m_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function p_(t,e,n,i,r,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,r);hu("Data must be an object, but it was:",o,i);const a=mg(i,o);let l,c;if(s.merge)l=new Ct(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const d of s.mergeFields){const f=jl(e,d,n);if(!o.contains(f))throw new j(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);gg(u,f)||u.push(f)}l=new Ct(u),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new h_(new ht(a),l,c)}class da extends uu{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof da}}function g_(t,e,n,i){const r=t.aa(1,e,n);hu("Data must be an object, but it was:",r,i);const s=[],o=ht.empty();li(i,(l,c)=>{const u=mu(e,l,n);c=nt(c);const d=r.ia(u);if(c instanceof da)s.push(u);else{const f=fa(c,d);f!=null&&(s.push(u),o.set(u,f))}});const a=new Ct(s);return new dg(o,a,r.fieldTransforms)}function b_(t,e,n,i,r,s){const o=t.aa(1,e,n),a=[jl(e,i,n)],l=[r];if(s.length%2!=0)throw new j(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(jl(e,s[f])),l.push(s[f+1]);const c=[],u=ht.empty();for(let f=a.length-1;f>=0;--f)if(!gg(c,a[f])){const p=a[f];let g=l[f];g=nt(g);const x=o.ia(p);if(g instanceof da)c.push(p);else{const y=fa(g,x);y!=null&&(c.push(p),u.set(p,y))}}const d=new Ct(c);return new dg(u,d,o.fieldTransforms)}function fa(t,e){if(pg(t=nt(t)))return hu("Unsupported field value:",e,t),mg(t,e);if(t instanceof uu)return function(n,i){if(!fg(i.Zc))throw i.oa(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=fa(o,i.ra(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ox(i.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Fe.fromDate(n);return{timestampValue:vo(i.wt,r)}}if(n instanceof Fe){const r=new Fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vo(i.wt,r)}}if(n instanceof du)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zi)return{bytesValue:zp(i.wt,n._byteString)};if(n instanceof kt){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Yc(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.oa(`Unsupported field value: ${lu(n)}`)}(t,e)}function mg(t,e){const n={};return mp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):li(t,(i,r)=>{const s=fa(r,e.ea(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function pg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof du||t instanceof zi||t instanceof kt||t instanceof uu)}function hu(t,e,n){if(!pg(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=lu(n);throw i==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+i)}}function jl(t,e,n){if((e=nt(e))instanceof ua)return e._internalPath;if(typeof e=="string")return mu(t,e);throw yo("Field path arguments must be of type string or ",t,!1,void 0,n)}const v_=new RegExp("[~\\*/\\[\\]]");function mu(t,e,n){if(e.search(v_)>=0)throw yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ua(...e.split("."))._internalPath}catch{throw yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yo(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new j(E.INVALID_ARGUMENT,a+t+l)}function gg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new w_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class w_ extends bg{data(){return super.data()}}function pu(t,e){return typeof e=="string"?mu(t,e):e instanceof ua?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vg extends bg{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(pu("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Bs extends vg{data(e={}){return super.data(e)}}class y_{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new dr(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Bs(this._firestore,this._userDataWriter,i.key,i,new dr(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new Bs(i._firestore,i._userDataWriter,o.doc.key,o.doc,new dr(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:s++}))}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Bs(i._firestore,i._userDataWriter,o.doc.key,o.doc,new dr(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:k_(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function k_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wg{}function __(t,...e){for(const n of e)t=n._apply(t);return t}class E_ extends wg{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(i,r,s){if(i.startAt!==null)throw new j(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ii(r,s);return function(a,l){if(wp(a)===null){const c=yp(a);c!==null&&C_(a,c,l.field)}}(i,o),o}(e._query,this.fa,this.wa);return new Xi(e.firestore,e.converter,function(i,r){const s=i.explicitOrderBy.concat([r]);return new us(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function I_(t,e="asc"){const n=e,i=pu("orderBy",t);return new E_(i,n)}class T_ extends wg{constructor(e,n,i){super(),this.type=e,this.ma=n,this.ga=i}_apply(e){return new Xi(e.firestore,e.converter,kp(e._query,this.ma,this.ga))}}function S_(t){return l_("limit",t),new T_("limit",t,"F")}function C_(t,e,n){if(!n.isEqual(e))throw new j(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{convertValue(e,n="none"){switch(ni(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const i={};return li(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new du(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=gp(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(zr(e));default:return null}}convertTimestamp(e){const n=Tn(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Ie.fromString(e);xe(Bp(i));const r=new Pi(i.get(1),i.get(3)),s=new B(i.popFirst(5));return r.isEqual(n)||En(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class yg extends A_{constructor(e){super(),this.firestore=e}convertBytes(e){return new zi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function N_(t,e,n,...i){t=Wn(t,kt);const r=Wn(t.firestore,Ui),s=hg(r);let o;return o=typeof(e=nt(e))=="string"||e instanceof ua?b_(s,"updateDoc",t._key,e,n,i):g_(s,"updateDoc",t._key,e),gu(r,[o.toMutation(t._key,Pt.exists(!0))])}function D_(t){return gu(Wn(t.firestore,Ui),[new Qc(t._key,Pt.none())])}function O_(t,e){const n=Wn(t.firestore,Ui),i=$l(t),r=R_(t.converter,e);return gu(n,[p_(hg(t.firestore),"addDoc",i._key,r,t.converter!==null,{}).toMutation(i._key,Pt.exists(!1))]).then(()=>i)}function P_(t,...e){var n,i,r;t=nt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ff(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ff(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(i=d.error)===null||i===void 0?void 0:i.bind(d),e[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let l,c,u;if(t instanceof kt)c=Wn(t.firestore,Ui),u=Kc(t._key.path),l={next:d=>{e[o]&&e[o](M_(c,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Wn(t,Xi);c=Wn(d.firestore,Ui),u=d._query;const f=new yg(c);l={next:p=>{e[o]&&e[o](new y_(c,f,d,p))},error:e[o+1],complete:e[o+2]},x_(t._query)}return function(d,f,p,g){const x=new t_(g),y=new L1(f,x,p);return d.asyncQueue.enqueueAndForget(async()=>D1(await af(d),y)),()=>{x.Tc(),d.asyncQueue.enqueueAndForget(async()=>O1(await af(d),y))}}(cg(c),u,a,l)}function gu(t,e){return function(n,i){const r=new Gn;return n.asyncQueue.enqueueAndForget(async()=>q1(await o_(n),i,r)),r.promise}(cg(t),e)}function M_(t,e,n){const i=n.docs.get(e._key),r=new yg(t);return new vg(t,r,e._key,i,new dr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Wi=n})(Jr),Ri(new Xn("firestore",(n,{options:i})=>{const r=n.getProvider("app").getImmediate(),s=new Ui(r,new Ak(n.getProvider("auth-internal")),new Ok(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC")),wn(Pd,"3.4.11",t),wn(Pd,"3.4.11","esm2017")})();function bu(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function kg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const L_=kg,xg=new Yr("auth","Firebase",kg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new mc("@firebase/auth");function qs(t,...e){hf.logLevel<=de.ERROR&&hf.error(`Auth (${Jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,...e){throw vu(t,...e)}function Vt(t,...e){return vu(t,...e)}function F_(t,e,n){const i=Object.assign(Object.assign({},L_()),{[e]:n});return new Yr("auth","Firebase",i).create(e,{appName:t.name})}function vu(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return xg.create(t,...e)}function H(t,e,...n){if(!t)throw vu(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qs(e),new Error(e)}function nn(t,e){t||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=new Map;function Qt(t){nn(t instanceof Function,"Expected a class definition");let e=mf.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t,e){const n=bc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(no(s,e!=null?e:{}))return r;Mt(r,"already-initialized")}return n.initialize({options:e})}function z_(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function V_(){return pf()==="http:"||pf()==="https:"}function pf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(V_()||rm()||"connection"in navigator)?navigator.onLine:!0}function j_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.shortDelay=e,this.longDelay=n,nn(n>e,"Short delay should be less than long delay!"),this.isMobile=im()||sm()}get(){return $_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e){nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=new ps(3e4,6e4);function gs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bs(t,e,n,i,r={}){return Eg(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Xr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),_g.fetch()(Ig(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Eg(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},B_),e);try{const r=new H_(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Os(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Os(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Os(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Os(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw F_(t,u,c);Mt(t,u)}}catch(r){if(r instanceof oi)throw r;Mt(t,"network-request-failed")}}async function vs(t,e,n,i,r={}){const s=await bs(t,e,n,i,r);return"mfaPendingCredential"in s&&Mt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ig(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?wu(t.config,r):`${t.config.apiScheme}://${r}`}class H_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Vt(this.auth,"network-request-failed")),q_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Os(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Vt(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(t,e){return bs(t,"POST","/v1/accounts:delete",e)}async function K_(t,e){return bs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function W_(t,e=!1){const n=nt(t),i=await n.getIdToken(e),r=yu(i);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:xr(Ba(r.auth_time)),issuedAtTime:xr(Ba(r.iat)),expirationTime:xr(Ba(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ba(t){return Number(t)*1e3}function yu(t){var e;const[n,i,r]=t.split(".");if(n===void 0||i===void 0||r===void 0)return qs("JWT malformed, contained fewer than 3 sections"),null;try{const s=ew(i);return s?JSON.parse(s):(qs("Failed to decode base64 JWT payload"),null)}catch(s){return qs("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function Q_(t){const e=yu(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof oi&&Y_(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Y_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xr(this.lastLoginAt),this.creationTime=xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t){var e;const n=t.auth,i=await t.getIdToken(),r=await qr(t,K_(n,{idToken:i}));H(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?eE(s.providerUserInfo):[],a=Z_(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Tg(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function J_(t){const e=nt(t);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Z_(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function eE(t){return t.map(e=>{var{providerId:n}=e,i=bu(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(t,e){const n=await Eg(t,{},async()=>{const i=Xr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Ig(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_g.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Q_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await tE(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Hr;return i&&(H(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Tg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return W_(this,e)}reload(){return J_(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ko(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qr(this,G_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:q,emailVerified:Q,isAnonymous:te,providerData:he,stsTokenManager:J}=n;H(q&&J,e,"internal-error");const M=Hr.fromJSON(this.name,J);H(typeof q=="string",e,"internal-error"),on(d,e.name),on(f,e.name),H(typeof Q=="boolean",e,"internal-error"),H(typeof te=="boolean",e,"internal-error"),on(p,e.name),on(g,e.name),on(x,e.name),on(y,e.name),on(S,e.name),on(P,e.name);const ne=new Qn({uid:q,auth:e,email:f,emailVerified:Q,displayName:d,isAnonymous:te,photoURL:g,phoneNumber:p,tenantId:x,stsTokenManager:M,createdAt:S,lastLoginAt:P});return he&&Array.isArray(he)&&(ne.providerData=he.map(ue=>Object.assign({},ue))),y&&(ne._redirectEventId=y),ne}static async _fromIdTokenResponse(e,n,i=!1){const r=new Hr;r.updateFromServerResponse(n);const s=new Qn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await ko(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sg.type="NONE";const gf=Sg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t,e,n){return`firebase:${t}:${e}:${n}`}class Si{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Hs(this.userKey,r.apiKey,s),this.fullPersistenceKey=Hs("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Si(Qt(gf),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Qt(gf);const o=Hs(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Qn._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Si(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Si(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dg(e))return"Blackberry";if(Og(e))return"Webos";if(ku(e))return"Safari";if((e.includes("chrome/")||Ag(e))&&!e.includes("edge/"))return"Chrome";if(Ng(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Cg(t=qe()){return/firefox\//i.test(t)}function ku(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ag(t=qe()){return/crios\//i.test(t)}function Rg(t=qe()){return/iemobile/i.test(t)}function Ng(t=qe()){return/android/i.test(t)}function Dg(t=qe()){return/blackberry/i.test(t)}function Og(t=qe()){return/webos/i.test(t)}function ha(t=qe()){return/iphone|ipad|ipod/i.test(t)}function nE(t=qe()){var e;return ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iE(){return om()&&document.documentMode===10}function Pg(t=qe()){return ha(t)||Ng(t)||Og(t)||Dg(t)||/windows phone/i.test(t)||Rg(t)}function rE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e=[]){let n;switch(t){case"Browser":n=bf(qe());break;case"Worker":n=`${bf(qe())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const s of i)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vf(this),this.idTokenSubscription=new vf(this),this.beforeStateQueue=new sE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Si.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ko(e)}catch(i){if(((n=i)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=j_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Si.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function ma(t){return nt(t)}class vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=uw(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function aE(t,e){return bs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(t,e){return vs(t,"POST","/v1/accounts:signInWithPassword",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(t,e){return vs(t,"POST","/v1/accounts:signInWithEmailLink",gs(t,e))}async function uE(t,e){return vs(t,"POST","/v1/accounts:signInWithEmailLink",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends xu{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Gr(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Gr(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return lE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cE(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return aE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uE(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e){return vs(t,"POST","/v1/accounts:signInWithIdp",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="http://localhost";class ri extends xu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=bu(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new ri(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ci(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ci(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ci(e,n)}buildRequest(){const e={requestUri:dE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hE(t){const e=ar(lr(t)).link,n=e?ar(lr(e)).deep_link_id:null,i=ar(lr(t)).deep_link_id;return(i?ar(lr(i)).link:null)||i||n||e||t}class _u{constructor(e){var n,i,r,s,o,a;const l=ar(lr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=fE((r=l.mode)!==null&&r!==void 0?r:null);H(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hE(e);try{return new _u(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.providerId=Ji.PROVIDER_ID}static credential(e,n){return Gr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=_u.parseLink(n);return H(i,"argument-error"),Gr._fromEmailAndCode(e,i.code,i.tenantId)}}Ji.PROVIDER_ID="password";Ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Lg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ws{constructor(){super("facebook.com")}static credential(e){return ri._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends ws{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ri._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return hn.credential(n,i)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ws{constructor(){super("github.com")}static credential(e){return ri._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ws{constructor(){super("twitter.com")}static credential(e,n){return ri._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return pn.credential(n,i)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mE(t,e){return vs(t,"POST","/v1/accounts:signUp",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Qn._fromIdTokenResponse(e,i,r),o=wf(i);return new si({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=wf(i);return new si({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function wf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends oi{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new xo(e,n,i,r)}}function Fg(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(t,s,e,i):s})}async function pE(t,e,n=!1){const i=await qr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return si._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(t,e,n=!1){var i;const{auth:r}=t,s="reauthenticate";try{const o=await qr(t,Fg(r,s,e,t),n);H(o.idToken,r,"internal-error");const a=yu(o.idToken);H(a,r,"internal-error");const{sub:l}=a;return H(t.uid===l,r,"user-mismatch"),si._forOperation(t,s,o)}catch(o){throw((i=o)===null||i===void 0?void 0:i.code)==="auth/user-not-found"&&Mt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(t,e,n=!1){const i="signIn",r=await Fg(t,i,e),s=await si._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function bE(t,e){return Ug(ma(t),e)}async function vE(t,e,n){const i=ma(t),r=await mE(i,{returnSecureToken:!0,email:e,password:n}),s=await si._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function wE(t,e,n){return bE(nt(t),Ji.credential(e,n))}function yE(t,e,n,i){return nt(t).onAuthStateChanged(e,n,i)}function kE(t){return nt(t).signOut()}const _o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_o,"1"),this.storage.removeItem(_o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){const t=qe();return ku(t)||ha(t)}const _E=1e3,EE=10;class Vg extends zg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xE()&&rE(),this.fallbackToPolling=Pg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);iE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,EE):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},_E)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vg.type="LOCAL";const IE=Vg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g extends zg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$g.type="SESSION";const jg=$g;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new pa(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await TE(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Eu("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function CE(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){return typeof $t().WorkerGlobalScope!="undefined"&&typeof $t().importScripts=="function"}async function AE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NE(){return Bg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="firebaseLocalStorageDb",DE=1,Eo="firebaseLocalStorage",Hg="fbase_key";class ys{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(t,e){return t.transaction([Eo],e?"readwrite":"readonly").objectStore(Eo)}function OE(){const t=indexedDB.deleteDatabase(qg);return new ys(t).toPromise()}function ql(){const t=indexedDB.open(qg,DE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Eo,{keyPath:Hg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Eo)?e(i):(i.close(),await OE(),e(await ql()))})})}async function yf(t,e,n){const i=ga(t,!0).put({[Hg]:e,value:n});return new ys(i).toPromise()}async function PE(t,e){const n=ga(t,!1).get(e),i=await new ys(n).toPromise();return i===void 0?null:i.value}function kf(t,e){const n=ga(t,!0).delete(e);return new ys(n).toPromise()}const ME=800,LE=3;class Gg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ql(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>LE)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(NE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AE(),!this.activeServiceWorker)return;this.sender=new SE(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ql();return await yf(e,_o,"1"),await kf(e,_o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>yf(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>PE(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ga(r,!1).getAll();return new ys(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ME)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gg.type="LOCAL";const FE=Gg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zE(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Vt("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",UE().appendChild(i)})}function VE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ps(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t,e){return e?Qt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends xu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jE(t){return Ug(t.auth,new Iu(t),t.bypassAuthState)}function BE(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),gE(n,new Iu(t),t.bypassAuthState)}async function qE(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),pE(n,new Iu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jE;case"linkViaPopup":case"linkViaRedirect":return qE;case"reauthViaPopup":case"reauthViaRedirect":return BE;default:Mt(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=new ps(2e3,1e4);class ki extends Kg{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=Eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,HE.get())};e()}}ki.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="pendingRedirect",Gs=new Map;class KE extends Kg{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Gs.get(this.auth._key());if(!e){try{const i=await WE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Gs.set(this.auth._key(),e)}return this.bypassAuthState||Gs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WE(t,e){const n=XE(e),i=YE(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function QE(t,e){Gs.set(t._key(),e)}function YE(t){return Qt(t._redirectPersistence)}function XE(t){return Hs(GE,t.config.apiKey,t.name)}async function JE(t,e,n=!1){const i=ma(t),r=$E(i,e),o=await new KE(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=10*60*1e3;class eI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Wg(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZE&&this.cachedEventUids.clear(),this.cachedEventUids.has(xf(e))}saveEventToCache(e){this.cachedEventUids.add(xf(e)),this.lastProcessedEventTime=Date.now()}}function xf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e={}){return bs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rI=/^https?/;async function sI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nI(t);for(const n of e)try{if(oI(n))return}catch{}Mt(t,"unauthorized-domain")}function oI(t){const e=Bl(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!rI.test(n))return!1;if(iI.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new ps(3e4,6e4);function _f(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lI(t){return new Promise((e,n)=>{var i,r,s;function o(){_f(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_f(),n(Vt(t,"network-request-failed"))},timeout:aI.get()})}if(!((r=(i=$t().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=$t().gapi)===null||s===void 0)&&s.load)o();else{const a=VE("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},zE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ks=null,e})}let Ks=null;function cI(t){return Ks=Ks||lI(t),Ks}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=new ps(5e3,15e3),dI="__/auth/iframe",fI="emulator/auth/iframe",hI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pI(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wu(e,fI):`https://${t.config.authDomain}/${dI}`,i={apiKey:e.apiKey,appName:t.name,v:Jr},r=mI.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Xr(i).slice(1)}`}async function gI(t){const e=await cI(t),n=$t().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:pI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hI,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=$t().setTimeout(()=>{s(o)},uI.get());function l(){$t().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vI=500,wI=600,yI="_blank",kI="http://localhost";class Ef{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xI(t,e,n,i=vI,r=wI){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bI),{width:i.toString(),height:r.toString(),top:s,left:o}),c=qe().toLowerCase();n&&(a=Ag(c)?yI:n),Cg(c)&&(e=e||kI,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(nE(c)&&a!=="_self")return _I(e||"",a),new Ef(null);const d=window.open(e||"",a,u);H(d,t,"popup-blocked");try{d.focus()}catch{}return new Ef(d)}function _I(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="__/auth/handler",II="emulator/auth/handler";function If(t,e,n,i,r,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Jr,eventId:r};if(e instanceof Lg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof ws){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${TI(t)}?${Xr(a).slice(1)}`}function TI({config:t}){return t.emulator?wu(t,II):`https://${t.authDomain}/${EI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="webStorageSupport";class SI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jg,this._completeRedirectFn=JE,this._overrideRedirectResult=QE}async _openPopup(e,n,i,r){var s;nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=If(e,n,i,Bl(),r);return xI(e,o,Eu())}async _openRedirect(e,n,i,r){return await this._originValidation(e),CE(If(e,n,i,Bl(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(nn(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await gI(e),i=new eI(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qa,{type:qa},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[qa];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pg()||ku()||ha()}}const CI=SI;var Tf="@firebase/auth",Sf="0.20.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function NI(t){Ri(new Xn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((a,l)=>{H(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mg(t)},u=new oE(a,l,c);return z_(u,n),u})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ri(new Xn("auth-internal",e=>{const n=ma(e.getProvider("auth").getImmediate());return(i=>new AI(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Tf,Sf,RI(t)),wn(Tf,Sf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t=um()){const e=bc(t,"auth");return e.isInitialized()?e.getImmediate():U_(t,{popupRedirectResolver:CI,persistence:[FE,IE,jg]})}NI("Browser");const OI={apiKey:"AIzaSyDgwBjeXR8u3oP30gH45lCHjXL0ccDZcjo",authDomain:"noteballs-b945b.firebaseapp.com",projectId:"noteballs-b945b",storageBucket:"noteballs-b945b.appspot.com",messagingSenderId:"1037466599705",appId:"1:1037466599705:web:b9e5e9f50d515ae632c588"},Qg=cy(OI),PI=d_(Qg),Ps=DI(Qg);let ir,Cf,Ha=null;const Zi=Zh("storeNotes",{state:()=>({notes:[],noteLoaded:!0}),actions:{init(){const t=ks();ir=c_(PI,"users",t.user.id,"notes"),Cf=__(ir,I_("date","desc"),S_(10)),this.getNotes()},async getNotes(){this.noteLoaded=!1,Ha=P_(Cf,t=>{let e=[];t.forEach(n=>{let i={id:n.id,content:n.data().content,date:n.data().date};e.push(i)}),this.notes=e,this.noteLoaded=!0})},async addNote(t){t?await O_(ir,{content:t,date:`${new Date().getTime()}`}):alert("\u8ACB\u8F38\u5165")},async updateNote(t,e){await N_($l(ir,t),{content:e})},async removeNote(t){await D_($l(ir,t))},clearNotes(){this.notes=[],Ha&&Ha()}},getters:{getNoteContent:t=>e=>{var n,i;return(i=(n=t.notes)==null?void 0:n.find(r=>r.id===e))==null?void 0:i.content},totalNotesCount:t=>t.notes.length,totalNotesContent:t=>t.notes.reduce((e,n)=>e+n.content.length,0)}}),ks=Zh("storeAuth",{state:()=>({user:{}}),actions:{init(){const t=Zi();yE(Ps,e=>{e?(this.user.id=e.uid,this.user.email=e.email,this.router.push("/"),t.init()):(this.user={},t.clearNotes(),this.router.replace("/auth"))})},register({email:t,password:e}){vE(Ps,t,e).then(n=>{n.user}).catch(n=>{})},signOut(){kE(Ps).then(()=>{}).catch(t=>{})},login({email:t,password:e}){wE(Ps,t,e).then(n=>{n.user}).catch(n=>{n.message})}}});const MI={class:"my-nav-bar"},LI={class:"navbar is-success",role:"navigation","aria-label":"main navigation"},FI={class:"container is-max-desktop"},UI={class:"navbar-brand"},zI=N("div",{class:"navbar-item is-size-4 is-family-monospace"},"Noteballs",-1),VI=N("span",{"aria-hidden":"true"},null,-1),$I=N("span",{"aria-hidden":"true"},null,-1),jI=N("span",{"aria-hidden":"true"},null,-1),BI=[VI,$I,jI],qI={class:"navbar-start"},HI={class:"navbar-end"},GI=Wr(" Notes "),KI=Wr(" Stats "),WI={__name:"NavBar",setup(t){const e=pt(!0),n=pt(null),i=pt(null),r=ks();Wh(n,()=>{e.value=!0},{ignore:[i]});const s=()=>{e.value=!1,r.signOut()};return(o,a)=>{const l=cc("routerLink");return Le(),at("div",MI,[N("nav",LI,[N("div",FI,[N("div",UI,[zI,N("a",{ref_key:"burg",ref:i,role:"button",class:kn(["navbar-burger",{"is-active":!e.value}]),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:a[0]||(a[0]=c=>e.value=!e.value)},BI,2)]),N("div",{id:"navbarBasicExample",class:kn(["navbar-menu",{"is-active":!e.value}]),ref_key:"navbarMwnuRef",ref:n},[N("div",qI,[Ce(r).user.id?(Le(),at("button",{key:0,class:"button is-small is-info mt-3 ml-3",onClick:s}," Log out "+Yt(Ce(r).user.email),1)):Vo("",!0)]),N("div",HI,[Ne(l,{to:"/",class:"navbar-item","active-class":"is-active",onClick:a[1]||(a[1]=c=>e.value=!e.value)},{default:Ar(()=>[GI]),_:1}),Ne(l,{to:"/stats",class:"navbar-item","active-class":"is-active",onClick:a[2]||(a[2]=c=>e.value=!e.value)},{default:Ar(()=>[KI]),_:1})])],2)])])])}}};const QI={class:"container is-max-desktop"},YI={__name:"App",setup(t){const e=ks();return Lo(()=>{e.init()}),(n,i)=>{const r=cc("routerView");return Le(),at(rt,null,[Ne(WI,{class:"mb-4"}),N("div",QI,[Ne(r)])],64)}}};/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Yg=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",er=t=>Yg?Symbol(t):"_vr_"+t,XI=er("rvlm"),Af=er("rvd"),ba=er("r"),Tu=er("rl"),Hl=er("rvl"),vi=typeof window!="undefined";function JI(t){return t.__esModule||Yg&&t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function Ga(t,e){const n={};for(const i in e){const r=e[i];n[i]=Array.isArray(r)?r.map(t):t(r)}return n}const _r=()=>{},ZI=/\/$/,eT=t=>t.replace(ZI,"");function Ka(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),s=e.slice(a+1,l>-1?l:e.length),r=t(s)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=rT(i!=null?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function tT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nT(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Vi(e.matched[i],n.matched[r])&&Xg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!iT(t[n],e[n]))return!1;return!0}function iT(t,e){return Array.isArray(t)?Nf(t,e):Array.isArray(e)?Nf(e,t):t===e}function Nf(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function rT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Kr;(function(t){t.pop="pop",t.push="push"})(Kr||(Kr={}));var Er;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Er||(Er={}));function sT(t){if(!t)if(vi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),eT(t)}const oT=/^[^#]+#/;function aT(t,e){return t.replace(oT,"#")+e}function lT(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const va=()=>({left:window.pageXOffset,top:window.pageYOffset});function cT(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=lT(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Df(t,e){return(history.state?history.state.position-e:-1)+t}const Gl=new Map;function uT(t,e){Gl.set(t,e)}function dT(t){const e=Gl.get(t);return Gl.delete(t),e}let fT=()=>location.protocol+"//"+location.host;function Jg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Rf(l,"")}return Rf(n,t)+i+r}function hT(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const p=Jg(t,location),g=n.value,x=e.value;let y=0;if(f){if(n.value=p,e.value=f,o&&o===g){o=null;return}y=x?f.position-x.position:0}else i(p);r.forEach(S=>{S(n.value,g,{delta:y,type:Kr.pop,direction:y?y>0?Er.forward:Er.back:Er.unknown})})};function l(){o=n.value}function c(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(ve({},f.state,{scroll:va()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Of(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?va():null}}function mT(t){const{history:e,location:n}=window,i={value:Jg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:fT()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=ve({},e.state,Of(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ve({},r.value,e.state,{forward:l,scroll:va()});s(u.current,u,!0);const d=ve({},Of(i.value,l,null),{position:u.position+1},c);s(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function pT(t){t=sT(t);const e=mT(t),n=hT(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ve({location:"",base:t,go:i,createHref:aT.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function gT(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),pT(t)}function bT(t){return typeof t=="string"||t&&typeof t=="object"}function Zg(t){return typeof t=="string"||typeof t=="symbol"}const an={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},eb=er("nf");var Pf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Pf||(Pf={}));function $i(t,e){return ve(new Error,{type:t,[eb]:!0},e)}function ln(t,e){return t instanceof Error&&eb in t&&(e==null||!!(t.type&e))}const Mf="[^/]+?",vT={sensitive:!1,strict:!1,start:!0,end:!0},wT=/[.+*?^${}()[\]/\\]/g;function yT(t,e){const n=ve({},vT,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(wT,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:x,optional:y,regexp:S}=f;s.push({name:g,repeatable:x,optional:y});const P=S||Mf;if(P!==Mf){p+=10;try{new RegExp(`(${P})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${g}" (${P}): `+Q.message)}}let q=x?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(q=y&&c.length<2?`(?:/${q})`:"/"+q),y&&(q+="?"),r+=q,p+=20,y&&(p+=-8),x&&(p+=-20),P===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=s[f-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:x,optional:y}=p,S=g in c?c[g]:"";if(Array.isArray(S)&&!x)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(S)?S.join("/"):S;if(!P)if(y)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=P}}return u}return{re:o,score:i,keys:s,parse:a,stringify:l}}function kT(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xT(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=kT(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Lf(i))return 1;if(Lf(r))return-1}return r.length-i.length}function Lf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _T={type:0,value:""},ET=/[a-zA-Z0-9_]/;function IT(t){if(!t)return[[]];if(t==="/")return[[_T]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:ET.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function TT(t,e,n){const i=yT(IT(t.path),n),r=ve(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ST(t,e){const n=[],i=new Map;e=Uf({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,d,f){const p=!f,g=AT(u);g.aliasOf=f&&f.record;const x=Uf(e,u),y=[g];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const Q of q)y.push(ve({},g,{components:f?f.record.components:g.components,path:Q,aliasOf:f?f.record:g}))}let S,P;for(const q of y){const{path:Q}=q;if(d&&Q[0]!=="/"){const te=d.record.path,he=te[te.length-1]==="/"?"":"/";q.path=d.record.path+(Q&&he+Q)}if(S=TT(q,d,x),f?f.alias.push(S):(P=P||S,P!==S&&P.alias.push(S),p&&u.name&&!Ff(S)&&o(u.name)),"children"in g){const te=g.children;for(let he=0;he<te.length;he++)s(te[he],S,f&&f.children[he])}f=f||S,l(S)}return P?()=>{o(P)}:_r}function o(u){if(Zg(u)){const d=i.get(u);d&&(i.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&xT(u,n[d])>=0&&(u.record.path!==n[d].record.path||!tb(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ff(u)&&i.set(u.record.name,u)}function c(u,d){let f,p={},g,x;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw $i(1,{location:u});x=f.record.name,p=ve(CT(d.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),u.params),g=f.stringify(p)}else if("path"in u)g=u.path,f=n.find(P=>P.re.test(g)),f&&(p=f.parse(g),x=f.record.name);else{if(f=d.name?i.get(d.name):n.find(P=>P.re.test(d.path)),!f)throw $i(1,{location:u,currentLocation:d});x=f.record.name,p=ve({},d.params,u.params),g=f.stringify(p)}const y=[];let S=f;for(;S;)y.unshift(S.record),S=S.parent;return{name:x,path:g,params:p,matched:y,meta:NT(y)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function CT(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function AT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:RT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function RT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function NT(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function Uf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function tb(t,e){return e.children.some(n=>n===t||tb(t,n))}const nb=/#/g,DT=/&/g,OT=/\//g,PT=/=/g,MT=/\?/g,ib=/\+/g,LT=/%5B/g,FT=/%5D/g,rb=/%5E/g,UT=/%60/g,sb=/%7B/g,zT=/%7C/g,ob=/%7D/g,VT=/%20/g;function Su(t){return encodeURI(""+t).replace(zT,"|").replace(LT,"[").replace(FT,"]")}function $T(t){return Su(t).replace(sb,"{").replace(ob,"}").replace(rb,"^")}function Kl(t){return Su(t).replace(ib,"%2B").replace(VT,"+").replace(nb,"%23").replace(DT,"%26").replace(UT,"`").replace(sb,"{").replace(ob,"}").replace(rb,"^")}function jT(t){return Kl(t).replace(PT,"%3D")}function BT(t){return Su(t).replace(nb,"%23").replace(MT,"%3F")}function qT(t){return t==null?"":BT(t).replace(OT,"%2F")}function Io(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function HT(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(ib," "),o=s.indexOf("="),a=Io(o<0?s:s.slice(0,o)),l=o<0?null:Io(s.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function zf(t){let e="";for(let n in t){const i=t[n];if(n=jT(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(i)?i.map(s=>s&&Kl(s)):[i&&Kl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function GT(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function rr(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function dn(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a($i(4,{from:n,to:e})):d instanceof Error?a(d):bT(d)?a($i(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Wa(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(KT(a)){const c=(a.__vccOpts||a)[e];c&&r.push(dn(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=JI(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&dn(f,n,i,s,o)()}))}}return r}function KT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Vf(t){const e=Ot(ba),n=Ot(Tu),i=lt(()=>e.resolve(Ce(t.to))),r=lt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Vi.bind(null,u));if(f>-1)return f;const p=$f(l[c-2]);return c>1&&$f(u)===p&&d[d.length-1].path!==p?d.findIndex(Vi.bind(null,l[c-2])):f}),s=lt(()=>r.value>-1&&XT(n.params,i.value.params)),o=lt(()=>r.value>-1&&r.value===n.matched.length-1&&Xg(n.params,i.value.params));function a(l={}){return YT(l)?e[Ce(t.replace)?"replace":"push"](Ce(t.to)).catch(_r):Promise.resolve()}return{route:i,href:lt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const WT=Sh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vf,setup(t,{slots:e}){const n=Cn(Vf(t)),{options:i}=Ot(ba),r=lt(()=>({[jf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[jf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Hh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),QT=WT;function YT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function XT(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function $f(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jf=(t,e,n)=>t!=null?t:e!=null?e:n,JT=Sh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Ot(Hl),r=lt(()=>t.route||i.value),s=Ot(Af,0),o=lt(()=>r.value.matched[s]);Fs(Af,s+1),Fs(XI,o),Fs(Hl,r);const a=pt();return Bn(()=>[a.value,o.value,t.name],([l,c,u],[d,f,p])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Vi(c,f)||!d)&&(c.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return Bf(n.default,{Component:u,route:l});const f=c.props[t.name],p=f?f===!0?l.params:typeof f=="function"?f(l):f:null,x=Hh(u,ve({},p,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return Bf(n.default,{Component:x,route:l})||x}}});function Bf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ZT=JT;function e3(t){const e=ST(t.routes,t),n=t.parseQuery||HT,i=t.stringifyQuery||zf,r=t.history,s=rr(),o=rr(),a=rr(),l=Jb(an);let c=an;vi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ga.bind(null,v=>""+v),d=Ga.bind(null,qT),f=Ga.bind(null,Io);function p(v,F){let R,z;return Zg(v)?(R=e.getRecordMatcher(v),z=F):z=v,e.addRoute(z,R)}function g(v){const F=e.getRecordMatcher(v);F&&e.removeRoute(F)}function x(){return e.getRoutes().map(v=>v.record)}function y(v){return!!e.getRecordMatcher(v)}function S(v,F){if(F=ve({},F||l.value),typeof v=="string"){const ee=Ka(n,v,F.path),h=e.resolve({path:ee.path},F),m=r.createHref(ee.fullPath);return ve(ee,h,{params:f(h.params),hash:Io(ee.hash),redirectedFrom:void 0,href:m})}let R;if("path"in v)R=ve({},v,{path:Ka(n,v.path,F.path).path});else{const ee=ve({},v.params);for(const h in ee)ee[h]==null&&delete ee[h];R=ve({},v,{params:d(v.params)}),F.params=d(F.params)}const z=e.resolve(R,F),pe=v.hash||"";z.params=u(f(z.params));const ke=tT(i,ve({},v,{hash:$T(pe),path:z.path})),re=r.createHref(ke);return ve({fullPath:ke,hash:pe,query:i===zf?GT(v.query):v.query||{}},z,{redirectedFrom:void 0,href:re})}function P(v){return typeof v=="string"?Ka(n,v,l.value.path):ve({},v)}function q(v,F){if(c!==v)return $i(8,{from:F,to:v})}function Q(v){return J(v)}function te(v){return Q(ve(P(v),{replace:!0}))}function he(v){const F=v.matched[v.matched.length-1];if(F&&F.redirect){const{redirect:R}=F;let z=typeof R=="function"?R(v):R;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=P(z):{path:z},z.params={}),ve({query:v.query,hash:v.hash,params:v.params},z)}}function J(v,F){const R=c=S(v),z=l.value,pe=v.state,ke=v.force,re=v.replace===!0,ee=he(R);if(ee)return J(ve(P(ee),{state:pe,force:ke,replace:re}),F||R);const h=R;h.redirectedFrom=F;let m;return!ke&&nT(i,z,R)&&(m=$i(16,{to:h,from:z}),ui(z,z,!0,!1)),(m?Promise.resolve(m):ne(h,z)).catch(b=>ln(b)?ln(b,2)?b:bt(b):ye(b,h,z)).then(b=>{if(b){if(ln(b,2))return J(ve(P(b.to),{state:pe,force:ke,replace:re}),F||h)}else b=Te(h,z,!0,re,pe);return ue(h,z,b),b})}function M(v,F){const R=q(v,F);return R?Promise.reject(R):Promise.resolve()}function ne(v,F){let R;const[z,pe,ke]=t3(v,F);R=Wa(z.reverse(),"beforeRouteLeave",v,F);for(const ee of z)ee.leaveGuards.forEach(h=>{R.push(dn(h,v,F))});const re=M.bind(null,v,F);return R.push(re),mi(R).then(()=>{R=[];for(const ee of s.list())R.push(dn(ee,v,F));return R.push(re),mi(R)}).then(()=>{R=Wa(pe,"beforeRouteUpdate",v,F);for(const ee of pe)ee.updateGuards.forEach(h=>{R.push(dn(h,v,F))});return R.push(re),mi(R)}).then(()=>{R=[];for(const ee of v.matched)if(ee.beforeEnter&&!F.matched.includes(ee))if(Array.isArray(ee.beforeEnter))for(const h of ee.beforeEnter)R.push(dn(h,v,F));else R.push(dn(ee.beforeEnter,v,F));return R.push(re),mi(R)}).then(()=>(v.matched.forEach(ee=>ee.enterCallbacks={}),R=Wa(ke,"beforeRouteEnter",v,F),R.push(re),mi(R))).then(()=>{R=[];for(const ee of o.list())R.push(dn(ee,v,F));return R.push(re),mi(R)}).catch(ee=>ln(ee,8)?ee:Promise.reject(ee))}function ue(v,F,R){for(const z of a.list())z(v,F,R)}function Te(v,F,R,z,pe){const ke=q(v,F);if(ke)return ke;const re=F===an,ee=vi?history.state:{};R&&(z||re?r.replace(v.fullPath,ve({scroll:re&&ee&&ee.scroll},pe)):r.push(v.fullPath,pe)),l.value=v,ui(v,F,R,re),bt()}let Oe;function gt(){Oe||(Oe=r.listen((v,F,R)=>{const z=S(v),pe=he(z);if(pe){J(ve(pe,{replace:!0}),z).catch(_r);return}c=z;const ke=l.value;vi&&uT(Df(ke.fullPath,R.delta),va()),ne(z,ke).catch(re=>ln(re,12)?re:ln(re,2)?(J(re.to,z).then(ee=>{ln(ee,20)&&!R.delta&&R.type===Kr.pop&&r.go(-1,!1)}).catch(_r),Promise.reject()):(R.delta&&r.go(-R.delta,!1),ye(re,z,ke))).then(re=>{re=re||Te(z,ke,!1),re&&(R.delta?r.go(-R.delta,!1):R.type===Kr.pop&&ln(re,20)&&r.go(-1,!1)),ue(z,ke,re)}).catch(_r)}))}let ut=rr(),Pe=rr(),Me;function ye(v,F,R){bt(v);const z=Pe.list();return z.length?z.forEach(pe=>pe(v,F,R)):console.error(v),Promise.reject(v)}function me(){return Me&&l.value!==an?Promise.resolve():new Promise((v,F)=>{ut.add([v,F])})}function bt(v){return Me||(Me=!v,gt(),ut.list().forEach(([F,R])=>v?R(v):F()),ut.reset()),v}function ui(v,F,R,z){const{scrollBehavior:pe}=t;if(!vi||!pe)return Promise.resolve();const ke=!R&&dT(Df(v.fullPath,0))||(z||!R)&&history.state&&history.state.scroll||null;return lc().then(()=>pe(v,F,ke)).then(re=>re&&cT(re)).catch(re=>ye(re,v,F))}const qt=v=>r.go(v);let Lt;const Et=new Set;return{currentRoute:l,addRoute:p,removeRoute:g,hasRoute:y,getRoutes:x,resolve:S,options:t,push:Q,replace:te,go:qt,back:()=>qt(-1),forward:()=>qt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Pe.add,isReady:me,install(v){const F=this;v.component("RouterLink",QT),v.component("RouterView",ZT),v.config.globalProperties.$router=F,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(l)}),vi&&!Lt&&l.value===an&&(Lt=!0,Q(r.location).catch(pe=>{}));const R={};for(const pe in an)R[pe]=lt(()=>l.value[pe]);v.provide(ba,F),v.provide(Tu,Cn(R)),v.provide(Hl,l);const z=v.unmount;Et.add(v),v.unmount=function(){Et.delete(v),Et.size<1&&(c=an,Oe&&Oe(),Oe=null,l.value=an,Lt=!1,Me=!1),z()}}}}function mi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function t3(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Vi(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Vi(c,l))||r.push(l))}return[n,i,r]}function n3(){return Ot(ba)}function i3(){return Ot(Tu)}const r3={class:"modal is-active p-2"},s3=N("div",{class:"modal-background"},null,-1),o3={class:"modal-card-head"},a3=N("p",{class:"modal-card-title"},"Delete Note",-1),l3=["onClick"],c3=N("section",{class:"modal-card-body"}," Are you sure you want to delete this note? ",-1),u3={class:"modal-card-foot is-justify-content-end"},d3=["onClick"],f3=["onClick"],h3={__name:"ModalDeleteNote",props:{modelValue:{type:Boolean,required:!1},noteId:{type:String,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,i=Zi(),r=pt(null),s=()=>{e("update:modelValue",!1)};Wh(r,s);const o=l=>{l.keyCode===27&&s()};Lo(()=>{document.addEventListener("keyup",o)}),Fo(()=>{document.removeEventListener("keyup",o)});const a=()=>{i.removeNote(n.noteId),s()};return(l,c)=>(Le(),at("div",r3,[s3,N("div",{ref_key:"deleteModal",ref:r,class:"modal-card"},[N("header",o3,[a3,N("button",{class:"delete","aria-label":"close",onClick:Hn(s,["prevent"])},null,8,l3)]),c3,N("footer",u3,[N("button",{class:"button",onClick:Hn(s,["prevent"])},"Cancel",8,d3),N("button",{class:"button is-danger",onClick:Hn(a,["prevent"])}," Delete ",8,f3)])],512)]))}},m3={class:"card mb-4"},p3={class:"card-content"},g3={class:"content"},b3={class:"columns is-mobile has-text-grey-light"},v3={class:"column"},w3={class:"column has-text-right"},y3={class:"card-footer"},k3=Wr("Edit"),x3={__name:"Notes",props:{note:{type:Object,required:!0}},setup(t){const e=t;Zi();const n=lt(()=>e.note.content.length),i=Cn({deleteNote:!1,editnote:!1}),r=lt(()=>{let s=new Date(parseInt(e.note.date));return q0(s,"YYYY-MM-DD @ HH:mm:ss").value});return(s,o)=>{const a=cc("RouterLink");return Le(),at("div",m3,[N("div",p3,[N("div",g3,[Wr(Yt(t.note.content)+" ",1),N("div",b3,[N("small",v3,Yt(Ce(r)),1),N("small",w3,Yt(Ce(n))+" characters",1)])])]),N("footer",y3,[Ne(a,{to:`/editnote/${t.note.id}`,href:"#",class:"card-footer-item"},{default:Ar(()=>[k3]),_:1},8,["to"]),N("a",{href:"#",class:"card-footer-item",onClick:o[0]||(o[0]=Hn(l=>i.deleteNote=!0,["prevent"]))}," Delete ")]),i.deleteNote?(Le(),Uo(h3,{key:0,modelValue:i.deleteNote,"onUpdate:modelValue":o[1]||(o[1]=l=>i.deleteNote=l),"note-id":t.note.id},null,8,["modelValue","note-id"])):Vo("",!0)])}}},ab={mounted(t){t.focus()}},_3={key:0,class:"label has-text-white",for:""},E3={class:"field"},I3={class:"control"},T3=["placeholder"],S3={class:"field is-grouped is-grouped-right"},C3={class:"control"},A3={__name:"NewAddNote",props:{modelValue:{type:String},bgColor:{type:String,default:"success"},placeholder:{type:String,default:"Add a new notes"},label:{type:String,default:""}},emits:["update:modelValue"],setup(t,{expose:e,emit:n}){const i=pt(null);return e({focusTextArea:()=>{i.value.focus()}}),(s,o)=>(Le(),at("div",{class:kn(["card p-4 mb-5",`has-background-${t.bgColor}-dark`])},[t.label?(Le(),at("label",_3,Yt(t.label),1)):Vo("",!0),N("div",E3,[N("div",I3,[Xs(N("textarea",{id:"tar","onUpdate:modelValue":o[0]||(o[0]=a=>Se(modelValue)?modelValue.value=a:null),class:"textarea",placeholder:t.placeholder,maxlength:"80",ref_key:"textareaRef",ref:i,onInput:o[1]||(o[1]=a=>s.$emit("update:modelValue",t.modelValue))},null,40,T3),[[to,t.modelValue],[Ce(ab)]])])]),N("div",S3,[N("div",C3,[Pv(s.$slots,"buttons")])])],2))}};function lb(t,e){Bn(t,n=>{n.length===e&&alert(`\u592A\u9577${e}`)})}const R3={class:"notes"},N3=["disabled"],D3={key:0,class:"progress is-large is-success",max:"100"},O3={key:0,class:"is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"},P3={__name:"ViewNotes",setup(t){const e=Zi(),{addNote:n}=e,{notes:i,noteLoaded:r}=X0(e),s=pt(null),o=pt(""),a=()=>{n(o.value),o.value="",s.value.focusTextArea()};return lb(o,50),(l,c)=>(Le(),at("div",R3,[Ne(A3,{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=u=>o.value=u),ref_key:"editRef",ref:s},{buttons:Ar(()=>[N("button",{class:"button is-link has-background-success",disabled:!o.value,onClick:a}," Add New Note ",8,N3)]),_:1},8,["modelValue"]),Ce(r)?(Le(),at(rt,{key:1},[(Le(!0),at(rt,null,Ov(Ce(i),u=>(Le(),Uo(x3,{key:u.id,note:u},null,8,["note"]))),128)),Ce(i).length<1?(Le(),at("div",O3," No notes here yooo~~~ ")):Vo("",!0)],64)):(Le(),at("progress",D3))]))}},M3={class:"stats"},L3={class:"table is-fullwidth"},F3=N("thead",null,[N("tr",null,[N("th",null,"Stat"),N("th",null,"Value")])],-1),U3=N("td",null,"Number of Notes",-1),z3=N("td",null,"Number of Character (of all notes)",-1),V3={__name:"ViewStats",setup(t){const e=Zi(),n=pt("");return lb(n,20),(i,r)=>(Le(),at("div",M3,[N("table",L3,[F3,N("tbody",null,[N("tr",null,[U3,N("td",null,Yt(Ce(e).totalNotesCount),1)]),N("tr",null,[z3,N("td",null,Yt(Ce(e).totalNotesContent),1)])])]),Xs(N("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>n.value=s),type:"text",class:"input",placeholder:"Do You Like noteball?"},null,512),[[to,n.value],[Ce(ab)]])]))}},$3={__name:"ViewEditNote",props:{modelValue:{type:String,default:""}},setup(t){const e=pt(""),n=i3();n3();const i=Zi();return e.value=i.getNoteContent(n.params.id),(r,s)=>(Le(),at("div",null,"123"))}};const j3={class:"auth"},B3={class:"tabs is-centered"},q3={class:"card auth-form"},H3={class:"card-content"},G3={class:"title has-text-centered"},K3={class:"content"},W3=["onSubmit"],Q3={class:"field"},Y3=N("label",{class:"label"},"Email",-1),X3={class:"control"},J3={class:"field"},Z3=N("label",{class:"label"},"Password",-1),e5={class:"control"},t5={class:"field is-grouped is-grouped-right"},n5={class:"control"},i5={class:"button is-primary"},r5={__name:"ViewAuth",setup(t){const e=ks(),n=pt(!1),i=lt(()=>n.value?"Register":"Login"),r=Cn({email:"",password:""}),s=()=>{!r.email||!r.password||(n.value?e.register(r):e.login(r))};return(o,a)=>(Le(),at("div",j3,[N("div",B3,[N("ul",null,[N("li",{class:kn({"is-active":!n.value})},[N("a",{onClick:a[0]||(a[0]=Hn(l=>n.value=!1,["prevent"]))},"Login")],2),N("li",{class:kn({"is-active":n.value})},[N("a",{onClick:a[1]||(a[1]=Hn(l=>n.value=!0,["prevent"]))},"Register")],2)])]),N("div",q3,[N("div",H3,[N("div",G3,Yt(Ce(i)),1),N("div",K3,[N("form",{onSubmit:Hn(s,["prevent"])},[N("div",Q3,[Y3,N("div",X3,[Xs(N("input",{"onUpdate:modelValue":a[2]||(a[2]=l=>r.email=l),class:"input",type:"text",placeholder:"e.g pee@gmail.com"},null,512),[[to,r.email]])])]),N("div",J3,[Z3,N("div",e5,[Xs(N("input",{"onUpdate:modelValue":a[3]||(a[3]=l=>r.password=l),class:"input",type:"password",placeholder:"enter password"},null,512),[[to,r.password]])])]),N("div",t5,[N("p",n5,[N("button",i5,Yt(Ce(i)),1)])])],40,W3)])])])]))}},s5=[{path:"/",name:"notes",component:P3},{path:"/editnote/:id",name:"edit-note",component:$3},{path:"/stats",name:"stats",component:V3},{path:"/auth",name:"auth",component:r5}],Cu=e3({history:gT(),routes:s5});Cu.beforeEach((t,e)=>{const n=ks();if(console.log(t.name),console.log(n.user.id),t.name==="auth"&&n.user.id)return!1;if(t.name!=="auth"&&!n.user.id)return{path:"/auth"}});const cb=G0();cb.use(({store:t})=>{t.router=Yn(Cu)});L0(YI).use(cb).use(Cu).mount("#app");
