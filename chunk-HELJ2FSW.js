import{a as we,b as Pe}from"./chunk-6UQRREJU.js";import{a as G}from"./chunk-WIQ76MVE.js";import{a as F}from"./chunk-KMBGROKD.js";import{a as V}from"./chunk-A4J2ZQI3.js";import{a as be}from"./chunk-TX4RGXHY.js";import{a as xe}from"./chunk-L32G27ZM.js";import{d as ue}from"./chunk-SOWNCCG4.js";import{a as Te}from"./chunk-KSLAI2AB.js";import{b as fe,m as j}from"./chunk-DYQSPWX7.js";import{$a as a,$b as de,Aa as l,Ac as W,Ba as C,Bb as k,Bc as q,Cc as z,Db as N,Fc as Ce,Gc as ye,Hb as pe,Hc as Se,Ib as ce,Ic as ge,Ka as x,Mc as Q,Oa as u,Pa as ne,Qa as y,T as te,Ua as oe,Wa as h,Y as ie,Ya as M,Za as L,_a as o,ab as d,ba as I,bc as me,dc as _e,eb as T,fc as R,gb as f,hb as c,ja as m,ka as _,kb as ae,lb as se,ob as Y,pa as A,pb as H,qb as J,rb as b,sb as p,sc as O,tb as S,ub as re,uc as he,vb as le,vc as ve,xb as w,yb as P,yc as U,zb as D,zc as B}from"./chunk-FCI7FGJ6.js";import"./chunk-WWX6BADO.js";var E=class{constructor(){this.positionTypesId="",this.positionTypesName="",this.positionTypesStatusId=1,this.positionTypesIsActive=0,this.positionTypesIsDelete=0,this.positionTypesDeleteReason=""}};var Z=(()=>{let s=class s{constructor(e){this.apiService=e}list(e){return this.apiService.apiCall("post","designation/list",e)}edit(e){return this.apiService.apiCall("get","designation/"+e+"/edit")}addOrUpdate(e){var t="update";return e.positionTypesId==""&&(t="create"),this.apiService.apiCall("post","designation/"+t,e)}updateActiveFlag(e){return this.apiService.apiCall("post","designation/flag/active/update",e)}updateDeleteFlag(e){return this.apiService.apiCall("post","designation/flag/delete/update",e)}};s.\u0275fac=function(t){return new(t||s)(ie(fe))},s.\u0275prov=te({token:s,factory:s.\u0275fac,providedIn:"root"});let i=s;return i})();var Ae=(i,s)=>s.id,X=i=>({"is-invalid":i});function Ne(i,s){i&1&&(o(0,"div"),p(1," field is required. "),a())}function Re(i,s){if(i&1&&(o(0,"option",23),p(1),a()),i&2){let n=s.$implicit;y("value",n.id),l(),S(n.name)}}function Oe(i,s){if(i&1){let n=T();o(0,"div",15)(1,"label",27),p(2,"Reason For Delete "),o(3,"span",17),p(4,"*"),a()(),o(5,"textarea",28,3),D("ngModelChange",function(t){m(n);let r=c(3);return P(r.positionData.positionTypesDeleteReason,t)||(r.positionData.positionTypesDeleteReason=t),_(t)}),a(),o(7,"div",19),p(8," Reason field is required. "),a()()}if(i&2){let n=b(6);c();let e=b(2),t=c(2);l(5),w("ngModel",t.positionData.positionTypesDeleteReason),y("ngClass",N(2,X,e.submitted&&n.errors&&t.positionData.positionTypesIsDelete==1))}}function je(i,s){if(i&1){let n=T();o(0,"div")(1,"form",12,0),f("ngSubmit",function(){m(n);let t=b(2);return _(t.form.valid)}),o(3,"div",13)(4,"div",14)(5,"div",15)(6,"label",16),p(7,"Name "),o(8,"span",17),p(9,"*"),a()(),o(10,"input",18,1),D("ngModelChange",function(t){m(n);let r=c(2);return P(r.positionData.positionTypesName,t)||(r.positionData.positionTypesName=t),_(t)}),a(),o(12,"div",19),p(13," Name field is required. "),a(),u(14,Ne,2,0,"div",9),a(),o(15,"div",20)(16,"label",21),p(17,"Status "),o(18,"span",17),p(19,"*"),a()(),o(20,"select",22,2),D("ngModelChange",function(t){m(n);let r=c(2);return P(r.positionData.positionTypesStatusId,t)||(r.positionData.positionTypesStatusId=t),_(t)}),f("change",function(){m(n);let t=c(2);return _(t.onStatusChanged())}),M(22,Re,2,2,"option",23,Ae),a(),o(24,"div",19),p(25," Status field is required. "),a()(),u(26,Oe,9,4,"div",15),a()(),o(27,"div",24)(28,"button",25),f("click",function(){m(n);let t=c(2);return _(t.positionDataUpdate(!1))}),p(29,"Save"),a(),o(30,"button",26),f("click",function(){m(n);let t=c(2);return _(t.positionDataUpdate(!0))}),p(31,"Save & Exit"),a()()()()}if(i&2){let n=b(2),e=b(11),t=b(21),r=c(2);l(10),w("ngModel",r.positionData.positionTypesName),y("ngClass",N(8,X,n.submitted&&(e.errors||r.positionData.positionTypesName.length>2))),l(4),y("ngIf",n.submitted&&r.positionData.positionTypesName.length>2),l(6),w("ngModel",r.positionData.positionTypesStatusId),y("ngClass",N(10,X,n.submitted&&t.errors)),l(2),L(r.statusList),l(4),h(r.positionData.positionTypesIsDelete?26:-1),l(2),y("disabled",!n.valid),l(2),y("disabled",!n.valid)}}function Ue(i,s){if(i&1){let n=T();o(0,"div",4)(1,"div",5)(2,"span",6),p(3,"Position Type"),a(),o(4,"button",7),f("click",function(){m(n);let t=c();return _(t.closeCanvas())}),a()(),o(5,"div",8),u(6,je,32,12,"div",9),pe(7,"async"),d(8,"app-loader",10),a()(),d(9,"div",11)}if(i&2){let n=c();l(6),y("ngIf",!ce(7,2,n.loader.isLoading)&&n.loaderType()=="canvas"),l(2),y("loaderType",n.loaderType)}}var $=(()=>{let s=class s{constructor(e,t,r,v,g){this.positionTypeService=e,this.statusService=t,this.commonService=r,this.canvasService=v,this.loader=g,this.parentListRefresh=new A,this.positionData=new E,this.statusList=[],this.isShowCanvas=!1,this.positionTypesId="",this.isFormSubmit=!1,this.loaderType=x("canvas")}ngOnInit(){}resetStatus(){(this.positionData.positionTypesStatusId==0||this.positionData.positionTypesStatusId==null)&&(this.positionData.positionTypesStatusId=this.statusService.defaultValue())}ChildDataEdit(e){this.positionData=new E,this.canvasService.canvasGetForMasterEdit.subscribe(t=>this.isShowCanvas=t),e!=""?(this.statusList=this.statusService.list(!0),this.resetStatus(),this.getPositionData(e)):(this.statusList=this.statusService.list(!1),this.resetStatus())}getPositionData(e){this.isFormSubmit=!1,this.positionTypeService.edit(e).subscribe({next:t=>{t!=null?t.success&&(t.response.length>0?(this.positionData=t.response[0],this.positionData.positionTypesStatusId=this.statusService.getIdByFlag(this.positionData.positionTypesIsActive,this.positionData.positionTypesIsDelete)):this.positionData=new E):this.commonService.errorMessage(t.message)}})}positionDataUpdate(e){this.positionData.positionTypesName.length>50||this.positionData!=null&&(this.onStatusChanged(),this.isFormSubmit=!0,this.positionTypeService.addOrUpdate(this.positionData).subscribe({next:t=>{t!=null?t.success&&(this.commonService.successMessage(t.message),this.positionData=new E,this.resetStatus(),e&&this.closeCanvas()):this.commonService.errorMessage(t.message)}}))}onStatusChanged(){var e=this.statusService.dataById(this.positionData.positionTypesStatusId);this.positionData.positionTypesIsActive=e.isActive,this.positionData.positionTypesIsDelete=e.isDelete}closeCanvas(){this.canvasService.canvasSetForMasterEdit(!1),this.isFormSubmit?this.parentListRefresh.emit():this.eventFrom()=="view"&&this.canvasService.canvasSetForMasterView(!0)}};s.\u0275fac=function(t){return new(t||s)(C(Z),C(V),C(j),C(F),C(O))},s.\u0275cmp=I({type:s,selectors:[["app-position-type-edit"]],inputs:{eventFrom:"eventFrom"},outputs:{parentListRefresh:"parentListRefresh"},standalone:!0,features:[k],decls:1,vars:1,consts:[["f","ngForm"],["positionTypesName","ngModel"],["positionTypesStatusId","ngModel"],["positionTypesDeleteReason","ngModel"],["tabindex","-1","id","offcanvasRightPositionEdit","aria-labelledby","offcanvasRightLabel","data-bs-backdrop","static",1,"offcanvas","offcanvas-end","show",2,"width","500px"],[1,"offcanvas-header","common-header"],[1,"offcanvas-title"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close",3,"click"],[1,"offcanvas-body","small"],[4,"ngIf"],[3,"loaderType"],[1,"offcanvas-backdrop","fade","show"],["novalidate","",3,"ngSubmit"],[1,"card"],[1,"row","card-body","g-3"],[1,"col-12","col-sm-12"],["for","txtName",1,"form-label"],[1,"text-danger"],["type","text","id","txtName","placeholder","Name","name","positionTypesName","required","",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","ngClass"],[1,"invalid-feedback"],[1,"col-md-12"],["for","ddStatus",1,"form-label"],["id","ddStatus","name","positionTypesStatusId","required","",1,"form-select","form-select-sm",3,"ngModelChange","change","ngModel","ngClass"],[3,"value"],[1,"my-3"],["type","submit",1,"btn","common-btn","common-btn-width","me-1",3,"click","disabled"],["type","submit",1,"btn","btn-sm","common-btn-second","common-btn-width-outline",3,"click","disabled"],["for","txtReason",1,"form-label"],["id","txtReason","placeholder","Reason","name","positionTypesDeleteReason","required","","rows","2",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","ngClass"]],template:function(t,r){t&1&&u(0,Ue,10,4),t&2&&h(r.isShowCanvas?0:-1)},dependencies:[R,de,me,_e,Q,z,ye,Se,ve,Ce,U,B,ge,q,W,G]});let i=s;return i})();function Be(i,s){if(i&1){let n=T();o(0,"div",0)(1,"div",1)(2,"span",2),p(3,"Position Type"),a(),o(4,"button",3),f("click",function(){m(n);let t=c();return _(t.closeCanvas())}),a()(),o(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"a",8),f("click",function(){m(n);let t=c();return _(t.editPositionType(t.positionObj.positionTypesId))}),d(10,"i",9),p(11," Edit"),a()()(),o(12,"div",6)(13,"div",10)(14,"span",11),p(15,"Name"),a()(),o(16,"div",12)(17,"span"),p(18),a()()(),o(19,"div",6)(20,"div",10)(21,"span",11),p(22,"Created At"),a()(),o(23,"div",12)(24,"span"),p(25),a()()(),o(26,"div",6)(27,"div",10)(28,"span",11),p(29,"Created By"),a()(),o(30,"div",12)(31,"span"),p(32),a()()(),o(33,"div",6)(34,"div",10)(35,"span",11),p(36,"Updated At"),a()(),o(37,"div",12)(38,"span"),p(39),a()()(),o(40,"div",6)(41,"div",10)(42,"span",11),p(43,"Updated By"),a()(),o(44,"div",12)(45,"span"),p(46),a()()(),o(47,"div",6)(48,"div",10)(49,"span",11),p(50,"Status"),a()(),o(51,"div",12)(52,"span"),p(53),a()()()()()(),d(54,"div",13)}if(i&2){let n=c();l(18),S(n.positionObj.positionTypesName),l(7),S(n.positionObj.positionTypesCreatedAt),l(7),S(n.positionObj.positionTypesCreatedBy),l(7),S(n.positionObj.positionTypesUpdatedAt),l(7),S(n.positionObj.positionTypesUpdatedBy),l(6),oe("btn btn-",n.filteredStatusObj.css," btn-sm common-btn1"),l(),S(n.filteredStatusObj.name)}}var ee=(()=>{let s=class s{constructor(e,t){this.canvasService=e,this.statusService=t,this.editPosition=new A,this.positionObj={},this.filteredStatusObj={},this.isShowCanvas=!1}ngOnInit(){}closeCanvas(){this.canvasService.canvasSetForMasterView(!1)}setViewData(e){this.canvasService.canvasGetForMasterView.subscribe(r=>this.isShowCanvas=r),this.positionObj=e;var t=this.statusService.getIdByFlag(e.positionTypesIsActive,0);this.filteredStatusObj=this.statusService.dataById(t)}editPositionType(e){this.canvasService.canvasSetForMasterView(!1),this.editPosition.emit(e)}};s.\u0275fac=function(t){return new(t||s)(C(F),C(V))},s.\u0275cmp=I({type:s,selectors:[["app-position-type-view"]],outputs:{editPosition:"editPosition"},standalone:!0,features:[k],decls:1,vars:1,consts:[["tabindex","-1","id","offcanvasRightPositionView","aria-labelledby","offcanvasRightLabel","data-bs-backdrop","static",1,"offcanvas","offcanvas-end","show",2,"width","500px"],[1,"offcanvas-header","common-header"],[1,"offcanvas-title"],["type","button",1,"btn-close",3,"click"],[1,"offcanvas-body","small"],[1,"card-body","small"],[1,"row"],[1,"col-12","col-lg-12","text-end"],[1,"btn","common-btn",3,"click"],[1,"fa","fa-pencil"],[1,"col-12","col-lg-6"],[1,"fw-semibold"],[1,"col-12","col-lg-6","mb-2"],[1,"offcanvas-backdrop","fade","show"]],template:function(t,r){t&1&&u(0,Be,55,9),t&2&&h(r.isShowCanvas?0:-1)}});let i=s;return i})();var We=(i,s)=>s.positionTypesId,qe=(i,s)=>s.name;function ze(i,s){if(i&1){let n=T();o(0,"button",28),f("click",function(){m(n);let t=c(2);return _(t.openFilter())}),d(1,"i",29),a()}}function Qe(i,s){if(i&1){let n=T();o(0,"button",30),f("click",function(){m(n);let t=c(2);return _(t.openFilter())}),o(1,"i",29),d(2,"i",31),a()()}}function Ge(i,s){if(i&1&&(o(0,"span"),p(1),a()),i&2){let n=s.$implicit;l(),le("",n.dispalyName," : ",n.dispalyValue," ")}}function Ze(i,s){if(i&1&&(o(0,"div",19),M(1,Ge,2,2,"span",null,qe),a()),i&2){let n=c(2);l(),L(n.listDefaultParams.filterConditions)}}function Ye(i,s){i&1&&d(0,"i",32)}function He(i,s){i&1&&d(0,"i",33)}function Je(i,s){if(i&1&&(o(0,"span"),u(1,Ye,1,0,"i",32)(2,He,1,0,"i",33),a()),i&2){let n=c(2);l(),h(n.listDefaultParams.sortingType=="asc"?1:2)}}function Ke(i,s){i&1&&d(0,"i",32)}function Xe(i,s){i&1&&d(0,"i",33)}function $e(i,s){if(i&1&&(o(0,"span"),u(1,Ke,1,0,"i",32)(2,Xe,1,0,"i",33),a()),i&2){let n=c(2);l(),h(n.listDefaultParams.sortingType=="asc"?1:2)}}function et(i,s){i&1&&d(0,"i",32)}function tt(i,s){i&1&&d(0,"i",33)}function it(i,s){if(i&1&&(o(0,"span"),u(1,et,1,0,"i",32)(2,tt,1,0,"i",33),a()),i&2){let n=c(2);l(),h(n.listDefaultParams.sortingType=="asc"?1:2)}}function nt(i,s){i&1&&d(0,"i",32)}function ot(i,s){i&1&&d(0,"i",33)}function at(i,s){if(i&1&&(o(0,"span"),u(1,nt,1,0,"i",32)(2,ot,1,0,"i",33),a()),i&2){let n=c(2);l(),h(n.listDefaultParams.sortingType=="asc"?1:2)}}function st(i,s){i&1&&d(0,"i",32)}function rt(i,s){i&1&&d(0,"i",33)}function lt(i,s){if(i&1&&(o(0,"span"),u(1,st,1,0,"i",32)(2,rt,1,0,"i",33),a()),i&2){let n=c(2);l(),h(n.listDefaultParams.sortingType=="asc"?1:2)}}function pt(i,s){i&1&&d(0,"i",32)}function ct(i,s){i&1&&d(0,"i",33)}function dt(i,s){if(i&1&&(o(0,"span"),u(1,pt,1,0,"i",32)(2,ct,1,0,"i",33),a()),i&2){let n=c(2);l(),h(n.listDefaultParams.sortingType=="asc"?1:2)}}function mt(i,s){if(i&1){let n=T();o(0,"tr")(1,"td")(2,"div",23)(3,"input",34),D("ngModelChange",function(t){let r=m(n).$implicit;return P(r.isSelected,t)||(r.isSelected=t),_(t)}),f("change",function(){m(n);let t=c(2);return _(t.checkUncheckSingle())}),a()()(),o(4,"td"),p(5),a(),o(6,"td"),p(7),a(),o(8,"td"),p(9),a(),o(10,"td"),p(11),a(),o(12,"td"),p(13),a(),o(14,"td")(15,"div",35)(16,"input",36),f("click",function(t){let r=m(n).$implicit,v=c(2);return _(v.updateActiveFlagData(r.positionTypesId,t))}),a()()(),o(17,"td",37)(18,"button",38),f("click",function(){let t=m(n).$implicit,r=c(2);return _(r.addOrEditPosition(t.positionTypesId))}),d(19,"i",39),a(),o(20,"button",38),f("click",function(){let t=m(n).$implicit,r=c(2);return _(r.viewPosition(t))}),d(21,"i",40),a()()()}if(i&2){let n=s.$implicit,e=c(2);l(3),ae("value",n.positionTypesId),se("id","ck-",n.positionTypesId,""),w("ngModel",n.isSelected),l(2),S(n.positionTypesName),l(2),S(e.displayDateInUserFormat(n.positionTypesCreatedAt)),l(2),S(n.positionTypesCreatedBy),l(2),S(e.displayDateInUserFormat(n.positionTypesUpdatedAt)),l(2),S(n.positionTypesUpdatedBy),l(3),ne("checked",n.positionTypesIsActive==1?!0:null)}}function _t(i,s){if(i&1&&(o(0,"tr",26)(1,"td",41),p(2),a()()),i&2){let n=c(2);l(2),re("",n.listLoadingMessage," ")}}function ut(i,s){if(i&1){let n=T();o(0,"nav",4)(1,"div",5)(2,"div")(3,"a",6),p(4,"Dashboard / "),a(),o(5,"a",7),p(6,"Designation"),a()(),o(7,"form",8)(8,"a",9),d(9,"i",10),p(10," Export "),a(),o(11,"a",11),f("click",function(){m(n);let t=c();return _(t.addOrEditPosition(""))}),d(12,"i",12),p(13,"Add"),a(),o(14,"button",13),f("click",function(){m(n);let t=c();return _(t.openDeleteConfirmation())}),d(15,"i",14),a(),u(16,ze,2,0,"button",15)(17,Qe,3,0,"button",16),a()()(),o(18,"div",17)(19,"div",18),u(20,Ze,3,0,"div",19),o(21,"div",19)(22,"div",20)(23,"table",21)(24,"thead")(25,"tr",22)(26,"th")(27,"div",23)(28,"input",24),D("ngModelChange",function(t){m(n);let r=c();return P(r.masterSelected,t)||(r.masterSelected=t),_(t)}),f("change",function(){m(n);let t=c();return _(t.checkUncheckAll())}),a()()(),o(29,"th",25),p(30,"Name "),u(31,Je,3,1,"span"),a(),o(32,"th",25),p(33,"Created At "),u(34,$e,3,1,"span"),a(),o(35,"th",25),p(36,"Created By "),u(37,it,3,1,"span"),a(),o(38,"th",25),p(39,"Updated At "),u(40,at,3,1,"span"),a(),o(41,"th",25),p(42,"Updated By "),u(43,lt,3,1,"span"),a(),o(44,"th",25),p(45,"Status "),u(46,dt,3,1,"span"),a(),o(47,"th",25),p(48,"Actions"),a()()(),o(49,"tbody"),M(50,mt,22,10,"tr",null,We),u(52,_t,3,1,"tr",26),a()()()(),o(53,"div",19)(54,"app-table-footer",27),f("parentListRefresh",function(t){m(n);let r=c();return _(r.changePageNumberAndSize(t))}),a()()()()}if(i&2){let n=c();l(16),h(n.isFilterSelected?17:16),l(4),h(n.listDefaultParams.filterConditions.length>0?20:-1),l(8),w("ngModel",n.masterSelected),l(3),h(n.listDefaultParams.sortingColumn=="name"?31:-1),l(3),h(n.listDefaultParams.sortingColumn=="createdAt"?34:-1),l(3),h(n.listDefaultParams.sortingColumn=="createdBy"?37:-1),l(3),h(n.listDefaultParams.sortingColumn=="updatedAt"?40:-1),l(3),h(n.listDefaultParams.sortingColumn=="updatedBy"?43:-1),l(3),h(n.listDefaultParams.sortingColumn=="status"?46:-1),l(4),L(n.positionArray),l(2),h(n.positionArray.length==0?52:-1),l(2),y("pageNumber",n.listDefaultParams.pageNumber)("pageSize",n.listDefaultParams.pageSize)("totalRows",n.totalRows)}}function ft(i,s){i&1&&d(0,"app-loader")}var ke=(()=>{let s=class s{constructor(e,t,r,v,g,Fe){this.positionTypeService=e,this.commonService=t,this.statusService=r,this.loaderService=v,this.canvasService=g,this.timeZoneService=Fe,this.listDefaultParams=new xe,this.positionArray=[],this.checkedList=[],this.eventFrom=x(""),this.loaderType=x(""),this.source=x("positionTypes"),this.isPopupShow=x(!1),this.isShowFilter=x(!1),this.isEditCanvasShow=!1,this.isFilterSelected=!1,this.masterSelected=!1,this.showParentPageLoader=!0,this.listLoadingMessage="Loading Data...",this.totalRows=0}ngOnInit(){this.positionList()}positionList(){this.loaderType.set("full"),this.positionTypeService.list(this.listDefaultParams).subscribe({next:e=>{e!=null?e.success&&(this.positionArray=e.response,this.listLoadingMessage="",this.totalRows=e.totalRows,this.listDefaultParams.pageNumber=e.pageNumber,this.listDefaultParams.pageSize=e.pageSize):(this.commonService.errorMessage(e.message),this.listLoadingMessage=e.message),this.showParentPageLoader=!1}})}editPositionFromView(e){this.eventFrom.set("view"),this.addOrEditPosition(e)}addOrEditPosition(e){this.eventFrom.set("edit"),this.loaderType.set("canvas"),this.canvasService.canvasSetForMasterEdit(!0),this.positionTypeEdit.ChildDataEdit(e)}viewPosition(e){this.canvasService.canvasSetForMasterView(!0),this.positionTypeView.setViewData(e)}checkUncheckAll(){for(var e=0;e<this.positionArray.length;e++)this.positionArray[e].isSelected=this.masterSelected;this.getCheckedItemList()}checkUncheckSingle(){this.masterSelected=this.positionArray.every(function(e){return e.isSelected==!0}),this.getCheckedItemList()}getCheckedItemList(){this.checkedList=[];for(var e=0;e<this.positionArray.length;e++)this.positionArray[e].isSelected&&this.checkedList.push(this.positionArray[e].positionTypesId)}updateActiveFlagData(e,t){if(this.positionArray.length>0){for(var r=0;r<this.positionArray.length;r++)if(this.positionArray[r].positionTypesId==e&&(this.positionArray[r].positionTypesIsActive=t.target.checked==!0?1:0,e!=null&&e!="")){var v={positionTypesId:e,positionTypesIsActive:this.positionArray[r].positionTypesIsActive};this.positionTypeService.updateActiveFlag(v).subscribe({next:g=>{g!=null?g.success&&this.commonService.successMessage(g.message):this.commonService.errorMessage(g.message)}})}}}openDeleteConfirmation(){if(this.checkedList.length>0){if(this.checkedList.length>50){this.commonService.warningMessage("delete-limit-crossed");return}this.isPopupShow=x(!0)}else this.commonService.warningMessage("choose-record-for-delete")}openFilter(){this.isShowFilter=x(!0)}updateDeleteFlagData(e){if(this.checkedList.length>0){var t={positionTypesId:this.checkedList.toString(),positionTypesDeleteReason:e};e!=null&&e?.trim()?(this.loaderType.set("full"),this.positionTypeService.updateDeleteFlag(t).subscribe({next:r=>{r!=null?r.success&&(this.commonService.successMessage(r.message),this.positionList()):this.commonService.errorMessage(r.message)}})):this.commonService.warningMessage("delete-reason-field-required")}else this.commonService.warningMessage("choose-record-for-delete")}changePageNumberAndSize(e){this.listDefaultParams.pageNumber=e.pageNumber,this.listDefaultParams.pageSize=e.pageSize,this.positionList()}displayDateInUserFormat(e){return this.timeZoneService.convertDateInUserFormat(e)}filterList(e){this.listDefaultParams.pageNumber=1,this.listDefaultParams.pageSize=10,this.listDefaultParams.filterConditions=e.filterConditions,this.listDefaultParams.sortingConditions=e.sortingConditions,this.listDefaultParams.sortingColumn=e.sortingColumn,this.listDefaultParams.sortingType=e.sortingType,this.listDefaultParams.filterConditions.length>0||this.listDefaultParams.sortingConditions.indexOf("name asc")<0||this.listDefaultParams.sortingConditions==""?this.isFilterSelected=!0:this.isFilterSelected=!1,this.positionList()}listRefreshAfterEdit(){this.positionList()}};s.\u0275fac=function(t){return new(t||s)(C(Z),C(j),C(V),C(O),C(F),C(Te))},s.\u0275cmp=I({type:s,selectors:[["app-position-type"]],viewQuery:function(t,r){if(t&1&&(Y($,5),Y(ee,5)),t&2){let v;H(v=J())&&(r.positionTypeEdit=v.first),H(v=J())&&(r.positionTypeView=v.first)}},standalone:!0,features:[k],decls:6,vars:7,consts:[[3,"parenteDeleteFlagData","isPopupShow"],[3,"parentListRefresh","eventFrom"],[3,"editPosition"],[3,"parentListRefresh","isShowFilter","source","listFilterObj"],[1,"navbar","bg-body-tertiary","shadow-sm"],[1,"container-fluid"],["routerLink","/dashboard",1,"text-decoration-none"],[1,"text-muted","text-decoration-none"],["role","button"],[1,"btn","common-btn","mx-1"],[1,"bi","bi-box-arrow-up"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#offcanvasRightPositionEdit","aria-controls","offcanvasRight",1,"btn","common-btn","mx-1",3,"click"],[1,"bi","bi-plus"],[1,"btn","common-btn","me-1",3,"click"],[1,"bi","bi-trash3"],[1,"btn","common-btn"],[1,"btn","btn-success","common-btn"],[1,"container-fluid","mt-3"],[1,"row"],[1,"col-12"],[1,"list-table"],[1,"table","table-sm"],[1,"table-secondary"],[1,"form-check"],["type","checkbox","value","all","id","ck-all",1,"form-check-input","mt-2",3,"ngModelChange","change","ngModel"],["scope","row"],[1,"text-center"],[3,"parentListRefresh","pageNumber","pageSize","totalRows"],[1,"btn","common-btn",3,"click"],[1,"bi","bi-funnel"],[1,"btn","btn-success","common-btn",3,"click"],[1,"bi","bi-check2-all"],[1,"bi","bi-arrow-down"],[1,"bi","bi-arrow-up"],["type","checkbox",1,"form-check-input",3,"ngModelChange","change","ngModel","value","id"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","flexSwitchCheckChecked",1,"form-check-input",3,"click"],[1,"d-flex"],["type","button",1,"btn","common-btn","me-1",3,"click"],[1,"bi","bi-pencil"],[1,"bi","bi-eye"],["colspan","8"]],template:function(t,r){t&1&&(u(0,ut,55,13)(1,ft,1,0,"app-loader"),o(2,"app-delete-confirmation-popup",0),f("parenteDeleteFlagData",function(g){return r.updateDeleteFlagData(g)}),a(),o(3,"app-position-type-edit",1),f("parentListRefresh",function(){return r.listRefreshAfterEdit()}),a(),o(4,"app-position-type-view",2),f("editPosition",function(g){return r.editPositionFromView(g)}),a(),o(5,"app-filter-master",3),f("parentListRefresh",function(g){return r.filterList(g)}),a()),t&2&&(h(r.showParentPageLoader?-1:0),l(),h(r.showParentPageLoader?1:-1),l(),y("isPopupShow",r.isPopupShow),l(),y("eventFrom",r.eventFrom),l(2),y("isShowFilter",r.isShowFilter)("source",r.source)("listFilterObj",r.listDefaultParams))},dependencies:[R,Q,z,he,U,B,q,W,ue,$,ee,G,we,be,Pe]});let i=s;return i})();var Yt=[{path:"",component:ke}];export{Yt as POSITIONTYPE_ROUTES};
