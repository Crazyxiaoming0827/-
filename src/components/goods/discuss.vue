<template>
    <div class="box">
        <div>
            <!-- <van-tag :class="{
                gray: true,
                red: changeClass==1
                }" @click="fun(1)">全部评价</van-tag>
            <van-tag :class="{
                gray: true,
                red: changeClass==2
                }" @click="fun(2)">好评</van-tag>
            <van-tag :class="{
                gray: true,
                red: changeClass==3
                }" @click="fun(3)">差评</van-tag> -->
                <van-tag :class="{
                    gray:true,
                    red:changeClass==1
                }" @click="fun(1)">全部评价</van-tag>
                <van-tag :class="{
                     gray:true,
                    red:changeClass==2
                }"  @click="fun(2)">好评</van-tag>
                <van-tag :class="{
                     gray:true,
                    red:changeClass==3
                }" @click="fun(3)">差评</van-tag>
                <van-tag :class="{
                    gray:true,
                    red:changeClass==4
                }" @click="fun(4)">晒单</van-tag>


            
           
        </div>
        
        <div class="box2">
            <ul v-for="(item) in con1" :key="item.createTime">
                <li class="title">{{item.buyerName}}{{item.title2}}</li>
                <li class="box-img">
                    <!-- <img src="" alt=""> -->
                    <img  v-for="(item2) in item.postImg" :key="item2" :src="item2" alt="">  </li>
                <li class="com1">{{item.postDescribe}}</li>
                <li class="com2">管理员:{{item.adminReviews}}</li>
            </ul>

        </div>
      
    </div>
</template>
<script>
export default {
    props:['speak'],
    data() {
        return {
            // num:'1',
            // active: 0,
            changeClass: 1,
            // msg:'red',
         
            con:[],
            con1:[]
        }
    },
    
    mounted() {
        // console.log(this.speak,'这是子组件接受到的评价')
        this.con=this.speak
        // console.log(this.con,'这是全部评价')
         this.con1=this.con.all
    },
    methods: {
       fun(index){
        this.changeClass = index;
        // console.log(index)
            if(index==1){
                this.con1=this.con.all
            }else if(index==2){
                this.con1=this.con.good

            }else if(index==3){
                this.con1=this.con.bad
            }else{
                this.con1=null
            }
            
       }
    },
    
}
</script>
<style lang="" scoped>
/* .select{
    color: black
} */
.box{
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    margin-bottom:1rem;
}
.box2{
    /* border-top: 1px solid red; */
    padding-top: 0.4rem;
}
.select{
    color: black;
}
img{
    widows: 2rem;
    height: 2rem;
}
.title{
    color: orange;
}
.com1{
    color: #999999;
}
.com2{
    background-color: #dddddd;
    border-radius: 0.2rem;
    padding:0.2rem;
}
.box-img{
    display:flex;
    justify-content: flex-start;

}
li{
    padding-top: 0.2rem;
}
.gray{
    /* 999999 */
    color: #ffffff;
    background-color: #999999;
}
.red{
    color: #ffffff;
    background-color:orange
    
}

</style>