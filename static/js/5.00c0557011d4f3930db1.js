webpackJsonp([5],{BRgg:function(t,e,n){"use strict";function s(){var t=o()({},c.b,{g_tk:5381,uin:0,platform:"h5",needNewCode:1});return Object(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,c.c)}function a(t){var e=o()({},c.b,{topid:t,page:"detail",type:"top",tpl:3,platform:"h5",needNewCode:1});return Object(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",e,c.c)}e.b=s,e.a=a;var i=n("woOf"),o=n.n(i),r=n("Gak4"),c=n("T452")},"k3+z":function(t,e,n){var s=n("qqv6");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("ecf21c20",s,!0)},qqv6:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,"\n.slide-enter-active[data-v-309d3410],\n.slide-leave-active[data-v-309d3410] {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.slide-enter[data-v-309d3410],\n.slide-leave-to[data-v-309d3410] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}","",{version:3,sources:["F:/vue-music1/vue-music/src/components/top-list/top-list.vue"],names:[],mappings:";AACA;;EAEE,kCAAkC;EAClC,0BAA0B;CAC3B;AACD;;EAEE,2CAA2C;UACnC,mCAAmC;CAC5C",file:"top-list.vue",sourcesContent:["\n.slide-enter-active[data-v-309d3410],\n.slide-leave-active[data-v-309d3410] {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.slide-enter[data-v-309d3410],\n.slide-leave-to[data-v-309d3410] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},s3x3:function(t,e,n){"use strict";function s(t){n("k3+z")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),i=n.n(a),o=n("kvay"),r=n("NYxO"),c=n("BRgg"),l=n("T452"),d=n("PvFA"),u={computed:i()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},Object(r.c)(["topList"])),created:function(){this._getMusicList()},data:function(){return{songs:[],rank:!0}},methods:{_getMusicList:function(){var t=this;if(!this.topList.id)return void this.$router.push("/rank");Object(c.a)(this.topList.id).then(function(e){e.code===l.a&&(t.songs=t._normalizeSongs(e.songlist))})},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){var n=t.data;n.songid&&n.albumid&&e.push(Object(d.a)(n))}),e}},components:{MusicList:o.a}},v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{rank:t.rank,title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},f=[],p={render:v,staticRenderFns:f},g=p,m=n("VU/8"),b=s,h=m(u,g,!1,b,"data-v-309d3410",null);e.default=h.exports}});
//# sourceMappingURL=5.00c0557011d4f3930db1.js.map