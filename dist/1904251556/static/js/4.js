webpackJsonp([4,16,42],{"4v5f":function(e,t,a){(e.exports=a("acE3")(!0)).push([e.i,"\n.red[data-v-07b76bf2]{\n    color: #ff0000;\n}\n","",{version:3,sources:["/Users/zhangheng/git/Apollo/Catsby-vue/src/views/modules/tbuser/tbuser.vue"],names:[],mappings:";AACA;IACI,eAAe;CAClB",file:"tbuser.vue",sourcesContent:["\n.red[data-v-07b76bf2]{\n    color: #ff0000;\n}\n"],sourceRoot:""}])},"82ee":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("KgWC"),s=a("MctD"),i={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:20,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,uploadVisible:!1,downloadDisable:!1,offsetHeight:0,tableHight:0}},components:{AddOrUpdate:n.default,Upload:s.default},computed:{documentClientHeight:{get:function(){return this.$store.state.common.documentClientHeight}}},watch:{documentClientHeight:function(e){this.tableHight=e-this.offsetHeight-169}},activated:function(){this.getDataList()},mounted:function(){this.offsetHeight=this.$refs.tbuserFrom.offsetHeight},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/tbuser/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.tableHight=e.$store.state.common.documentClientHeight-e.offsetHeight-169,e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},toggleSelection:function(e){e?this.$refs.tbuserTable.toggleRowSelection(e):this.$refs.tbuserTable.clearSelection()},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,console.log(e),this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},uploadExcel:function(e){var t=this;this.uploadVisible=!0,this.$nextTick(function(){t.$refs.upload.init()})},exportExcel:function(){this.$notify({title:"警告",message:"开始下载，请勿多次点击",type:"warning"}),this.$axios({url:this.$http.adornUrl("/tbuser/export?token="+this.$cookie.get("token")),method:"GET",responseType:"blob",params:{userId:"",username:"",mobile:"",password:"",createTime:""}}).then(function(e){var t=new Blob([e.data],{type:e.data.type}),a=window.URL.createObjectURL(t),n=document.createElement("a");n.href=a;var s=decodeURI(e.headers.name),i="unknown";s&&(i=decodeURI(s)),n.setAttribute("download",i),document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(a)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.userId});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/tbuser/delete"),method:"post",data:t.$http.adornData(a,!1)}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("div",{ref:"tbuserFrom"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"chaxun"}}),e._v(" 查询")],1),e._v(" "),e.isAuth("tbuser:add")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"addNew"}}),e._v("  新增")],1):e._e(),e._v(" "),e.isAuth("tbuser:add")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.uploadExcel()}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"yunduanshangchuan"}}),e._v("  导入")],1):e._e(),e._v(" "),e.isAuth("tbuser:add")?a("el-button",{attrs:{type:"primary",disabled:this.downloadDisable},on:{click:function(t){e.exportExcel()}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"yunduanxiazai"}}),e._v("  导出")],1):e._e(),e._v(" "),e.isAuth("tbuser:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"shanchu1"}}),e._v(" 批量删除")],1):e._e()],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],ref:"tbuserTable",staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading",data:e.dataList,border:"",stripe:"",height:e.tableHight},on:{"selection-change":e.selectionChangeHandle,"row-click":e.toggleSelection}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userId","header-align":"center",align:"center",label:"UserId"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username","header-align":"center",align:"center",label:"用户名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile","header-align":"center",align:"center",label:"手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"password","header-align":"center",align:"center",label:"密码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){a.stopPropagation(),e.addOrUpdateHandle(t.row.userId)}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"bianjisekuai"}}),e._v("修改")],1),e._v(" "),a("el-button",{staticClass:"red",attrs:{type:"text",size:"small"},on:{click:function(a){a.stopPropagation(),e.deleteHandle(t.row.userId)}}},[a("icon-svg",{staticClass:"icon",attrs:{name:"shanchu"}}),e._v("删除")],1)]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e(),e._v(" "),e.uploadVisible?a("upload",{ref:"upload"}):e._e()],1)},staticRenderFns:[]};var o=a("46Yf")(i,r,!1,function(e){a("tzED")},"data-v-07b76bf2",null);t.default=o.exports},KgWC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{visible:!1,channel:["zhang","heng"],TbUserForm:{userId:"",username:"",mobile:"",password:"",test:""},dataRule:{password:[{validator:function(e,t,a){/^1[34578]\d{9}$/.test(t)?a():a(new Error("密码格式不正确"))},trigger:"blur"},{required:!0,message:"密码必须填写",trigger:"blur"}],test:[{required:!0,message:"日期选择器不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;console.log(e),this.TbUserForm.userId=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.TbUserForm.resetFields(),t.TbUserForm.userId&&t.$http.get(t.$http.adornUrl("/tbuser/info"),{params:t.$http.adornParams({userId:t.TbUserForm.userId})}).then(function(e){var a=e.data;a&&0===a.code&&(t.TbUserForm.mobile="11111")})})},TbUserFormSubmit:function(){var e=this;this.$refs.TbUserForm.validate(function(t){t&&e.$http.post(e.$http.adornUrl("/tbuser/"+(e.TbUserForm.userId?"update":"add")),e.$http.adornData(e.TbUserForm)).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"TbUserForm",attrs:{model:e.TbUserForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.TbUserFormSubmit()}}},[a("el-form-item",{attrs:{label:"UserId",prop:"userId"}},[a("el-input",{attrs:{placeholder:"UserId"},model:{value:e.TbUserForm.userId,callback:function(t){e.$set(e.TbUserForm,"userId",t)},expression:"TbUserForm.userId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.TbUserForm.username,callback:function(t){e.$set(e.TbUserForm,"username",t)},expression:"TbUserForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[a("el-input",{attrs:{placeholder:"手机号"},model:{value:e.TbUserForm.mobile,callback:function(t){e.$set(e.TbUserForm,"mobile",t)},expression:"TbUserForm.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{placeholder:"密码"},model:{value:e.TbUserForm.password,callback:function(t){e.$set(e.TbUserForm,"password",t)},expression:"TbUserForm.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间",prop:"createTime"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",readonly:!1,disabled:!1,editable:!0,clearable:!0},model:{value:e.TbUserForm.createTime,callback:function(t){e.$set(e.TbUserForm,"createTime",t)},expression:"TbUserForm.createTime"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.TbUserFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},i=a("46Yf")(n,s,!1,null,null,null);t.default=i.exports},MctD:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"导入",visible:e.visible,width:"30%",center:""},on:{"update:visible":function(t){e.visible=t}}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.url,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-upload":e.beforeUploadHandle,"file-list":e.fileList,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("注意：只能上传Excel文件，且第一行是标题，正式的内容是从第二行开始的")])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitUpload()}}},[e._v("确 定")])],1)],1)},staticRenderFns:[]};var s=a("46Yf")({data:function(){return{visible:!1,fileList:[],url:""}},methods:{init:function(){this.visible=!0,this.url=this.$http.adornUrl("/tbuser/import?token="+this.$cookie.get("token"))},submitUpload:function(){this.$refs.upload.submit(),this.visible=!1},handleRemove:function(e,t){},handlePreview:function(e){},beforeUploadHandle:function(e){if(!e.name.endsWith(".xls")&&!e.name.endsWith(".xlsx"))return this.$message.error("只支持Excel格式的文件！"),!1}}},n,!1,function(e){a("aPGO")},"data-v-75db7c92",null);t.default=s.exports},aPGO:function(e,t,a){var n=a("pnUy");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("XkoO")("5832cc28",n,!0)},pnUy:function(e,t,a){(e.exports=a("acE3")(!0)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"tbuser-upload.vue",sourceRoot:""}])},tzED:function(e,t,a){var n=a("4v5f");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("XkoO")("0cfe175e",n,!0)}});
//# sourceMappingURL=4.js.map