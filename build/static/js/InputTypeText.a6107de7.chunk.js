"use strict";(self.webpackChunkrrkallan_demo=self.webpackChunkrrkallan_demo||[]).push([[359],{9327:function(e,i,n){n.r(i),n.d(i,{default:function(){return x}});var t=n(885),a=n(2791),r=n(4455),u=n(697),d=n(7006),l="inputfieldText_container__wLsCc",o="inputfieldText_label__4Wh2w",s="inputfieldText_title__8ayzZ",c="inputfieldText_fieldset__69Ji5",v="inputfieldText_inputContainer__8RSMw",f="inputfieldText_input__DAT7h",m="inputfieldText_iconValidated__gaS6l",p="inputfieldText_text__mKDY-",_=n(184),h=(0,r.ZP)((function(){return Promise.all([n.e(753),n.e(226),n.e(915)]).then(n.bind(n,8226))}),{fallback:(0,_.jsx)(d.gb,{})});var x=function(e){var i=e.id,n=e.title,r=e.name,d=e.defaultValue,x=void 0===d?"":d,b=e.type,N=void 0===b?"text":b,j=e.readOnly,g=void 0!==j&&j,y=e.disabled,T=void 0!==y&&y,S=e.required,k=void 0!==S&&S,C=e.validationTypes,V=void 0===C?void 0:C,Z=e.autoComplete,A=void 0===Z?"off":Z,E=e.max,w=void 0===E?void 0:E,F=e.min,O=void 0===F?void 0:F,q=e.step,L=void 0===q?void 0:q,P=e.clearValue,D=void 0!==P&&P,J=e.customOnChangeHandler,z=void 0===J?void 0:J,B=(0,a.useState)((function(){return x})),H=(0,t.Z)(B,2),K=H[0],M=H[1],R=(0,a.useState)((function(){})),W=(0,t.Z)(R,2),Y=W[0],G=W[1],I=(0,a.useState)((function(){return k?"isEmpty":"isValid"})),Q=(0,t.Z)(I,2),U=Q[0],X=Q[1],$=(0,a.useState)((function(){})),ee=(0,t.Z)($,2),ie=ee[0],ne=ee[1],te=(0,a.useState)((function(){return k?"isEmpty":"isValid"})),ae=(0,t.Z)(te,2),re=ae[0],ue=ae[1],de=(0,a.useState)((function(){return x?"legend":"placeholder"})),le=(0,t.Z)(de,2),oe=le[0],se=le[1],ce=(0,a.useState)((function(){return"".concat(r,"-").concat(i)})),ve=(0,t.Z)(ce,1)[0],fe=function(e){var i=e.value,n=e.valueAsNumber;return[NaN,1/0].includes(n)?(0,u.pk)(i):n},me=function(e){var i=e.value,n=u.tV.isEmpty(i);return n&&!k?"isValid":n&&k?"isEmpty":(0,u.F9)(V,i)};return(0,a.useEffect)((function(){var e=!1,i=[T?"disabled":void 0,g?"read-only":void 0].join(" ").trim()||void 0;return e||G(i),function(){e=!0}}),[T,g]),(0,a.useEffect)((function(){var e=!1;return D&&!e&&M(x||""),function(){e=!0}}),[D,x]),(0,_.jsxs)("section",{className:l,state:"hidden"===N?"hidden":void 0,children:[(0,_.jsx)("article",{className:o,variant:oe,children:(0,_.jsx)("label",{htmlFor:ve,className:s,children:n})}),(0,_.jsxs)("fieldset",{className:c,variant:Y,state:U,children:[(0,_.jsx)("legend",{className:s,variant:oe,children:n}),(0,_.jsx)("div",{className:v,children:(0,_.jsx)("input",{id:ve,className:f,name:r,type:N,value:K,required:k,disabled:T,readOnly:g,autoComplete:A,min:"number"===N?O:void 0,max:"number"===N?w:void 0,step:"number"===N?L||1:void 0,onChange:function(e){var i=e.currentTarget,n=i.value,t=i.valueAsNumber,a=fe({value:n,valueAsNumber:t}),r=me({value:a});M(n),ue(r),z&&"function"===(0,u.oL)(z)&&z(a)},onFocus:function(){se("legend focussed"),X("isFocussed"),ne((function(){}))},onBlur:function(e){var i=e.currentTarget,n=i.value,t=i.valueAsNumber,a=fe({value:n,valueAsNumber:t});M((function(){return 1})),setTimeout((function(){M((function(){return a}))}),1);var r=a||0===a?"legend":"placeholder",u=me({value:a});se(r),X(u),k&&ne((function(){return"isValid"===u?"check":"alert"}))},"data-required":k||void 0,"data-validation-types":"object"===(0,u.oL)(V)?JSON.stringify(V):void 0,state:re})})]}),(0,_.jsx)("div",{className:m,state:[ie?"visible":"hidden",U].join(" "),children:!!ie&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(h,{icon:ie,svgProps:void 0,noContainer:void 0,variant:"normal"}),(0,_.jsx)("span",{className:p,children:"isValid"===ie?"correct":"errror"})]})})]})}}}]);
//# sourceMappingURL=InputTypeText.a6107de7.chunk.js.map