(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[354],{1409:function(e,s,i){"use strict";function a(e){let{src:s,width:i,quality:a}=e;return"".concat("").concat(s)}i.r(s),i.d(s,{default:function(){return a}})},7073:function(e,s,i){"use strict";i.d(s,{Z:function(){return f}});var a=i(7437);i(8446);var t=i(2265),n=i(6463),A=i(4379),o=i.n(A),l=i(7138);i(4810);var r=i(3508);class c extends t.Component{componentDidMount(){let e=localStorage.getItem("name");this.setState({userName:e})}componentDidUpdate(e,s){this.state.logout&&!s.logout&&this.props.router.push("/login")}render(){let{isDropdownOpen:e,logout:s,userName:i}=this.state;return(0,a.jsxs)("nav",{className:"sb-topnav navbar navbar-expand navbar-dark bg-dark",children:[(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,a.jsx)("a",{className:"navbar-brand header-logo",href:"#!",children:(0,a.jsx)("span",{className:"ml-2 header-logo-span",children:(0,a.jsx)("h1",{children:"Dịch Thuật"})})}),(0,a.jsx)(d,{toggleMenuSideVisibility:this.toggleMenuSideVisibility})]}),(0,a.jsx)("ul",{className:"navbar-nav ms-md-0 me-3 me-lg-4",children:(0,a.jsxs)("li",{className:"nav-item dropdown",children:[(0,a.jsxs)("a",{className:"nav-link dropdown-toggle",id:"navbarDropdown",href:"#",role:"button","data-bs-toggle":"dropdown",onClick:this.toggleDropdown,"aria-expanded":e?"true":"false",children:[i||null," ",(0,a.jsx)("i",{className:"fas fa-user fa-fw"})]}),(0,a.jsxs)("ul",{className:"dropdown-menu ".concat(e?"dropdown-menu-end show":""),"aria-labelledby":"navbarDropdown",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l.default,{className:"dropdown-item",href:"/changePassword",passHref:!0,legacyBehavior:!0,children:(0,a.jsxs)("div",{className:"dropdown-item",children:[(0,a.jsx)("i",{className:"fa-solid fa-gears nav-icon"}),"Đổi mật khẩu"]})})}),(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"dropdown-item",onClick:this.loginFunction,children:[(0,a.jsx)("i",{className:"fa-solid fa-arrow-right-to-bracket nav-icon"}),"Đăng nhập"]})}),(0,a.jsx)("li",{children:(0,a.jsx)("hr",{className:"dropdown-divider"})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"dropdown-item",onClick:this.LogoutFunction,children:[(0,a.jsx)("i",{className:"fa-solid fa-arrow-right-from-bracket nav-icon"}),"Đăng xuất ",i?" "+i:null]})})]})]})})]})}constructor(...e){super(...e),this.state={isDropdownOpen:!1,logout:!1,userName:null},this.toggleDropdown=()=>{this.setState(e=>({isDropdownOpen:!e.isDropdownOpen}))},this.toggleMenuSideVisibility=()=>{this.props.toggleMenuSide()},this.loginFunction=()=>{this.setState({logout:!0})},this.LogoutFunction=()=>{localStorage.clear(),o().fire({position:"center",icon:"success",title:"Logout Success",showConfirmButton:!1,timer:1500}),this.setState({logout:!0})}}}let d=e=>{let{toggleMenuSideVisibility:s}=e;return(0,a.jsx)("button",{className:"btn btn-link btn-sm order-lg-0 me-4 me-lg-0",id:"sidebarToggle",onClick:s,children:(0,a.jsx)("i",{className:"fas fa-bars"})})};var h=()=>{let e=(0,n.useRouter)();return(0,a.jsx)(c,{router:e})};i(366);class m extends t.Component{componentDidMount(){this.setState({viewMenuSide2nd:!!localStorage.getItem("viewItAsset")&&localStorage.getItem("viewItAsset")}),(0,r.bg)()&&this.setState({flagLogin:!0}),(0,r.GJ)()&&this.setState({flagAdmin:!0})}componentDidUpdate(e){e.viewMenuSide2nd!==this.state.viewMenuSide2nd&&(this.renderItemAsset(),localStorage.setItem("viewItAsset",this.state.viewMenuSide2nd))}render(){let{isMenuSideVisible:e}=this.props;return(0,a.jsx)("div",{className:"layoutContainer d-none d-md-inline-block",children:(0,a.jsx)("div",{className:"menuSide sb-sidenav",children:(0,a.jsx)("div",{className:"menuSide-item",children:(0,a.jsxs)("ul",{className:"menuSide-nav",children:[(0,a.jsx)(u,{path:"/",itemName:"Bảng tin",icon:(0,a.jsx)("i",{class:"nav-icon fa-solid fa-newspaper"})}),this.state.flagLogin&&(0,a.jsx)(u,{path:"/dichthuat",itemName:"Dịch Thuật",icon:(0,a.jsx)("i",{className:"nav-icon fa-solid fa-house"})}),(0,a.jsx)(u,{path:"/tddkkc",itemName:"Tịnh Độ Đại Kinh",icon:(0,a.jsx)("i",{className:"nav-icon fa-solid fa-book"})}),(0,a.jsx)("li",{className:"menuSide-it-asset",onClick:this.viewItem,children:(0,a.jsxs)("a",{className:"nav-link",children:[(0,a.jsx)("i",{class:"nav-icon fa-solid fa-toolbox"}),"T\xe0i liệu tham khảo",this.renderItemAsset()]})})]})})})})}constructor(e){super(e),this.viewItem=()=>{this.setState(e=>({viewMenuSide2nd:!e.viewMenuSide2nd}))},this.renderItemAsset=()=>this.state.viewMenuSide2nd?(0,a.jsxs)("div",{className:"menuSide-2nd",children:[this.state.flagAdmin&&(0,a.jsx)(u,{path:"/stickynote",itemName:"Sticky Notes",icon:(0,a.jsx)("i",{className:"nav-icon fa-solid fa-file-pen"})}),this.state.flagAdmin&&(0,a.jsx)(u,{path:"/convertText",itemName:"Chuyển đổi text",icon:(0,a.jsx)("i",{class:"nav-icon fa-solid fa-font"})}),this.state.flagAdmin&&(0,a.jsx)(u,{path:"/tudiendich",itemName:"Từ điển dịch",icon:(0,a.jsx)("i",{class:"nav-icon fa-solid fa-shuffle"})}),(0,a.jsx)(u,{path:"/nhidonghocphat",itemName:"Nhi đồng học Phật",icon:(0,a.jsx)("i",{className:"nav-icon fa-solid fa-earth-americas"})}),(0,a.jsx)(u,{path:"/jiaocheng",itemName:"TKPS Gia Ng\xf4n Lục",icon:(0,a.jsx)("i",{class:"nav-icon fa-solid fa-book-journal-whills"})}),(0,a.jsx)(u,{path:"/pdfGiaotrinh",itemName:"PDF TKPS Gia Ng\xf4n Lục",icon:(0,a.jsx)("i",{class:"nav-icon fa-solid fa-file-pdf"})}),(0,a.jsx)(u,{path:"/hanzi",itemName:"Từ điển Hanzi",icon:(0,a.jsx)("i",{className:"nav-icon fa-solid fa-language"})})]}):null,this.state={viewMenuSide2nd:!1,flagLogin:!1,flagAdmin:!1}}}function u(e){return(0,a.jsx)("li",{children:(0,a.jsx)(l.default,{href:e.path,legacyBehavior:!0,children:(0,a.jsxs)("a",{className:"nav-link",children:[e.icon," ",e.itemName]})})})}class g extends t.Component{render(){return(0,a.jsxs)("div",{className:"sb-nav-fixed",children:[(0,a.jsx)(h,{toggleMenuSide:this.toggleMenuSideVisibility}),(0,a.jsx)("div",{className:"UserContainer d-md-inline-block",children:(0,a.jsxs)("div",{className:"UserContainer-block",children:[this.state.isMenuSideVisible&&(0,a.jsx)(m,{}),(0,a.jsx)("div",{className:"table-container col",id:"table-container",children:(0,a.jsx)("div",{className:"table-container-header",children:this.props.body})})]})})]})}constructor(e){super(e),this.toggleMenuSideVisibility=()=>{this.setState(e=>({isMenuSideVisible:!e.isMenuSideVisible}))},this.state={isMenuSideVisible:!0}}}var f=g},3508:function(e,s,i){"use strict";i.d(s,{GJ:function(){return d},bg:function(){return c},o0:function(){return l},xb:function(){return r}});var a=i(7437),t=i(9782),n=i(1213);i(899),i(2265);var A=i(5749),o=i(6648);let l=e=>{if(!e)return"";try{let s=new Date(e);return(0,t.WU)(s,"h:mm a, dd 'Th\xe1ng' MM, yyyy",{locale:n.vi})}catch(s){return console.error("Invalid date format:",e),e}};function r(e){return(0,a.jsxs)("div",{className:"itemCard-container-dashboard",ref:e.refViewBaidich,children:[(0,a.jsxs)("div",{className:"itemCard-UserName itemcard-UserName-sticky",children:[(0,a.jsxs)("div",{className:"itemCard-UserName-1",children:[(0,a.jsx)(o.default,{src:e.imgUser?e.imgUser:A.Z,alt:"img",width:30,height:30}),(0,a.jsxs)("div",{className:"itemCard-UserName-container",children:[(0,a.jsx)("h4",{className:"username-card",children:e.username}),(0,a.jsx)("p",{style:{margin:"0"},children:l(e.dateTime)})]})]}),(0,a.jsx)("div",{className:"itemCard-UserName-1",children:(0,a.jsx)("button",{className:"btn btn-options",onClick:e.removeClick,style:{padding:"0",margin:"0"},children:(0,a.jsx)("i",{className:"fa-solid fa-trash"})})})]}),(0,a.jsx)("div",{className:"itemCard-baiDich",children:(0,a.jsx)("pre",{children:e.baidich})})]})}function c(){return!!localStorage.getItem("name")}function d(){return"duong171099"==localStorage.getItem("user")}},4810:function(){},8446:function(){},366:function(){},899:function(){},5749:function(e,s){"use strict";s.Z={src:"/_next/static/media/user.f64324c2.jpg",height:200,width:200,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAG0E//EABUQAQEAAAAAAAAAAAAAAAAAABMk/9oACAEBAAEFAlo//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAGBAAAgMAAAAAAAAAAAAAAAAAABIxQWH/2gAIAQEABj8CRqjT/8QAGBAAAgMAAAAAAAAAAAAAAAAAESEAMbH/2gAIAQEAAT8hGkETU//aAAwDAQACAAMAAAAQ+//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABgQAAIDAAAAAAAAAAAAAAAAAAARQZGh/9oACAEBAAE/ELbi5YP/2Q==",blurWidth:8,blurHeight:8}}}]);