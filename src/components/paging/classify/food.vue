<template>
    <div class="box">
        <ul>
            <li v-for="(item) in str" :key="item.id">
                <div><img :src="item.img" alt=""></div>
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            str:[
                {
                    id:'1',
                    img:require('../../../assets/img/snap-up1.jpg'),
                    title:'阿发阿发'
                },
                 {
                    id:'2',
                    img:require('../../../assets/img/snap-up1.jpg'),
                    title:'阿发阿发'
                },
                 {
                    id:'3',
                   img:require('../../../assets/img/snap-up1.jpg'),
                    title:'阿发阿发'
                },
                 {
                    id:'4',
                    img:require('../../../assets/img/snap-up1.jpg'),
                    title:'阿发阿发'
                },
                 {
                    id:'5',
                    img:require('../../../assets/img/snap-up1.jpg'),
                    title:'阿发阿发'
                },
                 {
                    id:'6',
                    img:require('../../../assets/img/snap-up1.jpg'),
                    title:'阿发阿发'
                },
                 {
                    id:'7',
                    img:require('../../../assets/img/snap-up1.jpg'),
                    title:'阿发阿发'
                },
                 {
                    id:'8',
                    img:require('../../../assets/img/snap-up1.jpg'),
                    title:'阿发阿发'
                },

                 {
                    id:'9',
                    img:require('../../../assets/img/snap-up1.jpg'),
                    title:'阿发阿发'
                },
                 {
                    id:'10',
                    img:require('../../../assets/img/snap-up1.jpg'),
                    title:'阿发阿发'
                },

            ],
            str1:[]
        }
    },
    mounted() {
        console.log(this)
        this.$http(
            {
                url:'http://yd.msword.top/getClassify'
            }
        ).then(res=>{
            console.log(res.data.data)
          this.str1= (res.data.data).splice(2,3)
           console.log(this.str1)
        }).catch()
        
    },
}
</script>
<style lang="" scoped>
    .box{
        /* height: 1000px; */
        background-color:#ffff;
    }  
    ul{
        display: flex;
        flex-wrap: wrap;
    }  
    li{
        width: 2.2rem;
        /* height: 2.4rem; */
        margin-left: 0.1rem;
        margin-top: 0.25rem;
        /* border: 0.01rem solid #1d84a7; */
        border-radius: 0.2rem;
        background-color: #ffff;
    }
   li div{
       height: 1.87rem;
       display: flex;
     border-top-left-radius:0.2rem; 
       border-top-right-radius:0.2rem; 
       /* border-radius: 0.2; */
         border: 0.02rem solid #1d84a7;
       justify-content: center;
       align-items: center;

    }
    div img{
        width: 1.7rem;
        height: 1.6rem;
    }
    p{
        height: 0.5rem;
        text-align: center;
       line-height: 0.5rem;
       color: #ffff;
       font-size: 0.2rem;
        /* align-items: 0.5rem; */
       /* border-radius: 0.2rem; */
       /* border-bottom-left-radius:0.2rem; */
        /* border-bottom-right-radius:0.2rem; */
        background-color:#1d84a7;
    }
</style>