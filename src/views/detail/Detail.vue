<template>
  <div id="detail">
    <!-- 创建导航 -->
    <detailNav class="detail-nav"></detailNav>
    <BetterScroll class="content" ref="scroll">
      <detailSwiper :top-images="topImages"></detailSwiper>
      <detailBaseInfo :goods="goodsInfo" />
      <detailShopInfo :shop="shop"></detailShopInfo>
      <detaiGoodsInfo :detailInfo="detailInfo" @imgload="imageLoad"></detaiGoodsInfo>
      <detailParamsInfo :paramsInfo="paramsInfo"></detailParamsInfo>
    <detailComment :commentInfo='commentInfo'></detailComment>
    </BetterScroll>
  </div>
</template>

<script>
import BetterScroll from "../../components/common/betterScroll/BetterScroll";
import detailNav from "./childrenComponents/detailNav";
import { getDetailData, GoodsInfo, GoodsParams } from "../../network/detail";
import detailSwiper from "./childrenComponents/detailSwiper";
import detailBaseInfo from "./childrenComponents/detailBaseInfo";
import detailShopInfo from "./childrenComponents/detailShopInfo";
import detaiGoodsInfo from "./childrenComponents/detailGoodsInfo";
import detailParamsInfo from "./childrenComponents/detailParamsInfo";
import detailComment from './childrenComponents/detailComment'
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
    detailComment
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {}
    };
  },
  created() {
    this.iid = this.$route.params.id;
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
        this.commentInfo = data.rate.list[0]
      }
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.bs.refresh();
    }
  }
};
</script>

<style scoped>
.detail-nav {
  position: sticky;
  top: 0;
  z-index: 100;
}
#detail {
  position: relative;
  z-index: 1000;
  background: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
</style>