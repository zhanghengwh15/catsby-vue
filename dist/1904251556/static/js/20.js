webpackJsonp([20],{HEkQ:function(e,t,n){(e.exports=n("acE3")(!0)).push([e.i,"\n.mod-menu .menu-list__input > .el-input__inner,\n.mod-menu .icon-list__input > .el-input__inner {\n  cursor: pointer;\n}\n.mod-menu__icon-popover {\n  max-width: 370px;\n}\n.mod-menu__icon-list {\n  max-height: 180px;\n  padding: 0;\n  margin: -8px 0 0 -8px;\n}\n.mod-menu__icon-list > .el-button {\n    padding: 8px;\n    margin: 8px 0 0 8px;\n}\n.mod-menu__icon-list > .el-button > span {\n      display: inline-block;\n      vertical-align: middle;\n      width: 18px;\n      height: 18px;\n      font-size: 18px;\n}\n.mod-menu .icon-list__tips {\n  font-size: 18px;\n  text-align: center;\n  color: #e6a23c;\n  cursor: pointer;\n}\n","",{version:3,sources:["/Users/zhangheng/git/Apollo/Catsby-vue/src/views/modules/sys/menu-add-or-update.vue"],names:[],mappings:";AACA;;EAEE,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,WAAW;EACX,sBAAsB;CACvB;AACD;IACI,aAAa;IACb,oBAAoB;CACvB;AACD;MACM,sBAAsB;MACtB,uBAAuB;MACvB,YAAY;MACZ,aAAa;MACb,gBAAgB;CACrB;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;CACjB",file:"menu-add-or-update.vue",sourcesContent:["\n.mod-menu .menu-list__input > .el-input__inner,\n.mod-menu .icon-list__input > .el-input__inner {\n  cursor: pointer;\n}\n.mod-menu__icon-popover {\n  max-width: 370px;\n}\n.mod-menu__icon-list {\n  max-height: 180px;\n  padding: 0;\n  margin: -8px 0 0 -8px;\n}\n.mod-menu__icon-list > .el-button {\n    padding: 8px;\n    margin: 8px 0 0 8px;\n}\n.mod-menu__icon-list > .el-button > span {\n      display: inline-block;\n      vertical-align: middle;\n      width: 18px;\n      height: 18px;\n      font-size: 18px;\n}\n.mod-menu .icon-list__tips {\n  font-size: 18px;\n  text-align: center;\n  color: #e6a23c;\n  cursor: pointer;\n}\n"],sourceRoot:""}])},T3RW:function(e,t,n){var a=n("HEkQ");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("XkoO")("77e00bf0",a,!0)},cFZF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("0xDb"),r=n("Q7M0"),o={data:function(){var e=this;return{visible:!1,visible2:!1,dataForm:{id:0,type:1,typeList:["目录","菜单","按钮"],name:"",parentId:0,parentName:"",url:"",perms:"",orderNum:0,icon:"",iconList:[]},dataRule:{name:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],parentName:[{required:!0,message:"上级菜单不能为空",trigger:"change"}],url:[{validator:function(t,n,a){1!==e.dataForm.type||/\S/.test(n)?a():a(new Error("菜单URL不能为空"))},trigger:"blur"}]},menuList:[],menuListTreeProps:{label:"name",children:"children"}}},created:function(){this.iconList=r.a.getNameList()},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.$http({url:this.$http.adornUrl("/sys/menu/select"),method:"get",params:this.$http.adornParams()}).then(function(e){var n=e.data;t.menuList=Object(a.e)(n.menuList,"menuId")}).then(function(){t.visible=!0,t.$nextTick(function(){t.$refs.dataForm.resetFields()})}).then(function(){t.dataForm.id?t.$http({url:t.$http.adornUrl("/sys/menu/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var n=e.data;t.dataForm.id=n.menu.menuId,t.dataForm.type=n.menu.type,t.dataForm.name=n.menu.name,t.dataForm.parentId=n.menu.parentId,t.dataForm.url=n.menu.url,t.dataForm.perms=n.menu.perms,t.dataForm.orderNum=n.menu.orderNum,t.dataForm.icon=n.menu.icon,t.menuListTreeSetCurrentNode()}):t.menuListTreeSetCurrentNode()})},menuListTreeCurrentChangeHandle:function(e,t){this.dataForm.parentId=e.menuId,this.dataForm.parentName=e.name,this.visible2=!1},menuListTreeSetCurrentNode:function(){this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId),this.dataForm.parentName=(this.$refs.menuListTree.getCurrentNode()||{}).name},iconActiveHandle:function(e){this.dataForm.icon=e},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/sys/menu/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({menuId:e.dataForm.id||void 0,type:e.dataForm.type,name:e.dataForm.name,parentId:e.dataForm.parentId,url:e.dataForm.url,perms:e.dataForm.perms,orderNum:e.dataForm.orderNum,icon:e.dataForm.icon})}).then(function(t){var n=t.data;n&&0===n.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(n.msg)})})}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[n("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[n("el-form-item",{attrs:{label:"类型",prop:"type"}},[n("el-radio-group",{model:{value:e.dataForm.type,callback:function(t){e.$set(e.dataForm,"type",t)},expression:"dataForm.type"}},e._l(e.dataForm.typeList,function(t,a){return n("el-radio",{key:a,attrs:{label:a}},[e._v(e._s(t))])}))],1),e._v(" "),n("el-form-item",{attrs:{label:e.dataForm.typeList[e.dataForm.type]+"名称",prop:"name"}},[n("el-input",{attrs:{placeholder:e.dataForm.typeList[e.dataForm.type]+"名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"上级菜单",prop:"parentName"}},[n("el-popover",{ref:"menuListPopover",attrs:{placement:"bottom-start",trigger:"click"},model:{value:e.visible2,callback:function(t){e.visible2=t},expression:"visible2"}},[n("el-tree",{ref:"menuListTree",attrs:{data:e.menuList,props:e.menuListTreeProps,"node-key":"menuId","default-expand-all":!0,"highlight-current":!0,"expand-on-click-node":!1},on:{"current-change":e.menuListTreeCurrentChangeHandle}})],1),e._v(" "),n("el-input",{directives:[{name:"popover",rawName:"v-popover:menuListPopover",arg:"menuListPopover"}],staticClass:"menu-list__input",attrs:{readonly:!0,placeholder:"点击选择上级菜单"},model:{value:e.dataForm.parentName,callback:function(t){e.$set(e.dataForm,"parentName",t)},expression:"dataForm.parentName"}})],1),e._v(" "),1===e.dataForm.type?n("el-form-item",{attrs:{label:"菜单路由",prop:"url"}},[n("el-input",{attrs:{placeholder:"菜单路由"},model:{value:e.dataForm.url,callback:function(t){e.$set(e.dataForm,"url",t)},expression:"dataForm.url"}})],1):e._e(),e._v(" "),0!==e.dataForm.type?n("el-form-item",{attrs:{label:"授权标识",prop:"perms"}},[n("el-input",{attrs:{placeholder:"多个用逗号分隔, 如: user:list,user:create"},model:{value:e.dataForm.perms,callback:function(t){e.$set(e.dataForm,"perms",t)},expression:"dataForm.perms"}})],1):e._e(),e._v(" "),2!==e.dataForm.type?n("el-form-item",{attrs:{label:"排序号",prop:"orderNum"}},[n("el-input-number",{attrs:{"controls-position":"right",min:0,label:"排序号"},model:{value:e.dataForm.orderNum,callback:function(t){e.$set(e.dataForm,"orderNum",t)},expression:"dataForm.orderNum"}})],1):e._e(),e._v(" "),2!==e.dataForm.type?n("el-form-item",{attrs:{label:"菜单图标",prop:"icon"}},[n("el-row",[n("el-col",{attrs:{span:22}},[n("el-popover",{ref:"iconListPopover",attrs:{placement:"bottom-start",trigger:"click","popper-class":"mod-menu__icon-popover"}},[n("div",{staticClass:"mod-menu__icon-list"},e._l(e.iconList,function(t,a){return n("el-button",{key:a,class:{"is-active":t===e.dataForm.icon},on:{click:function(n){e.iconActiveHandle(t)}}},[n("icon-svg",{attrs:{name:t}})],1)}))]),e._v(" "),n("el-input",{directives:[{name:"popover",rawName:"v-popover:iconListPopover",arg:"iconListPopover"}],staticClass:"icon-list__input",attrs:{readonly:!0,placeholder:"菜单图标名称"},model:{value:e.dataForm.icon,callback:function(t){e.$set(e.dataForm,"icon",t)},expression:"dataForm.icon"}})],1),e._v(" "),n("el-col",{staticClass:"icon-list__tips",attrs:{span:2}},[n("el-tooltip",{attrs:{placement:"top",effect:"light"}},[n("div",{attrs:{slot:"content"},slot:"content"},[e._v("全站推荐使用SVG Sprite, 详细请参考:"),n("a",{attrs:{href:"//github.com/daxiongYang/renren-fast-vue/blob/master/src/icons/index.js",target:"_blank"}},[e._v("icons/index.js")]),e._v("描述")]),e._v(" "),n("i",{staticClass:"el-icon-warning"})])],1)],1)],1):e._e()],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]};var s=n("46Yf")(o,i,!1,function(e){n("T3RW")},null,null);t.default=s.exports}});
//# sourceMappingURL=20.js.map