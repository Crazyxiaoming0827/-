<template>
    <div >
        <div>
            <div class="header">
                <!-- <p class="ico-circle"><van-icon name="arrow-left" /></p> -->
                 <!-- <p><p class="ico-circle"><van-icon name="cart-o" /></p><p class="ico-circle"><van-icon name="more-o" /></p> </p>  -->
                <ul class="title-ico">
                    <li><p class="circle"><van-icon name="arrow-left" /></p> </li>
                    <li class="title-rg"><p class="circle"><van-icon name="cart-o" /></p><p class="circle"><van-icon name="more-o" /></p> </li>
                </ul>
            </div>
            <div class="swiper">
                <van-swipe   indicator-color='#ff9900' :autoplay="3000">
                <van-swipe-item  v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
                </van-swipe-item>
                </van-swipe>
            </div>
            <div class="describe">
                <ul v-for="(item) in name" :key="item.describe.id">
                    <li class="describe-title"><span class="describe-cent">{{item.name}}</span > <span class="title-red">&nbsp;  <van-icon color="red" name="star-o" /><br> 收藏</span> </li>
                    <li class="describe-bot">
                        <span class="title-red">${{item.original_price}} <br> <em class="title-gray"> ${{item.reduct_price}}</em></span>    
                         <div v-for="(item2) in item.describe" :key="item2.id">
                              <van-tag color="#ff9900"  type="primary">{{item2}}</van-tag>
                              <!-- <van-tag color="#ff9900" type="success">标签</van-tag> 
                                <br> 

                        <van-tag plain color="#ff9900" type="primary">标签</van-tag>
                        <van-tag plain color="#ff9900" type="success">标签</van-tag>
                        <van-tag plain color="#ff9900" type="danger">标签</van-tag>
                        <van-tag plain color="#ff9900" type="warning">标签</van-tag>  -->
                        </div>
                    </li>
                </ul>
                
           
            </div>
        </div>
        <div class="table change" >
            <van-tabs title-active-color='#ff9900'  v-model="activeName">
            <van-tab title="商品详情" name="a"> <dec :pro="product"></dec> </van-tab>
            <!-- <van-tab title="标签 2" name="b"><com></com> </van-tab> -->
            <van-tab title="买家口碑" name="b"><det :speak="gospeak"></det> </van-tab>
            </van-tabs>
        </div>
       <!--  <div>
            <router-view></router-view>
        </div> -->
        <div>
            <van-goods-action >
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
            <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
            <van-goods-action-button @click="showBase=true"  type="warning" text="加入购物车" />
            <van-goods-action-button @click="showBase=true" type="danger" text="立即购买" />
            </van-goods-action>
        </div>
   


            <!-- 这是组件-->
            <div>  
    <!-- 基础用法 --> 
      <div class="sku-container">
        <van-sku
          v-model="showBase"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :initial-sku="initialSku"       
          reset-stepper-on-hide
          reset-selected-sku-on-hide
          disable-stepper-input
          :close-on-click-overlay="closeOnClickOverlay" 
          :custom-sku-validator="customSkuValidator"  
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />
        <!-- <van-button
          block
          type="primary"
          @click="showBase=true"
        >
          xxxx
        </van-button> -->
      </div> 
 
</div>




  
    </div>
</template>
<script>
import dec from '../details.vue'
// import com from '../comment.vue'
// import Btn from './paging/com/btn.vue'
import det from '../discuss'
//弹窗
import skuData from '../../../assets/js/data.js'; 

export default {
    data() {
        return {

            // img:require( '../../../assets/img/header-banner.jpg'),
            activeName: 'a',
            goodschoose:false,
            images: [],
            product:[],
            gospeak:[],
            
            name:[
                {
                    name:'',
                    describe:[],
                    price:[],
                    original_price:'',
                    reduct_price:''                    
                }
            ],
            
            /* 这是弹窗 */
            skuData:skuData,
      showBase:false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      initialSku: {
        s1: '30349',
        s2: '1193',
        selectedNum: 3
      },
      customSkuValidator: () => '请选择xxx!', 


            
        }
    },
    mounted() {

       //获得产品id
        let m=(this.$route.params.id).split('=')[1]
        //拼接地址
        this.$http({
            url:'http://yd.msword.top/getDetails?pid='+m

        }).then(res=>{
            // 这是轮播接口
            this.images=res.data.data.swiperImgArr
           
        //产品价格和产品名称
            this.name[0].describe=(res.data.data).describe
            this.name[0].name=res.data.data.name

        //这是价格
            this.name[0].original_price=res.data.data.original_price
            this.name[0].reduct_price=res.data.data.reduct_price
    
        //评论
            // console.log(res.data.data.buyerReviews,'这是评论')
            this.gospeak=res.data.data.buyerReviews;
            // console.log(this.gospeak,'这是父组件的评价')
           

            //产品详情传参数
            let oo=res.data.data.shopDes
            for(var i=0;i<oo.length;i++){
                this.product.push(oo[i])
            }

        }).catch()
        
    },
    components:{
        dec,
     
        det
    },
    methods: {
        mm(){
            
            this.goodschoose=true
            // console.log(this.goodschoose,'改变状态了')
        },
         onBuyClicked(data) {
      this.$toast('buy:' + JSON.stringify(data));
      // console.log(JSON.stringify(data))
    },

    onAddCartClicked(data) {
      this.$toast('add cart:' + JSON.stringify(data));
    }, 
    },
    
    
}
</script>
<style lang="stylus" scoped>
img
    width 100%
    height 5.4rem
.swiper>>>.van-swipe__indicator 
    width 0.3rem !important
    height 0.3rem !important
.header{
    width 100%
    position absolute;
    top 0.8rem;
    z-index 3
}
.title-ico{
    display:flex;
    justify-content:space-between;
    padding:0 0.4rem 0;
    font-size:0.4rem;
    color:#ffffff;
}


.title-rg{
    display flex;
}
.title-rg p{
    margin-left 0.2rem
}
.describe{
        background-color #ffffff
}
.describe-cent{
    width 70%
    height 100%
    overflow: hidden;
    line-height 0.4rem;
    display: -webkit-box !important;
    -webkit-box-orient: vertical ;
    -webkit-line-clamp: 2 ;


}
.circle{
    width:0.6rem;
    height:0.6rem;
    background-color: #b2b2b2
    opacity:0.9
    border-radius: 50%
    display flex
    justify-content center
    align-items center
}
.describe-title{
    display flex
    justify-content space-between
    align-items center
    padding 0 0.25rem 0

}
.describe-bot 
            display flex
            justify-content space-between
            align-items center
            padding 0 0.25rem 0


.title-red
        color #eb2222
        font-size 0.4rem
.title-gray
        text-decoration line-through
        color gray
.table
        margin-top 0.3rem    
        background-color #ffffff
em
    font-size 0.2rem
.change>>>.van-tabs__line
                background-color #ff9900 !important

  
</style>