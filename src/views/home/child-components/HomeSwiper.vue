<template>
  <div class='home-swiper'>
    <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
        <a :href="item.link"><img :src="item.image" alt=""></a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script scoped>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
  name: "homeswiper",
  props:{
    banners:{
      type:Array,
      default(){
      return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
};
</script>

<style>
.home-swiper img{
  width:376px;
}
</style>