webpackJsonp([39],{KgWC:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s={data:function(){return{visible:!1,TbUserForm:{userId:"",username:"",mobile:"",password:"",test:""},dataRule:{password:[{validator:function(e,r,t){/^1[34578]\d{9}$/.test(r)?t():t(new Error("密码格式不正确"))},trigger:"blur"},{required:!0,message:"密码必须填写",trigger:"blur"}],test:[{required:!0,message:"日期选择器不能为空",trigger:"blur"}]}}},methods:{init:function(e){var r=this;this.TbUserForm.userId=e||0,this.visible=!0,this.$nextTick(function(){r.$refs.TbUserForm.resetFields(),r.TbUserForm.userId&&r.$http.get(r.$http.adornUrl("/tbuser/info"),{params:r.$http.adornParams({userId:r.TbUserForm.userId})}).then(function(e){var t=e.data;if(t&&0===t.code)for(var s in t.tbuser)t.tbuser[s]&&(r.TbUserForm[s]=t.tbuser[s])})})},TbUserFormSubmit:function(){var e=this;this.$refs.TbUserForm.validate(function(r){r&&e.$http.post(e.$http.adornUrl("/tbuser/"+(e.TbUserForm.userId?"update":"add")),e.$http.adornData(e.TbUserForm)).then(function(r){var t=r.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})})}}},o={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-dialog",{attrs:{title:"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(r){e.visible=r}}},[t("el-form",{ref:"TbUserForm",attrs:{model:e.TbUserForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key))return null;e.TbUserFormSubmit()}}},[t("el-form-item",{attrs:{label:"UserId",prop:"userId"}},[t("el-input",{attrs:{placeholder:"UserId"},model:{value:e.TbUserForm.userId,callback:function(r){e.$set(e.TbUserForm,"userId",r)},expression:"TbUserForm.userId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{placeholder:"用户名"},model:{value:e.TbUserForm.username,callback:function(r){e.$set(e.TbUserForm,"username",r)},expression:"TbUserForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[t("el-input",{attrs:{placeholder:"手机号"},model:{value:e.TbUserForm.mobile,callback:function(r){e.$set(e.TbUserForm,"mobile",r)},expression:"TbUserForm.mobile"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{placeholder:"密码"},model:{value:e.TbUserForm.password,callback:function(r){e.$set(e.TbUserForm,"password",r)},expression:"TbUserForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"创建时间",prop:"createTime"}},[t("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",readonly:!1,disabled:!1,editable:!0,clearable:!0},model:{value:e.TbUserForm.createTime,callback:function(r){e.$set(e.TbUserForm,"createTime",r)},expression:"TbUserForm.createTime"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(r){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.TbUserFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},a=t("46Yf")(s,o,!1,null,null,null);r.default=a.exports}});
//# sourceMappingURL=39.js.map