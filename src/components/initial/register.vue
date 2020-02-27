<template>
    <div class="box">
        <p>{{msg}}</p>
        <van-cell-group>
  <van-field
    v-model="username"
 
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名/手机号"
    @click-right-icon="$toast('question')"

  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
  
  />
    <!-- <van-field
    v-model="phone"
    type="text"
    label="手机号"
    placeholder="请输入手机号"
  
  /> -->

  <van-field
    v-model="sms"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
   
  >
    <van-button :disabled="btn==false"  @click="SMS" slot="button" size="small" type="primary" >{{verify}}</van-button>
  </van-field>
</van-cell-group>



<div class="login">
    <p>
    <van-button :disabled="btnState==false" @click="fun"  color="#ff9900"  type="primary">下一步</van-button>
    </p>
</div>
<p> <input type="checkbox" name="" id=""  v-model="radio"> 我已阅读并同意使用条款he隐私政策</p>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            username:'',
            password:'',
            sms:'',
            msg:'',
            radio:false,
            btnState:false,
            // phone:'',
            verify:'点击获取验证',
            btn:true,
            m:60
        }
    },
    watch: {
        username(newvalue){
        //   console.log(newvalue.length,'长度')
           let myreg= /^1[3,4,5,6,7,8,9][0-9]{9}$/
        //    console.log(newvalue)
           if(newvalue==''){
               this.msg='账号或密码不能为空'
               return false
           }else if(newvalue.length<11) {

                this.msg='请输入11位手机号'
           }


           if(myreg.test(newvalue)){
            //    alert('成功了')
                // this.username=newvalue
                
                // this.btnState=true
                if (this.password=='') {
                   this.msg='请输入密码' 
                }else{
                     this.btnState=true
                    this.msg=''
                }
                
           }else{
                this.btnState=false
           }
                
            
            
        },
        password(newvalue){
            if (newvalue=='') {
                this.msg='密码不能为空'
                this.btnState=false
               return false
                
            }else{
                this.msg='验证成功'
                this.btnState=true
            }

        },
        radio(newvalue){
            // console.log(newvalue,333333333)
        }
       

        
    },
    methods: {
        SMS(){
            this.btn=false
            // let m=60
            this.verify= this.m+'秒后再次发送'
            setTimeout(function(){
                this.m--;
                this.verify= this.m+'秒后再次发送'
            },1000)

            alert('已发送')

           /*  this.$http({
                url:'http://localhost:3000/captcha/sent',
                params:{
                    phone:this.username
                }
            }) */
            

        },
        fun(){
           if (this.radio) {
           /*  //    alert('成功')验证是够注册过
                this.$http({
                    url:'http://localhost:3000/cellphone/existence/check?phone=15374721'
                }).then(res=>{
                    if(-1==res.data.exist){
                         console.log('没有注册过')
                    }
                   
                }).catch()
 */
                this.$http({
                    url:'http://localhost:3000/register/cellphone',
                    params:{
                        phone:this.username,
                         password:this.password,
                         captcha:2147,
                         nickname:'asf'

                     },
              

                }).then(res=>{
                    /* http://localhost:3000/register/cellphone?&phone=13111111111&password=1 */
                    /* http://localhost:3000/register/cellphone?phone=13xxx&password=xxxxx&captcha=1234&nickname=binary1345 */
                }).catch()

           }else{
               alert('请阅读使用条款')
               return false
           }
         
            
        }
    },

    
}
</script>
<style lang="" scoped>
    .box{
        background-color: #ffffff;
        padding-top: 2.4rem;
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