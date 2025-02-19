import{$a as f,Aa as r,Ba as T,Bb as B,Ea as bt,Fa as Tt,Ka as F,Oa as w,Ob as L,Pa as E,Qa as l,R as gt,Ra as D,T as d,Ta as m,Vb as j,W as M,Y as c,Z as _,_a as p,aa as vt,ab as x,ba as H,bb as J,bc as et,cb as W,ea as Q,eb as tt,f as v,fb as Ct,g as mt,gb as R,hb as u,ja as X,ka as Y,kc as It,na as P,qa as K,rc as wt,sb as y,sc as Dt,ua as _t,ub as C,va as yt,wa as k,z as ft}from"./chunk-FCI7FGJ6.js";import{a as h,b}from"./chunk-WWX6BADO.js";var z={production:!0,webUrl:"http://localhost:4200",apiBaseUrl:"http://192.168.1.38:5050/api/",allowedDomains:"example.com",disallowedRoutes:"",dummyGUID:"38a7d413a5b75ab66d6dbd77ab3b89ae"};var I=function(s){return s[s.State=0]="State",s[s.Transition=1]="Transition",s[s.Sequence=2]="Sequence",s[s.Group=3]="Group",s[s.Animate=4]="Animate",s[s.Keyframes=5]="Keyframes",s[s.Style=6]="Style",s[s.Trigger=7]="Trigger",s[s.Reference=8]="Reference",s[s.AnimateChild=9]="AnimateChild",s[s.AnimateRef=10]="AnimateRef",s[s.Query=11]="Query",s[s.Stagger=12]="Stagger",s}(I||{}),ge="*";function St(s,t){return{type:I.Trigger,name:s,definitions:t,options:{}}}function ot(s,t=null){return{type:I.Animate,styles:t,timings:s}}function kt(s,t=null){return{type:I.Sequence,steps:s,options:t}}function Z(s){return{type:I.Style,styles:s,offset:null}}function q(s,t,i){return{type:I.State,name:s,styles:t,options:i}}function rt(s,t,i=null){return{type:I.Transition,expr:s,animation:t,options:i}}var Bt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=d({token:t,factory:()=>_(Lt),providedIn:"root"});let s=t;return s})(),it=class{},Lt=(()=>{let t=class t extends Bt{constructor(e,n){super(),this.animationModuleType=_(_t,{optional:!0}),this._nextAnimationId=0;let o={id:"0",encapsulation:vt.None,styles:[],data:{animation:[]}};if(this._renderer=e.createRenderer(n.body,o),this.animationModuleType===null&&!Vt(this._renderer))throw new gt(3600,!1)}build(e){let n=this._nextAnimationId;this._nextAnimationId++;let o=Array.isArray(e)?kt(e):e;return Ft(this._renderer,null,n,"register",[o]),new st(n,this._renderer)}};t.\u0275fac=function(n){return new(n||t)(c(Tt),c(j))},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})(),st=class extends it{constructor(t,i){super(),this._id=t,this._renderer=i}create(t,i){return new nt(this._id,t,i||{},this._renderer)}},nt=class{constructor(t,i,e,n){this.id=t,this.element=i,this._renderer=n,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",e)}_listen(t,i){return this._renderer.listen(this.element,`@@${this.id}:${t}`,i)}_command(t,...i){Ft(this._renderer,this.element,this.id,t,i)}onDone(t){this._listen("done",t)}onStart(t){this._listen("start",t)}onDestroy(t){this._listen("destroy",t)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(t){this._command("setPosition",t)}getPosition(){return zt(this._renderer)?.engine?.players[this.id]?.getPosition()??0}};function Ft(s,t,i,e,n){s.setProperty(t,`@@${i}:${e}`,n)}function zt(s){let t=s.\u0275type;return t===0?s:t===1?s.animationRenderer:null}function Vt(s){let t=s.\u0275type;return t===0||t===1}var xt=class{constructor(t=0,i=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=t+i}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let i=t=="start"?this._onStartFns:this._onDoneFns;i.forEach(e=>e()),i.length=0}},Ot=class{constructor(t){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=t;let i=0,e=0,n=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++i==o&&this._onFinish()}),a.onDestroy(()=>{++e==o&&this._onDestroy()}),a.onStart(()=>{++n==o&&this._onStart()})}),this.totalTime=this.players.reduce((a,g)=>Math.max(a,g.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let i=t*this.totalTime;this.players.forEach(e=>{let n=e.totalTime?Math.min(1,i/e.totalTime):1;e.setPosition(n)})}getPosition(){let t=this.players.reduce((i,e)=>i===null||e.totalTime>i.totalTime?e:i,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let i=t=="start"?this._onStartFns:this._onDoneFns;i.forEach(e=>e()),i.length=0}},ve="!";var Et=["toast-component",""];function Gt(s,t){if(s&1){let i=tt();p(0,"button",5),R("click",function(){X(i);let n=u();return Y(n.remove())}),p(1,"span",6),y(2,"\xD7"),f()()}}function $t(s,t){if(s&1&&(J(0),y(1),W()),s&2){let i=u(2);r(),C("[",i.duplicatesCount+1,"]")}}function Qt(s,t){if(s&1&&(p(0,"div"),y(1),w(2,$t,2,1,"ng-container",4),f()),s&2){let i=u();m(i.options.titleClass),E("aria-label",i.title),r(),C(" ",i.title," "),r(),l("ngIf",i.duplicatesCount)}}function Xt(s,t){if(s&1&&x(0,"div",7),s&2){let i=u();m(i.options.messageClass),l("innerHTML",i.message,k)}}function Yt(s,t){if(s&1&&(p(0,"div",8),y(1),f()),s&2){let i=u();m(i.options.messageClass),E("aria-label",i.message),r(),C(" ",i.message," ")}}function Kt(s,t){if(s&1&&(p(0,"div"),x(1,"div",9),f()),s&2){let i=u();r(),D("width",i.width()+"%")}}function Jt(s,t){if(s&1){let i=tt();p(0,"button",5),R("click",function(){X(i);let n=u();return Y(n.remove())}),p(1,"span",6),y(2,"\xD7"),f()()}}function Wt(s,t){if(s&1&&(J(0),y(1),W()),s&2){let i=u(2);r(),C("[",i.duplicatesCount+1,"]")}}function te(s,t){if(s&1&&(p(0,"div"),y(1),w(2,Wt,2,1,"ng-container",4),f()),s&2){let i=u();m(i.options.titleClass),E("aria-label",i.title),r(),C(" ",i.title," "),r(),l("ngIf",i.duplicatesCount)}}function ee(s,t){if(s&1&&x(0,"div",7),s&2){let i=u();m(i.options.messageClass),l("innerHTML",i.message,k)}}function ie(s,t){if(s&1&&(p(0,"div",8),y(1),f()),s&2){let i=u();m(i.options.messageClass),E("aria-label",i.message),r(),C(" ",i.message," ")}}function se(s,t){if(s&1&&(p(0,"div"),x(1,"div",9),f()),s&2){let i=u();r(),D("width",i.width()+"%")}}var at=class{_attachedHost;component;viewContainerRef;injector;constructor(t,i){this.component=t,this.injector=i}attach(t,i){return this._attachedHost=t,t.attach(this,i)}detach(){let t=this._attachedHost;if(t)return this._attachedHost=void 0,t.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},lt=class{_attachedPortal;_disposeFn;attach(t,i){return this._attachedPortal=t,this.attachComponentPortal(t,i)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(t){this._disposeFn=t}},ct=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new v;_activate=new v;_manualClose=new v;_resetTimeout=new v;_countDuplicate=new v;constructor(t){this._overlayRef=t}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(t,i){t&&this._resetTimeout.next(),i&&this._countDuplicate.next(++this.duplicatesCount)}},O=class{toastId;config;message;title;toastType;toastRef;_onTap=new v;_onAction=new v;constructor(t,i,e,n,o,a){this.toastId=t,this.config=i,this.message=e,this.title=n,this.toastType=o,this.toastRef=a,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(t){this._onAction.next(t)}onAction(){return this._onAction.asObservable()}},Rt={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},jt=new M("ToastConfig"),ht=class extends lt{_hostDomElement;_componentFactoryResolver;_appRef;constructor(t,i,e){super(),this._hostDomElement=t,this._componentFactoryResolver=i,this._appRef=e}attachComponentPortal(t,i){let e=this._componentFactoryResolver.resolveComponentFactory(t.component),n;return n=e.create(t.injector),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.detachView(n.hostView),n.destroy()}),i?this._hostDomElement.insertBefore(this._getComponentRootNode(n),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(n)),n}_getComponentRootNode(t){return t.hostView.rootNodes[0]}},ne=(()=>{class s{_document=_(j);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let i=this._document.createElement("div");i.classList.add("overlay-container"),i.setAttribute("aria-live","polite"),this._document.body.appendChild(i),this._containerElement=i}static \u0275fac=function(e){return new(e||s)};static \u0275prov=d({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),ut=class{_portalHost;constructor(t){this._portalHost=t}attach(t,i=!0){return this._portalHost.attach(t,i)}detach(){return this._portalHost.detach()}},oe=(()=>{class s{_overlayContainer=_(ne);_componentFactoryResolver=_(bt);_appRef=_(L);_document=_(j);_paneElements=new Map;create(i,e){return this._createOverlayRef(this.getPaneElement(i,e))}getPaneElement(i="",e){return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[i]||(this._paneElements.get(e)[i]=this._createPaneElement(i,e)),this._paneElements.get(e)[i]}_createPaneElement(i,e){let n=this._document.createElement("div");return n.id="toast-container",n.classList.add(i),n.classList.add("toast-container"),e?e.getContainerElement().appendChild(n):this._overlayContainer.getContainerElement().appendChild(n),n}_createPortalHost(i){return new ht(i,this._componentFactoryResolver,this._appRef)}_createOverlayRef(i){return new ut(this._createPortalHost(i))}static \u0275fac=function(e){return new(e||s)};static \u0275prov=d({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),U=(()=>{class s{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(i,e,n,o,a){this.overlay=e,this._injector=n,this.sanitizer=o,this.ngZone=a,this.toastrConfig=h(h({},i.default),i.config),i.config.iconClasses&&(this.toastrConfig.iconClasses=h(h({},i.default.iconClasses),i.config.iconClasses))}show(i,e,n={},o=""){return this._preBuildNotification(o,i,e,this.applyConfig(n))}success(i,e,n={}){let o=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(o,i,e,this.applyConfig(n))}error(i,e,n={}){let o=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(o,i,e,this.applyConfig(n))}info(i,e,n={}){let o=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(o,i,e,this.applyConfig(n))}warning(i,e,n={}){let o=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(o,i,e,this.applyConfig(n))}clear(i){for(let e of this.toasts)if(i!==void 0){if(e.toastId===i){e.toastRef.manualClose();return}}else e.toastRef.manualClose()}remove(i){let e=this._findToast(i);if(!e||(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let n=this.toasts[this.currentlyActive].toastRef;n.isInactive()||(this.currentlyActive=this.currentlyActive+1,n.activate())}return!0}findDuplicate(i="",e="",n,o){let{includeTitleDuplicates:a}=this.toastrConfig;for(let g of this.toasts){let N=a&&g.title===i;if((!a||N)&&g.message===e)return g.toastRef.onDuplicate(n,o),g}return null}applyConfig(i={}){return h(h({},this.toastrConfig),i)}_findToast(i){for(let e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===i)return{index:e,activeToast:this.toasts[e]};return null}_preBuildNotification(i,e,n,o){return o.onActivateTick?this.ngZone.run(()=>this._buildNotification(i,e,n,o)):this._buildNotification(i,e,n,o)}_buildNotification(i,e,n,o){if(!o.toastComponent)throw new Error("toastComponent required");let a=this.findDuplicate(n,e,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&n||e)&&this.toastrConfig.preventDuplicates&&a!==null)return a;this.previousToastMessage=e;let g=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(g=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let N=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let dt=e;e&&o.enableHtml&&(dt=this.sanitizer.sanitize(yt.HTML,e));let S=new ct(N),G=new O(this.index,o,dt,n,i,S),Mt=[{provide:O,useValue:G}],Ht=P.create({providers:Mt,parent:this._injector}),Pt=new at(o.toastComponent,Ht),pt=N.attach(Pt,o.newestOnTop);S.componentInstance=pt.instance;let $={toastId:this.index,title:n||"",message:e||"",toastRef:S,onShown:S.afterActivate(),onHidden:S.afterClosed(),onTap:G.onTap(),onAction:G.onAction(),portal:pt};return g||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{$.toastRef.activate()})),this.toasts.push($),$}static \u0275fac=function(e){return new(e||s)(c(jt),c(oe),c(P),c(wt),c(K))};static \u0275prov=d({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),re=(()=>{class s{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=F(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(i,e,n){this.toastrService=i,this.toastPackage=e,this.ngZone=n,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o}),this.state=F({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(i=>b(h({},i),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let i=new Date().getTime(),e=this.hideTime-i;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(n=>100-n),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(i=>b(h({},i),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(i=>b(h({},i),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(i,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(i),e)):this.timeout=setTimeout(()=>i(),e)}outsideInterval(i,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(i),e)):this.intervalId=setInterval(()=>i(),e)}runInsideAngular(i){this.ngZone?this.ngZone.run(()=>i()):i()}static \u0275fac=function(e){return new(e||s)(T(U),T(O),T(K))};static \u0275cmp=H({type:s,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(e,n){e&1&&R("click",function(){return n.tapToast()})("mouseenter",function(){return n.stickAround()})("mouseleave",function(){return n.delayedHideToast()}),e&2&&(Ct("@flyInOut",n._state),m(n.toastClasses),D("display",n.displayStyle))},standalone:!0,features:[B],attrs:Et,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,n){e&1&&w(0,Gt,3,0,"button",0)(1,Qt,3,5,"div",1)(2,Xt,1,3,"div",2)(3,Yt,2,4,"div",3)(4,Kt,2,2,"div",4),e&2&&(l("ngIf",n.options.closeButton),r(),l("ngIf",n.title),r(),l("ngIf",n.message&&n.options.enableHtml),r(),l("ngIf",n.message&&!n.options.enableHtml),r(),l("ngIf",n.options.progressBar))},dependencies:[et],encapsulation:2,data:{animation:[St("flyInOut",[q("inactive",Z({opacity:0})),q("active",Z({opacity:1})),q("removed",Z({opacity:0})),rt("inactive => active",ot("{{ easeTime }}ms {{ easing }}")),rt("active => removed",ot("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return s})(),ae=b(h({},Rt),{toastComponent:re}),Ae=(s={})=>Q([{provide:jt,useValue:{default:ae,config:s}}]);var le=(()=>{class s{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=F(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=F("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(i,e,n){this.toastrService=i,this.toastPackage=e,this.appRef=n,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let i=new Date().getTime(),e=this.hideTime-i;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(n=>100-n),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(e){return new(e||s)(T(U),T(O),T(L))};static \u0275cmp=H({type:s,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(e,n){e&1&&R("click",function(){return n.tapToast()})("mouseenter",function(){return n.stickAround()})("mouseleave",function(){return n.delayedHideToast()}),e&2&&(m(n.toastClasses),D("display",n.displayStyle))},standalone:!0,features:[B],attrs:Et,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,n){e&1&&w(0,Jt,3,0,"button",0)(1,te,3,5,"div",1)(2,ee,1,3,"div",2)(3,ie,2,4,"div",3)(4,se,2,2,"div",4),e&2&&(l("ngIf",n.options.closeButton),r(),l("ngIf",n.title),r(),l("ngIf",n.message&&n.options.enableHtml),r(),l("ngIf",n.message&&!n.options.enableHtml),r(),l("ngIf",n.options.progressBar))},dependencies:[et],encapsulation:2,changeDetection:0})}return s})(),Ne=b(h({},Rt),{toastComponent:le});var At="primary",A=class s{constructor(t){Object.assign(this,t)}static create(t){return!t?.template&&!t?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new s(t)}},Nt=(()=>{let t=class t{constructor(){this.spinnerObservable=new mt(null)}getSpinner(e){return this.spinnerObservable.asObservable().pipe(ft(n=>n&&n.name===e))}show(e=At,n){return new Promise((o,a)=>{setTimeout(()=>{n&&Object.keys(n).length?(n.name=e,this.spinnerObservable.next(new A(b(h({},n),{show:!0}))),o(!0)):(this.spinnerObservable.next(new A({name:e,show:!0})),o(!0))},10)})}hide(e=At,n=10){return new Promise((o,a)=>{setTimeout(()=>{this.spinnerObservable.next(new A({name:e,show:!1})),o(!0)},n)})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})(),oi=new M("NGX_SPINNER_CONFIG");var li=(()=>{let t=class t{constructor(e,n,o){this.toastr=e,this.spinner=n,this.loader=o}showLoader(e){this.loader.showLoader()}hideLoader(){this.loader.hideLoader()}errorMessage(e){this.toastr.error(e)}catchMessage(e){e.hasOwnProperty("statusText")?this.toastr.error(e.statusText):this.toastr.error(e.error.message)}warningMessage(e){this.toastr.warning(e)}successMessage(e){this.toastr.success(e)}setLocalStorage(e,n){localStorage.setItem(e,n)}getLocalStorage(e){var n=localStorage.getItem(e);return n||(n=""),n}deleteLocalStorage(e){localStorage.removeItem(e)}};t.\u0275fac=function(n){return new(n||t)(c(U),c(Nt),c(Dt))},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();var di=(()=>{let t=class t{constructor(e){this.http=e}apiCall(e,n,o=null){return e=="get"?this.http.get(z.apiBaseUrl+n):e=="post"?this.http.post(z.apiBaseUrl+n,o):this.http.get(z.apiBaseUrl+n)}};t.\u0275fac=function(n){return new(n||t)(c(It))},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();export{z as a,di as b,I as c,ge as d,ot as e,kt as f,Z as g,Bt as h,xt as i,Ot as j,ve as k,Ae as l,li as m};
