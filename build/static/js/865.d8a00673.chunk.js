"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[865],{179:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var s=n(152),r=n(791),u=n(931),o="Card_card__R7sfL",a=n(184),c=function(e){return(0,a.jsx)("div",{className:o,children:e.children})},l=n(556),i="QuoteForm_form__oODOU",d="QuoteForm_loading__EAlH0",f="QuoteForm_control__At3D7",h="QuoteForm_actions__IluUj",x=function(e){var t=(0,r.useState)(!1),n=(0,s.Z)(t,2),o=n[0],x=n[1],m=(0,r.useRef)(),_=(0,r.useRef)();return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(u.NL,{when:o,message:function(e){return"Are you sure you want to leave? all data will be lost"}}),(0,a.jsx)(c,{children:(0,a.jsxs)("form",{onFocus:function(){x(!0)},className:i,onSubmit:function(t){t.preventDefault();var n=m.current.value,s=_.current.value;e.onAddQuote({author:n,text:s})},children:[e.isLoading&&(0,a.jsx)("div",{className:d,children:(0,a.jsx)(l.Z,{})}),(0,a.jsxs)("div",{className:f,children:[(0,a.jsx)("label",{htmlFor:"author",children:"Author"}),(0,a.jsx)("input",{type:"text",id:"author",ref:m})]}),(0,a.jsxs)("div",{className:f,children:[(0,a.jsx)("label",{htmlFor:"text",children:"Text"}),(0,a.jsx)("textarea",{id:"text",rows:"5",ref:_})]}),(0,a.jsx)("div",{className:h,children:(0,a.jsx)("button",{onClick:function(){x(!1)},className:"btn",children:"Add Quote"})})]})})]})},m=n(995),_=n(853),j=function(){var e=(0,m.Z)(_.KP),t=e.sendRequest,n=e.status,s=(0,u.k6)();(0,r.useEffect)((function(){"completed"===n&&s.push("/quotes")}),[n,s]);return(0,a.jsx)(x,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=865.d8a00673.chunk.js.map