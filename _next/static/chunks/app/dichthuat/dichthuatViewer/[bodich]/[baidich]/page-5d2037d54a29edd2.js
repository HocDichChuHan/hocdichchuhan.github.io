(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{923:function(a,e,c){Promise.resolve().then(c.bind(c,4278))},4278:function(a,e,c){"use strict";c.d(e,{default:function(){return y}});var t=c(7437),i=c(2265),n=c(8708),o=c(35),s=c(4379),l=c.n(s),r=c(5606),u=c(8833),h=c(1795),d=c(9768);function y(a){let{bodich:e,baidich:c}=a,[s,y]=(0,i.useState)({dichthuat:null,youtubeLink:null,webLink:null,tieude:null,tieudeTiengTrung:null,author:null,imgAuthor:null,id:null,error:null,nav:!1,tuMois:{},tuMoiNghias:{},tuMoiNghiaGets:{},tuMoiPinyins:{},tumoiViduGets:{},tuMoiVidus:{},tuMoiViduDichs:{},tuMoiViduPinyins:{},hanviets:{},baiDich:null,tiengTrungs:{},dichNghias:{}}),[m,k]=(0,i.useState)(!0),[g,v]=(0,i.useState)(!1),w=(0,i.useRef)(null),j=(0,i.useRef)(null),[x,f]=(0,i.useState)({}),[p,b]=(0,i.useState)({});(0,i.useEffect)(()=>{P()},[]);let N=async()=>{k(!0);let a=localStorage.getItem("user"),e=localStorage.getItem("name"),t=localStorage.getItem("userImage"),i="/users/dashboard/".concat(a,"/").concat(c),n="".concat(i,"/tiengTrung"),o="".concat(i,"/dichNghia"),{tieude:u,tiengTrungs:h,dichNghias:d,youtubeLink:m,webLink:g,tieudeTiengTrung:v,author:w,imgAuthor:j,embedLink:x}=s,f=new Date().toISOString(),p=Object.values(d).filter(a=>null!==a),b=Object.values(h);try{let a=C(m);await Promise.all([(0,r.Pf)("".concat(i,"/username"),e),(0,r.Pf)("".concat(i,"/weblink"),m),(0,r.Pf)("".concat(i,"/tieudeTiengTrung"),v),(0,r.Pf)("".concat(i,"/tieude"),u),(0,r.Pf)("".concat(i,"/link"),x),(0,r.Pf)("".concat(i,"/author"),w),(0,r.Pf)("".concat(i,"/imgAuthor"),j),(0,r.Pf)("".concat(i,"/dateTime"),f),(0,r.Pf)("".concat(i,"/id"),a),(0,r.Pf)("".concat(i,"/userImage"),t)]),await Promise.all(p.map((a,e)=>{let c="".concat(o,"/").concat(e);(0,r.Pf)(c,a)})),await Promise.all(b.map((a,e)=>{let c="".concat(n,"/").concat(e);(0,r.Pf)(c,a)})),await l().fire({position:"center",icon:"success",title:"Đăng b\xe0i th\xe0nh c\xf4ng",showConfirmButton:!1,timer:1500}),y(a=>({...a,nav:!0}))}catch(e){console.error("Lỗi tạo b\xe0i mới:",e);let a={message:"Lỗi tạo b\xe0i mới: "+e.message};l().fire(e.message,"","info"),y(e=>({...e,error:a}))}finally{k(!1)}},P=async()=>{k(!0);let a=localStorage.getItem("user"),t="/users/dichthuat/".concat(e),i="/users/dichthuat/".concat(e,"/listBaihoc/").concat(c),n="".concat(i,"/noidung"),o="".concat(i,"/").concat(a,"/baidich"),s="".concat(i,"/").concat(a,"/tumoi"),[l,u,h,d,m,g,v,w,j]=await Promise.all([(0,r.UD)(s),(0,r.eO)("".concat(i,"/tieude")),(0,r.eO)("".concat(i,"/link")),(0,r.eO)("".concat(i,"/weblink")),(0,r.eO)("".concat(i,"/tieudeTiengTrung")),(0,r.eO)("".concat(t,"/author")),(0,r.eO)("".concat(t,"/imgAuthor")),(0,r.UD)(o),(0,r.UD)(n)]),x=h?"https://www.youtube.com/embed/".concat(C(h)):null,f={},p={},b={},N={},P={},O={},T={},D={};l&&await Promise.all(l.map(async a=>{f[a.key]=await (0,r.UD)("/".concat(s,"/").concat(a.key,"/nghia")),b[a.key]=await (0,r.eO)("/".concat(s,"/").concat(a.key,"/pinyin")),D[a.key]=await (0,r.eO)("/".concat(s,"/").concat(a.key,"/hanviet")),f[a.key]&&await Promise.all(f[a.key].map(async e=>{p[e.key]=await (0,r.eO)("/".concat(s,"/").concat(a.key,"/nghia/").concat(e.key,"/nghia")),N[e.key]=await (0,r.UD)("/".concat(s,"/").concat(a.key,"/nghia/").concat(e.key,"/vidu")),N[e.key]&&await Promise.all(N[e.key].map(async c=>{O[c.key]=await (0,r.eO)("/".concat(s,"/").concat(a.key,"/nghia/").concat(e.key,"/vidu/").concat(c.key,"/nghia")),P[c.key]=await (0,r.eO)("/".concat(s,"/").concat(a.key,"/nghia/").concat(e.key,"/vidu/").concat(c.key,"/vidu")),T[c.key]=await (0,r.eO)("/".concat(s,"/").concat(a.key,"/nghia/").concat(e.key,"/vidu/").concat(c.key,"/pinyin"))}))}))}));let S={},I={};j&&await Promise.all(j.map(async a=>{S[a.key]=await (0,r.eO)("/".concat(n,"/").concat(a.key,"/tiengTrung"))})),w&&await Promise.all(w.map(async a=>{I[a.key]=await (0,r.eO)("/".concat(o,"/").concat(a.key))})),y(e=>({...e,webLink:d,tieudeTiengTrung:m,tieude:u,author:g,imgAuthor:v,youtubeLink:h,noiDungBaiDich:j,user:a,tuMoiNghias:p,tuMoiNghiaGets:f,tuMoiPinyins:b,tuMoiViduPinyins:T,tumoiViduGets:N,tuMoiVidus:P,tuMoiViduDichs:O,tuMois:l,baiDich:w,embedLink:x,hanviets:D,tiengTrungs:S,dichNghias:I})),k(!1)},O=async()=>{k(!0);let a=localStorage.getItem("user"),t="/users/dichthuat/".concat(e,"/listBaihoc/").concat(c),i="".concat(t,"/").concat(a,"/tumoi"),[n]=await Promise.all([(0,r.UD)(i)]),o={},s={},l={},u={},h={},d={},m={},g={};n&&await Promise.all(n.map(async a=>{o[a.key]=await (0,r.UD)("/".concat(i,"/").concat(a.key,"/nghia")),l[a.key]=await (0,r.eO)("/".concat(i,"/").concat(a.key,"/pinyin")),g[a.key]=await (0,r.eO)("/".concat(i,"/").concat(a.key,"/hanviet")),o[a.key]&&await Promise.all(o[a.key].map(async e=>{s[e.key]=await (0,r.eO)("/".concat(i,"/").concat(a.key,"/nghia/").concat(e.key,"/nghia")),u[e.key]=await (0,r.UD)("/".concat(i,"/").concat(a.key,"/nghia/").concat(e.key,"/vidu")),u[e.key]&&await Promise.all(u[e.key].map(async c=>{d[c.key]=await (0,r.eO)("/".concat(i,"/").concat(a.key,"/nghia/").concat(e.key,"/vidu/").concat(c.key,"/nghia")),h[c.key]=await (0,r.eO)("/".concat(i,"/").concat(a.key,"/nghia/").concat(e.key,"/vidu/").concat(c.key,"/vidu")),m[c.key]=await (0,r.eO)("/".concat(i,"/").concat(a.key,"/nghia/").concat(e.key,"/vidu/").concat(c.key,"/pinyin"))}))}))})),y(a=>({...a,tuMoiNghias:s,tuMoiNghiaGets:o,tuMoiPinyins:l,tuMoiViduPinyins:m,tumoiViduGets:u,tuMoiVidus:h,tuMoiViduDichs:d,tuMois:n,hanviets:g})),k(!1)},T=async()=>{k(!0);let{baiDich:a,dichNghias:t={}}=s,i=localStorage.getItem("user"),n="/users/dichthuat/".concat(e,"/listBaihoc/").concat(c,"/").concat(i,"/baidich");try{let a=Object.values(t).filter(a=>null!==a);if(!a.length)throw Error("No valid dichNghias to save.");await Promise.all(a.map((a,e)=>{let c="".concat(n,"/").concat(e);return(0,r.Pf)(c,a)})),await l().fire({position:"center",icon:"success",title:"Tạo b\xe0i mới th\xe0nh c\xf4ng",showConfirmButton:!1,timer:1500})}catch(a){k(!1),console.error("Lỗi tạo b\xe0i mới:",a),await l().fire("Lỗi tạo b\xe0i mới: "+a.message,"","info")}finally{k(!1)}},D=(a,e)=>a.split(RegExp("(".concat(e,")"),"gi")).map((a,c)=>a.toLowerCase()===e.toLowerCase()?(0,t.jsx)("span",{style:{color:"red"},children:a},c):a),C=a=>{var e=a.split("=");return e[1]?e[1].split("&")[0]:"null"},S=()=>{j.current&&j.current.scrollIntoView({behavior:"smooth"})},I=a=>{b({...p,[a]:!p[a]})},L=(a,e)=>{f({...x,[a+"-"+e]:!0})},Z=(a,e)=>{f({...x,[a+"-"+e]:!1})},B=(a,e)=>{y(c=>({...c,dichNghias:{...c.dichNghias,[e]:a.target.value}}))},{tieude:U,baiDich:M,webLink:V,tieudeTiengTrung:E,author:_,imgAuthor:A,embedLink:R,noiDungBaiDich:G,tiengTrungs:H,dichNghias:q}=s;return(0,t.jsx)(n.Z,{body:(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"dichthuat-container row",ref:j,children:[(0,t.jsxs)("div",{className:"col-5",children:[(0,t.jsx)("div",{children:(0,t.jsx)(u.Z,{videoLink:R||null,webLink:V||null,tieudeTiengTrung:E||null,author:_||null,imgAuthor:A||null,title:U||null})}),(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsx)(o.Z,{className:"button-css",variant:"info",onClick:T,children:"Lưu b\xe0i dịch"}),(0,t.jsx)(o.Z,{className:"button-css",variant:"danger",onClick:N,children:"Đăng b\xe0i"})]})]}),(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"card border-primary cardPhandich",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("div",{className:"",style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"},children:(0,t.jsx)("h4",{className:"card-title",children:"Phần Dịch"})}),(()=>{let{tiengTrungs:a,dichNghias:e=[]}=s,c=Object.values(a);return c&&c.length>0?(0,t.jsx)("div",{className:"",children:c.map((a,c)=>(0,t.jsxs)("div",{className:"phanDich",children:[(0,t.jsx)("div",{children:a||""}),(0,t.jsx)("textarea",{value:e[c]||"",onChange:a=>B(a,c),placeholder:"Nhập b\xe0i dịch của bạn"}),(0,t.jsx)("hr",{})]},c))}):null})()]})})})]}),(0,t.jsxs)("div",{className:"tumoi-area",children:[(0,t.jsxs)("div",{className:"tumoi-area-header",children:[(0,t.jsx)("h2",{className:"card-title",children:"Từ mới"}),(0,t.jsx)(o.Z,{variant:"info",onClick:()=>{v(!g),w.current&&w.current.scrollIntoView({behavior:"smooth"})},children:"Th\xeam từ mới"})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("div",{className:"tumoi-container",children:[(0,t.jsx)("div",{className:"tumoi-header"}),(()=>{let{tuMois:a,tuMoiNghias:e,tuMoiNghiaGets:c,tuMoiPinyins:i,tumoiViduGets:n,tuMoiVidus:l,tuMoiViduDichs:r,tuMoiViduPinyins:u,hanviets:h}=s;return a&&a.length>0?a.map((a,s)=>{let d=c[a.key],y=i[a.key],m=h[a.key],k=p[a.key];return(0,t.jsx)("div",{className:"tumoi-item",children:(0,t.jsxs)("div",{className:"tumoi-display",children:[(0,t.jsxs)("div",{className:"tumoi-display-header",children:[(0,t.jsxs)("h4",{children:[s+1,", ",a.key,"  【",m,"】"]}),(0,t.jsx)(o.Z,{variant:k?"danger":"warning",onClick:()=>I(a.key),children:k?"Ẩn bớt nghĩa của từ":"Hiển thị nghĩa của từ"})]}),k&&d&&d.map((c,i)=>{let s=n[c.key],h=e[c.key],d=x[a.key+"-"+c.key];return(0,t.jsxs)("div",{className:"tumoi-nghia",children:[(0,t.jsxs)("h5",{children:[a.key,"/ ",y]}),(0,t.jsx)("hr",{}),(0,t.jsxs)("h4",{className:"tumoi-nghia-shower",children:["Nghĩa ",i+1,": ",h]}),s&&s.map((e,c)=>{let i=l[e.key],n=r[e.key],o=u[e.key];return d||0===c?(0,t.jsxs)("div",{className:"tumoi-vidu",children:[(0,t.jsxs)("h5",{children:["V\xed dụ ",c+1]}),(0,t.jsx)("p",{children:D(i,a.key)}),(0,t.jsx)("p",{children:o}),(0,t.jsx)("p",{children:n})]},c):null}),d?(0,t.jsx)(o.Z,{variant:"warning",onClick:()=>Z(a.key,c.key),children:"Ẩn bớt v\xed dụ"}):(0,t.jsx)(o.Z,{variant:"info",onClick:()=>L(a.key,c.key),children:"Hiển thị th\xeam v\xed dụ"})]},i)})]})},s)}):null})()]})}),(0,t.jsx)("div",{ref:w,children:(0,t.jsx)(h.Z,{getDataTumoi:()=>O(),luuBaiDich:()=>T(),scrollBaidich:()=>S()})})]})]}),m?(0,t.jsx)(d.Z,{}):null]})})}}},function(a){a.O(0,[461,481,291,648,885,439,708,151,971,23,560],function(){return a(a.s=923)}),_N_E=a.O()}]);