webpackJsonp([14],{Hyh7:function(n,t,e){(n.exports=e("acE3")(!0)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"testamortizedata-upload.vue",sourceRoot:""}])},QjW5:function(n,t,e){var i=e("Hyh7");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("XkoO")("b03fa318",i,!0)},vF0n:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("el-dialog",{attrs:{title:"导入",visible:n.visible,width:"30%",center:""},on:{"update:visible":function(t){n.visible=t}}},[e("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:n.url,"on-preview":n.handlePreview,"on-remove":n.handleRemove,"before-upload":n.beforeUploadHandle,"file-list":n.fileList,"auto-upload":!1}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[n._v("选取文件")]),n._v(" "),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[n._v("注意：只能上传Excel文件，且第一行是标题，正式的内容是从第二行开始的")])],1),n._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){n.visible=!1}}},[n._v("取 消")]),n._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(t){n.submitUpload()}}},[n._v("确 定")])],1)],1)},staticRenderFns:[]};var o=e("46Yf")({data:function(){return{visible:!1,fileList:[],url:""}},methods:{init:function(){this.visible=!0,this.url=this.$http.adornUrl("/testamortizedata/import?token="+this.$cookie.get("token"))},submitUpload:function(){this.$refs.upload.submit(),this.visible=!1},handleRemove:function(n,t){},handlePreview:function(n){},beforeUploadHandle:function(n){if(!n.name.endsWith(".xls")&&!n.name.endsWith(".xlsx"))return this.$message.error("只支持Excel格式的文件！"),!1}}},i,!1,function(n){e("QjW5")},"data-v-b1082a12",null);t.default=o.exports}});
//# sourceMappingURL=14.js.map