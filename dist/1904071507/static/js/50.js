webpackJsonp([50],{"2BiJ":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});t("G3sA");var l={data:function(){return{visible:!1,options:[],language:[{value:"java",label:"java"},{value:"xml",label:"xml"},{value:"vue",label:"vue"},{value:"javascript",label:"javascript"}],templateType:[{value:"beetl",label:"beetl"},{value:"freemarker",label:"freemarker"}],dataForm:{id:"",templateName:"",templatePath:"",templateDesc:"",fileName:"",groupId:"",localPath:"",templateType:"",crtUserId:"",content:""},dataRule:{templateName:[{required:!0,message:"不能为空",trigger:"blur"}],templatePath:[{required:!0,message:"不能为空",trigger:"blur"}],fileName:[{required:!0,message:"不能为空",trigger:"blur"}],groupId:[{required:!0,message:"不能为空",trigger:"blur"}],templateType:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{selectComplate:function(e){var a;a=this.options.find(function(a){return a.id===e}),this.dataForm.templateName=a.name},init:function(e){var a=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.$http.get(a.$http.adornUrl("/codetemplategroup/all")).then(function(e){var t=e.data;t&&0===t.code&&(console.log(t),a.options=t.list)}),a.dataForm.id&&a.$http({url:a.$http.adornUrl("/codetemplate/info"),method:"get",params:a.$http.adornParams({id:a.dataForm.id})}).then(function(e){var t=e.data;t&&0===t.code&&(a.dataForm.templateName=t.codetemplate.templateName,a.dataForm.templatePath=t.codetemplate.templatePath,a.dataForm.templateDesc=t.codetemplate.templateDesc,a.dataForm.fileName=t.codetemplate.fileName,a.dataForm.groupId=t.codetemplate.groupId,a.dataForm.localPath=t.codetemplate.localPath,a.dataForm.templateType=t.codetemplate.templateType,a.dataForm.crtUserId=t.codetemplate.crtUserId,a.dataForm.originalId=t.codetemplate.originalId,a.dataForm.version=t.codetemplate.version,a.dataForm.content=t.codetemplate.content||"",a.dataForm.language=t.codetemplate.language)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){a&&e.$http({url:e.$http.adornUrl("/codetemplate/"+(e.dataForm.id?"update":"add")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,templateName:e.dataForm.templateName,templatePath:e.dataForm.templatePath,templateDesc:e.dataForm.templateDesc,fileName:e.dataForm.fileName,groupId:e.dataForm.groupId,localPath:e.dataForm.localPath,templateType:e.dataForm.templateType,crtUserId:e.dataForm.crtUserId,originalId:e.dataForm.originalId,language:e.dataForm.language})}).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})})}}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible,width:"100%",fullscreen:!0,center:""},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"模板名称",prop:"templateName"}},[t("el-input",{attrs:{placeholder:"模板名称"},model:{value:e.dataForm.templateName,callback:function(a){e.$set(e.dataForm,"templateName",a)},expression:"dataForm.templateName"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"路径",prop:"templatePath"}},[t("el-input",{attrs:{placeholder:"路径"},model:{value:e.dataForm.templatePath,callback:function(a){e.$set(e.dataForm,"templatePath",a)},expression:"dataForm.templatePath"}})],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"生成代码路径",prop:"localPath"}},[t("el-input",{attrs:{placeholder:"生成代码路径"},model:{value:e.dataForm.localPath,callback:function(a){e.$set(e.dataForm,"localPath",a)},expression:"dataForm.localPath"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"模板类型",prop:"templateType"}},[t("el-select",{attrs:{placeholder:"模板类型"},model:{value:e.dataForm.templateType,callback:function(a){e.$set(e.dataForm,"templateType",a)},expression:"dataForm.templateType"}},e._l(e.templateType,function(e){return t("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"文件名称",prop:"fileName"}},[t("el-input",{attrs:{placeholder:"文件名称"},model:{value:e.dataForm.fileName,callback:function(a){e.$set(e.dataForm,"fileName",a)},expression:"dataForm.fileName"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"模板组",prop:"groupId"}},[t("el-select",{attrs:{placeholder:"组名"},on:{change:e.selectComplate},model:{value:e.dataForm.groupId,callback:function(a){e.$set(e.dataForm,"groupId",a)},expression:"dataForm.groupId"}},e._l(e.options,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"语言",prop:"language"}},[t("el-select",{attrs:{placeholder:"语言"},model:{value:e.dataForm.language,callback:function(a){e.$set(e.dataForm,"language",a)},expression:"dataForm.language"}},e._l(e.language,function(e){return t("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"模板描述",prop:"templateDesc"}},[t("el-input",{attrs:{placeholder:"模板描述"},model:{value:e.dataForm.templateDesc,callback:function(a){e.$set(e.dataForm,"templateDesc",a)},expression:"dataForm.templateDesc"}})],1)],1),e._v(" "),e.dataForm.language?t("div",[e.dataForm.content?t("highlight-code",{attrs:{lang:e.dataForm.language}},[e._v("\n      "+e._s(e.dataForm.content)+"\n    ")]):e._e()],1):e._e(),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},r=t("46Yf")(l,o,!1,null,null,null);a.default=r.exports}});
//# sourceMappingURL=50.js.map