(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{4020:function(e,t,s){Promise.resolve().then(s.bind(s,3045))},3045:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return r}});var i=s(7437),l=s(7648),n=s(2265),a=s(7301);function r(){let e=a.l.map(e=>e.updates.map(t=>({title:e.title,period:t.list_name,list:t.list}))).flat().sort((e,t)=>{let s=e.period.split(".").reverse().join(),i=t.period.split(".").reverse().join();return s<i?1:s>i?-1:0}),[t,s]=(0,n.useState)(e),r=t=>""===t?s(e):s(e.filter(e=>e.title===t));return(0,i.jsxs)("section",{className:"news",children:[(0,i.jsx)("h2",{className:"news__title",children:"Новости"}),(0,i.jsxs)("div",{className:"news__filter",children:[(0,i.jsx)("p",{className:"section__text",children:"Показывать:"}),(0,i.jsx)("button",{className:"news__btn",onClick:()=>r(""),children:"Все новости"}),(0,i.jsx)("button",{className:"news__btn",onClick:()=>r("Avito: автозагрузка"),children:"Avito: автозагрузка"}),(0,i.jsx)("button",{className:"news__btn",onClick:()=>r("Avito: чаты и товары"),children:"Avito: чаты и товары"}),(0,i.jsx)("button",{className:"news__btn",onClick:()=>r("ДРОМ: чаты, сделки, товары"),children:"ДРОМ: чаты, сделки, товары"}),(0,i.jsx)("button",{className:"news__btn",onClick:()=>r("Avito: отклики и вакансии"),children:"Avito: отклики и вакансии"})]}),(0,i.jsx)("ul",{className:"news__list",children:t.map(e=>{var t;return(0,i.jsxs)("li",{className:"news__list-item",children:[(0,i.jsx)("p",{className:"news__list-period",children:e.period}),"Avito: автозагрузка"===e.title?(0,i.jsx)(l.default,{href:"/autoload",className:"news__list-title",children:e.title}):"Avito: чаты и товары"===e.title?(0,i.jsx)(l.default,{href:"/avito",className:"news__list-title",children:e.title}):"ДРОМ: чаты, сделки, товары"===e.title?(0,i.jsx)(l.default,{href:"/drom",className:"news__list-title",children:e.title}):(0,i.jsx)(l.default,{href:"/avitojob",className:"news__list-title",children:e.title}),null===(t=e.list)||void 0===t?void 0:t.map((e,t)=>(0,i.jsx)("p",{className:"news__text",children:e.text},t))]},e.period+e.title)})})]})}s(9500)},7648:function(e,t,s){"use strict";s.d(t,{default:function(){return l.a}});var i=s(2972),l=s.n(i)},9500:function(){}},function(e){e.O(0,[920,972,301,971,117,744],function(){return e(e.s=4020)}),_N_E=e.O()}]);