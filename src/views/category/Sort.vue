<template>
  <div class="wrapper">
    <!-- <h2>滚动</h2>  1.内容里不允许有其他内容-->
    <div class="content">
      <ul>
        <li @click="itemClick" style="color:red">滚动的列表项点击事件</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
        <li>滚动的列表项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BS from "@better-scroll/core";
import Pullip from "@better-scroll/pull-up";

BS.use(Pullip);
export default {
  name: "sort",
  //  2.挂载完毕
  mounted() {
    let bs = new BS(".wrapper", {
      click: true,
      pullUpLoad: true ,// 4.可以实现上拉事件的监听
      // probeType:3
      //5.监听轮动时才会监听（2）  （3）自然滚动时也会监听 （0）（1）：不去监听
    });
    bs.on("scroll", position => {
      // console.log(position);
    });
    bs.on('pullingUp',()=>{
      console.log("上拉加载")
      bs.finishPullUp()  //重复滚动
    })
  },
  methods: {
    itemClick() {
      console.log("```````````````");
      // 3.无法使用js事件,click:true才可以使用
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 300px;
  height: 300px;
  background: turquoise;
  overflow: hidden;
}
</style>