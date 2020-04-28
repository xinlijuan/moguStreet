<template>
  <div id="item" @click="itemClick">
    <div v-if="isShow" class="colorChange">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: String,
    // activeColor: {
    //   type: String,
    //   default: "red"
    // }
  },
  data() {
    return {
      // isShow:true
    };
  },
  computed: {
    isShow() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      // return this.isShow ? { color: this.activeColor } : {};
       return this.isShow ? { color:'brown' } : {};
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path != this.path) {
        this.$router.push(this.path);
      }
    }
  }
};
</script>

<style>
#item {
  flex: 1;
  text-align: center;
}
.colorChange {
  color: brown;
}
</style>