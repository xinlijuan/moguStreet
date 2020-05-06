<template>
  <div class='detail-base' v-if='Object.keys(goods).length!==0'>
    <!-- 标题 -->
    <div class="info-title">{{goods.title}}</div>
    <!-- 价格 -->
    <div>
      <span class='new-price'>{{goods.newPrice}}</span>
      <span class='old-price'><s>{{goods.oldPrice}}</s></span>
      <span class='diacount'>{{goods.discount}}</span>
    </div>
    <!-- 销量收藏 -->
    <div class="info-soles">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <!-- 退换货 -->
    <div class='info-services'>
      <input type="checkbox" >
      <span v-for='index in goods.services.length-1' :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail-base-info",
  props: {
    goods: Object
  }
};
</script>

<style scoped>
.detail-base{
  padding: 10px;
}
.info-title{
  font-size: 16px;
  color: black;
}
.info-soles{
  display: flex;
  padding: 10px;
}
.info-soles span{
  flex: 1;
  font-size: 15px;
  color: silver;
}
.info-services{
  font-size: 13px;
  padding: 15px 0;
}
.info-services img{
  width: 14px;
}
.info-services span{
margin:15px 2px 0 0;
}
.new-price{
  color: rgb(255, 13, 203);
  font-size: 30px;
  padding: 15px 0;
}
.old-price{
  font-size: 14px;
  padding-left: 13px;
}
.diacount{
  color: white;
  font-size:15px;
  background: rgb(255, 13, 203);
  border-radius: 5px;
  position: relative;
  left: 5px;
  top: -8px;
}
</style>