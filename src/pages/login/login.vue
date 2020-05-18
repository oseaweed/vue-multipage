<template>
  <div id="login">
    <input type="button" value="点击跳转到index页面" @click="go()" />
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    go() {
      window.location.href = "/";
    }
  }
};
</script>
<style lang="scss">
#login {
  background: red;
}
</style>
