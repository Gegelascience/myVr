<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> This project integrate aframe library inside a vue project generate with vue-cli</p>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
