import{R as t,A as g,I as k,H as E,G as v,c as y,s as L,g as b,r as h,a as S,T as d,b as _,d as f,e as w,f as U}from"./vendor.b66c4c96.js";const C=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}};C();const R="modulepreload",p={},x="/",u=function(s,l){return!l||l.length===0?s():Promise.all(l.map(r=>{if(r=`${x}${r}`,r in p)return;p[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":R,e||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),e)return new Promise((c,i)=>{n.addEventListener("load",c),n.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s())};const I=t.createContext({value:"http://localhost:8010/proxy",setValue:a=>{}}),P=t.createContext({value:"https://webhook-store.herokuapp.com",setValue:a=>{}}),A=a=>{const l=`${new URL(a).origin}/graphql`,r=l.replace("http","ws"),e=new E({uri:l}),o=new v(y({url:r})),n=L(({query:c})=>{const i=b(c);return i.kind==="OperationDefinition"&&i.operation==="subscription"},o,e);return new g({link:n,cache:new k})},m=(a,s)=>{const l=localStorage.getItem(a)||s,[r,e]=h.exports.useState(l);return[r,n=>{localStorage.setItem(a,n),e(n)}]},O=t.lazy(()=>u(()=>import("./index.9b31b3d9.js"),["assets/index.9b31b3d9.js","assets/index.d0231cc2.css","assets/index.3cf1a3c0.js","assets/index.6cf34f9e.css","assets/vendor.b66c4c96.js","assets/index.8d503a53.js","assets/index.07ff497d.css"])),V=t.lazy(()=>u(()=>import("./TopNav.f7870a1a.js"),["assets/TopNav.f7870a1a.js","assets/TopNav.3e528b53.css","assets/vendor.b66c4c96.js","assets/index.31c5b176.js","assets/index.d256e2c3.css","assets/index.3cf1a3c0.js","assets/index.6cf34f9e.css"])),W=t.lazy(()=>u(()=>import("./WebhookList.component.34b15c1a.js"),["assets/WebhookList.component.34b15c1a.js","assets/WebhookList.component.29cfbdca.css","assets/vendor.b66c4c96.js","assets/index.8d503a53.js","assets/index.07ff497d.css","assets/index.3cf1a3c0.js","assets/index.6cf34f9e.css","assets/index.31c5b176.js","assets/index.d256e2c3.css"]));function q(){const[a,s]=m("redirectUrl","http://localhost:8010/proxy"),[l,r]=m("webhookStoreUrl","https://webhook-store.herokuapp.com");return t.createElement(P.Provider,{value:{value:l,setValue:r}},t.createElement(S,{client:A(l)},t.createElement(d,{name:d.names.dark},t.createElement(I.Provider,{value:{value:a,setValue:s}},t.createElement(h.exports.Suspense,{fallback:t.createElement("div",null,"Loading...")},t.createElement(O,{topnav:()=>t.createElement(V,null)},t.createElement("div",{style:{background:_}},t.createElement(W,null))))))))}f.configure({apiKey:"hbp_5dLUqCorpak7oThEbZ6GpdY4q7eGqC0v21xN",environment:"production"});const T=w.createRoot(document.getElementById("root"));T.render(t.createElement(U,{honeybadger:f},t.createElement(t.StrictMode,null,t.createElement(q,null))));export{I as R,P as W};
//# sourceMappingURL=index.9677984d.js.map
