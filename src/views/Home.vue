<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AboutProject msg="My VR"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutProject from "@/components/AboutProject.vue";

export default {
  name: "home",
  components: {
    AboutProject
  }
};
</script>
