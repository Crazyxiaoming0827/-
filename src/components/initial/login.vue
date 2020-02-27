<template>
    <div class="box">
        <van-cell-group>
  <!-- <van-field  
    type="number"
    label="手机号"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  /> -->
  <van-field
    v-model="username"
    type="number"
    label="用户名"
    right-icon="question-o"
    placeholder="请输入登录手机号"
    @click-right-icon="$toast('question')"
    @touchstart.native.stop="show = true"
  />
 <!--  <van-number-keyboard
        v-model="username"
        :show="show"
        :maxlength="11"
    @blur="show = false"
            /> -->
  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
   
  />
</van-cell-group>
<p class="hint">忘记密码</p>
<div class="login">
    <p>
    <van-button @click="submit"  color="#ff9900"  type="primary">登录</van-button>
    </p>
</div>


        
       
        
    </div>
</template>
<script>
export default {
    data() {
    return {
        show: false,
        username:'',
        password:''
    
    }
  },
  methods: {
    submit(){
      console.log(this.username,'这是账号')
      console.log(this.password,'这是密码')
      this.$http({
        // url:'http://localhost:3000/login/cellphone?phone=15374721623&password=123'
        // url:'http://localhost:3000/login/cellphone',
        // params:{
        //   phone:this.username,
        //   password:this.password
        // },
        // url:'/api/login/cellphone?phone='++'&password='+this.password,
        // url:'http://yd.msword.top/getDetails?pid=00001'
      }).then(res=>{
        // console.log(res)
      })
      .catch()

    }
      
  },
   /* methods: {
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast('删除');
    }
  } */

}
</script>
<style lang="" scoped>
    .box{
        background-color: #ffffff;
        padding-top: 2.4rem;
    }
    .hint{
        display: flex;
        justify-content: flex-end;
    }
    .login{
        height: 2rem;
        display: flex;
        /* justify-content:center; */
        align-items: center;
    }
    .login p{
        margin: 0 auto;
    }
    .login p button {
        width: 6rem;
        height: 1rem;

    }

    .login p button span{
        font-size: 0.4rem
    }
    
    
</style>