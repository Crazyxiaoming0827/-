<template>
    <div>
        <div class="box-above">
            <p class="title">
                <van-icon name="setting-o" />
                <span>个人中心</span>
                <van-icon name="comment-o" />
            </p>
            <div class="box-head">

                <p class="head-portrait">
                    <em>
                        <van-image
                        round
                         width="2.05rem"
                        height="2.05rem"
                        src=""
                    />

                    </em>
                    
                    <span @click="fun">点击登录</span>
                </p>

            </div>
         </div>   
            <div class="box-collect">
                <span>
                    <van-icon name="like-o" color="#f29d9b" size="30"  />
                </span>
                <span>我的收藏</span> 
            </div>
            
            <p class="orderForm">
                我的订单
            </p>

            <div class="box-option">
                <p><span class="iconfont icon-daifukuan"></span>     <span>待付款</span></p>
                <p><span class="iconfont icon-daifukuan"></span>     <span>待付款</span></p>
                <p><span class="iconfont icon-daipingjia01"></span>    <span>待发货</span></p>
                <p><span class="iconfont icon-daishouhuo"></span>     <span>待评价</span></p>
                <p><span class="iconfont icon-tuikuan"></span>    <span>退款/售后</span></p>
            </div>
            <div class="site">
                <span>收货地址管理</span> 
            </div>
        
    </div>
    
</template>
<script>
export default {
    methods: {
        fun(){
            this.$router.push('/login')
        }
    },
}
</script>
<style lang="" scoped>
    .title{
        display: flex;
        justify-content: space-between;
        padding: 0.7rem 0.4rem 0 ;;
        font-size: 0.5rem;
        color: aliceblue
    }
    .box-above{
        /* height: 3.65rem; */
        background-color: #ff9900 ;
        /* overflow: hidden; */

    }
    .head-portrait{
        /* position: absolute; */  
        /* height: 4.6rem;     */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        margin-bottom:-1.5rem

    }
    .head-portrait span{
        padding: 0.2rem;
    }
    /* .box-head{
        /* margin-top:0.8rem; */
        /* background-color: #ffffff; */
   
    .box-collect{
        height:2.6rem;
        background-color:#ffff;
        margin-bottom: 0.2rem;
        padding-bottom: 0.2rem;
      
    }
    .box-collect{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    .box-collect span{
        padding-left:0.4rem ;
        /* margin-bottom:0.3rem;  */

    }
    .orderForm{
        height:1.25rem;
        background-color: #ffff;
        line-height: 1.25rem;
        padding-left: 0.4rem;
        border-bottom: 1px solid #b3b3b3;

    }
    .box-option{
        display: flex;
        padding:0 0.4rem 0;
        justify-content: space-between;
        align-items: center;
        height:1.9rem ;
        background-color: #ffff;

    }
    .box-option p{
        display: flex;
        padding-top: 0.2rem;
        height: 100%;       
        flex-direction: column;
        justify-content:space-around;
        align-items: center;
    }
    .box-option p span{
        font-size: 0.3rem;

    }
    .site{
        margin-top: 0.2rem;
        padding-left: 0.4rem;
        height: 1.25rem;
        background-color: #ffff;
        line-height: 1.25rem;
        color:#bdbdbd;
    }
    




</style>