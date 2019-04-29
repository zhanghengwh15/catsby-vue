webpackJsonp([55],{MuUd:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible,"element-loading-text":"拼命连接数据库中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0)",center:""},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"100px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[t("el-row",[t("el-col",{attrs:{span:14}},[t("el-form-item",{attrs:{label:"别名",prop:"alias"}},[t("el-input",{attrs:{placeholder:"别名"},model:{value:e.dataForm.alias,callback:function(a){e.$set(e.dataForm,"alias",a)},expression:"dataForm.alias"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"数据库类型",prop:"dbType"}},[t("el-select",{attrs:{placeholder:"数据库类型"},model:{value:e.dataForm.dbType,callback:function(a){e.$set(e.dataForm,"dbType",a)},expression:"dataForm.dbType"}},e._l(e.dataForm.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"数据库地址",prop:"dbUrl"}},[t("el-input",{attrs:{placeholder:"数据库地址"},model:{value:e.dataForm.dbUrl,callback:function(a){e.$set(e.dataForm,"dbUrl",a)},expression:"dataForm.dbUrl"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"数据库账户",prop:"dbUserName"}},[t("el-input",{attrs:{placeholder:"数据库账户"},model:{value:e.dataForm.dbUserName,callback:function(a){e.$set(e.dataForm,"dbUserName",a)},expression:"dataForm.dbUserName"}})],1),e._v(" "),e.visibleP?t("el-form-item",{attrs:{label:"连接密码"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入连接密码"},model:{value:e.dataForm.dbPassword,callback:function(a){e.$set(e.dataForm,"dbPassword",a)},expression:"dataForm.dbPassword"}},[t("el-button",{attrs:{slot:"append"},on:{click:function(a){e.changePass("show")}},slot:"append"},[t("icon-svg",{attrs:{name:"xianshimima",width:"20px",height:"20px"}})],1)],1)],1):t("el-form-item",{attrs:{label:"连接密码"}},[t("el-input",{attrs:{type:"text",placeholder:"请输入连接密码"},model:{value:e.dataForm.dbPassword,callback:function(a){e.$set(e.dataForm,"dbPassword",a)},expression:"dataForm.dbPassword"}},[t("el-button",{attrs:{slot:"append"},on:{click:function(a){e.changePass("hide")}},slot:"append"},[t("icon-svg",{attrs:{name:"buxianshimima"}})],1)],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"success"},on:{click:function(a){e.testDataBasesConnect()}}},[e._v("测试")]),e._v(" "),t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},o=t("46Yf")({data:function(){return{visible:!1,visibleP:!0,dataForm:{dbDriver:"",dbUrl:"",dbUserName:"",dbPassword:"",userId:"",dbType:"",crtUserId:"",crtTime:"",mdfUserId:"",mdfTime:"",options:[{value:"oracle",label:"oracle"},{value:"mysql",label:"mysql"}]},loading:!1,dataRule:{alias:[{required:!0,message:"不能为空",trigger:"blur"}],dbDriver:[{required:!0,message:"不能为空",trigger:"blur"}],dbUrl:[{required:!0,message:"不能为空",trigger:"blur"}],dbUserName:[{required:!0,message:"不能为空",trigger:"blur"}],dbPassword:[{required:!0,message:"不能为空",trigger:"blur"}],dbType:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&a.$http({url:a.$http.adornUrl("/codedbinfo/info"),method:"get",params:a.$http.adornParams({id:a.dataForm.id})}).then(function(e){var t=e.data;if(t&&0===t.code)for(var r in t.codedbinfo)t.codedbinfo[r]&&(a.dataForm[r]=t.codedbinfo[r])})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){a&&e.$http.post(e.$http.adornUrl("/codedbinfo/"+(e.dataForm.id?"update":"add")),e.$http.adornData(e.dataForm)).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})})},testDataBasesConnect:function(){var e=this;this.loading=!0,this.$refs.dataForm.validate(function(a){a&&e.$http({url:e.$http.adornUrl("/codedbinfo/test"),method:"post",data:e.$http.adornData({dbDriver:e.dataForm.dbDriver,dbUrl:e.dataForm.dbUrl,dbUserName:e.dataForm.dbUserName,dbPassword:e.dataForm.dbPassword,dbType:e.dataForm.dbType})}).then(function(a){var t=a.data;t&&0===t.code?t.flag?(e.loading=!1,e.$message({message:"测试连接成功",type:"success",duration:1500})):e.$message({message:"测试连接失败",type:"success",duration:1500,onClose:function(){e.visible=!1}}):e.$message.error(t.msg)})})},changePass:function(e){this.visibleP=!("show"===e)}}},r,!1,null,null,null);a.default=o.exports}});
//# sourceMappingURL=55.js.map