import{a as F}from"./chunk-TX4RGXHY.js";import{a as k}from"./chunk-L32G27ZM.js";import{a as A,d as E}from"./chunk-SOWNCCG4.js";import{a as y}from"./chunk-KSLAI2AB.js";import{b as T,m as L}from"./chunk-DYQSPWX7.js";import{$a as t,Aa as r,Ba as c,Bb as b,Ka as O,Oa as f,Qa as P,T as w,Wa as S,Y as C,Ya as x,Za as g,_a as e,ab as p,ba as u,gb as _,hb as h,lb as j,sb as i,tb as d,ub as v}from"./chunk-FCI7FGJ6.js";import"./chunk-WWX6BADO.js";var D=(()=>{let a=class a{constructor(n){this.apiService=n}list(n){return this.apiService.apiCall("post","orderlist/list",n)}transactionView(n){return this.apiService.apiCall("get","transaction/"+n+"/view")}orderView(n){return this.apiService.apiCall("get","orderlist/"+n+"/view")}};a.\u0275fac=function(o){return new(o||a)(C(T))},a.\u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"});let s=a;return s})();var B=(s,a)=>a.id;function $(s,a){if(s&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),i(10),t(),e(11,"td"),i(12),t(),e(13,"td")(14,"div",12),p(15,"input",13),t()(),e(16,"td")(17,"button",14),p(18,"i",15),t()()()),s&2){let m=a.$implicit;r(2),d(m.orderDate),r(2),d(m.name),r(2),d(m.createdAt),r(2),d(m.createdBy),r(2),d(m.updatedAt),r(2),d(m.updatedBy),r(5),j("routerLink","view/",m.id,"")}}function H(s,a){if(s&1&&(e(0,"tr",10)(1,"td",16),i(2),t()()),s&2){let m=h();r(2),v("",m.listLoadingMessage," ")}}var N=(()=>{let a=class a{constructor(n,o,l){this.orderListService=n,this.commonService=o,this.timeZoneService=l,this.listDefaultParams=new k,this.orderListArray=[],this.listLoadingMessage="Loading Data...",this.totalRows=0,this.showParentPageLoader=!0,this.loaderType=O(""),this.isFilterSelected=!1}ngOnInit(){this.orderList()}orderList(){this.loaderType.set("full"),this.orderListService.list(this.listDefaultParams).subscribe({next:n=>{n!=null?n.success&&n.response.length>0&&(this.orderListArray=n.response,this.listLoadingMessage="",this.totalRows=n.totalRows,this.listDefaultParams.pageNumber=n.pageNumber,this.listDefaultParams.pageSize=n.pageSize):(this.commonService.errorMessage(n.message),this.listLoadingMessage=n.message),this.showParentPageLoader=!1}})}displayDateInUserFormat(n){return this.timeZoneService.convertDateInUserFormat(n)}changePageNumberAndSize(n){this.listDefaultParams.pageNumber=n.pageNumber,this.listDefaultParams.pageSize=n.pageSize,this.orderList()}filterList(n){this.listDefaultParams.pageNumber=1,this.listDefaultParams.pageSize=10,this.listDefaultParams.filterConditions=n.filterConditions,this.listDefaultParams.sortingConditions=n.sortingConditions,this.listDefaultParams.sortingColumn=n.sortingColumn,this.listDefaultParams.sortingType=n.sortingType,this.listDefaultParams.filterConditions.length>0||this.listDefaultParams.sortingConditions.indexOf("name asc")<0||this.listDefaultParams.sortingConditions==""?this.isFilterSelected=!0:this.isFilterSelected=!1,this.orderList()}};a.\u0275fac=function(o){return new(o||a)(c(D),c(L),c(y))},a.\u0275cmp=u({type:a,selectors:[["app-order-list"]],standalone:!0,features:[b],decls:36,vars:4,consts:[[1,"navbar","bg-body-tertiary","shadow-sm"],[1,"container-fluid"],["routerLink","/dashboard",1,"text-decoration-none"],[1,"text-muted","text-decoration-none"],[1,"container-fluid","mt-3"],[1,"row"],[1,"col-12"],[1,"list-table"],[1,"table","table-sm"],[1,"table-secondary"],[1,"text-center"],[3,"parentListRefresh","pageNumber","pageSize","totalRows"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","flexSwitchCheckChecked",1,"form-check-input"],["type","button",1,"btn","common-btn","me-1",3,"routerLink"],[1,"bi","bi-eye"],["colspan","8"]],template:function(o,l){o&1&&(e(0,"nav",0)(1,"div",1)(2,"div")(3,"a",2),i(4,"Dashboard / "),t(),e(5,"a",3),i(6,"Order List"),t()()()(),e(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"table",8)(12,"thead")(13,"tr",9)(14,"th"),i(15,"Order Date"),t(),e(16,"th"),i(17,"Name"),t(),e(18,"th"),i(19,"Created At"),t(),e(20,"th"),i(21,"Created By"),t(),e(22,"th"),i(23,"Updated At"),t(),e(24,"th"),i(25,"Updated By"),t(),e(26,"th"),i(27,"Status"),t(),e(28,"th"),i(29,"Actions"),t()()(),e(30,"tbody"),x(31,$,19,8,"tr",null,B),f(33,H,3,1,"tr",10),t()()()(),e(34,"div",6)(35,"app-table-footer",11),_("parentListRefresh",function(z){return l.changePageNumberAndSize(z)}),t()()()()),o&2&&(r(31),g(l.orderListArray),r(2),S(l.orderListArray.length==0?33:-1),r(2),P("pageNumber",l.listDefaultParams.pageNumber)("pageSize",l.listDefaultParams.pageSize)("totalRows",l.totalRows))},dependencies:[E,F]});let s=a;return s})();var q=(s,a)=>a.id;function G(s,a){if(s&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),i(10),t(),e(11,"td"),i(12),t()()),s&2){let m=a.$implicit,n=h();r(2),d(m.date),r(2),d(m.transcationId),r(2),d(m.amount),r(2),d(m.bankDetail),r(2),d(n.displayDateInUserFormat(m.createdAt)),r(2),d(m.createdBy)}}function J(s,a){if(s&1&&(e(0,"tr",33)(1,"td",34),i(2),t()()),s&2){let m=h();r(2),v("",m.listLoadingMessage," ")}}var V=(()=>{let a=class a{constructor(n,o,l,I){this.route=n,this.orderListService=o,this.commonService=l,this.timeZoneService=I,this.transcationArray=[],this.orderObj={},this.modelDetailsObj={},this.listLoadingMessage="Loading Data..."}ngOnInit(){let n=this.route.snapshot.paramMap.get("id");n&&(this.transcationView(n),this.orderView(n))}transcationView(n){this.orderListService.transactionView(n).subscribe({next:o=>{o!=null?o.success&&(this.transcationArray=o.response,this.commonService.hideLoader()):(this.commonService.errorMessage(o.message),this.commonService.hideLoader())}})}orderView(n){this.orderListService.orderView(n).subscribe({next:o=>{o!=null?o.success&&(this.orderObj=o.response,this.modelDetailsObj=o.response.orderDetails,this.commonService.hideLoader()):(this.commonService.errorMessage(o.message),this.commonService.hideLoader())}})}displayDateInUserFormat(n){return this.timeZoneService.convertDateInUserFormat(n)}};a.\u0275fac=function(o){return new(o||a)(c(A),c(D),c(L),c(y))},a.\u0275cmp=u({type:a,selectors:[["app-order-list-view"]],standalone:!0,features:[b],decls:98,vars:10,consts:[[1,"navbar","bg-body-tertiary","shadow-sm"],[1,"container-fluid"],["routerLink","/order-listing",1,""],[1,"text-muted","text-decoration-none"],[1,"container-fluid","mt-3"],[1,"row"],[1,"col-md-6","col-12"],[1,"common-header"],[1,"small","mt-2"],[1,"card"],[1,"card-body"],[1,"col-lg-4","col-12"],[1,"fw-semibold"],[1,"col-lg-6","col-12","mb-2"],[1,"col-md-12","col-12","mt-3"],[1,"page-heading"],[1,"small"],[1,"row","g-0"],[1,"col-md-4","align-content-center"],["src","assets/1.webp","alt","...",1,"img-fluid","rounded-start"],[1,"col-md-8","align-content-center"],[1,"d-flex","justify-content-between"],[1,"card-title"],[1,"d-flex"],[1,"me-2"],[1,"bi","bi-circle-fill"],[1,"card-text"],[1,"text-body-secondary"],[1,"page-heading","me-3"],[1,"col-12","mt-3"],[1,""],[1,"list-table"],[1,"table","table-sm"],[1,"text-center"],["colspan","8"]],template:function(o,l){o&1&&(e(0,"nav",0)(1,"div",1)(2,"div")(3,"a",2),i(4,"Order List / "),t(),e(5,"a",3),i(6,"View"),t()()()(),e(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7),i(11," order View "),t(),e(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",5)(16,"div",11)(17,"span",12),i(18,"Name"),t()(),e(19,"div",13)(20,"span"),i(21),t()()(),e(22,"div",5)(23,"div",11)(24,"span",12),i(25,"Order Date"),t()(),e(26,"div",13)(27,"span"),i(28),t()()(),e(29,"div",5)(30,"div",11)(31,"span",12),i(32,"Phone No."),t()(),e(33,"div",13)(34,"span"),i(35),t()()(),e(36,"div",5)(37,"div",11)(38,"span",12),i(39,"Amount"),t()(),e(40,"div",13)(41,"span"),i(42),t()()()()()()(),e(43,"div",14)(44,"div",7)(45,"span",15),i(46),t(),e(47,"span"),i(48),t()(),e(49,"div",16)(50,"div",9)(51,"div",17)(52,"div",18),p(53,"img",19),t(),e(54,"div",20)(55,"div",10)(56,"div",21)(57,"h6",22),i(58),t(),e(59,"div",23)(60,"h6",24),i(61),t(),e(62,"span"),p(63,"i",25),t()()(),e(64,"p",26)(65,"small",27),i(66),t()(),e(67,"h6",15),i(68,"Incentives"),t(),e(69,"div",23)(70,"p",28),i(71,"State"),t(),e(72,"p"),i(73,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, odio."),t()()()()()()()(),e(74,"div",29)(75,"div",30)(76,"div",7),i(77," Transaction History "),t(),e(78,"div",31)(79,"table",32)(80,"thead")(81,"tr",30)(82,"th"),i(83,"transaction Date"),t(),e(84,"th"),i(85,"transaction id"),t(),e(86,"th"),i(87,"Amount"),t(),e(88,"th"),i(89,"bank info"),t(),e(90,"th"),i(91,"created at"),t(),e(92,"th"),i(93,"created by"),t()()(),e(94,"tbody"),x(95,G,13,6,"tr",null,q),f(97,J,3,1,"tr",33),t()()()()()()()),o&2&&(r(21),d(l.orderObj.name),r(7),d(l.orderObj.orderDate),r(7),d(l.orderObj.phoneNo),r(7),d(l.orderObj.amount),r(4),d(l.modelDetailsObj.product_name),r(2),v("$",l.modelDetailsObj.model_price,""),r(10),d(l.modelDetailsObj.model_name),r(3),d(l.modelDetailsObj.model_color),r(5),v("",l.modelDetailsObj.charges," "),r(29),g(l.transcationArray),r(2),S(l.transcationArray.length==0?97:-1))},dependencies:[E]});let s=a;return s})();var se=[{path:"",component:N},{path:"view/:id",component:V}];export{se as ORDERLIST_ROUTES};
