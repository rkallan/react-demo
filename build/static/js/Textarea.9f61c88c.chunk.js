"use strict";(self.webpackChunkrrkallan_demo=self.webpackChunkrrkallan_demo||[]).push([[16],{7040:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var i=t(885),n=t(2791),r=t(697),s="textarea_container__J0lmc",d="textarea_label__y1145",l="textarea_title__mvuCp",o="textarea_fieldset__Hi+qw",c="textarea_textareaContainer__TC0Gw",u="textarea_textarea__XypqD",v="textarea_helperText__T6G6k",_="textarea_text__v4cF+",f=t(184);var m=function(e){var a=e.id,t=e.title,m=e.name,x=e.defaultValue,h=void 0===x?"":x,p=e.readOnly,y=void 0!==p&&p,j=e.disabled,N=void 0!==j&&j,b=e.required,g=void 0!==b&&b,k=e.validationTypes,C=void 0===k?void 0:k,V=e.errorMessage,q=void 0===V?"Incorrect entry.":V,F=e.autoComplete,S=void 0===F?"off":F,T=e.customOnChangeHandler,w=void 0===T?void 0:T,E=(0,n.useState)((function(){return h})),O=(0,i.Z)(E,2),Z=O[0],G=O[1],H=(0,n.useState)((function(){})),J=(0,i.Z)(H,2),L=J[0],B=J[1],D=(0,n.useState)((function(){return g?"isEmpty":"isValid"})),I=(0,i.Z)(D,2),M=I[0],X=I[1],z=(0,n.useState)((function(){return h?"legend":"placeholder"})),A=(0,i.Z)(z,2),K=A[0],P=A[1];return(0,n.useEffect)((function(){var e=[N?"disabled":void 0,y?"read-only":void 0].join(" ").trim()||void 0;B(e)}),[N,y]),(0,f.jsxs)("section",{className:s,children:[(0,f.jsx)("article",{className:d,variant:K,children:(0,f.jsx)("label",{htmlFor:m,className:l,children:t})}),(0,f.jsxs)("fieldset",{className:o,variant:L,state:M,children:[(0,f.jsx)("legend",{className:l,variant:K,children:t}),(0,f.jsx)("div",{className:c,children:(0,f.jsx)("textarea",{id:"".concat(m,"-").concat(a),className:u,name:m,value:Z,required:g,disabled:N,readOnly:y,autoComplete:S,onChange:function(e){var a=e.currentTarget.value,t=(0,r.pk)(a);G(a),w&&"function"===(0,r.oL)(w)&&w(t)},onFocus:function(){P("legend focussed"),X("isFocussed")},onBlur:function(){var e=(0,r.pk)(Z);P(e?"legend":"placeholder"),G(e);var a=r.tV.isEmpty(e)&&!g?"isValid":(0,r.F9)(C,e);r.tV.isEmpty(e)&&g&&(a="inValid"),X(a)},"data-required":g||void 0,"data-validation-types":"object"===(0,r.oL)(C)?JSON.stringify(C):void 0})})]}),(0,f.jsx)("div",{className:v,children:(0,f.jsx)("span",{className:_,state:"inValid"===M?"visible":"hidden",children:q})})]})}}}]);
//# sourceMappingURL=Textarea.9f61c88c.chunk.js.map