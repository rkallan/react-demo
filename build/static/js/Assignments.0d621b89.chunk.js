"use strict";(self.webpackChunkrrkallan_demo=self.webpackChunkrrkallan_demo||[]).push([[476],{4209:function(n,t,e){e.d(t,{C:function(){return s},T:function(){return i}});var r=e(9434),i=function(){return(0,r.I0)()},s=r.v9},9984:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r=e(1413),i=e(2791),s=e(3504),u=e(4455),o=e(7006),a=e(697),l=e(4209),c=e(422),f=e(4122),m="assignments_container__m6LiM",v="assignments_unit__JfTKN",d="assignments_item__ZT4WQ",p="assignments_text__Wehq8",h="assignments_link__KiGPr",g="assignments_image__Di02C",_="assignments_readMore__85VZo",y="assignments_title__WHf0h",j="assignments_client__+Ccgq",x="assignments_imageContainer__oAUeJ",b="assignments_list__Zbzzl",N="assignments_listItem__Cr2eU",k=e(184),P=(0,u.ZP)((function(){return Promise.resolve().then(e.bind(e,633))}),{fallback:(0,k.jsx)(o.gb,{})}),w=(0,u.ZP)((function(){return e.e(927).then(e.bind(e,3398))}),{fallback:(0,k.jsx)(o.gb,{})}),C=(0,u.ZP)((function(){return e.e(83).then(e.bind(e,5880))}),{fallback:(0,k.jsx)(o.gb,{})}),E=(0,u.ZP)((function(){return Promise.all([e.e(226),e.e(835)]).then(e.bind(e,8226))}),{fallback:(0,k.jsx)(o.gb,{})}),q={quotes:function(n){return(0,k.jsx)(w,(0,r.Z)({},n))},noResult:function(n){return(0,k.jsx)(C,(0,r.Z)({},n))}};var Z=function(){var n=(0,l.T)(),t=(0,l.C)(f.PE),e=(0,l.C)(f.Gt);return(0,i.useEffect)((function(){t||n((0,c.Tu)({key:"assignments"}))}),[n,t]),(0,k.jsx)(P,{variant:"black",textColor:"white",fullWidth:!0,children:(0,k.jsx)("section",{className:m,children:!!e&&e.map((function(n){var t=n.items,e=n.layout;return e.component?"function"!==(0,a.oL)(q[e.component])?null:q[e.component]({key:e.row}):(0,k.jsx)("section",{className:v,variant:e.deviding.split("=")[0],children:!!t&&(null===t||void 0===t?void 0:t.map((function(n){var t=(0,a.oL)(n);if("object"===t){var r=n.title.trim().replace(/\s+/g,"-").toLowerCase(),i="".concat(n.id,"/").concat(r),u=["single",n.mainImage?"has-image":"no-image"];return(0,k.jsx)("article",{className:d,variant:u.join(" "),children:(0,k.jsxs)(s.rU,{className:h,to:i,children:[(0,k.jsxs)("div",{className:p,children:[(0,k.jsx)("span",{className:j,children:n.client}),(0,k.jsx)("h2",{className:y,children:n.title}),(0,k.jsxs)("span",{className:_,children:[(0,k.jsx)(E,{icon:"circle",variant:"small",svgProps:void 0,noContainer:void 0}),"Read more"]})]}),!!n.mainImage&&(0,k.jsx)("figure",{className:x,children:(0,k.jsx)("img",{className:g,src:n.mainImage,alt:n.title})})]})},n.id)}return"array"===t?(0,k.jsx)("article",{className:d,variant:"list",children:(0,k.jsx)("ul",{className:b,children:n.map((function(n){var t=n.title.trim().replace(/\s+/g,"-").toLowerCase(),e="".concat(n.id,"/").concat(t);return(0,k.jsx)("li",{className:N,children:(0,k.jsxs)(s.rU,{className:h,to:e,children:[(0,k.jsx)("span",{className:j,children:n.client}),(0,k.jsx)("h2",{className:y,children:n.title}),(0,k.jsxs)("span",{className:_,children:[(0,k.jsx)(E,{icon:"circle",variant:"small",svgProps:void 0,noContainer:void 0}),"Read more"]})]})},n.id)}))})},e.row):null})))},e.row)}))})})}},4122:function(n,t,e){e.d(t,{Gt:function(){return a},Js:function(){return c},PE:function(){return l},ht:function(){return f}});var r=e(885),i=e(6916),s=e(697),u=e(4294),o=function(n){return n.clients},a=((0,i.P1)(o,(function(n){return n.assignments.loading})),(0,i.P1)(o,(function(n){return n.assignments.error})),(0,i.P1)(o,(function(n){var t=n.assignments||{},e=t.entities,i=t.filter;if(s.tV.isEmpty(e))return[];var o=Object.entries(i||{}),a=o.length>0&&(null===e||void 0===e?void 0:e.reduce((function(n,t){var e=n,i=!0;return o.forEach((function(n){var e=(0,r.Z)(n,2),s=e[0],u=e[1];i&&void 0!==u&&(i=(null===t||void 0===t?void 0:t[s])===u)})),i&&e.push(t),e}),[]))||e,l=u.m.reduce((function(n,t){var e=n.result,r=n.startWith,i=t.items,u=t.row,o=t.component,l=t.deviding,c=e,f=r+i,m=(null===a||void 0===a?void 0:a.slice(r,f))||[],v=null===l||void 0===l?void 0:l.startsWith("list");if(s.tV.isEmpty(m)&&s.tV.isEmpty(o))return{result:c,startWith:f};var d=[[],[]];if(v&&s.tV.isEmpty(o)){var p=(null===l||void 0===l?void 0:l.split("=")[1].split(",").map((function(n){return Number(n)-1})))||[],h=Number(0===p[0]);m.forEach((function(n,t){null!==p&&void 0!==p&&p.includes(t)&&d[h].push(n),null!==p&&void 0!==p&&p.includes(t)||(d[Number(!h)]=n)}))}var g={items:v?d:m,layout:{items:i,row:u,component:o,deviding:l}};return c.push(g),{result:c,startWith:f}}),{result:[],startWith:0});if(0===(null===a||void 0===a?void 0:a.length)){l.result.unshift({items:0,layout:{items:0,row:1,component:"noResult",deviding:"full"}})}return l.result}))),l=(0,i.P1)(o,(function(n){var t=n.assignments,e=t.loading,r=t.entities,i=t.error;return!e&&!!r||!!i})),c=((0,i.P1)(o,(function(n){return n.quotes.loading})),(0,i.P1)(o,(function(n){return n.quotes.error})),(0,i.P1)(o,(function(n){var t=n.quotes,e=t.loading,r=t.entities,i=t.error;return!e&&!!r||!!i}))),f=((0,i.P1)(o,(function(n){return n.quotes.entities})),(0,i.P1)(o,(function(n){var t=(n.quotes||{}).entities,e=(null===t||void 0===t?void 0:t.length)||0;return null===t||void 0===t?void 0:t[e-1]})))},6916:function(n,t,e){e.d(t,{P1:function(){return a}});var r="NOT_FOUND";var i=function(n,t){return n===t};function s(n,t){var e="object"===typeof t?t:{equalityCheck:t},s=e.equalityCheck,u=void 0===s?i:s,o=e.maxSize,a=void 0===o?1:o,l=e.resultEqualityCheck,c=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!n(t[i],e[i]))return!1;return!0}}(u),f=1===a?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:r},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(n,t){var e=[];function i(n){var i=e.findIndex((function(e){return t(n,e.key)}));if(i>-1){var s=e[i];return i>0&&(e.splice(i,1),e.unshift(s)),s.value}return r}return{get:i,put:function(t,s){i(t)===r&&(e.unshift({key:t,value:s}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(a,c);function m(){var t=f.get(arguments);if(t===r){if(t=n.apply(null,arguments),l){var e=f.getEntries(),i=e.find((function(n){return l(n.value,t)}));i&&(t=i.value)}f.put(arguments,t)}return t}return m.clearCache=function(){return f.clear()},m}function u(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function o(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var i=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var s,o=0,a={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(a=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var c=a,f=c.memoizeOptions,m=void 0===f?e:f,v=Array.isArray(m)?m:[m],d=u(r),p=n.apply(void 0,[function(){return o++,l.apply(null,arguments)}].concat(v)),h=n((function(){for(var n=[],t=d.length,e=0;e<t;e++)n.push(d[e].apply(null,arguments));return s=p.apply(null,n)}));return Object.assign(h,{resultFunc:l,memoizedResultFunc:p,dependencies:d,lastResult:function(){return s},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return i}var a=o(s)}}]);
//# sourceMappingURL=Assignments.0d621b89.chunk.js.map