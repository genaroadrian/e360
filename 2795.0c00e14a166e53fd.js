"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[2795],{2795:(ke,b,c)=>{c.d(b,{dz:()=>_,kT:()=>ye});var h=c(6825),r=c(6814),e=c(4769),p=c(5219),m=c(2076),g=c(2537),v=c(4562),x=c(7778),T=c(9212),w=c(8377),u=c(4480),f=c(2332);const C=["mask"],S=function(i,s){return{showTransitionParams:i,hideTransitionParams:s}},y=function(i){return{value:"visible",params:i}};function k(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"p-galleriaContent",6),e.NdJ("@animation.start",function(a){e.CHM(t);const l=e.oxw(3);return e.KtG(l.onAnimationStart(a))})("@animation.done",function(a){e.CHM(t);const l=e.oxw(3);return e.KtG(l.onAnimationEnd(a))})("maskHide",function(){e.CHM(t);const a=e.oxw(3);return e.KtG(a.onMaskHide())})("activeItemChange",function(a){e.CHM(t);const l=e.oxw(3);return e.KtG(l.onActiveItemChange(a))}),e.qZA()}if(2&i){const t=e.oxw(3);e.Q6J("@animation",e.VKq(8,y,e.WLB(5,S,t.showTransitionOptions,t.hideTransitionOptions)))("value",t.value)("activeIndex",t.activeIndex)("numVisible",t.numVisible)("ngStyle",t.containerStyle)}}const O=function(i){return{"p-galleria-mask p-component-overlay p-component-overlay-enter":!0,"p-galleria-visible":i}};function A(i,s){if(1&i&&(e.TgZ(0,"div",3,4),e.YNc(2,k,1,10,"p-galleriaContent",5),e.qZA()),2&i){const t=e.oxw(2);e.Tol(t.maskClass),e.Q6J("ngClass",e.VKq(4,O,t.visible)),e.xp6(2),e.Q6J("ngIf",t.visible)}}function G(i,s){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,A,3,6,"div",2),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.maskVisible)}}function N(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"p-galleriaContent",7),e.NdJ("activeItemChange",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.onActiveItemChange(a))}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("value",t.value)("activeIndex",t.activeIndex)("numVisible",t.numVisible)}}function V(i,s){1&i&&e._UZ(0,"TimesIcon",11),2&i&&e.Q6J("styleClass","p-galleria-close-icon")}function M(i,s){}function P(i,s){1&i&&e.YNc(0,M,0,0,"ng-template")}function E(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.maskHide.emit())}),e.YNc(1,V,1,1,"TimesIcon",9),e.YNc(2,P,1,0,null,10),e.qZA()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!t.galleria.closeIconTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",t.galleria.closeIconTemplate)}}function D(i,s){if(1&i&&(e.TgZ(0,"div",12),e._UZ(1,"p-galleriaItemSlot",13),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("templates",t.galleria.templates)}}function J(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"p-galleriaThumbnails",14),e.NdJ("onActiveIndexChange",function(a){e.CHM(t);const l=e.oxw(2);return e.KtG(l.onActiveIndexChange(a))})("stopSlideShow",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.stopSlideShow())}),e.qZA()}if(2&i){const t=e.oxw(2);e.Q6J("containerId",t.id)("value",t.value)("activeIndex",t.activeIndex)("templates",t.galleria.templates)("numVisible",t.numVisible)("responsiveOptions",t.galleria.responsiveOptions)("circular",t.galleria.circular)("isVertical",t.isVertical())("contentHeight",t.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators",t.galleria.showThumbnailNavigators)("slideShowActive",t.slideShowActive)}}function Q(i,s){if(1&i&&(e.TgZ(0,"div",15),e._UZ(1,"p-galleriaItemSlot",16),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("templates",t.galleria.templates)}}const F=function(i,s,t){return{"p-galleria p-component":!0,"p-galleria-fullscreen":i,"p-galleria-indicator-onitem":s,"p-galleria-item-nav-onhover":t}},H=function(){return{}};function Z(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",1),e.YNc(1,E,3,2,"button",2),e.YNc(2,D,2,1,"div",3),e.TgZ(3,"div",4)(4,"p-galleriaItem",5),e.NdJ("onActiveIndexChange",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.onActiveIndexChange(a))})("startSlideShow",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.startSlideShow())})("stopSlideShow",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.stopSlideShow())}),e.qZA(),e.YNc(5,J,1,11,"p-galleriaThumbnails",6),e.qZA(),e.YNc(6,Q,2,1,"div",7),e.qZA()}if(2&i){const t=e.oxw();e.Tol(t.galleriaClass()),e.Q6J("ngClass",e.kEZ(20,F,t.galleria.fullScreen,t.galleria.showIndicatorsOnItem,t.galleria.showItemNavigatorsOnHover&&!t.galleria.fullScreen))("ngStyle",t.galleria.fullScreen?e.DdM(24,H):t.galleria.containerStyle),e.uIk("id",t.id),e.xp6(1),e.Q6J("ngIf",t.galleria.fullScreen),e.xp6(1),e.Q6J("ngIf",t.galleria.templates&&t.galleria.headerFacet),e.xp6(2),e.Q6J("value",t.value)("activeIndex",t.activeIndex)("circular",t.galleria.circular)("templates",t.galleria.templates)("showIndicators",t.galleria.showIndicators)("changeItemOnIndicatorHover",t.galleria.changeItemOnIndicatorHover)("indicatorFacet",t.galleria.indicatorFacet)("captionFacet",t.galleria.captionFacet)("showItemNavigators",t.galleria.showItemNavigators)("autoPlay",t.galleria.autoPlay)("slideShowActive",t.slideShowActive),e.xp6(1),e.Q6J("ngIf",t.galleria.showThumbnails),e.xp6(1),e.Q6J("ngIf",t.galleria.templates&&t.galleria.footerFacet)}}function Y(i,s){1&i&&e.GkF(0)}function K(i,s){if(1&i&&(e.ynx(0),e.YNc(1,Y,1,0,"ng-container",1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",t.contentTemplate)("ngTemplateOutletContext",t.context)}}function R(i,s){1&i&&e._UZ(0,"ChevronLeftIcon",9),2&i&&e.Q6J("styleClass","p-galleria-item-prev-icon")}function B(i,s){}function L(i,s){1&i&&e.YNc(0,B,0,0,"ng-template")}const U=function(i){return{"p-galleria-item-prev p-galleria-item-nav p-link":!0,"p-disabled":i}};function q(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.navBackward(a))}),e.YNc(1,R,1,1,"ChevronLeftIcon",7),e.YNc(2,L,1,0,null,8),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("ngClass",e.VKq(4,U,t.isNavBackwardDisabled()))("disabled",t.isNavBackwardDisabled()),e.xp6(1),e.Q6J("ngIf",!t.galleria.itemPreviousIconTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",t.galleria.itemPreviousIconTemplate)}}function W(i,s){1&i&&e._UZ(0,"ChevronRightIcon",9),2&i&&e.Q6J("styleClass","p-galleria-item-next-icon")}function $(i,s){}function j(i,s){1&i&&e.YNc(0,$,0,0,"ng-template")}const z=function(i){return{"p-galleria-item-next p-galleria-item-nav p-link":!0,"p-disabled":i}};function X(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.navForward(a))}),e.YNc(1,W,1,1,"ChevronRightIcon",7),e.YNc(2,j,1,0,null,8),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("ngClass",e.VKq(4,z,t.isNavForwardDisabled()))("disabled",t.isNavForwardDisabled()),e.xp6(1),e.Q6J("ngIf",!t.galleria.itemNextIconTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",t.galleria.itemNextIconTemplate)}}function ee(i,s){if(1&i&&(e.TgZ(0,"div",10),e._UZ(1,"p-galleriaItemSlot",11),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("item",t.activeItem)("templates",t.templates)}}function te(i,s){1&i&&e._UZ(0,"button",17)}const ie=function(i){return{"p-galleria-indicator":!0,"p-highlight":i}};function ne(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"li",14),e.NdJ("click",function(){const l=e.CHM(t).index,o=e.oxw(2);return e.KtG(o.onIndicatorClick(l))})("mouseenter",function(){const l=e.CHM(t).index,o=e.oxw(2);return e.KtG(o.onIndicatorMouseEnter(l))})("keydown.enter",function(){const l=e.CHM(t).index,o=e.oxw(2);return e.KtG(o.onIndicatorKeyDown(l))}),e.YNc(1,te,1,0,"button",15),e._UZ(2,"p-galleriaItemSlot",16),e.qZA()}if(2&i){const t=s.index,n=e.oxw(2);e.Q6J("ngClass",e.VKq(4,ie,n.isIndicatorItemActive(t))),e.xp6(1),e.Q6J("ngIf",!n.indicatorFacet),e.xp6(1),e.Q6J("index",t)("templates",n.templates)}}function ae(i,s){if(1&i&&(e.TgZ(0,"ul",12),e.YNc(1,ne,3,6,"li",13),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.value)}}const le=["itemsContainer"];function se(i,s){1&i&&e._UZ(0,"ChevronLeftIcon",11),2&i&&e.Q6J("styleClass","p-galleria-thumbnail-prev-icon")}function oe(i,s){1&i&&e._UZ(0,"ChevronUpIcon",11),2&i&&e.Q6J("styleClass","p-galleria-thumbnail-prev-icon")}function re(i,s){if(1&i&&(e.ynx(0),e.YNc(1,se,1,1,"ChevronLeftIcon",10),e.YNc(2,oe,1,1,"ChevronUpIcon",10),e.BQk()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!t.isVertical),e.xp6(1),e.Q6J("ngIf",t.isVertical)}}function ce(i,s){}function he(i,s){1&i&&e.YNc(0,ce,0,0,"ng-template")}const me=function(i){return{"p-galleria-thumbnail-prev p-link":!0,"p-disabled":i}};function de(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.navBackward(a))}),e.YNc(1,re,3,2,"ng-container",8),e.YNc(2,he,1,0,null,9),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("ngClass",e.VKq(4,me,t.isNavBackwardDisabled()))("disabled",t.isNavBackwardDisabled()),e.xp6(1),e.Q6J("ngIf",!t.galleria.previousThumbnailIconTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",t.galleria.previousThumbnailIconTemplate)}}const pe=function(i,s,t,n){return{"p-galleria-thumbnail-item":!0,"p-galleria-thumbnail-item-current":i,"p-galleria-thumbnail-item-active":s,"p-galleria-thumbnail-item-start":t,"p-galleria-thumbnail-item-end":n}};function ue(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",12)(1,"div",13),e.NdJ("click",function(){const l=e.CHM(t).index,o=e.oxw();return e.KtG(o.onItemClick(l))})("touchend",function(){const l=e.CHM(t).index,o=e.oxw();return e.KtG(o.onItemClick(l))})("keydown.enter",function(){const l=e.CHM(t).index,o=e.oxw();return e.KtG(o.onItemClick(l))}),e._UZ(2,"p-galleriaItemSlot",14),e.qZA()()}if(2&i){const t=s.$implicit,n=s.index,a=e.oxw();e.Q6J("ngClass",e.l5B(4,pe,a.activeIndex===n,a.isItemActive(n),a.firstItemAciveIndex()===n,a.lastItemActiveIndex()===n)),e.xp6(1),e.uIk("tabindex",a.getTabIndex(n)),e.xp6(1),e.Q6J("item",t)("templates",a.templates)}}function _e(i,s){1&i&&e._UZ(0,"ChevronRightIcon",12),2&i&&e.Q6J("ngClass","p-galleria-thumbnail-next-icon")}function ge(i,s){1&i&&e._UZ(0,"ChevronDownIcon",12),2&i&&e.Q6J("ngClass","p-galleria-thumbnail-next-icon")}function ve(i,s){if(1&i&&(e.ynx(0),e.YNc(1,_e,1,1,"ChevronRightIcon",15),e.YNc(2,ge,1,1,"ChevronDownIcon",15),e.BQk()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!t.isVertical),e.xp6(1),e.Q6J("ngIf",t.isVertical)}}function fe(i,s){}function Ie(i,s){1&i&&e.YNc(0,fe,0,0,"ng-template")}const xe=function(i){return{"p-galleria-thumbnail-next p-link":!0,"p-disabled":i}};function be(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.navForward(a))}),e.YNc(1,ve,3,2,"ng-container",8),e.YNc(2,Ie,1,0,null,9),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("ngClass",e.VKq(4,xe,t.isNavForwardDisabled()))("disabled",t.isNavForwardDisabled()),e.xp6(1),e.Q6J("ngIf",!t.galleria.nextThumbnailIconTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",t.galleria.nextThumbnailIconTemplate)}}const Te=function(i){return{height:i}};let _=(()=>{class i{document;element;cd;config;get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t}fullScreen=!1;id;value;numVisible=3;responsiveOptions;showItemNavigators=!1;showThumbnailNavigators=!0;showItemNavigatorsOnHover=!1;changeItemOnIndicatorHover=!1;circular=!1;autoPlay=!1;transitionInterval=4e3;showThumbnails=!0;thumbnailsPosition="bottom";verticalThumbnailViewPortHeight="300px";showIndicators=!1;showIndicatorsOnItem=!1;indicatorsPosition="bottom";baseZIndex=0;maskClass;containerClass;containerStyle;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(t){this._visible=t,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}activeIndexChange=new e.vpe;visibleChange=new e.vpe;mask;templates;_visible=!1;_activeIndex=0;headerFacet;footerFacet;indicatorFacet;captionFacet;closeIconTemplate;previousThumbnailIconTemplate;nextThumbnailIconTemplate;itemPreviousIconTemplate;itemNextIconTemplate;maskVisible=!1;constructor(t,n,a,l){this.document=t,this.element=n,this.cd=a,this.config=l}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"header":this.headerFacet=t.template;break;case"footer":this.footerFacet=t.template;break;case"indicator":this.indicatorFacet=t.template;break;case"closeicon":this.closeIconTemplate=t.template;break;case"itemnexticon":this.itemNextIconTemplate=t.template;break;case"itempreviousicon":this.itemPreviousIconTemplate=t.template;break;case"previousthumbnailicon":this.previousThumbnailIconTemplate=t.template;break;case"nextthumbnailicon":this.nextThumbnailIconTemplate=t.template;break;case"caption":this.captionFacet=t.template}})}ngOnChanges(t){t.value&&t.value.currentValue?.length<this.numVisible&&(this.numVisible=t.value.currentValue.length)}onMaskHide(){this.visible=!1,this.visibleChange.emit(!1)}onActiveItemChange(t){this.activeIndex!==t&&(this.activeIndex=t,this.activeIndexChange.emit(t))}onAnimationStart(t){switch(t.toState){case"visible":this.enableModality();break;case"void":m.p.addClass(this.mask?.nativeElement,"p-component-overlay-leave")}}onAnimationEnd(t){"void"===t.toState&&this.disableModality()}enableModality(){m.p.addClass(this.document.body,"p-overflow-hidden"),this.cd.markForCheck(),this.mask&&f.P9.set("modal",this.mask.nativeElement,this.baseZIndex||this.config.zIndex.modal)}disableModality(){m.p.removeClass(this.document.body,"p-overflow-hidden"),this.maskVisible=!1,this.cd.markForCheck(),this.mask&&f.P9.clear(this.mask.nativeElement)}ngOnDestroy(){this.fullScreen&&m.p.removeClass(this.document.body,"p-overflow-hidden"),this.mask&&this.disableModality()}static \u0275fac=function(n){return new(n||i)(e.Y36(r.K0),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(p.b4))};static \u0275cmp=e.Xpm({type:i,selectors:[["p-galleria"]],contentQueries:function(n,a,l){if(1&n&&e.Suo(l,p.jx,4),2&n){let o;e.iGM(o=e.CRH())&&(a.templates=o)}},viewQuery:function(n,a){if(1&n&&e.Gf(C,5),2&n){let l;e.iGM(l=e.CRH())&&(a.mask=l.first)}},hostAttrs:[1,"p-element"],inputs:{activeIndex:"activeIndex",fullScreen:"fullScreen",id:"id",value:"value",numVisible:"numVisible",responsiveOptions:"responsiveOptions",showItemNavigators:"showItemNavigators",showThumbnailNavigators:"showThumbnailNavigators",showItemNavigatorsOnHover:"showItemNavigatorsOnHover",changeItemOnIndicatorHover:"changeItemOnIndicatorHover",circular:"circular",autoPlay:"autoPlay",transitionInterval:"transitionInterval",showThumbnails:"showThumbnails",thumbnailsPosition:"thumbnailsPosition",verticalThumbnailViewPortHeight:"verticalThumbnailViewPortHeight",showIndicators:"showIndicators",showIndicatorsOnItem:"showIndicatorsOnItem",indicatorsPosition:"indicatorsPosition",baseZIndex:"baseZIndex",maskClass:"maskClass",containerClass:"containerClass",containerStyle:"containerStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",visible:"visible"},outputs:{activeIndexChange:"activeIndexChange",visibleChange:"visibleChange"},features:[e.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["windowed",""],[3,"ngClass","class",4,"ngIf"],[3,"ngClass"],["mask",""],[3,"value","activeIndex","numVisible","ngStyle","maskHide","activeItemChange",4,"ngIf"],[3,"value","activeIndex","numVisible","ngStyle","maskHide","activeItemChange"],[3,"value","activeIndex","numVisible","activeItemChange"]],template:function(n,a){if(1&n&&(e.YNc(0,G,2,1,"div",0),e.YNc(1,N,1,3,"ng-template",null,1,e.W1O)),2&n){const l=e.MAs(2);e.Q6J("ngIf",a.fullScreen)("ngIfElse",l)}},dependencies:function(){return[r.mk,r.O5,r.PC,we]},styles:[".p-galleria-content{display:flex;flex-direction:column}.p-galleria-item-wrapper{display:flex;flex-direction:column;position:relative}.p-galleria-item-container{position:relative;display:flex;height:100%}.p-galleria-item-nav{position:absolute;top:50%;margin-top:-.5rem;display:inline-flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-item-prev{left:0;border-top-left-radius:0;border-bottom-left-radius:0}.p-galleria-item-next{right:0;border-top-right-radius:0;border-bottom-right-radius:0}.p-galleria-item{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{pointer-events:all;opacity:1}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{position:absolute;bottom:0;left:0;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;overflow:auto;flex-shrink:0}.p-galleria-thumbnail-prev,.p-galleria-thumbnail-next{align-self:center;flex:0 0 auto;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-galleria-thumbnail-prev span,.p-galleria-thumbnail-next span{display:flex;justify-content:center;align-items:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden;width:100%}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{overflow:auto;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.5}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{display:flex;align-items:center;justify-content:center}.p-galleria-indicator>button{display:inline-flex;align-items:center}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{flex-direction:row;align-items:center}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{position:absolute;display:flex;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{top:0;left:0;width:100%;align-items:flex-start}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{right:0;top:0;height:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{bottom:0;left:0;width:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{left:0;top:0;height:100%;align-items:flex-start}.p-galleria-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:transparent;transition-property:background-color}.p-galleria-close{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-mask .p-galleria-item-nav{position:fixed;top:50%;margin-top:-.5rem}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}\n"],encapsulation:2,data:{animation:[(0,h.X$)("animation",[(0,h.eR)("void => visible",[(0,h.oB)({transform:"scale(0.7)",opacity:0}),(0,h.jt)("{{showTransitionParams}}")]),(0,h.eR)("visible => void",[(0,h.jt)("{{hideTransitionParams}}",(0,h.oB)({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return i})(),we=(()=>{class i{galleria;cd;differs;get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t}value=[];numVisible;maskHide=new e.vpe;activeItemChange=new e.vpe;id;_activeIndex=0;slideShowActive=!0;interval;styleClass;differ;constructor(t,n,a){this.galleria=t,this.cd=n,this.differs=a,this.id=this.galleria.id||(0,f.Th)(),this.differ=this.differs.find(this.galleria).create()}ngDoCheck(){const t=this.differ.diff(this.galleria);t&&t.forEachItem.length>0&&this.cd.markForCheck()}galleriaClass(){const t=this.galleria.showThumbnails&&this.getPositionClass("p-galleria-thumbnails",this.galleria.thumbnailsPosition),n=this.galleria.showIndicators&&this.getPositionClass("p-galleria-indicators",this.galleria.indicatorsPosition);return(this.galleria.containerClass?this.galleria.containerClass+" ":"")+(t?t+" ":"")+(n?n+" ":"")}startSlideShow(){this.interval=setInterval(()=>{let t=this.galleria.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1;this.onActiveIndexChange(t),this.activeIndex=t},this.galleria.transitionInterval),this.slideShowActive=!0}stopSlideShow(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1}getPositionClass(t,n){const l=["top","left","bottom","right"].find(o=>o===n);return l?`${t}-${l}`:""}isVertical(){return"left"===this.galleria.thumbnailsPosition||"right"===this.galleria.thumbnailsPosition}onActiveIndexChange(t){this.activeIndex!==t&&(this.activeIndex=t,this.activeItemChange.emit(this.activeIndex))}static \u0275fac=function(n){return new(n||i)(e.Y36(_),e.Y36(e.sBO),e.Y36(e.aQg))};static \u0275cmp=e.Xpm({type:i,selectors:[["p-galleriaContent"]],inputs:{activeIndex:"activeIndex",value:"value",numVisible:"numVisible"},outputs:{maskHide:"maskHide",activeItemChange:"activeItemChange"},decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class",4,"ngIf"],[3,"ngClass","ngStyle"],["type","button","class","p-galleria-close p-link","pRipple","",3,"click",4,"ngIf"],["class","p-galleria-header",4,"ngIf"],[1,"p-galleria-content"],[3,"value","activeIndex","circular","templates","showIndicators","changeItemOnIndicatorHover","indicatorFacet","captionFacet","showItemNavigators","autoPlay","slideShowActive","onActiveIndexChange","startSlideShow","stopSlideShow"],[3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","onActiveIndexChange","stopSlideShow",4,"ngIf"],["class","p-galleria-footer",4,"ngIf"],["type","button","pRipple","",1,"p-galleria-close","p-link",3,"click"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-header"],["type","header",3,"templates"],[3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","onActiveIndexChange","stopSlideShow"],[1,"p-galleria-footer"],["type","footer",3,"templates"]],template:function(n,a){1&n&&e.YNc(0,Z,7,25,"div",0),2&n&&e.Q6J("ngIf",a.value&&a.value.length>0)},dependencies:function(){return[r.mk,r.O5,r.tP,r.PC,u.H,x.q,I,Ce,Se]},encapsulation:2,changeDetection:0})}return i})(),I=(()=>{class i{templates;index;get item(){return this._item}set item(t){this._item=t,this.templates&&this.templates.forEach(n=>{if(n.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=n.template}})}type;contentTemplate;context;_item;ngAfterContentInit(){this.templates?.forEach(t=>{if(t.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=t.template;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=t.template;break;default:this.context={},this.contentTemplate=t.template}})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=e.Xpm({type:i,selectors:[["p-galleriaItemSlot"]],inputs:{templates:"templates",index:"index",item:"item",type:"type"},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,a){1&n&&e.YNc(0,K,2,2,"ng-container",0),2&n&&e.Q6J("ngIf",a.contentTemplate)},dependencies:[r.O5,r.tP],encapsulation:2,changeDetection:0})}return i})(),Ce=(()=>{class i{galleria;circular=!1;value;showItemNavigators=!1;showIndicators=!0;slideShowActive=!0;changeItemOnIndicatorHover=!0;autoPlay=!1;templates;indicatorFacet;captionFacet;startSlideShow=new e.vpe;stopSlideShow=new e.vpe;onActiveIndexChange=new e.vpe;get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t}get activeItem(){return this.value&&this.value[this._activeIndex]}_activeIndex=0;constructor(t){this.galleria=t}ngOnChanges({autoPlay:t}){t?.currentValue&&this.startSlideShow.emit(),t&&!1===t.currentValue&&this.stopTheSlideShow()}next(){this.onActiveIndexChange.emit(this.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1)}prev(){this.onActiveIndexChange.emit(this.circular&&0===this.activeIndex?this.value.length-1:0!==this.activeIndex?this.activeIndex-1:0)}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}navForward(t){this.stopTheSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()}navBackward(t){this.stopTheSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()}onIndicatorClick(t){this.stopTheSlideShow(),this.onActiveIndexChange.emit(t)}onIndicatorMouseEnter(t){this.changeItemOnIndicatorHover&&(this.stopTheSlideShow(),this.onActiveIndexChange.emit(t))}onIndicatorKeyDown(t){this.stopTheSlideShow(),this.onActiveIndexChange.emit(t)}isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1}isNavBackwardDisabled(){return!this.circular&&0===this.activeIndex}isIndicatorItemActive(t){return this.activeIndex===t}static \u0275fac=function(n){return new(n||i)(e.Y36(_))};static \u0275cmp=e.Xpm({type:i,selectors:[["p-galleriaItem"]],inputs:{circular:"circular",value:"value",showItemNavigators:"showItemNavigators",showIndicators:"showIndicators",slideShowActive:"slideShowActive",changeItemOnIndicatorHover:"changeItemOnIndicatorHover",autoPlay:"autoPlay",templates:"templates",indicatorFacet:"indicatorFacet",captionFacet:"captionFacet",activeIndex:"activeIndex"},outputs:{startSlideShow:"startSlideShow",stopSlideShow:"stopSlideShow",onActiveIndexChange:"onActiveIndexChange"},features:[e.TTD],decls:7,vars:6,consts:[[1,"p-galleria-item-wrapper"],[1,"p-galleria-item-container"],["type","button","pRipple","",3,"ngClass","disabled","click",4,"ngIf"],["type","item",1,"p-galleria-item",3,"item","templates"],["class","p-galleria-caption",4,"ngIf"],["class","p-galleria-indicators p-reset",4,"ngIf"],["type","button","pRipple","",3,"ngClass","disabled","click"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-caption"],["type","caption",3,"item","templates"],[1,"p-galleria-indicators","p-reset"],["tabindex","0",3,"ngClass","click","mouseenter","keydown.enter",4,"ngFor","ngForOf"],["tabindex","0",3,"ngClass","click","mouseenter","keydown.enter"],["type","button","tabIndex","-1","class","p-link",4,"ngIf"],["type","indicator",3,"index","templates"],["type","button","tabIndex","-1",1,"p-link"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,q,3,6,"button",2),e._UZ(3,"p-galleriaItemSlot",3),e.YNc(4,X,3,6,"button",2),e.YNc(5,ee,2,2,"div",4),e.qZA(),e.YNc(6,ae,2,1,"ul",5),e.qZA()),2&n&&(e.xp6(2),e.Q6J("ngIf",a.showItemNavigators),e.xp6(1),e.Q6J("item",a.activeItem)("templates",a.templates),e.xp6(1),e.Q6J("ngIf",a.showItemNavigators),e.xp6(1),e.Q6J("ngIf",a.captionFacet),e.xp6(1),e.Q6J("ngIf",a.showIndicators))},dependencies:function(){return[r.mk,r.sg,r.O5,r.tP,u.H,v.X,g.w,I]},encapsulation:2,changeDetection:0})}return i})(),Se=(()=>{class i{galleria;document;platformId;renderer;cd;containerId;value;isVertical=!1;slideShowActive=!1;circular=!1;responsiveOptions;contentHeight="300px";showThumbnailNavigators=!0;templates;onActiveIndexChange=new e.vpe;stopSlideShow=new e.vpe;itemsContainer;get numVisible(){return this._numVisible}set numVisible(t){this._numVisible=t,this._oldNumVisible=this.d_numVisible,this.d_numVisible=t}get activeIndex(){return this._activeIndex}set activeIndex(t){this._oldactiveIndex=this._activeIndex,this._activeIndex=t}index;startPos=null;thumbnailsStyle=null;sortedResponsiveOptions=null;totalShiftedItems=0;page=0;documentResizeListener;_numVisible=0;d_numVisible=0;_oldNumVisible=0;_activeIndex=0;_oldactiveIndex=0;constructor(t,n,a,l,o){this.galleria=t,this.document=n,this.platformId=a,this.renderer=l,this.cd=o}ngOnInit(){this.createStyle(),this.responsiveOptions&&this.bindDocumentListeners()}ngAfterContentChecked(){let t=this.totalShiftedItems;(this._oldNumVisible!==this.d_numVisible||this._oldactiveIndex!==this._activeIndex)&&this.itemsContainer&&(t=this._activeIndex<=this.getMedianItemIndex()?0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this._activeIndex?this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this._activeIndex&&this.d_numVisible%2==0?-1*this._activeIndex+this.getMedianItemIndex()+1:-1*this._activeIndex+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.itemsContainer&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`),this._oldactiveIndex!==this._activeIndex&&(m.p.removeClass(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this._oldactiveIndex=this._activeIndex,this._oldNumVisible=this.d_numVisible)}ngAfterViewInit(){this.calculatePosition()}createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=this.document.createElement("style"),this.document.body.appendChild(this.thumbnailsStyle));let t=`\n            #${this.containerId} .p-galleria-thumbnail-item {\n                flex: 1 0 ${100/this.d_numVisible}%\n            }\n        `;if(this.responsiveOptions){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((n,a)=>{const l=n.breakpoint,o=a.breakpoint;let d=null;return d=null==l&&null!=o?-1:null!=l&&null==o?1:null==l&&null==o?0:"string"==typeof l&&"string"==typeof o?l.localeCompare(o,void 0,{numeric:!0}):l<o?-1:l>o?1:0,-1*d});for(let n=0;n<this.sortedResponsiveOptions.length;n++){let a=this.sortedResponsiveOptions[n];t+=`\n                    @media screen and (max-width: ${a.breakpoint}) {\n                        #${this.containerId} .p-galleria-thumbnail-item {\n                            flex: 1 0 ${100/a.numVisible}%\n                        }\n                    }\n                `}}this.thumbnailsStyle.innerHTML=t}calculatePosition(){if(this.itemsContainer&&this.sortedResponsiveOptions){let t=window.innerWidth,n={numVisible:this._numVisible};for(let a=0;a<this.sortedResponsiveOptions.length;a++){let l=this.sortedResponsiveOptions[a];parseInt(l.breakpoint,10)>=t&&(n=l)}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible,this.cd.markForCheck())}}getTabIndex(t){return this.isItemActive(t)?0:null}navForward(t){this.stopTheSlideShow();let n=this._activeIndex+1;n+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1),this.onActiveIndexChange.emit(this.circular&&this.value.length-1===this._activeIndex?0:n),t.cancelable&&t.preventDefault()}navBackward(t){this.stopTheSlideShow();let n=0!==this._activeIndex?this._activeIndex-1:0;this.d_numVisible-(n+this.totalShiftedItems)-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!=0||this.circular)&&this.step(1),this.onActiveIndexChange.emit(this.circular&&0===this._activeIndex?this.value.length-1:n),t.cancelable&&t.preventDefault()}onItemClick(t){this.stopTheSlideShow();let n=t;if(n!==this._activeIndex){const a=n+this.totalShiftedItems;let l=0;n<this._activeIndex?(l=this.d_numVisible-a-1-this.getMedianItemIndex(),l>0&&-1*this.totalShiftedItems!=0&&this.step(l)):(l=this.getMedianItemIndex()-a,l<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(l)),this.activeIndex=n,this.onActiveIndexChange.emit(this.activeIndex)}}step(t){let n=this.totalShiftedItems+t;t<0&&-1*n+this.d_numVisible>this.value.length-1?n=this.d_numVisible-this.value.length:t>0&&n>0&&(n=0),this.circular&&(t<0&&this.value.length-1===this._activeIndex?n=0:t>0&&0===this._activeIndex&&(n=this.d_numVisible-this.value.length)),this.itemsContainer&&(m.p.removeClass(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${n*(100/this.d_numVisible)}%, 0)`:`translate3d(${n*(100/this.d_numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}changePageOnTouch(t,n){n<0?this.navForward(t):this.navBackward(t)}getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0}getMedianItemIndex(){let t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1}onTransitionEnd(){this.itemsContainer&&this.itemsContainer.nativeElement&&(m.p.addClass(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="")}onTouchEnd(t){let n=t.changedTouches[0];this.changePageOnTouch(t,this.isVertical?n.pageY-this.startPos.y:n.pageX-this.startPos.x)}onTouchMove(t){t.cancelable&&t.preventDefault()}onTouchStart(t){let n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}}isNavBackwardDisabled(){return!this.circular&&0===this._activeIndex||this.value.length<=this.d_numVisible}isNavForwardDisabled(){return!this.circular&&this._activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}firstItemAciveIndex(){return-1*this.totalShiftedItems}lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1}isItemActive(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t}bindDocumentListeners(){(0,r.NF)(this.platformId)&&(this.documentResizeListener=this.renderer.listen(this.document.defaultView||"window","resize",()=>{this.calculatePosition()}))}unbindDocumentListeners(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle)}static \u0275fac=function(n){return new(n||i)(e.Y36(_),e.Y36(r.K0),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:i,selectors:[["p-galleriaThumbnails"]],viewQuery:function(n,a){if(1&n&&e.Gf(le,5),2&n){let l;e.iGM(l=e.CRH())&&(a.itemsContainer=l.first)}},inputs:{containerId:"containerId",value:"value",isVertical:"isVertical",slideShowActive:"slideShowActive",circular:"circular",responsiveOptions:"responsiveOptions",contentHeight:"contentHeight",showThumbnailNavigators:"showThumbnailNavigators",templates:"templates",numVisible:"numVisible",activeIndex:"activeIndex"},outputs:{onActiveIndexChange:"onActiveIndexChange",stopSlideShow:"stopSlideShow"},decls:8,vars:6,consts:[[1,"p-galleria-thumbnail-wrapper"],[1,"p-galleria-thumbnail-container"],["type","button","pRipple","",3,"ngClass","disabled","click",4,"ngIf"],[1,"p-galleria-thumbnail-items-container",3,"ngStyle"],[1,"p-galleria-thumbnail-items",3,"transitionend","touchstart","touchmove"],["itemsContainer",""],[3,"ngClass",4,"ngFor","ngForOf"],["type","button","pRipple","",3,"ngClass","disabled","click"],[4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[3,"ngClass"],[1,"p-galleria-thumbnail-item-content",3,"click","touchend","keydown.enter"],["type","thumbnail",3,"item","templates"],[3,"ngClass",4,"ngIf"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,de,3,6,"button",2),e.TgZ(3,"div",3)(4,"div",4,5),e.NdJ("transitionend",function(){return a.onTransitionEnd()})("touchstart",function(o){return a.onTouchStart(o)})("touchmove",function(o){return a.onTouchMove(o)}),e.YNc(6,ue,3,9,"div",6),e.qZA()(),e.YNc(7,be,3,6,"button",2),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngIf",a.showThumbnailNavigators),e.xp6(1),e.Q6J("ngStyle",e.VKq(4,Te,a.isVertical?a.contentHeight:"")),e.xp6(3),e.Q6J("ngForOf",a.value),e.xp6(1),e.Q6J("ngIf",a.showThumbnailNavigators))},dependencies:function(){return[r.mk,r.sg,r.O5,r.tP,r.PC,u.H,v.X,g.w,I]},encapsulation:2,changeDetection:0})}return i})(),ye=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[r.ez,p.m8,u.T,x.q,v.X,g.w,T.T,w.g,r.ez,p.m8]})}return i})()}}]);