"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[7849],{7849:(P,x,c)=>{c.r(x),c.d(x,{MiscDemoModule:()=>oe});var o=c(6814),a=c(2507),e=c(4769),M=c(6651),w=c(8608),Z=c(8039),y=c(5219),d=c(2076);const r=["container"],b=["content"],u=["xBar"],g=["yBar"];function h(i,v){1&i&&e.GkF(0)}const E=["*"];let z=(()=>{class i{platformId;el;zone;cd;document;renderer;style;styleClass;containerViewChild;contentViewChild;xBarViewChild;yBarViewChild;templates;scrollYRatio;scrollXRatio;timeoutFrame=t=>setTimeout(t,0);initialized=!1;lastPageY;lastPageX;isXBarClicked=!1;isYBarClicked=!1;contentTemplate;windowResizeListener;contentScrollListener;mouseEnterListener;xBarMouseDownListener;yBarMouseDownListener;documentMouseMoveListener;documentMouseUpListener;constructor(t,s,n,l,p,f){this.platformId=t,this.el=s,this.zone=n,this.cd=l,this.document=p,this.renderer=f}ngAfterViewInit(){(0,o.NF)(this.platformId)&&this.zone.runOutsideAngular(()=>{this.moveBar(),this.moveBar=this.moveBar.bind(this),this.onXBarMouseDown=this.onXBarMouseDown.bind(this),this.onYBarMouseDown=this.onYBarMouseDown.bind(this),this.onDocumentMouseMove=this.onDocumentMouseMove.bind(this),this.onDocumentMouseUp=this.onDocumentMouseUp.bind(this),this.windowResizeListener=this.renderer.listen(window,"resize",this.moveBar),this.contentScrollListener=this.renderer.listen(this.contentViewChild.nativeElement,"scroll",this.moveBar),this.mouseEnterListener=this.renderer.listen(this.contentViewChild.nativeElement,"mouseenter",this.moveBar),this.xBarMouseDownListener=this.renderer.listen(this.xBarViewChild.nativeElement,"mousedown",this.onXBarMouseDown),this.yBarMouseDownListener=this.renderer.listen(this.yBarViewChild.nativeElement,"mousedown",this.onYBarMouseDown),this.calculateContainerHeight(),this.initialized=!0})}ngAfterContentInit(){this.templates.forEach(t=>{t.getType(),this.contentTemplate=t.template})}calculateContainerHeight(){let t=this.containerViewChild.nativeElement,s=this.contentViewChild.nativeElement,n=this.xBarViewChild.nativeElement;const l=this.document.defaultView;let p=l.getComputedStyle(t),f=l.getComputedStyle(n),C=d.p.getHeight(t)-parseInt(f.height,10);"none"!=p["max-height"]&&0==C&&(t.style.height=s.offsetHeight+parseInt(f.height,10)>parseInt(p["max-height"],10)?p["max-height"]:s.offsetHeight+parseFloat(p.paddingTop)+parseFloat(p.paddingBottom)+parseFloat(p.borderTopWidth)+parseFloat(p.borderBottomWidth)+"px")}moveBar(){let t=this.containerViewChild.nativeElement,s=this.contentViewChild.nativeElement,n=this.xBarViewChild.nativeElement,l=s.scrollWidth,p=s.clientWidth,f=-1*(t.clientHeight-n.clientHeight);this.scrollXRatio=p/l;let C=this.yBarViewChild.nativeElement,U=s.scrollHeight,q=s.clientHeight,le=-1*(t.clientWidth-C.clientWidth);this.scrollYRatio=q/U,this.requestAnimationFrame(()=>{if(this.scrollXRatio>=1)d.p.addClass(n,"p-scrollpanel-hidden");else{d.p.removeClass(n,"p-scrollpanel-hidden");const T=Math.max(100*this.scrollXRatio,10);n.style.cssText="width:"+T+"%; left:"+s.scrollLeft*(100-T)/(l-p)+"%;bottom:"+f+"px;"}if(this.scrollYRatio>=1)d.p.addClass(C,"p-scrollpanel-hidden");else{d.p.removeClass(C,"p-scrollpanel-hidden");const T=Math.max(100*this.scrollYRatio,10);C.style.cssText="height:"+T+"%; top: calc("+s.scrollTop*(100-T)/(U-q)+"% - "+n.clientHeight+"px);right:"+le+"px;"}}),this.cd.markForCheck()}onYBarMouseDown(t){this.isYBarClicked=!0,this.lastPageY=t.pageY,d.p.addClass(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),d.p.addClass(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()}bindDocumentMouseListeners(){this.documentMouseMoveListener=this.renderer.listen(this.document,"mousemove",this.onDocumentMouseMove.bind(this)),this.documentMouseUpListener=this.renderer.listen(this.document,"mouseup",this.onDocumentMouseUp.bind(this))}unbindDocumentMouseListeners(){this.documentMouseMoveListener&&(this.documentMouseMoveListener(),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(this.documentMouseUpListener(),this.documentMouseUpListener=null)}onXBarMouseDown(t){this.isXBarClicked=!0,this.lastPageX=t.pageX,d.p.addClass(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),d.p.addClass(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()}onDocumentMouseMove(t){this.isXBarClicked?this.onMouseMoveForXBar(t):(this.isYBarClicked||this.onMouseMoveForXBar(t),this.onMouseMoveForYBar(t))}onMouseMoveForXBar(t){let s=t.pageX-this.lastPageX;this.lastPageX=t.pageX,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollLeft+=s/this.scrollXRatio})}onMouseMoveForYBar(t){let s=t.pageY-this.lastPageY;this.lastPageY=t.pageY,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollTop+=s/this.scrollYRatio})}scrollTop(t){let s=this.contentViewChild.nativeElement.scrollHeight-this.contentViewChild.nativeElement.clientHeight;this.contentViewChild.nativeElement.scrollTop=t=t>s?s:t>0?t:0}onDocumentMouseUp(t){d.p.removeClass(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),d.p.removeClass(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),d.p.removeClass(this.document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1}requestAnimationFrame(t){(window.requestAnimationFrame||this.timeoutFrame)(t)}unbindListeners(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null),this.contentScrollListener&&(this.contentScrollListener(),this.contentScrollListener=null),this.mouseEnterListener&&(this.mouseEnterListener(),this.mouseEnterListener=null),this.xBarMouseDownListener&&(this.xBarMouseDownListener(),this.xBarMouseDownListener=null),this.yBarMouseDownListener&&(this.yBarMouseDownListener(),this.yBarMouseDownListener=null)}ngOnDestroy(){this.initialized&&this.unbindListeners()}refresh(){this.moveBar()}static \u0275fac=function(s){return new(s||i)(e.Y36(e.Lbi),e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(o.K0),e.Y36(e.Qsj))};static \u0275cmp=e.Xpm({type:i,selectors:[["p-scrollPanel"]],contentQueries:function(s,n,l){if(1&s&&e.Suo(l,y.jx,4),2&s){let p;e.iGM(p=e.CRH())&&(n.templates=p)}},viewQuery:function(s,n){if(1&s&&(e.Gf(r,5),e.Gf(b,5),e.Gf(u,5),e.Gf(g,5)),2&s){let l;e.iGM(l=e.CRH())&&(n.containerViewChild=l.first),e.iGM(l=e.CRH())&&(n.contentViewChild=l.first),e.iGM(l=e.CRH())&&(n.xBarViewChild=l.first),e.iGM(l=e.CRH())&&(n.yBarViewChild=l.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:E,decls:11,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],[1,"p-scrollpanel-wrapper"],[1,"p-scrollpanel-content"],["content",""],[4,"ngTemplateOutlet"],[1,"p-scrollpanel-bar","p-scrollpanel-bar-x"],["xBar",""],[1,"p-scrollpanel-bar","p-scrollpanel-bar-y"],["yBar",""]],template:function(s,n){1&s&&(e.F$t(),e.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3,4),e.Hsn(5),e.YNc(6,h,1,0,"ng-container",5),e.qZA()(),e._UZ(7,"div",6,7)(9,"div",8,9),e.qZA()),2&s&&(e.Tol(n.styleClass),e.Q6J("ngClass","p-scrollpanel p-component")("ngStyle",n.style),e.xp6(6),e.Q6J("ngTemplateOutlet",n.contentTemplate))},dependencies:[o.mk,o.tP,o.PC],styles:[".p-scrollpanel-wrapper{overflow:hidden;width:100%;height:100%;position:relative;float:left}.p-scrollpanel-content{height:calc(100% + 18px);width:calc(100% + 18px);padding:0 18px 18px 0;position:relative;overflow:auto;box-sizing:border-box}.p-scrollpanel-bar{position:relative;background:#c1c1c1;border-radius:3px;cursor:pointer;opacity:0;transition:opacity .25s linear}.p-scrollpanel-bar-y{width:9px;top:0}.p-scrollpanel-bar-x{height:9px;bottom:0}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:hover .p-scrollpanel-bar,.p-scrollpanel:active .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-webkit-user-select:none;user-select:none}\n"],encapsulation:2,changeDetection:0})}return i})(),I=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[o.ez]})}return i})();var S=c(6263),A=c(2169),D=c(707);let Y=(()=>{class i{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":"circle"===this.shape,"p-skeleton-none":"none"===this.animation}}containerStyle(){return this.size?{...this.style,width:this.size,height:this.size,borderRadius:this.borderRadius}:{...this.style,width:this.width,height:this.height,borderRadius:this.borderRadius}}static \u0275fac=function(s){return new(s||i)};static \u0275cmp=e.Xpm({type:i,selectors:[["p-skeleton"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},decls:1,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(s,n){1&s&&e._UZ(0,"div",0),2&s&&(e.Tol(n.styleClass),e.Q6J("ngClass",n.containerClass())("ngStyle",n.containerStyle()))},dependencies:[o.mk,o.PC],styles:['.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:"";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n'],encapsulation:2,changeDetection:0})}return i})(),V=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[o.ez]})}return i})();const F=["*"];let J=(()=>{class i{styleClass;style;static \u0275fac=function(s){return new(s||i)};static \u0275cmp=e.Xpm({type:i,selectors:[["p-avatarGroup"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style"},ngContentSelectors:F,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(s,n){1&s&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA()),2&s&&(e.Tol(n.styleClass),e.Q6J("ngClass","p-avatar-group p-component")("ngStyle",n.style))},dependencies:[o.mk,o.PC],styles:[".p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{display:flex;align-items:center}\n"],encapsulation:2,changeDetection:0})}return i})(),Q=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[o.ez]})}return i})();var m=c(6825),k=c(5837),_=c(2332);function R(i,v){if(1&i&&e._UZ(0,"span",6),2&i){const t=e.oxw(3);e.Tol(t.icon),e.Q6J("ngClass","p-scrolltop-icon")}}const X=function(){return{"font-size":"1rem",scale:"1.5"}};function O(i,v){1&i&&e._UZ(0,"ChevronUpIcon",7),2&i&&e.Q6J("styleClass","p-scrolltop-icon")("ngStyle",e.DdM(2,X))}function H(i,v){if(1&i&&(e.ynx(0),e.YNc(1,R,1,3,"span",4),e.YNc(2,O,1,3,"ChevronUpIcon",5),e.BQk()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.icon),e.xp6(1),e.Q6J("ngIf",!t.icon)}}function G(i,v){}function j(i,v){if(1&i&&e.YNc(0,G,0,0,"ng-template",8),2&i){const t=e.oxw(2);e.Q6J("ngIf",!t.icon)}}const W=function(i,v){return{showTransitionParams:i,hideTransitionParams:v}},N=function(i){return{value:"open",params:i}},K=function(){return{styleClass:"p-scrolltop-icon"}};function $(i,v){if(1&i){const t=e.EpF();e.TgZ(0,"button",1),e.NdJ("@animation.start",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.onEnter(n))})("@animation.done",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.onLeave(n))})("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.onClick())}),e.YNc(1,H,3,2,"ng-container",2),e.YNc(2,j,1,1,null,3),e.qZA()}if(2&i){const t=e.oxw();e.Tol(t.styleClass),e.Q6J("@animation",e.VKq(11,N,e.WLB(8,W,t.showTransitionOptions,t.hideTransitionOptions)))("ngClass",t.containerClass())("ngStyle",t.style),e.xp6(1),e.Q6J("ngIf",!t.iconTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",t.iconTemplate)("ngTemplateOutletContext",e.DdM(13,K))}}let ee=(()=>{class i{document;platformId;renderer;el;cd;config;styleClass;style;target="window";threshold=400;icon;behavior="smooth";showTransitionOptions=".15s";hideTransitionOptions=".15s";templates;iconTemplate;documentScrollListener;parentScrollListener;visible=!1;overlay;window;constructor(t,s,n,l,p,f){this.document=t,this.platformId=s,this.renderer=n,this.el=l,this.cd=p,this.config=f,this.window=this.document.defaultView}ngOnInit(){"window"===this.target?this.bindDocumentScrollListener():"parent"===this.target&&this.bindParentScrollListener()}ngAfterContentInit(){this.templates.forEach(t=>{"icon"===t.getType()&&(this.iconTemplate=t.template)})}onClick(){("window"===this.target?this.window:this.el.nativeElement.parentElement).scroll({top:0,behavior:this.behavior})}onEnter(t){switch(t.toState){case"open":this.overlay=t.element,_.P9.set("overlay",this.overlay,this.config.zIndex.overlay);break;case"void":this.overlay=null}}onLeave(t){"void"===t.toState&&_.P9.clear(t.element)}checkVisibility(t){this.visible=t>this.threshold,this.cd.markForCheck()}bindParentScrollListener(){(0,o.NF)(this.platformId)&&(this.parentScrollListener=this.renderer.listen(this.el.nativeElement.parentElement,"scroll",()=>{this.checkVisibility(this.el.nativeElement.parentElement.scrollTop)}))}bindDocumentScrollListener(){(0,o.NF)(this.platformId)&&(this.documentScrollListener=this.renderer.listen(this.window,"scroll",()=>{this.checkVisibility(d.p.getWindowScrollTop())}))}unbindParentScrollListener(){this.parentScrollListener&&(this.parentScrollListener(),this.parentScrollListener=null)}unbindDocumentScrollListener(){this.documentScrollListener&&(this.documentScrollListener(),this.documentScrollListener=null)}containerClass(){return{"p-scrolltop p-link p-component":!0,"p-scrolltop-sticky":"window"!==this.target}}ngOnDestroy(){"window"===this.target?this.unbindDocumentScrollListener():"parent"===this.target&&this.unbindParentScrollListener(),this.overlay&&(_.P9.clear(this.overlay),this.overlay=null)}static \u0275fac=function(s){return new(s||i)(e.Y36(o.K0),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(y.b4))};static \u0275cmp=e.Xpm({type:i,selectors:[["p-scrollTop"]],contentQueries:function(s,n,l){if(1&s&&e.Suo(l,y.jx,4),2&s){let p;e.iGM(p=e.CRH())&&(n.templates=p)}},hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",target:"target",threshold:"threshold",icon:"icon",behavior:"behavior",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},decls:1,vars:1,consts:[["type","button",3,"ngClass","class","ngStyle","click",4,"ngIf"],["type","button",3,"ngClass","ngStyle","click"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass",4,"ngIf"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"ngClass"],[3,"styleClass","ngStyle"],[3,"ngIf"]],template:function(s,n){1&s&&e.YNc(0,$,3,14,"button",0),2&s&&e.Q6J("ngIf",n.visible)},dependencies:function(){return[o.mk,o.O5,o.tP,o.PC,k.g]},styles:[".p-scrolltop{position:fixed;bottom:20px;right:20px;display:flex;align-items:center;justify-content:center}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}\n"],encapsulation:2,data:{animation:[(0,m.X$)("animation",[(0,m.SB)("void",(0,m.oB)({opacity:0})),(0,m.SB)("open",(0,m.oB)({opacity:1})),(0,m.eR)("void => open",(0,m.jt)("{{showTransitionParams}}")),(0,m.eR)("open => void",(0,m.jt)("{{hideTransitionParams}}"))])]},changeDetection:0})}return i})(),te=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[o.ez,k.g,y.m8,y.m8]})}return i})();const L=function(){return{"background-color":"#9c27b0",color:"#ffffff"}},ie=function(){return{"background-color":"#2196F3",color:"#ffffff"}},se=function(){return{width:"250px",height:"200px"}};let ne=(()=>{class i{constructor(){this.value=0}ngOnInit(){this.interval=setInterval(()=>{this.value=this.value+Math.floor(10*Math.random())+1,this.value>=100&&(this.value=100,clearInterval(this.interval))},2e3)}ngOnDestroy(){clearInterval(this.interval)}static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:140,vars:27,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[1,"col"],[3,"value","showValue"],[1,"col-12","lg:col-6"],[1,"flex","flex-wrap","gap-2"],["value","2"],["value","8","severity","success"],["value","4","severity","info"],["value","12","severity","warning"],["value","3","severity","danger"],["pBadge","","value","2",1,"pi","pi-bell","mr-4","p-text-secondary",2,"font-size","2rem"],["pBadge","","severity","danger",1,"pi","pi-calendar","mr-4","p-text-secondary",2,"font-size","2rem",3,"value"],["pBadge","","severity","danger",1,"pi","pi-envelope","p-text-secondary",2,"font-size","2rem"],["label","Emails","badge","8"],["label","Messages","icon","pi pi-users","styleClass","p-button-warning","badge","8","badgeClass","p-badge-danger"],[1,"flex","flex-wrap","gap-2","align-items-end"],["value","4","size","large","severity","warning"],["value","6","size","xlarge","severity","success"],["styleClass","mb-3"],["image","assets/demo/images/avatar/amyelsner.png","size","large","shape","circle"],["image","assets/demo/images/avatar/asiyajavayant.png","size","large","shape","circle"],["image","assets/demo/images/avatar/onyamalimba.png","size","large","shape","circle"],["image","assets/demo/images/avatar/ionibowcher.png","size","large","shape","circle"],["image","assets/demo/images/avatar/xuxuefeng.png","size","large","shape","circle"],["label","+2","shape","circle","size","large"],["label","P","size","xlarge","shape","circle"],["label","V","size","large","shape","circle"],["label","U","shape","circle"],["icon","pi pi-user","pBadge","","value","4","severity","success","size","xlarge"],["target","parent","styleClass","custom-scrolltop","icon","pi pi-arrow-up",3,"threshold"],["value","Primary"],["severity","success","value","Success"],["severity","info","value","Info"],["severity","warning","value","Warning"],["severity","danger","value","Danger"],["value","Primary",3,"rounded"],["severity","success","value","Success",3,"rounded"],["severity","info","value","Info",3,"rounded"],["severity","warning","value","Warning",3,"rounded"],["severity","danger","value","Danger",3,"rounded"],["icon","pi pi-user","value","Primary"],["icon","pi pi-check","severity","success","value","Success"],["icon","pi pi-info-circle","severity","info","value","Info"],["con","pi pi-exclamation-triangle","severity","warning","value","Warning"],["icon","pi pi-times","severity","danger","value","Danger"],[1,"flex","flex-wrap","align-items-center"],["label","Action","styleClass","m-1"],["label","Comedy","styleClass","m-1"],["label","Mystery","styleClass","m-1"],["label","Thriller","styleClass","m-1",3,"removable"],["label","Apple","icon","pi pi-apple","styleClass","m-1"],["label","Facebook","icon","pi pi-facebook","styleClass","m-1"],["label","Google","icon","pi pi-google","styleClass","m-1"],["label","Microsoft","icon","pi pi-microsoft","styleClass","m-1",3,"removable"],["label","Amy Elsner","image","assets/demo/images/avatar/amyelsner.png","styleClass","m-1"],["label","Asiya Javayant","image","assets/demo/images/avatar/asiyajavayant.png","styleClass","m-1"],["label","Onyama Limba","image","assets/demo/images/avatar/onyamalimba.png","styleClass","m-1"],["label","Xuxue Feng","image","assets/demo/images/avatar/xuxuefeng.png","styleClass","m-1",3,"removable"],["label","Action","styleClass","m-1 custom-chip"],["label","Comedy","styleClass","m-1 custom-chip"],["label","Onyama Limba","image","assets/demo/images/avatar/onyamalimba.png","styleClass","m-1 custom-chip"],["label","Xuxue Feng","image","assets/demo/images/avatar/xuxuefeng.png","styleClass","m-1 custom-chip",3,"removable"],[1,"border-round","border-1","surface-border","p-4"],[1,"flex","mb-3"],["shape","circle","size","4rem","styleClass","mr-2"],["width","10rem","styleClass","mb-2"],["width","5rem","styleClass","mb-2"],["height",".5rem"],["width","100%","height","150px"],[1,"flex","justify-content-between","mt-3"],["width","4rem","height","2rem"]],template:function(s,n){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4,"ProgressBar"),e.qZA(),e.TgZ(5,"div",0)(6,"div",3),e._UZ(7,"p-progressBar",4),e.qZA(),e.TgZ(8,"div",3),e._UZ(9,"p-progressBar",4),e.qZA()()()(),e.TgZ(10,"div",5)(11,"div",2)(12,"h4"),e._uU(13,"Badge"),e.qZA(),e.TgZ(14,"h5"),e._uU(15,"Numbers"),e.qZA(),e.TgZ(16,"div",6),e._UZ(17,"p-badge",7)(18,"p-badge",8)(19,"p-badge",9)(20,"p-badge",10)(21,"p-badge",11),e.qZA(),e.TgZ(22,"h5"),e._uU(23,"Positioned Badge"),e.qZA(),e.TgZ(24,"div",6),e._UZ(25,"i",12)(26,"i",13)(27,"i",14),e.qZA(),e.TgZ(28,"h5"),e._uU(29,"Inline Button Badge"),e.qZA(),e.TgZ(30,"div",6),e._UZ(31,"p-button",15)(32,"p-button",16),e.qZA(),e.TgZ(33,"h5"),e._uU(34,"Sizes"),e.qZA(),e.TgZ(35,"div",17),e._UZ(36,"p-badge",7)(37,"p-badge",18)(38,"p-badge",19),e.qZA()(),e.TgZ(39,"div",2)(40,"h4"),e._uU(41,"Avatar"),e.qZA(),e.TgZ(42,"h5"),e._uU(43,"Avatar Group"),e.qZA(),e.TgZ(44,"p-avatarGroup",20),e._UZ(45,"p-avatar",21)(46,"p-avatar",22)(47,"p-avatar",23)(48,"p-avatar",24)(49,"p-avatar",25)(50,"p-avatar",26),e.qZA(),e.TgZ(51,"h5"),e._uU(52,"Label - Circle"),e.qZA(),e.TgZ(53,"div",17),e._UZ(54,"p-avatar",27)(55,"p-avatar",28)(56,"p-avatar",29),e.qZA(),e.TgZ(57,"h5"),e._uU(58,"Icon - Badge"),e.qZA(),e._UZ(59,"p-avatar",30),e.qZA(),e.TgZ(60,"div",2)(61,"h4"),e._uU(62,"ScrollTop"),e.qZA(),e.TgZ(63,"p-scrollPanel")(64,"p"),e._uU(65," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. "),e.qZA(),e._UZ(66,"p-scrollTop",31),e.qZA()()(),e.TgZ(67,"div",5)(68,"div",2)(69,"h4"),e._uU(70,"Tag"),e.qZA(),e.TgZ(71,"h5"),e._uU(72,"Tags"),e.qZA(),e.TgZ(73,"div",6),e._UZ(74,"p-tag",32)(75,"p-tag",33)(76,"p-tag",34)(77,"p-tag",35)(78,"p-tag",36),e.qZA(),e.TgZ(79,"h5"),e._uU(80,"Pills"),e.qZA(),e.TgZ(81,"div",6),e._UZ(82,"p-tag",37)(83,"p-tag",38)(84,"p-tag",39)(85,"p-tag",40)(86,"p-tag",41),e.qZA(),e.TgZ(87,"h5"),e._uU(88,"Icons"),e.qZA(),e.TgZ(89,"div",6),e._UZ(90,"p-tag",42)(91,"p-tag",43)(92,"p-tag",44)(93,"p-tag",45)(94,"p-tag",46),e.qZA()(),e.TgZ(95,"div",2)(96,"h4"),e._uU(97,"Chip"),e.qZA(),e.TgZ(98,"h5"),e._uU(99,"Basic"),e.qZA(),e.TgZ(100,"div",47),e._UZ(101,"p-chip",48)(102,"p-chip",49)(103,"p-chip",50)(104,"p-chip",51),e.qZA(),e.TgZ(105,"h5"),e._uU(106,"Icon"),e.qZA(),e.TgZ(107,"div",47),e._UZ(108,"p-chip",52)(109,"p-chip",53)(110,"p-chip",54)(111,"p-chip",55),e.qZA(),e.TgZ(112,"h5"),e._uU(113,"Image"),e.qZA(),e.TgZ(114,"div",47),e._UZ(115,"p-chip",56)(116,"p-chip",57)(117,"p-chip",58)(118,"p-chip",59),e.qZA(),e.TgZ(119,"h5"),e._uU(120,"Styling"),e.qZA(),e.TgZ(121,"div",47),e._UZ(122,"p-chip",60)(123,"p-chip",61)(124,"p-chip",62)(125,"p-chip",63),e.qZA()(),e.TgZ(126,"div",2)(127,"h4"),e._uU(128,"Skeleton"),e.qZA(),e.TgZ(129,"div",64)(130,"div",65),e._UZ(131,"p-skeleton",66),e.TgZ(132,"div"),e._UZ(133,"p-skeleton",67)(134,"p-skeleton",68)(135,"p-skeleton",69),e.qZA()(),e._UZ(136,"p-skeleton",70),e.TgZ(137,"div",71),e._UZ(138,"p-skeleton",72)(139,"p-skeleton",72),e.qZA()()()()()),2&s&&(e.xp6(7),e.Q6J("value",n.value)("showValue",!0),e.xp6(2),e.Q6J("value",50)("showValue",!1),e.xp6(17),e.Q6J("value","10+"),e.xp6(24),e.Akn(e.DdM(23,L)),e.xp6(5),e.Akn(e.DdM(24,ie)),e.xp6(1),e.Akn(e.DdM(25,L)),e.xp6(7),e.Akn(e.DdM(26,se)),e.xp6(3),e.Q6J("threshold",100),e.xp6(16),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("rounded",!0),e.xp6(18),e.Q6J("removable",!0),e.xp6(7),e.Q6J("removable",!0),e.xp6(7),e.Q6J("removable",!0),e.xp6(7),e.Q6J("removable",!0))},dependencies:[M.k,w.Ct,w.lM,Z.q,z,S.V,A.A,D.zx,Y,J,ee],encapsulation:2})}return i})(),ae=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[a.Bz.forChild([{path:"",component:ne}]),a.Bz]})}return i})(),oe=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[o.ez,ae,M.q,w.TX,Z.F,I,S.W,A.o,D.hJ,V,Q,te]})}return i})()},6651:(P,x,c)=>{c.d(x,{k:()=>y,q:()=>d});var o=c(6814),a=c(4769);function e(r,b){if(1&r&&(a.TgZ(0,"div",5),a._uU(1),a.qZA()),2&r){const u=a.oxw(2);a.Udp("display",null!=u.value&&0!==u.value?"flex":"none"),a.xp6(1),a.AsE("",u.value,"",u.unit,"")}}function M(r,b){if(1&r&&(a.TgZ(0,"div",3),a.YNc(1,e,2,4,"div",4),a.qZA()),2&r){const u=a.oxw();a.Udp("width",u.value+"%")("background",u.color),a.xp6(1),a.Q6J("ngIf",u.showValue)}}function w(r,b){if(1&r&&(a.TgZ(0,"div",6),a._UZ(1,"div",7),a.qZA()),2&r){const u=a.oxw();a.xp6(1),a.Udp("background",u.color)}}const Z=function(r,b){return{"p-progressbar p-component":!0,"p-progressbar-determinate":r,"p-progressbar-indeterminate":b}};let y=(()=>{class r{value;showValue=!0;styleClass;style;unit="%";mode="determinate";color;static \u0275fac=function(g){return new(g||r)};static \u0275cmp=a.Xpm({type:r,selectors:[["p-progressBar"]],hostAttrs:[1,"p-element"],inputs:{value:"value",showValue:"showValue",styleClass:"styleClass",style:"style",unit:"unit",mode:"mode",color:"color"},decls:3,vars:10,consts:[["role","progressbar","aria-valuemin","0","aria-valuemax","100",3,"ngStyle","ngClass"],["class","p-progressbar-value p-progressbar-value-animate","style","display:flex",3,"width","background",4,"ngIf"],["class","p-progressbar-indeterminate-container",4,"ngIf"],[1,"p-progressbar-value","p-progressbar-value-animate",2,"display","flex"],["class","p-progressbar-label",3,"display",4,"ngIf"],[1,"p-progressbar-label"],[1,"p-progressbar-indeterminate-container"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(g,h){1&g&&(a.TgZ(0,"div",0),a.YNc(1,M,2,5,"div",1),a.YNc(2,w,2,2,"div",2),a.qZA()),2&g&&(a.Tol(h.styleClass),a.Q6J("ngStyle",h.style)("ngClass",a.WLB(7,Z,"determinate"===h.mode,"indeterminate"===h.mode)),a.uIk("aria-valuenow",h.value),a.xp6(1),a.Q6J("ngIf","determinate"===h.mode),a.xp6(1),a.Q6J("ngIf","indeterminate"===h.mode))},dependencies:[o.mk,o.O5,o.PC],styles:['.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}\n'],encapsulation:2,changeDetection:0})}return r})(),d=(()=>{class r{static \u0275fac=function(g){return new(g||r)};static \u0275mod=a.oAB({type:r});static \u0275inj=a.cJS({imports:[o.ez]})}return r})()}}]);