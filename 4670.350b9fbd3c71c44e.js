"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[4670],{4670:(z,p,r)=>{r.r(p),r.d(p,{ProductsGridModule:()=>O});var d=r(6814),g=r(3979),l=r(5619),c=r(9773),n=r(9397),h=r(1631),f=r(6306),y=r(8504),u=r(5631),i=r(3461),t=r(4769),v=r(7658),C=r(2864),P=r(7193),R=r(2947);let b=(()=>{class o extends u.y{constructor(){super(...arguments),this.params=new l.X(new i.b),this.totalRecords=0,this.first=0,this.rows=10,this.sizeOptions=[10,20,30]}ngOnInit(){this.params.pipe((0,c.R)(this.$unSubscribe),(0,n.b)(s=>{this.first=s.page-1,this.rows=s.size})).subscribe()}onPageChange(s){this.first=s.first,this.rows=s.rows;const a=this.params.getValue();a.page=s.page+1,a.size=s.rows,this.params.next(a)}static#t=this.\u0275fac=function(){let s;return function(e){return(s||(s=t.n5z(o)))(e||o)}}();static#s=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-epagination"]],inputs:{params:"params",totalRecords:"totalRecords"},features:[t.qOj],decls:1,vars:5,consts:[["currentPageReportTemplate","Mostrando {first} - {last} de {totalRecords}",3,"first","rows","totalRecords","rowsPerPageOptions","showCurrentPageReport","onPageChange"]],template:function(a,e){1&a&&(t.TgZ(0,"p-paginator",0),t.NdJ("onPageChange",function(j){return e.onPageChange(j)}),t.qZA()),2&a&&t.Q6J("first",e.first)("rows",e.rows)("totalRecords",e.totalRecords)("rowsPerPageOptions",e.sizeOptions)("showCurrentPageReport",!0)},dependencies:[R.D],encapsulation:2})}return o})();function Z(o,S){if(1&o&&(t.TgZ(0,"div",7),t._UZ(1,"app-category-product",8),t.qZA()),2&o){const s=S.$implicit;t.xp6(1),t.Q6J("product",s)}}const I=[{path:"category/:category",component:(()=>{class o extends u.y{constructor(s,a){super(),this.categoriesService=s,this.productsService=a,this.categoryId=null,this.category=null,this.products=[],this.params=new l.X(new i.b),this.totalItems=0,this.activatedRoute.params.pipe((0,c.R)(this.$unSubscribe),(0,n.b)(e=>{this.categoryId=Number(e.category)}),(0,h.z)(()=>this.findCategory())).subscribe()}ngOnInit(){this.params.pipe((0,c.R)(this.$unSubscribe),(0,n.b)(s=>{this.getProductsByCategory(s).subscribe()})).subscribe()}findCategory(){return this.categoriesService.getById(this.categoryId).pipe((0,f.K)(s=>(404===s.status&&this.notFound(),(0,y._)(()=>s))),(0,n.b)(s=>{this.category=s;const a=new i.b;this.params.next(a)}))}getProductsByCategory(s){const a=s??new i.b;return this.productsService.getByCategory(this.categoryId,a.getParams()).pipe((0,n.b)(e=>{this.products=e.content,this.totalItems=e.totalElements}))}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(v.G),t.Y36(C.s))};static#s=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],features:[t.qOj],decls:12,vars:6,consts:[[1,"container","px-5"],[1,"col-12","mb-2","pb-0","lg:mt-4","lg:mb-4","flex","justify-content-center"],[1,"text-900","font-normal","category-name","underline"],[1,"grid"],[1,"col-12","flex","justify-content-end"],[3,"params","totalRecords"],["class","col-12 md:col-6 lg:col-3 p-3 mt-4 lg:mt-0 card-container",4,"ngFor","ngForOf"],[1,"col-12","md:col-6","lg:col-3","p-3","mt-4","lg:mt-0","card-container"],[3,"product"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4),t._UZ(6,"app-epagination",5),t.qZA()(),t.TgZ(7,"div",3),t.YNc(8,Z,2,1,"div",6),t.qZA(),t.TgZ(9,"div",3)(10,"div",4),t._UZ(11,"app-epagination",5),t.qZA()()()),2&a&&(t.xp6(3),t.hij(" ",null==e.category?null:e.category.nombre," "),t.xp6(3),t.Q6J("params",e.params)("totalRecords",e.totalItems),t.xp6(2),t.Q6J("ngForOf",e.products),t.xp6(3),t.Q6J("params",e.params)("totalRecords",e.totalItems))},dependencies:[d.sg,P.j,b]})}return o})()}];let T=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#s=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(I),g.Bz]})}return o})();var B=r(6288);let O=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#s=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[d.ez,T,B.a]})}return o})()}}]);