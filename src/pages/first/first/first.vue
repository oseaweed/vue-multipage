<template>
  <div >
    <input type="button" value="点击跳转到index页面" @click="go()" />
  </div>
</template>

<script>
export default {
  name: "first",
  methods: {
    go() {
      window.location.href = "/";
    }
  }
};
</script>
<style lang="scss">
#first {
  background: red;
}
</style>
