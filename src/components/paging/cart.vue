<template>
    <div>
       <div class="title"> 
           <span><van-icon name="arrow-left" /></span>
           <span>购物车</span>
        </div>
      
    <!-- 商品为空的数据 -->
          <div class="box" v-if="flag">
                  <span>车</span>
                <span>购物车还是空的</span> 
                <span>快去逛逛吧~</span>
        </div>

        <!-- 循环遍历商品 -->
    <div v-for="(item,index) in dea" :key="item.id">
            <p class="title-site">{{item.site}}</p>
 
          <van-checkbox v-model="item.isChecked" @click="radio(index)"></van-checkbox>
          <!-- <van-checkbox v-model="item.isChecke"></van-checkbox> -->
          <van-swipe-cell>
               <van-card
               :num="item.num"
               :price="item.price"
               :desc="item.desc"
               :title="item.title"
               :thumb="item.img1"
               :origin-price="item.originprice">
               <div slot="tags">


                 
                 <van-tag plain type="danger">{{item.label2}}</van-tag>
                 <van-tag plain type="danger">{{item.label3}}</van-tag>
               </div>
               <div slot="footer">
                 <van-button size="mini">+</van-button>
                 <van-button size="mini">-</van-button>
               </div>





             </van-card>
             
             <!-- 右侧滑动效果 -->
               <template slot="right">
                 <van-button square type="danger" text="删除" />
                 <van-button square type="primary" text="收藏"/>
               </template>
             </van-swipe-cell>
             
    </div>













          <!-- 结算组件 -->
          <div class="box-car"> 
                 <van-submit-bar
                       style="bottom:1rem"
                     :price="allPrice"
                     button-text="提交订单"
                     @submit="onSubmit ">
                <van-checkbox v-model="checked"  @click="checkAll()">全选</van-checkbox>
              <span slot="tip">
                        你的收货地址不支持同城送, <span>修改地址</span>
              </span>
            </van-submit-bar>
        </div>






        
    </div>
</template>

<script>
export default {
    data() {
        return {
           onSubmit:'' ,
           checked:false,
           dea:this.$store.state.da,
           flag:false,//空车
          //  checked01: false,//
     
        }
    },
    mounted() {
      // this.dea=$store.state.da
      // console.log(this.$store)
      //没有数据时候显示空车
      // console.log(this)
      if (this.dea=='') {
        this.flag=true
        
      }
      
    },
    methods: {
      // 全选
      checkAll(){
    
         this.checked=!this.checked
             //这个方法没有修改到store的数据,后续看情况修改
             this.dea.forEach(item=>{
               this.checked?item.isChecked=true:item.isChecked=false
                   }) 
      },
      radio(a){
        //当全选的时候,全选选中
        // let m=this.checked
        
        // let m=
         // console.log(this.dea[a].isChecked,'查看选中的状态')
           this.dea[a].isChecked=!this.dea[a].isChecked
         
         // console.log(this.dea[a].isChecked,'查看改变的状态')
         //遍历数组得到一个只有check状态的新数组
            let result = this.dea.map((item,index)=>{
                   return item.isChecked
                 })
                 // console.log(result,'新的数组')
             // 通过every这个数组操作的方法 去除全是true的状态
             let bool =result.every((item)=>{
               // console.log(item,'item')
               return item==true
             })
             console.log(bool,'every之后得到的结果')
             if (bool) {
               this.checked=true
             }else{
               this.checked=false
             }
               }        
       },
       //计算属性
       computed: {
         allPrice(){
           let all =0
           this.dea.map((item,index)=>{

              if (item.isChecked) {
                all+=item.price*item.num
              }


           })
           return all*100

         }
         
       },
    




}
</script>
<style lang="" scoped>
    .title{
        height: 1.4rem;
        background-color:#ff9900;
        padding:0 0.4rem 0 ;
        text-align: center;
        line-height:1.4rem;

    }
    .title-site{
        /* text-align: center */
        padding: 0.2rem 0 0.2rem 0
    }
    .box{
        display: flex;
        flex-direction: column;
        /* justify-content: */
        justify-content: center;
        align-items: center;
    }
   /*  .van-submit-bar{
       position: fixed;
       height: 2rem;
       top: 5rem;

    } */

    
</style>