<template>
  <div class="detailshopinfo">
    <!-- 店铺名称 -->
    <div class="shop-top">
      <img :src="shop.shopLogo" alt />
      <span class="shop-title">{{shop.name}}</span>
    </div>
    <!-- 店铺详情 -->
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.cSells|sellsFilter}}</div>
          <div class="sells-text">总销量</div>
        </div> 
        <div class="info-all">
          <div class="all-count">{{shop.cGoods}}</div>
          <div class="all-text">全部宝贝</div>
        </div>
      </div>
      <!-- 右侧详细 -->
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.score}}</td>
            <td>{{item.isBetter?"高":"低"}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailshopinfo",
  props: {
    shop: {
      type: Object
    }
  },
  components: {},
  filters: {
    sellsFilter(value) {
      if (value < 10000) {
        return value
      }
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped>
.detailshopinfo{
  width:375px;
  height: 230px;
  padding: 0 20px;
}
.shop-top{
 padding: 20px 0;
}
.shop-top img{
  width: 60px;
  height: 60px;
  border: 1px grey solid;
  border-radius:100px;
}
.shop-title{
  position: relative;
  top:-20px ;
  left: 10px;
}

.info-sells{
  float: left;
}
.info-all{
  float: right;
}
.sells-text,.all-text{
  padding-top: 10px;
  font-size:14px;
}
.shop-middle-left{
  float: left;
  width: 180px;
  text-align: center;
  padding: 15px;
  border-right: 1px solid silver;
}
.shop-middle-right{
  float:right;
  font-size: 15px;
}
.shop-bottom{
  position: relative;
  top:15px ;
  right: 55px;
  float: left;
  text-align: center;
  background: gainsboro;
  border-radius: 25px;
  padding: 5px 15px;
}
tr td{
  padding-bottom: 5px;
  padding-right: 5px;
}
</style>