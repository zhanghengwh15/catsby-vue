webpackJsonp([20],{"/Vk8":function(e,t,l){(e.exports=l("acE3")(!0)).push([e.i,"\n.left_lis_title[data-v-0e155982] {\n  width: 90%;\n  /* height: 56px; */\n  margin: 0 auto;\n  padding: 30px 0 10px 0;\n  font-size: 16px;\n  /* line-height: 42px; */\n  color: #000;\n  /* border-bottom: 1px solid #DFE3E9; */\n}\n.left_list_box[data-v-0e155982] {\n  width: 90%;\n  height: 89%;\n  /* max-height: 100%; */\n  margin: 0 auto;\n  border: 1px solid #B9C0CA;\n  border-radius: 4px;\n  overflow: auto;\n}\n\n","",{version:3,sources:["/Users/zhangheng/git/Apollo/Catsby-vue/src/views/modules/sys/dept.vue"],names:[],mappings:";AACA;EACE,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,gBAAgB;EAChB,wBAAwB;EACxB,YAAY;EACZ,uCAAuC;CACxC;AACD;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,0BAA0B;EAC1B,mBAAmB;EACnB,eAAe;CAChB",file:"dept.vue",sourcesContent:["\n.left_lis_title[data-v-0e155982] {\n  width: 90%;\n  /* height: 56px; */\n  margin: 0 auto;\n  padding: 30px 0 10px 0;\n  font-size: 16px;\n  /* line-height: 42px; */\n  color: #000;\n  /* border-bottom: 1px solid #DFE3E9; */\n}\n.left_list_box[data-v-0e155982] {\n  width: 90%;\n  height: 89%;\n  /* max-height: 100%; */\n  margin: 0 auto;\n  border: 1px solid #B9C0CA;\n  border-radius: 4px;\n  overflow: auto;\n}\n\n"],sourceRoot:""}])},FevX:function(e,t,l){var a=l("/Vk8");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);l("XkoO")("327c15a8",a,!0)},iPNa:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"dept",watch:{filterText:function(e){this.$refs.tree2.filter(e)}},methods:{filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},handleNodeClick:function(e){console.log(e)},getTreeData:function(){var e=this;this.$http.get(this.$http.adornUrl("/sysdept/depttree")).then(function(t){var l=t.data;l&&(e.treeData=[],e.treeData.push(l))})}},activated:function(){this.getTreeData()},data:function(){return{filterText:"",treeData:[],defaultProps:{children:"children",label:"label"},form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-container",[l("el-aside",{attrs:{width:"300px"}},[l("div",{staticClass:"left_lis_title"},[e._v("\n    部门详细\n    ")]),e._v(" "),l("div",{staticClass:"left_list_box"},[l("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),l("el-tree",{ref:"tree2",staticClass:"filter-tree",attrs:{data:e.treeData,props:e.defaultProps,"default-expand-all":"","filter-node-method":e.filterNode},on:{"node-click":e.handleNodeClick}})],1)]),e._v(" "),l("el-main",[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"活动名称"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"活动区域"}},[l("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"活动时间"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),e._v(" "),l("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),l("el-col",{attrs:{span:11}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"即时配送"}},[l("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"活动性质"}},[l("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),l("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),l("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),l("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"特殊资源"}},[l("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[l("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),l("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"活动形式"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),l("el-button",[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var o=l("46Yf")(a,r,!1,function(e){l("FevX")},"data-v-0e155982",null);t.default=o.exports}});
//# sourceMappingURL=20.js.map