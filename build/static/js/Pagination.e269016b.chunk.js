"use strict";(self.webpackChunkrrkallan_demo=self.webpackChunkrrkallan_demo||[]).push([[366],{9384:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var n=a(2791),s=a(697),i=a(8350),o="pagination_container__ljfDz",l="pagination_navigation__u2Abt",r="pagination_unit__9zu1y",u="pagination_button__ldmuC",c="pagination_item__Cu7oq",d="pagination_info__JeXI7",p="pagination_text__N+TUF",x=a(184);function b(t){let{getPageContent:e,data:a=[],prefixSearchParam:m,itemsPerPage:v=16,showing:h=b.defaultProps.showing,buttonPrevText:g=b.defaultProps.buttonPrevText,buttonNextText:f=b.defaultProps.buttonNextText,buttonFirstText:N=b.defaultProps.buttonFirstText,buttonLastText:_=b.defaultProps.buttonLastText,scrollToTop:j=!1}=t;const P=(0,n.useRef)(),{width:T}=(0,i.ZY)({element:P,delay:5,includeUnit:!1})||{},{totalPages:k,totalItems:y,startNumber:C,endNumber:S,currentPage:w,currentData:F,...L}=(0,i.h0)(a,v,m),[G,E]=(0,n.useState)((()=>!!k&&[...Array(k).keys()].map((t=>t+1))||0)),[A,z]=(0,n.useState)((()=>0)),[D,I]=(0,n.useState)((()=>0)),[U,q]=(0,n.useState)((()=>0)),[J]=(0,n.useState)((()=>{const t=parseFloat(y).toString().length;return t<2?2:t})),R=t=>{const{value:e}=t.currentTarget;s.tV.number(e,!0)&&L.jump(e),["first","last","next","prev"].includes(e)&&L[e]()};return(0,n.useLayoutEffect)((()=>{const t=(0,s.Sf)(T/(1+.5*(J+1)))||0;z(t-!!!(t%2))}),[J,T]),(0,n.useEffect)((()=>{E((()=>!!k&&[...Array(k).keys()].map((t=>t+1))||0))}),[k]),(0,n.useEffect)((()=>{const t=(0,s.Sf)(A/2);let e=w<=t?1:w-t,a=w>=k-t?k:w+t;e+A>k&&(e=k-A+1),a<A&&(a=A),I(e),q(a)}),[w,A,k]),(0,n.useEffect)((()=>{j&&window.scrollTo({top:0,left:0,behavior:"smooth"}),e(F())}),[e,F,j]),k||G?(0,x.jsxs)("section",{className:o,children:[(0,x.jsx)("nav",{className:l,children:(null===G||void 0===G?void 0:G.length)>1&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("ul",{className:r,variant:"text",children:[(0,x.jsx)("li",{className:c,children:(0,x.jsx)("button",{className:u,type:"button",onClick:R,value:"first",disabled:1===w?"disabled":void 0,variant:"text",title:"Go to first page",children:N})}),(0,x.jsx)("li",{className:c,children:(0,x.jsx)("button",{className:u,type:"button",onClick:R,value:"prev",disabled:1===w?"disabled":void 0,variant:"text",title:"Go to previous page",children:g})})]}),(0,x.jsx)("ul",{className:r,variant:["number","charLength-".concat(J)].join(" "),ref:P,children:G.map((t=>{const e=t>=D&&t<=U||G.length<A?"visible":"hidden";return(0,x.jsx)("li",{className:c,state:e,children:(0,x.jsx)("button",{className:u,type:"button",onClick:R,value:t,state:t===w?"is-active":void 0,disabled:t===w?"disabled":void 0,variant:"number",title:"Go to page ".concat(t),children:t})},t)}))}),(0,x.jsxs)("ul",{className:r,variant:"text",children:[(0,x.jsx)("li",{className:c,children:(0,x.jsx)("button",{className:u,type:"button",onClick:R,value:"next",disabled:w===k?"disabled":void 0,variant:"text",title:"Go to next page",children:f})}),(0,x.jsx)("li",{className:c,children:(0,x.jsx)("button",{className:u,type:"button",onClick:R,value:"last",disabled:w===k?"disabled":void 0,variant:"text",title:"Go to last page",children:_})})]})]})}),(0,x.jsx)("div",{className:d,children:(0,x.jsx)("span",{className:p,children:h.replace("%pagination.from%",C).replace("%pagination.to%",S).replace("%pagination.total%",y)})})]}):null}b.defaultProps={buttonPrevText:"Previous",buttonNextText:"Next",buttonLastText:"Last",buttonFirstText:"First",showing:"showing %pagination.from% to %pagination.to% of total %pagination.total%",data:[],itemsPerPage:16,prefixSearchParam:void 0,scrollTo:!1};var m=b}}]);
//# sourceMappingURL=Pagination.e269016b.chunk.js.map