<template>
  <div id='tabbar'>
    <slot></slot>
  </div>
</template>

<script>
export default {
name:'tabbar'
}
</script>

<style>
#tabbar{
  width: 100%;
  padding: 5px 0;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color:rgb(234, 234, 238);
  font-size:16px;
}
</style>