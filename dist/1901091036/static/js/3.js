webpackJsonp([3,18,40],{"5BYL":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("ufEv"),i=a("9Nsh"),l={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:20,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,uploadVisible:!1,downloadDisable:!1,offsetHeight:0,tableHight:0}},components:{AddOrUpdate:n.default,Upload:i.default},computed:{documentClientHeight:{get:function(){return this.$store.state.common.documentClientHeight}}},watch:{documentClientHeight:function(e){this.tableHight=e-this.offsetHeight-169}},activated:function(){this.getDataList()},mounted:function(){this.offsetHeight=this.$refs.codetemplatefileFrom.offsetHeight},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/codetemplatefile/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.tableHight=e.$store.state.common.documentClientHeight-e.offsetHeight-169,e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},toggleSelection:function(e){e?this.$refs.codetemplatefileTable.toggleRowSelection(e):this.$refs.codetemplatefileTable.clearSelection()},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},uploadExcel:function(e){var t=this;this.uploadVisible=!0,this.$nextTick(function(){t.$refs.upload.init()})},exportExcel:function(){this.$notify({title:"警告",message:"开始下载，请勿多次点击",type:"warning"}),this.$axios({url:this.$http.adornUrl("/codetemplatefile/export?token="+this.$cookie.get("token")),method:"GET",responseType:"blob",params:{id:"",templateId:"",file:"",fileType:""}}).then(function(e){var t=new Blob([e.data],{type:e.data.type}),a=window.URL.createObjectURL(t),n=document.createElement("a");n.href=a;var i=decodeURI(e.headers.name),l="unknown";i&&(l=decodeURI(i)),n.setAttribute("download",l),document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(a)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/codetemplatefile/delete"),method:"post",data:t.$http.adornData(a,!1)}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("div",{ref:"codetemplatefileFrom"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"chaxun"}}),e._v(" 查询")],1),e._v(" "),e.isAuth("codetemplatefile:add")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"addNew"}}),e._v("  新增")],1):e._e(),e._v(" "),e.isAuth("codetemplatefile:add")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.uploadExcel()}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"yunduanshangchuan"}}),e._v("  导入")],1):e._e(),e._v(" "),e.isAuth("codetemplatefile:add")?a("el-button",{attrs:{type:"primary",disabled:this.downloadDisable},on:{click:function(t){e.exportExcel()}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"yunduanxiazai"}}),e._v("  导出")],1):e._e(),e._v(" "),e.isAuth("codetemplatefile:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"shanchu1"}}),e._v(" 批量删除")],1):e._e()],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],ref:"codetemplatefileTable",staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading",data:e.dataList,border:"",stripe:"",height:e.tableHight},on:{"selection-change":e.selectionChangeHandle,"row-click":e.toggleSelection}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"Id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"templateId","header-align":"center",align:"center",label:"TemplateId"}}),e._v(" "),a("el-table-column",{attrs:{prop:"file","header-align":"center",align:"center",label:"文件内容"}}),e._v(" "),a("el-table-column",{attrs:{prop:"fileType","header-align":"center",align:"center",label:"文件类型"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){a.stopPropagation(),e.addOrUpdateHandle(t.row.id)}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"bianjisekuai"}}),e._v("修改")],1),e._v(" "),a("el-button",{staticClass:"red",attrs:{type:"text",size:"small"},on:{click:function(a){a.stopPropagation(),e.deleteHandle(t.row.id)}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"shanchu"}}),e._v("删除")],1)]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e(),e._v(" "),e.uploadVisible?a("upload",{ref:"upload"}):e._e()],1)},staticRenderFns:[]};var s=a("46Yf")(l,o,!1,function(e){a("IKLg")},"data-v-21049906",null);t.default=s.exports},"9Nsh":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"导入",visible:e.visible,width:"30%",center:""},on:{"update:visible":function(t){e.visible=t}}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.url,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-upload":e.beforeUploadHandle,"file-list":e.fileList,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("注意：只能上传Excel文件，且第一行是标题，正式的内容是从第二行开始的")])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitUpload()}}},[e._v("确 定")])],1)],1)},staticRenderFns:[]};var i=a("46Yf")({data:function(){return{visible:!1,fileList:[],url:""}},methods:{init:function(){this.visible=!0,this.url=this.$http.adornUrl("/codetemplatefile/import?token="+this.$cookie.get("token"))},submitUpload:function(){this.$refs.upload.submit(),this.visible=!1},handleRemove:function(e,t){},handlePreview:function(e){},beforeUploadHandle:function(e){if(!e.name.endsWith(".xls")&&!e.name.endsWith(".xlsx"))return this.$message.error("只支持Excel格式的文件！"),!1}}},n,!1,function(e){a("NfTp")},"data-v-48cb6781",null);t.default=i.exports},IKLg:function(e,t,a){var n=a("f20E");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("XkoO")("1be94045",n,!0)},NfTp:function(e,t,a){var n=a("YS+4");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("XkoO")("f138e6e6",n,!0)},"YS+4":function(e,t,a){(e.exports=a("acE3")(!1)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},f20E:function(e,t,a){(e.exports=a("acE3")(!1)).push([e.i,"\n.red[data-v-21049906]{\n    color: #ff0000;\n}\n",""])},ufEv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{visible:!1,dataForm:{id:"",templateId:"",file:"",fileType:""},dataRule:{templateId:[{required:!0,message:"不能为空",trigger:"blur"}],file:[{required:!0,message:"不能为空",trigger:"blur"}],fileType:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/codetemplatefile/info"),method:"get",params:t.$http.adornParams({id:t.dataForm.id})}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.templateId=a.codetemplatefile.templateId,t.dataForm.file=a.codetemplatefile.file,t.dataForm.fileType=a.codetemplatefile.fileType)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/codetemplatefile/"+(e.dataForm.id?"update":"add")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,templateId:e.dataForm.templateId,file:e.dataForm.file,fileType:e.dataForm.fileType})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible,center:""},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"TemplateId",prop:"templateId"}},[a("el-input",{attrs:{placeholder:"TemplateId"},model:{value:e.dataForm.templateId,callback:function(t){e.$set(e.dataForm,"templateId",t)},expression:"dataForm.templateId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"文件内容",prop:"file"}},[a("el-input",{attrs:{placeholder:"文件内容"},model:{value:e.dataForm.file,callback:function(t){e.$set(e.dataForm,"file",t)},expression:"dataForm.file"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"文件类型",prop:"fileType"}},[a("el-input",{attrs:{placeholder:"文件类型"},model:{value:e.dataForm.fileType,callback:function(t){e.$set(e.dataForm,"fileType",t)},expression:"dataForm.fileType"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},l=a("46Yf")(n,i,!1,null,null,null);t.default=l.exports}});