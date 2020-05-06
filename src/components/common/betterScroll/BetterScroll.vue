<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import BS from "@better-scroll/core";
// import Pullup from "@better-scroll/pull-up";
// BS.use(Pullup);

import BS from "better-scroll";
export default {
  name: "betterScroll",
  data() {
    return {
      bs: [] //全局bs变量
    };
  },
  props: {
    click: {
      type: Boolean,
      default: false
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    //创建对象
    this.bs = new BS(".wrapper", {
      click: this.click,
      pullUpLoad: this.pullUpLoad, //动态决定：上拉加载功能
      probeType: this.probeType //不需要上拉加载，但需要实时监听数据
    });
    // 监听滚动事件
    this.bs.on("scroll", position => {
      // console.log(position);
      this.$emit('bsscroll',position)
    });
    // 监听上拉事件
    this.bs.on("pullingUp", () => {
      // console.log("上拉加载");
      // bs.finishPullUp(); //重复滚动事件
      this.$emit('pullingup')
    });
  },
  methods:{
    finishPullup(){
      this.bs.finishPullUp()
    }
  }
};
</script>

<style scoped>

</style>