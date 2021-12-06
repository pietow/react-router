(this["webpackJsonpreact-router"]=this["webpackJsonpreact-router"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),n=c(11),a=c.n(n),d=c(5),l=(c(16),c(10)),i=c(7),b=c(3),j=(c(17),c(2)),o=c(0),u=function(e){var t=e.isOpen,c=e.setIsOpen,s=e.editCard,n=e.cardId,a=e.cards,d=Object(r.useState)(""),l=Object(b.a)(d,2),i=l[0],j=l[1],u=Object(r.useState)(""),x=Object(b.a)(u,2),O=x[0],h=x[1];Object(r.useEffect)((function(){j(Object.keys(a[Number(n)])[0]),h(Object.values(a[Number(n)])[0])}),[a,n]);return Object(o.jsx)("div",{className:"fixed  inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full "+(t?"":"hidden"),children:Object(o.jsxs)("div",{className:"relative top-20 mx-auto px-3 pb-3 border w-96 shadow-lg rounded-md bg-white",children:[Object(o.jsx)("div",{className:"w-full flex justify-end text-2xl text-black",children:Object(o.jsx)("button",{onClick:function(){return c(!t)},children:"x"})}),Object(o.jsxs)("div",{className:"mt-3 text-center",children:[Object(o.jsx)("div",{className:"mt-2 px-7 py-3",children:Object(o.jsx)("p",{className:"text-sm text-gray-500",children:"Please change the values or leave them."})}),Object(o.jsxs)("div",{className:"flex w-full mb-4",children:[Object(o.jsx)("input",{className:"flex-shrink w-full mr-3 text-black border-2 rounded",type:"text",onChange:function(e){return j(e.target.value)},value:i}),Object(o.jsx)("input",{className:"flex-shrink w-full text-black border-2 rounded",type:"text",onChange:function(e){return h(e.target.value)},value:O})]}),Object(o.jsx)("div",{className:"",children:Object(o.jsx)("button",{className:"px-4 py-2 bg-yellow-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300",onClick:function(){s(n,i,O),c(!t)},children:"Edit"})})]})]})})};var x=function(e){var t=e.cards,c=e.deleteCard,s=e.editCard,n=e.inputField,a=Object(r.useState)(!1),l=Object(b.a)(a,2),i=l[0],j=l[1],x=Object(r.useState)(null),O=Object(b.a)(x,2),h=O[0],m=O[1];return Object(o.jsxs)("div",{className:"h-screen",children:[Object(o.jsx)("h1",{className:"mb-10 text-4xl",children:"Card Editor"}),Object(o.jsxs)("table",{className:"border-2",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"border-2",children:[Object(o.jsx)("th",{className:"border-2 p-3",children:"Front"}),Object(o.jsx)("th",{className:"border-2 p-3",children:"Back"}),Object(o.jsx)("th",{colSpan:"2",className:"border-2 p-3",children:"Action"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"border-2",children:Object.keys(e)[0]}),Object(o.jsx)("td",{className:"border-2",children:Object.values(e)[0]}),Object(o.jsx)("td",{className:"border-2",children:Object(o.jsx)("button",{className:"border-2 rounded-md bg-yellow-500 p-1 m-1",onClick:function(){return function(e){j(!i),m(e)}(t)},children:"Edit"})}),Object(o.jsx)("td",{className:"border-2",children:Object(o.jsx)("button",{onClick:function(){return c(t)},className:"border-2 rounded-md bg-red-500 p-1 m-1",children:"Delete"})})]},t)}))}),n]}),Object(o.jsxs)("div",{className:"mx-auto w-11/12 grid grid-cols-1 divide-y divide-yellow-500",children:[Object(o.jsx)("div",{className:"m-3"}),Object(o.jsx)(d.b,{to:"/view",children:Object(o.jsx)("button",{className:"p-2 m-5 bg-green-600 border-2 rounded-md",children:"Card Viewer"})})]}),Object(o.jsx)(u,{isOpen:i,setIsOpen:j,cardId:h,cards:t,editCard:s})]})},O=function(e){var t=e.addCard,c=Object(r.useState)(""),s=Object(b.a)(c,2),n=s[0],a=s[1],d=Object(r.useState)(""),l=Object(b.a)(d,2),i=l[0],j=l[1];return Object(o.jsx)("tfoot",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"border-2",children:Object(o.jsx)("input",{className:"text-black border-2 rounded mx-2",type:"text",onChange:function(e){return a(e.target.value)},value:n})}),Object(o.jsx)("td",{className:"border-2",children:Object(o.jsx)("input",{className:"text-black border-2 rounded mx-2",type:"text",onChange:function(e){return j(e.target.value)},value:i})}),Object(o.jsx)("td",{colSpan:"2",children:Object(o.jsx)("button",{onClick:function(){t(n,i),a(""),j("")},className:"border-2  rounded-md bg-green-500 p-1 px-10 m-1",children:"Add"})})]})})},h=(c(19),function(e){var t=e.cards,c=Object(r.useState)(!1),s=Object(b.a)(c,2),n=s[0],a=s[1],l=Object(r.useState)(0),i=Object(b.a)(l,2),j=i[0],u=i[1];return Object(o.jsx)("div",{className:"w-full",children:Object(o.jsxs)("div",{className:"w-3/12 mx-auto",children:[Object(o.jsx)("h1",{className:"mb-10 text-4xl",children:"Cards Viewer"}),Object(o.jsx)("div",{className:"scene mx-7",children:Object(o.jsxs)("div",{className:(n?"is-flipped ":"")+"card-transition card bg-white w-full relative mx-auto text-black rounded",children:[Object(o.jsx)("div",{className:"card__face--front",children:Object.keys(t[j])}),Object(o.jsx)("div",{className:"card__face--back",children:Object.values(t[j])})]})}),Object(o.jsx)("button",{onClick:function(){return a(!n)},className:"border-2 border-white bg-green-400 rounded px-4 py-2 m-7",children:"Flip!"}),Object(o.jsx)("button",{onClick:function(){a(!1),u((j+1)%t.length)},className:"border-2 border-white bg-green-400 rounded px-4 py-2 m-7",children:"Next Card!"}),Object(o.jsxs)("div",{className:"mx-auto w-11/12 grid grid-cols-1 divide-y divide-yellow-500",children:[Object(o.jsx)("div",{className:"m-3"}),Object(o.jsx)(d.b,{to:"/",children:Object(o.jsx)("button",{className:"p-2 m-5 bg-green-600 border-2 rounded-md",children:"Card Editor"})})]})]})})});var m=function(){var e=Object(r.useState)([{up:"gg"},{down:"G"},{"next word":"w"}]),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(o.jsx)("div",{className:"App flex p-32 flex-col items-center bg-gray-900 text-white h-screen",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/",element:Object(o.jsx)(x,{inputField:Object(o.jsx)(O,{addCard:function(e,t){s([].concat(Object(i.a)(c),[Object(l.a)({},e,t)]))}}),cards:c,deleteCard:function(e){s([].concat(Object(i.a)(c.slice(0,e)),Object(i.a)(c.slice(e+1))))},editCard:function(e,t,r){s([].concat(Object(i.a)(c.slice(0,e)),[Object(l.a)({},t,r)],Object(i.a)(c.slice(e+1))))}})}),Object(o.jsx)(j.a,{path:"/view",element:Object(o.jsx)(h,{cards:c})}),Object(o.jsx)(j.a,{path:"*",element:Object(o.jsx)("main",{style:{padding:"1rem"},children:Object(o.jsx)("p",{children:"There's nothing here!"})})})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),r(e),s(e),n(e),a(e)}))};a.a.render(Object(o.jsx)(d.a,{children:Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})})}),document.getElementById("root")),f()}},[[20,1,2]]]);
//# sourceMappingURL=main.686a73ee.chunk.js.map