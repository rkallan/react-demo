"use strict";(self.webpackChunkrrkallan_demo=self.webpackChunkrrkallan_demo||[]).push([[90],{4209:function(n,t,e){e.d(t,{C:function(){return i},T:function(){return u}});var r=e(9434),u=function(){return(0,r.I0)()},i=r.v9},1160:function(n,t,e){e.d(t,{$$:function(){return f},O9:function(){return i},S5:function(){return s},Uo:function(){return c},Ze:function(){return o},_X:function(){return v},sJ:function(){return l},t4:function(){return d},yc:function(){return a}});var r=e(6916),u=function(n){return n.tvShows},i=(0,r.P1)(u,(function(n){return n[!!n.search.value?"search":"overview"].entities||[]})),o=(0,r.P1)(u,(function(n){return n[!!n.search.value?"search":"overview"].loading})),c=(0,r.P1)(u,(function(n){return n[!!n.search.value?"search":"overview"].error})),a=(0,r.P1)(u,(function(n){return n.search.value})),f=(0,r.P1)([u,function(n,t){return t}],(function(n,t){var e=(n.items||{}).entities,r=(t||{}).id;return(null===e||void 0===e?void 0:e[r])||void 0})),l=((0,r.P1)(u,(function(n){return n.items.error})),(0,r.P1)(u,(function(n){return n.items.loading})),(0,r.P1)([u,function(n,t){return t}],(function(n,t){var e=(n.lastUpdated||{}).entities,r=(t||{}).id;return(null===e||void 0===e?void 0:e[r])||void 0}))),s=(0,r.P1)(u,(function(n){return n.lastUpdated.loaded})),v=((0,r.P1)(u,(function(n){return n.lastUpdated.loading})),(0,r.P1)(u,(function(n){return n.lastUpdated.error}))),d=(0,r.P1)(u,(function(n){return n.lastUpdated.lastFetchedTime}))},8243:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r=e(2791),u=e(4455),i=e(7006),o=e(6895),c=e(1160),a=e(4209),f=e(697),l="tvShows_container__YtxWG",s="tvShows_unit__hiGlr",v=e(184),d=(0,u.ZP)((function(){return Promise.resolve().then(e.bind(e,633))}),{fallback:(0,v.jsx)(i.gb,{})}),h=(0,u.ZP)((function(){return e.e(741).then(e.bind(e,3978))}),{fallback:(0,v.jsx)(i.gb,{})}),p=(0,u.ZP)((function(){return e.e(794).then(e.bind(e,125))}),{fallback:(0,v.jsx)(i.gb,{})}),y=(0,u.ZP)((function(){return e.e(468).then(e.bind(e,1904))}),{fallback:(0,v.jsx)(i.gb,{})}),m=(0,u.ZP)((function(){return e.e(573).then(e.bind(e,5348))}),{fallback:(0,v.jsx)(i.gb,{})});var b=function(){var n=(0,a.T)(),t=(0,a.C)(c.S5),e=(0,a.C)(c.t4),u=(0,a.C)(c._X);return(0,r.useEffect)((function(){var r,i=null!==(r=(0,f.DA)(e))&&void 0!==r?r:-1;if(!t||i||u){var c={since:(i>6?"week":1===i&&"day")||i>29&&void 0||!i&&void 0||void 0};n((0,o.L)({urlParam:c}))}}),[n,u,e,t]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{children:(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("h1",{className:s,variant:"title",children:"Tv Shows"}),(0,v.jsx)("article",{className:s,variant:"search",children:(0,v.jsx)(y,{})})]})}),!!u&&(0,v.jsx)(d,{children:(0,v.jsx)(h,{variant:"error",state:"visible",iconSize:"normal",icon:void 0,iconPosition:"center",showCloseButton:!1,customOnClickHandlerCloseButton:void 0,children:u})}),(0,v.jsx)(m,{})]})}},6916:function(n,t,e){e.d(t,{P1:function(){return a}});var r="NOT_FOUND";var u=function(n,t){return n===t};function i(n,t){var e="object"===typeof t?t:{equalityCheck:t},i=e.equalityCheck,o=void 0===i?u:i,c=e.maxSize,a=void 0===c?1:c,f=e.resultEqualityCheck,l=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,u=0;u<r;u++)if(!n(t[u],e[u]))return!1;return!0}}(o),s=1===a?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:r},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(n,t){var e=[];function u(n){var u=e.findIndex((function(e){return t(n,e.key)}));if(u>-1){var i=e[u];return u>0&&(e.splice(u,1),e.unshift(i)),i.value}return r}return{get:u,put:function(t,i){u(t)===r&&(e.unshift({key:t,value:i}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(a,l);function v(){var t=s.get(arguments);if(t===r){if(t=n.apply(null,arguments),f){var e=s.getEntries(),u=e.find((function(n){return f(n.value,t)}));u&&(t=u.value)}s.put(arguments,t)}return t}return v.clearCache=function(){return s.clear()},v}function o(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function c(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var u=function(){for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];var i,c=0,a={memoizeOptions:void 0},f=r.pop();if("object"===typeof f&&(a=f,f=r.pop()),"function"!==typeof f)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var l=a,s=l.memoizeOptions,v=void 0===s?e:s,d=Array.isArray(v)?v:[v],h=o(r),p=n.apply(void 0,[function(){return c++,f.apply(null,arguments)}].concat(d)),y=n((function(){for(var n=[],t=h.length,e=0;e<t;e++)n.push(h[e].apply(null,arguments));return i=p.apply(null,n)}));return Object.assign(y,{resultFunc:f,memoizedResultFunc:p,dependencies:h,lastResult:function(){return i},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),y};return u}var a=c(i)}}]);
//# sourceMappingURL=TvShows.1cc3bd9e.chunk.js.map