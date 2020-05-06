<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in topImages" :key="item">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
name:'detail-swiper',
components:{
  Swiper,
  SwiperItem
},
props:{
    topImages:Array
  }
}
</script>

<style scoped>
img{
  width: 375px;
  height: 300px;
}
</style>