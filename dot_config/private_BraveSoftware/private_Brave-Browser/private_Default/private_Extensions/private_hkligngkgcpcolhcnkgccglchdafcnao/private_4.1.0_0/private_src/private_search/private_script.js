(()=>{"use strict";var e,t={4627:(e,t,n)=>{var r=n(341),o=n(729),s=n(9956),a=n(6229),i=n(2502);const c={class:"page-overlay"},d={key:0,class:"error-content"},u={class:"error-text"},h={key:1,class:"spinner",src:"/src/assets/icons/misc/spinner.svg"};n(5601);var l=n(3364),p=n(2667);n(8487),n(3145);var g=n(3145);const f={components:{[l.gV.name]:l.gV,[l.JO.name]:l.JO},data:function(){return{dataLoaded:!1,error:"",showSpinner:!1,engine:""}},methods:{setup:async function(){const e=new URL(window.location.href).searchParams.get("id"),t=await g.runtime.sendMessage({id:"storageRequest",asyncResponse:!0,saveReceipt:!0,storageId:e});if(t){this.showSpinner=!0,this.dataLoaded=!0,this.engine=t.search.engine,document.title=(0,p.Q)("pageTitle",[(0,p.Q)(`optionTitle_${this.engine}`),(0,p.Q)("extensionName")]);try{const e=await g.runtime.sendMessage({id:"storageRequest",asyncResponse:!0,saveReceipt:!0,storageId:t.docId});e?await this.search({session:t.session,search:t.search,doc:e}):this.error=(0,p.Q)("error_sessionExpiredEngine",(0,p.Q)(`engineName_${this.engine}`))}catch(e){throw this.error=(0,p.Q)("error_engine",(0,p.Q)(`engineName_${this.engine}`)),console.log(e.toString()),e}}else this.error=(0,p.Q)("error_sessionExpired"),this.dataLoaded=!0},search:async function({session:e,search:t,doc:n}={}){if("permacc"===this.engine){const r=await async function({session:e,search:t,doc:n}={}){const r=await fetch(`https://api.perma.cc/v1/public/archives/?format=json&limit=1&url=${encodeURIComponent(n.docUrl)}`,{referrer:"",mode:"cors",method:"GET"});if(200!==r.status)throw new Error(`API response: ${r.status}, ${await r.text()}`);const o=(await r.json()).objects[0];if(o)return`https://perma.cc/${o.guid}`}({session:e,search:t,doc:n});(0,o.EA)(r)?window.location.replace(r):this.error=(0,p.Q)("error_noResults")}}},created:function(){this.setup()}},v=(0,n(6021).Z)(f,[["render",function(e,t,n,o,s,l){const p=(0,a.up)("vn-icon"),g=(0,a.up)("vn-app");return(0,a.wy)(((0,a.wg)(),(0,a.j4)(g,null,{default:(0,a.w5)((()=>[(0,a._)("div",c,[e.error?((0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(p,{class:"error-icon",src:"/src/assets/icons/misc/error.svg"}),(0,a.Uk)(),(0,a._)("div",u,(0,i.toDisplayString)(e.error),1)])):(0,a.kq)("",!0),(0,a.Uk)(),e.showSpinner&&!e.error?((0,a.wg)(),(0,a.iD)("img",h)):(0,a.kq)("",!0)])])),_:1},512)),[[r.vShow,e.dataLoaded]])}]]);!async function(){await(0,o.hR)(["400 14px Roboto","500 14px Roboto"]);const e=(0,r.createApp)(v);await(0,o.cO)(e),await(0,s.y)(e),e.mount("body")}()},729:(e,t,n)=>{n.d(t,{EA:()=>c,Z8:()=>d,cO:()=>i,hR:()=>a,qA:()=>u}),n(4573),n(5601);var r=n(1068),o=n(2667),s=(n(5221),n(7788),n(3145));async function a(e){await Promise.allSettled(e.map((e=>document.fonts.load(e))))}async function i(e){const t=await(0,o.Xf)(),n=[t.targetEnv,t.os];document.documentElement.classList.add(...n),e&&(e.config.globalProperties.$env=t)}function c(e){try{if(e.length>2048)return;const t=new URL(e);if(/^(?:https?|ftp):$/i.test(t.protocol))return!0}catch(e){}}async function d(e){return e||({appTheme:e}=await r.ZP.get("appTheme")),"auto"===e&&(e=(0,o.yt)().matches?"dark":"light"),e}function u(e){!function(e){(0,o.yt)().addEventListener("change",(function(){e()}))}(e),function(e){s.storage.onChanged.addListener((function(t,n){"local"===n&&t.appTheme&&e()}))}(e)}},3364:(e,t,n)=>{n.d(t,{JO:()=>o.Z,gV:()=>r.Z,hU:()=>s.Z});var r=n(7950),o=(n(4946),n(8958),n(9330),n(5553),n(8214),n(1786),n(9219),n(581),n(8662)),s=n(9020);n(6690),n(4153),n(137),n(6167),n(7316),n(7451),n(7012),n(619),n(6446)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}};return t[e].call(s.exports,s,s.exports,r),s.exports}r.m=t,e=[],r.O=(t,n,o,s)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,o,s]=e[u],i=!0,c=0;c<n.length;c++)(!1&s||a>=s)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,s<a&&(a=s));if(i){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=464,(()=>{var e={464:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,s,[a,i,c]=n,d=0;if(a.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var u=c(r)}for(t&&t(n);d<a.length;d++)s=a[d],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},n=globalThis.webpackChunkweb_archives=globalThis.webpackChunkweb_archives||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[787],(()=>r(4627)));o=r.O(o)})();