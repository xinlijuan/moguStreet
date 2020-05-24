<template>
  <div class="navbarsList">
    <navbarsListItem v-for="(item,index) in lists" :key="index" :items="item"></navbarsListItem>
  </div>
</template>

<script>
import navbarsListItem from "./navbarsListItem";
export default {
  name: "navbarsList",
  props: {
    lists:Array
  },
  components: {
    navbarsListItem
  }
};
</script>

<style scoped>
.navbarsList{
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:5px;
}
</style>