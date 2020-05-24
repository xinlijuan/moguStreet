<template>
  <div id="detail">
    <!-- 创建导航 -->
    <detailNav class="detail-nav" @titleClick="titleClick" ref="nav"></detailNav>
    <BetterScroll class="content" ref="scroll" @bsscroll="bScroll" :probeType="3">
      <detailSwiper :top-images="topImages"></detailSwiper>
      <detailBaseInfo :goods="goodsInfo" />
      <detailShopInfo :shop="shop"></detailShopInfo>
      <detaiGoodsInfo :detailInfo="detailInfo" @imgload="imageLoad"></detaiGoodsInfo>
      <detailParamsInfo :paramsInfo="paramsInfo" ref="goods"></detailParamsInfo>
      <detailComment :commentInfo="commentInfo" ref="comment"></detailComment>
      <detailRecommendInfo :recommendInfo="recommendInfo" ref="recommend"></detailRecommendInfo>
    </BetterScroll>
    <BackTop v-show="isShowTop" @click.native="backTop"></BackTop>
    <detailBottomBar @addCart="addCart"></detailBottomBar>
  </div>
</template>

<script>
import BetterScroll from "../../components/common/betterScroll/BetterScroll";
import detailNav from "./childrenComponents/detailNav";
import {
  getDetailData,
  GoodsInfo,
  GoodsParams,
  getRecommendData
} from "../../network/detail";
import detailSwiper from "./childrenComponents/detailSwiper";
import detailBaseInfo from "./childrenComponents/detailBaseInfo";
import detailShopInfo from "./childrenComponents/detailShopInfo";
import detaiGoodsInfo from "./childrenComponents/detailGoodsInfo";
import detailParamsInfo from "./childrenComponents/detailParamsInfo";
import detailComment from "./childrenComponents/detailComment";
import detailRecommendInfo from "./childrenComponents/detailRecommendInfo";
import detailBottomBar from "./childrenComponents/detailBottomBar";
import { debounce } from "../../comment/fangdou";
import { backTopMixin } from "../../comment/mixin";

export default {
  name: "detail",
  components: {
    detailNav,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detaiGoodsInfo,
    BetterScroll,
    detailParamsInfo,
    detailComment,
    detailRecommendInfo,
    detailBottomBar
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: [],
      positionY: [],
      getpositonY: null,
      currentIndex: 0
    };
  },
  mixins: [backTopMixin],
  created() {
    this.iid = this.$route.params.id;
    // 请求详情页数据
    getDetailData(this.iid).then(res => {
      // console.log(res);
      let data = res.result;
      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.goodsInfo = new GoodsInfo(
        data.columns,
        data.itemInfo,
        data.shopInfo
      );
      // 获取商家信息
      this.shop = data.shopInfo;
      //商品详情数据
      this.detailInfo = data.detailInfo;
      // 获取商品参数信息
      this.paramsInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 获取评论数据
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
        console.log(this.commentInfo);
      }
    }),
      // 请求热门推荐数据
      getRecommendData().then(res => {
        console.log(res);
        this.recommendInfo = res.data.list;
      });
    this.getpositonY = debounce(() => {
      this.positionY = [];
      this.positionY.push(0),
        this.positionY.push(-this.$refs.goods.$el.offsetTop + 44),
        this.positionY.push(-this.$refs.comment.$el.offsetTop + 44),
        this.positionY.push(-this.$refs.recommend.$el.offsetTop + 44);
    }, 300);
  },
  mounted() {
    // this.$refs.goods.$el.offsetTop; 距离顶部的偏移距离
  },
  // 数据发生变更时
  updated() {
    // this.$refs.scroll.bs.refresh();
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.bs.refresh();
      this.getpositonY();
      console.log(this.positionY);
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.bs.scrollTo(0, this.positionY[index], 1000);
    },
    // this.currentIndex != i&&(y < this.positionY[+i] && y > this.positionY[+i+1]&&i<this.positionY.length-1 || i==this.positionY.length-1&&y<this.positionY[+i])
    bScroll(position) {
      let y = position.y;
      for (let i in this.positionY) {
        if (
          (this.currentIndex != i &&
            y < this.positionY[+i] &&
            y > this.positionY[+i + 1] &&
            i < this.positionY.length - 1) ||
          (i == this.positionY.length - 1 && y < this.positionY[+i])
        ) {
          console.log(i);
          this.$refs.nav.currentIndex = i;
          this.currentIndex = i;
        }
      }
      this.getBackTopShow(position);
    },
    addCart() {
      // 获取购物车需要展示的数据添加
      let cartInfo = {};
      cartInfo.img = this.topImages[0];
      cartInfo.title = this.goodsInfo.title;
      cartInfo.desc = this.goodsInfo.desc;
      cartInfo.price = this.goodsInfo.highNowPrice;
      cartInfo.iid = this.iid;
      // 将商品加入购物车
      // this.$store.commit('addCart',cartInfo)
      this.$store.dispatch("addCart", cartInfo);
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 104px);
}
</style>