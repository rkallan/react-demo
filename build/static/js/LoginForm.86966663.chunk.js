"use strict";(self.webpackChunkrrkallan_demo=self.webpackChunkrrkallan_demo||[]).push([[806],{8884:function(t,e,n){n.d(e,{ZY:function(){return l},Nr:function(){return a},h0:function(){return s},RF:function(){return d}});var r=n(885),u=n(2791),a=function(t,e){var n=(0,u.useState)(t),a=(0,r.Z)(n,2),o=a[0],i=a[1];return(0,u.useEffect)((function(){var n=setTimeout((function(){i(t)}),e);return function(){clearTimeout(n)}}),[t,e]),o},o=n(697),i=n(1413),c=n(4942),s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=(0,u.useState)((function(){return(null===t||void 0===t?void 0:t.length)||0})),s=(0,r.Z)(a,2),l=s[0],d=s[1],f=(0,u.useState)((function(){return Math.ceil(l/e)})),v=(0,r.Z)(f,2),m=v[0],b=v[1],p=(0,u.useState)((function(){return 1})),h=(0,r.Z)(p,2),Z=h[0],g=h[1],k=(0,u.useState)((function(){return Math.min(Z*e,l)})),x=(0,r.Z)(k,2),w=x[0],E=x[1],S=(0,u.useState)((function(){return Math.max(Z*e-e+1,1)})),y=(0,r.Z)(S,2),j=y[0],C=y[1],M=(0,u.useState)((function(){return n?"".concat(n,"Page"):"page"})),P=(0,r.Z)(M,1),D=P[0],L=(0,u.useCallback)((function(t){var e=t.page;if(e){var n=(0,c.Z)({},D,e);g((function(){return e})),(0,o.hv)(n)}}),[D]),_=(0,u.useCallback)((function(t){var e=o.tV.number(t,!0)&&parseInt(t,10)||void 0,n=Math.min(Math.max(1,e),m);L({page:n})}),[L,m]),F=function(){var t=Z>1?Math.max(Z-1,1):Z;L({page:t})},N=function(){var t=Z<m?Z<m&&Math.min(Z+1,m):Z;L({page:t})},B=function(){L({page:1})},O=function(){L({page:m})},R=(0,u.useCallback)((function(){var e=j-1,n=w;return t.slice(e,n).map((function(t,e){return(0,i.Z)((0,i.Z)({},t),{},{position:j+e})}))}),[t,w,j]);return(0,u.useEffect)((function(){if(Z){var t=Math.min(Z*e,l),n=Math.max(Z*e-e+1,1);C(n),E(t)}}),[Z,e,l]),(0,u.useEffect)((function(){var n=(null===t||void 0===t?void 0:t.length)||0,r=Math.ceil(n/e);g((function(t){return t>r?r:t||1})),d((function(){return n})),b((function(){return r}))}),[t,e]),(0,u.useEffect)((function(){var t=(0,o.DU)()[D];t&&_(t)}),[_,D]),{next:N,prev:F,first:B,last:O,jump:_,currentData:R,currentPage:Z,totalPages:m,totalItems:l,startNumber:j,endNumber:w}};var l=function(t){var e=t.element,n=t.delay,a=void 0===n?100:n,o=t.includeUnit,i=void 0===o||o,c=(0,u.useState)((function(){var t;return null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect()})),s=(0,r.Z)(c,2),l=s[0],d=s[1];return(0,u.useLayoutEffect)((function(){var t=null,n=!1,r=function(){clearTimeout(t),t=setTimeout((function(){var t,n=function(t){var e=t.data,n=t.unit,r=void 0===n?"rem":n,u=t.includeUnit,a=void 0===u||u,o="rem"===r?16:1;return Object.fromEntries(Array.from(Object.keys(DOMRect.prototype),(function(t){var n=e[t]/o||0;return[t,a?"".concat(n).concat(r):n]})))}({data:(null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect())||{},includeUnit:i});d(n)}),a)};return n||r(),n||window.addEventListener("resize",r),function(){n=!0,window.removeEventListener("resize",r)}}),[a,e,i]),l},d=function(){var t=(0,u.useState)((function(){return window.scrollY||document.documentElement.scrollTop||Math.abs(document.body.getBoundingClientRect().top)})),e=(0,r.Z)(t,2),n=e[0],a=e[1],o=(0,u.useState)((function(){return window.scrollX||document.documentElement.scrollLeft||Math.abs(document.body.getBoundingClientRect().left)})),i=(0,r.Z)(o,2),c=i[0],s=i[1];return(0,u.useEffect)((function(){var t=function(){a(window.pageYOffset),s(window.pageXOffset)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),{scrollPositionY:n,scrollPositionX:c}}},9395:function(t,e,n){n.r(e),n.d(e,{default:function(){return S}});var r=n(5987),u=n(4942),a=n(1413),o=n(4165),i=n(5861),c=n(2982),s=n(885),l=n(2791),d=n(4455),f=n(697),v=n(8884),m=n(1718),b="form_container__Kkhio",p="form_unit__+m9tE",h=n(184),Z=["id","node"],g=(0,d.ZP)((function(){return n.e(359).then(n.bind(n,9327))}),{fallback:(0,h.jsx)(m.Z,{})}),k=(0,d.ZP)((function(){return n.e(637).then(n.bind(n,5985))}),{fallback:(0,h.jsx)(m.Z,{})}),x=(0,d.ZP)((function(){return n.e(939).then(n.bind(n,9106))}),{fallback:(0,h.jsx)(m.Z,{})}),w=(0,d.ZP)((function(){return n.e(16).then(n.bind(n,7040))}),{fallback:(0,h.jsx)(m.Z,{})});function E(t){var e=t.attributes,n=t.customEventHandler,d=t.customSubmitHandler,m=t.fieldsets,E=t.disableForm,S=t.postFormWithApiCall,y=t.resetForm,j=t.submitButtonDisabled,C=t.postData,M=(0,l.useState)([]),P=(0,s.Z)(M,2),D=P[0],L=P[1],_=(0,l.useState)([]),F=(0,s.Z)(_,2),N=F[0],B=F[1],O=(0,l.useState)([]),R=(0,s.Z)(O,2),T=R[0],U=R[1],A=(0,l.useState)(),V=(0,s.Z)(A,2),H=V[0],Y=V[1],X=(0,l.useState)(!1),z=(0,s.Z)(X,2),I=z[0],W=z[1],K=(0,l.useState)(j),q=(0,s.Z)(K,2),G=q[0],J=q[1],Q=(0,l.useState)(!0),$=(0,s.Z)(Q,2),tt=$[0],et=$[1],nt=(0,v.Nr)(H,150),rt=(0,l.useCallback)((function(){var t=0;D.length||(t+=1),D.forEach((function(e){null!==e&&void 0!==e&&e.hasAttribute("state")&&"isValid"!==(null===e||void 0===e?void 0:e.getAttribute("state"))&&(t+=1)})),I&&J(!0),I||J(!!t)}),[D,I]),ut=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];m.map((function(e){return e.disabled=t,t}))},at=function(t){var e={ok:!1,error:"object"===(0,f.oL)(t)?Object.values(t):[t]};return ut(!1),e},ot=function(){var t=(0,i.Z)((0,o.Z)().mark((function t(e){var n,r,u,a,i,c,s,l,d,v;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.formPostUrl,i=e.data,c=e.method,t.next=3,(0,f.k_)({url:a,method:c,body:i});case 3:if(s=t.sent,l=null===s||void 0===s||null===(n=s.headers)||void 0===n||null===(r=n.get("content-type"))||void 0===r||null===(u=r.split(";"))||void 0===u?void 0:u.shift(),!("application/json"===l)){t.next=12;break}return t.next=9,s.json();case 9:t.t0=t.sent,t.next=13;break;case 12:t.t0={error:{message:"System error contact your system administrator"}};case 13:return d=t.t0,t.next=16,(0,f.mp)({data:d});case 16:if(v=t.sent,s.ok){t.next=19;break}return t.abrupt("return",at(null===v||void 0===v?void 0:v.error));case 19:return t.abrupt("return",v);case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),it=function(){var t=(0,i.Z)((0,o.Z)().mark((function t(e,n){var r,u,a;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!S){t.next=7;break}return r=e.method,u=e.action,t.next=5,ot({formPostUrl:u,data:n,method:r});case 5:return a=t.sent,t.abrupt("return",a);case 7:return t.abrupt("return",{ok:!0,status:200,data:n});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),ct=(0,l.useCallback)((function(){J(!0),et(!0)}),[]),st=(0,l.useCallback)((function(){return W(!0)}),[]),lt=function(t){var r=null===t||void 0===t?void 0:t.target,u=null===r||void 0===r?void 0:r.form,a=(null===r||void 0===r?void 0:r.value)||"",o="function"===(0,f.oL)(n)&&n(t);I&&W(!1),H!==a&&Y(a),tt&&"change"===t.type&&et(!1),function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=D.length+N.length;if(t&&(r!==t.elements.length||n)){var u=(0,c.Z)(t.elements).reduce((function(t,e){var n=t,r=e.type,u=e.tagName.toLowerCase();return e&&("button"===u||["submit","reset","button"].includes(r))&&n.buttons.push(e),!e||["fieldset","button"].includes(u)||["submit","reset","button"].includes(r)||n.elements.push(e),n}),{elements:[],buttons:[]});B(u.buttons),L(u.elements);var a=m.reduce((function(t,e){var n,r=t,u=(e||{}).elements;return(n=r.elements).push.apply(n,(0,c.Z)(u)),r}),{attributes:e,elements:[]});U(a),rt()}}(u,o)};return(0,l.useEffect)((function(){(nt||""===nt)&&D&&rt()}),[nt,D,rt]),(0,l.useEffect)((function(){D&&rt()}),[D,rt]),(0,l.useEffect)((function(){J(j)}),[j]),(0,l.useEffect)((function(){y&&(ct(),st())}),[ct,y,st]),(0,h.jsx)("form",(0,a.Z)((0,a.Z)({},e),{},{onSubmit:function(t){t.preventDefault(),document.activeElement.blur(),ct(),ut(!0);var e=t.currentTarget||t.target,n=(0,f.Nh)(e,T),r=(0,a.Z)((0,a.Z)({},C),n.postData),o=(0,f.pD)(r);if(o){var i=at(o);d&&d(i)}else{var c=function(t){return Object.keys(t).reduce((function(e,n){return(0,a.Z)((0,a.Z)({},e),{},(0,u.Z)({},n,t[n].values))}),{})}(r),s=it(e,c);e.reset(),d&&d(s),ut(!1),W(!0)}},onReset:function(){ct(),st()},onChange:lt,onFocus:lt,onBlur:lt,children:null===m||void 0===m?void 0:m.map((function(t){var e=t.elements,n=t.disabled,u=E||n||!1;return(0,h.jsx)("fieldset",{className:b,disabled:u,children:(0,h.jsx)("div",{className:p,variant:t.variant||null,children:e.map((function(t){var e=t.id,n=t.node,o=(0,r.Z)(t,Z);switch(o.disabled=u||o.disabled,n){case"input":return(0,h.jsx)(g,(0,a.Z)((0,a.Z)({id:e},o),{},{clearValue:I}),e);case"slider":return(0,h.jsx)(k,(0,a.Z)((0,a.Z)({id:e},o),{},{clearValue:I}),e);case"textarea":return(0,h.jsx)(w,(0,a.Z)((0,a.Z)({id:e},o),{},{clearValue:I}),e);case"button":return"submit"===o.type&&(o.disabled=G),"reset"===o.type&&(o.disabled=tt),(0,h.jsx)(x,(0,a.Z)({id:e},o),e);default:return null}}))})},t.id)}))}))}E.defaultProps={customEventHandler:void 0,customSubmitHandler:void 0,disableForm:!1,postFormWithApiCall:!0,resetForm:!1,submitButtonDisabled:!0,postData:void 0};var S=E}}]);
//# sourceMappingURL=LoginForm.86966663.chunk.js.map