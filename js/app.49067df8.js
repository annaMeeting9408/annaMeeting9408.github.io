(function(){var e={5974:function(e,t,o){"use strict";o.r(t)},1964:function(e,t,o){"use strict";var n=o(9242),i=o(3396);function r(e,t){const o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(o)}var s=o(89);const a={},c=(0,s.Z)(a,[["render",r]]);var d=c,l=o(2483);const u={class:"container"},v={class:"row"},p={class:"search"},f=(0,i.uE)('<div class="row"><strong style="color:red;"> * 회의 생성 / 입장 </strong> 은 서버 환경에 따라 <br><strong style="color:red;"> 1 - 5초 지연 </strong> 될 수 있습니다 </div><div class="row"> * 버튼을 연달아 클릭 하면 <strong style="color:red;"> 에러가 발생합니다. </strong><br><strong style="color:red;"> 한 번씩 </strong> 만 눌러주세요 :) </div>',2),h={class:"row"},m={class:"circle"},g={class:"circle__btn"},b=(0,i._)("i",{class:"fa-solid fa-stop"},null,-1),w=[b],y=(0,i._)("i",{class:"fa-solid fa-play"},null,-1),_=[y],k={key:0,class:"circle__back-1"},C={key:1,class:"circle__back-2"},R={class:"row"},L=(0,i._)("p",null,"새로고침",-1),O=[L],j=(0,i._)("div",{class:"row"}," * 화면에 오류가 생길 경우 새로고침 버튼을 눌러주세요 :) ",-1),I={class:"row"};function x(e,t,o,r,s,a){const c=(0,i.up)("vue-webrtc");return(0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",v,[(0,i._)("div",p,[s.entered?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,placeholder:"회의실 이름",class:"search__input","onUpdate:modelValue":t[0]||(t[0]=e=>s.roomId=e),maxlength:"13",readonly:"true"},null,512)),[[n.nr,s.roomId]]):(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:1,placeholder:"회의실 이름",class:"search__input","onUpdate:modelValue":t[1]||(t[1]=e=>s.roomId=e),maxlength:"13"},null,512)),[[n.nr,s.roomId]])])]),f,(0,i._)("div",h,[(0,i._)("div",m,[(0,i._)("span",g,[s.entered?((0,i.wg)(),(0,i.iD)("span",{key:0,class:"pause",onClick:t[2]||(t[2]=(...e)=>a.onLeave&&a.onLeave(...e))},w)):((0,i.wg)(),(0,i.iD)("span",{key:1,class:"play",onClick:t[3]||(t[3]=(...e)=>a.onJoin&&a.onJoin(...e))},_))]),s.entered?((0,i.wg)(),(0,i.iD)("span",k)):(0,i.kq)("",!0),s.entered?((0,i.wg)(),(0,i.iD)("span",C)):(0,i.kq)("",!0)])]),(0,i._)("div",R,[(0,i._)("button",{type:"button",class:"btn btn__primary",onClick:t[4]||(t[4]=(...e)=>a.refresh&&a.refresh(...e))},O)]),j,(0,i._)("div",I,[(0,i.Wm)(c,{ref:"webrtc",width:"100%",roomId:s.roomId},null,8,["roomId"])])])}const D={class:"video-list"},U={key:0,class:"record__wrapper"},B=["video"],E=["muted","id"];function S(e,t,o,n,r,s){return(0,i.wg)(),(0,i.iD)("div",D,[e.videoList.length>0?((0,i.wg)(),(0,i.iD)("div",U,[this.mediaRecorder&&"inactive"!==this.mediaRecorder.state?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"btn btn__primary",onClick:t[0]||(t[0]=(...t)=>e.stopRecording&&e.stopRecording(...t))},"녹화 중지")):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"btn btn__primary",onClick:t[1]||(t[1]=(...t)=>e.startRecording&&e.startRecording(...t))},"녹화 시작")),e.videoUrl?((0,i.wg)(),(0,i.iD)("button",{key:2,class:"btn btn__primary",onClick:t[2]||(t[2]=(...t)=>e.downloadVideo&&e.downloadVideo(...t))},"비디오 다운로드")):(0,i.kq)("",!0)])):(0,i.kq)("",!0),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.videoList,(e=>((0,i.wg)(),(0,i.iD)("div",{video:e,key:e.id,class:"video-item"},[(0,i._)("video",{class:"video",controls:"",autoplay:"",playsinline:"",ref_for:!0,ref:"videos",muted:e.muted,id:e.id},null,8,E)],8,B)))),128))])}o(560),o(8858),o(1318),o(3228);var T=o(4488),V=o(2492),P=o.n(V);const $=P().mixin({customClass:{confirmButton:"btn btn__primary",cancelButton:"btn btn__cancel"},buttonsStyling:!1}),q=(e,t,o,n="확인",i=!0)=>$.fire({icon:e,title:t,text:o,confirmButtonText:n,showConfirmButton:i,timer:i?"":1500}),M={noIcon(e,t){return q(null,null,e,t)},error(e,t){return q("error",null,e,t)},question(e,t,o){return $.fire({title:null,text:e,showCancelButton:!0,confirmButtonText:t,cancelButtonText:o})},input(e,t){return $.fire({input:"text",inputAttributes:{autocapitalize:"off"},text:e,confirmButtonText:t})}};var A=M;const Z=o(5044);var z=(0,i.aZ)({name:"vue-webrtc",components:{},data(){return{signalClient:null,videoList:[],canvas:null,socket:null,mediaRecorder:null,recordedChunks:[],videoUrl:""}},props:{roomId:{type:String,default:"anna-meeting-v1"},socketURL:{type:String,default:"https://weston-vue-webrtc-lobby.azurewebsites.net"},autoplay:{type:Boolean,default:!0},screenshotFormat:{type:String,default:"image/jpeg"},enableAudio:{type:Boolean,default:!0},enableVideo:{type:Boolean,default:!0},peerOptions:{type:Object,default(){return{}}},ioOptions:{type:Object,default(){return{rejectUnauthorized:!1,transports:["polling","websocket"]}}},deviceId:{type:String,default:null}},methods:{async join(){setTimeout(this.leave,36e4);const e=this;if(e.videoList.length>3)await A.error("한 방에 최대 4명까지만 입잘 하실 수 있습니다.","확인");else{this.socket=(0,T.io)(this.socketURL,this.ioOptions),this.signalClient=new Z(this.socket);const t={video:e.enableVideo,audio:e.enableAudio};e.deviceId&&e.enableVideo&&(t.video={deviceId:{exact:e.deviceId}});const o=await navigator.mediaDevices.getUserMedia(t);this.joinedRoom(o,!0),this.signalClient.once("discover",(t=>{async function o(t){if(t===e.socket.id)return;const{peer:o}=await e.signalClient.connect(t,e.roomId,e.peerOptions);e.videoList.forEach((t=>{t.isLocal&&e.onPeer(o,t.stream)}))}t.peers.forEach((e=>o(e))),e.$emit("opened-room",e.roomId)})),this.signalClient.on("request",(async t=>{const{peer:o}=await t.accept({},e.peerOptions);e.videoList.forEach((t=>{t.isLocal&&e.onPeer(o,t.stream)}))})),this.signalClient.discover(e.roomId),await A.noIcon("개인 당 회의시간은 최대 60분이며, 이후 자동으로 영상이 꺼집니다 :)","확인")}},onPeer(e,t){const o=this;e.addStream(t),e.on("stream",(t=>{o.joinedRoom(t,!1),e.on("close",(()=>{const e=[];o.videoList.forEach((function(o){o.id!==t.id&&e.push(o)})),o.videoList=e,o.$emit("left-room",t.id)}))}))},joinedRoom(e,t){const o=this,n=o.videoList.find((t=>t.id===e.id));if(void 0===n){const n={id:e.id,muted:t,stream:e,isLocal:t};o.videoList.push(n)}setTimeout((function(){for(let t=0,n=o.$refs.videos.length;t<n;t++)if(o.$refs.videos[t].id===e.id){o.$refs.videos[t].srcObject=e;break}}),500),o.$emit("joined-room",e.id)},async leave(){this.videoUrl="",await this.videoList.forEach((e=>e.stream.getTracks().forEach((e=>e.stop())))),this.videoList=[],await this.signalClient.peers().forEach((e=>e.removeAllListeners())),await this.signalClient.destroy(),this.signalClient=null,await this.socket.destroy(),this.socket=null,await A.noIcon("회의실을 떠났습니다.","확인")},async startRecording(){try{const e=await navigator.mediaDevices.getUserMedia({video:!0});this.mediaRecorder=new MediaRecorder(e),this.mediaRecorder.ondataavailable=e=>{this.recordedChunks.push(e.data)},this.mediaRecorder.onstop=()=>{const e=new Blob(this.recordedChunks,{type:"video/mp4"});this.videoUrl=URL.createObjectURL(e)},this.mediaRecorder.start()}catch(e){console.error("Error accessing the webcam:",e)}},stopRecording(){this.mediaRecorder&&"inactive"!==this.mediaRecorder.state&&this.mediaRecorder.stop()},downloadVideo(){const e=document.createElement("a");e.href=this.videoUrl,e.download="recorded-video.mp4",document.body.appendChild(e),e.click(),document.body.removeChild(e),this.videoUrl=""}}});const J=(0,s.Z)(z,[["render",S]]);var F=J,W={name:"demo-component",components:{VueWebrtc:F},data(){return{img:null,roomId:"",entered:!1}},methods:{onJoin(){this.roomId.replace(/ /g,"")?this.$refs.webrtc.join().then((()=>{this.entered=!0})).catch((e=>{e.message.includes("device")&&A.error("연결 가능한 카메라 / 마이크가 없습니다."),this.entered=!1})):A.error("회의실 이름을 입력하세요","확인").then((()=>{this.entered=!1}))},onLeave(){A.question("회의를 떠날까요?","떠나기","머무르기").then((e=>{e.value&&this.$refs.webrtc.leave().then((()=>{this.entered=!1}))}))},refresh(){window.location.reload(!0)}}};const H=(0,s.Z)(W,[["render",x]]);var K=H;const Y=[{path:"/",name:"home-main",component:K}],G=(0,l.p7)({history:(0,l.PO)("/"),routes:Y});var N=G;o(5974),(0,n.ri)(d).use(N).mount("#app")},2361:function(){},4616:function(){}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,r){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],r=e[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&r||s>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(a=!1,r<s&&(s=r));if(a){e.splice(l--,1);var d=i();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,i,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,s=n[0],a=n[1],c=n[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(c)var l=c(o)}for(t&&t(n);d<s.length;d++)r=s[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(l)},n=self["webpackChunkanna_meeting_v1"]=self["webpackChunkanna_meeting_v1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1964)}));n=o.O(n)})();
//# sourceMappingURL=app.49067df8.js.map