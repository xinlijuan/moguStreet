<template>
  <div id="goods-list-item">
    <img :src="getImage" alt @click="itemClick" />
    <div>
      <p>{{goodsitem.title}}</p>
      <span>￥{{goodsitem.price}}</span>
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsListItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    itemClick() {
      // console.log(this.goodsitem)
      this.$router.push("/detail/" + this.goodsitem.iid);
    }
  },
  computed: {
    getImage() {
      return this.goodsitem.image || this.goodsitem.show.img;
    }
  }
};
</script>

<style scoped>
#goods-list-item {
  width: 48%;
  flex: 1;
  padding-right: 5px;
}
img {
  width: 100%;
}
p {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
span {
  padding-right: 25px;
  color: red;
  font-size: 14px;
}
.cfav {
  position: relative;
}
.cfav::before {
  position: absolute;
  content: "";
  width: 16px;
  height: 16px;
  left: -18px;
  top: -1px;
  background: url("../../../assets/img/common/collect.svg") 0 0/16px 16px;
}
</style>