"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{1409:function(e,t,i){function n(e){let{src:t,width:i,quality:n}=e;return"".concat("").concat(t)}i.r(t),i.d(t,{default:function(){return n}})},2258:function(e,t,i){var n=i(7437);i(2265),t.Z=function(e){return(0,n.jsxs)("div",{className:"form-group dichthuat-formInput",children:[(0,n.jsx)("label",{htmlFor:"",children:e.title}),(0,n.jsx)("input",{type:"text",className:"form-control",name:e.name,id:"","aria-describedby":"helpId",placeholder:e.placeHolder,onChange:e.onChangeHandle,value:e.value,defaultValue:e.defaultValue})]})}},8833:function(e,t,i){var n=i(7437),a=i(2265),c=i(6648);let r=(0,a.memo)(e=>(0,n.jsxs)("div",{className:"itemCard-container",onClick:e.cardClick,onMouseEnter:e.cardClick,children:[(0,n.jsxs)("div",{className:"itemCard-title",children:[(0,n.jsx)("div",{className:"itemCard-img-des"}),(0,n.jsx)(s,{link:e.videoLink})]}),(0,n.jsxs)("div",{className:"itemCard-content",children:[(0,n.jsx)("h3",{className:"itemCard-content-title",children:e.title}),(0,n.jsx)("h4",{className:"itemCard-content-description",children:e.tieudeTiengTrung}),(0,n.jsx)("div",{className:"itemCard-content-author",children:(0,n.jsxs)("div",{className:"itemCard-content-author-container",children:[(0,n.jsx)(c.default,{src:e.imgAuthor||"https://yt3.googleusercontent.com/ytc/AIdro_nevnvE7nYPdcdQLMZgoxJsx1g62U2soHKg3PAG3rQE0g=s160-c-k-c0x00ffffff-no-rj",alt:"img",width:50,height:50}),(0,n.jsx)("a",{href:e.webLink,target:"_blank",rel:"noreferrer",children:(0,n.jsx)("h4",{children:e.author})})]})})]})]}));function s(e){return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)("div",{children:"Loading..."}),children:(0,n.jsx)("iframe",{ref:e.iframeRef,height:e.height,src:e.link,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}r.displayName="ItemCardYoutube",t.Z=r},495:function(e,t){t.Z=function(e){return e=(e="@"+(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi,"a")).replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi,"e")).replace(/i|í|ì|ỉ|ĩ|ị/gi,"i")).replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi,"o")).replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi,"u")).replace(/ý|ỳ|ỷ|ỹ|ỵ/gi,"y")).replace(/đ/gi,"d")).replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,"")).replace(/ /gi,"-")).replace(/\-\-\-\-\-/gi,"-")).replace(/\-\-\-\-/gi,"-")).replace(/\-\-\-/gi,"-")).replace(/\-\-/gi,"-"))+"@").replace(/\@\-|\-\@|\@/gi,"")}},1795:function(e,t,i){var n=i(7437),a=i(2265),c=i(2258),r=i(35),s=i(4379),o=i.n(s),l=i(5606),h=i(9768),u=i(8472),d=i(495);class g extends a.Component{componentDidMount(){this.loadLocalData()}render(){return(0,n.jsxs)("div",{className:"col-6",children:[this.state.error&&(0,n.jsxs)("div",{className:"dichthuat-showError",children:['Lỗi: "',this.state.error.message,'"']}),(0,n.jsx)(r.Z,{variant:"info",onClick:this.updateTumoi,children:"Tạo từ mới"}),(0,n.jsx)(r.Z,{variant:"danger",onClick:this.Search,children:"Search"}),(0,n.jsx)(c.Z,{title:"Từ mới",name:"tumoi",placeHolder:"Nhập từ mới",value:this.state.tumoi,onChangeHandle:e=>this.onChangeHandleTuMoi(e,"tumoi")}),(0,n.jsx)(c.Z,{title:"\xc2m H\xe1n Việt",name:"hanviet",placeHolder:"Nhập \xe2m H\xe1n Việt",value:this.state.hanviet,onChangeHandle:e=>this.onChangeHandleTuMoi(e,"hanviet")}),(0,n.jsx)(c.Z,{title:"Pinyin",name:"pinyin",placeHolder:"Nhập pinyin",value:this.state.pinyin,onChangeHandle:e=>this.onChangeHandleTuMoi(e,"pinyin")}),this.state.nghiaList.map((e,t)=>(0,n.jsxs)("div",{className:"nghiaCuaTu card border-primary",children:[(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)(c.Z,{title:"Nghĩa ".concat(t+1),name:"nghia",placeHolder:"Nhập nghĩa của từ",value:e.nghia,onChangeHandle:e=>this.onChangeHandle(e,"nghia",t)}),e.vidus.map((e,i)=>(0,n.jsx)("div",{className:"viduCuaTu card border-primary",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)(c.Z,{title:"V\xed dụ ".concat(i+1),name:"vidu",placeHolder:"Nhập V\xed dụ",value:e.vidu,onChangeHandle:e=>this.onChangeHandle(e,"vidu",t,i)}),(0,n.jsx)(c.Z,{title:"\xdd nghĩa v\xed dụ ".concat(i+1),name:"nghiaVidu",placeHolder:"Nhập nghĩa của v\xed dụ",value:e.nghiaVidu,onChangeHandle:e=>this.onChangeHandle(e,"nghiaVidu",t,i)}),(0,n.jsx)(c.Z,{title:"pinyin v\xed dụ ".concat(i+1),name:"pinyinVidu",placeHolder:"Nhập nghĩa của v\xed dụ",value:e.pinyinVidu,onChangeHandle:e=>this.onChangeHandle(e,"pinyinVidu",t,i)}),(0,n.jsx)(r.Z,{variant:"warning",onClick:()=>this.removeVidu(t,i),children:"X\xf3a v\xed dụ n\xe0y"})]})},i)),(0,n.jsx)(r.Z,{variant:"info",onClick:()=>this.addVidu(t),children:"Th\xeam v\xed dụ kh\xe1c"})]}),(0,n.jsx)(r.Z,{variant:"danger",onClick:()=>this.removeNghia(t),children:"X\xf3a nghĩa"})]},t)),(0,n.jsx)(r.Z,{variant:"info",onClick:this.addNghia,style:{width:"100%"},children:"Th\xeam nghĩa kh\xe1c"}),this.state.loading?(0,n.jsx)(h.Z,{}):null]})}constructor(e){super(e),this.onChangeHandleTuMoi=(e,t)=>{this.setState({[t]:e.target.value})},this.onChangeHandle=(e,t,i,n)=>{let a=this.state.nghiaList.slice();void 0!==n?a[i].vidus[n][t]=e.target.value:a[i][t]=e.target.value,this.setState({nghiaList:a})},this.updateTumoi=async()=>{this.setState({loading:!0});let{tumoi:e,tumoiFbPath:t,userTuMoiPath:i,nghiaList:n,hanviet:a,pinyin:c}=this.state;try{if(!this.isNhapDayDuText())return;await this.updateTumoiAtPath(i,e,n,a,c),await this.updateTumoiAtPath(t,e,n,a,c),this.setState({nav:!0}),this.props.luuBaiDich(),this.props.getData()}catch(e){console.error("Lỗi tạo từ mới:",e),o().fire("Lỗi tạo từ mới: "+e.message,"","info"),this.setState({error:{message:"Lỗi tạo từ mới: "+e.message}})}finally{this.setState({loading:!1})}},this.updateTumoiAtPath=async(e,t,i,n,a)=>{try{if(n){let i="".concat(e,"/").concat(t,"/hanviet"),c="".concat(e,"/").concat(t,"/pinyin");await (0,l.Pf)(i,n),a&&await (0,l.Pf)(c,a)}for(let n=0;n<i.length;n++){let a=i[n];"".concat(e,"/").concat(t,"/nghia/").concat((0,d.Z)(a.nghia),"/pinyin");let c="".concat(e,"/").concat(t,"/nghia/").concat((0,d.Z)(a.nghia),"/nghia");await (0,l.Pf)(c,a.nghia);for(let i=0;i<a.vidus.length;i++){let n=a.vidus[i],c="".concat(e,"/").concat(t,"/nghia/").concat((0,d.Z)(a.nghia),"/vidu/").concat((0,d.Z)(n.vidu),"/nghia"),r="".concat(e,"/").concat(t,"/nghia/").concat((0,d.Z)(a.nghia),"/vidu/").concat((0,d.Z)(n.vidu),"/pinyin"),s="".concat(e,"/").concat(t,"/nghia/").concat((0,d.Z)(a.nghia),"/vidu/").concat((0,d.Z)(n.vidu),"/vidu");await (0,l.Pf)(c,n.nghiaVidu),await (0,l.Pf)(r,n.pinyinVidu),await (0,l.Pf)(s,n.vidu)}}}catch(t){throw console.error("Lỗi khi cập nhật từ mới tại đường dẫn:",e,t),t}},this.loadLocalData=()=>{let e=localStorage.getItem("dichthuat"),t=localStorage.getItem("video"),i=localStorage.getItem("user"),n="/users/dichthuat/".concat(e,"/listBaihoc/").concat(t),a="/users/tumoi/personal/".concat(i),c="".concat(n,"/").concat(i,"/tumoi");this.setState({userTuMoiPath:c,tumoiFbPath:a})},this.isNhapDayDuText=()=>{let{tumoi:e,nghiaList:t}=this.state;for(let i=0;i<t.length;i++){let n=t[i];if(!e||!n.nghia)return o().fire("Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại","","info"),this.setState({error:{message:"Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại"}}),!1;for(let e=0;e<n.vidus.length;e++){let t=n.vidus[e];if(!t.vidu||!t.nghiaVidu)return o().fire("Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại","","info"),this.setState({error:{message:"Vui l\xf2ng điền đầy đủ th\xf4ng tin v\xe0 thử lại"}}),!1}}return!0},this.isValidDichThuat=e=>!/[.#$[\]]/.test(e),this.addNghia=()=>{this.setState(e=>({nghiaList:[...e.nghiaList,{nghia:"",pinyin:"",vidus:[{vidu:"",nghiaVidu:"",pinyinVidu:""}]}]}))},this.removeNghia=e=>{this.setState(t=>{let i=t.nghiaList.slice();return i.splice(e,1),{nghiaList:i}})},this.addVidu=e=>{let t=this.state.nghiaList.slice();t[e].vidus.push({vidu:"",nghiaVidu:"",pinyinVidu:""}),this.setState({nghiaList:t})},this.removeLastVidu=e=>{let t=this.state.nghiaList.slice();t[e].vidus.length>1&&t[e].vidus.pop(),this.setState({nghiaList:t})},this.removeVidu=(e,t)=>{let i=this.state.nghiaList.slice();i[e].vidus.splice(t,1),this.setState({nghiaList:i})},this.Search=async()=>{let{tumoi:e}=this.state,t=encodeURIComponent(e);try{this.setState({loading:!0});let e=await u.Z.get("https://api.hanzii.net/api/search/vi/".concat(t,"?type=word&page=1&limit=50"));if(e.data.found){let t=e.data.result[0].content,i=[];t.forEach(e=>{i=i.concat(e.means)});let n=e.data.result[0].cn_vi,a=e.data.result[0].pinyin,c=i.map(e=>({nghia:e.mean,vidus:e.examples.map(e=>({vidu:e.e,pinyinVidu:e.p,nghiaVidu:e.m}))}));this.setState({nghiaList:c,hanviet:n,pinyin:a})}}catch(e){console.error("Lỗi khi t\xecm kiếm:",e),o().fire("Lỗi khi t\xecm kiếm: "+e.message,"","info"),this.setState({error:{message:"Lỗi khi t\xecm kiếm: "+e.message}})}finally{this.setState({loading:!1})}},this.state={dichthuat:null,error:null,nav:!1,userTuMoiPath:null,nghiaList:[{nghia:"",vidus:[{vidu:"",nghiaVidu:"",pinyinVidu:""}]}],loading:!1,tumoi:"",hanviet:""}}}t.Z=g},9768:function(e,t,i){i.d(t,{Z:function(){return s}});var n=i(7437),a=i(2265),c={src:"/_next/static/media/Loading.3170e5c7.gif",height:480,width:475,blurWidth:0,blurHeight:0},r=i(6648);class s extends a.Component{render(){return(0,n.jsx)("div",{className:"loadingData",children:(0,n.jsxs)("div",{className:"loadingData-container",children:[(0,n.jsx)(r.default,{src:c,alt:"Loading...",width:100,height:100}),(0,n.jsx)("h2",{children:"Website đang tải dữ liệu, xin vui l\xf2ng chờ trong gi\xe2y l\xe1t"})]})})}}},5606:function(e,t,i){i.d(t,{F3:function(){return g},Gd:function(){return f},Je:function(){return s},Pf:function(){return l},Tn:function(){return o},UD:function(){return v},VP:function(){return d},Z6:function(){return u},_g:function(){return h},eO:function(){return m},kX:function(){return y}});var n=i(5236);i(9675);var a=i(516);let c=(0,n.ZF)({apiKey:"AIzaSyD9IyIValBX6xooTZ3wsBPfKsyYvNwAWik",authDomain:"dichchuhan-55a4d.firebaseapp.com",databaseURL:"https://dichchuhan-55a4d-default-rtdb.firebaseio.com",projectId:"dichchuhan-55a4d",storageBucket:"dichchuhan-55a4d.appspot.com",messagingSenderId:"589658521880",appId:"1:589658521880:web:65694d6b4f17f4ca6b1e6d",measurementId:"G-G02KSBMR52"}),r=(0,a.N8)(c);function s(){var e=document.getElementById("fileList").value,t=document.querySelector(".content-right").value,i={[e]:t},n="/users/user1/kecheng/".concat(e),c="/users/user1/contents/".concat(e),s=(0,a.iH)(r,c);(0,a.t8)(s,i).then(()=>{console.log("Dữ liệu b\xe0i dịch đ\xe3 được ghi th\xe0nh c\xf4ng l\xean Firebase.")}).catch(e=>{console.error("Lỗi khi ghi dữ liệu b\xe0i dịch:",e)}),s=(0,a.iH)(r,n),i={[e]:t=document.querySelector(".content-left").value},(0,a.t8)(s,i).then(()=>{console.log("Dữ liệu kecheng đ\xe3 được ghi th\xe0nh c\xf4ng l\xean Firebase.")}).catch(e=>{console.error("Lỗi khi ghi dữ liệu kecheng:",e)})}function o(e){var t={[e]:"".concat(e," phần dịch")},i="/users/user1/kecheng/".concat(e),n="/users/user1/contents/".concat(e),c=(0,a.iH)(r,n);(0,a.t8)(c,t).then(()=>{console.log("Dữ liệu b\xe0i dịch đ\xe3 được ghi th\xe0nh c\xf4ng l\xean Firebase.")}).catch(e=>{console.error("Lỗi khi ghi dữ liệu b\xe0i dịch:",e)}),c=(0,a.iH)(r,i),t={[e]:"".concat(e," 中文")},(0,a.t8)(c,t).then(()=>{console.log("Dữ liệu kecheng đ\xe3 được ghi th\xe0nh c\xf4ng l\xean Firebase.")}).catch(e=>{console.error("Lỗi khi ghi dữ liệu kecheng:",e)})}async function l(e,t){var i=(0,a.iH)(r,e);try{return await (0,a.t8)(i,t),!0}catch(e){throw console.error("C\xf3 lỗi xảy ra:",e),e}}function h(e){var t=(0,a.iH)(r,"/users/user1/contents/".concat(e));(0,a.Od)(t).then(()=>{console.log("Dữ liệu b\xe0i dịch đ\xe3 được x\xf3a th\xe0nh c\xf4ng từ Firebase.")}).catch(e=>{console.error("Lỗi khi x\xf3a dữ liệu b\xe0i dịch:",e)}),t=(0,a.iH)(r,"/users/user1/kecheng/".concat(e)),(0,a.Od)(t).then(()=>{console.log("Dữ liệu kecheng đ\xe3 được x\xf3a th\xe0nh c\xf4ng từ Firebase.")}).catch(e=>{console.error("Lỗi khi x\xf3a dữ liệu kecheng:",e)})}async function u(e){var t=(0,a.iH)(r,e);try{return await (0,a.Od)(t),!0}catch(e){throw console.error("C\xf3 lỗi xảy ra:",e),e}}function d(){var e=document.getElementById("fileList").value,t="/users/user1/kecheng/".concat(e,"/").concat(e),i="/users/user1/contents/".concat(e,"/").concat(e);console.log(t),console.log(g(i)),g(i).then(e=>{null!==e&&(document.querySelector(".content-right").value=e)}).catch(e=>{console.error("C\xf3 lỗi xảy ra:",e)}),g(t).then(e=>{null!==e&&(document.querySelector(".content-left").value=e)}).catch(e=>{console.error("C\xf3 lỗi xảy ra:",e)})}function g(e){return new Promise((t,i)=>{var n=(0,a.iH)(r,e);(0,a.U2)(n).then(e=>{e.exists()?t(e.val()):(console.log("Kh\xf4ng c\xf3 dữ liệu tại đường dẫn n\xe0y."),t(null))}).catch(e=>{console.error("Lỗi khi đọc dữ liệu:",e),i(e)})})}async function m(e){var t=(0,a.iH)(r,e);try{var i=await (0,a.U2)(t);if(i.exists())return i.val();return null}catch(e){return console.error("Lỗi khi đọc dữ liệu:",e),null}}function v(e){return new Promise((t,i)=>{var n=(0,a.iH)(r,e);(0,a.U2)(n).then(e=>{e.exists()?t(Object.entries(e.val()).map(e=>{let[t,i]=e;return{key:t,value:i}})):t(null)}).catch(e=>{console.error("Lỗi khi đọc dữ liệu:",e),i(e)})})}let p="users/user1/contents";async function f(){let e=(0,a.iH)(r,p),t=await (0,a.U2)(e);t.exists()?(x(Object.keys(t.val())),d()):console.log("Kh\xf4ng c\xf3 dữ liệu tại đường dẫn n\xe0y.")}async function y(e){let t=(0,a.iH)(r,p),i=await (0,a.U2)(t);if(i.exists()){var n,c;x(Object.keys(i.val())),n="/users/user1/kecheng/".concat(e,"/").concat(e),c="/users/user1/contents/".concat(e,"/").concat(e),document.getElementById("fileList").value=e,g(c).then(e=>{null!==e&&(document.querySelector(".content-right").value=e)}).catch(e=>{console.error("C\xf3 lỗi xảy ra:",e)}),g(n).then(e=>{null!==e&&(document.querySelector(".content-left").value=e)}).catch(e=>{console.error("C\xf3 lỗi xảy ra:",e)})}else console.log("Kh\xf4ng c\xf3 dữ liệu tại đường dẫn n\xe0y.")}function x(e){let t=document.getElementById("fileList");for(;t.firstChild;)t.removeChild(t.firstChild);e.forEach(e=>{let i=document.createElement("option");i.value=e,i.textContent=e,t.appendChild(i)})}}}]);