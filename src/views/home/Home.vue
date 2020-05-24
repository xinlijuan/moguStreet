<template>
  <div class="home">
    <navbar class="navbar">
      <div slot="center">蘑菇街</div>
    </navbar>
    <TabControl :titles="['流行','新款','精选']"  @tabclick="tabClick" v-show="isTabfixed" ref='tabFixed'></TabControl>
    <BetterScroll
      class="better-scroll"
      :click="true"
      :pullUpLoad="true"
      :probeType="3"
      ref="scroll"
      @bsscroll="homeScroll"
      @pullingup="loadMore"
    >
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommend :recommend="recommend"></HomeRecommend>
      <HomePop></HomePop>
      <TabControl :titles="['流行','新款','精选']" class="TabControl" @tabclick="tabClick" v-show='!isTabfixed' ref='tabControl'></TabControl>
      <goodsList :goods="goods[currentType].list"></goodsList>
    </BetterScroll>
    <BackTop v-show="isShowTop" @click.native="backTop"></BackTop>
  </div>
</template>
 
<script>
// 公共组件
import navbar from "../../components/common/navbar/navbar";
import TabControl from "../../components/content/tabControl/TabControl";
import goodsList from "../../components/content/goods/goodsList";
import BetterScroll from "../../components/common/betterScroll/BetterScroll";
// import BackTop from "../../components/content/backTop/BackTop";
import { backTopMixin} from '../../comment/mixin'
// 获取内容

// Home的子组件
import HomeSwiper from "../home/child-components/HomeSwiper";
import { getHomeMultidata, getHomegoods } from "../../network/home";
import HomeRecommend from "../home/child-components/HomeRecommend";
import HomePop from "../home/child-components/HomePop";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommend: [],
      // 三种不同的数据分别放置不同的内容 page的值对应不同的json文件
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowTop: false,
      isTabfixed:false, //用于代替tabcontrol的显示与隐藏
    };
  },
  components: {
    navbar,
    HomeSwiper,
    HomeRecommend,
    HomePop,
    TabControl,
    goodsList,
    BetterScroll,
    // BackTop
  },
  mixins:[backTopMixin],
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 网路请求相关的方法
    getHomeMultiData() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomegoods(type, page)
        .then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          // this.$refs.scroll.finishPullup();
        })
        .catch(err => {
          this.$refs.scroll.finishPullup();
        });
    },
    // 常规事件的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabFixed.currentType=index
      this.$refs.tabControl.currentType=index
    },
    homeScroll(position) {
      // this.isShowTop = position.y < -800;
      this.isTabfixed=position.y<-603,
      this.getBackTopShow(position)
    },
    // backTop() {
    //   this.$refs.scroll.bs.scrollTo(0, 0, 2000);
    // },
    loadMore() {
      this.getHomeGoods(this.currentType);
    }
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
  z-index: 1;
}
.home .navbar {
  background: salmon;
  color: white;
}
.better-scroll {
  height: calc(100% - 94px);
  overflow: hidden;
}
</style>
