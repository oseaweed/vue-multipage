<template>
  <div id="first">
    FirstPage
    <router-link to="/firstview">to firstview</router-link>|
    <!-- <router-link to="/">to firstHomePage</router-link>|
    <a href="second">to secondHomePage</a>|
    <a href="second/secondview">to secondview</a>-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "first",
  methods: {}
};
</script>
<style lang="scss">
</style>
