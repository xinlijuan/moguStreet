<template>
  <div class="click-button" :class="{active:ischeck}" @click='checkClick'>
    <img src="../../../assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "checkedButton",
  props:{
    ischeck:Boolean
  },
  methods:{
    checkClick(){
      this.$emit('checkClick')
    }
  }
};
</script>

<style scoped>
.click-button {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  cursor: pointer;  /* 小手 */
}
.active {
  border: 2px solid #ccc;
    background: hotpink;
}
</style>