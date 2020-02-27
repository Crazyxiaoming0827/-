<template>
    <div>
        <!-- 我是商品详情 --> 
        <!-- <img :src="img" alt="">   -->
        <!-- <img  v-lazy="imga" >   -->
        <div v-for="(item) in pro" :key="item">
            <img  v-lazy="item" >
        </div>
       
    </div>
</template>
<script>
export default {
    props:['pro'],
    data() {
        return {
            imga:require('../../assets/img/goods-1.png')
        }
    },
    mounted() {
       /*  console.log( this.pro,'子组件接受的产品详情1111111111111111')
        console.log(typeof(this.pro) ,'子组类型')
        console.log( this.pro[0],'子组件接受的产品详情1111111111111111') */
    },
}

</script>
<style lang="stylus" scoped>
    img 
        width 100%
   
        
    
</style>