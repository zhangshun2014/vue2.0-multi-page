webpackJsonp([6,0],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=n(4),r=n(31),i=a(r),s=n(5),u=a(s),c=n(217),l=a(c);n(69);new o.Vue({el:"#collect",store:u.default,template:'<div class="pageview"><my-header></my-header><collect></collect></div>',components:{"my-header":i.default,collect:l.default}})},1:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.PAGE_SET_INFO="PAGE_SET_INFO",e.SHOPPING_GET_NUM="SHOPPING_GET_NUM",e.TOP_RIGHT_CLICK_FONT="TOP_RIGHT_CLICK_FONT",e.GLOBAL_SET_LOADINNG="GLOBAL_SET_LOADINNG",e.INDEX_GET_DATA="INDEX_GET_DATA",e.MESSAGE_GET_LIST="MESSAGE_GET_LIST",e.MESSAGE_LIST_CURRENTPAGE="MESSAGE_LIST_CURRENTPAGE",e.SHOPPINGCART_GET_LIST="SHOPPINGCART_GET_LIST",e.SHOPPINGCART_LIST_CURRENTPAGE="SHOPPINGCART_LIST_CURRENTPAGE",e.SHOPPINGCART_SELECT_ALL="SHOPPINGCART_SELECT_ALL",e.SHOPPINGCART_SELECT_ITEM="SHOPPINGCART_SELECT_ITEM",e.SHOPPINGCART_DELETE_SELECT="SHOPPINGCART_DELETE_SELECT",e.SHOPPINGCART_DELETE_ARRAY="SHOPPINGCART_DELETE_ARRAY",e.CALCULATE_TOTAL_PRICE="CALCULATE_TOTAL_PRICE",e.MESSAGE_GET_COUNTER="MESSAGE_GET_COUNTER",e.CENTER_GET_DATA="CENTER_GET_DATA",e.COLLECT_GET_LIST="COLLECT_GET_LIST",e.COLLECT_LIST_CURRENTPAGE="COLLECT_LIST_CURRENTPAGE",e.SHOW_CHECKBOX="SHOW_CHECKBOX",e.LOGIN_IS_SUCCESS="LOGIN_IS_SUCCESS",e.DESTINATION_GET_INDEX="DESTINATION_GET_INDEX"},2:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(10),i=o(r),s=n(5),u=o(s),c=n(1),l=a(c),f=n(39),d=o(f),_=n(17),g=_.build.assetsPublicPath+_.build.assetsSubDirectory+"/api/";d.default.interceptors.request.use(function(t){return u.default.commit(l.GLOBAL_SET_LOADINNG,!0),t},function(t){return i.default.reject(t)}),d.default.interceptors.response.use(function(t){return u.default.commit(l.GLOBAL_SET_LOADINNG,!1),t},function(t){return i.default.reject(t)}),e.default={getMessageList:function(t,e){d.default.get(g+"center/getNotification.json?t="+1*new Date+"&currentPage="+t+"&callback=?").then(function(t){t.status>=200&&t.status<300&&e(t.data)}).catch(function(t){return i.default.reject(t)})},getLogin:function(t,e){d.default.get(g+"user/login.json?t="+1*new Date+"&callback=?").then(function(t){t.status>=200&&t.status<300&&e(t.data)}).catch(function(t){return i.default.reject(t)})},getShoppingCartNum:function(t){d.default.get(g+"order/countShopCartNum.json?t="+1*new Date+"&callback=?").then(function(e){e.status>=200&&e.status<300&&t(e.data)}).catch(function(t){return i.default.reject(t)})},getCollectList:function(t,e){return new i.default(function(n,a){d.default.get(g+"center/getFavourite.json?t="+1*new Date+"&currentPage="+t+"&callback=?").then(function(t){t.status>=200&&t.status<300&&(e(t.data),n(t.data))}).catch(function(t){a(t)})})},getShoppingCartList:function(t,e){return new i.default(function(n,a){d.default.get(g+"order/shopCart.json?t="+1*new Date+"&currentPage="+t+"&callback=?").then(function(t){t.status>=200&&t.status<300&&(e(t.data),n(t.data))}).catch(function(t){a(t)})})},deleteShoppingCartList:function(t,e){d.default.get(g+"order/deleteShopCart.json?t="+1*new Date+"&callback=?").then(function(n){n.status>=200&&n.status<300&&e(n.data,t)}).catch(function(t){return i.default.reject(t)})},getCenterData:function(t){return new i.default(function(e,n){d.default.get(g+"center/getCenter.json?t="+1*new Date+"&callback=?").then(function(n){n.status>=200&&n.status<300&&(t(n.data),e(n.data))}).catch(function(t){n(t)})})},getIndexData:function(t){return new i.default(function(e,n){d.default.get(g+"home/homepageV3.json?t="+1*new Date+"&callback=?").then(function(n){n.status>=200&&n.status<300&&(t(n.data),e(n.data))}).catch(function(t){n(t)})})},getDestinationIndex:function(t){d.default.get(g+"destination/getDestination.json?t="+1*new Date+"&callback=?").then(function(e){e.status>=200&&e.status<300&&t(e.data)}).catch(function(t){return i.default.reject(t)})}}},4:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=n(9),r=a(o),i=n(27),s=a(i),u=n(18),c=a(u),l=n(28),f=a(l),d=n(7),_=a(d),g=n(42),h=a(g),p=n(40),E=a(p),T=n(13),C=a(T),L=n(12),S=a(L);n(15);var I=n(41);r.default.use(E.default),r.default.use(I),r.default.use(_.default),r.default.use(h.default);var P={"zh-CN":C.default,"en-US":S.default},m=new h.default({locale:"zh-CN",messages:P});n(14),t.exports={Vue:r.default,$:s.default,Common:c.default,wx:f.default,i18n:m}},5:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),r=a(o),i=n(6),s=a(i),u=n(24),c=a(u),l=n(20),f=a(l),d=n(25),_=a(d),g=n(23),h=a(g),p=n(22),E=a(p),T=n(19),C=a(T),L=n(21),S=a(L),I=n(26),P=a(I);r.default.use(s.default),e.default=new s.default.Store({modules:{index:E.default,common:f.default,my:_.default,messageList:c.default,login:h.default,collect:C.default,destinationIndex:S.default,shoppingCart:P.default},strict:!1})},8:function(t,e){"use strict";t.exports={NODE_ENV:'"production"'}},12:function(t,e){t.exports={setting:{topTitle:"setting",share:"share friends",advice:"advice",changeLanguage:"change language",logout:"log out"}}},13:function(t,e){t.exports={setting:{topTitle:"设置",share:"告诉朋友",advice:"意见反馈",changeLanguage:"切换语言",logout:"退出登录"}}},14:function(t,e){},15:function(t,e){},16:function(t,e,n){"use strict";var a=n(38),o=n(8);t.exports=a(o,{NODE_ENV:'"development"'})},17:function(t,e,n){(function(e){"use strict";var a=n(37);t.exports={build:{env:n(8),assetsRoot:a.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"https://github.com/luchanan/vue2.0-multi-page/dist/",productionSourceMap:!0,productionGzip:!1,productionGzipExtensions:["js","css"]},dev:{env:n(16),port:8080,assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},cssSourceMap:!1}}}).call(e,"/")},18:function(t,e){"use strict";var n={isLogin:function(){return null!=window.localStorage.getItem("userInfo")},hasDeviceId:!1,index2PageCount:function(t,e){return Math.ceil(t/(e||10))},goBack:function(){window.history.go(-1)}};t.exports=n},19:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(3),s=o(i),u=n(1),c=a(u),l=n(4),f=n(2),d=o(f),_={showCheckbox:!1,collectList:[],hasMore:!0,currentPage:0},g={getCollectList:function(t){var e=t.commit;if(_.hasMore)return e(c.COLLECT_LIST_CURRENTPAGE),d.default.getCollectList(_.currentPage,function(t){e(c.COLLECT_GET_LIST,t)})}},h={getCollectList:function(t){return t.collectList},collectHasMore:function(t){return t.hasMore},getCheckboxShow:function(t){return t.showCheckbox}},p=(r={},(0,s.default)(r,c.COLLECT_GET_LIST,function(t,e){t.collectList=t.collectList.concat(e.favourite_list),t.hasMore=t.currentPage<l.Common.index2PageCount(e.total_index)==!0}),(0,s.default)(r,c.COLLECT_LIST_CURRENTPAGE,function(t){t.currentPage+=1,t.hasMore=!1}),(0,s.default)(r,c.SHOW_CHECKBOX,function(t){t.showCheckbox?t.showCheckbox=!1:t.showCheckbox=!0}),r);e.default={state:_,actions:g,getters:h,mutations:p}},20:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(3),s=o(i),u=n(36),c=o(u),l=n(7),f=n(1),d=a(f),_=n(2),g=o(_),h={globalLoadinng:!0,headerTitle:"我的",left:"",right:"",type:"",shoppingCartNum:0},p={setPageInfo:function(t,e){var n=t.commit;n(d.PAGE_SET_INFO,e)},getShoppingCartNum:function(t){var e=t.commit;g.default.getShoppingCartNum(function(t){e(d.SHOPPING_GET_NUM,t)})}},E={getPageInfo:function(t){return t},getShoppingCartNum:function(t){return t.shoppingCartNum}},T=(r={},(0,s.default)(r,d.PAGE_SET_INFO,function(t,e){t=(0,c.default)(t,e)}),(0,s.default)(r,d.SHOPPING_GET_NUM,function(t,e){t.shoppingCartNum=e.shop_cart_num}),(0,s.default)(r,d.GLOBAL_SET_LOADINNG,function(t,e){t.globalLoadinng=e,t.globalLoadinng?l.Indicator.open():l.Indicator.close()}),(0,s.default)(r,d.TOP_RIGHT_CLICK_FONT,function(t,e){t.right.font===e.afterFont?t.right.font="编辑":t.right.font="完成"}),r);e.default={state:h,actions:p,getters:E,mutations:T}},21:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=o(r),s=n(1),u=a(s),c=n(2),l=o(c),f={getDestinationIndex:[]},d={getDestinationIndex:function(t){var e=t.commit;l.default.getDestinationIndex(function(t){e(u.DESTINATION_GET_INDEX,t)})}},_={getDestinationIndex:function(t){return t.getDestinationIndex}},g=(0,i.default)({},u.DESTINATION_GET_INDEX,function(t,e){t.getDestinationIndex=e.country_list});e.default={state:f,actions:d,getters:_,mutations:g}},22:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=o(r),s=n(1),u=a(s),c=n(2),l=o(c),f={indexData:[]},d={getIndexData:function(t){var e=t.commit;return l.default.getIndexData(function(t){e(u.INDEX_GET_DATA,t)})}},_={getIndexData:function(t){return t.indexData}},g=(0,i.default)({},u.INDEX_GET_DATA,function(t,e){t.indexData=e});e.default={state:f,actions:d,getters:_,mutations:g}},23:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=o(r),s=n(10),u=o(s),c=n(1),l=a(c),f=n(2),d=o(f),_={loginSuccess:!1,errorMessage:""},g={goLogin:function(t,e){var n=t.commit;return new u.default(function(t,a){d.default.getLogin(e,function(e){n(l.LOGIN_IS_SUCCESS,e),t(e)})})}},h={getLoginSuccess:function(t){return t.loginSuccess},getLoginMessage:function(t){return t.errorMessage}},p=(0,i.default)({},l.LOGIN_IS_SUCCESS,function(t,e){t.loginSuccess="0000"===e.error_code,t.errorMessage=e.error_msg});e.default={state:_,actions:g,getters:h,mutations:p}},24:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(3),s=o(i),u=n(4),c=n(2),l=o(c),f=n(1),d=a(f),_={listData:[],hasMore:!0,currentPage:0,totalPage:0},g={getMessageList:function(t){var e=t.commit;_.hasMore&&(e(d.MESSAGE_LIST_CURRENTPAGE),l.default.getMessageList(_.currentPage,function(t){e(d.MESSAGE_GET_LIST,t)}))}},h={getMessageListGet:function(t){return t.listData},hasMore:function(t){return t.hasMore}},p=(r={},(0,s.default)(r,d.MESSAGE_GET_LIST,function(t,e){t.listData=t.listData.concat(e.notification_list),t.hasMore=t.currentPage<u.Common.index2PageCount(e.total_index)==!0}),(0,s.default)(r,d.MESSAGE_LIST_CURRENTPAGE,function(t){t.currentPage+=1,t.hasMore=!1}),r);e.default={state:_,actions:g,getters:h,mutations:p}},25:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(3),s=o(i),u=n(1),c=a(u),l=n(2),f=o(l),d={messageCount:0,centerData:[]},_={getMessageCount:function(t,e){var n=t.commit;n(c.MESSAGE_GET_COUNTER,e)},gerCenterData:function(t){var e=t.commit;return f.default.getCenterData(function(t){e(c.CENTER_GET_DATA,t)})}},g={getMessageCount:function(t){return t.messageCount},getCenterData:function(t){return t.centerData}},h=(r={},(0,s.default)(r,c.MESSAGE_GET_COUNTER,function(t,e){t.messageCount=e}),(0,s.default)(r,c.CENTER_GET_DATA,function(t,e){t.centerData=e}),r);e.default={state:d,actions:_,getters:g,mutations:h}},26:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(3),s=o(i),u=n(5),c=o(u),l=n(1),f=a(l),d=n(4),_=n(2),g=o(_),h=n(7),p={go:"去结算",delete:"删除"},E={shoppingCartCheckbox:!1,shoppingList:[],hasMore:!0,currentPage:0,totalPrice:0,buyBtnDisabled:!0,buyBtnCurrentFont:p.go,priceShow:{visibility:"visible"},checkAll:!1,itemChecked:[],isDelete:!1,deleteIDs:[]},T={getShoppingCartList:function(t){var e=t.commit;if(E.hasMore)return e(f.SHOPPINGCART_LIST_CURRENTPAGE),g.default.getShoppingCartList(E.currentPage,function(t){e(f.SHOPPINGCART_GET_LIST,t)})},deleteShoppingCartList:function(t){var e=t.commit,n=t.state,a=n.deleteIDs;(0,h.MessageBox)({title:"",showCancelButton:!0,message:"确定删除这"+a.length+"个商品?",callback:function(t){"confirm"===t&&g.default.deleteShoppingCartList(n.deleteIDs,function(t){e(f.SHOPPINGCART_DELETE_SELECT,t)})}})}},C={getShoppingList:function(t){return t.shoppingList},shoppingCartHasMore:function(t){return t.hasMore}},L=(r={},(0,s.default)(r,f.SHOPPINGCART_DELETE_ARRAY,function(t){var e=(t.shoppingList.length,[]),n=t.shoppingList.filter(function(t,e,n){return t.checked===!0});n.forEach(function(t,n,a){e.push(t.id)}),t.deleteIDs=e}),(0,s.default)(r,f.SHOPPINGCART_DELETE_SELECT,function(t,e){t.deleteIDs.forEach(function(e,n,a){var o=t.shoppingList.map(function(t){return t.id}).indexOf(e);t.shoppingList.splice(o,1),(0,h.Toast)({message:"删除成功",duration:3e3})})}),(0,s.default)(r,f.SHOPPINGCART_SELECT_ITEM,function(t,e){var n=(t.shoppingList.length,t.shoppingList.findIndex(function(t){return t.id===e}));n>-1&&(t.shoppingList[n].checked=!t.shoppingList[n].checked);var a=t.shoppingList.every(function(t,e){return t.checked});t.checkAll=a===!0;var o=t.shoppingList.some(function(t,e){return t.checked});t.buyBtnDisabled=o===!1,c.default.commit(f.SHOPPINGCART_DELETE_ARRAY),c.default.commit("CALCULATE_TOTAL_PRICE")}),(0,s.default)(r,f.CALCULATE_TOTAL_PRICE,function(t){var e=0;t.deleteIDs.forEach(function(n,a,o){var r=t.shoppingList.map(function(t){return t.id}).indexOf(n);e+=Number(t.shoppingList[r].payment)}),t.totalPrice=e}),(0,s.default)(r,f.SHOPPINGCART_SELECT_ALL,function(t){t.shoppingList.forEach(function(e){e.checked=!t.checkAll}),t.checkAll=!t.checkAll,c.default.commit(f.SHOPPINGCART_DELETE_ARRAY),c.default.commit("CALCULATE_TOTAL_PRICE"),t.buyBtnDisabled=t.checkAll===!1}),(0,s.default)(r,f.SHOPPINGCART_GET_LIST,function(t,e){e.cart_list.forEach(function(t,e,n){t.checked=!1}),t.shoppingList=t.shoppingList.concat(e.cart_list),t.hasMore=t.currentPage<d.Common.index2PageCount(e.total_index)==!0}),(0,s.default)(r,f.SHOPPINGCART_LIST_CURRENTPAGE,function(t){t.currentPage+=1,t.hasMore=!1}),(0,s.default)(r,f.SHOW_CHECKBOX,function(t){if(c.default.commit("TOP_RIGHT_CLICK_FONT",{afterFont:"完成"}),t.shoppingCartCheckbox){t.shoppingCartCheckbox=!1,t.priceShow={visibility:"visible"},t.buyBtnDisabled=!0,t.buyBtnCurrentFont=p.go,t.isDelete=!1;var e=t.shoppingList.some(function(t,e){return t.checked});t.buyBtnDisabled=e===!1}else t.shoppingCartCheckbox=!0,t.priceShow={visibility:"hidden"},t.buyBtnDisabled=!1,t.buyBtnCurrentFont=p.delete,t.isDelete=!0}),r);e.default={state:E,actions:T,getters:C,mutations:L}},27:function(t,e){t.exports=jQuery},28:function(t,e){t.exports=jWeixin},29:function(t,e){},30:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),r=a(o),i=n(4),s=n(6);e.default={computed:(0,r.default)({setLeftHeader:function(){return{"header_left my_setting":""===this.$store.getters.getPageInfo.left,"header_left back":"back"===this.$store.getters.getPageInfo.left.className}},setRightHeader:function(){return{"header_right my_message":""===this.$store.getters.getPageInfo.right,"header_right hide":this.$store.getters.getPageInfo.right.hide===!0&&void 0===this.$store.getters.getPageInfo.right.userFont,"header_right font":this.$store.getters.getPageInfo.right.userFont===!0}},searchShow:function(){return{"search hide":""===this.$store.getters.getPageInfo.type,search:""!==this.$store.getters.getPageInfo.type}},setLeftHeaderUrl:function(){return""===this.$store.getters.getPageInfo.left?"setting.html":"javascript:void(0)"},setRightHeaderUrl:function(){return void 0===this.$store.getters.getPageInfo.right.userFont?"messageList.html":"javascript:void(0)"}},(0,s.mapGetters)({pageInfo:"getPageInfo",messageCount:"getMessageCount"})),methods:{leftHeader:function(t){"javascript:void(0)"===t.target.getAttribute("href")&&i.Common.goBack()},rightHeader:function(t){void 0!==this.$store.getters.getPageInfo.right.userFont&&this.$store.commit("SHOW_CHECKBOX")}}}},31:function(t,e,n){var a,o;n(29),a=n(30);var r=n(32);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-32f7f0d4",t.exports=a},32:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"center_header"},[n("a",{class:t.setLeftHeader,attrs:{href:t.setLeftHeaderUrl},on:{click:t.leftHeader}}),t._v(" "),n("h1",[t._v(t._s(t.pageInfo.headerTitle))]),t._v(" "),n("div",{class:t.searchShow},[n("input",{attrs:{type:"text",value:"搜索目的地"}})]),t._v(" "),n("a",{class:t.setRightHeader,attrs:{href:t.setRightHeaderUrl,"data-count":t.messageCount},on:{click:t.rightHeader}},[t._v(t._s(t.pageInfo.right.font))])])},staticRenderFns:[]}},43:function(t,e){},52:function(t,e){},55:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{loadingText:"数据加载中...",finishText:"没有更多数据了",errorText:"出错了，请点击重试"}}}},56:function(t,e,n){var a,o;n(52),a=n(55);var r=n(57);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-0185a2c1",t.exports=a},57:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list_bottom"},[n("span",{staticClass:"text"},[t._v(t._s(t.loadingText))])])},staticRenderFns:[]}},69:function(t,e){},205:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(66),r=a(o),i=n(65),s=a(i),u=n(11),c=a(u),l=(n(4),n(6)),f=n(68),d=a(f),_=n(56),g=a(_);e.default={data:function(){return{loading:!1,first:!0}},created:function(){this.$store.dispatch("setPageInfo",{headerTitle:"我的收藏",left:{className:"back"},right:{hide:!0,userFont:!0,font:"編輯",fontClass:"font"}})},computed:(0,c.default)({},(0,l.mapState)({checkboxShow:function(t){return t.collect.showCheckbox},list:function(t,e){return t.collect.collectList},hasMore:function(t,e){return e.collectHasMore}})),components:{MugenScroll:d.default,listBottom:g.default},methods:{fetchData:function(){var t=this;if(!this.loading){if(this.loading=!0,!this.hasMore)return this.finishAction(),!1;(0,s.default)(r.default.mark(function e(){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getCollectList");case 2:if(t.$store.getters.collectHasMore){e.next=7;break}return t.finishAction(),e.abrupt("return",!1);case 7:t.first&&t.$store.getters.collectHasMore&&(t.fetchData(),t.first=!1);case 8:case"end":return e.stop()}},e,t)}))(),this.loading=!1}},finishAction:function(){this.loading=!0,this.$refs.listBottom.$el.children[0].classList.add("finished"),this.$refs.listBottom.$el.children[0].textContent=this.$refs.listBottom.$data.finishText}}}},217:function(t,e,n){var a,o;a=n(205);var r=n(235);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=a},235:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container padding_t_122 collect"},[n("ul",{staticClass:"bg_white"},t._l(t.list,function(e){return n("li",[n("a",{staticClass:"flex padding_24",attrs:{href:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkboxShow,expression:"checkboxShow"}],staticClass:"checkbox_wrap"},[t._m(0,!0)]),t._v(" "),n("div",{staticClass:"bg bg_lazyload",attrs:{lazy:"loading"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"item.image"}]})]),t._v(" "),n("div",{staticClass:"flex_item itemInfo flex"},[n("h1",[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"flex bottom"},[n("div",{staticClass:"price flex_item"},[t._v(t._s(e.price))]),t._v(" "),n("div",{staticClass:"num flex_item text_right"},[t._v("总销量"+t._s(e.sale_amount)+"份")])])])])])})),t._v(" "),n("mugen-scroll",{attrs:{handler:t.fetchData,"should-handle":!t.loading}},[n("list-bottom",{ref:"listBottom"})],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"checkbox_label"},[n("input",{attrs:{type:"checkbox",name:"cb"}}),n("span")])}]}}});
//# sourceMappingURL=collect.f5310bfc78906cd06611.js.map