import{a as je,b as we}from"./chunk-6UQRREJU.js";import{a as Q}from"./chunk-WIQ76MVE.js";import{a as k}from"./chunk-KMBGROKD.js";import{a as F}from"./chunk-A4J2ZQI3.js";import{a as xe}from"./chunk-TX4RGXHY.js";import{a as Se}from"./chunk-L32G27ZM.js";import{d as ue}from"./chunk-SOWNCCG4.js";import{a as ge}from"./chunk-KSLAI2AB.js";import{b as be,m as O}from"./chunk-DYQSPWX7.js";import{$a as a,$b as pe,Aa as l,Ac as B,Ba as y,Bb as J,Bc as W,Cc as z,Db as L,Fc as ye,Gc as Ce,Hb as ce,Hc as ve,Ib as de,Ic as Te,Ka as S,Mc as q,Oa as b,Pa as ne,Qa as T,T as te,Ua as oe,Wa as f,Y as ie,Ya as M,Za as V,_a as o,ab as p,ba as I,bc as me,dc as _e,eb as g,fc as A,gb as u,hb as d,ja as m,ka as _,kb as ae,lb as se,ob as Z,pa as P,pb as Y,qb as H,rb as x,sb as c,sc as N,tb as C,ub as re,uc as fe,vb as le,vc as he,xb as j,yb as w,yc as R,zb as D,zc as U}from"./chunk-FCI7FGJ6.js";import"./chunk-WWX6BADO.js";var E=class{constructor(){this.jobTypesId="",this.jobTypesName="",this.jobTypesStatusId=1,this.jobTypesIsActive=0,this.jobTypesIsDelete=0,this.jobTypesDeleteReason=""}};var G=(()=>{let s=class s{constructor(e){this.apiService=e}create(e){return this.apiService.apiCall("post","jobtype/create",e)}list(e){return this.apiService.apiCall("post","jobtype/list",e)}edit(e){return this.apiService.apiCall("get","jobtype/"+e+"/edit")}addOrUpdate(e){var t="update";return e.jobTypesId==""&&(t="create"),this.apiService.apiCall("post","jobtype/"+t,e)}updateActiveFlag(e){return this.apiService.apiCall("post","jobtype/flag/active/update",e)}updateDeleteFlag(e){return this.apiService.apiCall("post","jobtype/flag/delete/update",e)}};s.\u0275fac=function(t){return new(t||s)(ie(be))},s.\u0275prov=te({token:s,factory:s.\u0275fac,providedIn:"root"});let i=s;return i})();var Pe=(i,s)=>s.id,X=i=>({"is-invalid":i});function Le(i,s){if(i&1&&(o(0,"option",23),c(1),a()),i&2){let n=s.$implicit;T("value",n.id),l(),C(n.name)}}function Ae(i,s){if(i&1){let n=g();o(0,"div",15)(1,"label",27),c(2,"Reason For Delete "),o(3,"span",17),c(4,"*"),a()(),o(5,"textarea",28,3),D("ngModelChange",function(t){m(n);let r=d(3);return w(r.jobData.jobTypesDeleteReason,t)||(r.jobData.jobTypesDeleteReason=t),_(t)}),a(),o(7,"div",19),c(8," Reason field is required. "),a()()}if(i&2){let n=x(6);d();let e=x(2),t=d(2);l(5),j("ngModel",t.jobData.jobTypesDeleteReason),T("ngClass",L(2,X,e.submitted&&n.errors&&t.jobData.jobTypesIsDelete==1))}}function Ne(i,s){if(i&1){let n=g();o(0,"div")(1,"form",12,0),u("ngSubmit",function(){m(n);let t=x(2);return _(t.form.valid)}),o(3,"div",13)(4,"div",14)(5,"div",15)(6,"label",16),c(7,"Name "),o(8,"span",17),c(9,"*"),a()(),o(10,"input",18,1),D("ngModelChange",function(t){m(n);let r=d(2);return w(r.jobData.jobTypesName,t)||(r.jobData.jobTypesName=t),_(t)}),a(),o(12,"div",19),c(13," Name field is required. "),a()(),o(14,"div",20)(15,"label",21),c(16,"Status "),o(17,"span",17),c(18,"*"),a()(),o(19,"select",22,2),D("ngModelChange",function(t){m(n);let r=d(2);return w(r.jobData.jobTypesStatusId,t)||(r.jobData.jobTypesStatusId=t),_(t)}),u("change",function(){m(n);let t=d(2);return _(t.onStatusChanged())}),M(21,Le,2,2,"option",23,Pe),a(),o(23,"div",19),c(24," Status field is required. "),a()(),b(25,Ae,9,4,"div",15),a()(),o(26,"div",24)(27,"button",25),u("click",function(){m(n);let t=d(2);return _(t.jobDataUpdate(!1))}),c(28,"Save"),a(),o(29,"button",26),u("click",function(){m(n);let t=d(2);return _(t.jobDataUpdate(!0))}),c(30,"Save & Exit"),a()()()()}if(i&2){let n=x(2),e=x(11),t=x(20),r=d(2);l(10),j("ngModel",r.jobData.jobTypesName),T("ngClass",L(7,X,n.submitted&&e.errors)),l(9),j("ngModel",r.jobData.jobTypesStatusId),T("ngClass",L(9,X,n.submitted&&t.errors)),l(2),V(r.statusList),l(4),f(r.jobData.jobTypesIsDelete?25:-1),l(2),T("disabled",!n.valid),l(2),T("disabled",!n.valid)}}function Oe(i,s){if(i&1){let n=g();o(0,"div",4)(1,"div",5)(2,"span",6),c(3,"Job Type"),a(),o(4,"button",7),u("click",function(){m(n);let t=d();return _(t.closeCanvas())}),a()(),o(5,"div",8),b(6,Ne,31,11,"div",9),ce(7,"async"),p(8,"app-loader",10),a()(),p(9,"div",11)}if(i&2){let n=d();l(6),T("ngIf",!de(7,2,n.loader.isLoading)&&n.loaderType()=="canvas"),l(2),T("loaderType",n.loaderType)}}var $=(()=>{let s=class s{constructor(e,t,r,h,v){this.jobTypeService=e,this.statusService=t,this.commonService=r,this.canvasService=h,this.loader=v,this.parentListRefresh=new P,this.jobData=new E,this.statusList=[],this.isShowCanvas=!1,this.jobTypesId="",this.isFormSubmit=!1,this.loaderType=S("canvas")}ngOnInit(){}resetStatus(){(this.jobData.jobTypesStatusId==0||this.jobData.jobTypesStatusId==null)&&(this.jobData.jobTypesStatusId=this.statusService.defaultValue())}ChildDataEdit(e){this.jobData=new E,this.canvasService.canvasGetForMasterEdit.subscribe(t=>this.isShowCanvas=t),e!=""?(this.statusList=this.statusService.list(!0),this.resetStatus(),this.getJobData(e)):(this.statusList=this.statusService.list(!1),this.resetStatus())}getJobData(e){this.isFormSubmit=!1,this.jobTypeService.edit(e).subscribe({next:t=>{t!=null?t.success&&(t.response.length>0?(this.jobData=t.response[0],this.jobData.jobTypesStatusId=this.statusService.getIdByFlag(this.jobData.jobTypesIsActive,this.jobData.jobTypesIsDelete)):this.jobData=new E):this.commonService.errorMessage(t.message)}})}jobDataUpdate(e){this.jobData!=null&&(this.onStatusChanged(),this.isFormSubmit=!0,this.jobTypeService.addOrUpdate(this.jobData).subscribe({next:t=>{t!=null?t.success&&(this.commonService.successMessage(t.message),this.jobData=new E,this.resetStatus(),e&&this.closeCanvas()):this.commonService.errorMessage(t.message)}}))}onStatusChanged(){var e=this.statusService.dataById(this.jobData.jobTypesStatusId);this.jobData.jobTypesIsActive=e.isActive,this.jobData.jobTypesIsDelete=e.isDelete}closeCanvas(){this.canvasService.canvasSetForMasterEdit(!1),this.isFormSubmit?this.parentListRefresh.emit():this.eventFrom()=="view"&&this.canvasService.canvasSetForMasterView(!0)}};s.\u0275fac=function(t){return new(t||s)(y(G),y(F),y(O),y(k),y(N))},s.\u0275cmp=I({type:s,selectors:[["app-job-type-edit"]],inputs:{eventFrom:"eventFrom"},outputs:{parentListRefresh:"parentListRefresh"},standalone:!0,features:[J],decls:1,vars:1,consts:[["f","ngForm"],["jobTypesName","ngModel"],["jobTypesStatusId","ngModel"],["jobTypesDeleteReason","ngModel"],["tabindex","-1","id","offcanvasRightJobTypeEdit",1,"offcanvas","offcanvas-end","show",2,"width","500px"],[1,"offcanvas-header","common-header"],[1,"offcanvas-title"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close",3,"click"],[1,"offcanvas-body","small"],[4,"ngIf"],[3,"loaderType"],[1,"offcanvas-backdrop","fade","show"],["novalidate","",3,"ngSubmit"],[1,"card"],[1,"row","card-body","g-3"],[1,"col-12","col-sm-12"],["for","txtName",1,"form-label"],[1,"text-danger"],["type","text","id","txtName","placeholder","Name","name","jobTypesName","required","",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","ngClass"],[1,"invalid-feedback"],[1,"col-md-12"],["for","ddStatus",1,"form-label"],["id","ddStatus","name","jobTypesStatusId","required","",1,"form-select","form-select-sm",3,"ngModelChange","change","ngModel","ngClass"],[3,"value"],[1,"my-3"],["type","submit",1,"btn","common-btn","common-btn-width","me-1",3,"click","disabled"],["type","submit",1,"btn","btn-sm","common-btn-second","common-btn-width-outline",3,"click","disabled"],["for","txtReason",1,"form-label"],["id","txtReason","placeholder","Reason","name","jobTypesDeleteReason","required","","rows","2",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","ngClass"]],template:function(t,r){t&1&&b(0,Oe,10,4),t&2&&f(r.isShowCanvas?0:-1)},dependencies:[A,pe,me,_e,q,z,Ce,ve,he,ye,R,U,Te,W,B,Q]});let i=s;return i})();function Re(i,s){if(i&1){let n=g();o(0,"div",0)(1,"div",1)(2,"span",2),c(3,"Job Type"),a(),o(4,"button",3),u("click",function(){m(n);let t=d();return _(t.closeCanvas())}),a()(),o(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"a",8),u("click",function(){m(n);let t=d();return _(t.editJobTypes(t.jobTypeObj.jobTypesId))}),p(10,"i",9),c(11," Edit"),a()()(),o(12,"div",6)(13,"div",10)(14,"span",11),c(15,"Name"),a()(),o(16,"div",12)(17,"span"),c(18),a()()(),o(19,"div",6)(20,"div",10)(21,"span",11),c(22,"Created At"),a()(),o(23,"div",12)(24,"span"),c(25),a()()(),o(26,"div",6)(27,"div",10)(28,"span",11),c(29,"Created By"),a()(),o(30,"div",12)(31,"span"),c(32),a()()(),o(33,"div",6)(34,"div",10)(35,"span",11),c(36,"Updated At"),a()(),o(37,"div",12)(38,"span"),c(39),a()()(),o(40,"div",6)(41,"div",10)(42,"span",11),c(43,"Updated By"),a()(),o(44,"div",12)(45,"span"),c(46),a()()(),o(47,"div",6)(48,"div",10)(49,"span",11),c(50,"Status"),a()(),o(51,"div",12)(52,"span"),c(53),a()()()()()(),p(54,"div",13)}if(i&2){let n=d();l(18),C(n.jobTypeObj.jobTypesName),l(7),C(n.jobTypeObj.jobTypesCreatedAt),l(7),C(n.jobTypeObj.jobTypesCreatedBy),l(7),C(n.jobTypeObj.jobTypesUpdatedAt),l(7),C(n.jobTypeObj.jobTypesUpdatedBy),l(6),oe("btn common-btn1 btn-",n.filteredStatusObj.css,""),l(),C(n.filteredStatusObj.name)}}var ee=(()=>{let s=class s{constructor(e,t){this.canvasService=e,this.statusService=t,this.editJobType=new P,this.jobTypeObj={},this.filteredStatusObj={},this.isShowCanvas=!1}ngOnInit(){}closeCanvas(){this.canvasService.canvasSetForMasterView(!1)}setViewData(e){this.canvasService.canvasGetForMasterView.subscribe(r=>this.isShowCanvas=r),this.jobTypeObj=e;var t=this.statusService.getIdByFlag(e.jobTypesIsActive,0);this.filteredStatusObj=this.statusService.dataById(t)}editJobTypes(e){this.canvasService.canvasSetForMasterView(!1),this.editJobType.emit(e)}};s.\u0275fac=function(t){return new(t||s)(y(k),y(F))},s.\u0275cmp=I({type:s,selectors:[["app-job-type-view"]],outputs:{editJobType:"editJobType"},standalone:!0,features:[J],decls:1,vars:1,consts:[["tabindex","-1","id","offcanvasRightJobTypeView","aria-labelledby","offcanvasRightLabel","data-bs-backdrop","static",1,"offcanvas","offcanvas-end","show",2,"width","500px"],[1,"offcanvas-header","common-header"],[1,"offcanvas-title"],["type","button",1,"btn-close",3,"click"],[1,"offcanvas-body","small"],[1,"card-body","small"],[1,"row"],[1,"col-12","col-lg-12","text-end"],[1,"btn","common-btn",3,"click"],[1,"fa","fa-pencil"],[1,"col-12","col-lg-6"],[1,"fw-semibold"],[1,"col-12","col-lg-6","mb-2"],[1,"offcanvas-backdrop","fade","show"]],template:function(t,r){t&1&&b(0,Re,55,9),t&2&&f(r.isShowCanvas?0:-1)}});let i=s;return i})();var Ue=(i,s)=>s.jobTypesId,Be=(i,s)=>s.name;function We(i,s){if(i&1){let n=g();o(0,"button",27),u("click",function(){m(n);let t=d(2);return _(t.openFilter())}),p(1,"i",28),a()}}function ze(i,s){if(i&1){let n=g();o(0,"button",29),u("click",function(){m(n);let t=d(2);return _(t.openFilter())}),o(1,"i",28),p(2,"i",30),a()()}}function qe(i,s){if(i&1&&(o(0,"span"),c(1),a()),i&2){let n=s.$implicit;l(),le("",n.dispalyName," : ",n.dispalyValue," ")}}function Qe(i,s){if(i&1&&(o(0,"div",18),M(1,qe,2,2,"span",null,Be),a()),i&2){let n=d(2);l(),V(n.listDefaultParams.filterConditions)}}function Ge(i,s){i&1&&p(0,"i",31)}function Ze(i,s){i&1&&p(0,"i",32)}function Ye(i,s){if(i&1&&(o(0,"span"),b(1,Ge,1,0,"i",31)(2,Ze,1,0,"i",32),a()),i&2){let n=d(2);l(),f(n.listDefaultParams.sortingType=="asc"?1:2)}}function He(i,s){i&1&&p(0,"i",31)}function Ke(i,s){i&1&&p(0,"i",32)}function Xe(i,s){if(i&1&&(o(0,"span"),b(1,He,1,0,"i",31)(2,Ke,1,0,"i",32),a()),i&2){let n=d(2);l(),f(n.listDefaultParams.sortingType=="asc"?1:2)}}function $e(i,s){i&1&&p(0,"i",31)}function et(i,s){i&1&&p(0,"i",32)}function tt(i,s){if(i&1&&(o(0,"span"),b(1,$e,1,0,"i",31)(2,et,1,0,"i",32),a()),i&2){let n=d(2);l(),f(n.listDefaultParams.sortingType=="asc"?1:2)}}function it(i,s){i&1&&p(0,"i",31)}function nt(i,s){i&1&&p(0,"i",32)}function ot(i,s){if(i&1&&(o(0,"span"),b(1,it,1,0,"i",31)(2,nt,1,0,"i",32),a()),i&2){let n=d(2);l(),f(n.listDefaultParams.sortingType=="asc"?1:2)}}function at(i,s){i&1&&p(0,"i",31)}function st(i,s){i&1&&p(0,"i",32)}function rt(i,s){if(i&1&&(o(0,"span"),b(1,at,1,0,"i",31)(2,st,1,0,"i",32),a()),i&2){let n=d(2);l(),f(n.listDefaultParams.sortingType=="asc"?1:2)}}function lt(i,s){i&1&&p(0,"i",31)}function ct(i,s){i&1&&p(0,"i",32)}function dt(i,s){if(i&1&&(o(0,"span"),b(1,lt,1,0,"i",31)(2,ct,1,0,"i",32),a()),i&2){let n=d(2);l(),f(n.listDefaultParams.sortingType=="asc"?1:2)}}function pt(i,s){if(i&1){let n=g();o(0,"tr")(1,"td")(2,"div",22)(3,"input",33),D("ngModelChange",function(t){let r=m(n).$implicit;return w(r.isSelected,t)||(r.isSelected=t),_(t)}),u("change",function(){m(n);let t=d(2);return _(t.checkUncheckSingle())}),a()()(),o(4,"td"),c(5),a(),o(6,"td"),c(7),a(),o(8,"td"),c(9),a(),o(10,"td"),c(11),a(),o(12,"td"),c(13),a(),o(14,"td")(15,"div",34)(16,"input",35),u("click",function(t){let r=m(n).$implicit,h=d(2);return _(h.updateActiveFlagData(r.jobTypesId,t))}),a()()(),o(17,"td")(18,"button",36),u("click",function(){let t=m(n).$implicit,r=d(2);return _(r.addOrEditJobType(t.jobTypesId))}),p(19,"i",37),a(),o(20,"button",36),u("click",function(){let t=m(n).$implicit,r=d(2);return _(r.viewJobType(t))}),p(21,"i",38),a()()()}if(i&2){let n=s.$implicit,e=d(2);l(3),ae("value",n.jobTypesId),se("id","ck-",n.jobTypesId,""),j("ngModel",n.isSelected),l(2),C(n.jobTypesName),l(2),C(e.displayDateInUserFormat(n.jobTypesCreatedAt)),l(2),C(n.jobTypesCreatedBy),l(2),C(e.displayDateInUserFormat(n.jobTypesUpdatedAt)),l(2),C(n.jobTypesUpdatedBy),l(3),ne("checked",n.jobTypesIsActive==1?!0:null)}}function mt(i,s){if(i&1&&(o(0,"tr",25)(1,"td",39),c(2),a()()),i&2){let n=d(2);l(2),re("",n.listLoadingMessage," ")}}function _t(i,s){if(i&1){let n=g();o(0,"nav",4)(1,"div",5)(2,"div")(3,"a",6),c(4,"Dashboard / "),a(),o(5,"a",7),c(6,"Job Type"),a()(),o(7,"form",8)(8,"a",9),p(9,"i",10),c(10," Export "),a(),o(11,"a",11),u("click",function(){m(n);let t=d();return _(t.addOrEditJobType(""))}),p(12,"i",12),c(13,"Add"),a(),o(14,"button",13),u("click",function(){m(n);let t=d();return _(t.openDeleteConfirmation())}),p(15,"i",14),a(),b(16,We,2,0,"button",9)(17,ze,3,0,"button",15),a()()(),o(18,"div",16)(19,"div",17),b(20,Qe,3,0,"div",18),o(21,"div",18)(22,"div",19)(23,"table",20)(24,"thead")(25,"tr",21)(26,"th")(27,"div",22)(28,"input",23),D("ngModelChange",function(t){m(n);let r=d();return w(r.masterSelected,t)||(r.masterSelected=t),_(t)}),u("change",function(){m(n);let t=d();return _(t.checkUncheckAll())}),a()()(),o(29,"th",24),c(30,"Name "),b(31,Ye,3,1,"span"),a(),o(32,"th",24),c(33,"Created At "),b(34,Xe,3,1,"span"),a(),o(35,"th",24),c(36,"Created By "),b(37,tt,3,1,"span"),a(),o(38,"th",24),c(39,"Updated At "),b(40,ot,3,1,"span"),a(),o(41,"th",24),c(42,"Updated By "),b(43,rt,3,1,"span"),a(),o(44,"th",24),c(45,"Status "),b(46,dt,3,1,"span"),a(),o(47,"th",24),c(48,"Actions"),a()()(),o(49,"tbody"),M(50,pt,22,10,"tr",null,Ue),b(52,mt,3,1,"tr",25),a()()()(),o(53,"div",18)(54,"app-table-footer",26),u("parentListRefresh",function(t){m(n);let r=d();return _(r.changePageNumberAndSize(t))}),a()()()()}if(i&2){let n=d();l(16),f(n.isFilterSelected?17:16),l(4),f(n.listDefaultParams.filterConditions.length>0?20:-1),l(8),j("ngModel",n.masterSelected),l(3),f(n.listDefaultParams.sortingColumn=="name"?31:-1),l(3),f(n.listDefaultParams.sortingColumn=="createdAt"?34:-1),l(3),f(n.listDefaultParams.sortingColumn=="createdBy"?37:-1),l(3),f(n.listDefaultParams.sortingColumn=="updatedAt"?40:-1),l(3),f(n.listDefaultParams.sortingColumn=="updatedBy"?43:-1),l(3),f(n.listDefaultParams.sortingColumn=="status"?46:-1),l(4),V(n.jobTypeArray),l(2),f(n.jobTypeArray.length==0?52:-1),l(2),T("pageNumber",n.listDefaultParams.pageNumber)("pageSize",n.listDefaultParams.pageSize)("totalRows",n.totalRows)}}function ut(i,s){i&1&&p(0,"app-loader")}var Je=(()=>{let s=class s{constructor(e,t,r,h,v,ke){this.jobTypeService=e,this.commonService=t,this.statusService=r,this.loaderService=h,this.canvasService=v,this.timeZoneService=ke,this.listDefaultParams=new Se,this.jobTypeArray=[],this.checkedList=[],this.eventFrom=S(""),this.loaderType=S(""),this.source=S(" jobType"),this.isPopupShow=S(!1),this.isShowFilter=S(!1),this.isEditCanvasShow=!1,this.isFilterSelected=!1,this.masterSelected=!1,this.showParentPageLoader=!0,this.listLoadingMessage="Loading Data...",this.totalRows=0}ngOnInit(){this.jobTypeList()}jobTypeList(){this.loaderType.set("full"),this.jobTypeService.list(this.listDefaultParams).subscribe({next:e=>{e!=null?e.success&&e.response.length>0&&(this.jobTypeArray=e.response,this.listLoadingMessage="",this.totalRows=e.totalRows,this.listDefaultParams.pageNumber=e.pageNumber,this.listDefaultParams.pageSize=e.pageSize):(this.commonService.errorMessage(e.message),this.listLoadingMessage=e.message),this.showParentPageLoader=!1}})}editJobTypeFromView(e){this.eventFrom.set("view"),this.addOrEditJobType(e)}addOrEditJobType(e){this.eventFrom.set("edit"),this.loaderType.set("canvas"),this.canvasService.canvasSetForMasterEdit(!0),this.jobTypeEdit.ChildDataEdit(e)}viewJobType(e){this.canvasService.canvasSetForMasterView(!0),this.jobTypeView.setViewData(e)}checkUncheckAll(){debugger;for(var e=0;e<this.jobTypeArray.length;e++)this.jobTypeArray[e].isSelected=this.masterSelected;this.getCheckedItemList()}checkUncheckSingle(){this.masterSelected=this.jobTypeArray.every(function(e){return e.isSelected==!0}),this.getCheckedItemList()}getCheckedItemList(){this.checkedList=[];for(var e=0;e<this.jobTypeArray.length;e++)this.jobTypeArray[e].isSelected&&this.checkedList.push(this.jobTypeArray[e].jobTypesId)}updateActiveFlagData(e,t){if(this.jobTypeArray.length>0){for(var r=0;r<this.jobTypeArray.length;r++)if(this.jobTypeArray[r].jobTypesId==e&&(this.jobTypeArray[r].jobTypesIsActive=t.target.checked==!0?1:0,e!=null&&e!="")){var h={jobTypesId:e,jobTypesIsActive:this.jobTypeArray[r].jobTypesIsActive};this.jobTypeService.updateActiveFlag(h).subscribe({next:v=>{v!=null?v.success&&this.commonService.successMessage(v.message):this.commonService.errorMessage(v.message)}})}}}openDeleteConfirmation(){if(this.checkedList.length>0){if(this.checkedList.length>50){this.commonService.warningMessage("delete-limit-crossed");return}this.isPopupShow=S(!0)}else this.commonService.warningMessage("choose-record-for-delete")}openFilter(){this.isShowFilter=S(!0)}updateDeleteFlagData(e){if(this.checkedList.length>0){var t={jobTypesId:this.checkedList.toString(),jobTypesDeleteReason:e};e!=null&&e?.trim()?(this.loaderType.set("full"),this.jobTypeService.updateDeleteFlag(t).subscribe({next:r=>{r!=null?r.success&&(this.commonService.successMessage(r.message),this.jobTypeList()):this.commonService.errorMessage(r.message)}})):this.commonService.warningMessage("delete-reason-field-required")}else this.commonService.warningMessage("choose-record-for-delete")}displayDateInUserFormat(e){return this.timeZoneService.convertDateInUserFormat(e)}changePageNumberAndSize(e){this.listDefaultParams.pageNumber=e.pageNumber,this.listDefaultParams.pageSize=e.pageSize,this.jobTypeList()}filterList(e){this.listDefaultParams.pageNumber=1,this.listDefaultParams.pageSize=10,this.listDefaultParams.filterConditions=e.filterConditions,this.listDefaultParams.sortingConditions=e.sortingConditions,this.listDefaultParams.sortingColumn=e.sortingColumn,this.listDefaultParams.sortingType=e.sortingType,this.listDefaultParams.filterConditions.length>0||this.listDefaultParams.sortingConditions.indexOf("name asc")<0||this.listDefaultParams.sortingConditions==""?this.isFilterSelected=!0:this.isFilterSelected=!1,this.jobTypeList()}listRefreshAfterEdit(){this.jobTypeList()}};s.\u0275fac=function(t){return new(t||s)(y(G),y(O),y(F),y(N),y(k),y(ge))},s.\u0275cmp=I({type:s,selectors:[["app-job-type"]],viewQuery:function(t,r){if(t&1&&(Z($,5),Z(ee,5)),t&2){let h;Y(h=H())&&(r.jobTypeEdit=h.first),Y(h=H())&&(r.jobTypeView=h.first)}},standalone:!0,features:[J],decls:6,vars:7,consts:[[3,"parenteDeleteFlagData","isPopupShow"],[3,"parentListRefresh","eventFrom"],[3,"editJobType"],[3,"parentListRefresh","isShowFilter","source","listFilterObj"],[1,"navbar","bg-body-tertiary","shadow-sm"],[1,"container-fluid"],["routerLink","/dashboard",1,"text-decoration-none"],[1,"text-muted","text-decoration-none"],["role","button"],[1,"btn","common-btn"],[1,"bi","bi-box-arrow-up"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#offcanvasRightJobTypeEdit","aria-controls","offcanvasRight",1,"btn","common-btn","mx-1",3,"click"],[1,"bi","bi-plus"],[1,"btn","common-btn","me-1",3,"click"],[1,"bi","bi-trash3"],[1,"btn","btn-success","common-btn"],[1,"container-fluid","mt-3"],[1,"row"],[1,"col-12"],[1,"list-table"],[1,"table","table-sm"],[1,"table-secondary"],[1,"form-check"],["type","checkbox","value","all","id","ck-all",1,"form-check-input","mt-2",3,"ngModelChange","change","ngModel"],["scope","row"],[1,"text-center"],[3,"parentListRefresh","pageNumber","pageSize","totalRows"],[1,"btn","common-btn",3,"click"],[1,"bi","bi-funnel"],[1,"btn","btn-success","common-btn",3,"click"],[1,"bi","bi-check2-all"],[1,"bi","bi-arrow-down"],[1,"bi","bi-arrow-up"],["type","checkbox",1,"form-check-input",3,"ngModelChange","change","ngModel","value","id"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","flexSwitchCheckChecked",1,"form-check-input",3,"click"],["type","button",1,"btn","common-btn","me-1",3,"click"],[1,"bi","bi-pencil"],[1,"bi","bi-eye"],["colspan","8"]],template:function(t,r){t&1&&(b(0,_t,55,13)(1,ut,1,0,"app-loader"),o(2,"app-delete-confirmation-popup",0),u("parenteDeleteFlagData",function(v){return r.updateDeleteFlagData(v)}),a(),o(3,"app-job-type-edit",1),u("parentListRefresh",function(){return r.listRefreshAfterEdit()}),a(),o(4,"app-job-type-view",2),u("editJobType",function(v){return r.editJobTypeFromView(v)}),a(),o(5,"app-filter-master",3),u("parentListRefresh",function(v){return r.filterList(v)}),a()),t&2&&(f(r.showParentPageLoader?-1:0),l(),f(r.showParentPageLoader?1:-1),l(),T("isPopupShow",r.isPopupShow),l(),T("eventFrom",r.eventFrom),l(2),T("isShowFilter",r.isShowFilter)("source",r.source)("listFilterObj",r.listDefaultParams))},dependencies:[A,q,z,fe,R,U,W,B,ue,$,ee,Q,je,xe,we],styles:[".page-link[_ngcontent-%COMP%]{font-size:small}@media (min-width: 320px){.fixed-bottom[_ngcontent-%COMP%]{z-index:1}.fixed-bottom[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{justify-content:center}}@media (min-width: 768px){.fixed-bottom[_ngcontent-%COMP%]{position:fixed;right:0;bottom:0;left:25%;z-index:1}.fixed-bottom[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{justify-content:end}}@media (min-width: 992px){.fixed-bottom[_ngcontent-%COMP%]{position:fixed;right:0;bottom:0;left:16.66666667%;z-index:1}.fixed-bottom[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{justify-content:end}}"]});let i=s;return i})();var Gt=[{path:"",component:Je}];export{Gt as JOBTYPE_ROUTES};
