<template>
  <div id="app">
    <!-- 保持原来静态页面 -->
    <keep-alive exclude="detail">
    <router-view></router-view>
    </keep-alive>
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
