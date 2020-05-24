<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-control-item"
      @click="activeClick(index)"
      :class="{active:index==currentIndex}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      // 当前的index
      currentIndex:0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    activeClick(index) {
      this.currentIndex = index;
      this.$emit('tabclick',index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  background-color:floralwhite;
   /* position: sticky;
  top: 43px;
  z-index: 100; */
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active{
  color: pink;
}
.active span{
  border-bottom:1px solid pink;
}
</style>