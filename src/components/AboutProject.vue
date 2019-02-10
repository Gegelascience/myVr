<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>This project integrate aframe library inside a vue project</p>
    <div v-if="error">{{ error.message }}</div>
    <div v-else>
      <p>Version of A-Frame : {{ aframeVersion }}</p>
      <p>Version of Vue : {{ vueVersion }}</p>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../httpConstants.js";

export default {
  name: "AboutProject",
  data() {
    return {
      vueVersion: null,
      aframeVersion: null,
      error: null
    };
  },
  mounted() {
    HTTP.get("/data.json")
      .then(resp => {
        this.vueVersion = resp.data.vue;
        this.aframeVersion = resp.data.aframe;
      })
      .catch(error => (this.error = error));
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>