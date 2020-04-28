<template>
  <div class="home-recommend">
    <div v-for="item in recommend" :key="item.image">
      <img :src="item.image" alt />
      <div class='text'>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.home-recommend{
  width: 100%;
  display: flex;
  padding: 5px 5px 5px 15px;
  border-bottom:1px silver solid;
}
img{
  width:85%;
}
.text{
  padding: 5px;
}
</style>