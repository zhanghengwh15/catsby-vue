webpackJsonp([39],{iD56:function(a,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={data:function(){return{visible:!1,dataForm:{id:"",column2:"",column3:"",column4:"",column5:"",column6:"",column7:"",column8:"",column9:"",column10:"",column11:"",column12:"",column13:"",column14:""},dataRule:{column2:[{required:!0,message:"不能为空",trigger:"blur"}],column3:[{required:!0,message:"不能为空",trigger:"blur"}],column4:[{required:!0,message:"不能为空",trigger:"blur"}],column5:[{required:!0,message:"不能为空",trigger:"blur"}],column6:[{required:!0,message:"不能为空",trigger:"blur"}],column7:[{required:!0,message:"不能为空",trigger:"blur"}],column8:[{required:!0,message:"不能为空",trigger:"blur"}],column9:[{required:!0,message:"不能为空",trigger:"blur"}],column10:[{required:!0,message:"不能为空",trigger:"blur"}],column11:[{required:!0,message:"不能为空",trigger:"blur"}],column12:[{required:!0,message:"不能为空",trigger:"blur"}],column13:[{required:!0,message:"不能为空",trigger:"blur"}],column14:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(a){var t=this;this.dataForm.id=a||"",this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http.get(t.$http.adornUrl("/testamortizedata/info"),{params:t.$http.adornParams({id:t.dataForm.id})}).then(function(a){var l=a.data;if(l&&0===l.code)for(var o in l.testamortizedata)l.testamortizedata[o]&&(t.dataForm[o]=l.testamortizedata[o])})})},dataFormSubmit:function(){var a=this;this.$refs.dataForm.validate(function(t){t&&a.$http({url:a.$http.adornUrl("/testamortizedata/"+(a.dataForm.id?"update":"add")),method:"post",data:a.$http.adornData({id:a.dataForm.id||void 0,column2:a.dataForm.column2,column3:a.dataForm.column3,column4:a.dataForm.column4,column5:a.dataForm.column5,column6:a.dataForm.column6,column7:a.dataForm.column7,column8:a.dataForm.column8,column9:a.dataForm.column9,column10:a.dataForm.column10,column11:a.dataForm.column11,column12:a.dataForm.column12,column13:a.dataForm.column13,column14:a.dataForm.column14})}).then(function(t){var l=t.data;l&&0===l.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.visible=!1,a.$emit("refreshDataList")}}):a.$message.error(l.msg)})})}}},e={render:function(){var a=this,t=a.$createElement,l=a._self._c||t;return l("el-dialog",{attrs:{title:a.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:a.visible,center:""},on:{"update:visible":function(t){a.visible=t}}},[l("el-form",{ref:"dataForm",attrs:{model:a.dataForm,rules:a.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&a._k(t.keyCode,"enter",13,t.key))return null;a.dataFormSubmit()}}},[l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"主键id",prop:"id"}},[l("el-input",{attrs:{placeholder:"主键id"},model:{value:a.dataForm.id,callback:function(t){a.$set(a.dataForm,"id",t)},expression:"dataForm.id"}})],1)],1),a._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"序号",prop:"column2"}},[l("el-input",{attrs:{placeholder:"序号"},model:{value:a.dataForm.column2,callback:function(t){a.$set(a.dataForm,"column2",t)},expression:"dataForm.column2"}})],1)],1)],1),a._v(" "),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"转让清单编号",prop:"column3"}},[l("el-input",{attrs:{placeholder:"转让清单编号"},model:{value:a.dataForm.column3,callback:function(t){a.$set(a.dataForm,"column3",t)},expression:"dataForm.column3"}})],1)],1),a._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"截止2017.12已确认服务费",prop:"column4"}},[l("el-input",{attrs:{placeholder:"截止2017.12已确认服务费"},model:{value:a.dataForm.column4,callback:function(t){a.$set(a.dataForm,"column4",t)},expression:"dataForm.column4"}})],1)],1)],1),a._v(" "),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"2018已确认服务费",prop:"column5"}},[l("el-input",{attrs:{placeholder:"2018已确认服务费"},model:{value:a.dataForm.column5,callback:function(t){a.$set(a.dataForm,"column5",t)},expression:"dataForm.column5"}})],1)],1),a._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"2019.1确认金额",prop:"column6"}},[l("el-input",{attrs:{placeholder:"2019.1确认金额"},model:{value:a.dataForm.column6,callback:function(t){a.$set(a.dataForm,"column6",t)},expression:"dataForm.column6"}})],1)],1)],1),a._v(" "),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"2019.2确认金额",prop:"column7"}},[l("el-input",{attrs:{placeholder:"2019.2确认金额"},model:{value:a.dataForm.column7,callback:function(t){a.$set(a.dataForm,"column7",t)},expression:"dataForm.column7"}})],1)],1),a._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"2019.3确认金额",prop:"column8"}},[l("el-input",{attrs:{placeholder:"2019.3确认金额"},model:{value:a.dataForm.column8,callback:function(t){a.$set(a.dataForm,"column8",t)},expression:"dataForm.column8"}})],1)],1)],1),a._v(" "),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"交易合同名称",prop:"column9"}},[l("el-input",{attrs:{placeholder:"交易合同名称"},model:{value:a.dataForm.column9,callback:function(t){a.$set(a.dataForm,"column9",t)},expression:"dataForm.column9"}})],1)],1),a._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:" 截止2017.12已确认利息",prop:"column10"}},[l("el-input",{attrs:{placeholder:" 截止2017.12已确认利息"},model:{value:a.dataForm.column10,callback:function(t){a.$set(a.dataForm,"column10",t)},expression:"dataForm.column10"}})],1)],1)],1),a._v(" "),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:" 2018年已确认利息",prop:"column11"}},[l("el-input",{attrs:{placeholder:" 2018年已确认利息"},model:{value:a.dataForm.column11,callback:function(t){a.$set(a.dataForm,"column11",t)},expression:"dataForm.column11"}})],1)],1),a._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:" 2019.1确认利息金额",prop:"column12"}},[l("el-input",{attrs:{placeholder:" 2019.1确认利息金额"},model:{value:a.dataForm.column12,callback:function(t){a.$set(a.dataForm,"column12",t)},expression:"dataForm.column12"}})],1)],1)],1),a._v(" "),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"2019.2确认利息金额",prop:"column13"}},[l("el-input",{attrs:{placeholder:"2019.2确认利息金额"},model:{value:a.dataForm.column13,callback:function(t){a.$set(a.dataForm,"column13",t)},expression:"dataForm.column13"}})],1)],1),a._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:" 2019.3确认利息金额",prop:"column14"}},[l("el-input",{attrs:{placeholder:" 2019.3确认利息金额"},model:{value:a.dataForm.column14,callback:function(t){a.$set(a.dataForm,"column14",t)},expression:"dataForm.column14"}})],1)],1)],1)],1),a._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){a.visible=!1}}},[a._v("取消")]),a._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){a.dataFormSubmit()}}},[a._v("确定")])],1)],1)},staticRenderFns:[]},r=l("46Yf")(o,e,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=39.js.map