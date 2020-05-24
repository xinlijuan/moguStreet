<template>
  <div class="detailComment">
    <div class="commentTop">
      <div class="top-title">用户评价</div>
      <div class="top-more">更多 &gt;</div>
    </div>
    <div class='clear'></div>
    <div class="info-user" v-if="Object.keys(commentInfo).length !== 0">
       <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span>{{commentInfo.created | showData}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class='info-img'>
      <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
    </div>
  </div>
</template>

<script>
import { dateFormat } from "../../../comment/data";
export default {
  name: "detailComment",
  props: {
    commentInfo: {
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    showData(value) {
      return dateFormat(new Date(value * 1000), "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
.commentTop{
  width: 100%;
  height: 50px;
  background: oldlace;
  line-height: 50px;
  padding:0 15px;
}
.top-title{
  float: left;
}
.top-more{
  float:right;
}
.clear{
  clear: both;
}
.info-user img{
  width: 60px;
  height: 60px;
  border-radius: 50px;
}
.info-user span{
  position: relative;
  top: -20px;
  left: 20px;
}
.info-other span:first-child{
  padding: 0  15px 0 0;
}
.info-img{
  width: 100%;
}
.info-img img{
  width: 100%;
}
</style>