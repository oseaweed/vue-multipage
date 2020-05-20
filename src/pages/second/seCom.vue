<template>
    <input type="button" value="点击跳转到index页面" @click="go()" />
</template>

<script>
export default {
  name: "second",
  methods: {
    go() {
      window.location.href = "/";
    }
  }
};
</script>
<style lang="scss">
#second {
  background: red;
}
</style>
