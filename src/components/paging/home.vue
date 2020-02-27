<template>
    <div class="app">
        <!--  -->
        <div class="header"> 
            <div>
                <img class="bac" :src="banner.bac" alt="">
                <img class="ban" :src="banner.ban" alt="">
            </div>
            <div class="header-search">
                <div class="search">
                        <van-search
                           
                             right-icon='search'
                             left-icon=""
                            placeholder="请输入搜索关键词"
                            shape="round"  
                            >
                            <!-- @search="onSearch" -->
                            <!-- <div slot="action" @click="onSearch">搜索</div> -->
                        </van-search>
                </div>
            </div>
                 
        </div>
        <div class="content">
            <div  >
                <h4><img :src="home_ico.i1" alt=""> {{crazy1.name}}</h4>
                <ul class="box">
                    <li @click="choose(crazy1.name,item2.id)" class="snap-up" v-for="(item2) in crazy1.list" :key="item2.id">
                        <img :src="item2.thumbnail" alt="">
                        <p><span class="price">￥123a {{item2.reduct_price}}</span>  <span style="text-decoration: line-through">￥ {{item2.original_price}}</span></p>
                        <p class="title">{{item2.name}}</p>
                    </li>
                   
                </ul>
            </div>
            <div class="test" v-for="(item) in classify1" :key="item.name">
                    <div>
                        <h4><img :src="home_ico.i2" alt="">{{item.title}}</h4>
                        <ul class="box">
                         <li class="snap-up" @click="choose(item.title,item2.id)" v-for="(item2) in item.list" :key="item2.id">
                        <img :src="item2.thumbnail" alt="">
                        <p class="title">{{item2.name}}</p>
                        <p><span class="price2">￥{{item2.reduct_price}}</span>  <span >￥{{item2.original_price}}</span></p>
   
                    </li>
                    <!-- <li class="snap-up">
                        <img :src="snapup.img1" alt="">
                        <p class="title">美国/super Mild 沐浴露500ml</p>
                        <p><span class="price2">￥88.00</span>  <span >￥96.00</span></p>
                        
                    </li>
                    <li class="snap-up">
                        <img :src="snapup.img1" alt="">
                        <p class="title">美国/super Mild 沐浴露500ml</p>
                        <p><span class="price2">￥88.00</span>  <span >￥96.00</span></p>
                        
                    </li>
                     <li class="snap-up">
                         <img :src="snapup.img1" alt="">
                         <p class="title">美国/super Mild 沐浴露500ml</p>
                         <p><span class="price2">￥88.00</span><span >￥96.00</span></p>
                       
                     </li> -->
                    </ul>
                </div>
               
            </div>


        </div>

        
    </div>
</template>
<script>
export default {
    data() {
        return {
            crazy1:[],
            classify1:[],      
            home_ico:{
                i1:require('../../assets/img/home/i1.png') ,
                i2:require('../../assets/img/home/i2.png') ,
                i3:require('../../assets/img/home/i3.png') ,
                i4:require('../../assets/img/home/i4.png') ,
            },
            banner:{
                bac:require('../../assets/img/header-1.jpg') ,
                ban:require('../../assets/img/header-banner.jpg') 
            },
        }
    },
    methods: {
        choose(a,e){
            // this.$router.push('/goods'+e+'/post/'+a)
            this.$router.push('/goods/id='+e)
        }
    },
    mounted() {//挂载声明声明周期函数中
        this.$http({
            url:'http://yd.msword.top/getIndexData'

        })
        .then(res=>{
            // console.log(res.data.data)
            this.crazy1=(res.data.data)[0]
            // console.log(res.data.data,111)
            this.classify1=(res.data.data).splice(1)
            // console.log(this.classify1,222)
           /*  this.classify1=(res.data.data) */
        })
        .catch(/* 失败函数 */)
        
    },
    
}
</script>


<style lang="" scoped>

.app{
    padding-bottom: 2rem;
}
.bac{
    width: 100%
}
.ban{
    width: 100%

}
.header-search{
    /* width:4.3rem; */
    width: 100%;
    height:0.80rem;
    position: fixed;
    top: 0;
    padding-top: 0.4rem;
    background-color: #fa4070;
}
.van-search{
    padding: 0;
    border-radius: 17px
}
.box{
    display: flex;
    /* overflow: hidden; */
    display: -webkit-box;
     overflow-x: auto;

            /*适应苹果*/
            /* overflow-y:scorll; */
            -webkit-overflow-scrolling:touch;

}
.box::-webkit-scrollbar {
            /* 隐藏滚动条 */
         display: none;

       }
.search{
    width: 4.3rem;
    margin: 0 auto;
    /* border-radius: 0.2rem; */
}
.snap-up{
    width: 3.3rem;
    background-color: #ffffff;
    margin-left: 0.25rem ;
    overflow: hidden;
    
}
.snap-up img{
    width: 3.3rem;
    height: 3.3rem;
}
.snap-up p{
    display: flex;
    justify-content: space-between;
}
.snap-up p span{
    color: #707070;
}
.snap-up .price{
    color: red;
}
.snap-up .price2{
    color:#ffa002;
}
.title{
    padding: 0.3rem 0.2rem 0;
    margin-bottom: 0.3rem;
    /* height: 0.65rem; */
    color: #666666;
    font-size:0.2rem;
    height: 0.65rem;
    line-height: 0.35rem;
 overflow: hidden;
       display: -webkit-box !important;
    -webkit-box-orient: vertical ;
    -webkit-line-clamp: 2 ;
  
}
h4 img{
    width: 0.50rem;
    height: 0.50rem;
    vertical-align:text-bottom;
}
h4{
    height: 0.8rem;
    font-size: 0.36rem;
    line-height: 0.8rem;
    margin-left: 0.25rem ;
}



 
</style>