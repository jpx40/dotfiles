(()=>{var r={8257:(r,e,t)=>{var n=t(9212),s=t(5637),o=TypeError;r.exports=function(r){if(n(r))return r;throw o(s(r)+" is not a function")}},2569:(r,e,t)=>{var n=t(794),s=String,o=TypeError;r.exports=function(r){if(n(r))return r;throw o(s(r)+" is not an object")}},57:(r,e,t)=>{var n=t(8494),s=t(4615),o=t(4677);r.exports=n?function(r,e,t){return s.f(r,e,o(1,t))}:function(r,e,t){return r[e]=t,r}},4677:r=>{r.exports=function(r,e){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:e}}},2499:(r,e,t)=>{var n=t(9594),s=t(4615);r.exports=function(r,e,t){return t.get&&n(t.get,e,{getter:!0}),t.set&&n(t.set,e,{setter:!0}),s.f(r,e,t)}},2296:(r,e,t)=>{var n=t(7583),s=Object.defineProperty;r.exports=function(r,e){try{s(n,r,{value:e,configurable:!0,writable:!0})}catch(t){n[r]=e}return e}},8494:(r,e,t)=>{var n=t(6544);r.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2952:r=>{var e="object"==typeof document&&document.all,t=void 0===e&&void 0!==e;r.exports={all:e,IS_HTMLDDA:t}},6668:(r,e,t)=>{var n=t(7583),s=t(794),o=n.document,a=s(o)&&s(o.createElement);r.exports=function(r){return a?o.createElement(r):{}}},6918:r=>{r.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},4061:(r,e,t)=>{var n,s,o=t(7583),a=t(6918),i=o.process,g=o.Deno,m=i&&i.versions||g&&g.version,c=m&&m.v8;c&&(s=(n=c.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!s&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(s=+n[1]),r.exports=s},6544:r=>{r.exports=function(r){try{return!!r()}catch(r){return!0}}},8987:(r,e,t)=>{var n=t(6544);r.exports=!n((function(){var r=function(){}.bind();return"function"!=typeof r||r.hasOwnProperty("prototype")}))},8262:(r,e,t)=>{var n=t(8987),s=Function.prototype.call;r.exports=n?s.bind(s):function(){return s.apply(s,arguments)}},4340:(r,e,t)=>{var n=t(8494),s=t(2870),o=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,i=s(o,"name"),g=i&&"something"===function(){}.name,m=i&&(!n||n&&a(o,"name").configurable);r.exports={EXISTS:i,PROPER:g,CONFIGURABLE:m}},7386:(r,e,t)=>{var n=t(8987),s=Function.prototype,o=s.call,a=n&&s.bind.bind(o,o);r.exports=n?a:function(r){return function(){return o.apply(r,arguments)}}},5897:(r,e,t)=>{var n=t(7583),s=t(9212);r.exports=function(r,e){return arguments.length<2?(t=n[r],s(t)?t:void 0):n[r]&&n[r][e];var t}},911:(r,e,t)=>{var n=t(8257),s=t(8505);r.exports=function(r,e){var t=r[e];return s(t)?void 0:n(t)}},7583:function(r,e,t){var n=function(r){return r&&r.Math==Math&&r};r.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t.g&&t.g)||function(){return this}()||this||Function("return this")()},2870:(r,e,t)=>{var n=t(7386),s=t(1324),o=n({}.hasOwnProperty);r.exports=Object.hasOwn||function(r,e){return o(s(r),e)}},4639:r=>{r.exports={}},275:(r,e,t)=>{var n=t(8494),s=t(6544),o=t(6668);r.exports=!n&&!s((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},9734:(r,e,t)=>{var n=t(7386),s=t(9212),o=t(1314),a=n(Function.toString);s(o.inspectSource)||(o.inspectSource=function(r){return a(r)}),r.exports=o.inspectSource},2743:(r,e,t)=>{var n,s,o,a=t(5307),i=t(7583),g=t(794),m=t(57),c=t(2870),l=t(1314),A=t(9137),u=t(4639),x="Object already initialized",p=i.TypeError,f=i.WeakMap;if(a||l.state){var d=l.state||(l.state=new f);d.get=d.get,d.has=d.has,d.set=d.set,n=function(r,e){if(d.has(r))throw p(x);return e.facade=r,d.set(r,e),e},s=function(r){return d.get(r)||{}},o=function(r){return d.has(r)}}else{var b=A("state");u[b]=!0,n=function(r,e){if(c(r,b))throw p(x);return e.facade=r,m(r,b,e),e},s=function(r){return c(r,b)?r[b]:{}},o=function(r){return c(r,b)}}r.exports={set:n,get:s,has:o,enforce:function(r){return o(r)?s(r):n(r,{})},getterFor:function(r){return function(e){var t;if(!g(e)||(t=s(e)).type!==r)throw p("Incompatible receiver, "+r+" required");return t}}}},9212:(r,e,t)=>{var n=t(2952),s=n.all;r.exports=n.IS_HTMLDDA?function(r){return"function"==typeof r||r===s}:function(r){return"function"==typeof r}},8505:r=>{r.exports=function(r){return null==r}},794:(r,e,t)=>{var n=t(9212),s=t(2952),o=s.all;r.exports=s.IS_HTMLDDA?function(r){return"object"==typeof r?null!==r:n(r)||r===o}:function(r){return"object"==typeof r?null!==r:n(r)}},6268:r=>{r.exports=!1},5871:(r,e,t)=>{var n=t(5897),s=t(9212),o=t(2447),a=t(7786),i=Object;r.exports=a?function(r){return"symbol"==typeof r}:function(r){var e=n("Symbol");return s(e)&&o(e.prototype,i(r))}},9594:(r,e,t)=>{var n=t(7386),s=t(6544),o=t(9212),a=t(2870),i=t(8494),g=t(4340).CONFIGURABLE,m=t(9734),c=t(2743),l=c.enforce,A=c.get,u=String,x=Object.defineProperty,p=n("".slice),f=n("".replace),d=n([].join),b=i&&!s((function(){return 8!==x((function(){}),"length",{value:8}).length})),v=String(String).split("String"),h=r.exports=function(r,e,t){"Symbol("===p(u(e),0,7)&&(e="["+f(u(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!a(r,"name")||g&&r.name!==e)&&(i?x(r,"name",{value:e,configurable:!0}):r.name=e),b&&t&&a(t,"arity")&&r.length!==t.arity&&x(r,"length",{value:t.arity});try{t&&a(t,"constructor")&&t.constructor?i&&x(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch(r){}var n=l(r);return a(n,"source")||(n.source=d(v,"string"==typeof e?e:"")),r};Function.prototype.toString=h((function(){return o(this)&&A(this).source||m(this)}),"toString")},4615:(r,e,t)=>{var n=t(8494),s=t(275),o=t(7670),a=t(2569),i=t(8734),g=TypeError,m=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l="enumerable",A="configurable",u="writable";e.f=n?o?function(r,e,t){if(a(r),e=i(e),a(t),"function"==typeof r&&"prototype"===e&&"value"in t&&u in t&&!t[u]){var n=c(r,e);n&&n[u]&&(r[e]=t.value,t={configurable:A in t?t[A]:n[A],enumerable:l in t?t[l]:n[l],writable:!1})}return m(r,e,t)}:m:function(r,e,t){if(a(r),e=i(e),a(t),s)try{return m(r,e,t)}catch(r){}if("get"in t||"set"in t)throw g("Accessors not supported");return"value"in t&&(r[e]=t.value),r}},2447:(r,e,t)=>{var n=t(7386);r.exports=n({}.isPrototypeOf)},6252:(r,e,t)=>{var n=t(8262),s=t(9212),o=t(794),a=TypeError;r.exports=function(r,e){var t,i;if("string"===e&&s(t=r.toString)&&!o(i=n(t,r)))return i;if(s(t=r.valueOf)&&!o(i=n(t,r)))return i;if("string"!==e&&s(t=r.toString)&&!o(i=n(t,r)))return i;throw a("Can't convert object to primitive value")}},3955:(r,e,t)=>{var n=t(8505),s=TypeError;r.exports=function(r){if(n(r))throw s("Can't call method on "+r);return r}},9137:(r,e,t)=>{var n=t(7836),s=t(8284),o=n("keys");r.exports=function(r){return o[r]||(o[r]=s(r))}},1314:(r,e,t)=>{var n=t(7583),s=t(2296),o="__core-js_shared__",a=n[o]||s(o,{});r.exports=a},7836:(r,e,t)=>{var n=t(6268),s=t(1314);(r.exports=function(r,e){return s[r]||(s[r]=void 0!==e?e:{})})("versions",[]).push({version:"3.31.0",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",source:"https://github.com/zloirock/core-js"})},4193:(r,e,t)=>{var n=t(4061),s=t(6544),o=t(7583).String;r.exports=!!Object.getOwnPropertySymbols&&!s((function(){var r=Symbol();return!o(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},1324:(r,e,t)=>{var n=t(3955),s=Object;r.exports=function(r){return s(n(r))}},2670:(r,e,t)=>{var n=t(8262),s=t(794),o=t(5871),a=t(911),i=t(6252),g=t(3649),m=TypeError,c=g("toPrimitive");r.exports=function(r,e){if(!s(r)||o(r))return r;var t,g=a(r,c);if(g){if(void 0===e&&(e="default"),t=n(g,r,e),!s(t)||o(t))return t;throw m("Can't convert object to primitive value")}return void 0===e&&(e="number"),i(r,e)}},8734:(r,e,t)=>{var n=t(2670),s=t(5871);r.exports=function(r){var e=n(r,"string");return s(e)?e:e+""}},5637:r=>{var e=String;r.exports=function(r){try{return e(r)}catch(r){return"Object"}}},8284:(r,e,t)=>{var n=t(7386),s=0,o=Math.random(),a=n(1..toString);r.exports=function(r){return"Symbol("+(void 0===r?"":r)+")_"+a(++s+o,36)}},7786:(r,e,t)=>{var n=t(4193);r.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7670:(r,e,t)=>{var n=t(8494),s=t(6544);r.exports=n&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5307:(r,e,t)=>{var n=t(7583),s=t(9212),o=n.WeakMap;r.exports=s(o)&&/native code/.test(String(o))},3649:(r,e,t)=>{var n=t(7583),s=t(7836),o=t(2870),a=t(8284),i=t(4193),g=t(7786),m=n.Symbol,c=s("wks"),l=g?m.for||m:m&&m.withoutSetter||a;r.exports=function(r){return o(c,r)||(c[r]=i&&o(m,r)?m[r]:l("Symbol."+r)),c[r]}},5601:(r,e,t)=>{"use strict";var n=t(8494),s=t(7386),o=t(2499),a=URLSearchParams.prototype,i=s(a.forEach);n&&!("size"in a)&&o(a,"size",{get:function(){var r=0;return i(this,(function(){r++})),r},configurable:!0,enumerable:!0})},3145:function(r,e){var t,n;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,t=function(r){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(void 0===globalThis.browser||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const e="The message port closed before a response was received.",t=r=>{const t={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(t).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class n extends WeakMap{constructor(r,e=void 0){super(e),this.createItem=r}get(r){return this.has(r)||this.set(r,this.createItem(r)),super.get(r)}}const s=(e,t)=>(...n)=>{r.runtime.lastError?e.reject(new Error(r.runtime.lastError.message)):t.singleCallbackArg||n.length<=1&&!1!==t.singleCallbackArg?e.resolve(n[0]):e.resolve(n)},o=r=>1==r?"argument":"arguments",a=(r,e,t)=>new Proxy(e,{apply:(e,n,s)=>t.call(n,r,...s)});let i=Function.call.bind(Object.prototype.hasOwnProperty);const g=(r,e={},t={})=>{let n=Object.create(null),m={has:(e,t)=>t in r||t in n,get(m,c,l){if(c in n)return n[c];if(!(c in r))return;let A=r[c];if("function"==typeof A)if("function"==typeof e[c])A=a(r,r[c],e[c]);else if(i(t,c)){let e=((r,e)=>function(t,...n){if(n.length<e.minArgs)throw new Error(`Expected at least ${e.minArgs} ${o(e.minArgs)} for ${r}(), got ${n.length}`);if(n.length>e.maxArgs)throw new Error(`Expected at most ${e.maxArgs} ${o(e.maxArgs)} for ${r}(), got ${n.length}`);return new Promise(((o,a)=>{if(e.fallbackToNoCallback)try{t[r](...n,s({resolve:o,reject:a},e))}catch(s){console.warn(`${r} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,s),t[r](...n),e.fallbackToNoCallback=!1,e.noCallback=!0,o()}else e.noCallback?(t[r](...n),o()):t[r](...n,s({resolve:o,reject:a},e))}))})(c,t[c]);A=a(r,r[c],e)}else A=A.bind(r);else if("object"==typeof A&&null!==A&&(i(e,c)||i(t,c)))A=g(A,e[c],t[c]);else{if(!i(t,"*"))return Object.defineProperty(n,c,{configurable:!0,enumerable:!0,get:()=>r[c],set(e){r[c]=e}}),A;A=g(A,e[c],t["*"])}return n[c]=A,A},set:(e,t,s,o)=>(t in n?n[t]=s:r[t]=s,!0),defineProperty:(r,e,t)=>Reflect.defineProperty(n,e,t),deleteProperty:(r,e)=>Reflect.deleteProperty(n,e)},c=Object.create(r);return new Proxy(c,m)},m=r=>({addListener(e,t,...n){e.addListener(r.get(t),...n)},hasListener:(e,t)=>e.hasListener(r.get(t)),removeListener(e,t){e.removeListener(r.get(t))}}),c=new n((r=>"function"!=typeof r?r:function(e){const t=g(e,{},{getContent:{minArgs:0,maxArgs:0}});r(t)})),l=new n((r=>"function"!=typeof r?r:function(e,t,n){let s,o,a=!1,i=new Promise((r=>{s=function(e){a=!0,r(e)}}));try{o=r(e,t,s)}catch(r){o=Promise.reject(r)}const g=!0!==o&&((m=o)&&"object"==typeof m&&"function"==typeof m.then);var m;if(!0!==o&&!g&&!a)return!1;return(g?o:i).then((r=>{n(r)}),(r=>{let e;e=r&&(r instanceof Error||"string"==typeof r.message)?r.message:"An unexpected error occurred",n({__mozWebExtensionPolyfillReject__:!0,message:e})})).catch((r=>{console.error("Failed to send onMessage rejected reply",r)})),!0})),A=({reject:t,resolve:n},s)=>{r.runtime.lastError?r.runtime.lastError.message===e?n():t(new Error(r.runtime.lastError.message)):s&&s.__mozWebExtensionPolyfillReject__?t(new Error(s.message)):n(s)},u=(r,e,t,...n)=>{if(n.length<e.minArgs)throw new Error(`Expected at least ${e.minArgs} ${o(e.minArgs)} for ${r}(), got ${n.length}`);if(n.length>e.maxArgs)throw new Error(`Expected at most ${e.maxArgs} ${o(e.maxArgs)} for ${r}(), got ${n.length}`);return new Promise(((r,e)=>{const s=A.bind(null,{resolve:r,reject:e});n.push(s),t.sendMessage(...n)}))},x={devtools:{network:{onRequestFinished:m(c)}},runtime:{onMessage:m(l),onMessageExternal:m(l),sendMessage:u.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:u.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},p={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return t.privacy={network:{"*":p},services:{"*":p},websites:{"*":p}},g(r,x,t)};r.exports=t(chrome)}else r.exports=globalThis.browser},void 0===(n=t.apply(e,[r]))||(r.exports=n)}},e={};function t(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return r[n].call(o.exports,o,o.exports,t),o.exports}t.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return t.d(e,{a:e}),e},t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),(()=>{"use strict";t(5601);var r=t(3145);const e=new URL(window.location.href).searchParams.get("id");async function n(){const t=await async function(){if(e)return r.runtime.sendMessage({id:"storageRequest",asyncResponse:!0,saveReceipt:!0,storageId:e})}();var n,s;t&&(n=t.tabUrl,s=t.keepHistory,self.locationUpdated||(self.locationUpdated=!0,s?window.location.href=n:window.location.replace(n)))}r.runtime.onMessage.addListener((function(r,t){t.url!==document.URL&&"setTabLocation"===r.id&&r.token===e&&n()})),n()})()})();