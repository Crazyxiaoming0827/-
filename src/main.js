// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//Vuex
import store from './store'

// 引入公共css-初始化样式
import './assets/css/reset.css'

// 阿里矢量图
import './assets/ico2/iconfont.css'
// 引入图片懒加载
import { Lazyload } from 'vant'
Vue.use(Lazyload)
//引入导航购物
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
//引入商品规格
import { Sku } from 'vant';
Vue.use(Sku);
//引入滑动单元格
import { SwipeCell } from 'vant';
Vue.use(SwipeCell);



// 引入rem.js文件-rem作图
import './assets/js/rem.js'
// 引入全局的轮播--swiper
import '../node_modules/swiper/css/swiper.min.css'
import '../node_modules/swiper/js/swiper.min.js'
// 引入电商插件Vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// 引入axios文件 导航守卫
import axios from 'axios'
Vue.prototype.$http=axios




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
