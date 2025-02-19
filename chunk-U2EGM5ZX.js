import{a as B}from"./chunk-QJUVNZXF.js";import{b as N,m as z}from"./chunk-DYQSPWX7.js";import{$a as a,Aa as d,Ba as m,Bb as w,Bc as R,Dc as P,Ic as A,Mc as H,Oa as g,Qa as q,T as u,U as D,W as V,Wa as h,Y as F,Ya as T,Za as _,_a as l,ba as E,ca as O,eb as b,fc as I,g as x,hb as r,ja as f,ka as p,kb as c,sb as S,ub as L,vc as j,xb as v,yb as y,yc as k,zb as C}from"./chunk-FCI7FGJ6.js";var G=(()=>{let e=class e{constructor(){this.showForDynamicDataEdit=new x(!1),this.pageGetForDynamicDataEdit=this.showForDynamicDataEdit.asObservable()}pageSetForDynamicDataEdit(s){this.showForDynamicDataEdit.next(s)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var W={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"],["table"]]},$=new V("config",{providedIn:"root",factory:()=>({modules:W})});var J=(()=>{let e=class e{static forRoot(s){return{ngModule:e,providers:[{provide:$,useValue:s}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=O({type:e}),e.\u0275inj=D({});let t=e;return t})();var U=(()=>{let e=class e{constructor(s){this.apiService=s}getDynamicData(s,i){return this.apiService.apiCall("get","dynamic_fields/data/list?entityType="+s+"&entityId="+i)}};e.\u0275fac=function(i){return new(i||e)(F(N))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Z(t,e){return this.dynamicData.id}function X(t,e){if(t&1){let n=b();l(0,"input",8,0),C("ngModelChange",function(i){f(n);let o=r().$implicit;return y(o.fieldValue,i)||(o.fieldValue=i),p(i)}),a()}if(t&2){let n=r().$implicit;c("id",n.fieldName),c("placeholder",n.displayName),v("ngModel",n.fieldValue)}}function Y(t,e){if(t&1){let n=b();l(0,"input",9,0),C("ngModelChange",function(i){f(n);let o=r().$implicit;return y(o.fieldValue,i)||(o.fieldValue=i),p(i)}),a()}if(t&2){let n=r().$implicit;c("id",n.fieldName),c("placeholder",n.displayName),v("ngModel",n.fieldValue)}}function ee(t,e){if(t&1){let n=b();l(0,"ng-select",10,0),C("ngModelChange",function(i){f(n);let o=r().$implicit;return y(o.fieldValue,i)||(o.fieldValue=i),p(i)}),a()}if(t&2){let n=r().$implicit,s=r(2);c("id",n.fieldName),c("placeholder",n.displayName),q("items",s.statusList),v("ngModel",n.fieldValue)}}function te(t,e){if(t&1&&(l(0,"div",2)(1,"label",3),S(2),l(3,"span",4),S(4,"*"),a()(),g(5,X,2,3,"input",5)(6,Y,2,3,"input",6)(7,ee,2,4,"ng-select",7),a()),t&2){let n=e.$implicit;d(2),L("",n.displayName," "),d(3),h(n.dataType=="alphanumeric"?5:-1),d(),h(n.dataType=="number"?6:-1),d(),h(n.dataType=="dropdown"?7:-1)}}function ie(t,e){if(t&1&&(l(0,"div",1),T(1,te,8,4,"div",2,Z,!0),a()),t&2){let n=r();d(),_(n.dynamicData)}}var _e=(()=>{let e=class e{constructor(s,i,o){this.dynamicFieldDataService=s,this.dataTransferService=i,this.commonService=o,this.dynamicData=[],this.statusList=[],this.editorConfig={theme:"snow",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],["bold","italic","underline"],["link"],[{align:[]}],["image","blockquote"]]}}}ngOnInit(){}fetchDynamicFields(s,i){this.dynamicDataList(s,i),this.dataTransferService.pageGetForDynamicDataEdit.subscribe(o=>this.isShowPage=o)}getDynamicFieldsValue(){return this.dynamicData}dynamicDataList(s,i){this.dynamicFieldDataService.getDynamicData(s,i).subscribe({next:o=>{o!=null?o.success&&(this.dynamicData=o.response):this.commonService.errorMessage(o.message)}})}};e.\u0275fac=function(i){return new(i||e)(m(U),m(G),m(z))},e.\u0275cmp=E({type:e,selectors:[["app-dynamic-field-data"]],standalone:!0,features:[w],decls:1,vars:1,consts:[["fieldValue","ngModel"],[1,"row","g-3"],[1,"col-12","col-md-4"],["for","txtName",1,"form-label"],[1,"text-danger"],["type","text","name","fieldValue","required","",1,"form-control","form-control-sm",3,"ngModel","id","placeholder"],["type","number","name","fieldValue","required","",1,"form-control","form-control-sm",3,"ngModel","id","placeholder"],["bindLabel","name","bindValue","id","name","fieldValue",3,"id","placeholder","items","ngModel"],["type","text","name","fieldValue","required","",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","id","placeholder"],["type","number","name","fieldValue","required","",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","id","placeholder"],["bindLabel","name","bindValue","id","name","fieldValue",3,"ngModelChange","id","placeholder","items","ngModel"]],template:function(i,o){i&1&&g(0,ie,3,0,"div",1),i&2&&h(o.isShowPage?0:-1)},dependencies:[H,j,P,k,A,R,I,B,J]});let t=e;return t})();export{G as a,_e as b};
