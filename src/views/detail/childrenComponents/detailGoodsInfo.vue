<template>
  <div v-if="Object.keys(detailInfo).length!==0" class="goods-info">
    <div class="start"></div>
      <div class='info-desc'>{{detailInfo.desc}}</div>
      <div class="end"></div>
      <div class="desc">
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
        <img
          v-for="(item,index) in detailInfo.detailImage[0].list"
          :key=" index"
          :src="item"
          alt
          @load="imageLoad"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailgoodsinfo",
  props: {
    detailInfo: {
      type: Object
    }
  },
  data() {
    return {
      imgLength: 0,
      num: 0
    };
  },
  methods: {
    imageLoad() {
      this.num++;
      if (this.num == this.imgLength) {
        this.$emit("imgload");
      }
    }
  },
  watch: {
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style>
.info-list img {
  width: 100%;
  height: 100%;
}
.desc{
  padding: 15px 5px;
}
.start , .end{
 border: 1px solid #000;  
 width: 25%;
}
.start{
  float: left;
}
.end{
  float: right;
}
.info-desc{
  font-size: 16px;
  padding: 15px ;
}
</style>