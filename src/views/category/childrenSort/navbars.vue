<template>
  <div class="navbars">
   <BScroll :click='true' class='better-navbars'>
    <ul>
      <li
        v-for="(item,index) in navbars"
        :key="index"
        @click="navbarClick(index)"
        :class="{active:index==currentIndex}"
      >{{item.title}}</li>
    </ul>
   </BScroll>
  </div>
</template>

<script>
import BScroll from '../../../components/common/betterScroll/BetterScroll'
export default {
  name: "navbars",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    navbars: Array,
    lists: Array
  },
  components:{
    BScroll
  },
  methods: {
    navbarClick(index) {
      console.log(index);
      this.currentIndex = index;
      this.$emit("navClick", this.navbars[index].maitKey);
    }
  }
};
</script>

<style scoped>
.navbars {
  background: gainsboro;
  text-align: center;
  height: 100vh;
  position: fixed;
  top: 0;
  padding-top: 44px;
}
ul li {
  padding: 15px 0;
}
.active {
  color: hotpink;
}
.better-navbars{
  height: calc(100% - 94px);
}
</style>