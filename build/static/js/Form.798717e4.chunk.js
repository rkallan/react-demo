"use strict";(self.webpackChunkrrkallan_demo=self.webpackChunkrrkallan_demo||[]).push([[923],{9395:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var n=s(2791),a=s(3081),l=s(697),o=s(8350),r=s(1718),u="form_container__Kkhio",i="form_unit__+m9tE",d=s(184);const c=(0,a.ZP)((()=>s.e(359).then(s.bind(s,9327))),{fallback:(0,d.jsx)(r.Z,{})}),m=(0,a.ZP)((()=>s.e(637).then(s.bind(s,5985))),{fallback:(0,d.jsx)(r.Z,{})}),b=(0,a.ZP)((()=>s.e(939).then(s.bind(s,9106))),{fallback:(0,d.jsx)(r.Z,{})}),f=(0,a.ZP)((()=>s.e(16).then(s.bind(s,7040))),{fallback:(0,d.jsx)(r.Z,{})});function v(t){let{attributes:e,customEventHandler:s,customSubmitHandler:a,fieldsets:r,disableForm:v,postFormWithApiCall:h,resetForm:p,submitButtonDisabled:k,postData:j}=t;const[g,x]=(0,n.useState)([]),[y,S]=(0,n.useState)([]),[C,E]=(0,n.useState)([]),[_,w]=(0,n.useState)(),[Z,D]=(0,n.useState)(!1),[F,P]=(0,n.useState)(k),[N,A]=(0,n.useState)(!0),H=(0,o.Nr)(_,150),V=(0,n.useCallback)((()=>{let t=0;g.length||(t+=1),g.forEach((e=>{null!==e&&void 0!==e&&e.hasAttribute("state")&&"isValid"!==(null===e||void 0===e?void 0:e.getAttribute("state"))&&(t+=1)})),Z&&P(!0),Z||P(!!t)}),[g,Z]),B=function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];r.map((e=>(e.disabled=t,t)))},L=t=>{const e={ok:!1,error:"object"===(0,l.oL)(t)?Object.values(t):[t]};return B(!1),e},O=async(t,e)=>{if(h){const{method:s}=t,n=t.action,a=await(async t=>{var e,s,n;let{formPostUrl:a,data:o,method:r}=t;const u=await(0,l.k_)({url:a,method:r,body:o}),i="application/json"===(null===u||void 0===u||null===(e=u.headers)||void 0===e||null===(s=e.get("content-type"))||void 0===s||null===(n=s.split(";"))||void 0===n?void 0:n.shift())?await u.json():{error:{message:"System error contact your system administrator"}},d=await(0,l.mp)({data:i});return u.ok?d:L(null===d||void 0===d?void 0:d.error)})({formPostUrl:n,data:e,method:s});return a}return{ok:!0,status:200,data:e}},U=(0,n.useCallback)((()=>{P(!0),A(!0)}),[]),W=(0,n.useCallback)((()=>D(!0)),[]),K=t=>{const n=null===t||void 0===t?void 0:t.target,a=null===n||void 0===n?void 0:n.form,o=(null===n||void 0===n?void 0:n.value)||"",u="function"===(0,l.oL)(s)&&s(t);Z&&D(!1),_!==o&&w(o),N&&"change"===t.type&&A(!1),function(t){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=g.length+y.length;if(t&&(n!==t.elements.length||s)){const s=[...t.elements].reduce(((t,e)=>{const s=t,{type:n}=e,a=e.tagName.toLowerCase();return e&&("button"===a||["submit","reset","button"].includes(n))&&s.buttons.push(e),!e||["fieldset","button"].includes(a)||["submit","reset","button"].includes(n)||s.elements.push(e),s}),{elements:[],buttons:[]});S(s.buttons),x(s.elements);const n=r.reduce(((t,e)=>{const s=t,{elements:n}=e||{};return s.elements.push(...n),s}),{attributes:e,elements:[]});E(n),V()}}(a,u)};return(0,n.useEffect)((()=>{(H||""===H)&&g&&V()}),[H,g,V]),(0,n.useEffect)((()=>{g&&V()}),[g,V]),(0,n.useEffect)((()=>{P(k)}),[k]),(0,n.useEffect)((()=>{p&&(U(),W())}),[U,p,W]),(0,d.jsx)("form",{...e,onSubmit:t=>{t.preventDefault(),document.activeElement.blur(),U(),B(!0);const e=t.currentTarget||t.target,s=(0,l.Nh)(e,C),n={...j,...s.postData},o=(0,l.pD)(n);if(o){const t=L(o);return void(a&&a(t))}const r=(t=>Object.keys(t).reduce(((e,s)=>({...e,[s]:t[s].values})),{}))(n),u=O(e,r);e.reset(),a&&a(u),B(!1),D(!0)},onReset:()=>{U(),W()},onChange:K,onFocus:K,onBlur:K,children:null===r||void 0===r?void 0:r.map((t=>{const{elements:e,disabled:s}=t,n=v||s||!1;return(0,d.jsx)("fieldset",{className:u,disabled:n,children:(0,d.jsx)("div",{className:i,variant:t.variant||null,children:e.map((t=>{const{id:e,node:s,...a}=t;switch(a.disabled=n||a.disabled,s){case"input":return(0,d.jsx)(c,{id:e,...a,clearValue:Z},e);case"slider":return(0,d.jsx)(m,{id:e,...a,clearValue:Z},e);case"textarea":return(0,d.jsx)(f,{id:e,...a,clearValue:Z},e);case"button":return"submit"===a.type&&(a.disabled=F),"reset"===a.type&&(a.disabled=N),(0,d.jsx)(b,{id:e,...a},e);default:return null}}))})},t.id)}))})}v.defaultProps={customEventHandler:void 0,customSubmitHandler:void 0,disableForm:!1,postFormWithApiCall:!0,resetForm:!1,submitButtonDisabled:!0,postData:void 0};var h=v}}]);
//# sourceMappingURL=Form.798717e4.chunk.js.map