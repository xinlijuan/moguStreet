<template>
  <div class="navbars-item">
    <div class='items'>
      <img :src="items.image" alt />
      <p>{{items.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbars-item",
  props: {
    items: Object
  }
};
</script>

<style scoped>
.items {
  flex: 1;
  text-align: center;
}
img {
  width: 90px;
  height: 90px;
}
p{
  font-size: 15px;
}
</style>