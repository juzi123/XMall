<template>
  <div>
    <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "../common/MyHeader";
export default {
  name: "Index",
  components: {
    MyHeader,
  },
};
</script>

<style>
</style>