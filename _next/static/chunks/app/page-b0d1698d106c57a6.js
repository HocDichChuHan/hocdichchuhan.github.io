(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7792:function(e,a,t){Promise.resolve().then(t.bind(t,185))},1409:function(e,a,t){"use strict";function i(e){let{src:a,width:t,quality:i}=e;return"".concat("").concat(a)}t.r(a),t.d(a,{default:function(){return i}})},185:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return x}});var i=t(7437),s=t(2265),l=t(8708),n=t(5606),r=t(9768),c=t(9782),m=t(1213),d=t(7138),o=t(5749),u=t(6648);let A=s.memo(e=>{let[a,t]=(0,s.useState)(!1),[l,n]=(0,s.useState)(!1),r=(e,t)=>!a&&e&&e.length>t?(0,i.jsxs)(i.Fragment,{children:[e.substring(0,t),"...",(0,i.jsx)("span",{className:"see-more",onClick:()=>A(),style:{cursor:"pointer",color:"blue"},children:"xem th\xeam"})]}):e,A=()=>{t(!a)},[h,g]=(0,s.useState)(!1),[v,x]=(0,s.useState)(""),j=a=>{e.onChangeHandle&&e.onChangeHandle(a)};return(0,i.jsxs)("div",{className:"itemCard-container-dashboard",onClick:e.cardClick,onMouseEnter:e.cardClick,children:[(0,i.jsxs)("div",{className:"itemCard-UserName",children:[(0,i.jsxs)("div",{className:"itemCard-UserName-1",children:[(0,i.jsx)(u.default,{src:e.imgUser?e.imgUser:o.Z,alt:"img",width:50,height:50}),(0,i.jsxs)("div",{className:"itemCard-UserName-container cambria",children:[(0,i.jsx)("h4",{className:"username-card",children:e.username}),(0,i.jsx)("p",{style:{margin:"0"},children:(e=>{if(!e)return"";try{let a=new Date(e);return(0,c.WU)(a,"h:mm a, dd 'Th\xe1ng' MM, yyyy",{locale:m.vi})}catch(a){return console.error("Invalid date format:",e),e}})(e.dateTime)})]})]}),(()=>{let a=localStorage.getItem("name");return e.username==a?(0,i.jsx)("div",{className:"itemCard-UserName-1",children:(0,i.jsx)("button",{className:"btn btn-options",onClick:e.removeClick,style:{padding:"0",margin:"0"},children:(0,i.jsx)("i",{className:"fa-solid fa-trash"})})}):null})()]}),(()=>{if(e.tiengTrungs){let a=Object.values(e.tiengTrungs);return a.length>0?(0,i.jsxs)("div",{className:"itemCard-baiDich",onDoubleClick:()=>n(!l),children:[a.slice(0,l?a.length:3).map((a,t)=>(0,i.jsxs)("div",{className:"textDashboard_container",children:[(0,i.jsx)("pre",{className:"tiengTrung_Dashboard simsun",children:a.value}),(0,i.jsx)("pre",{className:"dichNghia_Dashboard cambria",children:e.dichNghias[t]?e.dichNghias[t].value:null})]},t)),!l&&a.length>3&&(0,i.jsx)("span",{className:"see-more",onClick:()=>n(!0),style:{cursor:"pointer",color:"blue"},children:"...xem th\xeam"})]}):null}if(e.baidich)return(0,i.jsx)("div",{className:"itemCard-baiDich",children:e.img?(0,i.jsx)("pre",{onDoubleClick:()=>A(),children:r(e.baidich,300)}):(0,i.jsx)("pre",{children:e.baidich})})})(),e.img&&(0,i.jsx)(d.default,{href:e.link,passHref:!0,legacyBehavior:!0,children:(0,i.jsx)("a",{className:"itemCard-title-dashboard",onClick:e.cardClick,children:(0,i.jsx)(u.default,{src:e.img,alt:"null",width:500,height:500})})}),(0,i.jsxs)("div",{className:"itemCard-content",children:[e.img&&(0,i.jsx)("h3",{className:"itemCard-content-title cambria",children:e.title}),e.img&&(0,i.jsx)("div",{className:"itemCard-content-description simsun",children:(0,i.jsx)("span",{children:e.tieudeTiengTrung})}),(0,i.jsxs)("div",{className:"ItemCard-dashboard-footer",children:[(0,i.jsxs)("div",{className:"ItemCard-interact",children:[(0,i.jsxs)("div",{className:"ItemCard-interact-likeview",children:[(0,i.jsx)("div",{className:"liked-view",children:(0,i.jsx)("i",{className:"fa-solid fa-thumbs-up"})}),(0,i.jsx)("span",{className:"ItemCard-interact-liked",children:(0,i.jsx)("div",{children:e.likes})})]}),(0,i.jsx)("hr",{}),localStorage.getItem("name")?(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-6 ItemCard-interact-item",onClick:()=>{g(!h),e.likeClick()},children:(0,i.jsxs)("div",{className:"ItemCard-interact-item-flex ".concat(e.isLiked?"liked":""),children:[(0,i.jsx)("i",{className:"fa-regular fa-thumbs-up ".concat(e.isLiked?"liked-icon":"")}),(0,i.jsx)("span",{children:"Th\xedch"})]})}),(0,i.jsx)("div",{className:"col-6 ItemCard-interact-item",onClick:e.cmtClick,children:(0,i.jsxs)("div",{className:"ItemCard-interact-item-flex",children:[(0,i.jsx)("i",{className:"fa-regular fa-comment"}),(0,i.jsx)("span",{children:"B\xecnh luận"})]})})]}):null]}),(0,i.jsx)("div",{className:"itemCard-comment",children:(0,i.jsxs)("div",{className:"itemCard-comment-container",children:[(0,i.jsx)("div",{className:"itemCard-comment-viewer",children:e.comment}),(()=>{let a=localStorage.getItem("name"),t=localStorage.getItem("userImage")||o.Z;return a?(0,i.jsxs)("div",{className:"itemCard-comment-write",children:[(0,i.jsx)("div",{className:"itemCard-user-image",children:(0,i.jsx)(u.default,{src:t,alt:"img",width:500,height:500})}),(0,i.jsxs)("div",{className:"comment-input-container",children:[(0,i.jsx)("textarea",{className:"form-control comment-input",name:e.name,"aria-describedby":"helpId",placeholder:"B\xecnh luận với vai tr\xf2 "+a,onChange:j,value:e.commentText}),(0,i.jsx)("div",{className:"itemCard-comment-send  ".concat(e.commentText?"active1":"no-item"),onClick:e.sendCmtHandle,children:(0,i.jsx)("i",{className:"fa-solid fa-paper-plane"})})]})]}):null})()]})})]})]})]})});A.displayName="ItemCardDashboard";var h=t(3508),g=e=>{let{likes:a}=e,[t,l]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1);(0,s.useEffect)(()=>{m()});let c=localStorage.getItem("name"),m=()=>{a&&a.map(e=>{e.username===c&&r(!0)})};return(0,i.jsxs)("div",{className:"likeView-controller",children:[(0,i.jsx)("div",{className:"likeView-header",onClick:()=>{l(!t)},children:a[0]?(n?"Bạn":a[0].username)+(a[1]?" v\xe0 "+(a.length-1)+" người kh\xe1c":""):null}),(0,i.jsx)("div",{className:t?"likeView-detailes":"hidden",children:a&&a.map((e,a)=>(0,i.jsx)("div",{className:"liked-user",children:(0,i.jsx)("span",{children:e.username})},a))})]})};t(1656),t(594);class v extends s.Component{componentDidMount(){this.getData(),this.intervalId=setInterval(()=>{this.getData()},1e3)}componentWillUnmount(){clearInterval(this.intervalId)}render(){return(0,i.jsx)(l.Z,{body:(0,i.jsxs)("div",{className:"container",children:[this.showBaidich(),this.state.loading?(0,i.jsx)(r.Z,{}):null]})})}constructor(e){var a;super(e),a=this,this.getData=async()=>{this.setState({loading:!0});let e=localStorage.getItem("user"),a=localStorage.getItem("name"),t=JSON.parse(localStorage.getItem("allData"));if(!t)return;let i=t.find(e=>"dashboard"===e.key),s=t.find(e=>"account"===e.key);var l=Object.entries(i.value).map(e=>{let[a,t]=e;return{key:a,value:t}}),n=Object.entries(s.value).map(e=>{let[a,t]=e;return{key:a,value:t}});try{let t=await Promise.all(l.map(async a=>{let t=a.key,i=Object.entries(a.value).map(e=>{let[a,t]=e;return{key:a,value:t}}),s=await Promise.all(i.map(async a=>{let i="".concat(t,"&").concat(a.key);var s=a.value.comment?Object.entries(a.value.comment).map(e=>{let[a,t]=e;return{key:a,value:t}}):null,l=a.value.like?Object.entries(a.value.like).map(e=>{let[a,t]=e;return{key:a,value:t}}):null,r=a.value.tiengTrung?Object.entries(a.value.tiengTrung).map(e=>{let[a,t]=e;return{key:a,value:t}}):null,c=a.value.dichNghia?Object.entries(a.value.dichNghia).map(e=>{let[a,t]=e;return{key:a,value:t}}):null;let m=n.find(e=>e.key===t),[d,o,u,A,h,g,v,x,j,f,k,N,C,b,y]=await Promise.all([s,l,m.value.name,m.value.img,a.value.tieude,a.value.tieudeTiengTrung,a.value.author,a.value.imgAuthor,a.value.link,a.value.weblink,a.value.dateTime,a.value.id,a.value.baidich,r,c]),p=null,w=null,I=!1;return d&&(p=await Promise.all(d.map(async e=>{let a=d.find(a=>a.key===e.key),t=a.value.user,i=n.find(e=>e.key===t),[s,l,r,c]=await Promise.all([i.value.name,i.value.img,a.value.cmt,a.value.dateTime]);return{username:s,userImage:l,cmt:r,dateTime:c,id:e.key}}))),o&&(w=await Promise.all(o.map(async a=>{let t=o.find(e=>e.key===a.key);a.key===e&&(I=!0);let[i,s]=await Promise.all([t.value.name,t.value.image]);return{username:i,userImage:s}}))),{baivietKey:i,username:u,userImage:A,tieude:h,tieudeTiengTrung:g,author:v,imgAuthor:x,link:j,weblink:f,dateTime:k,comment:p,likes:w,id:N,baidich:C,isLiked:I,tiengTrungs:b,dichNghias:y}}));return{key:t,baivietDatas:s}})),i=[];t.forEach(e=>{i=i.concat(e.baivietDatas)}),i.sort((e,a)=>new Date(a.dateTime)-new Date(e.dateTime));let s={},r={},c={},m={},d={},o={},u={},A={},h={},g={},v={},x={},j={},f={},k={},N={};i.forEach(e=>{s[e.baivietKey]=e.weblink,r[e.baivietKey]=e.tieudeTiengTrung,c[e.baivietKey]=e.author,m[e.baivietKey]=e.link,d[e.baivietKey]=e.imgAuthor,o[e.baivietKey]=e.username,A[e.baivietKey]=e.tieude,u[e.baivietKey]=e.dateTime,h[e.baivietKey]=e.comment,g[e.baivietKey]=e.likes,v[e.baivietKey]=e.id,x[e.baivietKey]=e.userImage,j[e.baivietKey]=e.baidich,f[e.baivietKey]=e.isLiked,k[e.baivietKey]=e.tiengTrungs,N[e.baivietKey]=e.dichNghias}),this.setState({datas:i,myUser:e,MyUserName:a,baidichs:j,weblinks:s,tieudeTiengTrungs:r,authors:c,imgAuthors:d,links:m,usernames:o,userImages:x,tieudes:A,dateTimes:u,comments:h,likes:g,ids:v,isLikedMap:f,loading:!1,tiengTrungs:k,dichNghias:N})}catch(e){this.setState({error:e,loading:!1}),console.error("Error fetching data:",e)}},this.removeClick=async function(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(await (0,n.Z6)(e),i){let i=e.split("/").pop();a.setState(e=>({comments:{...e.comments,[t]:e.comments[t].filter(e=>e.id!==i)}}))}else a.setState(e=>({datas:e.datas.filter(e=>e.baivietKey!==t),baidichs:a.filterOutKey(e.baidichs,t),weblinks:a.filterOutKey(e.weblinks,t),tieudeTiengTrungs:a.filterOutKey(e.tieudeTiengTrungs,t),authors:a.filterOutKey(e.authors,t),imgAuthors:a.filterOutKey(e.imgAuthors,t),links:a.filterOutKey(e.links,t),usernames:a.filterOutKey(e.usernames,t),userImages:a.filterOutKey(e.userImages,t),tieudes:a.filterOutKey(e.tieudes,t),dateTimes:a.filterOutKey(e.dateTimes,t),comments:a.filterOutKey(e.comments,t),likes:a.filterOutKey(e.likes,t),ids:a.filterOutKey(e.ids,t),tiengTrungs:a.filterOutKey(e.tiengTrungs,t),dichNghias:a.filterOutKey(e.dichNghias,t)}))},this.filterOutKey=(e,a)=>{let{[a]:t,...i}=e;return i},this.sendCmtHandle=async(e,a)=>{let t=this.state.commentTexts[a],i=localStorage.getItem("user"),s=localStorage.getItem("name"),l=localStorage.getItem("userImage");if(i){let r="".concat(e,"/comment"),c=await (0,n.UD)(r),m=new Date().toISOString(),d=null;d=c?c.length+1:1;let o="".concat(d,"-").concat((0,h.o)(m));await (0,n.Pf)("".concat(r,"/").concat(o,"/user"),i),await (0,n.Pf)("".concat(r,"/").concat(o,"/cmt"),t),await (0,n.Pf)("".concat(r,"/").concat(o,"/dateTime"),m);let u={username:s,userImage:l,cmt:t,dateTime:m,id:o};this.setState(e=>({comments:{...e.comments,[a]:[...e.comments[a]||[],u]},commentTexts:{...e.commentTexts,[a]:""}}))}},this.likeClick=async(e,a,t)=>{let i=localStorage.getItem("user"),s=localStorage.getItem("name"),l=localStorage.getItem("userImage");if(i){let r="".concat(e,"/like");if(t)await (0,n.Z6)("".concat(r,"/").concat(i)),this.setState(e=>({likes:{...e.likes,[a]:e.likes[a].filter(e=>e.username!==s)},isLikedMap:{...e.isLikedMap,[a]:!1}}));else{await (0,n.Pf)("".concat(r,"/").concat(i,"/name"),s),await (0,n.Pf)("".concat(r,"/").concat(i,"/image"),l);let e={username:s,userImage:l};this.setState(t=>({likes:{...t.likes,[a]:[...t.likes[a]||[],e]},isLikedMap:{...t.isLikedMap,[a]:!0}}))}}},this.handleCommentChange=(e,a)=>{this.setState(t=>({commentTexts:{...t.commentTexts,[e]:a.target.value}}))},this.showBaidich=()=>{let{datas:e,baidichs:a,userImages:t,usernames:s,commentTexts:l,likes:n,dateTimes:r,comments:c,tieudes:m,tieudeTiengTrungs:d,ids:o,isLikedMap:u,tiengTrungs:h,dichNghias:v}=this.state;return e&&e.length>0?e.map((e,x)=>{let j=e.baivietKey,f=j.split("&")[0],k="/users/dashboard/".concat(f,"/").concat(j.split("&")[1]);return(0,i.jsx)(A,{username:s[j]||null,dateTime:r[j]||null,imgUser:t[j]||null,comment:c[j]?this.showComment(k,c[j],j):null,likes:n[j]?(0,i.jsx)(g,{likes:n[j]}):null,tieudeTiengTrung:d[j]||null,link:j?"/dashboard/".concat(f,"/").concat(j.split("&")[1]):null,title:m[j]||null,baidich:a[j]||null,img:o[j]?"https://img.youtube.com/vi/".concat(o[j],"/sddefault.jpg"):null,removeClick:()=>this.removeClick(k,j,!1),sendCmtHandle:()=>this.sendCmtHandle(k,j),commentText:l[j]||"",onChangeHandle:e=>this.handleCommentChange(j,e),likeClick:()=>this.likeClick(k,j,u[j]),isLiked:u[j],tiengTrungs:h[j]||null,dichNghias:v[j]||null},x)}):null},this.showComment=(e,a,t)=>(0,i.jsx)("div",{children:a&&a.map((a,s)=>(0,i.jsx)(j,{imgUser:a.userImage,username:a.username,cmt:a.cmt,dateTime:a.dateTime,removeClick:()=>this.removeClick("".concat(e,"/comment/").concat(a.id),t,!0)},s))}),this.state={datas:null,usernames:null,dateTimes:null,tieudes:null,links:null,likes:null,comments:null,weblinks:null,tieudeTiengTrungs:null,authors:null,imgAuthors:null,baidichs:null,error:null,nav:!1,loading:!1,commentTexts:{},isLikedMap:{},flagLogin:!1,flagAdmin:!1}}}var x=v;function j(e){return(0,i.jsxs)("div",{className:"itemCard-UserName",children:[(0,i.jsxs)("div",{className:"itemCard-UserName-2",children:[(0,i.jsx)(u.default,{src:e.imgUser?e.imgUser:o.Z,alt:"img",width:500,height:500}),(0,i.jsxs)("div",{className:"itemCard-UserName-container ",children:[(0,i.jsxs)("div",{className:"itemCard-UserName-container-1",children:[(0,i.jsx)("h6",{className:"username-card1",children:e.username}),(0,i.jsx)("p",{children:e.cmt})]}),(0,i.jsx)("span",{className:"Time",style:{margin:"0"},children:(0,h.o)(e.dateTime)})]})]}),localStorage.getItem("name")==e.username?(0,i.jsx)("div",{className:"itemCard-UserName-1",children:(0,i.jsx)("button",{className:"btn btn-options",onClick:e.removeClick,style:{padding:"0",margin:"0"},children:(0,i.jsx)("i",{className:"fa-solid fa-trash"})})}):null]})}},9768:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});var i=t(7437),s=t(2265),l={src:"/_next/static/media/Loading.3170e5c7.gif",height:480,width:475,blurWidth:0,blurHeight:0},n=t(6648);class r extends s.Component{render(){return(0,i.jsx)("div",{className:"loadingData",children:(0,i.jsxs)("div",{className:"loadingData-container",children:[(0,i.jsx)(n.default,{src:l,alt:"Loading...",width:100,height:100}),(0,i.jsx)("h2",{children:"Website đang tải dữ liệu, xin vui l\xf2ng chờ trong gi\xe2y l\xe1t"})]})})}}},3508:function(e,a,t){"use strict";t.d(a,{o:function(){return c},x:function(){return m}});var i=t(7437),s=t(9782),l=t(1213);t(2265);var n=t(5749),r=t(6648);let c=e=>{if(!e)return"";try{let a=new Date(e);return(0,s.WU)(a,"h:mm a, dd 'Th\xe1ng' MM, yyyy",{locale:l.vi})}catch(a){return console.error("Invalid date format:",e),e}};function m(e){return(0,i.jsxs)("div",{className:"itemCard-container-dashboard",ref:e.refViewBaidich,children:[(0,i.jsxs)("div",{className:"itemCard-UserName itemcard-UserName-sticky",children:[(0,i.jsxs)("div",{className:"itemCard-UserName-1",children:[(0,i.jsx)(r.default,{src:e.imgUser?e.imgUser:n.Z,alt:"img",width:30,height:30}),(0,i.jsxs)("div",{className:"itemCard-UserName-container",children:[(0,i.jsx)("h4",{className:"username-card",children:e.username}),(0,i.jsx)("p",{style:{margin:"0"},children:c(e.dateTime)})]})]}),(()=>{let a=localStorage.getItem("name");return(console.log(a),e.username==a)?(0,i.jsx)("div",{className:"itemCard-UserName-1",children:(0,i.jsx)("button",{className:"btn btn-options",onClick:e.removeClick,style:{padding:"0",margin:"0"},children:(0,i.jsx)("i",{className:"fa-solid fa-trash"})})}):null})()]}),(0,i.jsx)("div",{className:"itemCard-baiDich",children:e.baidich})]})}},1656:function(){},594:function(){},5749:function(e,a){"use strict";a.Z={src:"/_next/static/media/user.f64324c2.jpg",height:200,width:200,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAG0E//EABUQAQEAAAAAAAAAAAAAAAAAABMk/9oACAEBAAEFAlo//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAGBAAAgMAAAAAAAAAAAAAAAAAABIxQWH/2gAIAQEABj8CRqjT/8QAGBAAAgMAAAAAAAAAAAAAAAAAESEAMbH/2gAIAQEAAT8hGkETU//aAAwDAQACAAMAAAAQ+//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABgQAAIDAAAAAAAAAAAAAAAAAAARQZGh/9oACAEBAAE/ELbi5YP/2Q==",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[734,610,481,461,630,648,609,708,971,23,560],function(){return e(e.s=7792)}),_N_E=e.O()}]);