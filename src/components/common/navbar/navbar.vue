<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>

.navbar {
  width: 100%;
  display: flex;
  line-height: 44px;
  height: 44px;
  position:sticky;
  position: -webkit-sticky;
  /* 粘性定位 */
  top:0;
  left:0;
  box-shadow: 0 -10px rgb(238, 33, 67);
  z-index: 100;
}
/* 并集选择器 */
.navbar .left,
.right {
  width: 60px;
}
.navbar .center {
  flex: 1;
  text-align: center;
}
</style>