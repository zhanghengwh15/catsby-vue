webpackJsonp([57],{TdIe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("cdA+"),s=a("gKXb"),i=a("0xDb"),o={data:function(){return{updatePassowrdVisible:!1,indexNav:[],activeIndex:"1"}},components:{UpdatePassword:n.default,NabarMenu:s.default},computed:{navbarLayoutType:{get:function(){return this.$store.state.common.navbarLayoutType}},sidebarFold:{get:function(){return this.$store.state.common.sidebarFold},set:function(t){this.$store.commit("common/updateSidebarFold",t)}},mainTabs:{get:function(){return this.$store.state.common.mainTabs},set:function(t){this.$store.commit("common/updateMainTabs",t)}},userName:{get:function(){return this.$store.state.user.name}}},created:function(){this.loadData()},methods:{updatePasswordHandle:function(){var t=this;this.updatePassowrdVisible=!0,this.$nextTick(function(){t.$refs.updatePassowrd.init()})},logoutHandle:function(){var t=this;this.$confirm("确定进行[退出]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/sys/logout"),method:"post",data:t.$http.adornData()}).then(function(e){var a=e.data;a&&0===a.code&&(Object(i.a)(),t.$router.push({name:"login"}))})}).catch(function(){})},loadData:function(){var t=this;this.$http({url:this.$http.adornUrl("/sys/menu/mainNav"),method:"get",params:this.$http.adornParams()}).then(function(e){var a=e.data;console.log(a),a&&0===a.code&&(t.indexNav=a.list,a.list.length>0&&(t.activeIndex=a.list[0].menuId,t.$emit("change",t.activeIndex)))})},handleSelect:function(t,e){this.$emit("change",t)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"site-navbar",class:"site-navbar--"+t.navbarLayoutType},[a("div",{staticClass:"site-navbar__header"},[a("h1",{staticClass:"site-navbar__brand",on:{click:function(e){t.$router.push({name:"home"})}}},[a("a",{staticClass:"site-navbar__brand-lg",attrs:{href:"javascript:;"}},[t._v("代码生成")]),t._v(" "),a("a",{staticClass:"site-navbar__brand-mini",attrs:{href:"javascript:;"}},[t._v("data")])])]),t._v(" "),a("div",{staticClass:"site-navbar__body clearfix"},[a("el-menu",{staticClass:"site-navbar__menu",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"site-navbar__switch",attrs:{index:"0"},on:{click:function(e){t.sidebarFold=!t.sidebarFold}}},[a("icon-svg",{attrs:{name:"zhedie"}})],1)],1),t._v(" "),a("el-menu",{staticClass:"site-navbar__menu",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},t._l(this.indexNav,function(t,e){return a("nabar-menu",{key:t.menuId,attrs:{menu:t}})})),t._v(" "),a("el-menu",{staticClass:"site-navbar__menu site-navbar__menu--right",attrs:{mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"5"},on:{click:function(e){t.$router.push({name:"theme"})}}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("el-badge",{attrs:{value:"new"}},[a("icon-svg",{staticClass:"el-icon-setting",attrs:{name:"shezhi"}})],1)],1)],2),t._v(" "),a("el-menu-item",{staticClass:"site-navbar__avatar",attrs:{index:"3"}},[a("el-dropdown",{attrs:{"show-timeout":0,placement:"bottom"}},[a("span",{staticClass:"el-dropdown-link"},[t._v("\n           "+t._s(t.userName)+"\n          ")]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(e){t.updatePasswordHandle()}}},[t._v("修改密码")]),t._v(" "),a("el-dropdown-item",{nativeOn:{click:function(e){t.logoutHandle()}}},[t._v("退出")])],1)],1)],1)],1)],1),t._v(" "),t.updatePassowrdVisible?a("update-password",{ref:"updatePassowrd"}):t._e()],1)},staticRenderFns:[]},d=a("46Yf")(o,r,!1,null,null,null);e.default=d.exports}});
//# sourceMappingURL=57.js.map