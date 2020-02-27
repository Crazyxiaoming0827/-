<template>
    <div >
        <p class="header">
            <span><van-icon color='#ffffff' name="arrow-left" /></span>
            <span>{{msg}}</span>
            <span @click="fun(flag)">{{str}}</span>
        </p>
            
        <div >
           <!--  <router-link to='/login'>登录</router-link>
            <router-link to='/register'>注册</router-link> -->
            <com></com>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import com from './initial/com/com'
export default {
    data() {
        return {
            msg:'',
            str:'',
            flag:''
        }
    },
    mounted(){
            
        if(this.$route.path=='/register'){
            this.msg='注册'
            this.str='登录'
            // console.log(1111)
            this.flag='/login'
        }else{
            this.msg='登录'
            this.str='注册'
            this.flag='/register'
        }
    },
    updated(){
        if(this.$route.path=='/register'){
            this.msg='注册'
            this.str='登录'
          this.flag='/login'
        }else{
            this.msg='登录'
            this.str='注册'
            // console.log(222)
             this.flag='/register'
        }

    },
    methods: {
        fun(a){
            // console.log(a,333333)
            // console.log(111)
            this.$router.push(a)
        }
    },
    





    components:{
        com
    }
     
}
</script>
<style lang="" scoped>

.header{
    height:1.04rem ;
    color: #ffffff;
    background-color: #ff9900;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 0 0.3rem 0;
    font-size: 0.4rem;
}

    
</style>