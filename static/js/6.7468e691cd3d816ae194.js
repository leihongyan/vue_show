webpackJsonp([6],{BRgg:function(n,t,e){"use strict";function i(){var n=s()({},l.b,{g_tk:5381,uin:0,platform:"h5",needNewCode:1});return Object(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",n,l.c)}function a(n){var t=s()({},l.b,{topid:n,page:"detail",type:"top",tpl:3,platform:"h5",needNewCode:1});return Object(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",t,l.c)}t.b=i,t.a=a;var o=e("woOf"),s=e.n(o),A=e("Gak4"),l=e("T452")},FJ2u:function(n,t,e){var i=e("eOZl");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("123c590c",i,!0)},Kjo5:function(n,t,e){"use strict";function i(n){e("FJ2u")}Object.defineProperty(t,"__esModule",{value:!0});var a=e("Dd8w"),o=e.n(a),s=e("BRgg"),A=e("T452"),l=e("qwAB"),r=e("y/jF"),p=e("F4+m"),c=e("NYxO"),d={mixins:[p.b],created:function(){this._getTopList()},data:function(){return{topList:[]}},methods:o()({selectItem:function(n){this.$router.push({path:"/rank/"+n.id}),this.setTopList(n)},handlePlaylist:function(n){var t=n.length?"60px":"";this.$refs.rank.style.bottom=t,this.$refs.toplist.refresh()},_getTopList:function(){var n=this;Object(s.b)().then(function(t){t.code===A.a&&(n.topList=t.data.topList)})}},Object(c.d)({setTopList:"SET_TOP_LIST"})),components:{Scroll:l.a,Loading:r.a}},f=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"rank",staticClass:"rank"},[e("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:n.topList}},[e("ul",n._l(n.topList,function(t){return e("li",{staticClass:"item",on:{click:function(e){n.selectItem(t)}}},[e("div",{staticClass:"icon"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100",alt:""}})]),n._v(" "),e("ul",{staticClass:"songlist"},n._l(t.songList,function(t,i){return e("li",{staticClass:"song"},[e("span",[n._v(n._s(i+1))]),n._v(" "),e("span",[n._v(n._s(t.songname)+"-"+n._s(t.singername))])])}))])})),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!n.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[e("loading")],1)]),n._v(" "),e("router-view")],1)},B=[],x={render:f,staticRenderFns:B},C=x,b=e("VU/8"),g=i,h=b(d,C,!1,g,"data-v-9eb423fa",null);t.default=h.exports},eOZl:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,"\n.rank[data-v-9eb423fa] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-9eb423fa] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-9eb423fa] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-9eb423fa]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-9eb423fa] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-9eb423fa] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-9eb423fa] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n  text-align: left;\n}\n.rank .toplist .loading-container[data-v-9eb423fa] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}","",{version:3,sources:["F:/vue-music1/vue-music/src/components/rank/rank.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,UAAU;CACX;AACD;EACE,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,cAAc;CACf;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;MAChB,oBAAoB;UAChB,gBAAgB;EACxB,aAAa;EACb,cAAc;CACf;AACD;EACE,oBAAoB;MAChB,YAAY;UACR,QAAQ;EAChB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;CACjB;AACD;EACE,wBAAwB;EACxB,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,oCAAoC;UAC5B,4BAA4B;CACrC",file:"rank.vue",sourcesContent:["\n.rank[data-v-9eb423fa] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-9eb423fa] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-9eb423fa] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-9eb423fa]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-9eb423fa] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-9eb423fa] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-9eb423fa] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n  text-align: left;\n}\n.rank .toplist .loading-container[data-v-9eb423fa] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])}});
//# sourceMappingURL=6.7468e691cd3d816ae194.js.map