webpackJsonp([1],{"7Otq":function(t,e,a){t.exports=a.p+"static/img/logo.ed32c5d.png"},IIlg:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{margin:"0 auto"},attrs:{id:"app"}},[i("el-container",[i("el-header",[i("el-row",{staticClass:"row-bg",staticStyle:{height:"100%"},attrs:{type:"flex",justify:"space-between"}},[i("el-menu",{staticClass:"el-menu-demo",staticStyle:{height:"100%"},attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[i("el-menu-item",{staticStyle:{"font-size":"18px"},attrs:{index:"1"}},[t._v("上海地区核酸检测截图文本识别系统")])],1),t._v(" "),i("el-col",{attrs:{span:4}},[i("el-image",{staticStyle:{height:"80%",width:"10%",margin:"5px auto auto auto",position:"absolute",right:"50px"},attrs:{src:a("yFc8"),fit:"scale-down"}}),t._v(" "),i("el-image",{staticStyle:{height:"80%",width:"10%",margin:"5px 5% auto auto",position:"absolute"},attrs:{src:a("7Otq"),fit:"scale-down"}})],1)],1)],1),t._v(" "),i("el-main",[i("router-view")],1),t._v(" "),i("el-footer",{staticStyle:{"font-size":"12px",color:"grey",height:"60px"}},[i("div",{staticStyle:{"margin-top":"5px",color:"black"}},[t._v("\n        已累计识别图片"+t._s(t.sumPicNum)+"张\n      ")]),t._v(" "),i("div",{staticStyle:{"margin-top":"5px",color:"royalblue"}},[t._v("\n        Source Code Repository on\n        "),i("el-link",{staticStyle:{"font-size":"12px",color:"royalblue"},attrs:{href:"https://github.com/Song-Gq/shanghai-nucleic-acid-ocr"}},[t._v("\n          https://github.com/Song-Gq/shanghai-nucleic-acid-ocr\n        ")])],1),t._v(" "),i("div",{staticStyle:{"margin-top":"5px"}},[t._v("\n        Copyright © 2022 Trusted AI Lab, Shanghai. All Rights Reserved\n      ")])])],1)],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App",data:function(){return{activeIndex:"1",sumPicNum:0}},methods:{handleSelect:function(t,e){},getSumPic:function(){var t=this;return this.$axios.get(this.$targetDomain+"/api/getsum").then(function(e){t.sumPicNum=e.data})}},created:function(){this.getSumPic()}},o,!1,function(t){a("IIlg")},null,null).exports,s=a("/ocq"),r=a("mtWM"),l=a.n(r),c={name:"Uploader",data:function(){return{fileList:[],prog:0,in_prog:!1,prog_stat:null,prog_text:"正在上传文件，速度取决于网络状况，请耐心等待...",tableData:[],misData:[],timer:null,f_exist:!1,server_available:!1,recog_started:!1}},computed:{chosenfilenum:function(){return this.fileList.length},resultfilenum:function(){return this.tableData.length}},methods:{rowStatus:function(t){t.row,t.rowIndex;return{"background-color":"oldlace"}},handleChange:function(t,e){var a=t.name.lastIndexOf("."),i=t.name.substring(a,t.name.length),o=".jpeg"===i||".jpg"===i||".png"===i,n=t.size/1024/1024<1;o||(this.$message.error("上传图片只能是 JPG/PNG 格式!"),e.pop()),n||(this.$message.error("上传文件大小不能超过 1MB!"),e.pop()),e.length>200&&(this.$message.error("单次识别数量不能超过 200!"),e.pop()),this.fileList=e},submitUpload:function(){var t=this;this.getToken().then(function(e){window.sessionStorage.setItem("token",e.data),t.server_available=!0,t.in_prog=!0,t.getProgress();var a=new FormData,i=1;t.fileList.forEach(function(t){a.append("id="+i.toString()+"="+t.name,t.raw),i+=1}),t.uploadFile(a).then(function(e){console.log(e),console.log(e.status),t.prog=100,t.prog_stat="success",t.prog_text="识别成功，刷新页面可重新上传",t.clearTimer();var a=e.data,i=a.res;for(var o in i)t.tableData.push({date:i[o][2],name:i[o][1],type:i[o][0],result:i[o][3]});var n=a.mis;if(null!==n)for(var s in n)t.misData.push({date:n[s][2],name:n[s][1],type:n[s][0],result:n[s][3]})}).catch(function(e){console.log(e),t.$message.error("上传识别失败！若文件总大小超过20MB，请尝试分批上传"),t.prog_stat="exception",t.prog_text="请刷新页面重试",t.clearTimer()})}).catch(function(e){console.log(e),t.server_available=!1,t.$message.error("服务当前同时使用人数过多！请稍后重试...")})},uploadFile:function(t){return this.$axios.post(this.$targetDomain+"/api/recognition",t,{headers:{"Content-Type":"multipart/form-data",token:window.sessionStorage.getItem("token")}})},getProgress:function(){var t=this;this.timer=setInterval(function(){t.getStatus().then(function(e){-2===e.data?t.recog_started||(t.prog_text="正在上传文件，速度取决于网络状况，请耐心等待...",t.prog=0):-1===e.data?(t.$message.warning("进度获取出现问题...暂不显示实时进度"),t.clearTimer(),t.prog_text="仍正在识别，请耐心等待数分钟...如仍无结果请刷新页面重试"):(t.recog_started=!0,t.prog_text="已上传完成，正在识别，请耐心等待...",t.prog=Math.round(100*e.data),100===t.prog&&t.clearTimer())}).catch(function(e){t.$message.warning("进度获取出现问题...暂不显示实时进度"),t.clearTimer()})},2e3)},getStatus:function(){return this.$axios.get(this.$targetDomain+"/api/getprog",{params:{token:window.sessionStorage.getItem("token"),timeout:2e3}})},clearTimer:function(){clearInterval(this.timer),this.timer=null},export2excel:function(){this.getExcel().then(function(t){var e=new Blob([t.data],{type:"application/vnd.ms-excel"}),a=document.createElement("a"),i=new Date;a.download="核酸检测报告-"+i.getFullYear()+"-"+i.getMonth()+"-"+i.getDate()+"-"+i.getHours()+"-"+i.getMinutes()+"-"+i.getSeconds()+".xls",a.style.display="none",a.href=URL.createObjectURL(e),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href),document.body.removeChild(a)})},getExcel:function(){return this.$axios.get(this.$targetDomain+"/api/getexcel",{params:{token:window.sessionStorage.getItem("token")},responseType:"arraybuffer"})},getToken:function(){return this.$axios.get(this.$targetDomain+"/api/gettoken",{params:{}})},destroyToken:function(){var t=window.sessionStorage.getItem("token");if(null!=t)return this.$axios.delete(this.$targetDomain+"/api/destroytoken",{params:{token:t}})}},mode:"history",beforeDestroy:function(){clearInterval(this.timer),this.timer=null},beforeMount:function(){window.sessionStorage.removeItem("token"),this.server_available=!1},mounted:function(){window.addEventListener("beforeunload",function(t){})},created:function(){var t=this;this.$nextTick(function(){t.$refs.upload.$children[0].$refs.input.webkitdirectory=!0})}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"30px"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.in_prog,expression:"in_prog"}]},[t._v("\n  "+t._s(t.prog_text)+"\n  "),a("el-progress",{staticStyle:{margin:"5px auto 50px auto",width:"80%"},attrs:{percentage:t.prog,"text-inside":!0,"stroke-width":26,status:t.prog_stat}})],1),t._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{span:2}},[a("el-upload",{staticClass:"upload-demo",staticStyle:{float:"left","margin-left":"150%"},attrs:{action:"#",multiple:!0,"auto-upload":!1,"on-change":t.handleChange,"file-list":t.fileList,disabled:t.in_prog,"show-file-list":!1}},[a("el-button",{staticStyle:{"font-size":"14px"},attrs:{slot:"trigger",size:"small",type:"primary",disabled:t.in_prog},slot:"trigger"},[t._v("\n          选取文件")])],1)],1),t._v(" "),a("el-col",{staticStyle:{"pointer-events":"none"},attrs:{span:8}},[a("el-upload",{ref:"upload",staticClass:"upload",attrs:{action:"#",multiple:!0,"auto-upload":!1,"on-change":t.handleChange,"file-list":t.fileList,disabled:t.in_prog}},[a("el-button",{staticStyle:{"pointer-events":"auto","font-size":"14px"},attrs:{slot:"trigger",size:"small",type:"primary",disabled:t.in_prog},slot:"trigger"},[t._v("选取文件夹")]),t._v(" "),a("div",{staticClass:"el-upload__tip",staticStyle:{"margin-top":"15px","font-size":"14px"},attrs:{slot:"tip"},slot:"tip"},[t._v("\n          批量上传核酸检测截图JPEG文件，每张建议不超过200KB")]),t._v(" "),a("div",{staticClass:"el-upload__tip",staticStyle:{"margin-top":"5px","font-size":"14px"},attrs:{slot:"tip"},slot:"tip"},[t._v("\n          文件总大小不能超过20MB")]),t._v(" "),a("div",{staticClass:"el-upload__tip",staticStyle:{"margin-top":"5px","font-size":"14px"},attrs:{slot:"tip"},slot:"tip"},[t._v("\n          选取文件数："+t._s(t.chosenfilenum))])],1)],1),t._v(" "),a("el-col",{attrs:{span:2}},[0===t.fileList.length?a("el-button",{staticStyle:{float:"right","margin-right":"150%","font-size":"14px"},attrs:{size:"small",type:"success",disabled:!0}},[t._v("开始识别")]):t._e(),t._v(" "),0!==t.fileList.length?a("el-button",{staticStyle:{float:"right","margin-right":"150%","font-size":"14px"},attrs:{size:"small",type:"success",disabled:t.in_prog},on:{click:t.submitUpload}},[t._v("开始识别")]):t._e()],1),t._v(" "),a("el-col",{attrs:{span:12}},[[0!==t.misData.length?a("el-result",{staticStyle:{"padding-top":"20px"},attrs:{icon:"warning",title:"提请注意",subTitle:"以下结果请人工复核"}}):t._e(),t._v(" "),0!==t.misData.length?a("el-table",{staticStyle:{width:"100%","margin-bottom":"50px"},attrs:{data:t.misData,"row-style":t.rowStatus}},[a("el-table-column",{attrs:{prop:"date",label:"日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"result",label:"结果"}})],1):t._e(),t._v(" "),a("div",{staticStyle:{"font-size":"14px"}},[t._v("\n          识别文件数："+t._s(t.resultfilenum)+"\n        ")]),t._v(" "),0!==t.tableData.length?a("el-button",{staticStyle:{margin:"20px auto 20px auto"},attrs:{size:"small",type:"success"},on:{click:t.export2excel}},[t._v("导出至Excel")]):t._e(),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.tableData,stripe:!0,"max-height":800,size:"small"}},[a("el-table-column",{attrs:{prop:"date",label:"日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"result",label:"结果"}})],1)]],2)],1)],1)},staticRenderFns:[]};var u=a("VU/8")(c,p,!1,function(t){a("QKLJ")},"data-v-fd4d3bec",null).exports;i.default.use(s.a);var g=new s.a({routes:[{path:"/",name:"Uploader",component:u}],mode:"history"}),d=a("zL8q"),m=a.n(d);a("tvR6");i.default.config.productionTip=!1,i.default.use(m.a),i.default.prototype.$axios=l.a;i.default.prototype.$targetDomain="https://ocr.gqsong.xyz:443",new i.default({el:"#app",axios:l.a,targetDomain:"https://ocr.gqsong.xyz:443",router:g,components:{App:n},template:"<App/>"})},QKLJ:function(t,e){},tvR6:function(t,e){},yFc8:function(t,e,a){t.exports=a.p+"static/img/tongji.ef46bc5.png"}},["NHnr"]);
//# sourceMappingURL=app.52c970cc03292de33257.js.map