"use strict";(self.webpackChunkrrkallan_demo=self.webpackChunkrrkallan_demo||[]).push([[635],{9981:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var i=t(2791),n=t(3081),l=t(1718),r=t(184);var o={attributes:{method:"get",name:"contact-form",autoComplete:"off","data-required":!0,action:void 0,noValidate:!0},fieldsets:[{id:1,caption:null,disabled:!1,form:null,name:null,variant:"row",elements:[{id:1,name:"name",title:"Name",type:"text",required:!0,validationTypes:{hasMinimalAndMaximalCharacters:{minCharacters:2,maxCharacters:256}},defaultValue:void 0,disabled:!1,node:"input"},{id:2,name:"email",title:"Emailaddress",type:"email",required:!0,validationTypes:{hasMinimalAndMaximalCharacters:{minCharacters:2,maxCharacters:256},email:{}},defaultValue:void 0,disabled:!1,node:"input"}]},{id:2,caption:null,disabled:!1,form:null,name:null,variant:"column",elements:[{id:3,name:"message",title:"Message",required:!0,validationTypes:{hasMinimalAndMaximalCharacters:{minCharacters:2,maxCharacters:2048}},defaultValue:void 0,disabled:!1,node:"textarea"}]},{id:3,caption:null,disabled:!1,form:null,name:null,variant:"row-reverse",elements:[{id:1,node:"button",type:"submit",text:"Submit",children:(0,r.jsx)("span",{children:"Send"}),disabled:!0}]}]};const s=(0,n.ZP)((()=>t.e(806).then(t.bind(t,9395))),{fallback:(0,r.jsx)(l.Z,{})}),d=(0,n.ZP)((()=>t.e(741).then(t.bind(t,3978))),{fallback:(0,r.jsx)(l.Z,{})});var m=function(){const[e,a]=(0,i.useState)((()=>{})),[t,n]=(0,i.useState)((()=>"hidden")),[m,u]=(0,i.useState)((()=>{})),[c,h]=(0,i.useState)((()=>!1));return(0,r.jsxs)(r.Fragment,{children:[c&&(0,r.jsx)(l.Z,{}),!!m&&!c&&(0,r.jsx)(d,{variant:e,state:t,iconSize:"normal",icon:e?"confirm":"alert",iconPosition:"center",showCloseButton:!1,customOnClickHandlerCloseButton:void 0,children:m||""}),!c&&"confirm"!==e&&(0,r.jsx)(s,{customEventHandler:void 0,customSubmitHandler:async e=>{h((()=>!0));const t=await e;a((()=>t.ok?"confirm":"error")),u((()=>t.ok?"Thanks for contacting us. We will soon contact you":"Contact form has errors")),setTimeout((()=>{n((()=>"visible")),h((()=>!1))}),750)},disableForm:void 0,resetForm:void 0,submitButtonDisabled:void 0,...o,postFormWithApiCall:!1,postData:void 0})]})}}}]);
//# sourceMappingURL=ContactForm.3e64117b.chunk.js.map