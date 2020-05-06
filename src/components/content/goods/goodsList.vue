<template>
  <div class='goodsListItem'>
    <goodsListItem v-for=" item in goods" :key="item.img" :goodsitem="item"></goodsListItem>
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem";
export default {
  name: "goods-list",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    // console.log(this.goods);
  },
  components: {
    goodsListItem
  }
};
</script>

<style scoped>
.goodsListItem{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>