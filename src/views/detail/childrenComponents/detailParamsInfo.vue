<template>
  <div class='params-info' v-if='Object.keys(paramsInfo).length!==0'>
    <table v-for="(item,index) in paramsInfo.size" :key='index'>
      <tr v-for="(tr,index1) in item" :key="index1">
        <td v-for="(td,index2) in tr" :key="index2">
          {{td}}
        </td>
      </tr>
    </table>
    <!-- <table class="info-params">
      <tr v-for="(item,index) in paramsInfo.info" :key="index"></tr>
      <td>{{item.key}}</td>
      <td>{{item.value}}</td>
    </table> -->
    <div class='info-img' v-if='paramsInfo.img.length!==1'>
      <img :src="paramsInfo.img" alt="">
    </div>
  </div>
</template>

<script>
export default {
name:'detailparamsInfo',
props:{
  paramsInfo:Object
}
}
</script>

<style scoped>
table{
  width: 97%;
  height: 100%;
  border-collapse: collapse;
  margin: 5px;
}
tr td{
  padding: 5px 15PX;
  border:solid 1px silver;
}
</style>