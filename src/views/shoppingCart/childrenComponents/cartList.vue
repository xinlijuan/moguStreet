<template>
  <div class="cart-list">
      <cartListItem v-for="(item,index) in cartList" :key="index" :item='item'></cartListItem>
  </div>
</template>

<script>
import cartListItem from './cartListItem'
import {mapGetters} from 'vuex'
export default {
  name: "cartlist",
  components:{
cartListItem
  },
  computed:{
    ...mapGetters([
      'cartList'
     ])
  }
};
</script>

<style>
</style>