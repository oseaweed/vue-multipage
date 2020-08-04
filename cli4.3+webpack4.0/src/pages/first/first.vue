<template>
  <div id="first">
    <router-link to='firstview'>firstview</router-link>
    <a href="secondview">secondview</a>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "first",
  methods: {},
};
</script>
<style lang="scss">

</style>
