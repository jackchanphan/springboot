webpackJsonp([0],[,,function(t,s,a){a(23);var e=a(0)(a(8),a(43),"data-v-50c4035f",null);t.exports=e.exports},function(t,s,a){"use strict";var e=a(1),i=a(49),n=a(32),c=a.n(n),r=a(33),l=a.n(r),o=a(37),u=a.n(o);e.a.use(i.a),s.a=new i.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:c.a},{path:"/index",name:"Index",component:l.a},{path:"/user/:uid",name:"User",component:u.a}]})},function(t,s,a){a(17);var e=a(0)(a(5),a(38),null,null);t.exports=e.exports},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"app"}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"appfooter",methods:{log:function(){console.log("footer")}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"appfooter",methods:{log:function(){console.log("footer")}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"appheader",methods:{log:function(){console.log("header")}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"comment",props:{id:{default:0}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(2),i=a.n(e),n=a(29),c=a.n(n),r=a(35),l=a.n(r);s.default={name:"home",components:{appheader:i.a,appfooter:c.a,quiz:l.a},data:function(){return{quizlist:[{href:"http://www.baidu.com",title:"P2P平台被监管一查就死的情况,怎么看？",answer:"柒哥、牛小青等回答了问题",pv:"1.5k",msgs:"32",tu:"20",src:"http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png"},{href:"http://www.baidu.com",title:"P2P平台被监管一查就死的情况,怎么看？",answer:"柒哥、牛小青等回答了问题",pv:"1.5k",msgs:"32"},{href:"http://www.baidu.com",title:"P2P平台被监管一查就死的情况,怎么看？",answer:"柒哥、牛小青等回答了问题",msgs:"32",tu:"20",src:"http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png"}]}},mounted:function(){emitter.sub("quiz-update",this,function(t){if(console.log(t),t.constructor==[].constructor)for(var s=0;s<t.length;s++)this.quizlist.push(t[s])}),emitter.sub("inc",this.quizlist,function(t){this[t].tu++})}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(2),i=a.n(e),n=a(30),c=a.n(n),r=a(34),l=a.n(r),o=a(36),u=a.n(o);s.default={name:"index",components:{appheader:i.a,appfooter:c.a,platform:l.a,review:u.a},data:function(){return{platforms:[{platformSrc:"https://www.baidu.com/img/bd_logo1.png",platformName:"人人贷",score:4.5,abstract:"年利率：6%-12%    期限：活期-2年    银行背景     5年平台",tags:[{name:"标难抢",cnt:12},{name:"人太多",cnt:1},{name:"人太帅",cnt:23}],reviews:[{username:"柒哥",title:"专业风控",score:4,comment:" 不靠谱的平台有几个表象。高调的宣传，铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬",iconUserSrc:"http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png"}]},{platformSrc:"https://imgsa.baidu.com/news/q%3D100/sign=be01a7932d7f9e2f763519082f31e962/6a63f6246b600c3398cecbbd104c510fd9f9a10b.jpg",platformName:"人人贷",score:3.5,abstract:"年利率：6%-12%    期限：活期-2年    银行背景     5年平台",tags:[{name:"标难抢",cnt:12},{name:"人太多",cnt:1},{name:"人太帅",cnt:23}],reviews:[{username:"柒哥",title:"专业风控",score:4,comment:" 不靠谱的平台有几个表象。高调的宣传，铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬",iconUserSrc:"http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png"},{username:"你是小白",title:"专业风控",score:3.7,comment:" 不靠谱的平台有几个表象。高调的宣传，铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬",iconUserSrc:"http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png"},{username:"你是小白",title:"专业风控",score:3.7,comment:" 不靠谱的平台有几个表象。高调的宣传，铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬",iconUserSrc:"http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png"},{username:"你是小白",title:"专业风控",score:3.7,comment:" 不靠谱的平台有几个表象。高调的宣传，铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬铺天盖地的广告靠谱的平台有几个回份大幅度感到发到深圳打工尴尬",iconUserSrc:"http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png"}]},{platformName:"aaaa"}]}},mounted:function(){$(".thumbnails").click(function(){$(".sublinks").toggle(100)}),$("#app-header .quiz").css({display:"none"}),$("#app-header .logo").css({left:".25rem","margin-left":0}),$(".review-list .cover").click(function(){$(this).hide(),$(this).parent().css("height","100%")})}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"platform",props:{id:{default:0},platformSrc:{default:null},platformName:{default:""},follow:{default:0},score:{default:0},abstract:{default:"暂无简介"},tags:{default:function(){return[]}}},data:function(){return{tags_:this.tags,follow_:this.follow,followFlag:!1,tagFlag:new Array(this.tags.length)}},methods:{incFollow:function(){this.followFlag||(this.follow_++,this.followFlag=!0)},incTag:function(t,s){this.tagFlag[t]&&1==this.tagFlag[t]||(this.tags_[t].cnt++,this.tagFlag[t]=1,$("#"+s).addClass("tagInc"))}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"quiz",props:{id:{default:0},message:{default:""},title:{default:""},answer:{default:"还没有人回答该问题"},pv:{default:0},tu:{default:0},msgs:{default:0},href:{default:""},src:{default:""},usrlink:{default:"javascript:void(0);"},pvlink:{default:"javascript:void(0);"},tulink:{default:"javascript:void(0);"},msgslink:{default:"javascript:void(0);"}},data:function(){return{incflag:!0,id_:this.id,tu_:this.tu}},methods:{thumbsup:function(t){this.incflag&&(this.tu_++,this.incflag=!1,console.log($("#"+t).find("i")),$("#"+t).find("i").removeClass("icon-thumbsup").addClass("icon-thumbsup-active"))}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"review",props:{id:{default:0},iconUserSrc:{default:null},username:{default:null},title:{default:""},score:{default:0},comment:{default:"这家伙很懒，还没有任何评论！"}},methods:{showFullText:function(t){var s=$("#"+t),a=s.parent().html().substr(0,s.parent().html().indexOf("<span"));s.parent().html(a+s.data("full-txt"))}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(31),i=a.n(e);s.default={name:"user",components:{comment:i.a},data:function(){return{uid:this.$route.params.uid,usrName:"柒哥",verified:!0,usrSrc:"http://c.csdnimg.cn/public/common/toolbar/images/f_icon.png",title:"风控专家",moto:"一句话的介绍，你也了解不了我",tu:365,follow:77,followFlag:!1,fans:372,followedPlatform:24,quizs:24,comments:[{},{},{}]}},methods:{incFollow:function(){this.followFlag||(this.follow_++,this.followFlag=!0)},incTag:function(t,s){this.tagFlag[t]&&1==this.tagFlag[t]||(this.tags_[t].cnt++,this.tagFlag[t]=1,$("#"+s).addClass("tagInc"))}},mounted:function(){emitter.emit("change-title",this.usrName)}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(1),i=a(4),n=a.n(i),c=a(3);e.a.config.productionTip=!1,new e.a({el:"#app",router:c.a,template:"<App/>",components:{App:n.a}})},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s,a){a(19);var e=a(0)(a(6),a(40),"data-v-2f919f6d",null);t.exports=e.exports},function(t,s,a){a(25);var e=a(0)(a(7),a(45),"data-v-7a8c10d6",null);t.exports=e.exports},function(t,s,a){a(27);var e=a(0)(a(9),a(47),null,null);t.exports=e.exports},function(t,s,a){a(22);var e=a(0)(a(10),a(42),"data-v-445556c4",null);t.exports=e.exports},function(t,s,a){a(21),a(20);var e=a(0)(a(11),a(41),"data-v-311282a3",null);t.exports=e.exports},function(t,s,a){a(28);var e=a(0)(a(12),a(48),"data-v-dce59a9c",null);t.exports=e.exports},function(t,s,a){a(26);var e=a(0)(a(13),a(46),"data-v-870c51d8",null);t.exports=e.exports},function(t,s,a){a(24);var e=a(0)(a(14),a(44),"data-v-5650e4d7",null);t.exports=e.exports},function(t,s,a){a(18);var e=a(0)(a(15),a(39),"data-v-2a2414ec",null);t.exports=e.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-page"},[a("div",{staticClass:"usr-panel",attrs:{id:"usr_"+t.uid}},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"pos-rel vtop ib"},[a("div",{staticClass:"icon-usr"},[a("img",{attrs:{src:t.usrSrc}})]),t._v(" "),1==t.verified?a("i",{staticClass:"icon-verified-usr"}):t._e()]),t._v(" "),a("div",{staticClass:"ib mid"},[t.usrName?a("div",{staticClass:"usrName"},[a("div",{staticClass:"ib vmiddle"},[t._v(t._s(t.usrName))]),t._v(" "),1==t.verified?a("div",{staticClass:"tag verified-tag ib"},[a("i",{staticClass:"icon-verified-cer"}),t._v(" "),a("span",{staticClass:"vmiddle"},[t._v("KP认证")])]):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"title"},[t._v("\n\t\t\t\t"+t._s(t.title)+" | 获得"+t._s(t.tu)+"个称赞\n\t\t\t")]),t._v(" "),a("div",{staticClass:"moto"},[t._v("\n\t\t\t\t"+t._s(t.moto)+"\n\t\t\t")])]),t._v(" "),a("div",{staticClass:"btn-follow",on:{click:function(s){t.incFollow()}}},[t._v("\n\t\t\t★ 关注 \n\t\t")])]),t._v(" "),a("div",{staticClass:"statistics orient-list"},[a("li",[a("div",{staticClass:"static-itm"},[a("p",{staticClass:"amount"},[t._v(t._s(t.fans))]),t._v(" "),a("p",{staticClass:"cn"},[t._v("粉丝")])])]),t._v(" "),a("li",[a("div",{staticClass:"static-itm"},[a("p",{staticClass:"amount"},[t._v(t._s(t.follow))]),t._v(" "),a("p",{staticClass:"cn"},[t._v("关注的人")])])]),t._v(" "),a("li",[a("div",{staticClass:"static-itm"},[a("p",{staticClass:"amount"},[t._v(t._s(t.followedPlatform))]),t._v(" "),a("p",{staticClass:"cn"},[t._v("关注的平台")])])]),t._v(" "),a("li",[a("div",{staticClass:"static-itm"},[a("p",{staticClass:"amount"},[t._v(t._s(t.quizs))]),t._v(" "),a("p",{staticClass:"cn"},[t._v("关注的问题")])])])])]),t._v(" "),a("div",{staticClass:"tab-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"current-box"},[a("ul",{staticClass:"comment-list"},t._l(t.comments,function(t,s){return a("div",[a("comment",{attrs:{id:s}})],1)})),t._v(" "),a("ul",{staticClass:"answer-list"}),t._v(" "),a("ul",{staticClass:"quiz-list"})])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"orient-list tabs"},[a("li",{staticClass:"current"},[t._v("评价")]),t._v(" "),a("li",[t._v("回答")]),t._v(" "),a("li",[t._v("提问")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app-footer"}},[a("ul",{staticClass:"flex-center"},[a("li",{staticClass:"nav active"},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"icon-home"}),a("p",[t._v("首页")])])],1),t._v(" "),a("li",{staticClass:"nav"},[a("router-link",{attrs:{to:"/index"}},[a("i",{staticClass:"icon-index"}),a("p",[t._v("指数")])])],1),t._v(" "),a("li",{staticClass:"nav"},[a("router-link",{attrs:{to:"/discovery"}},[a("i",{staticClass:"icon-discovery"}),a("p",[t._v("发现")])])],1),t._v(" "),a("li",{staticClass:"nav"},[a("router-link",{attrs:{to:"/user/-1"}},[a("i",{staticClass:"icon-self"}),a("p",[t._v("我")])])],1)])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("appheader"),t._v(" "),a("div",{staticClass:"index-main"},[a("nav",[a("ul",{staticClass:"flex-center"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("指数最高")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("最近热评")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("评价最多")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("资历最老")])],1),t._v(" "),a("li",{staticClass:"pos-rel"},[t._m(0),t._v(" "),a("ul",{staticClass:"sublinks"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("子链接")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("子链接")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("子链接")])],1)])])]),t._v(" "),a("div",{staticClass:"linearbg"})]),t._v(" "),a("div",{staticClass:"platforms-list"},t._l(t.platforms,function(s,e){return a("div",{staticClass:"platform-itm"},[a("platform",{attrs:{platformSrc:s.platformSrc,platformName:s.platformName,score:s.score,abstract:s.abstract,tags:s.tags,id:"platform"+e}}),t._v(" "),s.reviews&&s.reviews.length>0?a("div",{staticClass:"review-list"},[a("div",{staticClass:"cover"},[t._v("▼")]),t._v(" "),t._l(s.reviews.slice(0,2),function(t,s){return a("div",[a("review",{class:"review"+s,attrs:{id:"pf"+e+"-review"+s,username:t.username,iconUserSrc:t.iconUserSrc,title:t.title,comment:t.comment,score:t.score}})],1)})],2):t._e(),t._v(" "),s.reviews&&s.reviews.length>2?a("div",{staticClass:"view-more"},[t._v("\n\t\t\t\t\t查看剩余"+t._s(s.reviews.length-2)+"条评分 >\n\t\t\t\t")]):t._e()],1)}))]),t._v(" "),a("div",{staticClass:"linearbg-reverse bottom"}),t._v(" "),a("appfooter")],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"thumbnails"},[a("div",{staticClass:"pos-rel sepbox"},[a("span",{staticClass:"sep"})]),t._v(" "),a("div",{staticClass:"pos-rel sepbox"},[a("span",{staticClass:"sep"})]),t._v(" "),a("div",{staticClass:"pos-rel sepbox"},[a("span",{staticClass:"sep"})])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("appheader"),t._v(" "),a("div",{staticClass:"channels"},[a("ul",{staticClass:"flex-center"},[a("li",{staticClass:"channel"},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"icon-channel1"}),a("p",[t._v("问答")])])],1),t._v(" "),a("li",{staticClass:"channel"},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"icon-channel2"}),a("p",[t._v("课题组")])])],1),t._v(" "),a("li",{staticClass:"channel"},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"icon-channel3"}),a("p",[t._v("理财专栏")])])],1),t._v(" "),a("li",{staticClass:"channel"},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"icon-channel4"}),a("p",[t._v("每日财讯")])])],1)])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"quizlist"},t._l(t.quizlist,function(t,s){return a("div",[a("quiz",{attrs:{id:s,href:t.href,title:t.title,answer:t.answer,pv:t.pv,tu:t.tu,msgs:t.msgs,src:t.src}})],1)})),t._v(" "),a("appfooter")],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"subjects box"},[a("div",{staticClass:"ib"},[a("p",{staticClass:"text-green f19"},[t._v("千人共评课题组")]),t._v(" "),a("p",{staticClass:"text-gray f12"},[t._v("每天9：00-10：00 等你来评")])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{attrs:{id:"app-header"}},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"quiz ib"},[a("router-link",{attrs:{to:"/quiz"}},[t._v("提问")])],1),t._v(" "),a("div",{staticClass:"logo ib"},[a("router-link",{attrs:{to:"/"}})],1),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"ac-pos"})])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mag ib"},[a("a",{attrs:{href:""}},[a("i",{staticClass:"icon-mag"})])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"review"},[a("div",{staticClass:"dotbox"},[a("div",{staticClass:"row"},[t.iconUserSrc?a("div",{staticClass:"icon-user ib"},[a("img",{attrs:{src:t.iconUserSrc}})]):t._e(),t._v(" "),t.username?a("div",{staticClass:"username ib"},[t._v(t._s(t.username)+" "),a("span",{staticClass:"f9 lightgray"},[t._v(t._s(t.title))])]):t._e()]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"comment ib"},[a("div",{staticClass:"ibbox score"},[t._v("\n\t\t\t评分"+t._s(parseFloat(t.score).toFixed(1))+"\n\t\t")]),a("span",{staticClass:"sep"}),t._v("\n\t\t\t"+t._s(t.comment.length>40?t.comment.substr(0,50)+"...":t.comment)+"\n\t\t\t"),t.comment.length>40?a("a",{staticClass:"text-green comment-link",attrs:{id:t.id,"data-full-txt":t.comment},on:{click:function(s){t.showFullText(t.id)}}},[t._v("more>")]):t._e()])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app-footer"}},[a("ul",{staticClass:"flex-center"},[a("li",{staticClass:"nav active"},[a("router-link",{attrs:{to:"/index"}},[a("i",{staticClass:"icon-index"}),a("p",[t._v("靠谱指数")])])],1),t._v(" "),a("li",{staticClass:"nav"},[a("router-link",{attrs:{to:"/comment"}},[a("i",{staticClass:"icon-comment"}),a("p",[t._v("千人共评")])])],1),t._v(" "),a("li",{staticClass:"nav"},[a("router-link",{attrs:{to:"/user_self"}},[a("i",{staticClass:"icon-self"}),a("p",[t._v("个人中心")])])],1)])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"quiz box",attrs:{id:t.id}},[a("div",{staticClass:"wrap95"},[a("a",{attrs:{href:t.href}},[a("div",{staticClass:"title"},[t._v(t._s(t.title))])]),t._v(" "),a("div",{staticClass:"body clearfix text-gray"},[a("div",{staticClass:"ib left"},[a("a",{attrs:{href:t.usrlink}},[t.src?a("div",{staticClass:"ib icon-user"},[a("img",{attrs:{src:t.src,alt:""}})]):t._e(),t._v(" "),a("div",{staticClass:"ib"},[t._v(t._s(t.answer))])])]),t._v(" "),a("div",{staticClass:"ib right"},[t.pv?a("div",{staticClass:"ib pv"},[a("a",{attrs:{href:t.pvlink}},[a("i",{staticClass:"icon-pv"}),a("span",[t._v(t._s(t.pv))])])]):t._e(),t._v(" "),t.tu?a("div",{staticClass:"ib thumbsup"},[a("a",{attrs:{href:t.tulink,id:"tu-"+t.id_},on:{click:function(s){t.thumbsup("tu-"+t.id_)}}},[a("i",{staticClass:"icon-thumbsup"}),a("span",[t._v(t._s(t.tu_))])])]):t._e(),t._v(" "),t.msgs?a("div",{staticClass:"ib msgs"},[a("a",{attrs:{href:t.msgslink}},[a("i",{staticClass:"icon-msgs"}),a("span",[t._v(t._s(t.msgs))])])]):t._e()])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"comment-itm",attrs:{id:"comment-"+t.id}})},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"platform pos-rel"},[a("div",{staticClass:"icon-platform"},[t.platformSrc?a("img",{attrs:{src:t.platformSrc}}):t._e()]),t._v(" "),a("div",{staticClass:"ib mid"},[t.platformName?a("div",{staticClass:"platformName"},[t._v(t._s(t.platformName))]):t._e(),t._v(" "),a("div",{staticClass:"score"},[t._l(Math.floor(t.score),function(t){return a("span",{staticClass:"star-active"})}),t._l(5-Math.floor(t.score),function(t){return a("span",{staticClass:"star-mute"})}),t._v(" "),a("span",{staticClass:"score-txt"},[t._v(t._s(t.score))])],2),t._v(" "),a("div",{staticClass:"abstract"},[t._v("\n\t\t\t"+t._s(t.abstract)+"\n\t\t")]),t._v(" "),t.tags&&t.tags.length>0?a("div",{staticClass:"taglist"},t._l(t.tags_,function(s,e){return a("span",{staticClass:"tag",attrs:{id:t.id+"-tag"+e},on:{click:function(s){t.incTag(e,t.id+"-tag"+e)}}},[t._v(t._s(s.name)+"("+t._s(s.cnt)+")")])})):t._e()]),t._v(" "),a("div",{staticClass:"btn-follow",on:{click:function(s){t.incFollow()}}},[t._v("\n\t\t关注 ("+t._s(t.follow_)+")\n\t")])])},staticRenderFns:[]}}],[16]);
//# sourceMappingURL=app.e8bf7f82ccdd1fa5b3de.js.map