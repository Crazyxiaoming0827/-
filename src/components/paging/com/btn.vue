<template>
    <div class="box">
        <van-tabbar v-model="active"
         active-color=#ff9900>
             <van-tabbar-item                 
                 route=true
                    to="/home"                
                     >
                 <span>首页</span>
                 <img
                   slot="icon"

                   slot-scope="props"
                   :src="props.active ? icon.active1 : icon.inactive1"
                    >
            </van-tabbar-item>
            <van-tabbar-item 
                    route=true
                      to="/classify"
                    >
                      <span>分类</span>
                      <img
                        slot="icon"
                        route=true
                        slot-scope="props"
                        :src="props.active ? icon.active2 : icon.inactive2"
                      >
            </van-tabbar-item>
            <van-tabbar-item 
                         route=true
                           to="/cart"
                           :info="str"
                         >
                           <span>购物车</span>
                           <img
                             slot="icon"
                             route=true
                             
                             slot-scope="props"
                             :src="props.active ? icon.active3 : icon.inactive3"
                           >
            </van-tabbar-item>
             <van-tabbar-item 
                            route=true
                              to="/me"
                            >
                              <span>我</span>
                              <img
                                slot="icon"
                                route=true
                                slot-scope="props"
                                :src="props.active ? icon.active4 : icon.inactive4"
                              >
                </van-tabbar-item>


 
  
</van-tabbar>




     
    </div>
    


</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
    .box{
        width: 100%;
        height: 1rem;
        background-color:#ffffff;
        position: fixed;
        bottom:0;
        display: flex;
        justify-content: space-around;
    }
    .box-bot{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content:space-around;
        align-items: center;


    }
    img{
        width: 0.35rem;
        height: 0.35rem;
    }
</style>
<script>
export default {
    data() {
        return {
            str:'1',
            active: 0,
            icon: {
                active1: require('../../../assets/img/home/home2.png'),
                inactive1: require('../../../assets/img/home/home1.png'),
                active2: require('../../../assets/img/home/cl2.png') , 
                inactive2: require('../../../assets/img/home/cl1.png') , 
                 active3: require('../../../assets/img/home/car2.png') , 
                inactive3: require('../../../assets/img/home/car1.png') , 
                 active4:require('../../../assets/img/home/m2.png') , 
                inactive4: require('../../../assets/img/home/m1.png') , 
                }
        }
      
    },
     
  }
    

</script>