<template>
<!-- <div>          -->
    <div>

    <div class="header-search">
        <div class="search">
                        <van-search
                             right-icon='search'
                             left-icon=""
                            placeholder="请输入搜索关键词"
                            shape="round"  
                            >
                            <!-- @search="onSearch" -->
                            <!-- <div slot="action" @click="onSearch">搜索</div> -->
                        </van-search>
                </div>
    </div>
    <van-sidebar v-model="activeKey">
        <div class="tab">
            <van-sidebar-item @click='flag="one"' title="母婴专区" />
            <van-sidebar-item @click='flag="two"' title="美妆护肤" />
            <van-sidebar-item @click='flag="three"' title="家居生活" />
            <van-sidebar-item @click='flag="four"' title="食品营养" />
            <van-sidebar-item @click='flag="five"' title="全球直邮" />          
        </div>
        <div :is='flag' class="com">

        </div>
        
</van-sidebar>

</div>
        <!-- <button @click='flag="one"'>切换组件一</button>
        <button @click='flag="two"'>切换组件二</button>
        <div :is='flag'></div> -->

<!-- </div> -->

   
    
</template>

<script>
import one from './classify/mom'
import two from './classify/ckincare'
import three from './classify/furniture'
import four from './classify/food'
import five from './classify/global'

export default {

    data() {
        return {
            activeKey: 0,
            flag:'one'
        }
    },
    components:{
        one,
        two,
        three,
        four,
        five
    }
    
}
</script>

<style lang="" scoped>
.van-sidebar{
    width: 100%;
    display: flex;
    margin-top: 1.1rem;
}
    .tab{
        /* flex: 1; */
        width: 2.56rem;
        min-width: 1.5rem;

    }
    .com{
        /* align-self: auto; */
        /* border: 1px solid red; */
                flex: 1

    }
    .header-search{
    /* width:4.3rem; */
    width: 100%;
    height:0.40rem;
    position: fixed;
    top: 0;
    /* padding-top: 0.4rem; */
    /* background-color: #fa4070; */
   
}
.search{
     background-color: hsl(36, 100%, 50%) !important;
}



</style>