(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{4769:function(e,t,n){Promise.resolve().then(n.bind(n,7390))},7390:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n(7437),a=n(2265),i=n(9376);function c(e){let{selectedImg:t,onclose:n,isPopupOpen:a}=e;return(0,s.jsx)("section",{className:"popup ".concat(a?"popup_opened":""),children:(0,s.jsxs)("div",{className:"popup__container popup__container_image",children:[(0,s.jsx)("button",{className:"popup__close",type:"button",onClick:n}),(0,s.jsx)("img",{className:"popup__image",src:t,alt:"скриншот"}),(0,s.jsx)("p",{className:"popup__disc"})]})})}n(5698);var l=n(7301),r=n(3145);function o(e){let{params:t}=e,n=(0,i.useRouter)(),[o,u]=a.useState(!1),[_,p]=a.useState(null),{slug:d,id:f}=t,m=l.l.find(e=>e.id===d).faq;function h(e){u(!0),p(e.target.src)}return(0,s.jsxs)(s.Fragment,{children:[null==m?void 0:m.filter(e=>e.id===f).map((e,t)=>{var a;return(0,s.jsxs)("div",{className:"faq",children:[(0,s.jsxs)("div",{className:"faq__block",onClick:()=>n.back(),children:[(0,s.jsx)("div",{className:"faq__icon faq__icon_minus",children:" "}),(0,s.jsx)("h4",{className:"faq__subtitle",children:e.title})]},e.id),(0,s.jsxs)("ul",{className:"faq__list",children:[null==e?void 0:null===(a=e.list)||void 0===a?void 0:a.map((e,t)=>(0,s.jsxs)("li",{className:"faq__list-item",children:[(0,s.jsx)("p",{className:"faq__text",children:e.text}),(0,s.jsx)("div",{className:"faq__img-container",children:e.link?(0,s.jsx)(r.default,{className:"faq__img",src:e.link,alt:"скриншот",onClick:h,width:500,height:255}):null})]},t)),null==e?void 0:e.text,(0,s.jsxs)("div",{className:"faq__support",children:[e.support&&(0,s.jsx)("a",{className:"section__icon section__icon_tg",href:"https://t.me/+79958454368",target:"_blank",rel:"noreferrer"}),e.support_wa&&(0,s.jsx)("a",{className:"section__icon section__icon_wa",href:"https://wa.me/79958454368?text=",target:"_blank",rel:"noreferrer"})]})]})]},t)}),(0,s.jsx)(c,{selectedImg:_,onclose:function(){u(!1)},isPopupOpen:o})]})}n(3478)},9376:function(e,t,n){"use strict";var s=n(5475);n.o(s,"usePathname")&&n.d(t,{usePathname:function(){return s.usePathname}}),n.o(s,"useRouter")&&n.d(t,{useRouter:function(){return s.useRouter}})},5523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return s}});let s=n(7043)._(n(2265)).default.createContext(null)},3478:function(){},5698:function(){}},function(e){e.O(0,[995,924,145,301,971,117,744],function(){return e(e.s=4769)}),_N_E=e.O()}]);