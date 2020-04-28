<template>
  <div class="home">
    <navbar class="navbar">
      <div slot="center">蘑菇街</div>
    </navbar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommend :recommend="recommend"></HomeRecommend>
    <HomePop></HomePop>
    <TabControl :titles="['流行','新款','精选']" class="TabControl"></TabControl>
    <ul>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
         <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
      <li>公共组件列表内容</li>
    </ul>
  </div>
</template>
 
<script>
// 公共组件
import navbar from "../../components/common/navbar/navbar";
import TabControl from "../../components/content/tabControl/TabControl"
// 获取内容

// Home的子组件
import HomeSwiper from "../home/child-components/HomeSwiper";
import { getHomeMultidata } from "../../network/home";
import HomeRecommend from "../home/child-components/HomeRecommend";
import HomePop from "../home/child-components/HomePop";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommend: []
    };
  },
  components: {
    navbar,
    HomeSwiper,
    HomeRecommend,
    HomePop,
    TabControl
  },
  created() {
    this.getHomeMultiData();
  },
  methods: {
    // 网路请求相关的方法
    getHomeMultiData() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    }
    // 常规事件的方法
  }
};
</script>

<style scoped>
.home .navbar {
  background: salmon;
  color: white;
}
.TabControl{
  position: sticky;
  top:43px;
}
</style>
