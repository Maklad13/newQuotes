"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[917],{917:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var s=n(791),c=n(931),r=n(523),o=n(152),a=n(995),m=n(853),d=n(556),i="Comments_comments__FHj+f",u="NewCommentForm_form__Iu5BO",l="NewCommentForm_control__CsPx6",x="NewCommentForm_actions__aHQZ4",h=n(184),j=function(e){var t=(0,s.useRef)(),n=(0,a.Z)(m.Ir),c=n.sendRequest,r=n.status,o=n.error,i=e.onAddedComment;(0,s.useEffect)((function(){"completed"!==r||o||i()}),[r,o,i]);var j=function(n){n.preventDefault();var s=t.current.value;c({commentData:{text:s},quoteId:e.quoteId})};return(0,h.jsxs)("form",{className:u,onSubmit:j,children:["pending"===r&&(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(d.Z,{})}),(0,h.jsxs)("div",{className:l,onSubmit:j,children:[(0,h.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,h.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),(0,h.jsx)("div",{className:x,children:(0,h.jsx)("button",{className:"btn",children:"Add Comment"})})]})},f="CommentItem_item__waw29",_=function(e){return(0,h.jsx)("li",{className:f,children:(0,h.jsx)("p",{children:e.text})})},p="CommentsList_comments__L9JBw",N=function(e){return(0,h.jsx)("ul",{className:p,children:e.comments.map((function(e){return(0,h.jsx)(_,{text:e.text},e.id)}))})},C=function(){var e=(0,s.useState)(!1),t=(0,o.Z)(e,2),n=t[0],r=t[1],u=(0,c.UO)().quoteId,l=(0,a.Z)(m.h_),x=l.sendRequest,f=l.status,_=l.data;(0,s.useEffect)((function(){x(u)}),[x,u]);var p,C=(0,s.useCallback)((function(){x(u)}),[x,u]);return"pending"===f&&(p=(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(d.Z,{})})),"completed"===f&&_&&_.length>0&&(p=(0,h.jsx)(N,{comments:_})),"completed"!==f||_&&0!==_.length||(p=(0,h.jsx)("p",{className:"centered",children:"No Comments Found"})),(0,h.jsxs)("section",{className:i,children:[(0,h.jsx)("h2",{children:"User Comments"}),!n&&(0,h.jsx)("button",{className:"btn",onClick:function(){r(!0)},children:"Add a Comment"}),n&&(0,h.jsx)(j,{quoteId:u,onAddedComment:C}),p]})},v="HighlightedQuote_quote__4EjI8",g=function(e){return(0,h.jsxs)("figure",{className:v,children:[(0,h.jsx)("p",{children:e.text}),(0,h.jsx)("figcaption",{children:e.author})]})},b=function(){var e=(0,c.UO)(),t=(0,c.$B)(),n=e.quoteId,o=(0,a.Z)(m.jR,!0),i=o.sendRequest,u=o.status,l=o.data,x=o.error;return(0,s.useEffect)((function(){i(n)}),[i,n]),"pending"===u?(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(d.Z,{})}):x?(0,h.jsx)("p",{children:x}):l.text?(0,h.jsxs)(s.Fragment,{children:[(0,h.jsx)(g,{text:l.text,author:l.author}),(0,h.jsx)(c.AW,{path:"".concat(t.path),exact:!0,children:(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(r.rU,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Comments"})})}),(0,h.jsx)(c.AW,{path:"".concat(t.path,"/comments"),children:(0,h.jsx)(C,{})})]}):(0,h.jsx)("p",{children:"No Quote Found"})}}}]);
//# sourceMappingURL=917.1a30a0b1.chunk.js.map