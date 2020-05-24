<template>
  <div class="bottom-bar">
    <div class="all-checked left">
      <CheckedButton :ischeck="ischeck" @checkClick="allChecked"></CheckedButton>
    </div>
    <div class="left bottom-info">
      <span class="all-ch left">全选</span>
      <span class="all-price">总价：￥{{ allPrice }}</span>
      <span class="buy-end right">去结算({{ cartCount }})</span>
    </div>
  </div>
</template>

<script>
import CheckedButton from "./checkedButton";
import { mapGetters } from "vuex";
export default {
  name: "cartBottomBar",
  components: {
    CheckedButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    allPrice() {
      return this.cartList
        .filter(item => item.check)
        .reduce((preValue, item) => {
          return preValue + item.count * item.price;
        }, 0)
        .toFixed(2);
    },
    cartCount() {
      return this.cartList
        .filter(item => item.check)
        .reduce((preValue, item) => {
          return preValue + item.count;
        }, 0);
    },
    ischeck() {
      return this.cartList.every(item => {
        return item.check;
      });
    }
  },
  methods: {
    allChecked() {
      if (this.cartList.length !== 0) {
        // 判断是否有未选中按钮
        let boo = this.cartList.every(item => item.check);
        // 有未被选中的需要进行全部选中操作 没有未选中的全部取消
        if (boo) {
          this.$store.commit("clearCheck");
        } else {
          this.$store.commit("allCheck");
        }
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 44px;
  position: fixed;
  bottom: 60px;
  left: 0;
  background: gainsboro;
  text-align: center;
}
.all-checked {
  position: relative;
  top: 10px;
  width: 8%;
}
.bottom-info {
  width: 92%;
}
span {
  line-height: 44px;
}
.all-ch {
  /* padding-right: 10px; */
}
.all-price {
  font-size: 18px;
}
.buy-end {
  width: 80px;
  height: 44px;
  background: #ff4500;
  color: white;
}
</style>