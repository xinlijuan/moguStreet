<template>
  <div class="sort">
    <navbar class="guding">
      <div slot="center">商品分类</div>
    </navbar>
    <!-- 左侧 -->
    <navbars @navClick="navClick" :navbars="navbars" class="left"></navbars>
    <!-- 右侧 -->
    <div class="right">
      <!-- better-scroll组件  -->
      <BScroll
        class="better-scroll"
        :click="true"
        :pullUpLoad="true"
        :probeType="3"
        ref="scroll"
        @bsscroll="homeScroll"
        @pullingup="loadMore"
      >
      <!-- 左侧点击右侧明细部分 -->
        <navbarsList :lists="lists"></navbarsList>
        <!-- +++goodslist与tabctrol组件 -->
        <TabControl
          :titles="['综合','新品','销量']"
          class="tabControl"
          @tabclick="tabClick"
          v-show="!isTabfixed"
          ref="tabControl"
        ></TabControl>

        <TabControl
          :titles="['综合','新品','销量']"
          class="TabControl"
          @tabclick="tabClick"
          v-show="!isTabfixed"
          ref="tabControl"
        ></TabControl>
        <goodsList :goods="goods[currentType].list"></goodsList>
      </BScroll>
    </div>
  </div>
</template>

<script>
import navbar from "../../components/common/navbar/navbar";
import navbars from "./childrenSort/navbars";
import goodsList from "../../components/content/goods/goodsList";
import navbarsList from "./childrenSort/navbarsList";
import BScroll from "../../components/common/betterScroll/BetterScroll";
import TabControl from "../../components/content/tabControl/TabControl";
// 导入数据
import { getNavbarsData, getNavbarsList } from "../../network/sort";
import { getHomegoods } from "../../network/home";
export default {
  name: "sort",
  data() {
    return {
      navbars: [],
      lists: [],
      key: 3627,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      isTabfixed: false,
      isShowTop: false,
      currentType: "pop"
    };
  },
  components: {
    navbar,
    navbars,
    goodsList,
    navbarsList,
    BScroll,
    TabControl
  },
  // 初始化
  created() {
    this.getNavbarsdata();
    this.getNavbarslist(this.key);
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getNavbarsdata() {
      getNavbarsData().then(res => {
        this.navbars = res.data.category.list;
      });
    },
    getNavbarslist(key) {
      getNavbarsList(key).then(res => {
        this.lists = res.data.list;
        console.log(this.lists);
      });
    },
    navClick(index) {
      this.key = index;
      console.log(this.key);
      this.getNavbarslist(this.key);
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomegoods(type, page)
        .then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullup();
        })
        .catch(err => {
          this.$refs.scroll.finishPullup();
        });
    },
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
      // this.$refs.tabFixed.currentType=index
      // this.$refs.tabControl.currentType=index
    },
    homeScroll(position) {
      // this.isShowTop = position.y < -800;
      this.isTabfixed = position.y < -403;
      // this.getBackTopShow(position)
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    }
  }
};
</script>

<style scoped>
.guding {
  position: fixed;
  top: 0;
  z-index: 200;
}
.sort {
  margin-top: 44px;
  width: 100%;
}
.left {
  width: 25%;
}
.right {
  width: 75%;
  height: 100vh;
}
.better-scroll {
  height: calc(100% - 104px);
}
</style>