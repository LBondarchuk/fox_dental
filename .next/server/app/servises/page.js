(()=>{var e={};e.id=975,e.ids=[975],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5158:e=>{"use strict";e.exports=require("http2")},1808:e=>{"use strict";e.exports=require("net")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},7282:e=>{"use strict";e.exports=require("process")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9118:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>l});var s=r(482),i=r(9108),n=r(2563),a=r.n(n),o=r(8300),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);r.d(t,c);let l=["",{children:["servises",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4529)),"/Users/marina/Documents/GitHub/fox_dental/src/app/servises/page.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,3475)),"/Users/marina/Documents/GitHub/fox_dental/src/app/servises/layout.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,6850)),"/Users/marina/Documents/GitHub/fox_dental/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/marina/Documents/GitHub/fox_dental/src/app/servises/page.jsx"],u="/servises/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/servises/page",pathname:"/servises",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},2353:(e,t,r)=>{Promise.resolve().then(r.bind(r,6052))},5303:()=>{},6052:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var s=r(2295),i=r(3729),n=r(2561),a=r(3714),o=r.n(a);let c=({setModalItem:e,modalItem:t})=>{let r=t?[...t.description.split("*")]:"";return s.jsx("div",{className:o().container,children:(0,s.jsxs)(n.Z,{setShow:()=>e(""),show:!!t,header:t.name,isServise:!0,children:[s.jsx("h1",{children:t.name}),s.jsx("div",{className:o().content,children:r.length>1?r.map((e,t,r)=>0===t?s.jsx("p",{children:e}):t===r.length-1?s.jsx("p",{style:{marginTop:20},children:e}):s.jsx("li",{className:o().li,children:e})):r})]})})};var l=r(7073),d=r.n(l),u=r(1223),p=r.n(u);r(2560),r(783),r(4132);let x=({onShowModal:e,item:t})=>(0,s.jsxs)("div",{className:d().container,onClick:e,children:[s.jsx("h3",{className:d().title,children:s.jsx("span",{children:t.name})}),(0,s.jsxs)("div",{className:d().contentContainer,children:[s.jsx("div",{className:d().image,children:s.jsx(p(),{src:t.img,alt:"Banner Image",fill:!0,style:{objectFit:"cover"}})}),s.jsx("div",{className:d().text,children:t.shortDescription})]})]});var m=r(7195),v=r.n(m),h=r(8331),_=r(9664),g=r(8882);let f=()=>{let[e,t]=(0,i.useState)(!1),[r,n]=(0,i.useState)([]);(0,i.useEffect)(()=>{(0,h.r)("servises",n)},[]);let a=e=>{(0,g.R)(`Клік на сервіс ${e.name}`),t(e)};return s.jsx("div",{className:v().container,children:r.length>0?(0,s.jsxs)(s.Fragment,{children:[s.jsx(c,{setModalItem:t,modalItem:e}),s.jsx("h1",{className:v().title,children:"НАШІ ПОСЛУГИ"}),s.jsx("div",{className:v().list,children:r.map(e=>s.jsx(x,{onShowModal:()=>a(e),item:e},e.id))})]}):s.jsx(_.Z,{})})}},2560:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Transition:()=>u});var s=r(2295),i=r(3729),n=r(2979),a=Object.defineProperty,o=new Map,c=new WeakMap,l=0,d=void 0;i.Component;let u=({children:e,background:t="#fff"})=>{let[r,a]=function({threshold:e,delay:t,trackVisibility:r,rootMargin:s,root:n,triggerOnce:a,skip:u,initialInView:p,fallbackInView:x,onChange:m}={}){var v;let[h,_]=i.useState(null),g=i.useRef(),[f,j]=i.useState({inView:!!p,entry:void 0});g.current=m,i.useEffect(()=>{let i;if(!u&&h)return i=function(e,t,r={},s=d){if(void 0===window.IntersectionObserver&&void 0!==s){let i=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:n,elements:a}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(c.has(r)||(l+=1,c.set(r,l.toString())),c.get(r)):"0":e[t]}`}).toString(),r=o.get(t);if(!r){let s;let i=new Map,n=new IntersectionObserver(t=>{t.forEach(t=>{var r;let n=t.isIntersecting&&s.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=n),null==(r=i.get(t.target))||r.forEach(e=>{e(n,t)})})},e);s=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:n,elements:i},o.set(t,r)}return r}(r),u=a.get(e)||[];return a.has(e)||a.set(e,u),u.push(t),n.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(a.delete(e),n.unobserve(e)),0===a.size&&(n.disconnect(),o.delete(i))}}(h,(e,t)=>{j({inView:e,entry:t}),g.current&&g.current(e,t),t.isIntersecting&&a&&i&&(i(),i=void 0)},{root:n,rootMargin:s,threshold:e,trackVisibility:r,delay:t},x),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,h,n,s,a,u,r,x,t]);let y=null==(v=f.entry)?void 0:v.target,b=i.useRef();h||!y||a||u||b.current===y||(b.current=y,j({inView:!!p,entry:void 0}));let q=[_,f.inView,f.entry];return q.ref=q[0],q.inView=q[1],q.entry=q[2],q}({triggerOnce:!0});return s.jsx(n.E.div,{ref:r,animate:a?{y:0,opacity:1,scale:1}:{y:100,opacity:0,scale:.8},transition:{duration:.8,ease:"easeInOut"},children:e})}},9664:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(2295);r(3729);var i=r(4423),n=r.n(i);let a=()=>s.jsx("div",{className:n().container,children:s.jsx("div",{className:n().LoaderSpiner})})},8331:(e,t,r)=>{"use strict";r.d(t,{r:()=>n});var s=r(8414),i=r(1688);let n=async(e,t)=>{try{let r=await (0,s.PL)((0,s.hJ)(i.db,e));console.log(r.docs.length);let n=r.docs.map(e=>({id:e.id,...e.data()}));t(n.sort((e,t)=>e.seqNumber-t.seqNumber))}catch(e){console.error("Error fetching documents:",e)}}},7195:e=>{e.exports={container:"ServisesPage_container__ymyYJ",list:"ServisesPage_list__p_vYP",title:"ServisesPage_title__zoUDi"}},4423:e=>{e.exports={container:"Loader_container__Rhygo",LoaderSpiner:"Loader_LoaderSpiner___Vw1L",spin:"Loader_spin__ov_bc"}},3714:e=>{e.exports={container:"ServiseModal_container__uUwod",li:"ServiseModal_li__dHf1X"}},7073:e=>{e.exports={container:"Servise_container__rQmML",title:"Servise_title__vs1Bi",contentContainer:"Servise_contentContainer__4ULEB",image:"Servise_image__oQK66",img:"Servise_img__qROUP",text:"Servise_text__2Srw1"}},3475:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>i});var s=r(5036);let i={title:"FOX DENTAL | ПОСЛУГИ",description:"Generated by create next app"};function n({children:e}){return s.jsx(s.Fragment,{children:e})}},4529:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>a});let s=(0,r(6843).createProxy)(String.raw`/Users/marina/Documents/GitHub/fox_dental/src/app/servises/page.jsx`),{__esModule:i,$$typeof:n}=s,a=s.default}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[955,578],()=>r(9118));module.exports=s})();