<template>
    <div>
        <router-view></router-view>
        <div>
            <btn></btn>
        </div>       
       
    </div>
</template>
<script>
import Btn from './paging/com/btn.vue'
export default {
    components:{
        Btn
    }
    
}


</script>