<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <Bscroll class="content" :click="true">
      <cartList></cartList>
    </Bscroll>

    <cartBottom></cartBottom>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/navbar";
import cartList from "./childrenComponents/cartList";
import { mapGetters } from "vuex"; //辅助函数
import cartBottom from "./childrenComponents/cartBottomBar";
import Bscroll from "../../components/common/betterScroll/BetterScroll";
export default {
  name: "about",
  components: {
    NavBar,
    cartList,
    cartBottom,
    Bscroll
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"])
  }
};
</script>

<style scoped>
.nav-bar {
  background: hotpink;
  color: aliceblue;
}
.cart {
  height: 100vh;
}
.content {
  height: calc(100% - 140px);
}
</style>
