<template>
  <div>
    <navbar>
      <div slot="left" @click='backHome'>
        <img src="../../../assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div 
        @click="itemClick(index)"
        class="title-item" v-for="(item,index) in titles" :key="index" :class="{active:index==currentIndex}">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from "../../../components/common/navbar/navbar";
export default {
  name: "detail-nav",
  components: {
    navbar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
    },
    backHome(){
      this.$router.back()
    }
  }
};
</script>

<style  scoped>

img {
  position: relative;
  top: 3px;
  left: 18px;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
</style>