"use strict";(self.webpackChunkrrkallan_demo=self.webpackChunkrrkallan_demo||[]).push([[476],{4209:function(e,n,t){t.d(n,{C:function(){return s},T:function(){return r}});var i=t(9434);const r=()=>(0,i.I0)(),s=i.v9},9984:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var i=t(3504),r=t(3081),s=t(7006),o=t(697),l=t(4209),a=t(9758),u="assignments_container__m6LiM",c="assignments_unit__JfTKN",d="assignments_item__ZT4WQ",m="assignments_text__Wehq8",f="assignments_link__KiGPr",v="assignments_image__Di02C",p="assignments_readMore__85VZo",g="assignments_title__WHf0h",h="assignments_client__+Ccgq",_="assignments_imageContainer__oAUeJ",y="assignments_list__Zbzzl",j="assignments_listItem__Cr2eU",x=t(184);const w=(0,r.ZP)((()=>Promise.resolve().then(t.bind(t,633))),{fallback:(0,x.jsx)(s.gb,{})}),b=(0,r.ZP)((()=>t.e(927).then(t.bind(t,3398))),{fallback:(0,x.jsx)(s.gb,{})}),N=(0,r.ZP)((()=>t.e(83).then(t.bind(t,5880))),{fallback:(0,x.jsx)(s.gb,{})}),k=(0,r.ZP)((()=>Promise.all([t.e(226),t.e(835)]).then(t.bind(t,8226))),{fallback:(0,x.jsx)(s.gb,{})}),P={quotes:e=>(0,x.jsx)(b,{...e}),noResult:e=>(0,x.jsx)(N,{...e})};var q=function(){const e=(0,l.C)(a.Gt);return(0,x.jsx)(w,{variant:"black",textColor:"white",fullWidth:!0,children:(0,x.jsx)("section",{className:u,children:!!e&&e.map((e=>{let{items:n,layout:t}=e;if(t.component){if("function"!==(0,o.oL)(P[t.component]))return null;const e=P[t.component];return(0,x.jsx)(e,{},t.row)}return(0,x.jsx)("section",{className:c,variant:t.deviding.split("=")[0],children:!!n&&(null===n||void 0===n?void 0:n.map((e=>{const n=(0,o.oL)(e);if("object"===n){const n=e.title.trim().replace(/\s+/g,"-").toLowerCase(),t="/work/".concat(e.id,"/").concat(n),r=["single",e.mainImage?"has-image":"no-image"];return(0,x.jsx)("article",{className:d,variant:r.join(" "),children:(0,x.jsxs)(i.rU,{className:f,to:t,children:[(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)("span",{className:h,children:e.client}),(0,x.jsx)("h2",{className:g,children:e.title}),(0,x.jsxs)("span",{className:p,children:[(0,x.jsx)(k,{icon:"circle",variant:"small",svgProps:void 0,noContainer:void 0}),"Read more"]})]}),!!e.mainImage&&(0,x.jsx)("figure",{className:_,children:(0,x.jsx)("img",{className:v,src:e.mainImage,alt:e.title})})]})},e.id)}return"array"===n?(0,x.jsx)("article",{className:d,variant:"list",children:(0,x.jsx)("ul",{className:y,children:e.map((e=>{const n=e.title.trim().replace(/\s+/g,"-").toLowerCase(),t="/work/".concat(e.id,"/").concat(n);return(0,x.jsx)("li",{className:j,children:(0,x.jsxs)(i.rU,{className:f,to:t,children:[(0,x.jsx)("span",{className:h,children:e.client}),(0,x.jsx)("h2",{className:g,children:e.title}),(0,x.jsxs)("span",{className:p,children:[(0,x.jsx)(k,{icon:"circle",variant:"small",svgProps:void 0,noContainer:void 0}),"Read more"]})]})},e.id)}))})},t.row):null})))},t.row)}))})})}},9758:function(e,n,t){t.d(n,{PE:function(){return l},qm:function(){return u},Gt:function(){return a},ht:function(){return d},Js:function(){return c}});var i=t(6916),r=t(697);var s=[{row:1,items:2,deviding:"equal"},{row:2,items:2,deviding:"equal"},{row:3,items:4,deviding:"list=2,3,4"},{row:4,items:2,deviding:"equal"},{row:5,items:4,deviding:"list=1,2,3"},{row:6,items:2,deviding:"equal"},{row:7,items:2,deviding:"equal"},{row:8,items:0,component:"quotes",deviding:void 0},{row:9,items:2,deviding:"equal"}];const o=e=>{let{clients:n}=e;return n},l=((0,i.P1)(o,(e=>{let{assignments:n}=e;return n.error})),(0,i.P1)(o,(e=>{let{assignments:n}=e;return n.loading})),(0,i.P1)(o,(e=>{let{assignments:n}=e;const{loading:t,entities:i,error:r}=n;return!t&&!!i||!!r}))),a=(0,i.P1)(o,(e=>{let{assignments:n}=e;const{entities:t,filter:i}=n||{};if(r.tV.isEmpty(t))return[];const o=Object.entries(i||{}),l=o.length>0&&(null===t||void 0===t?void 0:t.reduce(((e,n)=>{const t=e;let i=!0;return o.forEach((e=>{let[t,r]=e;i&&void 0!==r&&(i=(null===n||void 0===n?void 0:n[t])===r)})),i&&t.push(n),t}),[]))||t,a=s.reduce(((e,n)=>{const{result:t,startWith:i}=e,{items:s,row:o,component:a,deviding:u}=n,c=t,d=i+s,m=(null===l||void 0===l?void 0:l.slice(i,d))||[],f=null===u||void 0===u?void 0:u.startsWith("list");if(r.tV.isEmpty(m)&&r.tV.isEmpty(a))return{result:c,startWith:d};const v=[[],[]];if(f&&r.tV.isEmpty(a)){const e=(null===u||void 0===u?void 0:u.split("=")[1].split(",").map((e=>Number(e)-1)))||[],n=Number(0===e[0]);m.forEach(((t,i)=>{null!==e&&void 0!==e&&e.includes(i)&&v[n].push(t),null!==e&&void 0!==e&&e.includes(i)||(v[Number(!n)]=t)}))}const p={items:f?v:m,layout:{items:s,row:o,component:a,deviding:u}};c.push(p);return{result:c,startWith:d}}),{result:[],startWith:0});if(0===(null===l||void 0===l?void 0:l.length)){const e={items:0,layout:{items:0,row:1,component:"noResult",deviding:"full"}};a.result.unshift(e)}return a.result})),u=(0,i.P1)([o,(e,n)=>n],((e,n)=>{let{assignments:t}=e;const{id:i}=n||{},{ids:r}=t||{};return(null===r||void 0===r?void 0:r[i])||{}})),c=((0,i.P1)(o,(e=>{let{quotes:n}=e;return n.error})),(0,i.P1)(o,(e=>{let{quotes:n}=e;return n.loading})),(0,i.P1)(o,(e=>{let{quotes:n}=e;const{loading:t,entities:i,error:r}=n;return!t&&!!i||!!r}))),d=((0,i.P1)(o,(e=>{let{quotes:n}=e;return n.entities})),(0,i.P1)(o,(e=>{let{quotes:n}=e;const{entities:t}=n||{},i=(null===t||void 0===t?void 0:t.length)||0;return null===t||void 0===t?void 0:t[i-1]})))},6916:function(e,n,t){t.d(n,{P1:function(){return a}});var i="NOT_FOUND";var r=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},s=t.equalityCheck,o=void 0===s?r:s,l=t.maxSize,a=void 0===l?1:l,u=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var i=n.length,r=0;r<i;r++)if(!e(n[r],t[r]))return!1;return!0}}(o),d=1===a?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:i},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var s=t[r];return r>0&&(t.splice(r,1),t.unshift(s)),s.value}return i}return{get:r,put:function(n,s){r(n)===i&&(t.unshift({key:n,value:s}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,c);function m(){var n=d.get(arguments);if(n===i){if(n=e.apply(null,arguments),u){var t=d.getEntries(),r=t.find((function(e){return u(e.value,n)}));r&&(n=r.value)}d.put(arguments,n)}return n}return m.clearCache=function(){return d.clear()},m}function o(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function l(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];var r=function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];var s,l=0,a={memoizeOptions:void 0},u=i.pop();if("object"===typeof u&&(a=u,u=i.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var c=a,d=c.memoizeOptions,m=void 0===d?t:d,f=Array.isArray(m)?m:[m],v=o(i),p=e.apply(void 0,[function(){return l++,u.apply(null,arguments)}].concat(f)),g=e((function(){for(var e=[],n=v.length,t=0;t<n;t++)e.push(v[t].apply(null,arguments));return s=p.apply(null,e)}));return Object.assign(g,{resultFunc:u,memoizedResultFunc:p,dependencies:v,lastResult:function(){return s},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),g};return r}var a=l(s)}}]);
//# sourceMappingURL=Assignments.8d72e868.chunk.js.map