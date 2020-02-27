import Vue from 'vue'
import Router from 'vue-router'
// 引入一级路由
const Index=()=> Promise.resolve(import('@/components/index'))//首页
const Goods=()=> Promise.resolve(import('@/components/goods'))//购物页
const Initial=()=> Promise.resolve(import('@/components/initial'))//登录和注册



// 引入二级路由-首页
const Home=()=> Promise.resolve(import('@/components/paging/home'))//首页-主页
const Classify=()=> Promise.resolve(import('@/components/paging/classify'))//首页-分页
const Cart=()=> Promise.resolve(import('@/components/paging/cart'))//首页-购物车
const Me=()=> Promise.resolve(import('@/components/paging/me'))//首页-我的中心

// 引入二级路由-商品页
const Comment=()=> Promise.resolve(import('@/components/goods/comment'))//商品-评价
const Details=()=> Promise.resolve(import('@/components/goods/details'))//商品-详情
//引入二级初始化-初始
const Login=()=> Promise.resolve(import('@/components/initial/login.vue'))//初始-登录
const Register=()=> Promise.resolve(import('@/components/initial/register.vue'))//初始-注册




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',//首页
      name: 'Index',
      component: Index,
      children:[
          {
            path:'/home',
            name:'Home',
            component:Home
          },
          {
            path:'/classify',
            name:'Classify',
            component:Classify
          },
          {
            path:'/cart',
            name:'Cart',
            component:Cart
          },
          {
            path:'/me',
            name:'Me',
            component:Me
          }
      ]
      
    },
    {
      path:'/goods/:id',//购物
      name:"Goods",
      component:Goods,
      /* children:[
        {
            path:'/details',
            name:'Details',
            component:Details
        },
        {
            path:'/comment',
            name:'Comment',
            component:Comment
        }
      ] */
    },
    {
      path:'/initial',//初始
      name:'Initial',
      component:Initial,
      children:[
        { 
          path:'/login',
          name:'Login',
          component:Login
        },
        {
          path:'/register',
          name:'Register',
          component:Register
        },
      ]
    },
    {
      path:'*',
      redirect:'/home'

    }
  ]
})
