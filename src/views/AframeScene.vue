<template>
    <div class="aframeScene">
        <p>{{id}}</p>
        <SolarSystem v-if="space"></SolarSystem>
        <EiffelTower v-else></EiffelTower>
    </div>
</template>

<script>
import EiffelTower from "./EiffelTower.vue"
import SolarSystem from "./SolarSystem.vue"

export default {
    name:'aframeScene',
    data:function(){
        if (this.id === '1') {
            return{
                space:false
            };
        } else {
            return{
                space:true
            };
        }
    },
    props:['id'],
    components: {
        EiffelTower,
        SolarSystem
  }
    
}
</script>

<style scoped>
a-scene {
 height: 80vh;
 width: 80%;
 margin-left: auto;
 margin-right: auto;
 margin-top: 15px
}
</style>