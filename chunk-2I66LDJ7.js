import{a as F}from"./chunk-MPOKI7GE.js";import{a as me,b as de}from"./chunk-EMZZWQZT.js";import"./chunk-5ENT4XQA.js";import{a as N}from"./chunk-3VYHKAG4.js";import{a as se}from"./chunk-QJUVNZXF.js";import{a as re}from"./chunk-D42AVTVB.js";import"./chunk-TX4RGXHY.js";import{a as le}from"./chunk-L32G27ZM.js";import{a as G,c as H,d as L}from"./chunk-SOWNCCG4.js";import{a as ae}from"./chunk-KSLAI2AB.js";import{m as P}from"./chunk-DYQSPWX7.js";import{$a as i,$b as Z,Aa as a,Ac as X,Ba as S,Bb as I,Bc as Y,Cc as $,Db as v,Fc as ee,Gc as te,Hc as ie,Ic as ne,Ka as W,Mc as oe,Oa as u,Qa as C,Wa as g,Ya as A,Za as q,_a as t,ab as p,ba as M,eb as U,fc as z,gb as V,hb as _,ja as h,ka as b,kb as j,lb as O,rb as y,sb as n,tb as x,ub as R,vc as J,xa as B,xb as E,yb as T,yc as K,zb as w,zc as Q}from"./chunk-FCI7FGJ6.js";import"./chunk-WWX6BADO.js";var he=(e,o)=>o.id,pe=e=>({pageId:e});function be(e,o){e&1&&p(0,"i",15)}function ve(e,o){e&1&&p(0,"i",16)}function ye(e,o){if(e&1&&(t(0,"span"),u(1,be,1,0,"i",15)(2,ve,1,0,"i",16),i()),e&2){let l=_();a(),g(l.listDefaultParams.sortingType=="asc"?1:2)}}function xe(e,o){e&1&&p(0,"i",15)}function Ee(e,o){e&1&&p(0,"i",16)}function Te(e,o){if(e&1&&(t(0,"span"),u(1,xe,1,0,"i",15)(2,Ee,1,0,"i",16),i()),e&2){let l=_();a(),g(l.listDefaultParams.sortingType=="asc"?1:2)}}function we(e,o){e&1&&p(0,"i",15)}function De(e,o){e&1&&p(0,"i",16)}function Me(e,o){if(e&1&&(t(0,"span"),u(1,we,1,0,"i",15)(2,De,1,0,"i",16),i()),e&2){let l=_();a(),g(l.listDefaultParams.sortingType=="asc"?1:2)}}function Ie(e,o){e&1&&p(0,"i",15)}function Le(e,o){e&1&&p(0,"i",16)}function Pe(e,o){if(e&1&&(t(0,"span"),u(1,Ie,1,0,"i",15)(2,Le,1,0,"i",16),i()),e&2){let l=_();a(),g(l.listDefaultParams.sortingType=="asc"?1:2)}}function Ne(e,o){e&1&&p(0,"i",15)}function Fe(e,o){e&1&&p(0,"i",16)}function Ve(e,o){if(e&1&&(t(0,"span"),u(1,Ne,1,0,"i",15)(2,Fe,1,0,"i",16),i()),e&2){let l=_();a(),g(l.listDefaultParams.sortingType=="asc"?1:2)}}function ke(e,o){e&1&&p(0,"i",15)}function Be(e,o){e&1&&p(0,"i",16)}function We(e,o){if(e&1&&(t(0,"span"),u(1,ke,1,0,"i",15)(2,Be,1,0,"i",16),i()),e&2){let l=_();a(),g(l.listDefaultParams.sortingType=="asc"?1:2)}}function Ae(e,o){if(e&1&&(t(0,"tr"),p(1,"td"),t(2,"td"),n(3),i(),t(4,"td"),n(5),i(),t(6,"td"),n(7),i(),t(8,"td"),n(9),i(),t(10,"td"),n(11),i(),t(12,"td"),n(13),i(),t(14,"td"),n(15),i(),t(16,"td")(17,"a",17),p(18,"i",18),i(),t(19,"a",19),p(20,"i",20),n(21," Create Story"),i(),t(22,"a",21),p(23,"i",20),n(24," Meta Tag"),i()()()),e&2){let l=_().$implicit;a(3),x(l.name),a(2),x(l.slug),a(2),x(l.createdAt),a(2),x(l.createdBy),a(2),x(l.updatedAt),a(2),x(l.updatedBy),a(2),x(l.statusName),a(2),O("routerLink","./edit/",l.id,""),a(2),C("queryParams",v(11,pe,l.id)),a(3),C("queryParams",v(13,pe,l.id))}}function qe(e,o){if(e&1&&u(0,Ae,25,15,"tr"),e&2){let l=o.$implicit;g(l.pageTypeId==2?0:-1)}}function Ue(e,o){if(e&1&&(t(0,"tr",14)(1,"td",22),n(2),i()()),e&2){let l=_();a(2),R("",l.listLoadingMessage," ")}}var ce=(()=>{let o=class o{constructor(s,d,r){this.storiesbuilderService=s,this.commonService=d,this.timeZoneService=r,this.listDefaultParams=new le,this.pageListArray=[],this.loaderType=W(""),this.showParentPageLoader=!0,this.listLoadingMessage="Loading Data..."}ngOnInit(){this.pageList()}pageList(){this.loaderType.set("full"),this.storiesbuilderService.pageList().subscribe({next:s=>{s!=null?s.success&&s.response.length>0&&(this.pageListArray=s.response):this.commonService.errorMessage(s.message),this.showParentPageLoader=!1}})}displayDateInUserFormat(s){return this.timeZoneService.convertDateInUserFormat(s)}};o.\u0275fac=function(d){return new(d||o)(S(N),S(P),S(ae))},o.\u0275cmp=M({type:o,selectors:[["app-pages"]],standalone:!0,features:[I],decls:45,vars:7,consts:[[1,"navbar","bg-body-tertiary","shadow-sm"],[1,"container-fluid"],["routerLink","/dashboard",1,"text-decoration-none"],[1,"text-muted","text-decoration-none"],["role","button"],["routerLink","./new","type","button",1,"btn","common-btn","mx-1"],[1,"bi","bi-plus"],[1,"container-fluid","mt-3"],[1,"row"],[1,"col-12"],[1,"list-table"],[1,"table","table-sm"],[1,"table-secondary"],["scope","row"],[1,"text-center"],[1,"bi","bi-arrow-down"],[1,"bi","bi-arrow-up"],["type","button",1,"btn","common-btn","me-1",3,"routerLink"],[1,"bi","bi-pencil"],["routerLink","./builder","type","button",1,"btn","common-btn","me-1",3,"queryParams"],[1,"bi","bi-layers-fill"],["routerLink","./meta-data","type","button",1,"btn","common-btn","me-1",3,"queryParams"],["colspan","8"]],template:function(d,r){d&1&&(t(0,"nav",0)(1,"div",1)(2,"div")(3,"a",2),n(4,"Dashboard / "),i(),t(5,"a",3),n(6,"Stories-Content"),i()(),t(7,"form",4)(8,"a",5),p(9,"i",6),n(10,"Add"),i()()()(),t(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"table",11)(16,"thead")(17,"tr",12),p(18,"th"),t(19,"th",13),n(20,"Name "),u(21,ye,3,1,"span"),i(),t(22,"th"),n(23,"Slug"),i(),t(24,"th",13),n(25,"Created At "),u(26,Te,3,1,"span"),i(),t(27,"th",13),n(28,"Created By "),u(29,Me,3,1,"span"),i(),t(30,"th",13),n(31,"Updated At "),u(32,Pe,3,1,"span"),i(),t(33,"th",13),n(34,"Updated By "),u(35,Ve,3,1,"span"),i(),t(36,"th",13),n(37,"Status "),u(38,We,3,1,"span"),i(),t(39,"th",13),n(40,"Actions"),i()()(),t(41,"tbody"),A(42,qe,1,1,null,null,he),u(44,Ue,3,1,"tr",14),i()()()()()()),d&2&&(a(21),g(r.listDefaultParams.sortingColumn=="name"?21:-1),a(5),g(r.listDefaultParams.sortingColumn=="createdAt"?26:-1),a(3),g(r.listDefaultParams.sortingColumn=="createdBy"?29:-1),a(3),g(r.listDefaultParams.sortingColumn=="updatedAt"?32:-1),a(3),g(r.listDefaultParams.sortingColumn=="updatedBy"?35:-1),a(3),g(r.listDefaultParams.sortingColumn=="status"?38:-1),a(4),q(r.pageListArray),a(2),g(r.pageListArray.length==0?44:-1))},dependencies:[L]});let e=o;return e})();var D=e=>({"is-invalid":e});function je(e,o){e&1&&p(0,"img",15)}function Oe(e,o){if(e&1&&p(0,"img",16),e&2){let l=_();j("src",l.pageData.thumbnail,B)}}var k=(()=>{let o=class o{constructor(s,d,r,c,f){this.storiesBuilderService=s,this.route=d,this.commonService=r,this.router=c,this.lookupService=f,this.pageData=new F,this.categoryList=[],this.isFormSubmit=!1}ngOnInit(){this.storyCategoriesLookup();let s=this.route.snapshot.paramMap.get("id");if(s){let d=Number(s);this.getPageData(d)}}getPageData(s){this.isFormSubmit=!1,this.storiesBuilderService.pageEdit(s).subscribe({next:d=>{d!=null?d.success&&(d.response!=0?this.pageData=d.response:this.pageData=new F):this.commonService.errorMessage(d.message)}})}pageDataUpdate(s){this.pageData!=null&&(this.isFormSubmit=!0,this.pageData.pageTypeId=2,this.storiesBuilderService.addOrUpdatePage(this.pageData).subscribe({next:d=>{d!=null?d.success&&(this.commonService.successMessage(d.message),this.pageData=new F,s&&this.router.navigate(["stories-content"])):this.commonService.errorMessage(d.message)}}))}storyCategoriesLookup(){this.lookupService.dropdown("storyCateogries").subscribe({next:s=>{s!=null?s.success&&(this.categoryList=s.response):this.commonService.errorMessage(s.message)}})}backTolListPage(){this.router.navigate(["stories-content"])}};o.\u0275fac=function(d){return new(d||o)(S(N),S(G),S(P),S(H),S(re))},o.\u0275cmp=M({type:o,selectors:[["app-stories-content-edit"]],standalone:!0,features:[I],decls:66,vars:25,consts:[["f","ngForm"],["thumbnail","ngModel"],["categoryId","ngModel"],["name","ngModel"],["slug","ngModel"],["description","ngModel"],["statusId","ngModel"],[1,"navbar","bg-body-tertiary","shadow-sm"],[1,"container-fluid"],["routerLink","/stories",1,"text-decoration-none"],[1,"text-muted","text-decoration-none"],[1,"container-fluid","mt-3"],["novalidate","",3,"ngSubmit"],[1,"row","g-3"],[1,"col-md-4"],["src","assets/dummy-img.png",1,"img-fluid","img-avatar"],[1,"img-fluid","img-avatar",3,"src"],["type","text","id","thumbnail","placeholder","Enter Image URL","name","thumbnail","required","",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","ngClass"],[1,"invalid-feedback"],[1,"col-md-8"],[1,"col-12","col-md-4"],["for","category",1,"form-label"],[1,"text-danger"],["name","categoryId","bindLabel","name","bindValue","id","placeholder","Choose Category Type",3,"ngModelChange","items","ngModel","ngClass"],["for","txtName",1,"form-label"],["type","text","id","txtName","placeholder","Title","name","name","required","",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","ngClass"],["for","slugName",1,"form-label"],["type","text","id","slugName","placeholder","Slug","name","slug","required","",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","ngClass"],[1,"col-12","col-md-12"],["for","description",1,"form-label"],["id","description","name","description","rows","3","placeholder","Description",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","status",1,"form-label"],["id","status","name","statusId",1,"form-select","form-select-sm",3,"ngModelChange","ngModel"],["value","1"],["value","2"],["value","3"],[1,"my-3"],["type","submit",1,"btn","btn-sm","btn-outline-danger","me-1",3,"click","disabled"],["type","submit",1,"btn","btn-sm","common-btn-width-outline",3,"disabled"]],template:function(d,r){if(d&1){let c=U();t(0,"nav",7)(1,"div",8)(2,"div")(3,"a",9),n(4,"Stories-Content / "),i(),t(5,"a",10),n(6,"Edit"),i()()()(),t(7,"div",11)(8,"form",12,0),V("ngSubmit",function(){h(c);let m=y(9);return b(m.form.valid&&r.pageDataUpdate(!0))}),t(10,"div",13)(11,"div",14),u(12,je,1,0,"img",15)(13,Oe,1,1,"img",16),t(14,"input",17,1),w("ngModelChange",function(m){return h(c),T(r.pageData.thumbnail,m)||(r.pageData.thumbnail=m),b(m)}),i(),t(16,"div",18),n(17," Thumbnail Img is required. "),i()(),t(18,"div",19)(19,"div",13)(20,"div",20)(21,"label",21),n(22,"Category "),t(23,"span",22),n(24,"*"),i()(),t(25,"ng-select",23,2),w("ngModelChange",function(m){return h(c),T(r.pageData.categoryId,m)||(r.pageData.categoryId=m),b(m)}),i()(),t(27,"div",20)(28,"label",24),n(29,"Title Name "),t(30,"span",22),n(31,"*"),i()(),t(32,"input",25,3),w("ngModelChange",function(m){return h(c),T(r.pageData.name,m)||(r.pageData.name=m),b(m)}),i(),t(34,"div",18),n(35," Name field is required. "),i()(),t(36,"div",20)(37,"label",26),n(38,"Slug Name "),t(39,"span",22),n(40,"*"),i()(),t(41,"input",27,4),w("ngModelChange",function(m){return h(c),T(r.pageData.slug,m)||(r.pageData.slug=m),b(m)}),i(),t(43,"div",18),n(44," Name field is required. "),i()(),t(45,"div",28)(46,"label",29),n(47,"Description"),i(),t(48,"textarea",30,5),w("ngModelChange",function(m){return h(c),T(r.pageData.description,m)||(r.pageData.description=m),b(m)}),i()(),t(50,"div",20)(51,"label",31),n(52,"Status"),i(),t(53,"select",32,6),w("ngModelChange",function(m){return h(c),T(r.pageData.statusId,m)||(r.pageData.statusId=m),b(m)}),t(55,"option",33),n(56,"Published"),i(),t(57,"option",34),n(58,"Un-Published"),i(),t(59,"option",35),n(60,"Dropped"),i()()()()()(),t(61,"div",36)(62,"button",37),V("click",function(){return h(c),b(r.backTolListPage())}),n(63,"Cancel"),i(),t(64,"button",38),n(65,"Save "),i()()()()}if(d&2){let c=y(9),f=y(15),m=y(26),ue=y(33),ge=y(42),Ce=y(49);a(12),g(r.pageData.thumbnail==null?12:13),a(2),E("ngModel",r.pageData.thumbnail),C("ngClass",v(15,D,c.submitted&&f.errors)),a(11),C("items",r.categoryList),E("ngModel",r.pageData.categoryId),C("ngClass",v(17,D,c.submitted&&m.errors)),a(7),E("ngModel",r.pageData.name),C("ngClass",v(19,D,c.submitted&&ue.errors)),a(9),E("ngModel",r.pageData.slug),C("ngClass",v(21,D,c.submitted&&ge.errors)),a(7),E("ngModel",r.pageData.description),C("ngClass",v(23,D,c.submitted&&Ce.errors)),a(5),E("ngModel",r.pageData.statusId),a(9),C("disabled",!c.valid),a(2),C("disabled",!c.valid)}},dependencies:[oe,$,te,ie,J,ee,K,Q,ne,Y,X,se,z,Z,L]});let e=o;return e})();var pt=[{path:"",component:ce},{path:"edit/:id",component:k},{path:"new",component:k},{path:"builder",component:me},{path:"meta-data",component:de}];export{pt as STORIESCONTENT_ROUTES};
