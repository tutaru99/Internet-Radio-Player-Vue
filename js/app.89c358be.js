(function(t){function e(e){for(var a,s,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},n={app:0},o=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Internet-Radio-Player-Vue/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"0249":function(t,e,i){},4954:function(t,e,i){},"5c0b":function(t,e,i){"use strict";i("9c0c")},6220:function(t,e,i){"use strict";i("b4f6")},"79d6":function(t,e,i){t.exports=i.p+"img/radioplaceholder.304c2843.jpg"},"90ab":function(t,e,i){t.exports=i.p+"img/placeholder.ca6fd66f.jpg"},"9c0c":function(t,e,i){},af1a:function(t,e,i){"use strict";i("4954")},b4f6:function(t,e,i){},bb09:function(t,e,i){"use strict";i("0249")},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"mainWrapper"}},[i("v-main",{attrs:{id:"body"}},[i("router-view")],1)],1)},o=[],s=a["a"].extend({name:"App",data:function(){return{}}}),r=s,l=(i("5c0b"),i("2877")),c=i("6544"),d=i.n(c),u=i("7496"),p=i("f6c4"),h=Object(l["a"])(r,n,o,!1,null,null,null),m=h.exports;d()(h,{VApp:u["a"],VMain:p["a"]});var g=i("8c4f"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"mainwrapper"}},[i("Stations")],1)},v=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",{attrs:{id:"wrapper"}},[i("v-row",{attrs:{"no-gutters":"",justify:"center"}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12",lg:"11"}},[i("AudioPlayer")],1)],1)],1)],1)},y=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-top":"0"}},[a("v-col",{staticStyle:{"padding-top":"0"},attrs:{cols:"12"}},[a("v-row",{staticClass:"mt-5",attrs:{id:"Stationswrapper"}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{staticClass:"header"},[a("v-col",{attrs:{cols:"4"}},[a("div",[a("h3",{staticClass:"text-center"},[t._v(" The Radio ")])])]),a("v-col",{attrs:{cols:"8",md:"8"}},[a("div",{staticClass:"d-flex flex-row-reverse"},[a("v-btn",{staticClass:"mr-2",class:"Anime"===this.selectedGenre?"red darken-4":"",attrs:{width:"100",text:"",color:"white"},on:{click:function(e){return t.filterCategory("Anime")}}},[t._v("Anime")]),a("v-btn",{staticClass:"mr-2",class:"HipHop"===this.selectedGenre?"red darken-4":"",attrs:{width:"100",text:"",color:"white"},on:{click:function(e){return t.filterCategory("HipHop")}}},[t._v("HipHop")]),a("v-btn",{staticClass:"mr-2",class:"Chill"===this.selectedGenre?"red darken-4":"",attrs:{width:"100",text:"",color:"white"},on:{click:function(e){return t.filterCategory("Chill")}}},[t._v("Chill")]),a("v-btn",{attrs:{width:"100",text:"",color:"white"},on:{click:function(e){return t.filterCategory("All")}}},[t._v("All")])],1)])],1)],1),a("transition",{attrs:{name:"fade",appear:""}},[a("v-col",{staticClass:"py-2",attrs:{align:"center",id:"AudioPlayerWrapper",cols:"12",md:"3",lg:"4"}},[a("transition",{attrs:{name:"fade"}},[this.stationData.imageSrc?a("div",[a("v-img",{staticClass:"mt-2",attrs:{contain:"","max-height":"200","min-height":"200",src:this.stationData.imageSrc},on:{error:function(e){t.station.imageSrc=i("90ab")}}})],1):a("div",[a("v-img",{staticClass:"mt-2",attrs:{contain:"","max-height":"200","min-height":"200",src:i("79d6")}})],1)]),this.stationData.title?a("h2",{staticClass:"text-center mt-3"},[t._v(" "+t._s(this.stationData.title)+" ")]):t._e(),this.stationData.genres?a("p",{staticClass:"text-center mt-4"},[t._v(" "+t._s(this.stationData.genres)+" ")]):t._e(),this.stationData.website?a("p",{staticClass:"text-center"},[a("a",{attrs:{href:this.stationData.website,target:"_blank"}},[t._v("Website")])]):t._e(),a("div",{staticClass:"mt-5"},[a("v-btn",{attrs:{icon:""}},[t.stationData.liked?a("v-icon",{staticStyle:{color:"red"},attrs:{dark:""}},[t._v(" mdi-heart ")]):a("v-icon",{staticStyle:{color:"#E0E0E0"},attrs:{dark:""}},[t._v(" mdi-heart-outline ")])],1),a("v-btn",{staticClass:"pa-5",attrs:{icon:""}},[a("v-icon",{staticStyle:{color:"#E0E0E0"},attrs:{dark:""}},[t._v(" mdi-dots-horizontal ")])],1),a("div",{staticClass:"mt-4"},[a("div",{staticClass:"p-view__box",attrs:{id:"js-view"}},[a("svg",{ref:"jssvg",staticClass:"p-view__svg",attrs:{id:"js-svg",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"300",viewBox:"0 0 600 400",preserveAspectRatio:"none"}},[a("path",{ref:"path",attrs:{d:"M0,200 L600,200",stroke:"red","stroke-width":"0.5",fill:"none"}})])])])],1)],1)],1),a("v-col",{staticStyle:{padding:"0"}},[a("transition",{attrs:{name:"fade",appear:""}},[a("div",{staticClass:"section",attrs:{id:"tableWrapper"}},t._l(t.selectedFilterGenre,(function(e){return a("li",{key:e.id},[a("v-row",[a("v-col",[a("v-simple-table",{staticClass:"red",attrs:{dark:""}},[[a("tbody",[a("tr",{class:!0===e.playing?"PlayingStation":""},[a("td",{attrs:{width:"5%"}},[a("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(i){t.isRadioPlaying(e.src,e.playing,t.soundID,e.id),t.storeStationData(e,e.id)}}},[e.playing?t._e():a("v-icon",{attrs:{dark:""}},[t._v(" mdi-play ")]),e.playing?a("v-icon",{attrs:{dark:""}},[t._v(" mdi-pause ")]):t._e()],1)],1),a("td",{attrs:{width:"15%"},on:{click:function(i){t.isRadioPlaying(e.src,e.playing,t.soundID,e.id),t.storeStationData(e,e.id)}}},[a("v-img",{attrs:{contain:"","max-height":"80","max-width":"80","min-height":"80","min-width":"80",src:e.imageSrc},on:{error:function(t){e.imageSrc=i("90ab")}}})],1),a("td",{attrs:{width:"65"},on:{click:function(i){t.isRadioPlaying(e.src,e.playing,t.soundID,e.id),t.storeStationData(e,e.id)}}},[a("h3",[t._v(t._s(e.title))])]),a("td",{attrs:{width:"10%"}},[a("v-btn",{attrs:{icon:""},on:{click:function(i){return t.likeStation(e.id)}}},[e.liked?a("v-icon",{staticStyle:{color:"red"},attrs:{dark:""}},[t._v(" mdi-heart ")]):a("v-icon",{staticStyle:{color:"#E0E0E0"},attrs:{dark:""}},[t._v(" mdi-heart-outline ")])],1)],1),a("td",{attrs:{width:"10%"}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",{staticStyle:{color:"#E0E0E0"},attrs:{dark:""}},[t._v(" mdi-dots-horizontal ")])],1)],1)])])]],2)],1)],1)],1)})),0)])],1)],1),a("v-row",{staticClass:"d-flex pt-2",attrs:{align:"center",id:"controllerWrapper"}},[a("v-col",{staticClass:"d-flex space-between",attrs:{cols:"12",sm:"12",md:"12",xs:"12"}},[a("v-btn",{staticClass:"ml-2",attrs:{fab:"",outlined:"","x-small":"",color:"white"},on:{click:function(e){return t.isRadioPaused()}}},[t.radioPaused?a("v-icon",{attrs:{dark:""}},[t._v(" mdi-play ")]):a("v-icon",{attrs:{dark:""}},[t._v(" mdi-stop ")])],1),a("v-slider",{staticClass:"ml-7",attrs:{color:(t.radioMuted,"white"),"thumb-color":"white","track-color":t.radioMuted?"red darken-4":"grey darken-1",max:"1.0",step:"0.05","prepend-icon":t.radioMuted?"mdi-volume-variant-off":"mdi-volume-high"},on:{change:function(e){return t.volumeController()},"click:prepend":function(e){return t.isRadioMuted(t.soundID)}},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}}),a("v-btn",{staticClass:"mr-1 ml-7",attrs:{icon:"",color:"white"},on:{click:function(e){return t.isRadioMuted(t.soundID)}}},[t.radioMuted?a("v-icon",{attrs:{dark:""}},[t._v(" mdi-volume-variant-off ")]):t._e(),t.radioMuted?t._e():a("v-icon",{attrs:{dark:""}},[t._v(" mdi-volume-source ")])],1)],1)],1)],1)],1)},k=[],S=(i("4de4"),i("fb6a"),i("d3b7"),i("5cc6"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),i("159b"),i("99af"),i("1e5c")),H={name:"Lobby",components:{},data:function(){return{stationData:[],stationDataIndex:null,arrayID:null,radioStarted:!1,radioMuted:!1,radioPaused:!0,sound:null,soundID:null,volume:this.$store.state.volume,selectedGenre:"All",analyser:null,gainNode:null,drawTimer:null,frequency:[],ffrequency:null,audio:null,sourceAudio:null,stations:[{id:0,title:"Mi-Soul",src:"http://178.159.3.22:8177/;stream/1",playing:!1,imageSrc:"https://mi-soul.com/wp-content/uploads/play.gif",genres:"Soul R&B House Reggae Hip Hop Dance Soulful Music",website:"http://mi-soul.com",liked:!1,genre:"HipHop"},{id:1,title:"Anison.FM",src:"https://pool.anison.fm:9000/AniSonFM(320)",playing:!1,imageSrc:"https://anison.fm/images/logo_h_summer.png",genres:"Anime Variety",website:"http://www.anison.fm",liked:!1,genre:"Anime"},{id:2,title:"Dance UK Radio",src:"https://uk2.internet-radio.com/proxy/danceradiouk?mp=/stream;",playing:!1,imageSrc:"https://danceradiouk.com/wp-content/uploads/2021/02/druk1-350.png",genres:"Dance House Trance Techno Top 40",website:"https://danceradiouk.com/",liked:!1,genre:"Chill"},{id:3,title:"JapanNext",src:"http://198.50.158.92:8803/;stream/1",playing:!1,imageSrc:"http://1.bp.blogspot.com/-WYvLtD46Tik/XHuMLFCHJTI/AAAAAAAAHag/zil8qukJvU8eWZvlbqIHZT8Ej9NZ-dRvwCK4BGAYYCw/s1600/Logo%2Bcopia.png",genres:"Anime",website:"http://www.japan-next.blogspot.com",liked:!1,genre:"Anime"},{id:4,title:"Radio Isekai",src:"http://66.70.249.70:5080/;stream/1",playing:!1,imageSrc:"https://fastcast4u.com/player/radioisekai/_user/logo/r/radioisekai/ch0.png",genres:"Anime Kpop Krock Jpop Jrock Others",website:"https://www.radioisekai.com/",liked:!1,genre:"Anime"},{id:5,title:"Jake Radio Live",src:"http://188.165.192.5:8015/autodj",playing:!1,imageSrc:"https://jakeradiolive.com/wp-content/uploads/2019/11/773eba52-880d-4ae4-aa5b-b0cd8ae2fa3a_200x200.png",genres:"Hip Hop",website:"https://jakeradiolive.com",liked:!1,genre:"HipHop"},{id:6,title:"Nei-Di's ACG",src:"http://106.104.32.86:8080/;stream/1",playing:!1,imageSrc:"https://images-na.ssl-images-amazon.com/images/I/61ent1CSpRL.png",genres:"Anime",liked:!1,genre:"Anime"},{id:7,title:"Tsubaki Radio",src:"http://stream.tsubakianimeradio.com:9000/;stream/1",playing:!1,imageSrc:"http://tsubakianimeradio.com/wp-content/uploads/2020/08/logo-new.png",genres:"Anime Openings Endings OST Japan Japanese Jpop Jrock",website:"http://tsubakianimeradio.com",liked:!1,genre:"Anime"},{id:8,title:"Hip-Hop Hits",src:"https://streaming.radio.co/s97881c7e0/listen",playing:!1,imageSrc:"https://direct.rhapsody.com/imageserver/images/alb.320331229/500x500.jpg",genres:"Hip Hop Adult Hits Classic Hip Hop",liked:!1,genre:"HipHop"},{id:9,title:"BakaRadio",src:"http://144.217.203.184:8398/;stream/1",playing:!1,imageSrc:"https://liveonlineradio.net/wp-content/uploads/2014/11/Baka-Radio.jpg",genres:"Anime",website:"http://www.bakaradio.net",liked:!1,genre:"Anime"},{id:10,title:"Hip Hop Request # 1 In Hip-Hop and RnB",src:"http://149.56.175.167:5461/;stream/1",playing:!1,imageSrc:"https://hiphoprequest.com/wp-content/uploads/2020/02/HHRlogo-300x128.png",genres:"Hip Hop Urban Contemporary R&B and Urban",website:"http://www.hiphoprequest.com",liked:!1,genre:"HipHop"},{id:11,title:"BEST SMOOTH JAZZ - UK",src:"http://64.95.243.43:8002/;stream/1",playing:!1,imageSrc:"https://i.ytimg.com/vi/4s2RD4e5ZwU/maxresdefault.jpg",genres:"Smooth Jazz",website:"http://bestsmoothjazz.com",liked:!1,genre:"Chill"},{id:12,title:"LIFE CHILL MUSIC",src:"http://aska.ru-hoster.com:8053/autodj",playing:!1,imageSrc:"http://www.lifechillmusic.com/wp-content/uploads/2019/12/Logo-original.png",genres:"Chill Chillout Downtempo Ambient Lounge",website:"http://www.lifechillmusic.com/",liked:!1,genre:"Chill"},{id:13,title:"Be-Happy",src:"https://musicbird.leanstream.co/JCB068-MP3",playing:!1,imageSrc:"https://www.be-happy789.com/images/logo.png",genres:"Japanese, Rock, Jpop, Anime, English Songs",website:"https://www.be-happy789.com/",liked:!1,genre:"Anime"}]}},created:function(){this.loadAudioSource()},computed:{selectedFilterGenre:function(){return"Anime"===this.selectedGenre?this.stations.filter((function(t){return"Anime"===t.genre})):"Chill"===this.selectedGenre?this.stations.filter((function(t){return"Chill"===t.genre})):"HipHop"===this.selectedGenre?this.stations.filter((function(t){return"HipHop"===t.genre})):(this.selectedGenre,this.stations)}},methods:{loadAudioSource:function(){var t=new S["Howl"]({src:["https://musicbird.leanstream.co/JCB068-MP3"],html5:!0});this.sound=t},filterCategory:function(t){"Anime"===t&&(this.selectedGenre="Anime"),"All"===t&&(this.selectedGenre="All"),"HipHop"===t&&(this.selectedGenre="HipHop"),"Chill"===t&&(this.selectedGenre="Chill")},storeStationData:function(t,e){this.stationData=t,this.stationDataIndex=e},isRadioPaused:function(){0!==this.stationData.length?!1===this.stationData.playing&&!1===this.radioStarted?(this.startRadio(this.stationData.src,this.stationDataIndex),this.playAudio(),this.radioPaused=!1):!1===this.stationData.playing&&!0===this.radioStarted?(console.log("Howler Fully Stopped everything"),this.stopRadio(this.arrayID)):(this.stopRadio(this.stationDataIndex),this.radioPaused=!0):console.log("No Station Selected")},isRadioPlaying:function(t,e,i,a){!1===e&&!1===this.radioStarted?(this.startRadio(t,a),this.playAudio(),this.radioPaused=!1):!1===e&&!0===this.radioStarted?(console.log("Howler Fully Stopped everything"),this.stopRadio(this.arrayID),this.startRadio(t,a),this.playAudio()):(this.stopRadio(a),this.radioPaused=!0)},startRadio:function(t,e){this.radioStarted=!0,this.arrayID=e,this.stations[e].playing=!0,this.sound=new S["Howl"]({src:t,html5:!0,volume:this.volume}),console.log("Station Source Loaded into Howler"),S["Howler"].masterGain.gain.value=this.volume,!0===this.radioMuted&&this.muteRadioOnStart()},stopRadio:function(t){this.stations[t].playing=!1,this.radioStarted=!1,this.sound.unload(),console.log("Radio Stopped")},isRadioMuted:function(t){!1===this.radioMuted?this.muteRadio(t):this.unmuteRadio(t)},muteRadio:function(){!1!==this.radioStarted&&(this.radioMuted=!0,this.sound.fade(this.volume,0,1200),console.log("Radio Muted"))},unmuteRadio:function(){this.radioMuted=!1,this.sound.fade(0,this.volume,1200),console.log("Radio Unmuted")},muteRadioOnStart:function(){this.sound.fade(this.volume,0,0)},volumeController:function(){this.$store.commit("volumeSlider",this.volume),!1!==this.radioStarted&&!0!==this.radioMuted&&this.sound.volume(this.volume)},likeStation:function(t){this.stations[t].liked=!this.stations[t].liked},unloadAll:function(){S["Howler"].unload()},playAudio:function(){this.initAudioVisualizer(),console.log("Radio Started Playing"),this.soundID=this.sound.play(),this.drawAudioVisualizer()},initAudioVisualizer:function(){window.AudioContext||window.webkitAudioContext;var t=S["Howler"].ctx.createAnalyser();if(this.audio=this.audio?this.audio:S["Howler"]._html5AudioPool.slice(-1)[0],this.audio.crossOrigin="anonymous",this.sourceAudio=this.sourceAudio?this.sourceAudio:S["Howler"].ctx.createMediaElementSource(this.audio),this.sourceAudio.connect(t),this.frequency=new Uint8Array(t.frequencyBinCount),this.ffrequency=new Uint8Array(1),null===this.gainNode){S["Howler"].ctx.createGain=S["Howler"].ctx.createGain||S["Howler"].ctx.createGainNode;var e=S["Howler"].ctx.createGain();e.gain.setValueAtTime(1,S["Howler"].ctx.currentTime),S["Howler"].masterGain.connect(t),t.connect(e),e.connect(S["Howler"].ctx.destination)}else this.gainNode.disconnect(),S["Howler"].ctx.createGain=S["Howler"].ctx.createGain||S["Howler"].ctx.createGainNode,e=S["Howler"].ctx.createGain(),e.gain.setValueAtTime(1,S["Howler"].ctx.currentTime),S["Howler"].masterGain.connect(t),t.connect(e),e.connect(S["Howler"].ctx.destination);this.analyser=t,this.gainNode=e},drawAudioVisualizer:function(){if(0===this.gainNode.gain.value&&this.drawTimer)window.cancelAnimationFrame(this.drawTimer);else{this.analyser.smoothingTimeConstant=.03,this.analyser.fftSize=2048,this.analyser.getByteFrequencyData(this.frequency),this.analyser.getByteFrequencyData(this.ffrequency);var t=1.5*document.getElementById("js-svg").width.baseVal.value/this.analyser.frequencyBinCount;this.drawSvgPath(t),this.drawTimer=window.requestAnimationFrame(this.drawAudioVisualizer.bind(this))}},drawSvgPath:function(t){var e=this,i="M",a=this.frequency;a.forEach((function(n,o){var s=o*t,r=a[o],l=r/255,c=o%2===0?1:-1,d=e.$refs.jssvg.height.baseVal.value/2+e.$refs.jssvg.height.baseVal.value/2*l*-1*c*e.gainNode.gain.value;i+="".concat(s," ").concat(d,",")})),this.$refs.path.setAttribute("d",i)}}},A=H,x=(i("6220"),i("8336")),C=i("62ad"),_=i("132d"),R=i("adda"),D=i("0fd9"),j=i("1f4f"),M=i("ba0d"),P=Object(l["a"])(A,b,k,!1,null,"800d044c",null),I=P.exports;d()(P,{VBtn:x["a"],VCol:C["a"],VIcon:_["a"],VImg:R["a"],VRow:D["a"],VSimpleTable:j["a"],VSlider:M["a"]});var G={components:{AudioPlayer:I},data:function(){return{}}},V=G,E=(i("af1a"),i("a523")),T=Object(l["a"])(V,w,y,!1,null,"7db7591c",null),O=T.exports;d()(T,{VCol:C["a"],VContainer:E["a"],VRow:D["a"]});var B=a["a"].extend({name:"Home",components:{Stations:O}}),J=B,q=(i("bb09"),Object(l["a"])(J,f,v,!1,null,"b2c8f876",null)),z=q.exports;a["a"].use(g["a"]);var L=[{path:"/",name:"Home",component:z}],F=new g["a"]({mode:"history",base:"/Internet-Radio-Player-Vue/",routes:L}),N=F,U=i("2f62"),$=i("bfa9");a["a"].use(U["a"]);var W=new $["a"]({storage:window.localStorage}),Z=new U["a"].Store({state:{volume:1},mutations:{volumeSlider:function(t,e){t.volume=e}},actions:{},plugins:[W.plugin],modules:{}}),K=i("f309");a["a"].use(K["a"]);var Y=new K["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:N,store:Z,vuetify:Y,render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.89c358be.js.map