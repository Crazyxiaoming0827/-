// 引入核心库
import Vue from 'vue'
//引入Vuex核心插件
import Vuex from 'vuex'
//使用Vuex
Vue.use(Vuex)
const store =new Vuex.Store({
    state:{
        msg:false,
        da:[
            {
              id:'1',
              site:'杭州保税区仓11',
              isChecked: false,
               num:2,
               price:12.00,
               originprice:20.00,
               desc:'描述信息1',
              title:'商品标题1',
               img1:'https://img.yzcdn.cn/vant/t-thirt.jpg',
               label2:'标签11',
               label3:'标签21'
             },
             {
              id:'2',
              site:'杭州保税区仓11',
              isChecked: false,
               num:2,
               price:2.00,
               originprice:201.00,
               desc:'描述信息1',
              title:'商品标题1',
               img1:'https://img.yzcdn.cn/vant/t-thirt.jpg',
               label2:'标签11',
               label3:'标签21'
             },
             {
              id:'3',
              site:'杭州保税区仓11',
              isChecked: false,
               num:2,
               price:2.00,
               originprice:201.00,
               desc:'描述信息1',
              title:'商品标题1',
               img1:'https://img.yzcdn.cn/vant/t-thirt.jpg',
               label2:'标签11',
               label3:'标签21'
             }
             

          ]
    }


})
export default store