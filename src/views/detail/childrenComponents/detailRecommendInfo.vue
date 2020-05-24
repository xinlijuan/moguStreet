<template>
  <div class="recommend-info">
    <div class="info-head">热门推荐</div>
    <div class="recommend-info-item">
      <goodsListItem v-for="(item,index) in recommendInfo" :key="index" :goodsitem="item"></goodsListItem>
    </div>
  </div>
</template>

<script>
import goodsListItem from "../../../components/content/goods/goodsListItem";
export default {
  name: "recommendInfo",
  props: {
    recommendInfo: Array
  },
  components: {
    goodsListItem
  }
};
</script>

<style scoped>
.info-head {
  font-size: 15px;
}
.recommend-info-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>