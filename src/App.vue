<template>
  <div id="app">
    <router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
import foot from "./components/tabbar/foot";
export default {
  name: "app",
  components: {
    foot
  }
};
</script>

<style scoped>
</style>
