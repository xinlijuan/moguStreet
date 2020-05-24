<template>
  <div class="list-item">
    <div class="item-button">
      <checkedButton :ischeck='item.check' @checkClick='checkChange'></checkedButton>
    </div>
    <div class="item-img">
      <img :src="item.img" alt />
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">商品描述：{{item.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">￥{{item.price}}</div>
        <div class="item-count right">x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import checkedButton from "./checkedButton";
export default {
  name: "cart-list-item",
  props: {
    item: Object
  },
  components: {
    checkedButton
  },
  methods:{
    checkChange(){
      this.$store.commit('checkChange',this.item)
    }
  }
};
</script>

<style scoped>
.list-item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid silver;
}
.item-button {
  width: 15%;
  position: relative;
  top: 50px;
  padding-right: 5px;
}
.item-img img{
  width: 80px;
  height: 90px;
  border-radius: 5px;
}
.item-info {
  font-size: 16px;
  padding: 5px 10px;
  color: #333;
  overflow: hidden;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 5px 0;
}
.item-desc{
  font-size: 14px;
}
.item-bottom {
  margin-top: 10px;
}
.item-price {
  color: #ff4500;
}
</style>