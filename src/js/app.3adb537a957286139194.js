webpackJsonp([0],[,,function(t,e){var n={versions:function(){var t=navigator.userAgent;return{trident:t.indexOf("Trident")>-1,presto:t.indexOf("Presto")>-1,webKit:t.indexOf("AppleWebKit")>-1,gecko:t.indexOf("Gecko")>-1&&-1===t.indexOf("KHTML"),mobile:!!t.match(/AppleWebKit.*Mobile.*/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1,iPad:t.indexOf("iPad")>-1,webApp:-1===t.indexOf("Safari"),weixin:t.indexOf("MicroMessenger")>-1,qq:" qq"===t.match(/\sQQ/i),chrome:navigator.userAgent.indexOf("Chrome")>-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()};t.exports=n},,function(t,e,n){"use strict";var i=n(38),s=n.n(i),a=n(39),r=n.n(a),o=n(40),u=n.n(o),c={AnimateText:s.a,HButton:r.a,MenuButton:u.a},l=function t(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t.installed)for(var n in c)e.component(n,c[n])};e.a={install:l}},function(t,e,n){"use strict";var i=n(1),s=n(61),a=n(46),r=n.n(a),o=n(48),u=n.n(o),c=n(43),l=n.n(c),d=n(47),f=n.n(d);i.a.use(s.a),e.a=new s.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:r.a},{path:"/works",component:u.a},{path:"/collections",component:l.a},{path:"/resume",component:f.a}]})},function(t,e,n){n(32);var i=n(0)(n(9),n(57),null,null);t.exports=i.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n(6),a=n.n(s),r=n(5),o=n(4);i.a.config.productionTip=!1,i.a.use(o.a),new i.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(42),s=n.n(i),a=n(41),r=n.n(a);e.default={name:"app",components:{Topbar:s.a,SvgFilter:r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),s=n.n(i);e.default={name:"AnimateText",props:{value:null,time:{type:Number,default:500},isNumber:{type:Boolean,default:!1},startNumber:{type:Number,default:0},changeCount:{type:Number,default:32}},data:function(){return{animateText:null,ready:!1}},watch:{value:function(t){var e=this;this.ready=!1,setTimeout(function(){e.init()},30)},time:function(t){this.animateText?this.animateText.play(t):this.init()}},mounted:function(){this.init()},methods:{init:function(){(this.value||this.value-0==0)&&(this.ready=!0,this.animateText=new s.a(this.$el,{time:this.time,isNumber:this.isNumber,startNumber:this.startNumber,changeCount:this.changeCount,onAnimated:this.onAnimated}))},onAnimated:function(){this.$emit("animated")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Button",props:{type:{type:String,default:"ghost"}},computed:{rootClass:function(){return this.type}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MenuButton",data:function(){return{state:1}},computed:{rootClassName:function(){return{0:"close",1:"open"}[this.state]}},methods:{toggle:function(){this.state=Number(!this.state),this.$emit("changed",this.state)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SvgFilter"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=n.n(i),a=[{name:"HOME",url:"/home"},{name:"WORKS",url:"/works"},{name:"COLLECTION",url:"/collections"},{name:"RESUME",url:"/resume"}];e.default={name:"Topbar",data:function(){return{isOpenMenu:!1,moveFilterStyle:s.a.versions.chrome||s.a.versions.ios?"x":"",menus:[]}},computed:{currentPath:function(){return this.$route.path},orderMenus:function(){var t=this,e=this.menus,n=[];return e.forEach(function(e){0===t.currentPath.indexOf(e.url)?n.unshift(e):n.push(e)}),n}},mounted:function(){},methods:{toggleMenuState:function(t){var e=this;this.isOpenMenu=!t,this.menus=[];var n=[];window.clearInterval(this.intervalId),this.isOpenMenu&&(this.intervalId=setInterval(function(){if(!a[n.length])return window.clearInterval(e.intervalId);n.push(a[n.length]),e.menus=n},100)),s.a.versions.webKit&&(this.moveFilterStyle="x",window.clearTimeout(this.moveFilterStyleTimeId),this.moveFilterStyleTimeId=setTimeout(function(){e.moveFilterStyle="y"},1e3))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Works"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=n.n(i);e.default={name:"Background",props:{maskOpacity:{type:Number,default:.4}},data:function(){return{position:{x:50,y:50}}},computed:{backgroundStyle:function(){return{backgroundPositionX:this.position.x+"%",backgroundPositionY:this.position.y+"%"}},maskStyle:function(){return{opacity:this.maskOpacity}}},mounted:function(){!s.a.versions.mobile&&s.a.versions.chrome&&this.addEventListener()},beforeDestroy:function(){document.removeEventListener("mousemove",this.mousemoveEvent)},methods:{addEventListener:function(){var t=this,e=!0,n=document.body,i=n.clientWidth,s=n.clientHeight;document.addEventListener("mousemove",this.mousemoveEvent=function(n){if(e){var a=n.pageX,r=n.pageY,o=50+(a-i/2)/i*10,u=50+(r-s/2)/s*100;t.position.x=o,t.position.y=u,setTimeout(function(){e=!0},100),e=!1}})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"HeaderImage",data:function(){return{show:!1}},mounted:function(){var t=this;setTimeout(function(){t.show=!0},500)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(45),s=n.n(i),a=n(44),r=n.n(a);e.default={name:"Home",components:{HeaderImage:s.a,Background:r.a},data:function(){return{message:{name:"邱国辉",descriptions:"It is because of dream, you become a great man.",github:"https://github.com/qgh810"}}},computed:{workTime:function(){return parseInt((new Date-new Date("2014/8/2"))/864e5)}},methods:{goGitbug:function(t){window.focus(),window.open(t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Works"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Works"}},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){t.exports=n.p+"src/img/header-image.524ec05.jpeg"},function(t,e,n){n(30);var i=n(0)(n(10),n(55),"data-v-3c07aa44",null);t.exports=i.exports},function(t,e,n){n(34);var i=n(0)(n(11),n(59),null,null);t.exports=i.exports},function(t,e,n){n(33);var i=n(0)(n(12),n(58),"data-v-6fe7cede",null);t.exports=i.exports},function(t,e,n){n(24);var i=n(0)(n(13),n(49),"data-v-00bec544",null);t.exports=i.exports},function(t,e,n){n(28);var i=n(0)(n(14),n(53),"data-v-323e02b8",null);t.exports=i.exports},function(t,e,n){n(35);var i=n(0)(n(15),n(60),null,null);t.exports=i.exports},function(t,e,n){n(31);var i=n(0)(n(16),n(56),"data-v-57f4a086",null);t.exports=i.exports},function(t,e,n){n(26);var i=n(0)(n(17),n(51),"data-v-1e20421a",null);t.exports=i.exports},function(t,e,n){n(25);var i=n(0)(n(18),n(50),null,null);t.exports=i.exports},function(t,e,n){n(29);var i=n(0)(n(19),n(54),null,null);t.exports=i.exports},function(t,e,n){n(27);var i=n(0)(n(20),n(52),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"svg-filters-root"},[n("svg",{staticClass:"svg-filters-root",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("defs",[n("filter",{attrs:{id:"filter-blur-x",x:"-20%",y:"0",width:"140%",height:"100%"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"12,0"}})],1),t._v(" "),n("filter",{attrs:{id:"filter-blur-y",x:"0",y:"20%",width:"100%",height:"140%"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"0,20"}})],1)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-root"},[n("background"),t._v(" "),n("div",{staticClass:"content-container"},[n("header-image"),t._v(" "),n("div",{staticClass:"text-box"},[n("p",{staticClass:"name"},[t._v(t._s(t.message.name))]),t._v(" "),n("div",{staticClass:"description"},[n("p",[n("animate-text",{attrs:{value:t.message.descriptions,time:1e3}})],1),t._v(" "),n("p",[n("h-button",{staticClass:"link",nativeOn:{click:function(e){t.goGitbug(t.message.github)}}},[t._v("github")])],1)])])],1)],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-image-root"},[i("transition",{attrs:{name:"header-image-transition"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"header-image"},[i("img",{attrs:{src:n(37),alt:"",width:"100%",height:"100%"}})])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"works-roots"},[t._v("\n  我的作品\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topbar-root"},[n("div",{staticClass:"menu-btn-box"},[n("menu-button",{on:{changed:t.toggleMenuState}})],1),t._v(" "),n("transition",{attrs:{name:"menu-container-transition"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpenMenu,expression:"isOpenMenu"}],staticClass:"menu-container",class:{open:t.isOpenMenu}},[n("div",{staticClass:"menus"},[n("transition-group",{attrs:{name:"menu-transition"}},t._l(t.orderMenus,function(e){return n("div",{key:e.name,staticClass:"menu",class:"filter-"+t.moveFilterStyle},[n("router-link",{attrs:{to:e.url}},[t._v(t._s(e.name))])],1)}))],1)])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"works-roots"},[t._v("\n  我的简历\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"x-animate-text-root",class:{"x-animate-text-hidden":!t.ready},domProps:{innerHTML:t._s(t.value)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-root"},[n("div",{staticClass:"background",style:t.backgroundStyle}),t._v(" "),n("div",{staticClass:"mask",style:t.maskStyle})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("topbar"),t._v(" "),n("transition",{attrs:{name:"page-transition",mode:"in-out"}},[n("router-view")],1),t._v(" "),n("svg-filter")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-button-root",class:t.rootClassName,on:{click:t.toggle}},[n("div",{staticClass:"line line1"}),t._v(" "),n("div",{staticClass:"line line2"}),t._v(" "),n("div",{staticClass:"line line3"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button-root",class:t.rootClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"works-roots"},[t._v("\n  我的收藏\n")])},staticRenderFns:[]}}],[8]);
//# sourceMappingURL=app.3adb537a957286139194.js.map