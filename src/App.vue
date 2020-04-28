<template>
  <div id="app">
    <router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
import foot from "./components/common/tabbar/foot";
export default {
  name: "app",
  components: {
    foot
  }
};
</script>

<style scoped>
/* 初始化页面样式 */
@import './assets/css/base.css';
</style>
