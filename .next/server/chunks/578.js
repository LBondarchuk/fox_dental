exports.id=578,exports.ids=[578],exports.modules={1675:(e,a,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},3610:(e,a,s)=>{Promise.resolve().then(s.t.bind(s,1900,23)),Promise.resolve().then(s.t.bind(s,1476,23)),Promise.resolve().then(s.bind(s,591)),Promise.resolve().then(s.bind(s,4632))},6302:(e,a,s)=>{"use strict";s.d(a,{Z:()=>t});var n=s(2295),i=s(8926),r=s.n(i);let t=({variant:e="header",onClick:a,text:s="Записатись"})=>n.jsx("div",{className:r().container,children:n.jsx("button",{className:r()[e],onClick:a,children:s})})},8419:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>h});var n=s(2295),i=s(5657),r=s.n(i),t=s(6302),l=s(4631),o=s.n(l);let c=({children:e,onSend:a})=>(0,n.jsxs)("form",{className:o().container,onSubmit:a,children:[e,n.jsx("div",{style:{marginLeft:"auto"},children:n.jsx(t.Z,{})})]});var d=s(3729);let m=async e=>{try{let a=await fetch("https://api.telegram.org/bot6861936638:AAE0iUr3LHsQI05481YsLIf8E2nDHExbPy4/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:"-4134542967",text:e})}),s=await a.json();console.log("Response from Telegram API:",s)}catch(e){console.error("Error:",e)}};var _=s(8882);let h=({setShowModal:e})=>{let[a,s]=(0,d.useState)(""),[i,t]=(0,d.useState)("+380"),[l,o]=(0,d.useState)(""),[h,x]=(0,d.useState)(""),[v,j]=(0,d.useState)(""),u=e=>/^\+380\d{9}$/.test(e);return n.jsx("div",{className:r().container,children:(0,n.jsxs)(c,{onSend:n=>{if(n.preventDefault(),!a.trim()){x("Введіть ваше ім'я");return}if(!u(i)){j("Введіть коректний номер телефону");return}m(`
      Замовлення з головної сторінки сайту

      Ім'я: ${a}

      Номер телефону: ${i}

      Додаткове повідомлення: ${l}
    `),s(""),t(""),o(""),x(""),j(""),e(!1),(0,_.R)("header form button")},children:[(0,n.jsxs)("label",{children:[n.jsx("span",{children:"Ім'я"}),n.jsx("input",{type:"text",placeholder:"Введіть ваше ім'я",value:a,onChange:e=>{s(e.target.value),x("")}}),h&&n.jsx("p",{className:r().error,children:h})]}),(0,n.jsxs)("label",{children:[n.jsx("span",{children:"Контактний номер"}),n.jsx("input",{type:"text",placeholder:"(___) ___-__-__",value:i,onChange:e=>t(e.target.value)}),v&&n.jsx("p",{className:r().error,children:v})]}),(0,n.jsxs)("label",{children:[n.jsx("span",{children:"Задайте запитання"}),n.jsx("textarea",{placeholder:"Почніть з головного",value:l,onChange:e=>o(e.target.value)})]}),n.jsx("hr",{})]})})}},591:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>P});var n=s(2295),i=s(3729),r=s(1987),t=s(2979),l=s(4632),o=s(1605),c=s.n(o);let d=()=>n.jsx("div",{className:c().container,children:[{link:"/",name:"ГОЛОВНА"},{link:"/prices",name:"ЦІНИ"},{link:"/servises",name:"ПОСЛУГИ"},{link:"/contacts",name:"КОНТАКТИ"}].map(e=>n.jsx(l.default,{item:e},e.name))});var m=s(2561),_=s(6302),h=s(5298),x=s.n(h),v=s(9868),j=s(981),u=s(8419);let p=(0,i.memo)(({show:e,setShow:a,hasScroll:s})=>{let[r,t]=(0,i.useState)(!1);return(0,n.jsxs)("div",{className:x().container,children:[(0,n.jsxs)("label",{children:[n.jsx("div",{className:x().link,children:n.jsx(l.default,{item:{link:"tel:+380973554125",name:"+38 (097) 355 41 25"}})}),n.jsx("div",{className:x().mobileLink,style:{color:e||s?"aliceblue":"black"},children:n.jsx(l.default,{item:{link:"tel:+380689262855",name:n.jsx(j.rJP,{style:{fontSize:32}})}})})]}),n.jsx(m.Z,{show:r,setShow:t,children:n.jsx(u.default,{setShowModal:t})}),n.jsx(_.Z,{onClick:()=>t(!0)}),e?n.jsx(v.Pwq,{className:x().icon,onClick:()=>a(!1),style:{color:"#e5f3eb"}}):n.jsx(v.X_s,{className:x().icon,onClick:()=>a(!0)})]})});var b=s(9290),N=s.n(b),f=s(4132),g=s.n(f),k=s(7293),y=s(3546),w=s.n(y);let S=(0,i.memo)(({show:e})=>(0,n.jsxs)(n.Fragment,{children:[n.jsx(t.E.div,{className:w().overlay,animate:e?"visible":"hidden",variants:{visible:{opacity:1},hidden:{opacity:0}},transition:{duration:.3}}),(0,n.jsxs)(t.E.div,{className:w().container,animate:e?{width:"100vw",height:"100vh",scale:1,borderRadius:0}:{width:0,overflow:"hidden",scale:0,height:0,borderRadius:"100%"},transition:{type:"spring",duration:2,stiffness:260,damping:20},children:[n.jsx(t.E.div,{className:w().links,variants:{visible:{opacity:1,y:0},hidden:{opacity:0,y:20}},initial:"hidden",animate:"visible",children:[{link:"/",name:"ГОЛОВНА"},{link:"/prices",name:"ЦІНИ"},{link:"/servises",name:"ПОСЛУГИ"},{link:"/contacts",name:"КОНТАКТИ"}].map(e=>n.jsx(l.default,{item:e}))}),n.jsx("div",{style:{marginBottom:100},children:n.jsx(k.Z,{})})]})]}));var L=s(2254),C=s(3565);let P=()=>{(0,L.usePathname)();let[e,a]=(0,i.useState)(!1),[s,l]=(0,i.useState)(!1);return(0,r._)(),(0,n.jsxs)(t.E.div,{className:N().wrapper,children:[n.jsx("div",{className:g()(N().bacground,{[N().scroll]:s}),children:(0,n.jsxs)(t.E.div,{className:g()(N().container),animate:{marginTop:s?10:0},transition:{duration:.5},children:[n.jsx(t.E.div,{animate:{scale:1,rotate:360},initial:{scale:0,rotate:0},transition:{type:"spring",delay:.5,duration:1},children:n.jsx(C.Z,{style:{backgroundColor:s?"transparent":"rgba(2, 44, 25, 0.95)"}})}),n.jsx(d,{}),n.jsx(S,{show:e}),n.jsx(p,{setShow:a,show:e})]})}),n.jsx("div",{className:N().line})]})}},3565:(e,a,s)=>{"use strict";s.d(a,{Z:()=>d});var n=s(2295),i=s(783),r=s.n(i),t=s(6682),l=s.n(t),o=s(1223),c=s.n(o);let d=({style:e})=>n.jsx(r(),{href:"/",children:(0,n.jsxs)("div",{className:l().wrapper,style:e,children:[n.jsx("div",{className:l().container,children:n.jsx(c(),{src:"/logo.png",alt:"Banner Image",width:200,height:150})}),n.jsx("div",{className:l().name,children:"OLEG LISKO"}),n.jsx("div",{className:l().surName,children:"FOX DENTAL"})]})})},2561:(e,a,s)=>{"use strict";s.d(a,{Z:()=>m});var n=s(2295),i=s(3729),r=s(2979),t=s(9921),l=s(4132),o=s.n(l),c=s(6658),d=s.n(c);let m=function({show:e,setShow:a,children:s,isServise:l}){let c=e=>{"Escape"===e.key&&a(!1)};return(0,i.useEffect)(()=>(e?document.addEventListener("keydown",c):document.removeEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}),[e]),n.jsx(r.E.div,{className:d().Container,animate:{scale:e?1:0,borderRadius:e?0:"100%"},initial:{scale:0},transition:{duration:.15},onClick:e=>{e.target.classList.contains(d().Container)&&a(!1)},children:(0,n.jsxs)("div",{className:o()(d().modal,{[d().servises]:l}),children:[n.jsx("div",{className:d().close,children:n.jsx(t.aHS,{className:d().icon,onClick:()=>a(!1)})}),n.jsx("div",{className:d().children,children:s})]})})}},4632:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>m});var n=s(2295);s(3729);var i=s(783),r=s.n(i),t=s(5945),l=s.n(t),o=s(4132),c=s.n(o),d=s(2254);let m=({item:e})=>{let a=(0,d.usePathname)()===e.link;return n.jsx("div",{className:c()(l().container),children:n.jsx(r(),{href:e.link,style:{color:a?"#daa520":"aliceblue"},children:e.name})},e.name)}},7293:(e,a,s)=>{"use strict";s.d(a,{Z:()=>c});var n=s(2295),i=s(783),r=s.n(i),t=s(6716),l=s.n(t),o=s(981);let c=({style:e})=>n.jsx("div",{className:l().container,children:(0,n.jsxs)("div",{className:l().sociall,children:[n.jsx(r(),{href:"https://www.facebook.com/FoxxxxDental/",target:"blanc",children:n.jsx("div",{className:l().border,style:e,children:n.jsx(o.s5I,{className:l().icon})})}),n.jsx(r(),{href:"https://www.instagram.com/fox_dental_clinic/?r=nametag",target:"blanc",children:(0,n.jsxs)("div",{className:l().border,children:[" ",n.jsx(o.t0C,{className:l().icon})]})})]})})},1688:(e,a,s)=>{"use strict";s.d(a,{c:()=>o,db:()=>l});var n=s(6041),i=s(8414),r=s(14);let t=(0,n.ZF)({apiKey:"AIzaSyDNPqeJmKuDmo6XbhLYrF9hskDPp5vN6W0",authDomain:"foxdental-ea707.firebaseapp.com",projectId:"foxdental-ea707",storageBucket:"foxdental-ea707.appspot.com",messagingSenderId:"211667581892",appId:"1:211667581892:web:e730c1a756efcb7854c291"}),l=(0,i.ad)(t),o=(0,r.Gb)()?(0,r.IH)(t):null},8882:(e,a,s)=>{"use strict";s.d(a,{R:()=>r});var n=s(1688),i=s(14);let r=e=>{(0,i.Kz)(n.c,e)}},8926:e=>{e.exports={container:"Button_container__g6l6q",header:"Button_header__RU1dN"}},8487:e=>{e.exports={container:"Footer_container__TS4nh",number:"Footer_number__b2SvR",nav:"Footer_nav__nlQGx",additional:"Footer_additional__quc1_",hours:"Footer_hours__EtbU5",adress:"Footer_adress__3QW48"}},4631:e=>{e.exports={container:"Form_container__tvbsB"}},5657:e=>{e.exports={error:"HeaderForm_error__knSXu"}},9290:e=>{e.exports={container:"Header_container__Q9KhP",wrapper:"Header_wrapper__lbvH4",line:"Header_line__xdXKf",width_animation:"Header_width_animation__sEDgc",scroll:"Header_scroll__KV1Wn",bacground:"Header_bacground__BDeh_"}},6682:e=>{e.exports={container:"Logo_container__1LJ4r",wrapper:"Logo_wrapper__au2M_",name:"Logo_name__3N7Yh",surName:"Logo_surName__NYXSd"}},3546:e=>{e.exports={container:"MobileNav_container__C06Sw",links:"MobileNav_links___MW8C"}},6658:e=>{e.exports={Container:"Modal_Container__7RIUQ",modal:"Modal_modal__olpWF",servises:"Modal_servises__I5qTw",icon:"Modal_icon__ipR4e",children:"Modal_children__0rTby"}},5945:e=>{e.exports={container:"NavLink_container__C_vPj",scroll:"NavLink_scroll__yU76l"}},6045:e=>{e.exports={container:"Nav_container__oJyfr"}},1605:e=>{e.exports={container:"Nav_container__oJyfr"}},891:e=>{e.exports={sociall:"SocialMedias_sociall__7n14a",icon:"SocialMedias_icon__USLge",border:"SocialMedias_border__cjCDa"}},6716:e=>{e.exports={sociall:"SocialMedias_sociall__7n14a",icon:"SocialMedias_icon__USLge",border:"SocialMedias_border__cjCDa"}},5298:e=>{e.exports={container:"TopActions_container__YmGkf",icon:"TopActions_icon__aBMSe",link:"TopActions_link__V_uoN",mobileLink:"TopActions_mobileLink__KWiAC"}},6850:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>S,metadata:()=>w});var n=s(5036);s(5023),s(7453);var i=s(6843);let r=(0,i.createProxy)(String.raw`/Users/marina/Documents/GitHub/fox_dental/src/components/header/Header.jsx`),{__esModule:t,$$typeof:l}=r,o=r.default,c=(0,i.createProxy)(String.raw`/Users/marina/Documents/GitHub/fox_dental/src/components/nav-link/NavLink.jsx`),{__esModule:d,$$typeof:m}=c,_=c.default;var h=s(6045),x=s.n(h);let v=()=>n.jsx("div",{className:x().container,children:[{link:"/",name:"ГОЛОВНА"},{link:"/prices",name:"ЦІНИ"},{link:"/servises",name:"ПОСЛУГИ"},{link:"/contacts",name:"КОНТАКТИ"}].map(e=>n.jsx(_,{item:e},e.name))});var j=s(646),u=s.n(j),p=s(891),b=s.n(p),N=s(4399);let f=({style:e})=>n.jsx("div",{className:b().container,children:(0,n.jsxs)("div",{className:b().sociall,children:[n.jsx(u(),{href:"https://www.facebook.com/FoxxxxDental/",target:"blanc",children:n.jsx("div",{className:b().border,style:e,children:n.jsx(N.s5I,{className:b().icon})})}),n.jsx(u(),{href:"https://www.instagram.com/fox_dental_clinic/?r=nametag",target:"blanc",children:(0,n.jsxs)("div",{className:b().border,children:[" ",n.jsx(N.t0C,{className:b().icon})]})})]})});var g=s(8487),k=s.n(g);let y=()=>(0,n.jsxs)("div",{className:k().container,children:[(0,n.jsxs)("div",{className:k().nav,children:[n.jsx(u(),{href:"tel:+380973554125",className:k().number,children:"+38 (097) 355 41 25"}),n.jsx(v,{})]}),n.jsx(f,{}),(0,n.jsxs)("div",{className:k().additional,children:[(0,n.jsxs)("div",{className:k().hours,children:[n.jsx("span",{children:"пн-пт: 8.00 - 20.00"}),n.jsx("span",{children:"сб:10.00 - 16.00"}),n.jsx("span",{children:" нд: 10.00 - 14.00"})]}),n.jsx("div",{className:k().adress,children:" Вінниця, вулиця Пирогова, 23-Б"}),n.jsx("div",{})]})]});s(5904);let w={title:"FOX DENTAL",description:"Generated by create next app"};function S({children:e}){return(0,n.jsxs)("html",{lang:"en",children:[n.jsx("head",{children:n.jsx("link",{rel:"icon",href:"/favicon.svg"})}),n.jsx("body",{children:(0,n.jsxs)(n.Fragment,{children:[n.jsx(o,{}),e,n.jsx(y,{})," "]})})]})}},5023:()=>{}};