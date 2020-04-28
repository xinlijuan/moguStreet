<template>
  <div>
    <tabbar>
      <tabbarItem path="/Home">
        <span class="iconfont icon-home-copy" slot="item-icon"></span>
        <span class="iconfont icon-home1-copy" slot="item-icon-active"></span>
        <div slot="item-text">首页</div>
      </tabbarItem>
      <tabbarItem path="/Find">
        <span class="iconfont icon-faxian-copy" slot="item-icon"></span>
        <span class="iconfont icon-faxain1-copy" slot="item-icon-active"></span>
        <div slot="item-text">发现</div>
      </tabbarItem>
      <tabbarItem path="/Sort">
        <span class="iconfont icon-fenlei-copy" slot="item-icon"></span>
        <span class="iconfont icon-fenlei1-copy-copy" slot="item-icon-active"></span>
        <div slot="item-text">分类</div>
      </tabbarItem>
      <tabbarItem path="/About">
        <!-- activeColor='brown' -->
        <span class="iconfont icon-guanyu-copy" slot="item-icon"></span>
        <span class="iconfont icon-guanyu1-copy" slot="item-icon-active"></span>
        <div slot="item-text">关于</div>
      </tabbarItem>
      <tabbarItem path="/Mine">
        <span class="iconfont icon-faxian-copy" slot="item-icon"></span>
        <span class="iconfont icon-faxain1-copy" slot="item-icon-active"></span>
        <div slot="item-text">我的</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "../tabbar/tabbar";
import tabbarItem from "../tabbar/tabbarItem";
export default {
  name: "foot",
  components: {
    tabbar,
    tabbarItem
  }
};
</script>

<style>

</style>