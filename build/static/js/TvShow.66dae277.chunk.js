"use strict";(self.webpackChunkrrkallan_demo=self.webpackChunkrrkallan_demo||[]).push([[738],{4209:function(e,n,t){t.d(n,{C:function(){return u},T:function(){return i}});var r=t(9434);const i=()=>(0,r.I0)(),u=r.v9},1160:function(e,n,t){t.d(n,{$$:function(){return l},O9:function(){return u},S5:function(){return d},Uo:function(){return a},Ze:function(){return o},_X:function(){return f},sJ:function(){return s},t4:function(){return v},yc:function(){return c}});var r=t(6916);const i=e=>{let{tvShows:n}=e;return n},u=(0,r.P1)(i,(e=>e[!!e.search.value?"search":"overview"].entities||[])),o=(0,r.P1)(i,(e=>e[!!e.search.value?"search":"overview"].loading)),a=(0,r.P1)(i,(e=>e[!!e.search.value?"search":"overview"].error)),c=(0,r.P1)(i,(e=>e.search.value)),l=(0,r.P1)([i,(e,n)=>n],((e,n)=>{const{entities:t}=e.items||{},{id:r}=n||{};return(null===t||void 0===t?void 0:t[r])||void 0})),s=((0,r.P1)(i,(e=>{let{items:n}=e;return n.error})),(0,r.P1)(i,(e=>{let{items:n}=e;return n.loading})),(0,r.P1)([i,(e,n)=>n],((e,n)=>{const{entities:t}=e.lastUpdated||{},{id:r}=n||{};return(null===t||void 0===t?void 0:t[r])||void 0}))),d=(0,r.P1)(i,(e=>{let{lastUpdated:n}=e;return n.loaded})),f=((0,r.P1)(i,(e=>{let{lastUpdated:n}=e;return n.loading})),(0,r.P1)(i,(e=>{let{lastUpdated:n}=e;return n.error}))),v=(0,r.P1)(i,(e=>{let{lastUpdated:n}=e;return n.lastFetchedTime}))},6335:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(2791),i=t(6871),u=t(3081),o=t(4209),a=t(6895),c=t(1160),l=t(7006),s="tvShow_container__3bMgz",d="tvShow_unit__NbzBl",f="tvShow_imageContainer__JG1bu",v="tvShow_image__Hun84",p="tvShow_text__9o4+K",h=t.p+"static/media/no-image.41a9664d5c0c0f228062.png",m=t(184);const g=(0,u.ZP)((()=>Promise.resolve().then(t.bind(t,633))),{fallback:(0,m.jsx)(l.gb,{})}),y=(0,u.ZP)((()=>t.e(794).then(t.bind(t,125))),{fallback:(0,m.jsx)(l.gb,{})});var x=function(){var e;const n=(0,o.T)(),{id:t}=(0,i.UO)(),[u]=(0,r.useState)((()=>Number(t))),l=(0,o.C)((e=>(0,c.$$)(e,{id:u}))),x=(0,o.C)((e=>(0,c.sJ)(e,{id:u})));return(0,r.useEffect)((()=>{const e=(x||0)>(null===l||void 0===l?void 0:l.updated);l&&!e||n((0,a.kJ)({showId:t}))}),[n,t,l,x]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{children:(0,m.jsx)("div",{className:s,variant:"title",children:(0,m.jsx)("h1",{className:d,variant:"title",children:null===l||void 0===l?void 0:l.title})})}),(0,m.jsx)(g,{children:!!l&&(0,m.jsx)("article",{className:s,variant:"content",children:(0,m.jsxs)("div",{className:d,children:[(0,m.jsxs)("figure",{className:f,children:[(0,m.jsx)("img",{className:v,src:l.imageUrl||h,alt:l.title,title:l.title}),(0,m.jsxs)("figcaption",{children:[(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsxs)("span",{children:["premiere: ",l.premiered]})}),(0,m.jsx)("li",{children:(0,m.jsxs)("span",{children:["ended: ",l.ended]})})]}),(0,m.jsx)("div",{children:null===l||void 0===l||null===(e=l.genres)||void 0===e?void 0:e.map(((e,n)=>{const t=n;return(0,m.jsx)("div",{children:e},t)}))})]})]}),(0,m.jsx)("span",{className:p,children:l.summary})]})})})]})}},6916:function(e,n,t){t.d(n,{P1:function(){return c}});var r="NOT_FOUND";var i=function(e,n){return e===n};function u(e,n){var t="object"===typeof n?n:{equalityCheck:n},u=t.equalityCheck,o=void 0===u?i:u,a=t.maxSize,c=void 0===a?1:a,l=t.resultEqualityCheck,s=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],t[i]))return!1;return!0}}(o),d=1===c?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:r},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(s):function(e,n){var t=[];function i(e){var i=t.findIndex((function(t){return n(e,t.key)}));if(i>-1){var u=t[i];return i>0&&(t.splice(i,1),t.unshift(u)),u.value}return r}return{get:i,put:function(n,u){i(n)===r&&(t.unshift({key:n,value:u}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,s);function f(){var n=d.get(arguments);if(n===r){if(n=e.apply(null,arguments),l){var t=d.getEntries(),i=t.find((function(e){return l(e.value,n)}));i&&(n=i.value)}d.put(arguments,n)}return n}return f.clearCache=function(){return d.clear()},f}function o(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function a(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var u,a=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var s=c,d=s.memoizeOptions,f=void 0===d?t:d,v=Array.isArray(f)?f:[f],p=o(r),h=e.apply(void 0,[function(){return a++,l.apply(null,arguments)}].concat(v)),m=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return u=h.apply(null,e)}));return Object.assign(m,{resultFunc:l,memoizedResultFunc:h,dependencies:p,lastResult:function(){return u},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return i}var c=a(u)}}]);
//# sourceMappingURL=TvShow.66dae277.chunk.js.map